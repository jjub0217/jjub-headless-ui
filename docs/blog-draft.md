# 내가 직접 Headless UI 라이브러리를 만들어서 npm에 배포하기까지

## 왜 만들게 됐나

나는 두 개의 프로젝트를 운영하고 있다. 중고거래 플랫폼 "커들마켓"(컴포넌트 200개)과 인스타그램 릴스 아카이빙 서비스 "릴박스"(컴포넌트 29개).

두 프로젝트의 컴포넌트를 정리하다가, 같은 역할을 하는 컴포넌트가 프로젝트마다 따로 만들어져 있다는 걸 발견했다. 예를 들어 Tabs 컴포넌트:

- 커들마켓에 `Tabs.tsx`, `ProductPetTypeTabs.tsx`, `CommunityTabs.tsx` — 3종
- 릴박스에 `ArchiveTabs.tsx` — 1종

총 4개인데 역할은 전부 "탭 전환"이다. 스타일이 다를 뿐 로직은 같다. 그런데 커들마켓의 Tabs는 키보드 네비게이션이 있고, 릴박스의 ArchiveTabs는 없다. 접근성 수준도 제각각이었다.

이런 패턴이 Tabs만이 아니었다. Dialog, Select, 필터 토글... 반복되는 컴포넌트가 많았다.

이 문제를 어떻게 해결할 수 있을까 고민하다가, Radix UI나 Headless UI 같은 라이브러리의 존재를 알게 됐다. "스타일 없이 로직과 접근성만 제공하는 컴포넌트" — 이거면 두 프로젝트에서 공유할 수 있겠다는 생각이 들었다. 직접 만들어서 npm에 배포해보기로 했다.

## Headless UI가 뭔데?

처음에는 감이 안 왔다. "스타일이 없는 컴포넌트"라는 설명만으로는 왜 그게 가치 있는 건지 이해가 안 됐다.

여러 라이브러리를 비교해보고 이해했다:
- Material UI, Ant Design → 디자인이 이미 완성되어 있다. 가져다 쓰면 바로 보인다.
- Radix UI, Headless UI → 스타일이 거의 없다. 사용자가 알아서 커스터마이징해서 쓴다.

핵심은 두 가지였다:
1. **웹 접근성이 내장**되어 있다 (키보드 네비게이션, 스크린 리더 지원, ARIA 속성)
2. **스타일을 자유롭게 바꿀 수 있다** (className으로 아무 디자인이든 입힐 수 있음)

즉, 커들마켓에서는 파란색 둥근 탭으로, 릴박스에서는 어두운 테마 탭으로 — 같은 컴포넌트인데 완전히 다른 디자인으로 쓸 수 있는 것.

## 어떤 컴포넌트를 만들지 정하기

두 프로젝트의 229개 컴포넌트를 전수 조사했다. Headless UI로 만들 가치가 있으려면 **상호작용 + 접근성 로직이 복잡한 컴포넌트**여야 한다.

Button이나 Badge 같은 건 HTML 요소 자체가 이미 접근성을 갖고 있어서 Headless로 만들 필요가 없다. Tabs, Dialog, Select처럼 키보드 네비게이션, 포커스 관리, ARIA 속성이 복잡한 것들이 대상이었다.

Radix UI Primitives의 컴포넌트 목록도 참고해서, 최종적으로 19개를 선정했다:

| 카테고리 | 컴포넌트 |
|---|---|
| 탐색 | Tabs, NavigationMenu |
| 오버레이 | Dialog, AlertDialog, Drawer, Popover, Menu |
| 입력 | Select, RadioGroup, CheckboxGroup, Toggle, TagInput |
| 피드백 | Toast, Progress |
| 레이아웃 | Accordion, Toolbar |
| 기타 | Avatar, Label, FileUpload |

## 프로젝트 셋업

