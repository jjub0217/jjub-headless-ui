import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-DOtFvnP8.js";import{t as r}from"./react-dom-Dwe5RO0B.js";import{t as i}from"./jsx-runtime-DxP0NviS.js";function a(){let e=(0,d.useContext)(m);if(!e)throw Error(`Select components must be used within Select.Root.`);return e}function o({defaultValue:e=``,value:t,onValueChange:n,children:r}){let[i,a]=(0,d.useState)(e),[o,s]=(0,d.useState)(!1),[c,l]=(0,d.useState)(-1),u=(0,d.useRef)(null),f=(0,d.useId)(),h=t!==void 0,g=h?t:i,_=(0,d.useCallback)(e=>{h||a(e),n?.(e),s(!1)},[h,n]);return(0,p.jsx)(m.Provider,{value:{open:o,onOpenChange:s,value:g,onValueChange:_,activeIndex:c,setActiveIndex:l,triggerRef:u,baseId:f},children:r})}function s({children:e,className:t,...n}){let{open:r,onOpenChange:i,triggerRef:o,baseId:s}=a();return(0,p.jsx)(`button`,{ref:o,type:`button`,role:`combobox`,"aria-expanded":r,"aria-haspopup":`listbox`,"aria-controls":`${s}-listbox`,onClick:()=>i(!r),onKeyDown:e=>{[`ArrowDown`,`ArrowUp`,`Enter`,` `].includes(e.key)&&(e.preventDefault(),i(!0))},"data-state":r?`open`:`closed`,className:t,...n,children:e})}function c({placeholder:e,children:t}){let{value:n}=a();return!n&&e?(0,p.jsx)(`span`,{"data-placeholder":``,children:e}):(0,p.jsx)(`span`,{children:t??n})}function l({children:e,className:t,...n}){let{open:r,onOpenChange:i,triggerRef:o,baseId:s,activeIndex:c,setActiveIndex:l}=a(),u=(0,d.useRef)(null);(0,d.useEffect)(()=>{if(!r)return;let e=e=>{let t=e.target;u.current&&!u.current.contains(t)&&o.current&&!o.current.contains(t)&&i(!1)},t=e=>{e.key===`Escape`&&(i(!1),o.current?.focus())};return document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)}},[r,i,o]);let m=e=>{let t=u.current?.querySelectorAll(`[role="option"]:not([aria-disabled="true"])`);if(!(!t||t.length===0))switch(e.key){case`ArrowDown`:{e.preventDefault();let n=c<t.length-1?c+1:0;l(n),t[n]?.scrollIntoView({block:`nearest`});break}case`ArrowUp`:{e.preventDefault();let n=c>0?c-1:t.length-1;l(n),t[n]?.scrollIntoView({block:`nearest`});break}case`Home`:e.preventDefault(),l(0),t[0]?.scrollIntoView({block:`nearest`});break;case`End`:{e.preventDefault();let n=t.length-1;l(n),t[n]?.scrollIntoView({block:`nearest`});break}case`Enter`:case` `:e.preventDefault(),c>=0&&c<t.length&&t[c]?.click();break}};if((0,d.useEffect)(()=>{r&&(l(0),setTimeout(()=>u.current?.focus(),0))},[r,l]),!r)return null;let h=u.current?.querySelectorAll(`[role="option"]:not([aria-disabled="true"])`),g=h&&c>=0&&c<h.length?h[c]?.id:void 0;return(0,f.createPortal)((0,p.jsx)(`div`,{ref:u,role:`listbox`,id:`${s}-listbox`,tabIndex:0,"aria-activedescendant":g,onKeyDown:m,className:t,...n,children:e}),document.body)}function u({value:e,disabled:t=!1,children:n,className:r,...i}){let{value:o,onValueChange:s,baseId:c}=a(),l=o===e;return(0,p.jsx)(`div`,{role:`option`,id:`${c}-option-${e}`,"aria-selected":l,"aria-disabled":t,onClick:()=>{t||s(e)},"data-state":l?`checked`:`unchecked`,"data-disabled":t?``:void 0,"data-value":e,className:r,...i,children:n})}var d,f,p,m,h,g=t((()=>{d=e(n()),f=e(r()),p=i(),m=(0,d.createContext)(null),h={Root:o,Trigger:s,Value:c,Content:l,Option:u}})),_,v,y,b,x,S,C,w,T,E;t((()=>{g(),_=e(n()),v=i(),y={padding:`8px 16px`,cursor:`pointer`,minWidth:`200px`,textAlign:`left`},b={backgroundColor:`white`,border:`1px solid #d1d5db`,borderRadius:`6px`,padding:`4px`,marginTop:`4px`,minWidth:`200px`,boxShadow:`0 4px 12px rgba(0, 0, 0, 0.1)`},x={padding:`8px 12px`,borderRadius:`4px`},S={title:`Components/Select`,decorators:[e=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`style`,{children:`
          [role="option"][data-state="checked"] {
            font-weight: bold;
          }
          [role="option"][data-highlighted] {
            background-color: #f3f4f6;
          }
          [role="option"]:not([data-disabled]):hover {
            background-color: #f3f4f6;
          }
          [role="option"][data-disabled] {
            opacity: 0.4;
          }
        `}),(0,v.jsx)(e,{})]})],parameters:{docs:{description:{component:`Headless Select 컴포넌트. WAI-ARIA Listbox 패턴을 준수하며, 키보드 탐색과 스크린 리더를 지원합니다.`}}}},C={render:()=>(0,v.jsx)(()=>{let[e,t]=(0,_.useState)(``);return(0,v.jsxs)(h.Root,{value:e,onValueChange:t,children:[(0,v.jsx)(h.Trigger,{style:y,children:(0,v.jsx)(h.Value,{placeholder:`카테고리 선택`,children:{dog:`강아지`,cat:`고양이`,bird:`조류`,fish:`어류`,reptile:`파충류`}[e]||`카테고리 선택`})}),(0,v.jsxs)(h.Content,{style:b,children:[(0,v.jsx)(h.Option,{value:`dog`,style:x,children:`강아지`}),(0,v.jsx)(h.Option,{value:`cat`,style:x,children:`고양이`}),(0,v.jsx)(h.Option,{value:`bird`,style:x,children:`조류`}),(0,v.jsx)(h.Option,{value:`fish`,style:x,children:`어류`}),(0,v.jsx)(h.Option,{value:`reptile`,style:x,children:`파충류`})]})]})},{})},w={name:`Disabled Option`,render:()=>(0,v.jsx)(()=>{let[e,t]=(0,_.useState)(``);return(0,v.jsxs)(h.Root,{value:e,onValueChange:t,children:[(0,v.jsx)(h.Trigger,{style:y,children:(0,v.jsx)(h.Value,{placeholder:`지역 선택`,children:{seoul:`서울`,busan:`부산`,jeju:`제주 (품절)`,daegu:`대구`}[e]||`지역 선택`})}),(0,v.jsxs)(h.Content,{style:b,children:[(0,v.jsx)(h.Option,{value:`seoul`,style:x,children:`서울`}),(0,v.jsx)(h.Option,{value:`busan`,style:x,children:`부산`}),(0,v.jsx)(h.Option,{value:`jeju`,style:x,disabled:!0,children:`제주 (품절)`}),(0,v.jsx)(h.Option,{value:`daegu`,style:x,children:`대구`})]})]})},{})},T={render:()=>(0,v.jsx)(()=>{let[e,t]=(0,_.useState)(`cat`),n={dog:`강아지`,cat:`고양이`,bird:`조류`};return(0,v.jsxs)(`div`,{children:[(0,v.jsxs)(`p`,{style:{marginBottom:`8px`},children:[`선택된 값: `,(0,v.jsx)(`strong`,{children:n[e]||`없음`})]}),(0,v.jsx)(`button`,{onClick:()=>t(``),style:{marginBottom:`16px`,padding:`4px 8px`,cursor:`pointer`},children:`초기화`}),(0,v.jsx)(`div`,{children:(0,v.jsxs)(h.Root,{value:e,onValueChange:t,children:[(0,v.jsx)(h.Trigger,{style:y,children:(0,v.jsx)(h.Value,{placeholder:`선택하세요`,children:n[e]||`선택하세요`})}),(0,v.jsxs)(h.Content,{style:b,children:[(0,v.jsx)(h.Option,{value:`dog`,style:x,children:`강아지`}),(0,v.jsx)(h.Option,{value:`cat`,style:x,children:`고양이`}),(0,v.jsx)(h.Option,{value:`bird`,style:x,children:`조류`})]})]})})]})},{})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const DefaultExample = () => {
      const [value, setValue] = useState('');
      const labels: Record<string, string> = {
        dog: '강아지',
        cat: '고양이',
        bird: '조류',
        fish: '어류',
        reptile: '파충류'
      };
      return <Select.Root value={value} onValueChange={setValue}>
          <Select.Trigger style={triggerStyle}>
            <Select.Value placeholder="카테고리 선택">{labels[value] || '카테고리 선택'}</Select.Value>
          </Select.Trigger>
          <Select.Content style={contentStyle}>
            <Select.Option value="dog" style={optionStyle}>강아지</Select.Option>
            <Select.Option value="cat" style={optionStyle}>고양이</Select.Option>
            <Select.Option value="bird" style={optionStyle}>조류</Select.Option>
            <Select.Option value="fish" style={optionStyle}>어류</Select.Option>
            <Select.Option value="reptile" style={optionStyle}>파충류</Select.Option>
          </Select.Content>
        </Select.Root>;
    };
    return <DefaultExample />;
  }
}`,...C.parameters?.docs?.source},description:{story:`기본 사용법.

테스트해보세요:
- 버튼 클릭 → 드롭다운 열림
- ↑ ↓ 화살표 → 옵션 탐색 (배경색 변화)
- Enter/Space → 옵션 선택
- ESC → 드롭다운 닫기
- Home/End → 처음/마지막 옵션`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Disabled Option',
  render: () => {
    const DisabledExample = () => {
      const [value, setValue] = useState('');
      const labels: Record<string, string> = {
        seoul: '서울',
        busan: '부산',
        jeju: '제주 (품절)',
        daegu: '대구'
      };
      return <Select.Root value={value} onValueChange={setValue}>
          <Select.Trigger style={triggerStyle}>
            <Select.Value placeholder="지역 선택">{labels[value] || '지역 선택'}</Select.Value>
          </Select.Trigger>
          <Select.Content style={contentStyle}>
            <Select.Option value="seoul" style={optionStyle}>서울</Select.Option>
            <Select.Option value="busan" style={optionStyle}>부산</Select.Option>
            <Select.Option value="jeju" style={optionStyle} disabled>제주 (품절)</Select.Option>
            <Select.Option value="daegu" style={optionStyle}>대구</Select.Option>
          </Select.Content>
        </Select.Root>;
    };
    return <DisabledExample />;
  }
}`,...w.parameters?.docs?.source},description:{story:`비활성화된 옵션이 포함된 Select.

