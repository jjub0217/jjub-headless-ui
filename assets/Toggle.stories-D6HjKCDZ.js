import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-BDfijASe.js";import{t as r}from"./jsx-runtime-DxP0NviS.js";function i({defaultPressed:e=!1,pressed:t,onPressedChange:n,disabled:r=!1,children:i,className:s,...c}){let[l,u]=(0,a.useState)(e),d=t!==void 0,f=d?t:l;return(0,o.jsx)(`button`,{type:`button`,role:`switch`,"aria-checked":f,disabled:r,onClick:(0,a.useCallback)(()=>{if(r)return;let e=!f;d||u(e),n?.(e)},[r,f,d,n]),"data-state":f?`on`:`off`,"data-disabled":r?``:void 0,className:s,...c,children:i})}var a,o,s,c=t((()=>{a=e(n()),o=r(),s={Root:i}})),l,u,d,f,p,m,h,g;t((()=>{c(),l=e(n()),u=r(),d={title:`Components/Toggle`,decorators:[e=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`style`,{children:`
          [role="switch"] {
            cursor: pointer;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            font-size: 14px;
          }
          [role="switch"][data-state="on"] {
            font-weight: bold;
          }
          [role="switch"][data-state="off"] {
            color: #6b7280;
          }
          [role="switch"]:not([data-disabled]):hover {
            background-color: #f3f4f6;
          }
          [role="switch"][data-disabled] {
            opacity: 0.4;
            cursor: not-allowed;
          }
        `}),(0,u.jsx)(e,{})]})],parameters:{docs:{description:{component:`Headless Toggle(Switch) 컴포넌트. role="switch"와 aria-checked로 켜짐/꺼짐 상태를 스크린 리더에 전달합니다.`}}}},f={render:()=>(0,u.jsx)(s.Root,{defaultPressed:!1,children:`알림 수신`})},p={name:`Icon Toggle`,render:()=>(0,u.jsx)(()=>{let[e,t]=(0,l.useState)(!1);return(0,u.jsx)(s.Root,{pressed:e,onPressedChange:t,"aria-label":e?`Remove from favorites`:`Add to favorites`,style:{fontSize:`24px`,background:`none`,padding:`4px`},children:e?`★`:`☆`})},{})},m={render:()=>(0,u.jsx)(s.Root,{defaultPressed:!0,disabled:!0,children:`비활성화됨`})},h={render:()=>(0,u.jsx)(()=>{let[e,t]=(0,l.useState)(!1);return(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`p`,{style:{marginBottom:`8px`},children:[`다크 모드: `,(0,u.jsx)(`strong`,{children:e?`켜짐`:`꺼짐`})]}),(0,u.jsx)(s.Root,{pressed:e,onPressedChange:t,children:e?`🌙 다크 모드`:`☀️ 라이트 모드`})]})},{})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Toggle.Root defaultPressed={false}>
      알림 수신
    </Toggle.Root>
}`,...f.parameters?.docs?.source},description:{story:`기본 사용법.

테스트해보세요:
- 클릭 → 켜짐/꺼짐 전환
- Space/Enter → 키보드로 전환`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Icon Toggle',
  render: () => {
    const IconToggleExample = () => {
      const [starred, setStarred] = useState(false);
      return <Toggle.Root pressed={starred} onPressedChange={setStarred} aria-label={starred ? 'Remove from favorites' : 'Add to favorites'} style={{
        fontSize: '24px',
        background: 'none',
        padding: '4px'
      }}>
          {starred ? '★' : '☆'}
        </Toggle.Root>;
    };
    return <IconToggleExample />;
  }
}`,...p.parameters?.docs?.source},description:{story:`아이콘 토글.

★/☆ 아이콘으로 상태를 표현하는 토글 패턴입니다.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Toggle.Root defaultPressed={true} disabled>
      비활성화됨
    </Toggle.Root>
}`,...m.parameters?.docs?.source},description:{story:`비활성화된 토글.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ControlledExample = () => {
      const [darkMode, setDarkMode] = useState(false);
      return <div>
          <p style={{
          marginBottom: '8px'
        }}>다크 모드: <strong>{darkMode ? '켜짐' : '꺼짐'}</strong></p>
          <Toggle.Root pressed={darkMode} onPressedChange={setDarkMode}>
            {darkMode ? '🌙 다크 모드' : '☀️ 라이트 모드'}
          </Toggle.Root>
        </div>;
    };
    return <ControlledExample />;
  }
}`,...h.parameters?.docs?.source},description:{story:`Controlled 토글.

외부에서 상태를 제어하는 예시.`,...h.parameters?.docs?.description}}},g=[`Default`,`IconToggle`,`Disabled`,`Controlled`]}))();export{h as Controlled,f as Default,m as Disabled,p as IconToggle,g as __namedExportsOrder,d as default};