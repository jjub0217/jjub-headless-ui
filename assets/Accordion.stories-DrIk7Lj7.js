import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-DOtFvnP8.js";import{t as r}from"./jsx-runtime-DxP0NviS.js";import{n as i,r as a,t as o}from"./layout-Byg2DrOE.js";function s(){let e=(0,h.useContext)(_);if(!e)throw Error(`Accordion components must be used within Accordion.Root.`);return e}function c(){let e=(0,h.useContext)(v);if(!e)throw Error(`Accordion.Trigger and Accordion.Content must be used within Accordion.Item.`);return e}function l(e){let{type:t,orientation:n=`vertical`,disabled:r=!1,children:i,className:a}=e,o=(0,h.useId)(),[s,c]=(0,h.useState)(t===`single`?e.defaultValue??``:``),[l,u]=(0,h.useState)(t===`multiple`?e.defaultValue??[]:[]),d=t===`single`?e.collapsible??!1:!0,f=(()=>{if(t===`single`){let t=e.value,n=t===void 0?s:t;return n?[n]:[]}else{let t=e.value;return t===void 0?l:t}})(),p=(0,h.useCallback)(n=>{if(!r)if(t===`single`){let t=e,r=t.value!==void 0;(r?t.value:s)===n?d&&(r||c(``),t.onValueChange?.(``)):(r||c(n),t.onValueChange?.(n))}else{let t=e,r=t.value!==void 0,i=r?t.value:l,a=i.includes(n)?i.filter(e=>e!==n):[...i,n];r||u(a),t.onValueChange?.(a)}},[t,e,s,l,d,r]);return(0,g.jsx)(_.Provider,{value:{value:f,onToggle:p,type:t,collapsible:d,orientation:n,baseId:o},children:(0,g.jsx)(`div`,{className:a,"data-orientation":n,children:i})})}function u({value:e,disabled:t=!1,children:n,className:r,...i}){let{value:a,baseId:o}=s(),c=a.includes(e);return(0,g.jsx)(v.Provider,{value:{value:e,isOpen:c,disabled:t,triggerId:`${o}-trigger-${e}`,contentId:`${o}-content-${e}`},children:(0,g.jsx)(`div`,{"data-state":c?`open`:`closed`,"data-disabled":t?``:void 0,className:r,...i,children:n})})}function d({children:e,className:t,...n}){return(0,g.jsx)(`h3`,{className:t,...n,children:e})}function f({children:e,className:t,...n}){let{onToggle:r,orientation:i}=s(),{value:a,isOpen:o,disabled:l,triggerId:u,contentId:d}=c(),f=(0,h.useRef)(null);return(0,g.jsx)(`button`,{ref:f,type:`button`,id:u,"aria-expanded":o,"aria-controls":d,disabled:l,onClick:()=>{l||r(a)},onKeyDown:e=>{let t=i===`vertical`,n=t?`ArrowUp`:`ArrowLeft`,r=t?`ArrowDown`:`ArrowRight`,a=f.current?.closest(`[data-orientation]`)?.querySelectorAll(`button[aria-expanded]:not([disabled])`);if(!a||a.length===0)return;let o=Array.from(a).indexOf(f.current),s=null;switch(e.key){case r:s=(o+1)%a.length;break;case n:s=(o-1+a.length)%a.length;break;case`Home`:s=0;break;case`End`:s=a.length-1;break;default:return}e.preventDefault(),a[s].focus()},"data-state":o?`open`:`closed`,"data-disabled":l?``:void 0,className:t,...n,children:e})}function p({forceMount:e=!1,children:t,className:n,style:r,...i}){let{isOpen:a,triggerId:o,contentId:s}=c();return(0,g.jsx)(`div`,{role:`region`,id:s,"aria-labelledby":o,"aria-hidden":!a,"data-state":a?`open`:`closed`,className:n,style:{display:`grid`,gridTemplateRows:a?`1fr`:`0fr`,transition:`grid-template-rows 400ms cubic-bezier(0.87, 0, 0.13, 1)`,...r},...i,children:(0,g.jsx)(`div`,{style:{overflow:`hidden`,minHeight:0},children:t})})}function m({forceMount:e=!1,maxWidth:t,innerStyle:n,innerClassName:r,children:o,className:s,style:l,...u}){let{isOpen:d,triggerId:f,contentId:p}=c(),m=(0,h.useRef)(null),_=(0,h.useRef)(null),[v,y]=(0,h.useState)(null);return(0,h.useEffect)(()=>{let e=m.current,n=_.current;if(!e||!n)return;let r=t??e.offsetWidth,s=typeof o==`string`?o:null;if(s!==null){let e=getComputedStyle(n),t=e.font,o=parseFloat(e.lineHeight)||22.4,c=parseFloat(e.paddingTop||`0`)+parseFloat(e.paddingBottom||`0`);y(i(a(s,t),r,o).height+c)}else y(n.scrollHeight)},[o,t]),(0,g.jsx)(`div`,{ref:m,role:`region`,id:p,"aria-labelledby":f,"aria-hidden":!d,"data-state":d?`open`:`closed`,className:s,style:{overflow:`hidden`,height:d&&v!==null?`${v}px`:`0px`,transition:`height 400ms cubic-bezier(0.87, 0, 0.13, 1)`,...l},...u,children:(0,g.jsx)(`div`,{ref:_,className:r,style:n,children:o})})}var h,g,_,v,y,b=t((()=>{h=e(n()),o(),g=r(),_=(0,h.createContext)(null),v=(0,h.createContext)(null),y={Root:l,Item:u,Header:d,Trigger:f,Content:p,PretextContent:m}})),x,S,C,w,T,E,D,O,k,A,j,M,N;t((()=>{b(),x=r(),S={borderBottom:`1px solid #e5e7eb`},C={width:`100%`,padding:`12px 0`,border:`none`,backgroundColor:`transparent`,cursor:`pointer`,textAlign:`left`,fontSize:`15px`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},w={padding:`0 0 12px`,color:`#6b7280`,fontSize:`14px`},T={title:`Components/Accordion`,decorators:[e=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`style`,{children:`
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
        `}),(0,x.jsx)(`div`,{style:{maxWidth:`400px`},children:(0,x.jsx)(e,{})})]})],parameters:{docs:{description:{component:`Headless Accordion 컴포넌트. WAI-ARIA Accordion 패턴을 준수하며, 단일/다중 열기 모드를 지원합니다.`}}}},E={render:()=>(0,x.jsxs)(y.Root,{type:`single`,defaultValue:`faq1`,collapsible:!0,children:[(0,x.jsxs)(y.Item,{value:`faq1`,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:C,children:[`배송은 얼마나 걸리나요?`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.Content,{className:`AccordionContent`,children:(0,x.jsx)(`div`,{style:w,children:`주문 후 2~3일 이내에 배송됩니다. 도서산간 지역은 1~2일 추가될 수 있습니다.`})})]}),(0,x.jsxs)(y.Item,{value:`faq2`,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:C,children:[`반품/교환은 어떻게 하나요?`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.Content,{className:`AccordionContent`,children:(0,x.jsx)(`div`,{style:w,children:`수령 후 7일 이내에 마이페이지에서 신청할 수 있습니다.`})})]}),(0,x.jsxs)(y.Item,{value:`faq3`,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:C,children:[`결제 수단은 무엇이 있나요?`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.Content,{className:`AccordionContent`,children:(0,x.jsx)(`div`,{style:w,children:`신용카드, 계좌이체, 카카오페이, 네이버페이를 지원합니다.`})})]})]})},D={render:()=>(0,x.jsxs)(y.Root,{type:`multiple`,defaultValue:[`item1`],children:[(0,x.jsxs)(y.Item,{value:`item1`,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:C,children:[`상세 필터`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.Content,{className:`AccordionContent`,children:(0,x.jsx)(`div`,{style:w,children:`가격대, 상품 상태, 거래 방식을 선택할 수 있습니다.`})})]}),(0,x.jsxs)(y.Item,{value:`item2`,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:C,children:[`위치 설정`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.Content,{className:`AccordionContent`,children:(0,x.jsx)(`div`,{style:w,children:`시/도, 구/군을 선택하여 거래 위치를 설정합니다.`})})]}),(0,x.jsxs)(y.Item,{value:`item3`,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:C,children:[`정렬 기준`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.Content,{className:`AccordionContent`,children:(0,x.jsx)(`div`,{style:w,children:`최신순, 가격 낮은 순, 가격 높은 순으로 정렬할 수 있습니다.`})})]})]})},O={name:`Disabled Item`,render:()=>(0,x.jsxs)(y.Root,{type:`single`,collapsible:!0,children:[(0,x.jsxs)(y.Item,{value:`item1`,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:C,children:[`열 수 있는 항목`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.Content,{className:`AccordionContent`,children:(0,x.jsx)(`div`,{style:w,children:`이 항목은 정상적으로 열립니다.`})})]}),(0,x.jsxs)(y.Item,{value:`item2`,disabled:!0,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:{...C,opacity:.4,cursor:`not-allowed`},children:[`비활성화된 항목`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.Content,{className:`AccordionContent`,children:(0,x.jsx)(`div`,{style:w,children:`이 내용은 볼 수 없습니다.`})})]}),(0,x.jsxs)(y.Item,{value:`item3`,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:C,children:[`열 수 있는 항목`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.Content,{className:`AccordionContent`,children:(0,x.jsx)(`div`,{style:w,children:`이 항목도 정상적으로 열립니다.`})})]})]})},k={render:()=>(0,x.jsxs)(y.Root,{type:`single`,defaultValue:`faq1`,collapsible:!0,children:[(0,x.jsxs)(y.Item,{value:`faq1`,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:C,children:[`배송은 얼마나 걸리나요?`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.PretextContent,{innerStyle:w,children:`주문 후 2~3일 이내에 배송됩니다. 도서산간 지역은 1~2일 추가될 수 있습니다.`})]}),(0,x.jsxs)(y.Item,{value:`faq2`,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:C,children:[`반품/교환은 어떻게 하나요?`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.PretextContent,{innerStyle:w,children:`수령 후 7일 이내에 마이페이지에서 신청할 수 있습니다.`})]}),(0,x.jsxs)(y.Item,{value:`faq3`,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:C,children:[`결제 수단은 무엇이 있나요?`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.PretextContent,{innerStyle:w,children:`신용카드, 계좌이체, 카카오페이, 네이버페이를 지원합니다.`})]})]})},A={render:()=>(0,x.jsxs)(y.Root,{type:`multiple`,defaultValue:[`item1`],children:[(0,x.jsxs)(y.Item,{value:`item1`,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:C,children:[`상세 필터`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.PretextContent,{innerStyle:w,children:`가격대, 상품 상태, 거래 방식을 선택할 수 있습니다.`})]}),(0,x.jsxs)(y.Item,{value:`item2`,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:C,children:[`위치 설정`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.PretextContent,{innerStyle:w,children:`시/도, 구/군을 선택하여 거래 위치를 설정합니다.`})]}),(0,x.jsxs)(y.Item,{value:`item3`,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:C,children:[`정렬 기준`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.PretextContent,{innerStyle:w,children:`최신순, 가격 낮은 순, 가격 높은 순으로 정렬할 수 있습니다.`})]})]})},j={name:`Pretext Disabled Item`,render:()=>(0,x.jsxs)(y.Root,{type:`single`,collapsible:!0,children:[(0,x.jsxs)(y.Item,{value:`item1`,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:C,children:[`열 수 있는 항목`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.PretextContent,{innerStyle:w,children:`이 항목은 정상적으로 열립니다.`})]}),(0,x.jsxs)(y.Item,{value:`item2`,disabled:!0,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:{...C,opacity:.4,cursor:`not-allowed`},children:[`비활성화된 항목`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.PretextContent,{innerStyle:w,children:`이 내용은 볼 수 없습니다.`})]}),(0,x.jsxs)(y.Item,{value:`item3`,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:C,children:[`열 수 있는 항목`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.PretextContent,{innerStyle:w,children:`이 항목도 정상적으로 열립니다.`})]})]})},M={name:`CSS Grid vs Pretext (비교)`,render:()=>(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`div`,{style:{marginBottom:24},children:[(0,x.jsx)(`h4`,{style:{margin:`0 0 8px`,fontSize:14},children:`CSS Grid (Accordion.Content)`}),(0,x.jsx)(y.Root,{type:`single`,defaultValue:`a`,collapsible:!0,children:(0,x.jsxs)(y.Item,{value:`a`,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:C,children:[`배송 안내`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.Content,{children:(0,x.jsx)(`div`,{style:w,children:`주문 후 2~3일 이내에 배송됩니다. 도서산간 지역은 1~2일 추가될 수 있습니다.`})})]})})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h4`,{style:{margin:`0 0 8px`,fontSize:14},children:`Pretext (Accordion.PretextContent)`}),(0,x.jsx)(y.Root,{type:`single`,defaultValue:`b`,collapsible:!0,children:(0,x.jsxs)(y.Item,{value:`b`,style:S,children:[(0,x.jsx)(y.Header,{children:(0,x.jsxs)(y.Trigger,{style:C,children:[`배송 안내`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`▼`})]})}),(0,x.jsx)(y.PretextContent,{innerStyle:w,children:`주문 후 2~3일 이내에 배송됩니다. 도서산간 지역은 1~2일 추가될 수 있습니다.`})]})})]})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`기본 사용법 (단일 열기).

한 번에 하나의 항목만 열립니다.
다른 항목을 열면 기존 항목은 자동으로 닫힙니다.

테스트해보세요:
- 항목 클릭 → 열림/닫힘
- ↑ ↓ 화살표 → 항목 간 이동
- Home/End → 처음/마지막 항목
- Enter/Space → 열기/닫기`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`다중 열기 모드.

여러 항목을 동시에 열 수 있습니다.
다른 항목을 열어도 기존 항목이 닫히지 않습니다.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`비활성화된 항목.

