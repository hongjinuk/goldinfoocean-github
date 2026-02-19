# 🚀 빠른 배포 가이드 (Quick Deploy)

## 웹사이트를 열고 싶으신가요?

### ⚡ 가장 빠른 방법 (GitHub Pages)

이 프로젝트는 **자동 배포**가 설정되어 있습니다!

1. 코드를 수정합니다
2. Git에 푸시합니다:
   ```bash
   git add .
   git commit -m "내 수정사항"
   git push
   ```
3. 2-3분 후 웹사이트가 자동으로 업데이트됩니다!

**웹사이트 주소**: https://ai-work-project.github.io/goldinfoocean/

### 📖 자세한 가이드

더 자세한 배포 방법은 다음 가이드를 참고하세요:
- **한국어**: [웹사이트_배포_가이드.md](./웹사이트_배포_가이드.md)
- **English**: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

## 🧪 로컬 테스트

배포 전에 로컬에서 테스트하려면:

```bash
cd static-site
python3 -m http.server 8000
```

그리고 브라우저에서 http://localhost:8000 접속

---

## 🌐 다른 배포 옵션

### Netlify (드래그 앤 드롭)
1. https://app.netlify.com 접속
2. `static-site` 폴더를 드래그 앤 드롭
3. 완료!

### Vercel (CLI)
```bash
cd static-site
npx vercel
```

### Surge (초간단)
```bash
npm install -g surge
cd static-site
surge
```

---

## ❓ 문제가 있나요?

- [웹사이트_배포_가이드.md](./웹사이트_배포_가이드.md)의 "문제 해결" 섹션을 확인하세요
- GitHub Issues에 질문을 남겨주세요

---

**💡 팁**: 가장 쉬운 방법은 GitHub Pages입니다. 이미 설정되어 있어서 `git push`만 하면 됩니다!
