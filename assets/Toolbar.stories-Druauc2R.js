import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-DOtFvnP8.js";import{t as r}from"./jsx-runtime-DxP0NviS.js";function i(){let e=(0,d.useContext)(p);if(!e)throw Error(`Toolbar components must be used within Toolbar.Root.`);return e}function a(){let e=(0,d.useContext)(m);if(!e)throw Error(`Toolbar.ToggleItem must be used within Toolbar.ToggleGroup.`);return e}function o({orientation:e=`horizontal`,"aria-label":t,children:n,className:r,...i}){let a=(0,d.useRef)(null);return(0,f.jsx)(p.Provider,{value:{orientation:e},children:(0,f.jsx)(`div`,{ref:a,role:`toolbar`,"aria-label":t,"aria-orientation":e,onKeyDown:t=>{let n=e===`horizontal`,r=n?`ArrowLeft`:`ArrowUp`,i=n?`ArrowRight`:`ArrowDown`;if(![r,i,`Home`,`End`].includes(t.key))return;let o=a.current?.querySelectorAll(`[role="toolbar"] > button:not([disabled]), [role="toolbar"] > a, [role="toolbar"] > [role="group"] button:not([disabled])`);if(!o||o.length===0)return;let s=a.current?.querySelectorAll(`button:not([disabled]):not([tabindex="-1"]), a:not([disabled])`);if(!s||s.length===0)return;let c=Array.from(s),l=c.findIndex(e=>e===document.activeElement);if(l===-1)return;let u;switch(t.key){case i:u=(l+1)%c.length;break;case r:u=(l-1+c.length)%c.length;break;case`Home`:u=0;break;case`End`:u=c.length-1;break;default:return}t.preventDefault(),c[u].focus()},className:r,"data-orientation":e,...i,children:n})})}function s({disabled:e=!1,children:t,className:n,...r}){return(0,f.jsx)(`button`,{type:`button`,disabled:e,"data-disabled":e?``:void 0,className:n,...r,children:t})}function c({orientation:e,className:t,...n}){let{orientation:r}=i(),a=e??(r===`horizontal`?`vertical`:`horizontal`);return(0,f.jsx)(`div`,{role:`separator`,"aria-orientation":a,"data-orientation":a,className:t,...n})}function l({value:e,defaultValue:t=``,onValueChange:n,"aria-label":r,children:i,className:a,...o}){let[s,c]=(0,d.useState)(t),l=e!==void 0,u=l?e:s,p=(0,d.useCallback)(e=>{l||c(e),n?.(e)},[l,n]);return(0,f.jsx)(m.Provider,{value:{value:u,onValueChange:p},children:(0,f.jsx)(`div`,{role:`group`,"aria-label":r,className:a,...o,children:i})})}function u({value:e,disabled:t=!1,children:n,className:r,...i}){let{value:o,onValueChange:s}=a(),c=o===e;return(0,f.jsx)(`button`,{type:`button`,"aria-pressed":c,disabled:t,onClick:()=>{t||s(c?``:e)},"data-state":c?`on`:`off`,"data-disabled":t?``:void 0,className:r,...i,children:n})}var d,f,p,m,h,g=t((()=>{d=e(n()),f=r(),p=(0,d.createContext)(null),m=(0,d.createContext)(null),h={Root:o,Button:s,Separator:c,ToggleGroup:l,ToggleItem:u}})),_,v,y,b,x,S,C;t((()=>{g(),_=e(n()),v=r(),y={title:`Components/Toolbar`,decorators:[e=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`style`,{children:`
          [role="toolbar"] {
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 4px;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            width: fit-content;
          }
          [role="toolbar"][data-orientation="vertical"] {
            flex-direction: column;
            align-items: stretch;
          }
          [role="toolbar"] button {
            padding: 6px 12px;
            border: 1px solid transparent;
            border-radius: 4px;
            background: none;
            cursor: pointer;
            font-size: 14px;
            line-height: 1;
          }
          [role="toolbar"] button:hover:not([disabled]) {
            background-color: #f3f4f6;
          }
          [role="toolbar"] button:focus-visible {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
          }
          [role="toolbar"] button[data-state="on"] {
            background-color: #dbeafe;
            border-color: #3b82f6;
            color: #1d4ed8;
            font-weight: 600;
          }
          [role="toolbar"] button[data-state="off"] {
            color: #374151;
          }
          [role="toolbar"] button[disabled] {
            opacity: 0.4;
            cursor: not-allowed;
          }
          [role="separator"][data-orientation="vertical"] {
            width: 1px;
            height: 24px;
            background-color: #d1d5db;
            margin: 0 4px;
          }
          [role="separator"][data-orientation="horizontal"] {
            height: 1px;
            width: 100%;
            background-color: #d1d5db;
            margin: 4px 0;
          }
          [role="group"] {
            display: flex;
            gap: 2px;
          }
        `}),(0,v.jsx)(e,{})]})],parameters:{docs:{description:{component:`Headless Toolbar 컴포넌트. WAI-ARIA Toolbar 패턴을 준수하며, 화살표 키 네비게이션과 토글 그룹을 지원합니다. 스타일은 포함되어 있지 않으며, className 또는 data-state 속성으로 자유롭게 커스터마이징할 수 있습니다.`}}}},b={name:`Basic Toolbar`,render:()=>(0,v.jsxs)(h.Root,{"aria-label":`기본 도구 모음`,children:[(0,v.jsx)(h.Button,{children:`새로 만들기`}),(0,v.jsx)(h.Button,{children:`열기`}),(0,v.jsx)(h.Button,{children:`저장`}),(0,v.jsx)(h.Separator,{}),(0,v.jsx)(h.Button,{children:`실행 취소`}),(0,v.jsx)(h.Button,{children:`다시 실행`}),(0,v.jsx)(h.Separator,{}),(0,v.jsx)(h.Button,{disabled:!0,children:`인쇄`})]})},x={name:`Text Editor Toolbar`,render:()=>(0,v.jsx)(()=>{let[e,t]=(0,_.useState)(`left`);return(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,v.jsxs)(h.Root,{"aria-label":`텍스트 서식 도구 모음`,children:[(0,v.jsxs)(h.ToggleGroup,{"aria-label":`텍스트 서식`,children:[(0,v.jsx)(h.ToggleItem,{value:`bold`,"aria-label":`굵게`,children:`B`}),(0,v.jsx)(h.ToggleItem,{value:`italic`,"aria-label":`기울임`,children:`I`}),(0,v.jsx)(h.ToggleItem,{value:`code`,"aria-label":`코드`,children:`</>`})]}),(0,v.jsx)(h.Separator,{}),(0,v.jsxs)(h.ToggleGroup,{"aria-label":`텍스트 정렬`,value:e,onValueChange:e=>{e&&t(e)},children:[(0,v.jsx)(h.ToggleItem,{value:`left`,"aria-label":`왼쪽 정렬`,children:`≡`}),(0,v.jsx)(h.ToggleItem,{value:`center`,"aria-label":`가운데 정렬`,children:`≡`}),(0,v.jsx)(h.ToggleItem,{value:`right`,"aria-label":`오른쪽 정렬`,children:`≡`})]}),(0,v.jsx)(h.Separator,{}),(0,v.jsx)(h.Button,{"aria-label":`링크 삽입`,children:`🔗`}),(0,v.jsx)(h.Button,{"aria-label":`이미지 삽입`,children:`🖼`})]}),(0,v.jsxs)(`p`,{style:{fontSize:`13px`,color:`#6b7280`},children:[`현재 정렬: `,(0,v.jsx)(`strong`,{children:e===`left`?`왼쪽`:e===`center`?`가운데`:`오른쪽`})]})]})},{})},S={name:`Vertical Toolbar`,render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`flex-start`},children:[(0,v.jsxs)(h.Root,{orientation:`vertical`,"aria-label":`세로 도구 모음`,children:[(0,v.jsx)(h.Button,{"aria-label":`확대`,children:`+`}),(0,v.jsx)(h.Button,{"aria-label":`축소`,children:`−`}),(0,v.jsx)(h.Separator,{}),(0,v.jsxs)(h.ToggleGroup,{"aria-label":`그리기 도구`,children:[(0,v.jsx)(h.ToggleItem,{value:`pen`,"aria-label":`펜`,children:`✏️`}),(0,v.jsx)(h.ToggleItem,{value:`eraser`,"aria-label":`지우개`,children:`🧹`}),(0,v.jsx)(h.ToggleItem,{value:`select`,"aria-label":`선택`,children:`⬚`})]}),(0,v.jsx)(h.Separator,{}),(0,v.jsx)(h.Button,{"aria-label":`저장`,children:`💾`})]}),(0,v.jsxs)(`p`,{style:{fontSize:`13px`,color:`#6b7280`},children:[`↑ ↓ 화살표 키로`,(0,v.jsx)(`br`,{}),`도구 간 이동 가능`]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Basic Toolbar',
  render: () => <Toolbar.Root aria-label="기본 도구 모음">
      <Toolbar.Button>새로 만들기</Toolbar.Button>
      <Toolbar.Button>열기</Toolbar.Button>
      <Toolbar.Button>저장</Toolbar.Button>
      <Toolbar.Separator />
      <Toolbar.Button>실행 취소</Toolbar.Button>
      <Toolbar.Button>다시 실행</Toolbar.Button>
      <Toolbar.Separator />
      <Toolbar.Button disabled>인쇄</Toolbar.Button>
    </Toolbar.Root>
}`,...b.parameters?.docs?.source},description:{story:`스토리 1: Basic Toolbar

