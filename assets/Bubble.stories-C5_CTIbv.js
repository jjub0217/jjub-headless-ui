import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-DOtFvnP8.js";import{t as r}from"./jsx-runtime-DxP0NviS.js";import{a as i,i as a,n as o,t as s}from"./layout-Byg2DrOE.js";function c(e,t,n){let r=o(e,t,n).lineCount,a=1,s=t;for(;a<s;){let t=Math.floor((a+s)/2);o(e,t,n).lineCount<=r?s=t:a=t+1}let c=0;return i(e,a,e=>{e.width>c&&(c=e.width)}),Math.ceil(c)}function l({text:e,maxWidth:t,whiteSpace:n=`normal`,style:r,...i}){let o=(0,u.useRef)(null),[s,l]=(0,u.useState)(null);return(0,u.useEffect)(()=>{let r=o.current;if(!r||t===void 0){l(null);return}let i=getComputedStyle(r),s=i.font,u=parseFloat(i.lineHeight)||20,d=parseFloat(i.paddingLeft||`0`)+parseFloat(i.paddingRight||`0`),f=t-d;l(c(a(e,s,{wordBreak:`keep-all`,whiteSpace:n}),f,u)+d)},[e,t,n]),(0,d.jsx)(`div`,{ref:o,style:{boxSizing:`border-box`,maxWidth:t===void 0?void 0:`${t}px`,width:s===null?`fit-content`:`${s}px`,wordBreak:`keep-all`,overflowWrap:`break-word`,whiteSpace:n===`pre-wrap`?`pre-wrap`:void 0,...r},...i,children:e})}var u,d,f=t((()=>{u=e(n()),s(),d=r(),l.__docgenInfo={description:`Pretext 기반 채팅 버블.
fit-content가 만드는 데드 스페이스를 없애고, 텍스트에 딱 맞는 너비로 버블을 만듦.
Canvas measureText로 글자 폭을 캐싱한 후 산수만 수행 (DOM 측정 없음).`,methods:[],displayName:`Bubble`,props:{text:{required:!0,tsType:{name:`string`},description:`메시지 텍스트 (Pretext가 측정하기 위해 string이어야 함).`},maxWidth:{required:!1,tsType:{name:`number`},description:`버블 최대 너비 (px). 미지정 시 Pretext 최적화 없이 자연 fit-content로 렌더.`},whiteSpace:{required:!1,tsType:{name:`union`,raw:`'normal' | 'pre-wrap'`,elements:[{name:`literal`,value:`'normal'`},{name:`literal`,value:`'pre-wrap'`}]},description:`텍스트의 whitespace 처리. 'pre-wrap'은 \\n과 연속 공백 보존 (채팅 멀티라인 메시지에 사용). 기본 'normal'.`,defaultValue:{value:`'normal'`,computed:!1}}},composes:[`ComponentPropsWithoutRef`]}})),p,m,h,g,_,v,y,b,x;t((()=>{p=e(n()),f(),m=r(),h={title:`Components/Bubble`,component:l,decorators:[(e,t)=>(0,m.jsx)(`div`,{style:{maxWidth:t.parameters?.fullWidth?`1200px`:`420px`},children:(0,m.jsx)(e,{})})],parameters:{docs:{description:{component:`Pretext 기반 채팅 버블. fit-content와 달리 짧은 줄 옆 빈 공간이 없는 tight한 버블.`}}}},g={padding:`8px 12px`,borderRadius:`16px`,font:`15px / 20px "Helvetica Neue", Helvetica, Arial, sans-serif`,marginBottom:`8px`,color:`white`},_={...g,background:`#22c55e`,borderRadius:`16px 16px 16px 4px`},v={...g,background:`#6b7280`,borderRadius:`16px 16px 4px 16px`,alignSelf:`flex-end`},y={render:()=>(0,m.jsx)(l,{text:`3시쯤 어떨까요? 그 전에 점심도 같이 먹으면 좋을 것 같아요. 근처에 맛있는 파스타 집이 있거든요.`,maxWidth:300,style:_})},b={name:`fit-content vs Pretext (비교)`,parameters:{fullWidth:!0},render:()=>{let[e,t]=(0,p.useState)(300),n=[{text:`안녕하세요! 오늘 날씨가 정말 좋네요.`,sent:!1},{text:`내일 같이 카페 가실래요? 새로 생긴 곳이 있는데 분위기가 정말 좋다고 해요.`,sent:!0},{text:`주소는 서울특별시 강남구 테헤란로 123번길 45 카페드림 2층입니다.`,sent:!1},{text:`좋아요! 몇 시에 만날까요?`,sent:!0},{text:`3시쯤 어떨까요? 그 전에 점심도 같이 먹으면 좋을 것 같아요. 근처에 맛있는 파스타 집이 있거든요.`,sent:!1},{text:`네 알겠습니다!`,sent:!0},{text:`혹시 주차 가능한 곳인가요? 차를 가지고 갈까 고민 중이에요.`,sent:!1}],r={display:`flex`,flexDirection:`column`,padding:12,background:`#1c1c1e`,borderRadius:14},i={..._,width:`fit-content`},a={...v,width:`fit-content`};return(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`div`,{style:{marginBottom:16,padding:`12px 16px`,background:`#f9fafb`,borderRadius:8},children:[(0,m.jsxs)(`label`,{style:{display:`block`,fontSize:14,fontWeight:`bold`,marginBottom:8},children:[`최대 너비:`,` `,(0,m.jsx)(`span`,{style:{fontFamily:`monospace`,color:`#3b82f6`},children:e}),`px`]}),(0,m.jsx)(`input`,{type:`range`,min:`150`,max:`500`,value:e,onChange:e=>t(Number(e.target.value)),style:{width:`100%`}})]}),(0,m.jsxs)(`div`,{style:{display:`flex`,gap:24},children:[(0,m.jsxs)(`div`,{style:{flex:1},children:[(0,m.jsx)(`h4`,{style:{margin:`0 0 12px`,textAlign:`center`,padding:8,borderRadius:6,background:`#fef2f2`,color:`#991b1b`,fontSize:14},children:`CSS fit-content`}),(0,m.jsx)(`div`,{style:r,children:n.map((t,n)=>(0,m.jsx)(`div`,{style:{...t.sent?a:i,maxWidth:`${e}px`},children:t.text},n))})]}),(0,m.jsxs)(`div`,{style:{flex:1},children:[(0,m.jsx)(`h4`,{style:{margin:`0 0 12px`,textAlign:`center`,padding:8,borderRadius:6,background:`#f0fdf4`,color:`#166534`,fontSize:14},children:`Pretext tightWidth`}),(0,m.jsx)(`div`,{style:r,children:n.map((t,n)=>(0,m.jsx)(l,{text:t.text,maxWidth:e,style:t.sent?v:_},n))})]})]})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Bubble text="3시쯤 어떨까요? 그 전에 점심도 같이 먹으면 좋을 것 같아요. 근처에 맛있는 파스타 집이 있거든요." maxWidth={300} style={recvStyle} />
}`,...y.parameters?.docs?.source},description:{story:`기본 — 단일 버블 (maxWidth 300px 적용 + Pretext 최적화).

