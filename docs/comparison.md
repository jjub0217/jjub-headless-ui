# 기존 컴포넌트 vs Headless UI 비교 분석

## 요약

이 문서는 기존 프로젝트(커들마켓 200개 컴포넌트, 릴박스 29개 컴포넌트)에서 각각 구현된 UI 컴포넌트들과 jjub-headless-ui의 19개 컴포넌트를 비교합니다. 기존 컴포넌트들은 **스타일이 고정되고 프로젝트별로 재구현되어야 하는 한계**가 있었던 반면, Headless UI 라이브러리는 **스타일 없이 접근성과 상호작용만 제공하여 어떤 프로젝트에서도 자유롭게 스타일링할 수 있습니다**.

---

## 컴포넌트별 비교

### 1. Tabs (탭)

#### Before
**커들마켓 Tabs.tsx**
- 스타일이 고정됨 (`bg-primary-500`, `xl:bg-primary-300` 등)
- 프로젝트 내 4곳에서 사용됨
- 키보드 네비게이션: Home/End 키 지원, Arrow 키로 탭 이동
- aria-selected, aria-controls 지원

**릴박스 ArchiveTabs.tsx**
- 접근성 미흡: role/aria 속성 없음
- 클릭으로만 탭 변경 가능
- 키보드 네비게이션 지원 안 함
- 스타일 고정: `bg-purple-600`, `text-white` 등

#### After
**jjub-headless-ui Tabs**
```typescript
<Tabs.Root value={activeTab} onValueChange={setActiveTab}>
  <Tabs.List>
    <Tabs.Tab value="tab1">탭 1</Tabs.Tab>
    <Tabs.Tab value="tab2">탭 2</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="tab1">콘텐츠 1</Tabs.Panel>
  <Tabs.Panel value="tab2">콘텐츠 2</Tabs.Panel>
</Tabs.Root>
```
- **스타일 없음**: className으로 완전히 커스터마이징 가능
- **완전한 접근성**: role="tablist", aria-selected, aria-controls, aria-labelledby 모두 포함
- **고급 키보드 네비게이션**: 
  - Arrow Left/Right (또는 Up/Down 세로 모드)
  - Home/End 키
  - 자동 활성화(automatic) 또는 수동 활성화(manual) 모드
- **Orientation 지원**: horizontal/vertical
- **Loop 옵션**: 마지막 탭 다음이 첫 탭으로 이동

#### 주요 차이점
| 항목 | Before | After |
|------|--------|-------|
| 스타일 | 고정 (색상, 크기 등) | 완전히 없음 (data-state로 커스터마이징) |
| ARIA 속성 | 일부 지원 (relbox는 미지원) | 완전 지원 |
| 키보드 네비게이션 | 기본 지원 | 고급: 방향, Home/End, 자동/수동 |
| 재사용성 | 프로젝트별 재구현 필요 | npm package로 설치 후 모든 프로젝트에서 재사용 |

---

### 2. Dialog (대화상자)

#### Before
**커들마켓 LoginModal.tsx**
- HTML `<dialog>` 요소 사용
- ESC 키로 닫기 (자동)
- 배경 클릭으로 닫기
- 초점 관리 없음 (ESC 후 triggerRef로 복원하려 시도하지만 불완전)
- 10개 이상의 Modal 각각 직접 구현 (LoginModal, DeleteReplyModal, PostReportModal 등)

**릴박스 DeleteDialog.tsx**
- 접근성 미흡: role="dialog" 없음
- 포커스 트랩 없음
- ESC 지원 안 함
- 커스텀 오버레이로 구현

#### After
**jjub-headless-ui Dialog**
```typescript
<Dialog.Root open={open} onOpenChange={setOpen}>
  <Dialog.Trigger>열기</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Title>제목</Dialog.Title>
      <Dialog.Description>설명</Dialog.Description>
      <Dialog.Close>닫기</Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
```
- **자동 포커스 관리**: 
  - 다이얼로그 열릴 때 콘텐츠 내로 포커스 이동
  - ESC로 닫을 때 자동으로 trigger로 복원
- **포커스 트랩**: 다이얼로그 내에서만 탭 이동 가능
- **Body 스크롤 잠금**: 다이얼로그 열릴 때 자동으로 적용
- **ESC 키 처리**: onEscapeKeyDown 콜백으로 커스터마이징 가능
- **Portal 지원**: 다이얼로그를 document.body에 렌더링

**AlertDialog** (확인/취소 패턴)
- Dialog의 특수 버전
- 더 강한 의도 표현 (결정적 작업)

