import duckdb
import pandas as pd
import json
import re
import os

# ==========================================
# VISTULA AI - TELEMETRY & SETUP ANALYZER
# ==========================================
# This module reads MoTeC exported .CSV files using DuckDB for ultra-fast in-memory parsing
# and correlates the data with a given Le Mans Ultimate .SVM setup file.

class VistulaAIEngine:
    def __init__(self):
        # We initialize an in-memory DuckDB connection for high-speed SQL queries on CSVs
        self.conn = duckdb.connect(':memory:')
        print("[Vistula AI] Initialized DuckDB engine.")

    def parse_svm_setup(self, svm_file_path):
        """
        Parses a simulated .svm file into a structured dictionary.
        It respects 'Non-adjustable' and 'N/A' flags.
        """
        if not os.path.exists(svm_file_path):
            print(f"[Vistula AI] Warning: SVM file {svm_file_path} not found.")
            return {}

        setup_data = {}
        current_section = None

        with open(svm_file_path, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith('//') and not '=' in line:
                    continue  # standard comment

                # Match Section Headers like [FRONTLEFT]
                section_match = re.match(r'^\[(.*?)\]$', line)
                if section_match:
                    current_section = section_match.group(1)
                    setup_data[current_section] = {}
                    continue

                if current_section and '=' in line:
                    # Parse Key=Value//Comment
                    parts = line.split('//', 1)
                    key_val = parts[0].split('=', 1)
                    
                    if len(key_val) == 2:
                        key = key_val[0].strip()
                        raw_val = key_val[1].strip()
                        comment = parts[1].strip() if len(parts) > 1 else ""

                        # If locked by the game, keep it but mark it
                        is_locked = 'Non-adjustable' in comment or 'N/A' in comment
                        
                        try:
                            num_val = float(raw_val) if '.' in raw_val else int(raw_val)
                        except ValueError:
                            num_val = raw_val

                        setup_data[current_section][key] = {
                            "value": num_val,
                            "raw": raw_val,
                            "comment": comment,
                            "locked": is_locked
                        }

        print(f"[Vistula AI] Parsed SVM Setup. Found {len(setup_data)} sections.")
        return setup_data


    def load_telemetry_duckdb(self, csv_path):
        """
        Loads the massive telemetry CSV file using DuckDB for instant SQL querying.
        Expected format: MoTeC CSV export (Time, Steer Angle, G_Lat, G_Long, Throttle, Brake, YawRate...)
        """
        if not os.path.exists(csv_path):
            print(f"[Vistula AI] Error: Telemetry file {csv_path} not found.")
            return False
            
        try:
            # We create a virtual table pointing directly to the CSV
            self.conn.execute(f"""
                CREATE OR REPLACE VIEW telemetry AS 
                SELECT * FROM read_csv_auto('{csv_path}', normalize_names=True)
            """)
            print(f"[Vistula AI] DuckDB successfully mounted telemetry CSV: {csv_path}")
            return True
        except Exception as e:
            print(f"[Vistula AI] DuckDB failed to read CSV: {e}")
            return False


    def detect_oversteer_anomalies(self):
        """
        Uses DuckDB to query the telemetry for instances of SNAP OVERSTEER.
        Condition: High lateral G, throttle > 0, and a sharp counter-steer (Steer Angle opposite to Yaw/G_Lat).
        """
        # Note: Actual column names depend on the specific MoTeC export workspace.
        # This is an architectural mockup of the SQL logic.
        query = """
            SELECT 
                Time,
                Steer_Angle,
                G_Lat,
                Thro_Pos,
                Yaw_Rate
            FROM telemetry
            WHERE 
                abs(G_Lat) > 1.2 
                AND Thro_Pos > 20 
                AND sign(Steer_Angle) != sign(G_Lat) -- Counter steering detected
                AND abs(Steer_Angle) > 30 
            ORDER BY Time ASC
        """
        
        try:
            results = self.conn.execute(query).fetchdf()
            if len(results) > 0:
                print(f"[Vistula AI] Detected {len(results)} potential oversteer events on throttle out.")
            return results
        except Exception as e:
            print(f"[Vistula AI] Oversteer detection failed. Check column names. Error: {e}")
            return pd.DataFrame()


    def generate_ai_setup_recommendation(self, telemetry_analysis, current_setup):
        """
        Correlates the DuckDB analyzed telemetry issues with the parsed .SVM setup to suggest specific tweaks.
        """
        recommendations = []
        changes_to_svm = {}
        
        # Example: if oversteer detected, check Rear Anti-Roll Bar and Rear Springs in SVM
        if len(telemetry_analysis) > 5:  # Let's say we found more than 5 snap oversteers
            recommendations.append("AI has detected frequent snap oversteer on corner exit under throttle.")
            
            if "SUSPENSION" in current_setup:
                rear_arb = current_setup["SUSPENSION"].get("RearAntiSwaySetting")
                if rear_arb and not rear_arb["locked"]:
                    val = rear_arb["value"]
                    if isinstance(val, int) and val > 1:
                        new_val = val - 1
                        recommendations.append(f"AI Suggestion: Soften Rear ARB from {val} to {new_val} to increase rear mechanical grip.")
                        
                        # Stage change for the new .svm export
                        if "SUSPENSION" not in changes_to_svm:
                            changes_to_svm["SUSPENSION"] = {}
                        changes_to_svm["SUSPENSION"]["RearAntiSwaySetting"] = new_val

        return {"analysis": recommendations, "new_setup_parameters": changes_to_svm}


# ==========================================
# EXAMPLE USAGE MOCKUP
# ==========================================
if __name__ == "__main__":
    engine = VistulaAIEngine()
    
    # Example paths - these would be the files passed from the Node.js/Firebase backend
    sample_svm = "valkyrie_base.svm"
    sample_csv = "motec_qatar_stint.csv"
    
    # In a real environment, you'd trigger these:
    # 1. setup_data = engine.parse_svm_setup(sample_svm)
    # 2. engine.load_telemetry_duckdb(sample_csv)
    # 3. anomalies = engine.detect_oversteer_anomalies()
    # 4. result = engine.generate_ai_setup_recommendation(anomalies, setup_data)
    
    print("[Vistula AI] Engine ready and armed with DuckDB.")
