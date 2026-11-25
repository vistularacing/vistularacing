#!/bin/bash
# Vistula Racing Team — Firebase Deploy Script
set -euo pipefail
export PATH="$HOME/.npm-global/bin:$PATH"
cd "$(dirname "$0")"

echo "🔨 Budowanie i sprawdzanie..."
npm run build
npm run check

echo "🔑 Logowanie do Firebase..."
firebase login

echo "🚀 Wdrażanie strony..."
firebase deploy --only hosting

echo "✅ Gotowe! Strona dostępna na https://vistularacingteam.web.app"
