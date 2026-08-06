# Shromu legal site (`shromu.app`)

Static site for **App Store Connect** + in-app links.

| Page | URL |
|------|-----|
| Home / marketing | https://shromu.app/ |
| Privacy Policy | https://shromu.app/privacy/ |
| Terms of Use (EULA) | https://shromu.app/terms/ |
| Support | https://shromu.app/support/ |

Same URLs are in `LegalURLs.swift` and `ProPaywallView`.

## Contents

```
Legal/
  index.html
  privacy/index.html
  terms/index.html
  support/index.html
  styles.css
  lang.js          # UA / EN toggle
  CNAME            # shromu.app
  privacy-policy.html   # redirect → /privacy/
  terms-of-service.html # redirect → /terms/
```

## Publish (GitHub Pages)

1. Repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` (або `gh-pages`), folder: **`/Legal`**
4. DNS for `shromu.app`:
   - Apex `A` / `ALIAS` на GitHub Pages **або**
   - `CNAME` / `www` → `YOURUSER.github.io`
5. Дочекайся зеленого TLS у Pages.
6. Перевір на телефоні:
   - https://shromu.app/privacy/
   - https://shromu.app/terms/
   - https://shromu.app/support/

Альтернатива: залити вміст `Legal/` на будь-який HTTPS-хост (Netlify, Cloudflare Pages) з тим самим шляхом `/privacy/` тощо.

## Перед сабмітом

- [ ] Замінити App Store кнопку на `index.html` (реальний `app/id…` після створення застосунку в ASC)
- [ ] Переконатися, що `support@shromu.app` приймає пошту
- [ ] У ASC: Privacy URL, Support URL, Terms у Description (3.1.2)
- [ ] App Privacy questionnaire — див. `AppStoreScreenshots/APP_PRIVACY.uk.md`

Текст політиків — робочий шаблон під Shromu (локація, погода, StoreKit, AdMob, CloudKit). За потреби пройди юриста.
