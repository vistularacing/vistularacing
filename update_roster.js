const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const regex = /<div class="member-meta">\s*<span><strong>Dołączył:<\/strong>(.*?)<\/span>\s*<span><strong>Osiągnięcie:<\/strong>(.*?)<\/span>\s*<\/div>\s*<div class="member-desc-new">(.*?)<\/div>/g;

html = html.replace(regex, (match, joined, achievement, desc) => {
    return `<div class="member-meta">
                                    <span><strong>Dołączył:</strong>${joined}</span>
                                </div>
                                <div class="expand-indicator" style="margin-top: 10px; font-size: 0.75rem; color: var(--blue); cursor: pointer; text-transform: uppercase; letter-spacing: 1px;">Rozwiń profil ▼</div>
                                <div class="member-extended-bio" style="display: none; margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem; color: var(--text-dim); line-height: 1.5;">
                                    <div class="bio-section" style="margin-bottom: 10px;">
                                        <strong style="color: var(--text);">Największe Osiągnięcie:</strong><br>
                                        <span class="bio-value">${achievement.trim()}</span>
                                    </div>
                                    <div class="bio-section" style="margin-bottom: 10px;">
                                        <strong style="color: var(--text);">Biografia:</strong><br>
                                        <span class="bio-value">${desc.trim()}</span>
                                    </div>
                                    <div class="bio-section">
                                        <strong style="color: var(--text);">Inne Informacje:</strong><br>
                                        <span class="bio-value">N/A</span>
                                    </div>
                                </div>`;
});

fs.writeFileSync('index.html', html);
console.log('Update finished.');