기본 툴바 사용법.
버튼과 구분선으로 구성된 가장 단순한 형태.

키보드 테스트:
- Tab으로 툴바 진입 → ← → 화살표로 버튼 이동`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Text Editor Toolbar',
  render: () => {
    const TextEditorExample = () => {
      const [alignment, setAlignment] = useState('left');
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Toolbar.Root aria-label="텍스트 서식 도구 모음">
            {/* 텍스트 서식 토글 그룹 */}
            <Toolbar.ToggleGroup aria-label="텍스트 서식">
              <Toolbar.ToggleItem value="bold" aria-label="굵게">
                B
              </Toolbar.ToggleItem>
              <Toolbar.ToggleItem value="italic" aria-label="기울임">
                I
              </Toolbar.ToggleItem>
              <Toolbar.ToggleItem value="code" aria-label="코드">
                {'</>'}
              </Toolbar.ToggleItem>
            </Toolbar.ToggleGroup>

            <Toolbar.Separator />

            {/* 정렬 토글 그룹 (외부 상태 제어) */}
            <Toolbar.ToggleGroup aria-label="텍스트 정렬" value={alignment} onValueChange={v => {
            if (v) setAlignment(v);
          }}>
              <Toolbar.ToggleItem value="left" aria-label="왼쪽 정렬">
                ≡
              </Toolbar.ToggleItem>
              <Toolbar.ToggleItem value="center" aria-label="가운데 정렬">
                ≡
              </Toolbar.ToggleItem>
              <Toolbar.ToggleItem value="right" aria-label="오른쪽 정렬">
                ≡
              </Toolbar.ToggleItem>
            </Toolbar.ToggleGroup>

            <Toolbar.Separator />

            <Toolbar.Button aria-label="링크 삽입">🔗</Toolbar.Button>
            <Toolbar.Button aria-label="이미지 삽입">🖼</Toolbar.Button>
          </Toolbar.Root>

          <p style={{
          fontSize: '13px',
          color: '#6b7280'
        }}>
            현재 정렬: <strong>{alignment === 'left' ? '왼쪽' : alignment === 'center' ? '가운데' : '오른쪽'}</strong>
          </p>
        </div>;
    };
    return <TextEditorExample />;
  }
}`,...x.parameters?.docs?.source},description:{story:`스토리 2: Text Editor Toolbar

텍스트 에디터 스타일 툴바.
굵게/기울임/코드 토글 버튼을 포함한 실제 사용 사례.

ToggleGroup 내부에서 하나의 서식만 선택 가능 (단일 선택).
aria-pressed로 스크린 리더에 선택 상태를 전달합니다.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Vertical Toolbar',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start'
  }}>
      <Toolbar.Root orientation="vertical" aria-label="세로 도구 모음">
        <Toolbar.Button aria-label="확대">+</Toolbar.Button>
        <Toolbar.Button aria-label="축소">−</Toolbar.Button>
        <Toolbar.Separator />
        <Toolbar.ToggleGroup aria-label="그리기 도구">
          <Toolbar.ToggleItem value="pen" aria-label="펜">✏️</Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="eraser" aria-label="지우개">🧹</Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="select" aria-label="선택">⬚</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
        <Toolbar.Separator />
        <Toolbar.Button aria-label="저장">💾</Toolbar.Button>
      </Toolbar.Root>

      <p style={{
      fontSize: '13px',
      color: '#6b7280'
    }}>
        ↑ ↓ 화살표 키로<br />
        도구 간 이동 가능
      </p>
    </div>
}`,...S.parameters?.docs?.source},description:{story:`스토리 3: Vertical Toolbar

orientation="vertical"로 세로 방향 툴바.
화살표 키가 ↑↓로 바뀝니다.
구분선도 자동으로 가로 방향으로 렌더링됩니다.`,...S.parameters?.docs?.description}}},C=[`Default`,`TextEditorToolbar`,`VerticalToolbar`]}))();export{b as Default,x as TextEditorToolbar,S as VerticalToolbar,C as __namedExportsOrder,y as default};