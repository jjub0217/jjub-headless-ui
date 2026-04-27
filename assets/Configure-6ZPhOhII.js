import{n as e}from"./chunk-DnJy8xQt.js";import{r as t,t as n}from"./react-8gmqLuep.js";import{t as r}from"./jsx-runtime-DxP0NviS.js";import{a as i,o as a}from"./blocks-BmOAz3m5.js";var o=e((()=>{n()}));function s(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Introduction`}),`
`,(0,l.jsx)(n.h1,{id:`jjub-headless-ui`,children:`jjub-headless-ui`}),`
`,(0,l.jsx)(n.p,{children:`Headless UI components with built-in accessibility. Unstyled, customizable, WAI-ARIA compliant.`}),`
`,(0,l.jsx)(n.h2,{id:`what-is-headless-ui`,children:`What is Headless UI?`}),`
`,(0,l.jsxs)(n.p,{children:[`Headless UI components provide `,(0,l.jsx)(n.strong,{children:`logic and accessibility`}),` without any visual styles.
You bring your own styles via `,(0,l.jsx)(n.code,{children:`className`}),` or `,(0,l.jsx)(n.code,{children:`data-state`}),` attributes.`]}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Zero styles`}),` — no colors, fonts, or spacing included`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Full accessibility`}),` — WAI-ARIA roles, keyboard navigation, focus management`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Customizable`}),` — style with CSS, Tailwind, CSS-in-JS, or any approach`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Zero dependencies`}),` — only React as peer dependency`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`TypeScript-first`}),` — full type definitions included`]}),`
`]}),`
`,(0,l.jsx)(n.h2,{id:`components-19`,children:`Components (19)`}),`
`,(0,l.jsx)(n.p,{children:`| Category | Components |
|---|---|
| Navigation | Tabs, NavigationMenu |
| Overlay | Dialog, AlertDialog, Drawer, Popover, Menu |
| Input | Select, RadioGroup, CheckboxGroup, Toggle, TagInput |
| Feedback | Toast, Progress |
| Layout | Accordion, Toolbar |
| Misc | Avatar, Label, FileUpload |`}),`
`,(0,l.jsx)(n.h2,{id:`installation`,children:`Installation`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-bash`,children:`npm install jjub-headless-ui
`})}),`
`,(0,l.jsx)(n.h2,{id:`quick-start`,children:`Quick Start`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`import { Tabs } from 'jjub-headless-ui'

function App() {
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
`})}),`
`,(0,l.jsx)(n.h2,{id:`styling-with-data-state`,children:`Styling with data-state`}),`
`,(0,l.jsxs)(n.p,{children:[`All components expose `,(0,l.jsx)(n.code,{children:`data-state`}),` attributes for CSS styling:`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-css`,children:`[role="tab"][data-state="active"] {
  font-weight: bold;
}
[role="tab"][data-state="inactive"] {
  color: gray;
}
`})}),`
`,(0,l.jsx)(n.h2,{id:`links`,children:`Links`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`https://www.npmjs.com/package/jjub-headless-ui`,rel:`nofollow`,children:`npm`})}),`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`https://github.com/jjub0217/jjub-headless-ui`,rel:`nofollow`,children:`GitHub`})}),`
`]}),`
`,(0,l.jsx)(n.p,{children:`Browse the components in the sidebar to see live examples and usage patterns.`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=r(),o(),a()}))();export{c as default};