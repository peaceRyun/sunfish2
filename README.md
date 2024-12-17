
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

### 공통

- **모바일 웹 구현**: Tailwind CSS와 Chakra UI를 활용하여 모바일에 최적화된 UI 구현
- **아이콘 활용 1**: React Icons를 사용해 간단하고 직관적인 인터페이스 제공
- **아이콘 활용 2**: Image Sprite를 사용해 통일되고 깔끔한 메인 메뉴 아이콘 구성
- **최신 기능 활용**: Next.js 14의 최신 App Router와 서버 컴포넌트를 활용한 성능 최적화

### 1. 전광판 등록
- tailwind와 charkra ui 라이브러리를 혼용하여 step화면을 구성.
- step3에서 form 태그안에 input과 textarea를 활용, 조건문(if, ||, &&)을 통한 ui/ux 디자인
- 완료 후 자동으로 메인화면으로 이동.
- 객체 형태로 기간, 우선순위, 내용 으로 구성하여 로컬저장소에 저장. 
- 메인 화면에서 전광판 슬라이드를 통해 우선순위에 따른 화면 구현.

### 2. 감정 일기장
- 암호 생성(로컬저장소에 새 암호 저장), 입력, 성공 화면 구현.
- router를 통해 unlock 페이지로 이동.
- 일기장 생성(날짜, 제목, 내용, 감정을 작성 후 로컬저장소에 저장, unlock메인에서 저장된 데이터를 가져와 ui 구현)

### 3. 증상별 백과사전
- 스트레스가 기인된 증상별 대처방법 분류 
- 정리되고 가독성이 높은 ui 디자인

### 4. 먹킷 리스트
- 스트레스 원인 감정별 분류
- 검색 기능 구현
- 목업데이터를 가공하여 이미지, 레이블, 배경색상 등을 객체로 관리하여 요리재료 메뉴 리스트 구현
- 요리 레시피 API를 끌어와서 음식 재료별 요리법 메뉴 리스트 구현 및 필터 기능 추가

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
