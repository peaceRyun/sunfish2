
## 제작기간

-   2024.11.23 ~ 24 기획
-   2024.11.25 ~ 27 피그마 디자인
-   2024.11.28 ~ 12.14 코딩 개발

# 📘 React Study Project

Next.js와 jsx를 기반으로 제작된 프로젝트로, 현대적인 웹 개발 사례와 기술을 활용하여 구현되었습니다.

## 🛠️ 기술 스택

- **Next.js 14**: 최신 버전의 Next.js 프레임워크
- **React 18**: 리액트 최신 버전
- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- **Chakra UI**: 접근성이 고려된 컴포넌트 라이브러리
- **React Icons**: 고품질 SVG 아이콘 세트

## 🚀 구현한 내용

- **반응형 레이아웃**: Tailwind CSS와 Chakra UI를 활용하여 다양한 디바이스에서 최적화된 반응형 UI 구현
- **아이콘 활용**: React Icons를 사용해 간단하고 직관적인 인터페이스 제공
- **타입 안정성**: TypeScript를 활용해 안정적인 코드 작성
- **최신 기능 활용**: Next.js 14의 최신 App Router와 서버 컴포넌트를 활용한 성능 최적화

## 📂 프로젝트 구조

```
sunfish2

├── public
    ├─fonts
    └─images
        ├─components
        └─pattern
            ├─encyclopeida
            ├─main
            └─mukkitlist
                └─menu
├── src
    ├─app
    │  ├─(auth)
    │  │  ├─login
    │  │  └─signup
    │  ├─about
    │  ├─api
    │  │  └─food
    │  ├─diary
    │  │  ├─components
    │  │  └─success
    │  │      └─diaryunlocked
    │  │          ├─components
    │  │          └─newdiary
    │  │              └─components
    │  ├─encyclopedia
    │  │  ├─components
    │  │  ├─maldigestion
    │  │  ├─musclepain
    │  │  └─pimple
    │  ├─entertain
    │  ├─home
    │  │  ├─about
    │  │  │  └─components
    │  │  └─components
    │  ├─meditation
    │  ├─mukkitlist
    │  │  ├─angry
    │  │  │  └─angrydishes
    │  │  │      └─[id]
    │  │  ├─anxiety
    │  │  │  └─anxietydishes
    │  │  │      └─[id]
    │  │  ├─components
    │  │  ├─sad
    │  │  │  └─saddishes
    │  │  │      └─[id]
    │  │  └─tired
    │  │      └─tireddishes
    │  │          └─[id]
    │  ├─news
    │  │  └─[id]
    │  └─tdlregister
    │      └─components
    ├─components
    │  ├─layout
    │  │  └─header
    │  ├─list
    │  ├─pattern
    │  │  └─form
    │  ├─providers
    │  └─ui
    ├─contexts
    ├─data
    ├─styles
    └─theme
        └─components
├── .eslintrc.json
├── .gitignore
├── jsconfig.json
├── next.config.js
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.js
└── yarn.lock
```
