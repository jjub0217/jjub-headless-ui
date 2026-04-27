import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-B7U2fISV.js";import{t as r}from"./react-dom-DtGe4Fif.js";import{t as i}from"./jsx-runtime-DxP0NviS.js";function a(){let e=(0,u.useContext)(p);if(!e)throw Error(`Popover components must be used within Popover.Root.`);return e}function o({defaultOpen:e=!1,open:t,onOpenChange:n,children:r}){let[i,a]=(0,u.useState)(e),o=(0,u.useId)(),s=(0,u.useRef)(null),c=t!==void 0,l=c?t:i,d=(0,u.useCallback)(e=>{c||a(e),n?.(e)},[c,n]);return(0,f.jsx)(p.Provider,{value:{open:l,onOpenChange:d,triggerId:`${o}-popover-trigger`,contentId:`${o}-popover-content`,triggerRef:s},children:r})}function s({children:e,className:t,...n}){let{open:r,onOpenChange:i,triggerId:o,contentId:s,triggerRef:c}=a();return(0,f.jsx)(`button`,{ref:c,id:o,type:`button`,"aria-haspopup":`dialog`,"aria-expanded":r,"aria-controls":r?s:void 0,onClick:()=>i(!r),"data-state":r?`open`:`closed`,className:t,...n,children:e})}function c({onEscapeKeyDown:e,children:t,className:n,...r}){let{open:i,onOpenChange:o,contentId:s,triggerId:c,triggerRef:l}=a(),p=(0,u.useRef)(null);return(0,u.useEffect)(()=>{if(!i)return;let t=t=>{t.key===`Escape`&&(e?.(t),t.defaultPrevented||(o(!1),l.current?.focus()))},n=e=>{let t=e.target;p.current&&!p.current.contains(t)&&l.current&&!l.current.contains(t)&&o(!1)};return document.addEventListener(`keydown`,t),document.addEventListener(`mousedown`,n),()=>{document.removeEventListener(`keydown`,t),document.removeEventListener(`mousedown`,n)}},[i,o,e,l]),(0,u.useEffect)(()=>{i&&(p.current?.querySelector(`a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])`))?.focus()},[i]),i?(0,d.createPortal)((0,f.jsx)(`div`,{ref:p,id:s,role:`dialog`,"aria-labelledby":c,"data-state":i?`open`:`closed`,className:n,...r,children:t}),document.body):null}function l({children:e=`✕`,className:t,...n}){let{onOpenChange:r,triggerRef:i}=a();return(0,f.jsx)(`button`,{type:`button`,"aria-label":`Close popover`,onClick:()=>{r(!1),i.current?.focus()},className:t,...n,children:e})}var u,d,f,p,m,h=t((()=>{u=e(n()),d=e(r()),f=i(),p=(0,u.createContext)(null),m={Root:o,Trigger:s,Content:c,Close:l}})),g,_,v,y,b,x,S;t((()=>{h(),g=e(n()),_=i(),v={title:`Components/Popover`,parameters:{docs:{description:{component:`Headless Popover 컴포넌트. WAI-ARIA Dialog 패턴을 준수하며, ESC 닫기, 외부 클릭 닫기, 포커스 관리를 자동으로 처리합니다.`}}},decorators:[e=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`style`,{children:`
          .popover-trigger-btn {
            padding: 8px 16px;
            border-radius: 6px;
            border: 1px solid #d1d5db;
            background: white;
            cursor: pointer;
            font-size: 14px;
          }
          .popover-trigger-btn[data-state="open"] {
            background: #f3f4f6;
            border-color: #9ca3af;
          }
          .popover-trigger-btn:hover { background: #f3f4f6; }

          .popover-content {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 16px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.12);
            width: 280px;
            margin-top: 8px;
            z-index: 100;
          }

          .popover-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
          }
          .popover-header-title {
            font-weight: 600;
            font-size: 15px;
            margin: 0;
          }
          .popover-close-btn {
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 16px;
            color: #6b7280;
            padding: 2px;
            line-height: 1;
          }
          .popover-close-btn:hover { color: #111827; }

          .popover-body {
            font-size: 14px;
            color: #374151;
            line-height: 1.6;
          }

          .popover-input {
            width: 100%;
            box-sizing: border-box;
            padding: 8px;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            font-size: 14px;
            margin-top: 8px;
          }
          .popover-input:focus {
            outline: none;
            border-color: #6366f1;
            box-shadow: 0 0 0 2px rgba(99,102,241,0.15);
          }

          .popover-action-btn {
            margin-top: 12px;
            width: 100%;
            padding: 8px;
            border-radius: 6px;
            border: none;
            background: #1f2937;
            color: white;
            cursor: pointer;
            font-size: 14px;
          }
          .popover-action-btn:hover { background: #374151; }

          /* Notification panel */
          .notif-item {
            display: flex;
            gap: 10px;
            padding: 8px 0;
            border-bottom: 1px solid #f3f4f6;
            font-size: 13px;
          }
          .notif-item:last-child { border-bottom: none; }
          .notif-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #6366f1;
            flex-shrink: 0;
            margin-top: 4px;
          }
          .notif-text { color: #374151; }
          .notif-time { color: #9ca3af; font-size: 11px; margin-top: 2px; }
        `}),(0,_.jsx)(`div`,{style:{display:`flex`,gap:`24px`,flexWrap:`wrap`},children:(0,_.jsx)(e,{})})]})]},y={name:`Basic Popover`,render:()=>(0,_.jsxs)(m.Root,{children:[(0,_.jsx)(m.Trigger,{className:`popover-trigger-btn`,children:`팝오버 열기`}),(0,_.jsxs)(m.Content,{className:`popover-content`,children:[(0,_.jsxs)(`div`,{className:`popover-header`,children:[(0,_.jsx)(`h3`,{className:`popover-header-title`,children:`팝오버`}),(0,_.jsx)(m.Close,{className:`popover-close-btn`})]}),(0,_.jsxs)(`div`,{className:`popover-body`,children:[(0,_.jsx)(`p`,{style:{margin:0},children:`ESC 키를 누르거나 외부를 클릭하면 닫힙니다.`}),(0,_.jsx)(`input`,{type:`text`,placeholder:`검색어를 입력하세요`,className:`popover-input`}),(0,_.jsx)(m.Close,{className:`popover-action-btn`,children:`확인`})]})]})]})},b={name:`Notification Panel`,render:()=>(0,_.jsxs)(m.Root,{children:[(0,_.jsx)(m.Trigger,{className:`popover-trigger-btn`,children:`🔔 알림 (3)`}),(0,_.jsxs)(m.Content,{className:`popover-content`,style:{minWidth:`300px`},children:[(0,_.jsxs)(`div`,{className:`popover-header`,children:[(0,_.jsx)(`h3`,{className:`popover-header-title`,children:`알림`}),(0,_.jsx)(m.Close,{className:`popover-close-btn`})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(`div`,{className:`notif-item`,children:[(0,_.jsx)(`div`,{className:`notif-dot`}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`notif-text`,children:`새 댓글이 달렸습니다.`}),(0,_.jsx)(`div`,{className:`notif-time`,children:`5분 전`})]})]}),(0,_.jsxs)(`div`,{className:`notif-item`,children:[(0,_.jsx)(`div`,{className:`notif-dot`}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`notif-text`,children:`주문이 배송 완료되었습니다.`}),(0,_.jsx)(`div`,{className:`notif-time`,children:`1시간 전`})]})]}),(0,_.jsxs)(`div`,{className:`notif-item`,children:[(0,_.jsx)(`div`,{className:`notif-dot`,style:{background:`#d1d5db`}}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`notif-text`,style:{color:`#9ca3af`},children:`새 메시지가 도착했습니다.`}),(0,_.jsx)(`div`,{className:`notif-time`,children:`어제`})]})]})]})]})]})},x={name:`Controlled`,render:()=>(0,_.jsx)(()=>{let[e,t]=(0,g.useState)(!1);return(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(`p`,{style:{marginBottom:`8px`,fontSize:`14px`},children:[`상태: `,e?`열림`:`닫힘`]}),(0,_.jsxs)(m.Root,{open:e,onOpenChange:t,children:[(0,_.jsx)(m.Trigger,{className:`popover-trigger-btn`,children:`팝오버 열기`}),(0,_.jsxs)(m.Content,{className:`popover-content`,children:[(0,_.jsxs)(`div`,{className:`popover-header`,children:[(0,_.jsx)(`h3`,{className:`popover-header-title`,children:`제어 모드`}),(0,_.jsx)(m.Close,{className:`popover-close-btn`})]}),(0,_.jsx)(`p`,{className:`popover-body`,style:{margin:0},children:`open과 onOpenChange로 외부에서 상태를 제어합니다.`})]})]})]})},{})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Basic Popover',
  render: () => <Popover.Root>
      <Popover.Trigger className="popover-trigger-btn">팝오버 열기</Popover.Trigger>
      <Popover.Content className="popover-content">
        <div className="popover-header">
          <h3 className="popover-header-title">팝오버</h3>
          <Popover.Close className="popover-close-btn" />
        </div>
        <div className="popover-body">
          <p style={{
          margin: 0
        }}>ESC 키를 누르거나 외부를 클릭하면 닫힙니다.</p>
          <input type="text" placeholder="검색어를 입력하세요" className="popover-input" />
          <Popover.Close className="popover-action-btn">확인</Popover.Close>
        </div>
      </Popover.Content>
    </Popover.Root>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Notification Panel',
  render: () => <Popover.Root>
      <Popover.Trigger className="popover-trigger-btn">
        🔔 알림 (3)
      </Popover.Trigger>
      <Popover.Content className="popover-content" style={{
      minWidth: '300px'
    }}>
        <div className="popover-header">
          <h3 className="popover-header-title">알림</h3>
          <Popover.Close className="popover-close-btn" />
        </div>
        <div>
          <div className="notif-item">
            <div className="notif-dot" />
            <div>
              <div className="notif-text">새 댓글이 달렸습니다.</div>
              <div className="notif-time">5분 전</div>
            </div>
          </div>
          <div className="notif-item">
            <div className="notif-dot" />
            <div>
              <div className="notif-text">주문이 배송 완료되었습니다.</div>
              <div className="notif-time">1시간 전</div>
            </div>
          </div>
          <div className="notif-item">
            <div className="notif-dot" style={{
            background: '#d1d5db'
          }} />
            <div>
              <div className="notif-text" style={{
              color: '#9ca3af'
            }}>새 메시지가 도착했습니다.</div>
              <div className="notif-time">어제</div>
            </div>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Controlled',
  render: () => {
    const ControlledExample = () => {
      const [open, setOpen] = useState(false);
      return <div>
          <p style={{
          marginBottom: '8px',
          fontSize: '14px'
        }}>
            상태: {open ? '열림' : '닫힘'}
          </p>
          <Popover.Root open={open} onOpenChange={setOpen}>
            <Popover.Trigger className="popover-trigger-btn">팝오버 열기</Popover.Trigger>
            <Popover.Content className="popover-content">
              <div className="popover-header">
                <h3 className="popover-header-title">제어 모드</h3>
                <Popover.Close className="popover-close-btn" />
              </div>
              <p className="popover-body" style={{
              margin: 0
            }}>
                open과 onOpenChange로 외부에서 상태를 제어합니다.
              </p>
            </Popover.Content>
          </Popover.Root>
        </div>;
    };
    return <ControlledExample />;
  }
}`,...x.parameters?.docs?.source}}},S=[`BasicPopover`,`NotificationPanel`,`Controlled`]}))();export{y as BasicPopover,x as Controlled,b as NotificationPanel,S as __namedExportsOrder,v as default};