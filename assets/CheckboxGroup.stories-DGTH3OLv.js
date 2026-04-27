import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-B7U2fISV.js";import{t as r}from"./jsx-runtime-DxP0NviS.js";function i(){let e=(0,c.useContext)(u);if(!e)throw Error(`CheckboxGroup components must be used within CheckboxGroup.Root.`);return e}function a({defaultValue:e=[],value:t,onValueChange:n,disabled:r=!1,children:i,className:a,...o}){let[s,d]=(0,c.useState)(e),f=t!==void 0,p=f?t:s,m=(0,c.useCallback)(e=>{if(r)return;let t=p.includes(e)?p.filter(t=>t!==e):[...p,e];f||d(t),n?.(t)},[r,p,f,n]);return(0,l.jsx)(u.Provider,{value:{value:p,onToggle:m,disabled:r},children:(0,l.jsx)(`div`,{role:`group`,"aria-labelledby":o[`aria-labelledby`],className:a,...o,children:i})})}function o({value:e,disabled:t=!1,children:n,className:r,...a}){let{value:o,onToggle:s,disabled:c}=i(),u=o.includes(e),d=c||t;return(0,l.jsx)(`button`,{type:`button`,role:`checkbox`,"aria-checked":u,disabled:d,onClick:()=>{d||s(e)},"data-state":u?`checked`:`unchecked`,"data-disabled":d?``:void 0,className:r,...a,children:n})}function s({children:e,className:t,...n}){return(0,l.jsx)(`span`,{"aria-hidden":`true`,className:t,...n,children:e})}var c,l,u,d,f=t((()=>{c=e(n()),l=r(),u=(0,c.createContext)(null),d={Root:a,Option:o,Indicator:s}})),p,m,h,g,_,v,y,b,x,S;t((()=>{f(),p=e(n()),m=r(),h={padding:`8px 16px`,border:`none`,cursor:`pointer`,fontSize:`14px`,borderRadius:`4px`,display:`flex`,alignItems:`center`,gap:`8px`,background:`none`},g={display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:`16px`,height:`16px`,borderRadius:`3px`,border:`2px solid #d1d5db`,flexShrink:0,fontSize:`11px`},_={title:`Components/CheckboxGroup`,decorators:[e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`style`,{children:`
          [role="checkbox"][data-state="checked"] {
            font-weight: bold;
          }
          [role="checkbox"][data-state="checked"] span[aria-hidden] {
            border-color: #3b82f6;
            background-color: #3b82f6;
            color: white;
          }
          [role="checkbox"][data-state="unchecked"] {
            color: #6b7280;
          }
          [role="checkbox"]:not([data-disabled]):hover {
            background-color: #f3f4f6;
          }
          [role="checkbox"][data-disabled] {
            opacity: 0.4;
            cursor: not-allowed;
          }
          [role="checkbox"]:focus-visible {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
          }
        `}),(0,m.jsx)(e,{})]})],parameters:{docs:{description:{component:`Headless CheckboxGroup 컴포넌트. 다중 선택을 지원하며, role="checkbox"와 aria-checked로 스크린 리더에 상태를 전달합니다.`}}}},v={render:()=>(0,m.jsx)(d.Root,{defaultValue:[`dog`],children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,m.jsxs)(d.Option,{value:`dog`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g,children:`✓`}),`강아지`]}),(0,m.jsxs)(d.Option,{value:`cat`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g,children:`✓`}),`고양이`]}),(0,m.jsxs)(d.Option,{value:`bird`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g,children:`✓`}),`조류`]}),(0,m.jsxs)(d.Option,{value:`fish`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g,children:`✓`}),`어류`]})]})})},y={render:()=>(0,m.jsx)(d.Root,{defaultValue:[`new`],children:(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`4px`},children:[(0,m.jsxs)(d.Option,{value:`new`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g,children:`✓`}),`새 상품`]}),(0,m.jsxs)(d.Option,{value:`used`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g,children:`✓`}),`중고`]}),(0,m.jsxs)(d.Option,{value:`refurbished`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g,children:`✓`}),`리퍼`]})]})})},b={name:`Disabled Option`,render:()=>(0,m.jsx)(d.Root,{defaultValue:[`email`],children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,m.jsxs)(d.Option,{value:`email`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g,children:`✓`}),`이메일 알림`]}),(0,m.jsxs)(d.Option,{value:`sms`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g,children:`✓`}),`SMS 알림`]}),(0,m.jsxs)(d.Option,{value:`push`,style:h,disabled:!0,children:[(0,m.jsx)(d.Indicator,{style:g,children:`✓`}),`푸시 알림 (준비 중)`]})]})})},x={render:()=>(0,m.jsx)(()=>{let[e,t]=(0,p.useState)([`mon`,`wed`,`fri`]);return(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`p`,{style:{marginBottom:`8px`},children:[`선택: `,(0,m.jsx)(`strong`,{children:e.join(`, `)||`없음`})]}),(0,m.jsx)(d.Root,{value:e,onValueChange:t,children:(0,m.jsx)(`div`,{style:{display:`flex`,gap:`4px`},children:[{value:`mon`,label:`월`},{value:`tue`,label:`화`},{value:`wed`,label:`수`},{value:`thu`,label:`목`},{value:`fri`,label:`금`},{value:`sat`,label:`토`},{value:`sun`,label:`일`}].map(e=>(0,m.jsxs)(d.Option,{value:e.value,style:h,children:[(0,m.jsx)(d.Indicator,{style:g,children:`✓`}),e.label]},e.value))})})]})},{})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup.Root defaultValue={['dog']}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }}>
        <CheckboxGroup.Option value="dog" style={optionStyle}>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          강아지
        </CheckboxGroup.Option>
        <CheckboxGroup.Option value="cat" style={optionStyle}>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          고양이
        </CheckboxGroup.Option>
        <CheckboxGroup.Option value="bird" style={optionStyle}>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          조류
        </CheckboxGroup.Option>
        <CheckboxGroup.Option value="fish" style={optionStyle}>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          어류
        </CheckboxGroup.Option>
      </div>
    </CheckboxGroup.Root>
}`,...v.parameters?.docs?.source},description:{story:`기본 사용법.

여러 옵션을 동시에 선택할 수 있습니다.
선택된 옵션을 다시 클릭하면 선택 해제됩니다.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup.Root defaultValue={['new']}>
      <div style={{
      display: 'flex',
      gap: '4px'
    }}>
        <CheckboxGroup.Option value="new" style={optionStyle}>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          새 상품
        </CheckboxGroup.Option>
        <CheckboxGroup.Option value="used" style={optionStyle}>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          중고
        </CheckboxGroup.Option>
        <CheckboxGroup.Option value="refurbished" style={optionStyle}>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          리퍼
        </CheckboxGroup.Option>
      </div>
    </CheckboxGroup.Root>
}`,...y.parameters?.docs?.source},description:{story:`가로 방향.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Disabled Option',
  render: () => <CheckboxGroup.Root defaultValue={['email']}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }}>
        <CheckboxGroup.Option value="email" style={optionStyle}>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          이메일 알림
        </CheckboxGroup.Option>
        <CheckboxGroup.Option value="sms" style={optionStyle}>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          SMS 알림
        </CheckboxGroup.Option>
        <CheckboxGroup.Option value="push" style={optionStyle} disabled>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          푸시 알림 (준비 중)
        </CheckboxGroup.Option>
      </div>
    </CheckboxGroup.Root>
}`,...b.parameters?.docs?.source},description:{story:`비활성화된 옵션.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ControlledExample = () => {
      const [selected, setSelected] = useState<string[]>(['mon', 'wed', 'fri']);
      const days = [{
        value: 'mon',
        label: '월'
      }, {
        value: 'tue',
        label: '화'
      }, {
        value: 'wed',
        label: '수'
      }, {
        value: 'thu',
        label: '목'
      }, {
        value: 'fri',
        label: '금'
      }, {
        value: 'sat',
        label: '토'
      }, {
        value: 'sun',
        label: '일'
      }];
      return <div>
          <p style={{
          marginBottom: '8px'
        }}>선택: <strong>{selected.join(', ') || '없음'}</strong></p>
          <CheckboxGroup.Root value={selected} onValueChange={setSelected}>
            <div style={{
            display: 'flex',
            gap: '4px'
          }}>
              {days.map(day => <CheckboxGroup.Option key={day.value} value={day.value} style={optionStyle}>
                  <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
                  {day.label}
                </CheckboxGroup.Option>)}
            </div>
          </CheckboxGroup.Root>
        </div>;
    };
    return <ControlledExample />;
  }
}`,...x.parameters?.docs?.source},description:{story:`Controlled.

외부에서 선택 상태를 제어하는 예시.`,...x.parameters?.docs?.description}}},S=[`Default`,`Horizontal`,`WithDisabledOption`,`Controlled`]}))();export{x as Controlled,v as Default,y as Horizontal,b as WithDisabledOption,S as __namedExportsOrder,_ as default};