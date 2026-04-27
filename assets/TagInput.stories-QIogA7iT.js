import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-1xoKwQlz.js";import{t as r}from"./jsx-runtime-DxP0NviS.js";function i(){let e=(0,l.useContext)(d);if(!e)throw Error(`TagInput components must be used within TagInput.Root.`);return e}function a({defaultValue:e=[],value:t,onValueChange:n,maxTags:r,disabled:i=!1,children:a,className:o}){let[s,c]=(0,l.useState)(e),f=(0,l.useId)(),p=t!==void 0,m=p?t:s,h=(0,l.useCallback)(e=>{let t=e.trim();if(!t||i||r!==void 0&&m.length>=r||m.includes(t))return;let a=[...m,t];p||c(a),n?.(a)},[m,p,n,r,i]),g=(0,l.useCallback)(e=>{if(i)return;let t=m.filter((t,n)=>n!==e);p||c(t),n?.(t)},[m,p,n,i]),_=(0,l.useCallback)(()=>{if(i||m.length===0)return;let e=m.slice(0,-1);p||c(e),n?.(e)},[m,p,n,i]);return(0,u.jsx)(d.Provider,{value:{tags:m,addTag:h,removeTag:g,removeLastTag:_,inputId:f,maxTags:r,disabled:i},children:(0,u.jsx)(`div`,{className:o,"data-disabled":i?``:void 0,"aria-disabled":i||void 0,children:a})})}function o({placeholder:e,className:t,...n}){let{addTag:r,removeLastTag:a,inputId:o,maxTags:s,tags:c,disabled:d}=i(),[f,p]=(0,l.useState)(``),m=(0,l.useRef)(!1),h=s!==void 0&&c.length>=s,g=e=>{e.key===`Enter`&&!m.current&&(e.preventDefault(),f.trim()&&(r(f),p(``))),e.key===`Backspace`&&f===``&&(e.preventDefault(),a())},_=e=>{m.current=!0},v=e=>{m.current=!1,p(e.currentTarget.value)};return(0,u.jsx)(`input`,{...n,id:o,type:`text`,role:`combobox`,"aria-autocomplete":`list`,"aria-expanded":!1,"aria-label":n[`aria-label`]??`Add tag`,value:f,onChange:e=>p(e.target.value),onKeyDown:g,onCompositionStart:_,onCompositionEnd:v,placeholder:h?void 0:e,disabled:d||h,"data-at-max":h?``:void 0,className:t})}function s({value:e,index:t,children:n,className:r,...i}){return(0,u.jsx)(`span`,{role:`listitem`,"aria-label":`태그: ${e}`,"data-tag-index":t,className:r,...i,children:n})}function c({index:e,children:t,className:n,...r}){let{removeTag:a,disabled:o}=i();return(0,u.jsx)(`button`,{...r,type:`button`,"aria-label":`태그 삭제`,onClick:()=>a(e),disabled:o,"data-disabled":o?``:void 0,className:n,children:t??`×`})}var l,u,d,f,p=t((()=>{l=e(n()),u=r(),d=(0,l.createContext)(null),f={Root:a,Input:o,Tag:s,Remove:c}})),m,h,g,_,v,y,b,x;t((()=>{p(),m=e(n()),h=r(),g={title:`Components/TagInput`,decorators:[e=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`style`,{children:`
          .tag-input-root {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border: 1.5px solid #d1d5db;
            border-radius: 8px;
            min-height: 44px;
            background: white;
          }
          .tag-input-root:focus-within {
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
          }
          .tag-input-root[data-disabled] {
            background: #f9fafb;
            opacity: 0.6;
          }
          .tag {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 2px 8px;
            background: #eff6ff;
            color: #1d4ed8;
            border-radius: 9999px;
            font-size: 13px;
            font-weight: 500;
          }
          .tag-remove {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 16px;
            height: 16px;
            border: none;
            background: none;
            color: #3b82f6;
            cursor: pointer;
            border-radius: 9999px;
            font-size: 14px;
            line-height: 1;
            padding: 0;
          }
          .tag-remove:hover {
            background: #bfdbfe;
          }
          .tag-remove:focus-visible {
            outline: 2px solid #3b82f6;
            outline-offset: 1px;
          }
          .tag-input {
            flex: 1;
            min-width: 120px;
            border: none;
            outline: none;
            font-size: 14px;
            background: transparent;
          }
          .tag-input::placeholder {
            color: #9ca3af;
          }
          .tag-input[data-at-max] {
            display: none;
          }
        `}),(0,h.jsx)(e,{})]})],parameters:{docs:{description:{component:`Headless TagInput 컴포넌트. 한국어 IME 조합을 지원하며, Enter로 태그 추가, Backspace로 마지막 태그 삭제가 가능합니다. 스타일 없이 제공되며 className 또는 data 속성으로 자유롭게 커스터마이징할 수 있습니다.`}}}},_={name:`Default`,render:()=>(0,h.jsxs)(f.Root,{defaultValue:[`강아지`,`고양이`],className:`tag-input-root`,children:[(0,h.jsx)(f.Input,{className:`tag-input`,placeholder:`태그 입력 후 Enter...`}),[`강아지`,`고양이`].map((e,t)=>(0,h.jsxs)(f.Tag,{value:e,index:t,className:`tag`,children:[e,(0,h.jsx)(f.Remove,{index:t,className:`tag-remove`})]},e))]})},v={name:`Dynamic (Recommended)`,render:()=>(0,h.jsx)(()=>{let[e,t]=(0,m.useState)([`React`,`TypeScript`]);return(0,h.jsxs)(`div`,{children:[(0,h.jsxs)(f.Root,{value:e,onValueChange:t,className:`tag-input-root`,children:[e.map((e,t)=>(0,h.jsxs)(f.Tag,{value:e,index:t,className:`tag`,children:[e,(0,h.jsx)(f.Remove,{index:t,className:`tag-remove`})]},e)),(0,h.jsx)(f.Input,{className:`tag-input`,placeholder:`태그 입력 후 Enter...`})]}),(0,h.jsxs)(`p`,{style:{marginTop:`8px`,fontSize:`13px`,color:`#6b7280`},children:[`현재 태그: `,e.length>0?e.join(`, `):`없음`]})]})},{})},y={name:`Max Tags Limit`,render:()=>(0,h.jsx)(()=>{let[e,t]=(0,m.useState)([`첫번째`,`두번째`]);return(0,h.jsxs)(`div`,{children:[(0,h.jsxs)(`p`,{style:{marginBottom:`8px`,fontSize:`14px`,color:`#374151`},children:[`최대 `,3,`개까지 추가 가능합니다.`]}),(0,h.jsxs)(f.Root,{value:e,onValueChange:t,maxTags:3,className:`tag-input-root`,children:[e.map((e,t)=>(0,h.jsxs)(f.Tag,{value:e,index:t,className:`tag`,children:[e,(0,h.jsx)(f.Remove,{index:t,className:`tag-remove`})]},e)),(0,h.jsx)(f.Input,{className:`tag-input`,placeholder:`태그 입력...`})]}),(0,h.jsxs)(`p`,{style:{marginTop:`6px`,fontSize:`12px`,color:`#9ca3af`},children:[e.length,` / `,3]})]})},{})},b={name:`Controlled`,render:()=>(0,h.jsx)(()=>{let[e,t]=(0,m.useState)([`헤드리스`,`UI`]);return(0,h.jsxs)(`div`,{children:[(0,h.jsxs)(f.Root,{value:e,onValueChange:t,className:`tag-input-root`,children:[e.map((e,t)=>(0,h.jsxs)(f.Tag,{value:e,index:t,className:`tag`,children:[e,(0,h.jsx)(f.Remove,{index:t,className:`tag-remove`})]},e)),(0,h.jsx)(f.Input,{className:`tag-input`,placeholder:`태그 추가...`})]}),(0,h.jsx)(`div`,{style:{marginTop:`10px`},children:(0,h.jsx)(`button`,{onClick:()=>t([]),style:{padding:`4px 12px`,fontSize:`13px`,cursor:`pointer`,borderRadius:`4px`,border:`1px solid #d1d5db`},children:`전체 삭제`})})]})},{})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <TagInput.Root defaultValue={['강아지', '고양이']} className="tag-input-root">
      <TagInput.Input className="tag-input" placeholder="태그 입력 후 Enter..." />
      {['강아지', '고양이'].map((tag, i) => <TagInput.Tag key={tag} value={tag} index={i} className="tag">
          {tag}
          <TagInput.Remove index={i} className="tag-remove" />
        </TagInput.Tag>)}
    </TagInput.Root>
}`,..._.parameters?.docs?.source},description:{story:`기본 사용법.

