# 멘토링 발표 흐름

## 1. Headless UI란? (2분)

- **정의**: 스타일 없이 로직 + 접근성만 제공하는 컴포넌트
- **왜 만들었는가**: 커들마켓(200개)과 릴박스(29개)에서 같은 패턴의 컴포넌트를 반복 구현하고 있었음
- **예시**: Tabs가 커들마켓에 3종, 릴박스에 1종 — 각각 다른 스타일이지만 로직은 동일

## 2. 기존 컴포넌트의 문제점 (3분)

- **스타일 고정**: 커들마켓의 Tabs를 릴박스에서 쓸 수 없음 (색상, 크기가 하드코딩)
- **접근성 불균형**: 커들마켓 Tabs는 키보드 네비게이션 있지만, 릴박스 ArchiveTabs는 없음
- **코드 중복**: Dialog/Modal을 프로젝트마다 10개+ 직접 구현

## 3. 만든 컴포넌트 (5분) — 스토리북 데모

스토리북 URL: https://jjub0217.github.io/jjub-headless-ui

### 핵심 데모 (3개)

1. **Tabs** — 같은 컴포넌트인데 Rounded Pill / Dark Theme 등 완전히 다른 디자인 적용 가능
2. **Accordion** — CSS Grid 기반 부드러운 열림/닫힘 애니메이션 내장
3. **Dialog vs AlertDialog** — Dialog는 ESC로 닫힘, AlertDialog는 확인/취소로만 닫힘

### 전체 목록 (19개)

| 카테고리 | 컴포넌트 |
|---|---|
| 탐색 | Tabs, NavigationMenu |
| 오버레이 | Dialog, AlertDialog, Drawer, Popover, Menu |
| 입력 | Select, RadioGroup, CheckboxGroup, Toggle, TagInput |
| 피드백 | Toast, Progress |
| 레이아웃 | Accordion, Toolbar |
| 기타 | Avatar, Label, FileUpload |

## 4. 기존 vs Headless 차이점 (5분)

### 접근성 Before/After

| 항목 | Before | After |
|---|---|---|
| ARIA 속성 | 일부만 구현 | 전체 자동 적용 |
| 키보드 | 컴포넌트마다 다름 | WAI-ARIA 표준 준수 |
| 포커스 관리 | 없거나 불완전 | 트랩, 복원 자동 처리 |
| 스크린 리더 | 부분적 | 완전 지원 |

### 스타일 커스터마이징

- **Before**: `className`에 Tailwind 클래스 하드코딩 → 다른 프로젝트에서 재사용 불가
- **After**: `className` + `data-state` 속성 → 어떤 스타일링 방식이든 자유롭게 적용

### 재사용성

- **Before**: 프로젝트마다 복붙 후 수정
- **After**: `npm install jjub-headless-ui` 한 줄로 설치

## 5. npm 배포 결과 (2분)

- **패키지명**: `jjub-headless-ui`
- **버전**: 0.1.1
- **의존성**: 0개 (React만 peer dependency)
- **번들 크기**: ~68KB (ESM)
- **설치 테스트**: 커들마켓에서 `npm install` 후 19개 컴포넌트 전부 import 성공

## 6. 배운 점 / 어려웠던 점 (3분)

### 배운 점
- Headless UI의 핵심은 "스타일 zero, 접근성 100%"
- `data-state` 속성으로 CSS와 컴포넌트 로직을 분리하는 패턴
- WAI-ARIA 표준(Tabs, Dialog, Listbox, RadioGroup 등)의 구체적 요구사항
- Compound Component 패턴 (Root + Context + 하위 컴포넌트)

### 어려웠던 점
- Accordion 닫힘 애니메이션 — CSS `@keyframes`는 DOM 제거 타이밍 문제, CSS Grid `transition`으로 해결
- Headless UI 원칙과 실용성 사이 균형 — 애니메이션은 구조적 동작이라 컴포넌트에 내장하는 게 맞다고 판단
- 컴포넌트 코드에 스타일을 넣지 않으면서 스토리북 데모는 보기 좋게 만드는 것