maxWidth를 주면 Pretext가 줄별 폭을 산수 계산해 가장 좁은 폭(tightWidth)으로 좁힘.
maxWidth를 미지정하면 fit-content로 자연 폭만 적용 (Pretext 최적화 없음).`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'fit-content vs Pretext (비교)',
  parameters: {
    fullWidth: true
  },
  render: () => {
    const [maxWidth, setMaxWidth] = useState(300);
    const messages = [{
      text: '안녕하세요! 오늘 날씨가 정말 좋네요.',
      sent: false
    }, {
      text: '내일 같이 카페 가실래요? 새로 생긴 곳이 있는데 분위기가 정말 좋다고 해요.',
      sent: true
    }, {
      text: '주소는 서울특별시 강남구 테헤란로 123번길 45 카페드림 2층입니다.',
      sent: false
    }, {
      text: '좋아요! 몇 시에 만날까요?',
      sent: true
    }, {
      text: '3시쯤 어떨까요? 그 전에 점심도 같이 먹으면 좋을 것 같아요. 근처에 맛있는 파스타 집이 있거든요.',
      sent: false
    }, {
      text: '네 알겠습니다!',
      sent: true
    }, {
      text: '혹시 주차 가능한 곳인가요? 차를 가지고 갈까 고민 중이에요.',
      sent: false
    }];
    const chatContainerStyle = {
      display: 'flex',
      flexDirection: 'column' as const,
      padding: 12,
      background: '#1c1c1e',
      borderRadius: 14
    };
    const cssRecvStyle = {
      ...recvStyle,
      width: 'fit-content'
    };
    const cssSentStyle = {
      ...sentStyle,
      width: 'fit-content'
    };
    return <div>
        <div style={{
        marginBottom: 16,
        padding: '12px 16px',
        background: '#f9fafb',
        borderRadius: 8
      }}>
          <label style={{
          display: 'block',
          fontSize: 14,
          fontWeight: 'bold',
          marginBottom: 8
        }}>
            최대 너비:{' '}
            <span style={{
            fontFamily: 'monospace',
            color: '#3b82f6'
          }}>
              {maxWidth}
            </span>
            px
          </label>
          <input type="range" min="150" max="500" value={maxWidth} onChange={e => setMaxWidth(Number(e.target.value))} style={{
          width: '100%'
        }} />
        </div>

        <div style={{
        display: 'flex',
        gap: 24
      }}>
          <div style={{
          flex: 1
        }}>
            <h4 style={{
            margin: '0 0 12px',
            textAlign: 'center',
            padding: 8,
            borderRadius: 6,
            background: '#fef2f2',
            color: '#991b1b',
            fontSize: 14
          }}>
              CSS fit-content
            </h4>
            <div style={chatContainerStyle}>
              {messages.map((msg, i) => <div key={i} style={{
              ...(msg.sent ? cssSentStyle : cssRecvStyle),
              maxWidth: \`\${maxWidth}px\`
            }}>
                  {msg.text}
                </div>)}
            </div>
          </div>
          <div style={{
          flex: 1
        }}>
            <h4 style={{
            margin: '0 0 12px',
            textAlign: 'center',
            padding: 8,
            borderRadius: 6,
            background: '#f0fdf4',
            color: '#166534',
            fontSize: 14
          }}>
              Pretext tightWidth
            </h4>
            <div style={chatContainerStyle}>
              {messages.map((msg, i) => <Bubble key={i} text={msg.text} maxWidth={maxWidth} style={msg.sent ? sentStyle : recvStyle} />)}
            </div>
          </div>
        </div>
      </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:`비교 — CSS fit-content vs Pretext.

슬라이더로 maxWidth를 조정하면서 두 방식의 시각 차이를 실시간 비교.
- CSS fit-content (좌): 가장 긴 줄에 폭을 맞춤 → 짧은 줄 옆에 빈 공간
- Pretext (우): 줄별 폭을 산수 계산해 tightWidth 적용 → 빈 공간 없음`,...b.parameters?.docs?.description}}},x=[`Default`,`CompareFitContentVsPretext`]}))();export{b as CompareFitContentVsPretext,y as Default,x as __namedExportsOrder,h as default};