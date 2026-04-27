import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-Bm-_W9iR.js";import{t as r}from"./jsx-runtime-DxP0NviS.js";function i(){let e=(0,l.useContext)(d);if(!e)throw Error(`Tabs components must be used within Tabs.Root.`);return e}function a({defaultValue:e,value:t,onValueChange:n,orientation:r=`horizontal`,activationMode:i=`automatic`,children:a,className:o}){let[s,c]=(0,l.useState)(e??``),f=(0,l.useId)(),p=t!==void 0,m=p?t:s,h=(0,l.useCallback)(e=>{p||c(e),n?.(e)},[p,n]);return(0,u.jsx)(d.Provider,{value:{value:m,onValueChange:h,orientation:r,activationMode:i,baseId:f},children:(0,u.jsx)(`div`,{className:o,"data-orientation":r,children:a})})}function o({loop:e=!0,children:t,className:n,...r}){let{orientation:a}=i(),o=(0,l.useRef)(null);return(0,u.jsx)(`div`,{ref:o,role:`tablist`,"aria-orientation":a,onKeyDown:t=>{let n=o.current?.querySelectorAll(`[role="tab"]:not([disabled])`);if(!n||n.length===0)return;let r=Array.from(n).findIndex(e=>e===document.activeElement);if(r===-1)return;let i=a===`horizontal`,s=i?`ArrowLeft`:`ArrowUp`,c=i?`ArrowRight`:`ArrowDown`,l=null;switch(t.key){case c:l=e?(r+1)%n.length:Math.min(r+1,n.length-1);break;case s:l=e?(r-1+n.length)%n.length:Math.max(r-1,0);break;case`Home`:l=0;break;case`End`:l=n.length-1;break;default:return}t.preventDefault(),n[l].focus()},className:n,...r,children:t})}function s({value:e,disabled:t=!1,children:n,className:r,...a}){let{value:o,onValueChange:s,activationMode:c,baseId:l}=i(),d=o===e;return(0,u.jsx)(`button`,{role:`tab`,type:`button`,id:`${l}-tab-${e}`,"aria-selected":d,"aria-controls":`${l}-panel-${e}`,tabIndex:d?0:-1,disabled:t,onClick:()=>{t||s(e)},onKeyDown:t=>{c===`manual`&&(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),s(e))},onFocus:()=>{c===`automatic`&&!t&&s(e)},className:r,"data-state":d?`active`:`inactive`,"data-disabled":t?``:void 0,...a,children:n})}function c({value:e,forceMount:t=!1,children:n,className:r,...a}){let{value:o,baseId:s}=i(),c=o===e;return!c&&!t?null:(0,u.jsx)(`div`,{role:`tabpanel`,id:`${s}-panel-${e}`,"aria-labelledby":`${s}-tab-${e}`,tabIndex:0,hidden:!c,className:r,"data-state":c?`active`:`inactive`,...a,children:n})}var l,u,d,f,p=t((()=>{l=e(n()),u=r(),d=(0,l.createContext)(null),f={Root:a,List:o,Tab:s,Panel:c}})),m,h,g,_,v,y,b,x,S,C,w,T;t((()=>{p(),m=e(n()),h=r(),g={title:`Components/Tabs`,decorators:[e=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`style`,{children:`
          [role="tab"][data-state="active"] {
            font-weight: bold;
          }
          [role="tab"][data-state="inactive"] {
            color: #6b7280;
          }
          [role="tab"][data-state="inactive"]:hover {
            color: #111827;
          }
          [role="tabpanel"] {
            margin-top: 12px;
          }
          [role="tab"]:focus-visible {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
            border-radius: 2px;
          }
        `}),(0,h.jsx)(e,{})]})],parameters:{docs:{description:{component:`Headless Tabs 컴포넌트. WAI-ARIA Tabs 패턴을 준수하며, 키보드 네비게이션과 스크린 리더를 완벽 지원합니다. 스타일은 포함되어 있지 않으며, className 또는 data-state 속성으로 자유롭게 커스터마이징할 수 있습니다.`}}}},_={render:()=>(0,h.jsxs)(f.Root,{defaultValue:`tab1`,children:[(0,h.jsxs)(f.List,{children:[(0,h.jsx)(f.Tab,{value:`tab1`,children:`탭 1`}),(0,h.jsx)(f.Tab,{value:`tab2`,children:`탭 2`}),(0,h.jsx)(f.Tab,{value:`tab3`,children:`탭 3`})]}),(0,h.jsx)(f.Panel,{value:`tab1`,children:`첫 번째 탭의 내용입니다.`}),(0,h.jsx)(f.Panel,{value:`tab2`,children:`두 번째 탭의 내용입니다.`}),(0,h.jsx)(f.Panel,{value:`tab3`,children:`세 번째 탭의 내용입니다.`})]})},v={name:`Rounded Pill Style`,render:()=>(0,h.jsxs)(f.Root,{defaultValue:`all`,children:[(0,h.jsxs)(f.List,{style:{display:`flex`,gap:`8px`},children:[(0,h.jsx)(f.Tab,{value:`all`,style:{padding:`8px 16px`,borderRadius:`9999px`,border:`none`,cursor:`pointer`,fontSize:`14px`},children:`전체`}),(0,h.jsx)(f.Tab,{value:`recent`,style:{padding:`8px 16px`,borderRadius:`9999px`,border:`none`,cursor:`pointer`,fontSize:`14px`},children:`최신`}),(0,h.jsx)(f.Tab,{value:`popular`,style:{padding:`8px 16px`,borderRadius:`9999px`,border:`none`,cursor:`pointer`,fontSize:`14px`},children:`인기`})]}),(0,h.jsx)(f.Panel,{value:`all`,style:{padding:`16px 0`},children:`전체 목록`}),(0,h.jsx)(f.Panel,{value:`recent`,style:{padding:`16px 0`},children:`최신 목록`}),(0,h.jsx)(f.Panel,{value:`popular`,style:{padding:`16px 0`},children:`인기 목록`})]})},y={name:`Dark Theme`,render:()=>(0,h.jsxs)(f.Root,{defaultValue:`overview`,children:[(0,h.jsxs)(f.List,{style:{display:`flex`,gap:`4px`,backgroundColor:`#1f2937`,padding:`4px`,borderRadius:`8px`},children:[(0,h.jsx)(f.Tab,{value:`overview`,style:{padding:`8px 16px`,borderRadius:`6px`,border:`none`,cursor:`pointer`,color:`white`,fontSize:`14px`,backgroundColor:`transparent`},children:`개요`}),(0,h.jsx)(f.Tab,{value:`analytics`,style:{padding:`8px 16px`,borderRadius:`6px`,border:`none`,cursor:`pointer`,color:`white`,fontSize:`14px`,backgroundColor:`transparent`},children:`분석`})]}),(0,h.jsx)(f.Panel,{value:`overview`,style:{padding:`16px 0`,color:`#d1d5db`},children:`개요 내용`}),(0,h.jsx)(f.Panel,{value:`analytics`,style:{padding:`16px 0`,color:`#d1d5db`},children:`분석 내용`})]})},b={name:`Vertical`,render:()=>(0,h.jsx)(f.Root,{defaultValue:`profile`,orientation:`vertical`,children:(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`16px`},children:[(0,h.jsxs)(f.List,{style:{display:`flex`,flexDirection:`column`,gap:`4px`,minWidth:`120px`},children:[(0,h.jsx)(f.Tab,{value:`profile`,style:{textAlign:`left`,padding:`8px 12px`,border:`none`,cursor:`pointer`},children:`프로필`}),(0,h.jsx)(f.Tab,{value:`settings`,style:{textAlign:`left`,padding:`8px 12px`,border:`none`,cursor:`pointer`},children:`설정`}),(0,h.jsx)(f.Tab,{value:`notifications`,style:{textAlign:`left`,padding:`8px 12px`,border:`none`,cursor:`pointer`},children:`알림`})]}),(0,h.jsxs)(`div`,{style:{flex:1},children:[(0,h.jsx)(f.Panel,{value:`profile`,children:`프로필 설정 내용`}),(0,h.jsx)(f.Panel,{value:`settings`,children:`일반 설정 내용`}),(0,h.jsx)(f.Panel,{value:`notifications`,children:`알림 설정 내용`})]})]})})},x={name:`Disabled Tab`,render:()=>(0,h.jsxs)(f.Root,{defaultValue:`tab1`,children:[(0,h.jsxs)(f.List,{style:{display:`flex`,gap:`4px`},children:[(0,h.jsx)(f.Tab,{value:`tab1`,style:{padding:`8px 16px`,border:`none`,cursor:`pointer`},children:`활성 탭`}),(0,h.jsx)(f.Tab,{value:`tab2`,disabled:!0,style:{padding:`8px 16px`,border:`none`,opacity:.4,cursor:`not-allowed`},children:`비활성 탭`}),(0,h.jsx)(f.Tab,{value:`tab3`,style:{padding:`8px 16px`,border:`none`,cursor:`pointer`},children:`활성 탭`})]}),(0,h.jsx)(f.Panel,{value:`tab1`,children:`첫 번째 탭 내용`}),(0,h.jsx)(f.Panel,{value:`tab2`,children:`이 내용은 보이지 않음`}),(0,h.jsx)(f.Panel,{value:`tab3`,children:`세 번째 탭 내용`})]})},S={name:`Manual Activation`,render:()=>(0,h.jsxs)(f.Root,{defaultValue:`tab1`,activationMode:`manual`,children:[(0,h.jsxs)(f.List,{style:{display:`flex`,gap:`4px`},children:[(0,h.jsx)(f.Tab,{value:`tab1`,style:{padding:`8px 16px`,border:`none`,cursor:`pointer`},children:`탭 1`}),(0,h.jsx)(f.Tab,{value:`tab2`,style:{padding:`8px 16px`,border:`none`,cursor:`pointer`},children:`탭 2`}),(0,h.jsx)(f.Tab,{value:`tab3`,style:{padding:`8px 16px`,border:`none`,cursor:`pointer`},children:`탭 3`})]}),(0,h.jsx)(f.Panel,{value:`tab1`,children:`화살표로 이동 후 Space/Enter로 활성화해보세요.`}),(0,h.jsx)(f.Panel,{value:`tab2`,children:`두 번째 탭 내용`}),(0,h.jsx)(f.Panel,{value:`tab3`,children:`세 번째 탭 내용`})]})},C={name:`Force Mount`,render:()=>(0,h.jsxs)(f.Root,{defaultValue:`tab1`,children:[(0,h.jsxs)(f.List,{style:{display:`flex`,gap:`4px`},children:[(0,h.jsx)(f.Tab,{value:`tab1`,style:{padding:`8px 16px`,border:`none`,cursor:`pointer`},children:`탭 1`}),(0,h.jsx)(f.Tab,{value:`tab2`,style:{padding:`8px 16px`,border:`none`,cursor:`pointer`},children:`탭 2`})]}),(0,h.jsx)(f.Panel,{value:`tab1`,children:`이 패널은 forceMount 없음 — 선택 안 되면 DOM에서 사라짐`}),(0,h.jsx)(f.Panel,{value:`tab2`,forceMount:!0,children:`이 패널은 forceMount — 선택 안 돼도 DOM에 남아있음 (hidden)`})]})},w={name:`Controlled`,render:()=>{let e=[`step1`,`step2`,`step3`];return(0,h.jsx)(()=>{let[t,n]=(0,m.useState)(`step1`),r=e.indexOf(t);return(0,h.jsxs)(f.Root,{value:t,onValueChange:n,children:[(0,h.jsxs)(f.List,{style:{display:`flex`,gap:`4px`,marginBottom:`16px`},children:[(0,h.jsx)(f.Tab,{value:`step1`,style:{padding:`8px 16px`,border:`none`,cursor:`pointer`},children:`1단계`}),(0,h.jsx)(f.Tab,{value:`step2`,style:{padding:`8px 16px`,border:`none`,cursor:`pointer`},children:`2단계`}),(0,h.jsx)(f.Tab,{value:`step3`,style:{padding:`8px 16px`,border:`none`,cursor:`pointer`},children:`3단계`})]}),(0,h.jsx)(f.Panel,{value:`step1`,children:(0,h.jsx)(`p`,{children:`이름과 이메일을 입력하세요.`})}),(0,h.jsx)(f.Panel,{value:`step2`,children:(0,h.jsx)(`p`,{children:`선호 설정을 선택하세요.`})}),(0,h.jsx)(f.Panel,{value:`step3`,children:(0,h.jsx)(`p`,{children:`확인 후 제출하세요.`})}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,marginTop:`16px`},children:[(0,h.jsx)(`button`,{onClick:()=>n(e[r-1]),disabled:r===0,style:{padding:`6px 16px`,cursor:r===0?`not-allowed`:`pointer`,opacity:r===0?.4:1},children:`← 이전`}),(0,h.jsx)(`button`,{onClick:()=>n(e[r+1]),disabled:r===e.length-1,style:{padding:`6px 16px`,cursor:r===e.length-1?`not-allowed`:`pointer`,opacity:r===e.length-1?.4:1},children:`다음 →`})]})]})},{})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        <Tabs.Tab value="tab1">탭 1</Tabs.Tab>
        <Tabs.Tab value="tab2">탭 2</Tabs.Tab>
        <Tabs.Tab value="tab3">탭 3</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">첫 번째 탭의 내용입니다.</Tabs.Panel>
      <Tabs.Panel value="tab2">두 번째 탭의 내용입니다.</Tabs.Panel>
      <Tabs.Panel value="tab3">세 번째 탭의 내용입니다.</Tabs.Panel>
    </Tabs.Root>
}`,..._.parameters?.docs?.source},description:{story:`스토리는 "export const 이름" 으로 정의해요.
이름이 스토리북 사이드바에 표시됩니다.