#### 주요 차이점
| 항목 | Before | After |
|------|--------|-------|
| 포커스 관리 | 수동, 불완전 | 자동, 완전한 트랩 |
| ESC 처리 | 기본만 지원 | 콜백으로 커스터마이징 가능 |
| Body 스크롤 | 관리 필요 | 자동 처리 |
| 접근성 | aria-labelledby, aria-describedby 지원 | 완전 지원 |
| 재사용성 | 10개+ Modal 각각 구현 | 1개 Dialog + 1개 AlertDialog로 모두 처리 |

---

### 3. Select (선택 드롭다운)

#### Before
**커들마켓 SelectDropdown.tsx**
- 키보드로 옵션 탐색 불가 (Arrow 키 지원 안 함)
- aria-haspopup, aria-expanded만 지원
- activeIndex 관리 로직이 복잡함
- 클릭으로만 선택 가능
- 마우스 밖 클릭으로 닫기: 수동 구현

#### After
**jjub-headless-ui Select**
```typescript
<Select.Root value={value} onValueChange={setValue}>
  <Select.Trigger>
    <Select.Value placeholder="선택하기" />
  </Select.Trigger>
  <Select.Content>
    <Select.Option value="option1">옵션 1</Select.Option>
    <Select.Option value="option2">옵션 2</Select.Option>
  </Select.Content>
</Select.Root>
```
- **고급 키보드 네비게이션**:
  - Arrow Up/Down: 옵션 탐색
  - Home/End: 첫/마지막 옵션
  - Enter/Space: 선택
- **aria-activedescendant**: 현재 포커스된 옵션 명확히 표현
- **자동 포커스 관리**: 드롭다운 열릴 때 자동으로 listbox로 포커스 이동
- **자동 스크롤**: ArrowUp/Down으로 탐색 시 현재 옵션이 뷰포트에 보이도록 자동 스크롤
- **Outside Click**: 외부 클릭 시 자동 닫기

#### 주요 차이점
| 항목 | Before | After |
|------|--------|-------|
| Arrow 키 탐색 | 미지원 | 완전 지원 |
| aria-activedescendant | 미지원 | 지원 |
| Home/End 키 | 미지원 | 지원 |
| 자동 스크롤 | 수동 (scrollIntoView 직접 호출) | 자동 |
| 타입 안전성 | 낮음 | TypeScript 제네릭으로 강화 가능 |

---

### 4. Accordion (아코디언)

#### Before
**커들마켓 DetailFilter.tsx** (일부 접근성)
- role="button" 수동 관리
- CSS로 열기/닫기 애니메이션 (복잡함)
- 단일/다중 모드 섞여 있음
- 키보드 네비게이션 불완전

#### After
**jjub-headless-ui Accordion**
```typescript
<Accordion.Root type="single" collapsible>
  <Accordion.Item value="item1">
    <Accordion.Header>
      <Accordion.Trigger>제목 1</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content>콘텐츠 1</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
```
- **CSS Grid 애니메이션 내장**:
  ```css
  grid-template-rows: isOpen ? '1fr' : '0fr';
  transition: grid-template-rows 400ms cubic-bezier(0.87, 0, 0.13, 1);
  ```
- **단일/다중 모드**: type="single" 또는 type="multiple"
- **Collapsible 옵션**: 열린 항목을 다시 클릭해서 닫을 수 있는지 제어
- **완전한 키보드 네비게이션**: Arrow Up/Down, Home/End
- **aria-expanded, aria-controls**: 모든 항목에 자동 설정

#### 주요 차이점
| 항목 | Before | After |
|------|--------|-------|
| 애니메이션 | CSS 복잡함 | CSS Grid로 간단함 |
| 단일/다중 | 각각 구현 | type prop으로 선택 |
| Collapsible 제어 | 불가능 | collapsible prop으로 제어 |
| 키보드 | 불완전 | 완전 |

---

### 5. Toggle (토글 스위치)

#### Before
**릴박스 ReelCard.tsx** (방문 토글)
```typescript
<button onClick={toggleVisited}>
  {visited ? '방문완료' : '방문안함'}
</button>
```
- role 없음 (switch가 아님)
- aria-checked 없음
- 접근성 미흡

#### After
**jjub-headless-ui Toggle**
```typescript
<Toggle.Root pressed={pressed} onPressedChange={setPressed}>
  <span>{pressed ? 'ON' : 'OFF'}</span>
</Toggle.Root>
```
- **role="switch"**: 스크린 리더에 스위치로 인식
- **aria-checked**: 현재 상태 명확히 표현
- **data-state**: 'on'/'off'로 스타일 커스터마이징
- **완전한 키보드 지원**: Space/Enter 키로 토글