disabled 항목은 클릭/키보드로 열 수 없고, 키보드 탐색에서도 건너뜁니다.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion.Root type="single" defaultValue="faq1" collapsible>
      <Accordion.Item value="faq1" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            배송은 얼마나 걸리나요?
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.PretextContent innerStyle={contentTextStyle}>
          {\`주문 후 2~3일 이내에 배송됩니다. 도서산간 지역은 1~2일 추가될 수 있습니다.\`}
        </Accordion.PretextContent>
      </Accordion.Item>
      <Accordion.Item value="faq2" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            반품/교환은 어떻게 하나요?
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.PretextContent innerStyle={contentTextStyle}>
          {\`수령 후 7일 이내에 마이페이지에서 신청할 수 있습니다.\`}
        </Accordion.PretextContent>
      </Accordion.Item>
      <Accordion.Item value="faq3" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            결제 수단은 무엇이 있나요?
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.PretextContent innerStyle={contentTextStyle}>
          {\`신용카드, 계좌이체, 카카오페이, 네이버페이를 지원합니다.\`}
        </Accordion.PretextContent>
      </Accordion.Item>
    </Accordion.Root>
}`,...k.parameters?.docs?.source},description:{story:`Pretext 버전 — Accordion.PretextContent 사용.

기존 Accordion.Content는 CSS Grid 0fr↔1fr 트릭으로 height transition을 만들지만,
Accordion.PretextContent는 펼쳐졌을 때의 높이를 Pretext로 산수 계산해서 0px↔측정값으로 transition합니다.

- children이 string이면 Pretext가 prepare/layout으로 측정 (forced reflow 0회)
- children이 JSX이면 DOM의 scrollHeight로 fallback 측정`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion.Root type="multiple" defaultValue={['item1']}>
      <Accordion.Item value="item1" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            상세 필터
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.PretextContent innerStyle={contentTextStyle}>
          {\`가격대, 상품 상태, 거래 방식을 선택할 수 있습니다.\`}
        </Accordion.PretextContent>
      </Accordion.Item>
      <Accordion.Item value="item2" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            위치 설정
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.PretextContent innerStyle={contentTextStyle}>
          {\`시/도, 구/군을 선택하여 거래 위치를 설정합니다.\`}
        </Accordion.PretextContent>
      </Accordion.Item>
      <Accordion.Item value="item3" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            정렬 기준
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.PretextContent innerStyle={contentTextStyle}>
          {\`최신순, 가격 낮은 순, 가격 높은 순으로 정렬할 수 있습니다.\`}
        </Accordion.PretextContent>
      </Accordion.Item>
    </Accordion.Root>
}`,...A.parameters?.docs?.source},description:{story:`Pretext 버전 — 다중 열기 모드.

type="multiple" + Accordion.PretextContent 조합. 여러 항목을 동시에 열 수 있습니다.
Pretext 측정은 항목별로 마운트 시 1회씩 일어남.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Pretext Disabled Item',
  render: () => <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item1" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            열 수 있는 항목
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.PretextContent innerStyle={contentTextStyle}>
          {\`이 항목은 정상적으로 열립니다.\`}
        </Accordion.PretextContent>
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
        <Accordion.PretextContent innerStyle={contentTextStyle}>
          {\`이 내용은 볼 수 없습니다.\`}
        </Accordion.PretextContent>
      </Accordion.Item>
      <Accordion.Item value="item3" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            열 수 있는 항목
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.PretextContent innerStyle={contentTextStyle}>
          {\`이 항목도 정상적으로 열립니다.\`}
        </Accordion.PretextContent>
      </Accordion.Item>
    </Accordion.Root>
}`,...j.parameters?.docs?.source},description:{story:`Pretext 버전 — 비활성화된 항목.

disabled 항목은 클릭/키보드로 열 수 없고, 키보드 탐색에서도 건너뜁니다.
Accordion.PretextContent는 disabled 상태와 무관하게 동일한 측정 로직 적용.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'CSS Grid vs Pretext (비교)',
  render: () => <div>
      <div style={{
      marginBottom: 24
    }}>
        <h4 style={{
        margin: '0 0 8px',
        fontSize: 14
      }}>
          CSS Grid (Accordion.Content)
        </h4>
        <Accordion.Root type="single" defaultValue="a" collapsible>
          <Accordion.Item value="a" style={itemStyle}>
            <Accordion.Header>
              <Accordion.Trigger style={triggerStyle}>
                배송 안내
                <span aria-hidden="true">▼</span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <div style={contentTextStyle}>
                주문 후 2~3일 이내에 배송됩니다. 도서산간 지역은 1~2일 추가될 수
                있습니다.
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
      <div>
        <h4 style={{
        margin: '0 0 8px',
        fontSize: 14
      }}>
          Pretext (Accordion.PretextContent)
        </h4>
        <Accordion.Root type="single" defaultValue="b" collapsible>
          <Accordion.Item value="b" style={itemStyle}>
            <Accordion.Header>
              <Accordion.Trigger style={triggerStyle}>
                배송 안내
                <span aria-hidden="true">▼</span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.PretextContent innerStyle={contentTextStyle}>
              {\`주문 후 2~3일 이내에 배송됩니다. 도서산간 지역은 1~2일 추가될 수 있습니다.\`}
            </Accordion.PretextContent>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
}`,...M.parameters?.docs?.source},description:{story:`비교 — CSS Grid 방식 vs Pretext 방식.

두 방식 모두 시각적으로 같은 결과를 만들지만, height transition 메커니즘이 다릅니다:
- CSS Grid: gridTemplateRows 0fr↔1fr 트릭으로 브라우저가 알아서 transition
- Pretext: 펼침 높이를 마운트 시 산수로 계산해서 0px↔측정값 transition

measurement 비용 차이:
- CSS Grid: 매 클릭마다 forced reflow 2회 (offsetHeight 측정 + transition 시작점 동기화)
- Pretext: 마운트 시 1회 + 클릭마다 0회 (DOM 안 읽음)`,...M.parameters?.docs?.description}}},N=[`Default`,`Multiple`,`WithDisabledItem`,`PretextDefault`,`PretextMultiple`,`PretextWithDisabledItem`,`CompareCSSGridVsPretext`]}))();export{M as CompareCSSGridVsPretext,E as Default,D as Multiple,k as PretextDefault,A as PretextMultiple,j as PretextWithDisabledItem,O as WithDisabledItem,N as __namedExportsOrder,T as default};