- 입력창에 텍스트를 입력하고 Enter를 누르면 태그가 추가됩니다.
- 입력창이 비어있을 때 Backspace를 누르면 마지막 태그가 삭제됩니다.
- 한국어 입력 시 IME 조합 중에는 Enter가 태그로 추가되지 않습니다.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Dynamic (Recommended)',
  render: () => {
    const DynamicExample = () => {
      const [tags, setTags] = useState<string[]>(['React', 'TypeScript']);
      return <div>
          <TagInput.Root value={tags} onValueChange={setTags} className="tag-input-root">
            {tags.map((tag, i) => <TagInput.Tag key={tag} value={tag} index={i} className="tag">
                {tag}
                <TagInput.Remove index={i} className="tag-remove" />
              </TagInput.Tag>)}
            <TagInput.Input className="tag-input" placeholder="태그 입력 후 Enter..." />
          </TagInput.Root>
          <p style={{
          marginTop: '8px',
          fontSize: '13px',
          color: '#6b7280'
        }}>
            현재 태그: {tags.length > 0 ? tags.join(', ') : '없음'}
          </p>
        </div>;
    };
    return <DynamicExample />;
  }
}`,...v.parameters?.docs?.source},description:{story:`동적 렌더링 (권장 패턴).

tags 배열을 외부 state로 관리하거나 controlled 방식으로 사용하는 예시.
실제 사용 시에는 이 패턴을 권장합니다.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Max Tags Limit',
  render: () => {
    const MaxTagsExample = () => {
      const [tags, setTags] = useState<string[]>(['첫번째', '두번째']);
      const MAX = 3;
      return <div>
          <p style={{
          marginBottom: '8px',
          fontSize: '14px',
          color: '#374151'
        }}>
            최대 {MAX}개까지 추가 가능합니다.
          </p>
          <TagInput.Root value={tags} onValueChange={setTags} maxTags={MAX} className="tag-input-root">
            {tags.map((tag, i) => <TagInput.Tag key={tag} value={tag} index={i} className="tag">
                {tag}
                <TagInput.Remove index={i} className="tag-remove" />
              </TagInput.Tag>)}
            <TagInput.Input className="tag-input" placeholder="태그 입력..." />
          </TagInput.Root>
          <p style={{
          marginTop: '6px',
          fontSize: '12px',
          color: '#9ca3af'
        }}>
            {tags.length} / {MAX}
          </p>
        </div>;
    };
    return <MaxTagsExample />;
  }
}`,...y.parameters?.docs?.source},description:{story:`최대 태그 수 제한.

