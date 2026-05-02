import{n as e}from"./chunk-DnJy8xQt.js";import{r as t,t as n}from"./react-DjfzEYbL.js";import{t as r}from"./jsx-runtime-DxP0NviS.js";import{a as i,o as a}from"./blocks-CuOLdKKN.js";var o=e((()=>{n()}));function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Introduction`}),`
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
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`카테고리`}),(0,l.jsx)(`th`,{children:`컴포넌트`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:`탐색`}),(0,l.jsx)(`td`,{children:`Tabs, NavigationMenu`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:`오버레이`}),(0,l.jsx)(`td`,{children:`Dialog, AlertDialog, Drawer, Popover, Menu`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:`입력`}),(0,l.jsx)(`td`,{children:`Select, RadioGroup, CheckboxGroup, Toggle, TagInput`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:`피드백`}),(0,l.jsx)(`td`,{children:`Toast, Progress`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:`레이아웃`}),(0,l.jsx)(`td`,{children:`Accordion, Toolbar`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:`기타`}),(0,l.jsx)(`td`,{children:`Avatar, Label, FileUpload`})]})]})]}),`
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
`,(0,l.jsx)(n.p,{children:`왼쪽 사이드바에서 각 컴포넌트를 클릭하면 사용 예시를 확인할 수 있습니다.`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=r(),o(),a()}))();export{c as default};