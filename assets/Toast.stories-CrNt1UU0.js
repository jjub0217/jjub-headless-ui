import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-CTGCXzEq.js";import{t as r}from"./react-dom-CZ0ZKDT4.js";import{t as i}from"./jsx-runtime-DxP0NviS.js";function a(){let e=(0,p.useContext)(g);if(!e)throw Error(`Toast components must be used within Toast.Provider.`);return e}function o(){let e=(0,p.useContext)(g);if(!e)throw Error(`useToast must be used within Toast.Provider.`);return{addToast:e.addToast,removeToast:e.removeToast,toasts:e.toasts}}function s({children:e,maxToasts:t=5}){let[n,r]=(0,p.useState)([]),i=(0,p.useRef)(0),a=(0,p.useCallback)(e=>{i.current+=1;let n=`toast-${i.current}`;return r(r=>{let i=[...r,{...e,id:n}];return i.length>t?i.slice(i.length-t):i}),n},[t]),o=(0,p.useCallback)(e=>{r(t=>t.filter(t=>t.id!==e))},[]);return(0,h.jsx)(g.Provider,{value:{toasts:n,addToast:a,removeToast:o},children:e})}function c({toastId:e,duration:t=4e3,children:n,className:r,...i}){let{removeToast:o}=a();return(0,p.useEffect)(()=>{if(t<=0)return;let n=setTimeout(()=>o(e),t);return()=>clearTimeout(n)},[e,t,o]),(0,h.jsx)(`li`,{role:`status`,"aria-atomic":`true`,"data-toast-id":e,className:r,...i,children:n})}function l({children:e,className:t,...n}){return(0,h.jsx)(`p`,{"data-toast-title":``,className:t,...n,children:e})}function u({children:e,className:t,...n}){return(0,h.jsx)(`p`,{"data-toast-description":``,className:t,...n,children:e})}function d({toastId:e,children:t=`✕`,className:n,...r}){let{removeToast:i}=a();return(0,h.jsx)(`button`,{type:`button`,"aria-label":`Close notification`,onClick:()=>i(e),className:n,...r,children:t})}function f({container:e,className:t,...n}){let{toasts:r}=a();return(0,m.createPortal)((0,h.jsx)(`ol`,{"aria-live":`polite`,"aria-label":`Notifications`,"data-toast-viewport":``,className:t,...n,children:r.map(e=>(0,h.jsxs)(c,{toastId:e.id,duration:e.duration,"data-variant":e.variant,children:[(0,h.jsxs)(`div`,{children:[e.title&&(0,h.jsx)(l,{children:e.title}),e.description&&(0,h.jsx)(u,{children:e.description})]}),(0,h.jsx)(d,{toastId:e.id})]},e.id))}),e??document.body)}var p,m,h,g,_,v=t((()=>{p=e(n()),m=e(r()),h=i(),g=(0,p.createContext)(null),_={Provider:s,Viewport:f,Root:c,Title:l,Description:u,Close:d}})),y,b,x,S,C,w,T,E;t((()=>{v(),y=i(),b={title:`Components/Toast`,parameters:{docs:{description:{component:`Headless Toast 컴포넌트. WAI-ARIA Live Region 패턴을 준수하며, 자동 닫기, 수동 닫기를 지원합니다.`}}},decorators:[e=>(0,y.jsxs)(_.Provider,{children:[(0,y.jsx)(`style`,{children:`
          [data-toast-viewport] {
            position: fixed;
            bottom: 24px;
            right: 24px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            list-style: none;
            margin: 0;
            padding: 0;
            z-index: 9999;
            max-width: 420px;
          }
          [data-toast-id] {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            border-radius: 8px;
            background: #1f2937;
            color: white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            font-size: 14px;
            line-height: 1.4;
          }
          [data-toast-id] > div:first-child {
            flex: 1;
          }
          [data-toast-id][data-variant="success"] { background: #065f46; }
          [data-toast-id][data-variant="error"] { background: #7f1d1d; }
          [data-toast-id][data-variant="warning"] { background: #78350f; }
          [data-toast-title] { font-weight: 600; margin: 0; }
          [data-toast-description] { margin: 0; opacity: 0.85; }
          [aria-label="Close notification"] {
            background: transparent;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 16px;
            padding: 0;
            flex-shrink: 0;
            line-height: 1;
            opacity: 0.7;
          }
          [aria-label="Close notification"]:hover { opacity: 1; }
          [data-toast-id] {
            animation: toastSlideIn 300ms ease-out;
          }
          @keyframes toastSlideIn {
            from {
              opacity: 0;
              transform: translateX(100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .toast-trigger-btn {
            padding: 8px 16px;
            border-radius: 6px;
            border: 1px solid #d1d5db;
            background: white;
            cursor: pointer;
            font-size: 14px;
          }
          .toast-trigger-btn:hover { background: #f3f4f6; }
        `}),(0,y.jsx)(e,{}),(0,y.jsx)(_.Viewport,{})]})]},x={name:`Success Toast`,render:()=>(0,y.jsx)(()=>{let{addToast:e}=o();return(0,y.jsx)(`button`,{className:`toast-trigger-btn`,onClick:()=>e({title:`저장 완료`,description:`변경 사항이 성공적으로 저장되었습니다.`,variant:`success`,duration:4e3}),children:`성공 토스트 보기`})},{})},S={name:`Error Toast`,render:()=>(0,y.jsx)(()=>{let{addToast:e}=o();return(0,y.jsx)(`button`,{className:`toast-trigger-btn`,onClick:()=>e({title:`오류 발생`,description:`요청을 처리하는 중 오류가 발생했습니다. 다시 시도해 주세요.`,variant:`error`,duration:6e3}),children:`오류 토스트 보기`})},{})},C={name:`Warning Toast`,render:()=>(0,y.jsx)(()=>{let{addToast:e}=o();return(0,y.jsx)(`button`,{className:`toast-trigger-btn`,onClick:()=>e({title:`주의`,description:`세션이 곧 만료됩니다. 작업을 저장해 주세요.`,variant:`warning`,duration:5e3}),children:`경고 토스트 보기`})},{})},w={name:`Auto Close (2s)`,render:()=>(0,y.jsx)(()=>{let{addToast:e}=o();return(0,y.jsx)(`button`,{className:`toast-trigger-btn`,onClick:()=>e({title:`2초 후 자동 닫힘`,description:`이 토스트는 2초 후에 자동으로 사라집니다.`,duration:2e3}),children:`자동 닫기 (2초)`})},{})},T={name:`Stacked Toasts`,render:()=>(0,y.jsx)(()=>{let{addToast:e}=o();return(0,y.jsx)(`button`,{className:`toast-trigger-btn`,onClick:()=>{e({title:`알림 1`,description:`첫 번째 알림입니다.`,variant:`info`,duration:6e3}),setTimeout(()=>e({title:`알림 2`,description:`두 번째 알림입니다.`,variant:`success`,duration:6e3}),300),setTimeout(()=>e({title:`알림 3`,description:`세 번째 알림입니다.`,variant:`warning`,duration:6e3}),600)},children:`토스트 3개 쌓기`})},{})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Success Toast',
  render: () => {
    const Demo = () => {
      const {
        addToast
      } = useToast();
      return <button className="toast-trigger-btn" onClick={() => addToast({
        title: '저장 완료',
        description: '변경 사항이 성공적으로 저장되었습니다.',
        variant: 'success',
        duration: 4000
      })}>
          성공 토스트 보기
        </button>;
    };
    return <Demo />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Error Toast',
  render: () => {
    const Demo = () => {
      const {
        addToast
      } = useToast();
      return <button className="toast-trigger-btn" onClick={() => addToast({
        title: '오류 발생',
        description: '요청을 처리하는 중 오류가 발생했습니다. 다시 시도해 주세요.',
        variant: 'error',
        duration: 6000
      })}>
          오류 토스트 보기
        </button>;
    };
    return <Demo />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Warning Toast',
  render: () => {
    const Demo = () => {
      const {
        addToast
      } = useToast();
      return <button className="toast-trigger-btn" onClick={() => addToast({
        title: '주의',
        description: '세션이 곧 만료됩니다. 작업을 저장해 주세요.',
        variant: 'warning',
        duration: 5000
      })}>
          경고 토스트 보기
        </button>;
    };
    return <Demo />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Auto Close (2s)',
  render: () => {
    const Demo = () => {
      const {
        addToast
      } = useToast();
      return <button className="toast-trigger-btn" onClick={() => addToast({
        title: '2초 후 자동 닫힘',
        description: '이 토스트는 2초 후에 자동으로 사라집니다.',
        duration: 2000
      })}>
          자동 닫기 (2초)
        </button>;
    };
    return <Demo />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Stacked Toasts',
  render: () => {
    const Demo = () => {
      const {
        addToast
      } = useToast();
      const addMultiple = () => {
        addToast({
          title: '알림 1',
          description: '첫 번째 알림입니다.',
          variant: 'info',
          duration: 6000
        });
        setTimeout(() => addToast({
          title: '알림 2',
          description: '두 번째 알림입니다.',
          variant: 'success',
          duration: 6000
        }), 300);
        setTimeout(() => addToast({
          title: '알림 3',
          description: '세 번째 알림입니다.',
          variant: 'warning',
          duration: 6000
        }), 600);
      };
      return <button className="toast-trigger-btn" onClick={addMultiple}>
          토스트 3개 쌓기
        </button>;
    };
    return <Demo />;
  }
}`,...T.parameters?.docs?.source}}},E=[`SuccessToast`,`ErrorToast`,`WarningToast`,`AutoClose`,`StackedToasts`]}))();export{w as AutoClose,S as ErrorToast,T as StackedToasts,x as SuccessToast,C as WarningToast,E as __namedExportsOrder,b as default};