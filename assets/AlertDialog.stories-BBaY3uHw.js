import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-BDfijASe.js";import{t as r}from"./react-dom-FdCZ6q5f.js";import{t as i}from"./jsx-runtime-DxP0NviS.js";import{i as a,n as o,r as s,t as c}from"./use-body-scroll-lock-BqpKKG-F.js";function l(){let e=(0,y.useContext)(S);if(!e)throw Error(`AlertDialog components must be used within AlertDialog.Root.`);return e}function u({defaultOpen:e=!1,open:t,onOpenChange:n,children:r}){let[i,a]=(0,y.useState)(e),o=(0,y.useId)(),s=(0,y.useRef)(null),c=t!==void 0,l=c?t:i,u=(0,y.useCallback)(e=>{c||a(e),n?.(e)},[c,n]);return(0,x.jsx)(S.Provider,{value:{open:l,onOpenChange:u,titleId:`${o}-alert-dialog-title`,descriptionId:`${o}-alert-dialog-description`,triggerRef:s},children:r})}function d({children:e,className:t,...n}){let{open:r,onOpenChange:i,triggerRef:a}=l();return(0,x.jsx)(`button`,{ref:a,type:`button`,onClick:()=>i(!0),"data-state":r?`open`:`closed`,className:t,...n,children:e})}function f({children:e,container:t}){let{open:n}=l();return n?(0,b.createPortal)(e,t??document.body):null}function p({className:e,...t}){let{open:n}=l();return(0,x.jsx)(`div`,{"data-state":n?`open`:`closed`,className:e,...t})}function m({children:e,className:t,...n}){let{open:r,titleId:i,descriptionId:s,triggerRef:c}=l(),u=(0,y.useRef)(null);a(u,r),o(r);let d=(0,y.useRef)(r);return(0,y.useEffect)(()=>{d.current&&!r&&c.current?.focus(),d.current=r},[r,c]),r?(0,x.jsx)(`div`,{ref:u,role:`alertdialog`,"aria-modal":`true`,"aria-labelledby":i,"aria-describedby":s,"data-state":r?`open`:`closed`,className:t,...n,children:e}):null}function h({children:e,className:t,...n}){let{titleId:r}=l();return(0,x.jsx)(`h2`,{id:r,className:t,...n,children:e})}function g({children:e,className:t,...n}){let{descriptionId:r}=l();return(0,x.jsx)(`p`,{id:r,className:t,...n,children:e})}function _({children:e,className:t,...n}){let{onOpenChange:r}=l();return(0,x.jsx)(`button`,{type:`button`,onClick:()=>r(!1),className:t,...n,children:e})}function v({children:e,className:t,...n}){let{onOpenChange:r}=l();return(0,x.jsx)(`button`,{type:`button`,onClick:()=>r(!1),className:t,...n,children:e})}var y,b,x,S,C,w=t((()=>{y=e(n()),b=e(r()),s(),c(),x=i(),S=(0,y.createContext)(null),C={Root:u,Trigger:d,Portal:f,Overlay:p,Content:m,Title:h,Description:g,Action:_,Cancel:v}})),T,E,D,O,k,A,j;t((()=>{w(),T=i(),E={position:`fixed`,inset:0,display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`rgba(0, 0, 0, 0.5)`},D={backgroundColor:`white`,borderRadius:`8px`,padding:`24px`,minWidth:`320px`,maxWidth:`400px`,boxShadow:`0 4px 20px rgba(0, 0, 0, 0.15)`},O={title:`Components/AlertDialog`,parameters:{docs:{description:{component:`Headless Alert Dialog 컴포넌트. 삭제 확인, 회원 탈퇴 등 사용자의 명시적 확인이 필요한 상황에서 사용합니다. ESC 키와 배경 클릭으로 닫히지 않습니다.`}}}},k={name:`Delete Confirm`,render:()=>(0,T.jsxs)(C.Root,{children:[(0,T.jsx)(C.Trigger,{style:{padding:`8px 16px`,cursor:`pointer`},children:`상품 삭제`}),(0,T.jsx)(C.Portal,{children:(0,T.jsx)(C.Overlay,{style:E,children:(0,T.jsxs)(C.Content,{style:D,children:[(0,T.jsx)(C.Title,{style:{margin:`0 0 8px`,fontSize:`18px`},children:`상품을 삭제하시겠습니까?`}),(0,T.jsx)(C.Description,{style:{margin:`0 0 16px`,color:`#6b7280`},children:`삭제된 상품은 복구할 수 없습니다.`}),(0,T.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`8px`},children:[(0,T.jsx)(C.Cancel,{style:{padding:`8px 16px`,cursor:`pointer`},children:`취소`}),(0,T.jsx)(C.Action,{style:{padding:`8px 16px`,cursor:`pointer`},children:`삭제`})]})]})})})]})},A={name:`Withdraw Confirm`,render:()=>(0,T.jsxs)(C.Root,{children:[(0,T.jsx)(C.Trigger,{style:{padding:`8px 16px`,cursor:`pointer`},children:`회원 탈퇴`}),(0,T.jsx)(C.Portal,{children:(0,T.jsx)(C.Overlay,{style:E,children:(0,T.jsxs)(C.Content,{style:D,children:[(0,T.jsx)(C.Title,{style:{margin:`0 0 8px`,fontSize:`18px`},children:`정말 탈퇴하시겠습니까?`}),(0,T.jsx)(C.Description,{style:{margin:`0 0 16px`,color:`#6b7280`},children:`탈퇴하면 모든 데이터가 삭제되며 복구할 수 없습니다.`}),(0,T.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`8px`},children:[(0,T.jsx)(C.Cancel,{style:{padding:`8px 16px`,cursor:`pointer`},children:`취소`}),(0,T.jsx)(C.Action,{style:{padding:`8px 16px`,cursor:`pointer`},children:`탈퇴하기`})]})]})})})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Delete Confirm',
  render: () => <AlertDialog.Root>
      <AlertDialog.Trigger style={{
      padding: '8px 16px',
      cursor: 'pointer'
    }}>
        상품 삭제
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay style={overlayStyle}>
          <AlertDialog.Content style={contentStyle}>
            <AlertDialog.Title style={{
            margin: '0 0 8px',
            fontSize: '18px'
          }}>
              상품을 삭제하시겠습니까?
            </AlertDialog.Title>
            <AlertDialog.Description style={{
            margin: '0 0 16px',
            color: '#6b7280'
          }}>
              삭제된 상품은 복구할 수 없습니다.
            </AlertDialog.Description>
            <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '8px'
          }}>
              <AlertDialog.Cancel style={{
              padding: '8px 16px',
              cursor: 'pointer'
            }}>
                취소
              </AlertDialog.Cancel>
              <AlertDialog.Action style={{
              padding: '8px 16px',
              cursor: 'pointer'
            }}>
                삭제
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Overlay>
      </AlertDialog.Portal>
    </AlertDialog.Root>
}`,...k.parameters?.docs?.source},description:{story:`삭제 확인 다이얼로그.

