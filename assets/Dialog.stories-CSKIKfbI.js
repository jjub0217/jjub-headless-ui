import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-B7U2fISV.js";import{t as r}from"./react-dom-DtGe4Fif.js";import{t as i}from"./jsx-runtime-DxP0NviS.js";import{i as a,n as o,r as s,t as c}from"./use-body-scroll-lock-B_JL3gsO.js";function l(){let e=(0,v.useContext)(x);if(!e)throw Error(`Dialog components must be used within Dialog.Root.`);return e}function u({defaultOpen:e=!1,open:t,onOpenChange:n,children:r}){let[i,a]=(0,v.useState)(e),o=(0,v.useId)(),s=(0,v.useRef)(null),c=t!==void 0,l=c?t:i,u=(0,v.useCallback)(e=>{c||a(e),n?.(e)},[c,n]);return(0,b.jsx)(x.Provider,{value:{open:l,onOpenChange:u,titleId:`${o}-dialog-title`,descriptionId:`${o}-dialog-description`,triggerRef:s},children:r})}function d({children:e,className:t,...n}){let{open:r,onOpenChange:i,triggerRef:a}=l();return(0,b.jsx)(`button`,{ref:a,type:`button`,onClick:()=>i(!0),"data-state":r?`open`:`closed`,className:t,...n,children:e})}function f({children:e,container:t}){let{open:n}=l();return n?(0,y.createPortal)(e,t??document.body):null}function p({className:e,onClick:t,...n}){let{open:r,onOpenChange:i}=l();return(0,b.jsx)(`div`,{onClick:e=>{e.target===e.currentTarget&&i(!1),t?.(e)},"data-state":r?`open`:`closed`,className:e,...n})}function m({onEscapeKeyDown:e,children:t,className:n,...r}){let{open:i,onOpenChange:s,titleId:c,descriptionId:u,triggerRef:d}=l(),f=(0,v.useRef)(null);a(f,i),o(i),(0,v.useEffect)(()=>{if(!i)return;let t=t=>{t.key===`Escape`&&(e?.(t),t.defaultPrevented||s(!1))};return document.addEventListener(`keydown`,t),()=>document.removeEventListener(`keydown`,t)},[i,s,e]);let p=(0,v.useRef)(i);return(0,v.useEffect)(()=>{p.current&&!i&&d.current?.focus(),p.current=i},[i,d]),i?(0,b.jsx)(`div`,{ref:f,role:`dialog`,"aria-modal":`true`,"aria-labelledby":c,"aria-describedby":u,"data-state":i?`open`:`closed`,className:n,...r,children:t}):null}function h({children:e,className:t,...n}){let{titleId:r}=l();return(0,b.jsx)(`h2`,{id:r,className:t,...n,children:e})}function g({children:e,className:t,...n}){let{descriptionId:r}=l();return(0,b.jsx)(`p`,{id:r,className:t,...n,children:e})}function _({children:e,className:t,...n}){let{onOpenChange:r}=l();return(0,b.jsx)(`button`,{type:`button`,onClick:()=>r(!1),className:t,...n,children:e})}var v,y,b,x,S,C=t((()=>{v=e(n()),y=e(r()),s(),c(),b=i(),x=(0,v.createContext)(null),S={Root:u,Trigger:d,Portal:f,Overlay:p,Content:m,Title:h,Description:g,Close:_}})),w,T,E,D,O,k,A,j,M;t((()=>{C(),w=e(n()),T=i(),E={position:`fixed`,inset:0,display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`rgba(0, 0, 0, 0.5)`},D={backgroundColor:`white`,borderRadius:`8px`,padding:`24px`,minWidth:`320px`,maxWidth:`480px`,boxShadow:`0 4px 20px rgba(0, 0, 0, 0.15)`},O={title:`Components/Dialog`,parameters:{docs:{description:{component:`Headless Dialog 컴포넌트. WAI-ARIA Dialog (Modal) 패턴을 준수하며, 포커스 트랩, ESC 닫기, 포커스 복원을 자동으로 처리합니다.`}}}},k={render:()=>(0,T.jsxs)(S.Root,{children:[(0,T.jsx)(S.Trigger,{children:`다이얼로그 열기`}),(0,T.jsx)(S.Portal,{children:(0,T.jsx)(S.Overlay,{style:E,children:(0,T.jsxs)(S.Content,{style:D,children:[(0,T.jsx)(S.Title,{style:{margin:`0 0 8px`,fontSize:`18px`},children:`기본 다이얼로그`}),(0,T.jsx)(S.Description,{style:{margin:`0 0 16px`,color:`#6b7280`},children:`이것은 기본 다이얼로그입니다. ESC 키 또는 배경을 클릭하면 닫힙니다.`}),(0,T.jsx)(S.Close,{style:{padding:`8px 16px`,cursor:`pointer`},children:`닫기`})]})})})]})},A={name:`Form Dialog`,render:()=>(0,T.jsxs)(S.Root,{children:[(0,T.jsx)(S.Trigger,{style:{padding:`8px 16px`,cursor:`pointer`},children:`프로필 수정`}),(0,T.jsx)(S.Portal,{children:(0,T.jsx)(S.Overlay,{style:E,children:(0,T.jsxs)(S.Content,{style:D,children:[(0,T.jsx)(S.Title,{style:{margin:`0 0 8px`,fontSize:`18px`},children:`프로필 수정`}),(0,T.jsx)(S.Description,{style:{margin:`0 0 16px`,color:`#6b7280`},children:`닉네임과 자기소개를 수정할 수 있습니다.`}),(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,T.jsxs)(`label`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,T.jsx)(`span`,{style:{fontSize:`14px`,fontWeight:`bold`},children:`닉네임`}),(0,T.jsx)(`input`,{type:`text`,defaultValue:`jjub0217`,style:{padding:`8px`,border:`1px solid #d1d5db`,borderRadius:`4px`}})]}),(0,T.jsxs)(`label`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,T.jsx)(`span`,{style:{fontSize:`14px`,fontWeight:`bold`},children:`자기소개`}),(0,T.jsx)(`textarea`,{defaultValue:`안녕하세요!`,rows:3,style:{padding:`8px`,border:`1px solid #d1d5db`,borderRadius:`4px`,resize:`vertical`}})]})]}),(0,T.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`8px`,marginTop:`16px`},children:[(0,T.jsx)(S.Close,{style:{padding:`8px 16px`,cursor:`pointer`},children:`취소`}),(0,T.jsx)(S.Close,{style:{padding:`8px 16px`,cursor:`pointer`},children:`저장`})]})]})})})]})},j={render:()=>(0,T.jsx)(()=>{let[e,t]=(0,w.useState)(!1);return(0,T.jsxs)(`div`,{children:[(0,T.jsxs)(`p`,{style:{marginBottom:`8px`},children:[`상태: `,e?`열림`:`닫힘`]}),(0,T.jsxs)(S.Root,{open:e,onOpenChange:t,children:[(0,T.jsx)(S.Trigger,{style:{padding:`8px 16px`,cursor:`pointer`},children:`다이얼로그 열기`}),(0,T.jsx)(S.Portal,{children:(0,T.jsx)(S.Overlay,{style:E,children:(0,T.jsxs)(S.Content,{style:D,children:[(0,T.jsx)(S.Title,{style:{margin:`0 0 8px`,fontSize:`18px`},children:`제어 모드`}),(0,T.jsx)(S.Description,{style:{margin:`0 0 16px`,color:`#6b7280`},children:`open과 onOpenChange로 외부에서 상태를 제어합니다.`}),(0,T.jsx)(S.Close,{style:{padding:`8px 16px`,cursor:`pointer`},children:`닫기`})]})})})]})]})},{})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog.Root>
      <Dialog.Trigger>다이얼로그 열기</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay style={overlayStyle}>
        <Dialog.Content style={contentStyle}>
          <Dialog.Title style={{
            margin: '0 0 8px',
            fontSize: '18px'
          }}>
            기본 다이얼로그
          </Dialog.Title>
          <Dialog.Description style={{
            margin: '0 0 16px',
            color: '#6b7280'
          }}>
            이것은 기본 다이얼로그입니다. ESC 키 또는 배경을 클릭하면 닫힙니다.
          </Dialog.Description>
          <Dialog.Close style={{
            padding: '8px 16px',
            cursor: 'pointer'
          }}>
            닫기
          </Dialog.Close>
        </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
}`,...k.parameters?.docs?.source},description:{story:`기본 사용법.