- **빌드 도구**: tsup (ESM + CJS 동시 출력)
- **문서화**: Storybook
- **언어**: TypeScript
- **패키지명**: `jjub-headless-ui`

프로젝트 이름을 정할 때 고민이 있었다. 처음에는 "cuddle-headless-ui"를 생각했는데, 릴박스에서도 쓸 건데 "cuddle"이 붙으면 어색하다. 결국 GitHub 아이디 기반의 `jjub-headless-ui`로 정했다.

## 첫 번째 컴포넌트: Tabs

Radix UI의 Tabs 접근성 패턴을 분석하고, WAI-ARIA Tabs 패턴을 참고해서 구현했다.

**구현한 것:**
- `Tabs.Root` — 상태 관리 (Controlled/Uncontrolled)
- `Tabs.List` — `role="tablist"`, 키보드 네비게이션 (화살표, Home, End)
- `Tabs.Tab` — `role="tab"`, `aria-selected`, `tabIndex` 관리
- `Tabs.Panel` — `role="tabpanel"`, `aria-labelledby`

**스토리북에서 같은 Tabs인데 다른 스타일:**
- Rounded Pill Style — 둥근 알약 형태
- Dark Theme — 어두운 배경

이걸 보면서 "아, Headless UI가 이런 거구나" 처음 체감했다.

## 가장 힘들었던 컴포넌트: Accordion

Accordion은 열리고 닫히는 애니메이션이 핵심이다. 여기서 엄청난 시간을 소모했다.

### 시도 1: CSS `@keyframes` + 자체 Presence 구현

Radix UI의 소스 코드를 분석했다. Radix는 `Presence`라는 내부 컴포넌트로 "애니메이션이 끝날 때까지 DOM 제거를 지연"하는 방식을 쓴다. 이걸 직접 구현했는데...

**문제**: 닫힐 때 "덜컹"거렸다. 애니메이션이 끝나는 순간 DOM이 제거되면서 한 프레임 깜빡이는 현상이 있었다.

### 시도 2: Radix의 Presence 코드를 그대로 따라하기

Radix의 실제 npm 패키지를 설치해서 소스 코드를 읽었다. `useStateMachine`으로 `mounted → unmountSuspended → unmounted` 3단계 상태 머신을 쓰고, `animationend` 이벤트를 감지하는 구조였다.

이걸 그대로 따라 구현했는데... 여전히 덜컹거렸다.

### 시도 3: Radix 패키지를 직접 감싸기

"직접 구현이 안 되면 Radix를 그대로 쓰자"고 판단하고, `@radix-ui/react-accordion`을 설치해서 우리 API로 감쌌다. 그런데...

**진짜 원인 발견**: 덜컹거리는 건 Presence 문제가 아니라 **Content의 padding**이 문제였다. Content에 `padding`이 있으면 높이가 0으로 줄어도 패딩이 남아서 덜컹거린다. 패딩을 안쪽 `<div>`로 옮기니까 해결됐다.

### 최종 해결: CSS Grid

결국 가장 깔끔한 방법을 찾았다:

```css
display: grid;
grid-template-rows: 0fr → 1fr;
transition: grid-template-rows 400ms;
```

CSS Grid의 `0fr → 1fr` 트랜지션을 쓰면 JavaScript로 높이를 측정할 필요 없이, 브라우저가 자연스럽게 높이를 계산해서 애니메이션한다. Radix의 복잡한 Presence 시스템 없이도 부드러운 열림/닫힘이 가능했다.

**교훈**: 복잡한 문제라고 해서 복잡한 해결책이 필요한 건 아니다.

## Headless UI 원칙과의 갈등

중간점검에서 코드 리뷰를 했더니 문제가 나왔다:

> "Dialog Overlay에 `position: fixed; display: flex`가 하드코딩되어 있습니다. Headless UI 원칙 위반입니다."

맞는 말이었다. 컴포넌트에 스타일이 들어있으면 Headless가 아니다. 전부 제거하고 스토리의 CSS로 옮겼다.

