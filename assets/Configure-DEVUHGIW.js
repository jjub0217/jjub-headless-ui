import{n as e}from"./chunk-DnJy8xQt.js";import{r as t,t as n}from"./react-BslJt8_e.js";import{t as r}from"./jsx-runtime-DxP0NviS.js";import{a as i,o as a}from"./blocks-bI-CG4_L.js";var o=e((()=>{n()}));function s(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Introduction`}),`
`,(0,l.jsx)(n.h1,{id:`jjub-headless-ui`,children:`jjub-headless-ui`}),`
`,(0,l.jsx)(n.p,{children:`웹 접근성이 내장되고 스타일 커스터마이징이 가능한 Headless UI 컴포넌트 라이브러리입니다.`}),`
`,(0,l.jsx)(n.h2,{id:`headless-ui란`,children:`Headless UI란?`}),`
`,(0,l.jsxs)(n.p,{children:[`로직과 접근성만 제공하고, 스타일은 포함하지 않는 컴포넌트입니다.
`,(0,l.jsx)(n.code,{children:`className`}),` 또는 `,(0,l.jsx)(n.code,{children:`data-state`}),` 속성으로 자유롭게 스타일을 적용할 수 있습니다.`]}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`스타일 없음`}),` — 색상, 폰트, 간격이 포함되어 있지 않음`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`접근성 내장`}),` — WAI-ARIA 역할, 키보드 네비게이션, 포커스 관리`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`자유로운 스타일링`}),` — CSS, Tailwind, CSS-in-JS 등 어떤 방식이든 사용 가능`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`의존성 없음`}),` — React만 peer dependency`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`TypeScript 지원`}),` — 전체 타입 정의 포함`]}),`
`]}),`
`,(0,l.jsx)(n.h2,{id:`컴포넌트-19개`,children:`컴포넌트 (19개)`}),`
`,(0,l.jsx)(n.p,{children:`| 카테고리 | 컴포넌트 |
|---|---|
| 탐색 | Tabs, NavigationMenu |
| 오버레이 | Dialog, AlertDialog, Drawer, Popover, Menu |
| 입력 | Select, RadioGroup, CheckboxGroup, Toggle, TagInput |
| 피드백 | Toast, Progress |
| 레이아웃 | Accordion, Toolbar |
| 기타 | Avatar, Label, FileUpload |`}),`
`,(0,l.jsx)(n.h2,{id:`설치`,children:`설치`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-bash`,children:`npm install jjub-headless-ui
`})}),`
`,(0,l.jsx)(n.h2,{id:`빠른-시작`,children:`빠른 시작`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`import { Tabs } from 'jjub-headless-ui'

function App() {
  return (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        <Tabs.Tab value="tab1">탭 1</Tabs.Tab>
        <Tabs.Tab value="tab2">탭 2</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">첫 번째 탭 내용</Tabs.Panel>
      <Tabs.Panel value="tab2">두 번째 탭 내용</Tabs.Panel>
    </Tabs.Root>
  )
}
`})}),`
`,(0,l.jsx)(n.h2,{id:`data-state로-스타일링`,children:`data-state로 스타일링`}),`
`,(0,l.jsxs)(n.p,{children:[`모든 컴포넌트는 `,(0,l.jsx)(n.code,{children:`data-state`}),` 속성을 제공합니다:`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-css`,children:`/* 활성 탭 */
[role="tab"][data-state="active"] {
  font-weight: bold;
}

/* 비활성 탭 */
[role="tab"][data-state="inactive"] {
  color: gray;
}
`})}),`
`,(0,l.jsx)(n.h2,{id:`링크`,children:`링크`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`https://www.npmjs.com/package/jjub-headless-ui`,rel:`nofollow`,children:`npm`})}),`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`https://github.com/jjub0217/jjub-headless-ui`,rel:`nofollow`,children:`GitHub`})}),`
`]}),`
`,(0,l.jsx)(n.p,{children:`왼쪽 사이드바에서 각 컴포넌트를 클릭하면 사용 예시를 확인할 수 있습니다.`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=r(),o(),a()}))();export{c as default};