render 함수 안에 컴포넌트를 어떻게 사용하는지 JSX로 작성하면
그게 스토리북 화면에 그대로 렌더링됩니다.
스토리 1: Default (기본 사용법)

가장 기본적인 사용법을 보여주는 스토리.
- Tabs.Root: 전체를 감싸는 컨테이너. defaultValue로 처음 선택될 탭 지정
- Tabs.List: 탭 버튼들을 감싸는 영역 (role="tablist")
- Tabs.Tab: 각 탭 버튼 (role="tab")
- Tabs.Panel: 탭 선택 시 보이는 내용 (role="tabpanel")

키보드로 테스트해보세요:
- Tab 키: 탭 목록으로 포커스 이동
- ← → 화살표: 탭 간 이동
- Home/End: 처음/마지막 탭으로 이동`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Rounded Pill Style',
  render: () => <Tabs.Root defaultValue="all">
      <Tabs.List style={{
      display: 'flex',
      gap: '8px'
    }}>
        <Tabs.Tab value="all" style={{
        padding: '8px 16px',
        borderRadius: '9999px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px'
      }}>
          전체
        </Tabs.Tab>
        <Tabs.Tab value="recent" style={{
        padding: '8px 16px',
        borderRadius: '9999px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px'
      }}>
          최신
        </Tabs.Tab>
        <Tabs.Tab value="popular" style={{
        padding: '8px 16px',
        borderRadius: '9999px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px'
      }}>
          인기
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="all" style={{
      padding: '16px 0'
    }}>
        전체 목록
      </Tabs.Panel>
      <Tabs.Panel value="recent" style={{
      padding: '16px 0'
    }}>
        최신 목록
      </Tabs.Panel>
      <Tabs.Panel value="popular" style={{
      padding: '16px 0'
    }}>
        인기 목록
      </Tabs.Panel>
    </Tabs.Root>
}`,...v.parameters?.docs?.source},description:{story:`스토리 2: Rounded Pill Style

className으로 Headless 컴포넌트에 스타일을 입힌 예시.
둥근 알약 형태의 탭 스타일.

핵심: 컴포넌트 코드는 동일하고, className만 달라짐!
이게 Headless UI의 장점 — 로직은 재사용하고 스타일만 바꿈.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Dark Theme',
  render: () => <Tabs.Root defaultValue="overview">
      <Tabs.List style={{
      display: 'flex',
      gap: '4px',
      backgroundColor: '#1f2937',
      padding: '4px',
      borderRadius: '8px'
    }}>
        <Tabs.Tab value="overview" style={{
        padding: '8px 16px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        color: 'white',
        fontSize: '14px',
        backgroundColor: 'transparent'
      }}>
          개요
        </Tabs.Tab>
        <Tabs.Tab value="analytics" style={{
        padding: '8px 16px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        color: 'white',
        fontSize: '14px',
        backgroundColor: 'transparent'
      }}>
          분석
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="overview" style={{
      padding: '16px 0',
      color: '#d1d5db'
    }}>
        개요 내용
      </Tabs.Panel>
      <Tabs.Panel value="analytics" style={{
      padding: '16px 0',
      color: '#d1d5db'
    }}>
        분석 내용
      </Tabs.Panel>
    </Tabs.Root>
}`,...y.parameters?.docs?.source},description:{story:`스토리 3: Dark Theme

어두운 테마 스타일.
같은 Headless Tabs인데 완전히 다른 디자인!`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Vertical',
  render: () => <Tabs.Root defaultValue="profile" orientation="vertical">
      <div style={{
      display: 'flex',
      gap: '16px'
    }}>
        <Tabs.List style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        minWidth: '120px'
      }}>
          <Tabs.Tab value="profile" style={{
          textAlign: 'left',
          padding: '8px 12px',
          border: 'none',
          cursor: 'pointer'
        }}>
            프로필
          </Tabs.Tab>
          <Tabs.Tab value="settings" style={{
          textAlign: 'left',
          padding: '8px 12px',
          border: 'none',
          cursor: 'pointer'
        }}>
            설정
          </Tabs.Tab>
          <Tabs.Tab value="notifications" style={{
          textAlign: 'left',
          padding: '8px 12px',
          border: 'none',
          cursor: 'pointer'
        }}>
            알림
          </Tabs.Tab>
        </Tabs.List>
        <div style={{
        flex: 1
      }}>
          <Tabs.Panel value="profile">프로필 설정 내용</Tabs.Panel>
          <Tabs.Panel value="settings">일반 설정 내용</Tabs.Panel>
          <Tabs.Panel value="notifications">알림 설정 내용</Tabs.Panel>
        </div>
      </div>
    </Tabs.Root>
}`,...b.parameters?.docs?.source},description:{story:`스토리 4: 세로 방향 탭

