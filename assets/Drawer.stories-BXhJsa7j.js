import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-B7U2fISV.js";import{t as r}from"./react-dom-DtGe4Fif.js";import{t as i}from"./jsx-runtime-DxP0NviS.js";import{i as a,n as o,r as s,t as c}from"./use-body-scroll-lock-B_JL3gsO.js";function l(){let e=(0,_.useContext)(b);if(!e)throw Error(`Drawer components must be used within Drawer.Root.`);return e}function u({defaultOpen:e=!1,open:t,onOpenChange:n,children:r}){let[i,a]=(0,_.useState)(e),o=(0,_.useId)(),s=(0,_.useRef)(null),c=t!==void 0,l=c?t:i,u=(0,_.useCallback)(e=>{c||a(e),n?.(e)},[c,n]);return(0,y.jsx)(b.Provider,{value:{open:l,onOpenChange:u,titleId:`${o}-drawer-title`,triggerRef:s},children:r})}function d({children:e,className:t,...n}){let{open:r,onOpenChange:i,triggerRef:a}=l();return(0,y.jsx)(`button`,{ref:a,type:`button`,"aria-expanded":r,"aria-haspopup":`dialog`,onClick:()=>i(!0),"data-state":r?`open`:`closed`,className:t,...n,children:e})}function f({className:e,onClick:t,...n}){let{open:r,onOpenChange:i}=l();return r?(0,y.jsx)(`div`,{"aria-hidden":`true`,onClick:e=>{e.target===e.currentTarget&&i(!1),t?.(e)},"data-state":r?`open`:`closed`,className:e,...n}):null}function p({side:e=`right`,onEscapeKeyDown:t,children:n,className:r,...i}){let{open:s,onOpenChange:c,titleId:u,triggerRef:d}=l(),f=(0,_.useRef)(null);a(f,s),o(s),(0,_.useEffect)(()=>{if(!s)return;let e=e=>{e.key===`Escape`&&(t?.(e),e.defaultPrevented||c(!1))};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[s,c,t]);let p=(0,_.useRef)(s);(0,_.useEffect)(()=>{p.current&&!s&&d.current?.focus(),p.current=s},[s,d]);let[m,h]=(0,_.useState)(s),[g,v]=(0,_.useState)(s?`open`:`closed`);return(0,_.useEffect)(()=>{s?(h(!0),v(`closed`),requestAnimationFrame(()=>{requestAnimationFrame(()=>v(`open`))})):g===`open`&&v(`closing`)},[s]),m?(0,y.jsx)(`div`,{ref:f,role:`dialog`,"aria-modal":`true`,"aria-labelledby":u,"data-state":s?`open`:`closed`,"data-side":e,className:r,onTransitionEnd:()=>{g===`closing`&&(v(`closed`),h(!1))},style:{transform:{left:{open:`translateX(0)`,closing:`translateX(-100%)`,closed:`translateX(-100%)`},right:{open:`translateX(0)`,closing:`translateX(100%)`,closed:`translateX(100%)`},top:{open:`translateY(0)`,closing:`translateY(-100%)`,closed:`translateY(-100%)`},bottom:{open:`translateY(0)`,closing:`translateY(100%)`,closed:`translateY(100%)`}}[e][g],transition:`transform 300ms cubic-bezier(0.32, 0.72, 0, 1)`,...i.style},...i,children:n}):null}function m({children:e,className:t,...n}){let{titleId:r}=l();return(0,y.jsx)(`h2`,{id:r,className:t,...n,children:e})}function h({children:e,className:t,...n}){let{onOpenChange:r}=l();return(0,y.jsx)(`button`,{type:`button`,"aria-label":`Close drawer`,onClick:()=>r(!1),className:t,...n,children:e})}function g({children:e,container:t}){return(0,v.createPortal)(e,t??document.body)}var _,v,y,b,x,S=t((()=>{_=e(n()),v=e(r()),s(),c(),y=i(),b=(0,_.createContext)(null),x={Root:u,Trigger:d,Portal:g,Overlay:f,Content:p,Title:m,Close:h}})),C,w,T,E,D,O,k;t((()=>{S(),C=e(n()),w=i(),T={title:`Components/Drawer`,parameters:{docs:{description:{component:`Headless Drawer 컴포넌트. WAI-ARIA Dialog 패턴을 준수하며, 포커스 트랩, ESC 닫기, 스크롤 잠금을 자동으로 처리합니다.`}}},decorators:[e=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`style`,{children:`
          .drawer-trigger-btn {
            padding: 10px 20px;
            border-radius: 6px;
            border: 1px solid #d1d5db;
            background: white;
            cursor: pointer;
            font-size: 14px;
          }
          .drawer-trigger-btn:hover { background: #f3f4f6; }

          /* Overlay */
          [data-state="open"][aria-hidden="true"] {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 50;
          }

          /* Content base */
          [role="dialog"][data-side] {
            position: fixed;
            top: 0;
            bottom: 0;
            z-index: 51;
            background: white;
            width: 320px;
            padding: 24px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          /* Side variants */
          [role="dialog"][data-side="left"] { left: 0; }
          [role="dialog"][data-side="right"] { right: 0; }

          /* Drawer inner elements */
          .drawer-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .drawer-title {
            font-size: 18px;
            font-weight: 600;
            margin: 0;
          }
          .drawer-close-btn {
            background: transparent;
            border: none;
            font-size: 20px;
            cursor: pointer;
            padding: 4px;
            color: #6b7280;
            line-height: 1;
          }
          .drawer-close-btn:hover { color: #111827; }
          .drawer-body {
            color: #374151;
            font-size: 14px;
            line-height: 1.6;
          }
          .drawer-footer {
            margin-top: auto;
            display: flex;
            gap: 8px;
          }
          .drawer-action-btn {
            flex: 1;
            padding: 10px;
            border-radius: 6px;
            border: 1px solid #d1d5db;
            cursor: pointer;
            font-size: 14px;
          }
          .drawer-action-btn.primary {
            background: #1f2937;
            color: white;
            border-color: #1f2937;
          }
          .drawer-action-btn.primary:hover { background: #374151; }
        `}),(0,w.jsx)(e,{})]})]},E={name:`Right Slide`,render:()=>(0,w.jsxs)(x.Root,{children:[(0,w.jsx)(x.Trigger,{className:`drawer-trigger-btn`,children:`오른쪽 드로어 열기`}),(0,w.jsxs)(x.Portal,{children:[(0,w.jsx)(x.Overlay,{}),(0,w.jsxs)(x.Content,{side:`right`,children:[(0,w.jsxs)(`div`,{className:`drawer-header`,children:[(0,w.jsx)(x.Title,{className:`drawer-title`,children:`설정`}),(0,w.jsx)(x.Close,{className:`drawer-close-btn`,children:`✕`})]}),(0,w.jsxs)(`div`,{className:`drawer-body`,children:[(0,w.jsx)(`p`,{children:`이 드로어는 오른쪽에서 슬라이드됩니다.`}),(0,w.jsx)(`p`,{children:`Tab 키를 눌러 포커스가 드로어 안에서만 순환하는지 확인해 보세요.`}),(0,w.jsx)(`p`,{children:`ESC 키를 누르거나 배경을 클릭하면 닫힙니다.`})]}),(0,w.jsxs)(`div`,{className:`drawer-footer`,children:[(0,w.jsx)(x.Close,{className:`drawer-action-btn`,children:`취소`}),(0,w.jsx)(x.Close,{className:`drawer-action-btn primary`,children:`저장`})]})]})]})]})},D={name:`Left Slide`,render:()=>(0,w.jsxs)(x.Root,{children:[(0,w.jsx)(x.Trigger,{className:`drawer-trigger-btn`,children:`왼쪽 드로어 열기`}),(0,w.jsxs)(x.Portal,{children:[(0,w.jsx)(x.Overlay,{}),(0,w.jsxs)(x.Content,{side:`left`,children:[(0,w.jsxs)(`div`,{className:`drawer-header`,children:[(0,w.jsx)(x.Title,{className:`drawer-title`,children:`내비게이션`}),(0,w.jsx)(x.Close,{className:`drawer-close-btn`,children:`✕`})]}),(0,w.jsx)(`nav`,{className:`drawer-body`,children:(0,w.jsxs)(`ul`,{style:{listStyle:`none`,padding:0,margin:0,display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,w.jsx)(`li`,{children:(0,w.jsx)(`a`,{href:`#`,style:{textDecoration:`none`,color:`#1f2937`,fontWeight:500},children:`홈`})}),(0,w.jsx)(`li`,{children:(0,w.jsx)(`a`,{href:`#`,style:{textDecoration:`none`,color:`#1f2937`,fontWeight:500},children:`프로필`})}),(0,w.jsx)(`li`,{children:(0,w.jsx)(`a`,{href:`#`,style:{textDecoration:`none`,color:`#1f2937`,fontWeight:500},children:`설정`})}),(0,w.jsx)(`li`,{children:(0,w.jsx)(`a`,{href:`#`,style:{textDecoration:`none`,color:`#1f2937`,fontWeight:500},children:`로그아웃`})})]})})]})]})]})},O={name:`Controlled`,render:()=>(0,w.jsx)(()=>{let[e,t]=(0,C.useState)(!1);return(0,w.jsxs)(`div`,{children:[(0,w.jsxs)(`p`,{style:{marginBottom:`8px`,fontSize:`14px`},children:[`상태: `,e?`열림`:`닫힘`]}),(0,w.jsxs)(x.Root,{open:e,onOpenChange:t,children:[(0,w.jsx)(x.Trigger,{className:`drawer-trigger-btn`,children:`드로어 열기`}),(0,w.jsxs)(x.Portal,{children:[(0,w.jsx)(x.Overlay,{}),(0,w.jsxs)(x.Content,{side:`right`,children:[(0,w.jsxs)(`div`,{className:`drawer-header`,children:[(0,w.jsx)(x.Title,{className:`drawer-title`,children:`제어 모드`}),(0,w.jsx)(x.Close,{className:`drawer-close-btn`,children:`✕`})]}),(0,w.jsx)(`div`,{className:`drawer-body`,children:(0,w.jsx)(`p`,{children:`open과 onOpenChange로 외부에서 상태를 제어합니다.`})})]})]})]})]})},{})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Right Slide',
  render: () => <Drawer.Root>
      <Drawer.Trigger className="drawer-trigger-btn">오른쪽 드로어 열기</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay />
        <Drawer.Content side="right">
          <div className="drawer-header">
            <Drawer.Title className="drawer-title">설정</Drawer.Title>
            <Drawer.Close className="drawer-close-btn">✕</Drawer.Close>
          </div>
          <div className="drawer-body">
            <p>이 드로어는 오른쪽에서 슬라이드됩니다.</p>
            <p>Tab 키를 눌러 포커스가 드로어 안에서만 순환하는지 확인해 보세요.</p>
            <p>ESC 키를 누르거나 배경을 클릭하면 닫힙니다.</p>
          </div>
          <div className="drawer-footer">
            <Drawer.Close className="drawer-action-btn">취소</Drawer.Close>
            <Drawer.Close className="drawer-action-btn primary">저장</Drawer.Close>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Left Slide',
  render: () => <Drawer.Root>
      <Drawer.Trigger className="drawer-trigger-btn">왼쪽 드로어 열기</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay />
        <Drawer.Content side="left">
          <div className="drawer-header">
            <Drawer.Title className="drawer-title">내비게이션</Drawer.Title>
            <Drawer.Close className="drawer-close-btn">✕</Drawer.Close>
          </div>
          <nav className="drawer-body">
            <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
              <li><a href="#" style={{
                textDecoration: 'none',
                color: '#1f2937',
                fontWeight: 500
              }}>홈</a></li>
              <li><a href="#" style={{
                textDecoration: 'none',
                color: '#1f2937',
                fontWeight: 500
              }}>프로필</a></li>
              <li><a href="#" style={{
                textDecoration: 'none',
                color: '#1f2937',
                fontWeight: 500
              }}>설정</a></li>
              <li><a href="#" style={{
                textDecoration: 'none',
                color: '#1f2937',
                fontWeight: 500
              }}>로그아웃</a></li>
            </ul>
          </nav>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Controlled',
  render: () => {
    const ControlledExample = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <div>
          <p style={{
          marginBottom: '8px',
          fontSize: '14px'
        }}>
            상태: {isOpen ? '열림' : '닫힘'}
          </p>
          <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
            <Drawer.Trigger className="drawer-trigger-btn">드로어 열기</Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay />
              <Drawer.Content side="right">
                <div className="drawer-header">
                  <Drawer.Title className="drawer-title">제어 모드</Drawer.Title>
                  <Drawer.Close className="drawer-close-btn">✕</Drawer.Close>
                </div>
                <div className="drawer-body">
                  <p>open과 onOpenChange로 외부에서 상태를 제어합니다.</p>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>;
    };
    return <ControlledExample />;
  }
}`,...O.parameters?.docs?.source}}},k=[`RightSlide`,`LeftSlide`,`Controlled`]}))();export{O as Controlled,D as LeftSlide,E as RightSlide,k as __namedExportsOrder,T as default};