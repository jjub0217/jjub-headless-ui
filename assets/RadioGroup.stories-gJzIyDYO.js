import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-B7U2fISV.js";import{t as r}from"./jsx-runtime-DxP0NviS.js";function i(){let e=(0,c.useContext)(u);if(!e)throw Error(`RadioGroup components must be used within RadioGroup.Root.`);return e}function a({defaultValue:e=``,value:t,onValueChange:n,name:r,disabled:i=!1,orientation:a=`vertical`,children:o,className:s,...d}){let[f,p]=(0,c.useState)(e),m=(0,c.useId)(),h=t!==void 0,g=h?t:f,_=(0,c.useCallback)(e=>{i||(h||p(e),n?.(e))},[i,h,n]),v=(0,c.useRef)(null);return(0,l.jsx)(u.Provider,{value:{value:g,onValueChange:_,name:r??m,disabled:i,orientation:a},children:(0,l.jsx)(`div`,{ref:v,role:`radiogroup`,"aria-orientation":a,onKeyDown:e=>{let t=a===`vertical`,n=t?`ArrowUp`:`ArrowLeft`,r=t?`ArrowDown`:`ArrowRight`;if(![n,r,`Home`,`End`].includes(e.key))return;let i=v.current?.querySelectorAll(`[role="radio"]:not([disabled])`);if(!i||i.length===0)return;let o=Array.from(i).findIndex(e=>e===document.activeElement),s;switch(e.key){case r:s=o<i.length-1?o+1:0;break;case n:s=o>0?o-1:i.length-1;break;case`Home`:s=0;break;case`End`:s=i.length-1;break;default:return}e.preventDefault();let c=i[s];c.focus();let l=c.getAttribute(`data-value`);l&&_(l)},className:s,...d,children:o})})}function o({value:e,disabled:t=!1,children:n,className:r,...a}){let{value:o,onValueChange:s,disabled:c}=i(),u=o===e,d=c||t;return(0,l.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":u,disabled:d,tabIndex:u?0:-1,onClick:()=>{d||s(e)},"data-state":u?`checked`:`unchecked`,"data-disabled":d?``:void 0,"data-value":e,className:r,...a,children:n})}function s({children:e,className:t,...n}){if(!(0,c.useContext)(u))throw Error(`RadioGroup.Indicator must be used within RadioGroup.Root.`);return(0,l.jsx)(`span`,{"aria-hidden":`true`,className:t,...n,children:e})}var c,l,u,d,f=t((()=>{c=e(n()),l=r(),u=(0,c.createContext)(null),d={Root:a,Option:o,Indicator:s}})),p,m,h,g,_,v,y,b,x,S;t((()=>{f(),p=e(n()),m=r(),h={padding:`8px 16px`,border:`none`,cursor:`pointer`,fontSize:`14px`,borderRadius:`4px`,display:`flex`,alignItems:`center`,gap:`8px`,background:`none`},g={display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:`16px`,height:`16px`,borderRadius:`50%`,border:`2px solid #d1d5db`,flexShrink:0},_={title:`Components/RadioGroup`,decorators:[e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`style`,{children:`
          [role="radio"][data-state="checked"] {
            font-weight: bold;
          }
          [role="radio"][data-state="checked"] span[aria-hidden] {
            border-color: #3b82f6;
            background: radial-gradient(circle, #3b82f6 40%, transparent 41%);
          }
          [role="radio"][data-state="unchecked"] {
            color: #6b7280;
          }
          [role="radio"]:not([data-disabled]):hover {
            background-color: #f3f4f6;
          }
          [role="radio"][data-disabled] {
            opacity: 0.4;
            cursor: not-allowed;
          }
          [role="radio"]:focus-visible {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
          }
        `}),(0,m.jsx)(e,{})]})],parameters:{docs:{description:{component:`Headless RadioGroup 컴포넌트. WAI-ARIA Radio Group 패턴을 준수하며, 그룹 내 단일 선택을 지원합니다.`}}}},v={render:()=>(0,m.jsx)(d.Root,{defaultValue:`medium`,children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,m.jsxs)(d.Option,{value:`small`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g}),`작은 사이즈`]}),(0,m.jsxs)(d.Option,{value:`medium`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g}),`중간 사이즈`]}),(0,m.jsxs)(d.Option,{value:`large`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g}),`큰 사이즈`]})]})})},y={render:()=>(0,m.jsx)(d.Root,{defaultValue:`all`,orientation:`horizontal`,children:(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`4px`},children:[(0,m.jsxs)(d.Option,{value:`all`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g}),`전체`]}),(0,m.jsxs)(d.Option,{value:`new`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g}),`새 항목`]}),(0,m.jsxs)(d.Option,{value:`used`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g}),`중고`]}),(0,m.jsxs)(d.Option,{value:`refurbished`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g}),`리퍼`]})]})})},b={name:`Disabled Option`,render:()=>(0,m.jsx)(d.Root,{defaultValue:`card`,children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,m.jsxs)(d.Option,{value:`card`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g}),`카드 결제`]}),(0,m.jsxs)(d.Option,{value:`bank`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g}),`계좌이체`]}),(0,m.jsxs)(d.Option,{value:`phone`,style:h,disabled:!0,children:[(0,m.jsx)(d.Indicator,{style:g}),`휴대폰 결제 (점검 중)`]})]})})},x={render:()=>(0,m.jsx)(()=>{let[e,t]=(0,p.useState)(`light`);return(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`p`,{style:{marginBottom:`8px`},children:[`테마: `,(0,m.jsx)(`strong`,{children:{light:`라이트`,dark:`다크`,system:`시스템`}[e]})]}),(0,m.jsx)(d.Root,{value:e,onValueChange:t,orientation:`horizontal`,children:(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`4px`},children:[(0,m.jsxs)(d.Option,{value:`light`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g}),`라이트`]}),(0,m.jsxs)(d.Option,{value:`dark`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g}),`다크`]}),(0,m.jsxs)(d.Option,{value:`system`,style:h,children:[(0,m.jsx)(d.Indicator,{style:g}),`시스템`]})]})})]})},{})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup.Root defaultValue="medium">
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }}>
        <RadioGroup.Option value="small" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />작은 사이즈</RadioGroup.Option>
        <RadioGroup.Option value="medium" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />중간 사이즈</RadioGroup.Option>
        <RadioGroup.Option value="large" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />큰 사이즈</RadioGroup.Option>
      </div>
    </RadioGroup.Root>
}`,...v.parameters?.docs?.source},description:{story:`기본 사용법.