orientation="vertical"로 세로 탭을 만든 예시.
화살표 키가 ↑↓로 바뀝니다 (가로일 때는 ←→).`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Disabled Tab',
  render: () => <Tabs.Root defaultValue="tab1">
      <Tabs.List style={{
      display: 'flex',
      gap: '4px'
    }}>
        <Tabs.Tab value="tab1" style={{
        padding: '8px 16px',
        border: 'none',
        cursor: 'pointer'
      }}>
          활성 탭
        </Tabs.Tab>
        <Tabs.Tab value="tab2" disabled style={{
        padding: '8px 16px',
        border: 'none',
        opacity: 0.4,
        cursor: 'not-allowed'
      }}>
          비활성 탭
        </Tabs.Tab>
        <Tabs.Tab value="tab3" style={{
        padding: '8px 16px',
        border: 'none',
        cursor: 'pointer'
      }}>
          활성 탭
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">첫 번째 탭 내용</Tabs.Panel>
      <Tabs.Panel value="tab2">이 내용은 보이지 않음</Tabs.Panel>
      <Tabs.Panel value="tab3">세 번째 탭 내용</Tabs.Panel>
    </Tabs.Root>
}`,...x.parameters?.docs?.source},description:{story:`스토리 5: 비활성화된 탭

disabled 속성으로 특정 탭을 비활성화.
키보드 네비게이션에서도 건너뜀.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Manual Activation',
  render: () => <Tabs.Root defaultValue="tab1" activationMode="manual">
      <Tabs.List style={{
      display: 'flex',
      gap: '4px'
    }}>
        <Tabs.Tab value="tab1" style={{
        padding: '8px 16px',
        border: 'none',
        cursor: 'pointer'
      }}>탭 1</Tabs.Tab>
        <Tabs.Tab value="tab2" style={{
        padding: '8px 16px',
        border: 'none',
        cursor: 'pointer'
      }}>탭 2</Tabs.Tab>
        <Tabs.Tab value="tab3" style={{
        padding: '8px 16px',
        border: 'none',
        cursor: 'pointer'
      }}>탭 3</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">화살표로 이동 후 Space/Enter로 활성화해보세요.</Tabs.Panel>
      <Tabs.Panel value="tab2">두 번째 탭 내용</Tabs.Panel>
      <Tabs.Panel value="tab3">세 번째 탭 내용</Tabs.Panel>
    </Tabs.Root>
}`,...S.parameters?.docs?.source},description:{story:`스토리 6: Manual Activation (수동 활성화)

activationMode="manual"을 사용한 예시.
- automatic(기본): 화살표로 이동하면 바로 탭이 활성화됨
- manual: 화살표로 이동만 하고, Space/Enter를 눌러야 탭이 활성화됨

언제 manual을 쓰나?
탭 전환 시 API 호출이나 무거운 작업이 있을 때 사용합니다.
예를 들어 대시보드에서 각 탭마다 차트 데이터를 API로 가져와야 한다면,
화살표로 지나갈 때마다 API를 호출하면 낭비입니다.
이럴 때 manual로 하면 "진짜 이 탭을 보겠다"고 Enter를 눌렀을 때만 데이터를 가져옵니다.

테스트 방법:
1. 탭 버튼 클릭 후 ← → 화살표로 이동
2. 포커스만 이동하고 탭 내용은 안 바뀌는 걸 확인
3. Space 또는 Enter를 누르면 그때 탭이 활성화됨`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Force Mount',
  render: () => <Tabs.Root defaultValue="tab1">
      <Tabs.List style={{
      display: 'flex',
      gap: '4px'
    }}>
        <Tabs.Tab value="tab1" style={{
        padding: '8px 16px',
        border: 'none',
        cursor: 'pointer'
      }}>탭 1</Tabs.Tab>
        <Tabs.Tab value="tab2" style={{
        padding: '8px 16px',
        border: 'none',
        cursor: 'pointer'
      }}>탭 2</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">
        이 패널은 forceMount 없음 — 선택 안 되면 DOM에서 사라짐
      </Tabs.Panel>
      <Tabs.Panel value="tab2" forceMount>
        이 패널은 forceMount — 선택 안 돼도 DOM에 남아있음 (hidden)
      </Tabs.Panel>
    </Tabs.Root>
}`,...C.parameters?.docs?.source},description:{story:`스토리 7: ForceMount (항상 DOM 유지)

