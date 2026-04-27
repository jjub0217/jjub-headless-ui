import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-BDfijASe.js";import{t as r}from"./jsx-runtime-DxP0NviS.js";function i(){let e=(0,d.useContext)(p);if(!e)throw Error(`Accordion components must be used within Accordion.Root.`);return e}function a(){let e=(0,d.useContext)(m);if(!e)throw Error(`Accordion.Trigger and Accordion.Content must be used within Accordion.Item.`);return e}function o(e){let{type:t,orientation:n=`vertical`,disabled:r=!1,children:i,className:a}=e,o=(0,d.useId)(),[s,c]=(0,d.useState)(t===`single`?e.defaultValue??``:``),[l,u]=(0,d.useState)(t===`multiple`?e.defaultValue??[]:[]),m=t===`single`?e.collapsible??!1:!0,h=(()=>{if(t===`single`){let t=e.value,n=t===void 0?s:t;return n?[n]:[]}else{let t=e.value;return t===void 0?l:t}})(),g=(0,d.useCallback)(n=>{if(!r)if(t===`single`){let t=e,r=t.value!==void 0;(r?t.value:s)===n?m&&(r||c(``),t.onValueChange?.(``)):(r||c(n),t.onValueChange?.(n))}else{let t=e,r=t.value!==void 0,i=r?t.value:l,a=i.includes(n)?i.filter(e=>e!==n):[...i,n];r||u(a),t.onValueChange?.(a)}},[t,e,s,l,m,r]);return(0,f.jsx)(p.Provider,{value:{value:h,onToggle:g,type:t,collapsible:m,orientation:n,baseId:o},children:(0,f.jsx)(`div`,{className:a,"data-orientation":n,children:i})})}function s({value:e,disabled:t=!1,children:n,className:r,...a}){let{value:o,baseId:s}=i(),c=o.includes(e);return(0,f.jsx)(m.Provider,{value:{value:e,isOpen:c,disabled:t,triggerId:`${s}-trigger-${e}`,contentId:`${s}-content-${e}`},children:(0,f.jsx)(`div`,{"data-state":c?`open`:`closed`,"data-disabled":t?``:void 0,className:r,...a,children:n})})}function c({children:e,className:t,...n}){return(0,f.jsx)(`h3`,{className:t,...n,children:e})}function l({children:e,className:t,...n}){let{onToggle:r,orientation:o}=i(),{value:s,isOpen:c,disabled:l,triggerId:u,contentId:p}=a(),m=(0,d.useRef)(null);return(0,f.jsx)(`button`,{ref:m,type:`button`,id:u,"aria-expanded":c,"aria-controls":p,disabled:l,onClick:()=>{l||r(s)},onKeyDown:e=>{let t=o===`vertical`,n=t?`ArrowUp`:`ArrowLeft`,r=t?`ArrowDown`:`ArrowRight`,i=m.current?.closest(`[data-orientation]`)?.querySelectorAll(`button[aria-expanded]:not([disabled])`);if(!i||i.length===0)return;let a=Array.from(i).indexOf(m.current),s=null;switch(e.key){case r:s=(a+1)%i.length;break;case n:s=(a-1+i.length)%i.length;break;case`Home`:s=0;break;case`End`:s=i.length-1;break;default:return}e.preventDefault(),i[s].focus()},"data-state":c?`open`:`closed`,"data-disabled":l?``:void 0,className:t,...n,children:e})}function u({forceMount:e=!1,children:t,className:n,style:r,...i}){let{isOpen:o,triggerId:s,contentId:c}=a();return(0,f.jsx)(`div`,{role:`region`,id:c,"aria-labelledby":s,"aria-hidden":!o,"data-state":o?`open`:`closed`,className:n,style:{display:`grid`,gridTemplateRows:o?`1fr`:`0fr`,transition:`grid-template-rows 400ms cubic-bezier(0.87, 0, 0.13, 1)`,...r},...i,children:(0,f.jsx)(`div`,{style:{overflow:`hidden`,minHeight:0},children:t})})}var d,f,p,m,h,g=t((()=>{d=e(n()),f=r(),p=(0,d.createContext)(null),m=(0,d.createContext)(null),h={Root:o,Item:s,Header:c,Trigger:l,Content:u}})),_,v,y,b,x,S,C,w,T;t((()=>{g(),_=r(),v={borderBottom:`1px solid #e5e7eb`},y={width:`100%`,padding:`12px 0`,border:`none`,backgroundColor:`transparent`,cursor:`pointer`,textAlign:`left`,fontSize:`15px`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},b={padding:`0 0 12px`,color:`#6b7280`,fontSize:`14px`},x={title:`Components/Accordion`,decorators:[e=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`style`,{children:`
          [data-state="open"] > button[aria-expanded] {
            font-weight: bold;
          }
          button[aria-expanded] span[aria-hidden] {
            display: inline-block;
            transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
          }
          button[aria-expanded="true"] span[aria-hidden] {
            transform: rotate(180deg);
          }
          h3 {
            margin: 0;
          }
        `}),(0,_.jsx)(`div`,{style:{maxWidth:`400px`},children:(0,_.jsx)(e,{})})]})],parameters:{docs:{description:{component:`Headless Accordion 컴포넌트. WAI-ARIA Accordion 패턴을 준수하며, 단일/다중 열기 모드를 지원합니다.`}}}},S={render:()=>(0,_.jsxs)(h.Root,{type:`single`,defaultValue:`faq1`,collapsible:!0,children:[(0,_.jsxs)(h.Item,{value:`faq1`,style:v,children:[(0,_.jsx)(h.Header,{children:(0,_.jsxs)(h.Trigger,{style:y,children:[`배송은 얼마나 걸리나요?`,(0,_.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,_.jsx)(h.Content,{className:`AccordionContent`,children:(0,_.jsx)(`div`,{style:b,children:`주문 후 2~3일 이내에 배송됩니다. 도서산간 지역은 1~2일 추가될 수 있습니다.`})})]}),(0,_.jsxs)(h.Item,{value:`faq2`,style:v,children:[(0,_.jsx)(h.Header,{children:(0,_.jsxs)(h.Trigger,{style:y,children:[`반품/교환은 어떻게 하나요?`,(0,_.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,_.jsx)(h.Content,{className:`AccordionContent`,children:(0,_.jsx)(`div`,{style:b,children:`수령 후 7일 이내에 마이페이지에서 신청할 수 있습니다.`})})]}),(0,_.jsxs)(h.Item,{value:`faq3`,style:v,children:[(0,_.jsx)(h.Header,{children:(0,_.jsxs)(h.Trigger,{style:y,children:[`결제 수단은 무엇이 있나요?`,(0,_.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,_.jsx)(h.Content,{className:`AccordionContent`,children:(0,_.jsx)(`div`,{style:b,children:`신용카드, 계좌이체, 카카오페이, 네이버페이를 지원합니다.`})})]})]})},C={render:()=>(0,_.jsxs)(h.Root,{type:`multiple`,defaultValue:[`item1`],children:[(0,_.jsxs)(h.Item,{value:`item1`,style:v,children:[(0,_.jsx)(h.Header,{children:(0,_.jsxs)(h.Trigger,{style:y,children:[`상세 필터`,(0,_.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,_.jsx)(h.Content,{className:`AccordionContent`,children:(0,_.jsx)(`div`,{style:b,children:`가격대, 상품 상태, 거래 방식을 선택할 수 있습니다.`})})]}),(0,_.jsxs)(h.Item,{value:`item2`,style:v,children:[(0,_.jsx)(h.Header,{children:(0,_.jsxs)(h.Trigger,{style:y,children:[`위치 설정`,(0,_.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,_.jsx)(h.Content,{className:`AccordionContent`,children:(0,_.jsx)(`div`,{style:b,children:`시/도, 구/군을 선택하여 거래 위치를 설정합니다.`})})]}),(0,_.jsxs)(h.Item,{value:`item3`,style:v,children:[(0,_.jsx)(h.Header,{children:(0,_.jsxs)(h.Trigger,{style:y,children:[`정렬 기준`,(0,_.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,_.jsx)(h.Content,{className:`AccordionContent`,children:(0,_.jsx)(`div`,{style:b,children:`최신순, 가격 낮은 순, 가격 높은 순으로 정렬할 수 있습니다.`})})]})]})},w={name:`Disabled Item`,render:()=>(0,_.jsxs)(h.Root,{type:`single`,collapsible:!0,children:[(0,_.jsxs)(h.Item,{value:`item1`,style:v,children:[(0,_.jsx)(h.Header,{children:(0,_.jsxs)(h.Trigger,{style:y,children:[`열 수 있는 항목`,(0,_.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,_.jsx)(h.Content,{className:`AccordionContent`,children:(0,_.jsx)(`div`,{style:b,children:`이 항목은 정상적으로 열립니다.`})})]}),(0,_.jsxs)(h.Item,{value:`item2`,disabled:!0,style:v,children:[(0,_.jsx)(h.Header,{children:(0,_.jsxs)(h.Trigger,{style:{...y,opacity:.4,cursor:`not-allowed`},children:[`비활성화된 항목`,(0,_.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,_.jsx)(h.Content,{className:`AccordionContent`,children:(0,_.jsx)(`div`,{style:b,children:`이 내용은 볼 수 없습니다.`})})]}),(0,_.jsxs)(h.Item,{value:`item3`,style:v,children:[(0,_.jsx)(h.Header,{children:(0,_.jsxs)(h.Trigger,{style:y,children:[`열 수 있는 항목`,(0,_.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,_.jsx)(h.Content,{className:`AccordionContent`,children:(0,_.jsx)(`div`,{style:b,children:`이 항목도 정상적으로 열립니다.`})})]})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion.Root type="single" defaultValue="faq1" collapsible>
      <Accordion.Item value="faq1" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            배송은 얼마나 걸리나요?
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div style={contentTextStyle}>주문 후 2~3일 이내에 배송됩니다. 도서산간 지역은 1~2일 추가될 수 있습니다.</div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="faq2" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            반품/교환은 어떻게 하나요?
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div style={contentTextStyle}>수령 후 7일 이내에 마이페이지에서 신청할 수 있습니다.</div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="faq3" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            결제 수단은 무엇이 있나요?
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div style={contentTextStyle}>신용카드, 계좌이체, 카카오페이, 네이버페이를 지원합니다.</div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
}`,...S.parameters?.docs?.source},description:{story:`기본 사용법 (단일 열기).

한 번에 하나의 항목만 열립니다.
다른 항목을 열면 기존 항목은 자동으로 닫힙니다.

테스트해보세요:
- 항목 클릭 → 열림/닫힘
- ↑ ↓ 화살표 → 항목 간 이동
- Home/End → 처음/마지막 항목
- Enter/Space → 열기/닫기`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion.Root type="multiple" defaultValue={['item1']}>
      <Accordion.Item value="item1" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            상세 필터
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div style={contentTextStyle}>가격대, 상품 상태, 거래 방식을 선택할 수 있습니다.</div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item2" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            위치 설정
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div style={contentTextStyle}>시/도, 구/군을 선택하여 거래 위치를 설정합니다.</div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item3" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            정렬 기준
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div style={contentTextStyle}>최신순, 가격 낮은 순, 가격 높은 순으로 정렬할 수 있습니다.</div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
}`,...C.parameters?.docs?.source},description:{story:`다중 열기 모드.

여러 항목을 동시에 열 수 있습니다.
다른 항목을 열어도 기존 항목이 닫히지 않습니다.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Disabled Item',
  render: () => <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item1" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            열 수 있는 항목
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div style={contentTextStyle}>이 항목은 정상적으로 열립니다.</div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item2" disabled style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={{
          ...triggerStyle,
          opacity: 0.4,
          cursor: 'not-allowed'
        }}>
            비활성화된 항목
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div style={contentTextStyle}>이 내용은 볼 수 없습니다.</div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item3" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            열 수 있는 항목
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div style={contentTextStyle}>이 항목도 정상적으로 열립니다.</div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
}`,...w.parameters?.docs?.source},description:{story:`비활성화된 항목.

disabled 항목은 클릭/키보드로 열 수 없고, 키보드 탐색에서도 건너뜁니다.`,...w.parameters?.docs?.description}}},T=[`Default`,`Multiple`,`WithDisabledItem`]}))();export{S as Default,C as Multiple,w as WithDisabledItem,T as __namedExportsOrder,x as default};