---

### 6. Radio Group (라디오 버튼 그룹)

#### After (새로운 기능)
```typescript
<RadioGroup.Root value={value} onValueChange={setValue}>
  <RadioGroup.Item value="option1">
    <RadioGroup.Indicator />
    <label>옵션 1</label>
  </RadioGroup.Item>
</RadioGroup.Root>
```
- **role="radio"**: 각 항목
- **aria-checked**: 선택 상태
- **자동 키보드 네비게이션**: Arrow Up/Down, Home/End
- **tabIndex 관리**: 선택된 항목만 0

---

### 7. Checkbox Group (체크박스 그룹)

#### After (새로운 기능)
- 여러 체크박스 관리 (배열 상태)
- 각 체크박스: role="checkbox", aria-checked
- 완전한 키보드 지원: Space 키로 토글
- aria-labelledby: 라벨과 연결

---

### 8. Toast (토스트 알림)

#### Before
**커들마켓 ToastContainer.tsx, ToastCard.tsx, ToastProgress.tsx**
- 3개 파일로 분산됨
- 상태 관리: Zustand store
- 자동 닫기 타이머 수동 관리
- 접근성: role="alert" 기본만 지원

#### After
**jjub-headless-ui Toast**
```typescript
<Toast.Root open={open} onOpenChange={setOpen}>
  <Toast.Trigger>알림 보기</Toast.Trigger>
  <Toast.Content>
    <Toast.Title>제목</Toast.Title>
    <Toast.Description>설명</Toast.Description>
    <Toast.Close />
  </Toast.Content>
</Toast.Root>
```
- **자동 닫기**: duration prop으로 제어 (기본 5초)
- **role="status"**: 라이브 리전 역할
- **aria-live="polite"**: 스크린 리더 자동 읽음
- **Swipe to dismiss**: 모바일에서 스와이프로 닫기 (선택사항)

---

### 9. Drawer (슬라이드 메뉴)

#### After (새로운 기능)
```typescript
<Drawer.Root open={open} onOpenChange={setOpen}>
  <Drawer.Trigger>메뉴</Drawer.Trigger>
  <Drawer.Content>
    <Drawer.Title>메뉴</Drawer.Title>
    <Drawer.Close />
  </Drawer.Content>
</Drawer.Root>
```
- **포커스 트랩**: 드로어 열릴 때 내부로 포커스 제한
- **드래그 지원**: 모바일에서 드래그로 닫기
- **ESC 키**: 닫기
- **aria-modal, aria-labelledby**: 접근성 완전 지원

---

### 10. Popover (팝오버)

#### After (새로운 기능)
```typescript
<Popover.Root>
  <Popover.Trigger>트리거</Popover.Trigger>
  <Popover.Content>
    <Popover.Title>제목</Popover.Title>
    <Popover.Close />
  </Popover.Content>
</Popover.Root>
```
- **자동 위치 결정**: 화면 벗어나면 자동으로 위치 조정
- **포커스 관리**: 열릴 때/닫힐 때 자동 처리
- **ESC 키**: 닫기
- **Outside click**: 외부 클릭 시 닫기

---

### 11. Menu (메뉴)

#### After (새로운 기능)
```typescript
<Menu.Root>
  <Menu.Trigger>메뉴</Menu.Trigger>
  <Menu.Content>
    <Menu.Item>항목 1</Menu.Item>
    <Menu.Item>항목 2</Menu.Item>
  </Menu.Content>
</Menu.Root>
```
- **role="menu", role="menuitem"**: 시맨틱한 구조
- **화살표 키 네비게이션**: Arrow Up/Down으로 이동
- **Enter/Space**: 항목 선택
- **aria-activedescendant**: 현재 항목 표시

---

### 12. Tag Input (태그 입력)

#### After (새로운 기능)
```typescript
<TagInput.Root value={tags} onValueChange={setTags}>
  <TagInput.Input placeholder="태그 입력..." />
</TagInput.Root>
```
- **쉼표/Enter로 태그 추가**: 구분자 커스터마이징 가능
- **Delete 키로 삭제**: 마지막 태그부터 삭제
- **role="listbox"**: 태그 목록
- **aria-label**: 각 태그 레이블

---

### 13. Progress (진행률)

#### After (새로운 기능)
```typescript
<Progress.Root value={50} max={100}>
  <Progress.Track>
    <Progress.Fill />
  </Progress.Track>
</Progress.Root>
```
- **role="progressbar"**: 진행 상태 명확히 표현
- **aria-valuenow, aria-valuemin, aria-valuemax**: 스크린 리더 지원
- **스타일 없음**: width/height는 커스터마이징