maxTags prop으로 최대 태그 수를 제한합니다.
최대에 도달하면 입력창이 숨겨집니다.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Controlled',
  render: () => {
    const ControlledExample = () => {
      const [tags, setTags] = useState<string[]>(['헤드리스', 'UI']);
      return <div>
          <TagInput.Root value={tags} onValueChange={setTags} className="tag-input-root">
            {tags.map((tag, i) => <TagInput.Tag key={tag} value={tag} index={i} className="tag">
                {tag}
                <TagInput.Remove index={i} className="tag-remove" />
              </TagInput.Tag>)}
            <TagInput.Input className="tag-input" placeholder="태그 추가..." />
          </TagInput.Root>
          <div style={{
          marginTop: '10px'
        }}>
            <button onClick={() => setTags([])} style={{
            padding: '4px 12px',
            fontSize: '13px',
            cursor: 'pointer',
            borderRadius: '4px',
            border: '1px solid #d1d5db'
          }}>
              전체 삭제
            </button>
          </div>
        </div>;
    };
    return <ControlledExample />;
  }
}`,...b.parameters?.docs?.source},description:{story:`Controlled.

value + onValueChange로 외부에서 태그를 완전히 제어하는 예시.
초기화 버튼으로 태그를 리셋할 수 있습니다.`,...b.parameters?.docs?.description}}},x=[`Default`,`Dynamic`,`MaxTags`,`Controlled`]}))();export{b as Controlled,_ as Default,v as Dynamic,y as MaxTags,x as __namedExportsOrder,g as default};