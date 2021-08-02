#!/usr/bin/env bash
GEM_LOC=$(bundle info --path cc-template-components) && ln -sfn $GEM_LOC bookshop__gem
npm install

[ "$JEKYLL_ENV" != 'production' ] && npm run bookshop-live

echo "📚 ✅ : Prebuild script finished"
