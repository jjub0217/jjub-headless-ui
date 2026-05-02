import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-DOtFvnP8.js";import{t as r}from"./jsx-runtime-DxP0NviS.js";function i(){let e=(0,s.useContext)(l);if(!e)throw Error(`Progress components must be used within Progress.Root.`);return e}function a({value:e=null,max:t=100,children:n,className:r,...i}){let a=e===null?null:Math.min(Math.max(0,e),t),o=a===null?null:Math.round(a/t*100);return(0,c.jsx)(l.Provider,{value:{value:a,max:t,percentage:o},children:(0,c.jsx)(`div`,{role:`progressbar`,"aria-valuenow":a??void 0,"aria-valuemin":0,"aria-valuemax":t,"aria-label":o===null?`Loading`:`${o}% progress`,"aria-valuetext":o===null?void 0:`${o}%`,"data-state":o===100?`complete`:a===null?`indeterminate`:`loading`,className:r,...i,children:n})})}function o({children:e,className:t,style:n,...r}){let{percentage:a}=i();return(0,c.jsx)(`div`,{"data-percentage":a??void 0,"data-indeterminate":a===null?``:void 0,className:t,style:n,...r,children:e})}var s,c,l,u,d=t((()=>{s=e(n()),c=r(),l=(0,s.createContext)(null),u={Root:a,Indicator:o}})),f,p,m,h,g,_,v,y,b;t((()=>{d(),f=e(n()),p=r(),m={title:`Components/Progress`,decorators:[e=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`style`,{children:`
          .progress-track {
            width: 100%;
            height: 8px;
            background: #e5e7eb;
            border-radius: 9999px;
            overflow: hidden;
          }
          .progress-track[data-state="complete"] .progress-fill {
            background: #22c55e;
          }
          .progress-track[data-state="loading"] .progress-fill {
            background: #3b82f6;
          }
          .progress-track[data-state="indeterminate"] .progress-fill {
            background: #3b82f6;
            width: 40% !important;
            animation: indeterminate 1.5s ease-in-out infinite;
          }
          @keyframes indeterminate {
            0%   { transform: translateX(-150%); }
            100% { transform: translateX(350%); }
          }
        `}),(0,p.jsx)(e,{})]})],parameters:{docs:{description:{component:`Headless Progress 컴포넌트. WAI-ARIA progressbar 패턴을 준수하며, 스크린 리더에 진행률을 자동으로 전달합니다. data-state와 data-percentage 속성으로 스타일을 자유롭게 적용할 수 있습니다.`}}}},h={name:`Default (50%)`,render:()=>(0,p.jsxs)(`div`,{style:{width:`320px`},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:`6px`,fontSize:`13px`,color:`#374151`},children:[(0,p.jsx)(`span`,{children:`파일 업로드 중...`}),(0,p.jsx)(`span`,{children:`50%`})]}),(0,p.jsx)(u.Root,{value:50,className:`progress-track`,children:(0,p.jsx)(u.Indicator,{className:`progress-fill`,style:{height:`100%`,width:`50%`,borderRadius:`9999px`,transition:`width 0.3s ease`}})})]})},g={name:`Full (100%)`,render:()=>(0,p.jsxs)(`div`,{style:{width:`320px`},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:`6px`,fontSize:`13px`,color:`#374151`},children:[(0,p.jsx)(`span`,{children:`업로드 완료!`}),(0,p.jsx)(`span`,{children:`100%`})]}),(0,p.jsx)(u.Root,{value:100,className:`progress-track`,children:(0,p.jsx)(u.Indicator,{className:`progress-fill`,style:{height:`100%`,width:`100%`,borderRadius:`9999px`,transition:`width 0.3s ease`}})})]})},_={name:`Animated`,render:()=>(0,p.jsx)(()=>{let[e,t]=(0,f.useState)(0);return(0,f.useEffect)(()=>{if(e>=100)return;let n=setTimeout(()=>t(e=>Math.min(e+5,100)),200);return()=>clearTimeout(n)},[e]),(0,p.jsxs)(`div`,{style:{width:`320px`},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:`6px`,fontSize:`13px`,color:`#374151`},children:[(0,p.jsx)(`span`,{children:e<100?`처리 중...`:`완료!`}),(0,p.jsxs)(`span`,{children:[e,`%`]})]}),(0,p.jsx)(u.Root,{value:e,className:`progress-track`,children:(0,p.jsx)(u.Indicator,{className:`progress-fill`,style:{height:`100%`,width:`${e}%`,borderRadius:`9999px`,transition:`width 0.2s ease`}})}),e>=100&&(0,p.jsx)(`button`,{onClick:()=>t(0),style:{marginTop:`10px`,padding:`4px 12px`,fontSize:`13px`,cursor:`pointer`,borderRadius:`4px`,border:`1px solid #d1d5db`},children:`다시 시작`})]})},{})},v={name:`Indeterminate`,render:()=>(0,p.jsxs)(`div`,{style:{width:`320px`},children:[(0,p.jsx)(`div`,{style:{marginBottom:`6px`,fontSize:`13px`,color:`#374151`},children:(0,p.jsx)(`span`,{children:`데이터 로딩 중...`})}),(0,p.jsx)(u.Root,{value:null,className:`progress-track`,children:(0,p.jsx)(u.Indicator,{className:`progress-fill`,style:{height:`100%`,borderRadius:`9999px`}})})]})},y={name:`Controlled`,render:()=>(0,p.jsx)(()=>{let[e,t]=(0,f.useState)(30);return(0,p.jsxs)(`div`,{style:{width:`320px`},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:`6px`,fontSize:`13px`,color:`#374151`},children:[(0,p.jsx)(`span`,{children:`진행률`}),(0,p.jsxs)(`span`,{children:[e,`%`]})]}),(0,p.jsx)(u.Root,{value:e,className:`progress-track`,children:(0,p.jsx)(u.Indicator,{className:`progress-fill`,style:{height:`100%`,width:`${e}%`,borderRadius:`9999px`,transition:`width 0.15s ease`}})}),(0,p.jsx)(`input`,{type:`range`,min:0,max:100,value:e,onChange:e=>t(Number(e.target.value)),style:{width:`100%`,marginTop:`12px`},"aria-label":`진행률 조절`})]})},{})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Default (50%)',
  render: () => <div style={{
    width: '320px'
  }}>
      <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '6px',
      fontSize: '13px',
      color: '#374151'
    }}>
        <span>파일 업로드 중...</span>
        <span>50%</span>
      </div>
      <Progress.Root value={50} className="progress-track">
        <Progress.Indicator className="progress-fill" style={{
        height: '100%',
        width: '50%',
        borderRadius: '9999px',
        transition: 'width 0.3s ease'
      }} />
      </Progress.Root>
    </div>
}`,...h.parameters?.docs?.source},description:{story:`기본 (50%).