---

### 14. File Upload (파일 업로드)

#### After (새로운 기능)
```typescript
<FileUpload.Root onFilesChange={setFiles}>
  <FileUpload.Input accept=".jpg,.png" multiple />
</FileUpload.Root>
```
- **Drag & drop**: 파일 드래그 드롭 지원
- **파일 검증**: 크기, 타입 제어
- **Progress**: 업로드 진행률 추적 (선택사항)

---

### 15. Avatar (아바타)

#### Before
**커들마켓 ProfileAvatar.tsx, SellerAvatar.tsx**
- 프로젝트별 구현
- 기본 이미지 처리

#### After
**jjub-headless-ui Avatar**
```typescript
<Avatar.Root>
  <Avatar.Image src={url} alt={name} />
  <Avatar.Fallback>JD</Avatar.Fallback>
</Avatar.Root>
```
- **이미지 로드 실패 처리**: 자동으로 Fallback으로 전환
- **스타일 없음**: 모든 것 커스터마이징 가능

---

### 16. Label (라벨)

#### After (새로운 기능)
```typescript
<Label.Root htmlFor="input-id">라벨 텍스트</Label.Root>
<input id="input-id" />
```
- **htmlFor 연결**: 시맨틱한 연결
- **role 없음**: div로 가벼움

---

### 17. Toolbar (도구모음)

#### After (새로운 기능)
```typescript
<Toolbar.Root>
  <Toolbar.Button>버튼 1</Toolbar.Button>
  <Toolbar.Separator />
  <Toolbar.Button>버튼 2</Toolbar.Button>
</Toolbar.Root>
```
- **role="toolbar"**: 도구모음 의미
- **로비안 네비게이션**: Tab으로 그룹 간 이동, Arrow로 항목 간 이동
- **aria-orientation**: 방향 지정

---

### 18. Navigation Menu (네비게이션 메뉴)

#### After (새로운 기능)
```typescript
<NavigationMenu.Root>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>메뉴</NavigationMenu.Trigger>
      <NavigationMenu.Content>서브메뉴</NavigationMenu.Content>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu.Root>
```
- **복잡한 메뉴 구조**: 다중 레벨 지원
- **키보드 네비게이션**: 화살표, Tab, ESC
- **자동 포커스**: 서브메뉴 열릴 때 자동 포커스

---

## 접근성 비교 (Before/After)

| 항목 | Before (기존) | After (Headless UI) |
|------|-------------|-------------------|
| **ARIA Roles** | 부분적 (일부 컴포넌트 미지원) | 완전: role="dialog", role="tab", role="switch" 등 모두 지원 |
| **Keyboard Navigation** | 기본만 (Arrow, Home/End) | 고급: 모든 키보드 인터랙션 표준화 |
| **Focus Management** | 수동 (불완전) | 자동 (포커스 트랩, 복원) |
| **Screen Reader** | 제한적 (aria-label 등만) | 완전 (aria-live, aria-activedescendant 등) |
| **ARIA Attributes** | aria-selected, aria-expanded | + aria-checked, aria-disabled, aria-controls 등 모두 |
| **Live Regions** | 미지원 | role="status", aria-live="polite" |
| **Label Association** | htmlFor 지원 | htmlFor + aria-labelledby 모두 |

**결론**: Headless UI는 WCAG 2.1 AA 수준의 완전한 접근성을 제공합니다.

---

## 스타일 커스터마이징 차이

### Before: 스타일이 고정됨
```typescript
// 커들마켓 Tabs.tsx
className={cn(
  'bg-primary-100 flex-1 cursor-pointer rounded-full px-4 py-2 text-sm',
  activeTab === tab.id
    ? 'bg-primary-500 xl:bg-primary-300 font-bold text-white'
    : 'hover:bg-primary-500 hover:text-white text-gray-900'
)}
```
- 스타일이 컴포넌트 내에 하드코딩됨
- 다른 프로젝트에 가져가면 스타일이 달라짐 (primary-500 색상이 없을 수 있음)
- 프로젝트별로 복사 후 수정 필요

### After: 스타일이 없음 (완전 커스터마이징)
```typescript
<Tabs.Tab
  value="tab1"
  className="px-4 py-2 rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white"
>
  탭 1
</Tabs.Tab>
```
- 컴포넌트는 HTML만 제공
- `data-state`, `data-disabled` 등의 속성으로 상태 선택
- Tailwind, CSS-in-JS, 일반 CSS 모두 사용 가능
- 같은 npm package를 여러 프로젝트에서 동일하게 사용