"다이얼로그 열기" 버튼을 클릭하면 다이얼로그가 열립니다.

테스트해보세요:
- Tab 키: 포커스가 다이얼로그 안에서만 순환하는지
- ESC 키: 다이얼로그가 닫히는지
- 닫힌 후: 포커스가 "다이얼로그 열기" 버튼으로 돌아오는지
- 배경 클릭: 다이얼로그가 닫히는지`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Form Dialog',
  render: () => <Dialog.Root>
      <Dialog.Trigger style={{
      padding: '8px 16px',
      cursor: 'pointer'
    }}>
        프로필 수정
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay style={overlayStyle}>
        <Dialog.Content style={contentStyle}>
          <Dialog.Title style={{
            margin: '0 0 8px',
            fontSize: '18px'
          }}>
            프로필 수정
          </Dialog.Title>
          <Dialog.Description style={{
            margin: '0 0 16px',
            color: '#6b7280'
          }}>
            닉네임과 자기소개를 수정할 수 있습니다.
          </Dialog.Description>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <label style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              <span style={{
                fontSize: '14px',
                fontWeight: 'bold'
              }}>닉네임</span>
              <input type="text" defaultValue="jjub0217" style={{
                padding: '8px',
                border: '1px solid #d1d5db',
                borderRadius: '4px'
              }} />
            </label>
            <label style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              <span style={{
                fontSize: '14px',
                fontWeight: 'bold'
              }}>자기소개</span>
              <textarea defaultValue="안녕하세요!" rows={3} style={{
                padding: '8px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                resize: 'vertical'
              }} />
            </label>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '8px',
            marginTop: '16px'
          }}>
            <Dialog.Close style={{
              padding: '8px 16px',
              cursor: 'pointer'
            }}>
              취소
            </Dialog.Close>
            <Dialog.Close style={{
              padding: '8px 16px',
              cursor: 'pointer'
            }}>
              저장
            </Dialog.Close>
          </div>
        </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
}`,...A.parameters?.docs?.source},description:{story:`폼이 포함된 다이얼로그.

Tab 키로 입력 필드와 버튼 사이를 이동해보세요.
포커스가 다이얼로그 밖으로 나가지 않는 것을 확인할 수 있습니다.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ControlledExample = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <div>
          <p style={{
          marginBottom: '8px'
        }}>상태: {isOpen ? '열림' : '닫힘'}</p>
          <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger style={{
            padding: '8px 16px',
            cursor: 'pointer'
          }}>
              다이얼로그 열기
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay style={overlayStyle}>
              <Dialog.Content style={contentStyle}>
                <Dialog.Title style={{
                  margin: '0 0 8px',
                  fontSize: '18px'
                }}>
                  제어 모드
                </Dialog.Title>
                <Dialog.Description style={{
                  margin: '0 0 16px',
                  color: '#6b7280'
                }}>
                  open과 onOpenChange로 외부에서 상태를 제어합니다.
                </Dialog.Description>
                <Dialog.Close style={{
                  padding: '8px 16px',
                  cursor: 'pointer'
                }}>
                  닫기
                </Dialog.Close>
              </Dialog.Content>
              </Dialog.Overlay>
            </Dialog.Portal>
          </Dialog.Root>
        </div>;
    };
    return <ControlledExample />;
  }
}`,...j.parameters?.docs?.source},description:{story:`외부에서 열림/닫힘 상태를 제어하는 예시.

Tabs의 Controlled와 같은 개념입니다.
open + onOpenChange로 상태를 직접 관리합니다.`,...j.parameters?.docs?.description}}},M=[`Default`,`WithForm`,`Controlled`]}))();export{j as Controlled,k as Default,A as WithForm,M as __namedExportsOrder,O as default};