삭제 확인 다이얼로그의 전형적인 패턴입니다.

테스트해보세요:
- ESC 키: 닫히지 않는 것을 확인
- 배경 클릭: 닫히지 않는 것을 확인
- "취소" 또는 "삭제" 버튼으로만 닫힘`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Withdraw Confirm',
  render: () => <AlertDialog.Root>
      <AlertDialog.Trigger style={{
      padding: '8px 16px',
      cursor: 'pointer'
    }}>
        회원 탈퇴
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay style={overlayStyle}>
          <AlertDialog.Content style={contentStyle}>
            <AlertDialog.Title style={{
            margin: '0 0 8px',
            fontSize: '18px'
          }}>
              정말 탈퇴하시겠습니까?
            </AlertDialog.Title>
            <AlertDialog.Description style={{
            margin: '0 0 16px',
            color: '#6b7280'
          }}>
              탈퇴하면 모든 데이터가 삭제되며 복구할 수 없습니다.
            </AlertDialog.Description>
            <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '8px'
          }}>
              <AlertDialog.Cancel style={{
              padding: '8px 16px',
              cursor: 'pointer'
            }}>
                취소
              </AlertDialog.Cancel>
              <AlertDialog.Action style={{
              padding: '8px 16px',
              cursor: 'pointer'
            }}>
                탈퇴하기
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Overlay>
      </AlertDialog.Portal>
    </AlertDialog.Root>
}`,...A.parameters?.docs?.source},description:{story:`회원 탈퇴 확인 다이얼로그.

회원 탈퇴 확인 다이얼로그의 전형적인 패턴입니다.`,...A.parameters?.docs?.description}}},j=[`DeleteConfirm`,`WithdrawConfirm`]}))();export{k as DeleteConfirm,A as WithdrawConfirm,j as __namedExportsOrder,O as default};