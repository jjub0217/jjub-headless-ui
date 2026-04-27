import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-1xoKwQlz.js";import{t as r}from"./react-dom-DQyI4PMv.js";import{t as i}from"./jsx-runtime-DxP0NviS.js";function a(){let e=(0,d.useContext)(m);if(!e)throw Error(`Menu components must be used within Menu.Root.`);return e}function o({children:e}){let[t,n]=(0,d.useState)(!1),[r,i]=(0,d.useState)(-1),a=(0,d.useId)(),o=(0,d.useRef)(null),s=(0,d.useRef)(null),c=(0,d.useCallback)(e=>{n(e),e||i(-1)},[]);return(0,p.jsx)(m.Provider,{value:{open:t,onOpenChange:c,activeIndex:r,setActiveIndex:i,contentId:`${a}-menu`,triggerRef:o,contentRef:s},children:e})}function s({children:e,className:t,...n}){let{open:r,onOpenChange:i,contentId:o,triggerRef:s}=a();return(0,p.jsx)(`button`,{ref:s,type:`button`,role:`button`,"aria-haspopup":`menu`,"aria-expanded":r,"aria-controls":r?o:void 0,onClick:()=>i(!r),onKeyDown:e=>{(e.key===`ArrowDown`||e.key===`Enter`||e.key===` `)&&(e.preventDefault(),i(!0)),e.key===`ArrowUp`&&(e.preventDefault(),i(!0))},"data-state":r?`open`:`closed`,className:t,...n,children:e})}function c({children:e,className:t,...n}){let{open:r,onOpenChange:i,contentId:o,activeIndex:s,setActiveIndex:c,triggerRef:l,contentRef:u}=a();return(0,d.useEffect)(()=>{if(!r)return;let e=e=>{let t=e.target;u.current&&!u.current.contains(t)&&l.current&&!l.current.contains(t)&&(i(!1),l.current?.focus())},t=e=>{e.key===`Escape`&&(i(!1),l.current?.focus())};return document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)}},[r,i,l,u]),(0,d.useEffect)(()=>{r&&(c(0),setTimeout(()=>{(u.current?.querySelectorAll(`[role="menuitem"]:not([aria-disabled="true"])`))?.[0]?.focus()},0))},[r,c,u]),r?(0,f.createPortal)((0,p.jsx)(`div`,{ref:u,id:o,role:`menu`,"aria-orientation":`vertical`,"data-state":r?`open`:`closed`,onKeyDown:e=>{let t=u.current?.querySelectorAll(`[role="menuitem"]:not([aria-disabled="true"])`);if(!(!t||t.length===0))switch(e.key){case`ArrowDown`:{e.preventDefault();let n=s<t.length-1?s+1:0;c(n),t[n]?.focus();break}case`ArrowUp`:{e.preventDefault();let n=s>0?s-1:t.length-1;c(n),t[n]?.focus();break}case`Home`:e.preventDefault(),c(0),t[0]?.focus();break;case`End`:{e.preventDefault();let n=t.length-1;c(n),t[n]?.focus();break}case`Tab`:i(!1);break}},className:t,...n,children:e}),document.body):null}function l({disabled:e=!1,onSelect:t,children:n,className:r,onClick:i,...o}){let{onOpenChange:s}=a(),c=()=>{e||(t?.(),s(!1),i?.({}))};return(0,p.jsx)(`div`,{role:`menuitem`,tabIndex:e?-1:0,"aria-disabled":e||void 0,"data-disabled":e?``:void 0,onClick:c,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),c())},className:r,...o,children:n})}function u({className:e,...t}){return(0,p.jsx)(`div`,{role:`separator`,"aria-orientation":`horizontal`,className:e,...t})}var d,f,p,m,h,g=t((()=>{d=e(n()),f=e(r()),p=i(),m=(0,d.createContext)(null),h={Root:o,Trigger:s,Content:c,Item:l,Separator:u}})),_,v,y,b,x,S,C;t((()=>{g(),_=i(),v={title:`Components/Menu`,parameters:{docs:{description:{component:`Headless Menu 컴포넌트. WAI-ARIA Menu Button 패턴을 준수하며, 방향키 탐색, ESC 닫기, 포커스 관리를 자동으로 처리합니다.`}}},decorators:[e=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`style`,{children:`
          .menu-trigger-btn {
            padding: 8px 16px;
            border-radius: 6px;
            border: 1px solid #d1d5db;
            background: white;
            cursor: pointer;
            font-size: 14px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
          }
          .menu-trigger-btn[data-state="open"] {
            background: #f3f4f6;
            border-color: #9ca3af;
          }
          .menu-trigger-btn:hover { background: #f3f4f6; }

          [role="menu"] {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 4px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.12);
            width: 200px;
            margin-top: 8px;
            z-index: 100;
            outline: none;
          }

          [role="menuitem"] {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 14px;
            color: #111827;
            cursor: pointer;
            outline: none;
            user-select: none;
          }
          [role="menuitem"]:hover,
          [role="menuitem"]:focus {
            background: #f3f4f6;
          }
          [role="menuitem"][aria-disabled="true"] {
            color: #9ca3af;
            cursor: not-allowed;
            pointer-events: none;
          }
          [role="menuitem"][data-variant="danger"] {
            color: #dc2626;
          }
          [role="menuitem"][data-variant="danger"]:hover,
          [role="menuitem"][data-variant="danger"]:focus {
            background: #fef2f2;
          }

          [role="separator"] {
            height: 1px;
            background: #e5e7eb;
            margin: 4px 0;
          }
        `}),(0,_.jsx)(`div`,{style:{display:`flex`,gap:`24px`,flexWrap:`wrap`},children:(0,_.jsx)(e,{})})]})]},y={name:`Basic Menu`,render:()=>(0,_.jsxs)(h.Root,{children:[(0,_.jsx)(h.Trigger,{className:`menu-trigger-btn`,children:`메뉴 ▾`}),(0,_.jsxs)(h.Content,{children:[(0,_.jsx)(h.Item,{children:`👤 프로필 보기`}),(0,_.jsx)(h.Item,{children:`⚙️ 설정`}),(0,_.jsx)(h.Item,{children:`❓ 도움말`})]})]})},b={name:`With Separator`,render:()=>(0,_.jsxs)(h.Root,{children:[(0,_.jsx)(h.Trigger,{className:`menu-trigger-btn`,children:`옵션 ▾`}),(0,_.jsxs)(h.Content,{children:[(0,_.jsx)(h.Item,{children:`✏️ 편집`}),(0,_.jsx)(h.Item,{children:`📋 복사`}),(0,_.jsx)(h.Item,{children:`🔗 공유`}),(0,_.jsx)(h.Separator,{}),(0,_.jsx)(h.Item,{"data-variant":`danger`,children:`🗑️ 삭제`})]})]})},x={name:`With Disabled Items`,render:()=>(0,_.jsxs)(h.Root,{children:[(0,_.jsx)(h.Trigger,{className:`menu-trigger-btn`,children:`작업 ▾`}),(0,_.jsxs)(h.Content,{children:[(0,_.jsx)(h.Item,{children:`⬇️ 다운로드`}),(0,_.jsx)(h.Item,{disabled:!0,children:`🔒 편집 (권한 없음)`}),(0,_.jsx)(h.Item,{disabled:!0,children:`📤 내보내기 (준비 중)`}),(0,_.jsx)(h.Separator,{}),(0,_.jsx)(h.Item,{"data-variant":`danger`,children:`🗑️ 삭제`})]})]})},S={name:`Context Menu Style`,render:()=>(0,_.jsxs)(`div`,{style:{display:`flex`,gap:`16px`},children:[(0,_.jsxs)(h.Root,{children:[(0,_.jsx)(h.Trigger,{className:`menu-trigger-btn`,children:`파일 ▾`}),(0,_.jsxs)(h.Content,{children:[(0,_.jsx)(h.Item,{children:`새 파일`}),(0,_.jsx)(h.Item,{children:`열기...`}),(0,_.jsx)(h.Item,{children:`저장`}),(0,_.jsx)(h.Separator,{}),(0,_.jsx)(h.Item,{children:`닫기`})]})]}),(0,_.jsxs)(h.Root,{children:[(0,_.jsx)(h.Trigger,{className:`menu-trigger-btn`,children:`편집 ▾`}),(0,_.jsxs)(h.Content,{children:[(0,_.jsx)(h.Item,{children:`실행 취소`}),(0,_.jsx)(h.Item,{disabled:!0,children:`다시 실행 (사용 불가)`}),(0,_.jsx)(h.Separator,{}),(0,_.jsx)(h.Item,{children:`잘라내기`}),(0,_.jsx)(h.Item,{children:`복사`}),(0,_.jsx)(h.Item,{children:`붙여넣기`})]})]})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Basic Menu',
  render: () => <Menu.Root>
      <Menu.Trigger className="menu-trigger-btn">
        메뉴 ▾
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item>👤 프로필 보기</Menu.Item>
        <Menu.Item>⚙️ 설정</Menu.Item>
        <Menu.Item>❓ 도움말</Menu.Item>
      </Menu.Content>
    </Menu.Root>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'With Separator',
  render: () => <Menu.Root>
      <Menu.Trigger className="menu-trigger-btn">
        옵션 ▾
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item>✏️ 편집</Menu.Item>
        <Menu.Item>📋 복사</Menu.Item>
        <Menu.Item>🔗 공유</Menu.Item>
        <Menu.Separator />
        <Menu.Item data-variant="danger">
          🗑️ 삭제
        </Menu.Item>
      </Menu.Content>
    </Menu.Root>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled Items',
  render: () => <Menu.Root>
      <Menu.Trigger className="menu-trigger-btn">
        작업 ▾
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item>⬇️ 다운로드</Menu.Item>
        <Menu.Item disabled>🔒 편집 (권한 없음)</Menu.Item>
        <Menu.Item disabled>📤 내보내기 (준비 중)</Menu.Item>
        <Menu.Separator />
        <Menu.Item data-variant="danger">
          🗑️ 삭제
        </Menu.Item>
      </Menu.Content>
    </Menu.Root>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Context Menu Style',
  render: () => <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <Menu.Root>
        <Menu.Trigger className="menu-trigger-btn">파일 ▾</Menu.Trigger>
        <Menu.Content>
          <Menu.Item>새 파일</Menu.Item>
          <Menu.Item>열기...</Menu.Item>
          <Menu.Item>저장</Menu.Item>
          <Menu.Separator />
          <Menu.Item>닫기</Menu.Item>
        </Menu.Content>
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger className="menu-trigger-btn">편집 ▾</Menu.Trigger>
        <Menu.Content>
          <Menu.Item>실행 취소</Menu.Item>
          <Menu.Item disabled>다시 실행 (사용 불가)</Menu.Item>
          <Menu.Separator />
          <Menu.Item>잘라내기</Menu.Item>
          <Menu.Item>복사</Menu.Item>
          <Menu.Item>붙여넣기</Menu.Item>
        </Menu.Content>
      </Menu.Root>
    </div>
}`,...S.parameters?.docs?.source}}},C=[`BasicMenu`,`WithSeparator`,`WithDisabledItems`,`ContextMenuStyle`]}))();export{y as BasicMenu,S as ContextMenuStyle,x as WithDisabledItems,b as WithSeparator,C as __namedExportsOrder,v as default};