그런데 Accordion의 CSS Grid 애니메이션은? 이걸 제거하면 아코디언이 열리고 닫히지 않는다. 스토리의 CSS로 옮기면... 동작하지 않았다. (CSS specificity 문제)

결론: **애니메이션은 시각적 스타일이 아니라 구조적 동작**이다. 색상이나 폰트는 Headless에서 빼야 하지만, 열림/닫힘 애니메이션은 컴포넌트의 핵심 기능이라 내장하는 게 맞다. Radix도 Presence 시스템을 컴포넌트 안에 넣으니까.

## 스토리북 문서화에서 배운 것

스토리북을 처음 써봤는데, 몇 가지 실수를 했다:

1. **활성/비활성 스타일을 안 넣음** → "Headless니까 스타일이 없는 게 맞지 않나?"라고 생각했는데, 스토리북은 문서다. 동작을 확인할 수 있어야 한다.

2. **프로젝트 종속 이름 사용** → "커들마켓 스타일", "릴박스 스타일"로 스토리 이름을 만들었다가, npm 패키지에 특정 프로젝트 이름이 들어가면 안 된다는 걸 깨달았다. "Rounded Pill Style", "Dark Theme"으로 변경했다.

3. **한국어/영어 혼재** → 컴포넌트 코드의 에러 메시지와 주석은 영어(npm 패키지니까), 스토리의 콘텐츠 텍스트는 한국어. 이 기준을 정하는 데 시간이 걸렸다.

## npm 배포

`npm publish`를 처음 해봤다. 2FA 설정, 패스키 인증 등 예상 못한 단계가 있었지만 결국 배포에 성공했다.

배포 후 커들마켓에서 설치 테스트:
```bash
npm install jjub-headless-ui
```

19개 컴포넌트 전부 import 성공. 이 순간이 제일 뿌듯했다.

그런데 첫 배포에서 실수가 있었다. `package.json`의 `main` 필드가 `./dist/index.cjs`로 되어있었는데, 실제 파일명은 `./dist/index.js`였다. 설치는 되지만 import할 때 "Cannot find module" 에러가 났다. 버전을 올려서 재배포했다.

## 최종 결과

- **19개 Headless UI 컴포넌트**
- **npm**: `jjub-headless-ui` (v0.1.2)
- **스토리북**: https://jjub0217.github.io/jjub-headless-ui
- **GitHub**: https://github.com/jjub0217/jjub-headless-ui
- **의존성**: 0개 (React만 peer dependency)

## 돌아보며

### 잘한 점

- 두 프로젝트의 컴포넌트를 전수 조사해서 공통 패턴을 찾아낸 것
- WAI-ARIA 표준을 직접 읽고 접근성을 구현한 것
- npm 배포까지 전체 사이클을 경험한 것

### 아쉬운 점

- Accordion 애니메이션에 시간을 너무 많이 썼다. 처음부터 CSS Grid를 시도했으면 빨랐을 텐데, Radix의 복잡한 Presence 시스템을 따라하려고 삽질했다.
- Toast의 사라지는 애니메이션을 구현하지 못했다. DOM 제거 타이밍 문제인데, 시간 관계상 나타나는 애니메이션만 넣었다.

### 배운 것

- **Headless UI**는 "스타일 zero, 접근성 100%"가 핵심이다
- **`data-state` 속성**으로 CSS와 컴포넌트 로직을 분리하는 패턴
- **Compound Component 패턴** (Root + Context + 하위 컴포넌트)
- **WAI-ARIA 표준**의 구체적 요구사항 (Tabs, Dialog, Listbox, RadioGroup 등)
- 복잡한 문제에 복잡한 해결책이 필요하지 않다는 것 (Accordion의 CSS Grid)
- npm 배포의 전체 과정 (package.json 설정, 빌드, 2FA, publish)
