# 정적 사이트 (Static Site)

이 폴더에는 프레임워크 의존성 없이 순수 HTML, CSS, JavaScript로 구현된 정적 사이트가 포함되어 있습니다.

## 🚀 웹사이트로 배포하고 싶으신가요?

**👉 [웹사이트 배포 가이드 보기](./웹사이트_배포_가이드.md)** - 쉽고 자세한 단계별 가이드

이 가이드에서 다음 내용을 확인할 수 있습니다:
- ✅ 로컬에서 웹사이트 테스트하기
- ✅ GitHub Pages로 무료 배포하기 (자동 배포 설정됨!)
- ✅ 다른 무료 호스팅 옵션들 (Netlify, Vercel, Cloudflare Pages 등)
- ✅ 문제 해결 방법

**빠른 확인**: 이 저장소는 이미 GitHub Actions가 설정되어 있어, 코드를 푸시하면 자동으로 다음 주소에 배포됩니다:
```
https://ai-work-project.github.io/goldinfoocean/
```

---

## 파일 구조

```
static-site/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css      # 스타일시트
└── js/
    ├── data.js        # 성격 분석 데이터
    └── app.js         # 애플리케이션 로직
```

## 로컬 실행

### Python 사용
```bash
python3 -m http.server 8000
```

### Node.js 사용
```bash
npx serve .
```

### PHP 사용
```bash
php -S localhost:8000
```

브라우저에서 `http://localhost:8000` 접속

## 무료 호스팅 배포

### 1. GitHub Pages

#### 방법 1: 저장소 설정
1. GitHub 저장소의 Settings > Pages로 이동
2. Source를 원하는 브랜치로 설정
3. 폴더를 `/static-site`로 선택 (또는 루트에 복사)
4. Save

URL: `https://username.github.io/repository-name/`

#### 방법 2: GitHub Actions
`.github/workflows/deploy.yml` 생성:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./static-site
```

### 2. Netlify

#### 방법 1: 드래그 앤 드롭
1. [Netlify](https://app.netlify.com)에 로그인
2. "Sites" > "Add new site" > "Deploy manually"
3. `static-site` 폴더를 드래그 앤 드롭

#### 방법 2: Git 연동
1. "New site from Git" 선택
2. GitHub 저장소 연결
3. Build settings:
   - Build command: (비워두기)
   - Publish directory: `static-site`

URL: `https://random-name.netlify.app/` (커스텀 도메인 설정 가능)

### 3. Vercel
```bash
npm install -g vercel
cd static-site
vercel
```

URL: `https://project-name.vercel.app/`

### 4. Cloudflare Pages
1. [Cloudflare Pages](https://pages.cloudflare.com)에 로그인
2. "Create a project" 선택
3. GitHub 저장소 연결
4. Build settings:
   - Build command: (비워두기)
   - Build output directory: `static-site`

URL: `https://project-name.pages.dev/`

### 5. Surge.sh
```bash
npm install -g surge
cd static-site
surge
```

URL: `https://random-name.surge.sh/` (커스텀 도메인 가능)

### 6. Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Public directory: static-site
firebase deploy
```

URL: `https://project-id.web.app/`

### 7. Render
1. [Render](https://render.com)에 로그인
2. "New" > "Static Site" 선택
3. GitHub 저장소 연결
4. Publish directory: `static-site`

## 커스텀 도메인 설정

대부분의 무료 호스팅 서비스는 커스텀 도메인을 지원합니다:

1. 도메인 제공업체에서 DNS 설정
2. 호스팅 플랫폼에서 커스텀 도메인 추가
3. SSL 인증서 자동 발급 (대부분 자동)

## 기능

- ✅ 혈액형 분석
- ✅ MBTI 분석
- ✅ 호르몬 성향 분석
- ✅ 관상학 (얼굴형) 분석
- ✅ 손금 분석
- ✅ 반응형 디자인
- ✅ 모던한 UI/UX
- ✅ 한국어 지원

## 수정하기

### 데이터 수정
`js/data.js` 파일을 편집하여 콘텐츠를 수정할 수 있습니다.

### 스타일 수정
`css/style.css` 파일을 편집하여 디자인을 변경할 수 있습니다.

### 기능 추가
`js/app.js` 파일을 편집하여 새로운 기능을 추가할 수 있습니다.

## 브라우저 지원

- Chrome/Edge (최신)
- Firefox (최신)
- Safari (최신)
- 모바일 브라우저 (iOS Safari, Chrome for Android)

## 라이선스

© 2026 Gold Info Ocean. All rights reserved.