forceMount를 사용한 예시.
- 기본: 선택 안 된 패널은 DOM에서 완전히 제거됨
- forceMount: 선택 안 돼도 DOM에 남아있음 (hidden 상태)

언제 쓰나?
- CSS 애니메이션으로 패널 전환 효과를 줄 때
- DOM에서 제거되면 애니메이션이 안 되니까, 숨긴 상태로 유지해야 함

개발자 도구(F12)에서 Elements 탭을 보면:
- forceMount 없는 패널: 선택 안 되면 DOM에서 사라짐
- forceMount 있는 패널: hidden 속성만 붙고 DOM에 남아있음`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Controlled',
  render: () => {
    const steps = ['step1', 'step2', 'step3'];
    const StepFormExample = () => {
      const [activeStep, setActiveStep] = useState('step1');
      const currentIndex = steps.indexOf(activeStep);
      return <Tabs.Root value={activeStep} onValueChange={setActiveStep}>
          <Tabs.List style={{
          display: 'flex',
          gap: '4px',
          marginBottom: '16px'
        }}>
            <Tabs.Tab value="step1" style={{
            padding: '8px 16px',
            border: 'none',
            cursor: 'pointer'
          }}>1단계</Tabs.Tab>
            <Tabs.Tab value="step2" style={{
            padding: '8px 16px',
            border: 'none',
            cursor: 'pointer'
          }}>2단계</Tabs.Tab>
            <Tabs.Tab value="step3" style={{
            padding: '8px 16px',
            border: 'none',
            cursor: 'pointer'
          }}>3단계</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="step1">
            <p>이름과 이메일을 입력하세요.</p>
          </Tabs.Panel>
          <Tabs.Panel value="step2">
            <p>선호 설정을 선택하세요.</p>
          </Tabs.Panel>
          <Tabs.Panel value="step3">
            <p>확인 후 제출하세요.</p>
          </Tabs.Panel>
          <div style={{
          display: 'flex',
          gap: '8px',
          marginTop: '16px'
        }}>
            <button onClick={() => setActiveStep(steps[currentIndex - 1])} disabled={currentIndex === 0} style={{
            padding: '6px 16px',
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
            opacity: currentIndex === 0 ? 0.4 : 1
          }}>
              ← 이전
            </button>
            <button onClick={() => setActiveStep(steps[currentIndex + 1])} disabled={currentIndex === steps.length - 1} style={{
            padding: '6px 16px',
            cursor: currentIndex === steps.length - 1 ? 'not-allowed' : 'pointer',
            opacity: currentIndex === steps.length - 1 ? 0.4 : 1
          }}>
              다음 →
            </button>
          </div>
        </Tabs.Root>;
    };
    return <StepFormExample />;
  }
}`,...w.parameters?.docs?.source},description:{story:`스토리 8: Controlled (외부에서 상태 제어)

value + onValueChange로 탭 상태를 외부에서 제어하는 예시.
Step 폼처럼 "Previous / Next" 버튼으로 탭을 이동하는 실제 사용 사례.`,...w.parameters?.docs?.description}}},T=[`Default`,`RoundedPillStyle`,`DarkTheme`,`Vertical`,`WithDisabledTab`,`ManualActivation`,`WithForceMount`,`Controlled`]}))();export{w as Controlled,y as DarkTheme,_ as Default,S as ManualActivation,v as RoundedPillStyle,b as Vertical,x as WithDisabledTab,C as WithForceMount,T as __namedExportsOrder,g as default};