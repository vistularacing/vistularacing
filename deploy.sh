#!/bin/bash
# Vistula Racing Team — Firebase Deploy Script
export PATH="$HOME/.npm-global/bin:$PATH"

echo "🔑 Logowanie do Firebase..."
firebase login

echo "🚀 Wdrażanie strony..."
firebase deploy --only hosting

echo "✅ Gotowe! Strona dostępna na https://vistularacingteam.web.app"