---

## 재사용성 차이

### Before: 프로젝트별 재구현
| 컴포넌트 | 커들마켓 | 릴박스 | 비고 |
|--------|---------|--------|-----|
| Tabs | Tabs.tsx | ArchiveTabs.tsx | 각각 다르게 구현 |
| Dialog/Modal | 10+ 개 (Modal.tsx들) | DeleteDialog.tsx | 로직 중복 |
| Select | SelectDropdown.tsx | CategorySelect.tsx | 각각 다르게 구현 |
| Toggle | - | ReelCard.tsx (인라인) | 인라인으로 구현 |
| Avatar | ProfileAvatar.tsx, SellerAvatar.tsx | - | 각각 구현 |

### After: npm Package로 재사용
```bash
npm install jjub-headless-ui
```
```typescript
// 어느 프로젝트든 동일하게 사용
import { Tabs, Dialog, Select } from 'jjub-headless-ui'
```
- 1개 라이브러리로 모든 프로젝트에서 동일한 API 사용
- 버그 수정 시 1곳에서만 수정 (npm update로 배포)
- 새 기능 추가 시 모든 프로젝트에 자동 적용

---

## 기술 스택 비교

| 항목 | Before | After |
|------|--------|-------|
| **State Management** | React.useState, Zustand | React.useState, Context API |
| **Styling** | Tailwind, CSS modules (프로젝트별 다름) | data-state로 완전 커스터마이징 |
| **접근성 표준** | WCAG 2.0 부분 지원 | WCAG 2.1 AA 완전 지원 |
| **키보드** | 기본 지원 | WAI-ARIA Authoring Practices 따름 |
| **TypeScript** | 부분 (prop types) | 완전 (제네릭, utility types) |
| **번들 크기** | 컴포넌트 복사로 증가 | npm package (tree-shakable) |

---

## 마이그레이션 예시

### Before: 커들마켓 Tabs
```typescript
export default function Tabs({ tabs, activeTab, onTabChange, ariaLabel }) {
  return (
    <div role="tablist" aria-label={ariaLabel} className={cn('flex w-fit gap-1')}>
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          className={cn(
            'bg-primary-100',
            activeTab === tab.id ? 'bg-primary-500 text-white' : ''
          )}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  )
}
```

### After: jjub-headless-ui Tabs
```typescript
import { Tabs } from 'jjub-headless-ui'

export default function MyTabs({ tabs, activeTab, onTabChange }) {
  return (
    <Tabs.Root value={activeTab} onValueChange={onTabChange}>
      <Tabs.List className="flex gap-1">
        {tabs.map((tab) => (
          <Tabs.Tab
            key={tab.id}
            value={tab.id}
            className="px-4 py-2 rounded-lg data-[state=active]:bg-primary-500 data-[state=active]:text-white"
          >
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {/* 패널은 별도로 구성 */}
    </Tabs.Root>
  )
}
```

**변화점**:
1. 스타일 로직 제거: Headless UI는 `data-state` 속성만 제공
2. aria-* 자동 관리: 더 이상 수동으로 설정 안 함
3. 키보드 지원 자동: Arrow, Home/End 모두 자동

---

## 요약: 언제 Headless UI를 사용할까?

### Headless UI 사용 시기
- 여러 프로젝트에서 공통으로 사용할 컴포넌트
- 높은 접근성 요구사항
- 디자인 자유도가 높은 프로젝트
- npm package로 배포할 컴포넌트

### 기존 방식 (프로젝트별 구현) 사용 시기
- 프로젝트 내에서만 사용하는 컴포넌트
- 특정 디자인에 고도로 최적화된 컴포넌트
- 간단한 UI (버튼, 입력 필드 등)

---

## 결론

**Headless UI의 장점**:
1. **재사용성**: npm package로 모든 프로젝트에서 동일하게 사용
2. **접근성**: WCAG 2.1 AA 완전 준수
3. **유지보수**: 1곳 수정으로 모든 프로젝트에 적용
4. **유연성**: 스타일이 없어 완전히 커스터마이징 가능
5. **표준성**: WAI-ARIA Authoring Practices 따름

**기존 방식의 한계**:
1. 각 프로젝트별로 로직 중복
2. 버그 수정 시 여러 곳에서 수정 필요
3. 접근성 표준 불일치
4. 스타일이 고정되어 프로젝트 디자인에 맞춰 재구현 필요

따라서 **새로운 프로젝트에서는 jjub-headless-ui를 npm package로 설치하여 사용하는 것을 권장**합니다.