disabled 옵션은 키보드 탐색에서 건너뜁니다.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ControlledExample = () => {
      const [value, setValue] = useState('cat');
      const labels: Record<string, string> = {
        dog: '강아지',
        cat: '고양이',
        bird: '조류'
      };
      return <div>
          <p style={{
          marginBottom: '8px'
        }}>선택된 값: <strong>{labels[value] || '없음'}</strong></p>
          <button onClick={() => setValue('')} style={{
          marginBottom: '16px',
          padding: '4px 8px',
          cursor: 'pointer'
        }}>
            초기화
          </button>
          <div>
            <Select.Root value={value} onValueChange={setValue}>
              <Select.Trigger style={triggerStyle}>
                <Select.Value placeholder="선택하세요">{labels[value] || '선택하세요'}</Select.Value>
              </Select.Trigger>
              <Select.Content style={contentStyle}>
                <Select.Option value="dog" style={optionStyle}>강아지</Select.Option>
                <Select.Option value="cat" style={optionStyle}>고양이</Select.Option>
                <Select.Option value="bird" style={optionStyle}>조류</Select.Option>
              </Select.Content>
            </Select.Root>
          </div>
        </div>;
    };
    return <ControlledExample />;
  }
}`,...T.parameters?.docs?.source},description:{story:`Controlled Select.

외부에서 값을 제어하는 예시.
"초기화" 버튼으로 선택을 리셋할 수 있습니다.`,...T.parameters?.docs?.description}}},E=[`Default`,`WithDisabledOption`,`Controlled`]}))();export{T as Controlled,C as Default,w as WithDisabledOption,E as __namedExportsOrder,S as default};