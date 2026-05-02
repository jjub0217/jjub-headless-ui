# jjub-headless-ui

Unstyled, accessible React components built with WAI-ARIA compliance and zero dependencies. Bring your own styles and full customization.

## Features

- **19 WAI-ARIA compliant components** - Dialog, Tabs, Select, Accordion, Toast, and more
- **Zero dependencies** - Only React 18+ as peer dependency
- **TypeScript-first** - Full type safety out of the box
- **Unstyled by design** - Complete control over appearance with `className` and `data-*` attributes
- **Keyboard accessible** - Arrow keys, Tab, Enter, Escape, and more built in
- **Focus management** - Focus trap, focus restore, focus restoration on close
- **Headless composable API** - Import only what you need
- **No prop drilling** - Context-based state management

## Installation

```bash
npm install jjub-headless-ui react react-dom
```

### Peer Dependencies

- `react` >= 18
- `react-dom` >= 18

## Quick Start

Import a component and compose it with your styles:

```jsx
import { Tabs } from 'jjub-headless-ui'

export function MyTabs() {
  return (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
        <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
      <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
    </Tabs.Root>
  )
}
```

Style with your preferred CSS approach:

```jsx
<Tabs.Tab 
  value="tab1"
  className="px-4 py-2 border-b-2"
  data-state="active"
>
  Tab 1
</Tabs.Tab>
```

## Components

| Component | Description | Link |
|-----------|-------------|------|
| **Tabs** | Tab navigation with keyboard support, automatic/manual activation | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/tabs--docs) |
| **Dialog** | Modal dialog with focus trap, ESC close, overlay dismiss, focus restore | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/dialog--docs) |
| **AlertDialog** | Confirmation dialog without ESC/overlay close | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/alertdialog--docs) |
| **Select** | Dropdown select with listbox pattern and keyboard navigation | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/select--docs) |
| **Accordion** | Collapsible sections with smooth CSS Grid animation | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/accordion--docs) |
| **RadioGroup** | Single-selection input with radio button semantics | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/radiogroup--docs) |
| **CheckboxGroup** | Multiple-selection input with checkbox semantics | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/checkboxgroup--docs) |
| **Toggle** | On/off switch with `role="switch"` semantics | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/toggle--docs) |
| **Toast** | Notification system with `aria-live` for screen readers | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/toast--docs) |
| **Drawer** | Slide-in panel with focus trap and overlay dismiss | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/drawer--docs) |
| **Popover** | Floating panel for contextual content | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/popover--docs) |
| **Menu** | Dropdown menu with menuitem pattern and keyboard navigation | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/menu--docs) |
| **TagInput** | Tag input with IME (Korean) support | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/taginput--docs) |
| **Progress** | Progress bar with indeterminate state support | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/progress--docs) |
| **FileUpload** | Drag and drop file upload with accessible file input | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/fileupload--docs) |
| **Avatar** | Image display with fallback text or icon | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/avatar--docs) |
| **Label** | Accessible label with `htmlFor` linking | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/label--docs) |
| **Toolbar** | Toolbar container with arrow key navigation | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/toolbar--docs) |
| **NavigationMenu** | Navigation landmark with `aria-current` support | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/navigationmenu--docs) |
| **Bubble** | Pretext 기반 채팅 버블 (tightWidth 계산으로 fit-content의 데드 스페이스 제거) | [Docs](https://jjub0217.github.io/jjub-headless-ui/?path=/docs/bubble--docs) |

### Bubble — Chat Layout 사용 예시

`Bubble`은 Pretext의 산수 계산으로 텍스트에 딱 맞는 너비를 적용하는 채팅 버블 컴포넌트. `align-self`로 좌·우 정렬해서 받은/보낸 메시지를 표현할 수 있음.

```jsx
import { Bubble } from 'jjub-headless-ui'

const recvStyle = {
  padding: '8px 12px',
  borderRadius: '16px 16px 16px 4px',
  font: '15px / 20px "Helvetica Neue", Helvetica, Arial, sans-serif',
  background: '#22c55e',
  color: 'white',
  marginBottom: '8px',
}

const sentStyle = {
  ...recvStyle,
  background: '#6b7280',
  borderRadius: '16px 16px 4px 16px',
  alignSelf: 'flex-end',
}

export function Chat() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '12px',
        background: '#1c1c1e',
        borderRadius: '14px',
      }}
    >
      <Bubble text="안녕하세요! 오늘 날씨가 정말 좋네요." style={recvStyle} />
      <Bubble
        text="내일 같이 카페 가실래요? 새로 생긴 곳이 있는데 분위기가 정말 좋다고 해요."
        style={sentStyle}
      />
      <Bubble
        text="주소는 서울특별시 강남구 테헤란로 123번길 45 카페드림 2층입니다."
        style={recvStyle}
      />
      <Bubble text="좋아요! 몇 시에 만날까요?" style={sentStyle} />
      <Bubble
        text="3시쯤 어떨까요? 그 전에 점심도 같이 먹으면 좋을 것 같아요. 근처에 맛있는 파스타 집이 있거든요."
        style={recvStyle}
      />
      <Bubble text="네 알겠습니다!" style={sentStyle} />
      <Bubble
        text="혹시 주차 가능한 곳인가요? 차를 가지고 갈까 고민 중이에요."
        style={recvStyle}
      />
    </div>
  )
}
```

## Accessibility

All components are built with accessibility as a first-class concern:

### ARIA Roles & Attributes
- Semantic HTML roles (`dialog`, `tablist`, `menuitem`, etc.)
- Proper `aria-labelledby`, `aria-describedby`, `aria-current`, `aria-live` attributes
- `aria-expanded`, `aria-selected`, `aria-checked` for state indication

### Keyboard Navigation
- Tab key for focus navigation
- Arrow keys for menu/list navigation
- Enter/Space to activate
- Escape to close modals
- Home/End to jump to first/last item
- Automatic focus looping (configurable)

### Focus Management
- Focus trap within modals/dialogs
- Focus restoration when closing
- Programmatic focus with refs
- Disabled element handling

### Screen Reader Support
- Live regions for toast notifications
- Proper heading hierarchy
- Descriptive button labels
- Status announcements

## Styling

Components are completely unstyled. Use `className` and `data-*` attributes to apply your own styles.

### className Prop

All components accept a `className` prop for standard CSS classes:

```jsx
<Dialog.Trigger className="px-4 py-2 bg-blue-500 text-white rounded">
  Open
</Dialog.Trigger>
```

### data-state Attributes

Components expose state via `data-*` attributes for CSS selectors:

```jsx
<Tabs.Tab value="tab1" data-state="active | inactive" />
<Dialog.Content data-state="open | closed" />
<Toggle data-state="on | off" />
```

### Tailwind CSS Example

```jsx
<Tabs.Tab
  value="tab1"
  className="px-4 py-2 border-b-2 border-transparent hover:border-gray-300 data-[state=active]:border-blue-500"
>
  Active Tab
</Tabs.Tab>
```

## Documentation

Full documentation and interactive examples available at:

https://jjub0217.github.io/jjub-headless-ui

## License

MIT