테스트해보세요:
- 클릭 → 옵션 선택
- ↑ ↓ 화살표 → 옵션 이동 + 자동 선택
- Home/End → 처음/마지막 옵션
- 하나만 선택 가능`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup.Root defaultValue="all" orientation="horizontal">
      <div style={{
      display: 'flex',
      gap: '4px'
    }}>
        <RadioGroup.Option value="all" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />전체</RadioGroup.Option>
        <RadioGroup.Option value="new" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />새 항목</RadioGroup.Option>
        <RadioGroup.Option value="used" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />중고</RadioGroup.Option>
        <RadioGroup.Option value="refurbished" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />리퍼</RadioGroup.Option>
      </div>
    </RadioGroup.Root>
}`,...y.parameters?.docs?.source},description:{story:`가로 방향.

orientation="horizontal"로 가로 배치.
화살표 키가 ← →로 바뀝니다.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Disabled Option',
  render: () => <RadioGroup.Root defaultValue="card">
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }}>
        <RadioGroup.Option value="card" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />카드 결제</RadioGroup.Option>
        <RadioGroup.Option value="bank" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />계좌이체</RadioGroup.Option>
        <RadioGroup.Option value="phone" style={optionStyle} disabled><RadioGroup.Indicator style={indicatorStyle} />휴대폰 결제 (점검 중)</RadioGroup.Option>
      </div>
    </RadioGroup.Root>
}`,...b.parameters?.docs?.source},description:{story:`비활성화된 옵션.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ControlledExample = () => {
      const [selected, setSelected] = useState('light');
      const labels: Record<string, string> = {
        light: '라이트',
        dark: '다크',
        system: '시스템'
      };
      return <div>
          <p style={{
          marginBottom: '8px'
        }}>테마: <strong>{labels[selected]}</strong></p>
          <RadioGroup.Root value={selected} onValueChange={setSelected} orientation="horizontal">
            <div style={{
            display: 'flex',
            gap: '4px'
          }}>
              <RadioGroup.Option value="light" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />라이트</RadioGroup.Option>
              <RadioGroup.Option value="dark" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />다크</RadioGroup.Option>
              <RadioGroup.Option value="system" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />시스템</RadioGroup.Option>
            </div>
          </RadioGroup.Root>
        </div>;
    };
    return <ControlledExample />;
  }
}`,...x.parameters?.docs?.source},description:{story:`Controlled.

외부에서 선택 상태를 제어하는 예시.`,...x.parameters?.docs?.description}}},S=[`Default`,`Horizontal`,`WithDisabledOption`,`Controlled`]}))();export{x as Controlled,v as Default,y as Horizontal,b as WithDisabledOption,S as __namedExportsOrder,_ as default};