value=50이면 50% 진행 상태.
Indicator의 너비를 data-percentage로 제어합니다.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Full (100%)',
  render: () => <div style={{
    width: '320px'
  }}>
      <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '6px',
      fontSize: '13px',
      color: '#374151'
    }}>
        <span>업로드 완료!</span>
        <span>100%</span>
      </div>
      <Progress.Root value={100} className="progress-track">
        <Progress.Indicator className="progress-fill" style={{
        height: '100%',
        width: '100%',
        borderRadius: '9999px',
        transition: 'width 0.3s ease'
      }} />
      </Progress.Root>
    </div>
}`,...g.parameters?.docs?.source},description:{story:`완료 (100%).

data-state="complete"로 완료 스타일(초록)이 적용됩니다.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Animated',
  render: () => {
    const AnimatedExample = () => {
      const [value, setValue] = useState(0);
      useEffect(() => {
        if (value >= 100) return;
        const timer = setTimeout(() => setValue(v => Math.min(v + 5, 100)), 200);
        return () => clearTimeout(timer);
      }, [value]);
      return <div style={{
        width: '320px'
      }}>
          <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '6px',
          fontSize: '13px',
          color: '#374151'
        }}>
            <span>{value < 100 ? '처리 중...' : '완료!'}</span>
            <span>{value}%</span>
          </div>
          <Progress.Root value={value} className="progress-track">
            <Progress.Indicator className="progress-fill" style={{
            height: '100%',
            width: \`\${value}%\`,
            borderRadius: '9999px',
            transition: 'width 0.2s ease'
          }} />
          </Progress.Root>
          {value >= 100 && <button onClick={() => setValue(0)} style={{
          marginTop: '10px',
          padding: '4px 12px',
          fontSize: '13px',
          cursor: 'pointer',
          borderRadius: '4px',
          border: '1px solid #d1d5db'
        }}>
              다시 시작
            </button>}
        </div>;
    };
    return <AnimatedExample />;
  }
}`,..._.parameters?.docs?.source},description:{story:`애니메이션 (자동 증가).

useEffect로 value를 자동으로 증가시켜 실제 로딩 상황을 시뮬레이션합니다.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Indeterminate',
  render: () => <div style={{
    width: '320px'
  }}>
      <div style={{
      marginBottom: '6px',
      fontSize: '13px',
      color: '#374151'
    }}>
        <span>데이터 로딩 중...</span>
      </div>
      <Progress.Root value={null} className="progress-track">
        <Progress.Indicator className="progress-fill" style={{
        height: '100%',
        borderRadius: '9999px'
      }} />
      </Progress.Root>
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Indeterminate (불확정 상태).

value를 null로 전달하면 indeterminate 상태가 됩니다.
CSS 애니메이션으로 이동하는 바를 구현합니다.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Controlled',
  render: () => {
    const ControlledExample = () => {
      const [value, setValue] = useState(30);
      return <div style={{
        width: '320px'
      }}>
          <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '6px',
          fontSize: '13px',
          color: '#374151'
        }}>
            <span>진행률</span>
            <span>{value}%</span>
          </div>
          <Progress.Root value={value} className="progress-track">
            <Progress.Indicator className="progress-fill" style={{
            height: '100%',
            width: \`\${value}%\`,
            borderRadius: '9999px',
            transition: 'width 0.15s ease'
          }} />
          </Progress.Root>
          <input type="range" min={0} max={100} value={value} onChange={e => setValue(Number(e.target.value))} style={{
          width: '100%',
          marginTop: '12px'
        }} aria-label="진행률 조절" />
        </div>;
    };
    return <ControlledExample />;
  }
}`,...y.parameters?.docs?.source},description:{story:`Controlled.

슬라이더로 진행률을 직접 제어하는 예시.`,...y.parameters?.docs?.description}}},b=[`Default`,`Full`,`Animated`,`Indeterminate`,`Controlled`]}))();export{_ as Animated,y as Controlled,h as Default,g as Full,v as Indeterminate,b as __namedExportsOrder,m as default};