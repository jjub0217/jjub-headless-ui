import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-B7U2fISV.js";import{t as r}from"./jsx-runtime-DxP0NviS.js";function i(e={}){let{multiple:t=!0,accept:n,maxSize:r,maxFiles:i}=e,[a,o]=(0,d.useState)([]),[s,c]=(0,d.useState)([]),l=(0,d.useCallback)(e=>n&&n.length>0&&!n.some(t=>t.endsWith(`/*`)?e.type.startsWith(t.slice(0,-1)):e.type===t||e.name.endsWith(t.replace(`*`,``)))?`File type not accepted: ${e.type}`:r!==void 0&&e.size>r?`File too large: ${e.name} (max ${r} bytes)`:null,[n,r]);return{files:a,errors:s,addFiles:(0,d.useCallback)(e=>{let n=[],r=[];for(let t of e){if(i!==void 0&&a.length+r.length>=i){n.push(`Maximum ${i} file(s) allowed`);break}let e=l(t);if(e){n.push(e);continue}let o=t.type.startsWith(`image/`)?URL.createObjectURL(t):null;r.push({file:t,previewUrl:o,id:`${Date.now()}-${Math.random()}`})}c(n),o(e=>t?[...e,...r]:r.slice(0,1))},[a.length,i,t,l]),removeFile:(0,d.useCallback)(e=>{o(t=>{let n=t.find(t=>t.id===e);return n?.previewUrl&&URL.revokeObjectURL(n.previewUrl),t.filter(t=>t.id!==e)})},[]),clearFiles:(0,d.useCallback)(()=>{o(e=>(e.forEach(e=>{e.previewUrl&&URL.revokeObjectURL(e.previewUrl)}),[])),c([])},[])}}function a(){let e=(0,d.useContext)(p);if(!e)throw Error(`FileUpload components must be used within FileUpload.Root.`);return e}function o({files:e,addFiles:t,removeFile:n,multiple:r=!0,accept:i,disabled:a=!1,children:o,className:s}){let c=(0,d.useId)(),[l,u]=(0,d.useState)(!1);return(0,f.jsx)(p.Provider,{value:{files:e,addFiles:t,removeFile:n,inputId:c,multiple:r,accept:i,disabled:a,isDragging:l,setIsDragging:u},children:(0,f.jsx)(`div`,{className:s,"data-disabled":a?``:void 0,children:o})})}function s({children:e,className:t,...n}){let{addFiles:r,inputId:i,disabled:o,isDragging:s,setIsDragging:c}=a();return(0,f.jsx)(`div`,{role:`button`,tabIndex:o?-1:0,"aria-label":`파일을 드래그하거나 클릭하여 업로드`,"aria-disabled":o||void 0,"aria-live":`polite`,"data-state":s?`dragging`:`idle`,"data-disabled":o?``:void 0,onDragOver:e=>{e.preventDefault(),o||c(!0)},onDragLeave:e=>{e.preventDefault(),c(!1)},onDrop:e=>{if(e.preventDefault(),c(!1),o)return;let t=Array.from(e.dataTransfer.files);t.length>0&&r(t)},onClick:()=>{o||document.getElementById(i)?.click()},onKeyDown:e=>{!o&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),document.getElementById(i)?.click())},className:t,...n,children:e})}function c({className:e,...t}){let{addFiles:n,inputId:r,multiple:i,accept:o,disabled:s}=a(),c=(0,d.useRef)(null),l=(0,d.useCallback)(()=>{let e=c.current;e?.files&&(n(Array.from(e.files)),e.value=``)},[n]);return(0,f.jsx)(`input`,{...t,ref:c,id:r,type:`file`,multiple:i,accept:o,disabled:s,onChange:l,"aria-hidden":`true`,tabIndex:-1,className:e,style:{display:`none`}})}function l({children:e,className:t,...n}){return(0,f.jsx)(`ul`,{role:`list`,"aria-label":`업로드된 파일 목록`,className:t,...n,children:e})}function u({file:e,children:t,className:n,...r}){return(0,f.jsx)(`li`,{role:`listitem`,"aria-label":e.file.name,"data-file-id":e.id,className:n,...r,children:t})}var d,f,p,m,h=t((()=>{d=e(n()),f=r(),p=(0,d.createContext)(null),m={Root:o,Dropzone:s,Input:c,Preview:l,Item:u}}));function g(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}var _,v,y,b,x,S;t((()=>{h(),_=r(),v={title:`Components/FileUpload`,decorators:[e=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`style`,{children:`
          .dropzone {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 32px;
            border: 2px dashed #d1d5db;
            border-radius: 12px;
            cursor: pointer;
            text-align: center;
            transition: border-color 0.2s, background 0.2s;
            min-height: 120px;
            background: #fafafa;
          }
          .dropzone[data-state="dragging"] {
            border-color: #3b82f6;
            background: #eff6ff;
          }
          .dropzone[data-disabled] {
            opacity: 0.5;
            cursor: not-allowed;
          }
          .dropzone:focus-visible {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
          }
          .dropzone-icon {
            font-size: 32px;
            line-height: 1;
          }
          .dropzone-text {
            font-size: 14px;
            color: #374151;
          }
          .dropzone-hint {
            font-size: 12px;
            color: #9ca3af;
          }
          .file-list {
            list-style: none;
            padding: 0;
            margin: 12px 0 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }
          .file-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px 12px;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            background: white;
          }
          .file-preview-img {
            width: 40px;
            height: 40px;
            object-fit: cover;
            border-radius: 4px;
            flex-shrink: 0;
          }
          .file-name {
            flex: 1;
            font-size: 13px;
            color: #374151;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .file-size {
            font-size: 12px;
            color: #9ca3af;
            flex-shrink: 0;
          }
          .file-remove-btn {
            border: none;
            background: none;
            cursor: pointer;
            color: #9ca3af;
            font-size: 16px;
            line-height: 1;
            padding: 2px 6px;
            border-radius: 4px;
            flex-shrink: 0;
          }
          .file-remove-btn:hover {
            background: #fee2e2;
            color: #ef4444;
          }
          .file-remove-btn:focus-visible {
            outline: 2px solid #3b82f6;
            outline-offset: 1px;
          }
          .error-list {
            margin: 8px 0 0;
            padding: 0;
            list-style: none;
          }
          .error-item {
            font-size: 12px;
            color: #ef4444;
            padding: 2px 0;
          }
        `}),(0,_.jsx)(e,{})]})],parameters:{docs:{description:{component:`Headless FileUpload 컴포넌트. 드래그 앤 드롭과 클릭 업로드를 모두 지원합니다. useFileUpload() 훅으로 파일 유효성 검사와 미리보기 URL을 관리하고, 비즈니스 로직(압축, 서버 업로드)은 직접 구현합니다.`}}}},y={name:`Default`,render:()=>(0,_.jsx)(()=>{let{files:e,errors:t,addFiles:n,removeFile:r}=i({multiple:!0});return(0,_.jsx)(`div`,{style:{width:`400px`},children:(0,_.jsxs)(m.Root,{files:e,addFiles:n,removeFile:r,multiple:!0,children:[(0,_.jsx)(m.Input,{}),(0,_.jsxs)(m.Dropzone,{className:`dropzone`,children:[(0,_.jsx)(`span`,{className:`dropzone-icon`,"aria-hidden":`true`,children:`📂`}),(0,_.jsx)(`span`,{className:`dropzone-text`,children:`클릭하거나 파일을 드래그하세요`}),(0,_.jsx)(`span`,{className:`dropzone-hint`,children:`모든 파일 형식 지원`})]}),t.length>0&&(0,_.jsx)(`ul`,{className:`error-list`,role:`alert`,"aria-label":`업로드 오류`,children:t.map((e,t)=>(0,_.jsx)(`li`,{className:`error-item`,children:e},t))}),e.length>0&&(0,_.jsx)(m.Preview,{className:`file-list`,children:e.map(e=>(0,_.jsxs)(m.Item,{file:e,className:`file-item`,children:[(0,_.jsx)(`span`,{className:`file-name`,children:e.file.name}),(0,_.jsx)(`span`,{className:`file-size`,children:g(e.file.size)}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>r(e.id),className:`file-remove-btn`,"aria-label":`${e.file.name} 삭제`,children:`×`})]},e.id))})]})})},{})},b={name:`Image Upload with Preview`,render:()=>(0,_.jsx)(()=>{let{files:e,errors:t,addFiles:n,removeFile:r}=i({multiple:!0,accept:[`image/*`],maxSize:5*1024*1024});return(0,_.jsx)(`div`,{style:{width:`400px`},children:(0,_.jsxs)(m.Root,{files:e,addFiles:n,removeFile:r,multiple:!0,accept:`image/*`,children:[(0,_.jsx)(m.Input,{}),(0,_.jsxs)(m.Dropzone,{className:`dropzone`,children:[(0,_.jsx)(`span`,{className:`dropzone-icon`,"aria-hidden":`true`,children:`🖼️`}),(0,_.jsx)(`span`,{className:`dropzone-text`,children:`이미지를 드래그하거나 클릭하여 선택`}),(0,_.jsx)(`span`,{className:`dropzone-hint`,children:`JPG, PNG, GIF, WebP · 최대 5MB`})]}),t.length>0&&(0,_.jsx)(`ul`,{className:`error-list`,role:`alert`,"aria-label":`업로드 오류`,children:t.map((e,t)=>(0,_.jsx)(`li`,{className:`error-item`,children:e},t))}),e.length>0&&(0,_.jsx)(m.Preview,{className:`file-list`,children:e.map(e=>(0,_.jsxs)(m.Item,{file:e,className:`file-item`,children:[e.previewUrl&&(0,_.jsx)(`img`,{src:e.previewUrl,alt:e.file.name,className:`file-preview-img`}),(0,_.jsx)(`span`,{className:`file-name`,children:e.file.name}),(0,_.jsx)(`span`,{className:`file-size`,children:g(e.file.size)}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>r(e.id),className:`file-remove-btn`,"aria-label":`${e.file.name} 삭제`,children:`×`})]},e.id))})]})})},{})},x={name:`Single File`,render:()=>(0,_.jsx)(()=>{let{files:e,errors:t,addFiles:n,removeFile:r}=i({multiple:!1});return(0,_.jsx)(`div`,{style:{width:`400px`},children:(0,_.jsxs)(m.Root,{files:e,addFiles:n,removeFile:r,multiple:!1,children:[(0,_.jsx)(m.Input,{}),(0,_.jsxs)(m.Dropzone,{className:`dropzone`,children:[(0,_.jsx)(`span`,{className:`dropzone-icon`,"aria-hidden":`true`,children:`📄`}),(0,_.jsx)(`span`,{className:`dropzone-text`,children:`파일 하나를 선택하세요`}),(0,_.jsx)(`span`,{className:`dropzone-hint`,children:`새 파일을 선택하면 기존 파일이 교체됩니다`})]}),t.length>0&&(0,_.jsx)(`ul`,{className:`error-list`,role:`alert`,"aria-label":`업로드 오류`,children:t.map((e,t)=>(0,_.jsx)(`li`,{className:`error-item`,children:e},t))}),e.length>0&&(0,_.jsx)(m.Preview,{className:`file-list`,children:e.map(e=>(0,_.jsxs)(m.Item,{file:e,className:`file-item`,children:[(0,_.jsx)(`span`,{className:`file-name`,children:e.file.name}),(0,_.jsx)(`span`,{className:`file-size`,children:g(e.file.size)}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>r(e.id),className:`file-remove-btn`,"aria-label":`${e.file.name} 삭제`,children:`×`})]},e.id))})]})})},{})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => {
    const DefaultExample = () => {
      const {
        files,
        errors,
        addFiles,
        removeFile
      } = useFileUpload({
        multiple: true
      });
      return <div style={{
        width: '400px'
      }}>
          <FileUpload.Root files={files} addFiles={addFiles} removeFile={removeFile} multiple>
            <FileUpload.Input />
            <FileUpload.Dropzone className="dropzone">
              <span className="dropzone-icon" aria-hidden="true">📂</span>
              <span className="dropzone-text">클릭하거나 파일을 드래그하세요</span>
              <span className="dropzone-hint">모든 파일 형식 지원</span>
            </FileUpload.Dropzone>

            {errors.length > 0 && <ul className="error-list" role="alert" aria-label="업로드 오류">
                {errors.map((err, i) => <li key={i} className="error-item">{err}</li>)}
              </ul>}

            {files.length > 0 && <FileUpload.Preview className="file-list">
                {files.map(f => <FileUpload.Item key={f.id} file={f} className="file-item">
                    <span className="file-name">{f.file.name}</span>
                    <span className="file-size">{formatBytes(f.file.size)}</span>
                    <button type="button" onClick={() => removeFile(f.id)} className="file-remove-btn" aria-label={\`\${f.file.name} 삭제\`}>
                      ×
                    </button>
                  </FileUpload.Item>)}
              </FileUpload.Preview>}
          </FileUpload.Root>
        </div>;
    };
    return <DefaultExample />;
  }
}`,...y.parameters?.docs?.source},description:{story:`기본 파일 업로드.

클릭 또는 드래그 앤 드롭으로 파일을 추가합니다.
업로드된 파일은 목록에 표시됩니다.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Image Upload with Preview',
  render: () => {
    const ImageExample = () => {
      const {
        files,
        errors,
        addFiles,
        removeFile
      } = useFileUpload({
        multiple: true,
        accept: ['image/*'],
        maxSize: 5 * 1024 * 1024 // 5MB
      });
      return <div style={{
        width: '400px'
      }}>
          <FileUpload.Root files={files} addFiles={addFiles} removeFile={removeFile} multiple accept="image/*">
            <FileUpload.Input />
            <FileUpload.Dropzone className="dropzone">
              <span className="dropzone-icon" aria-hidden="true">🖼️</span>
              <span className="dropzone-text">이미지를 드래그하거나 클릭하여 선택</span>
              <span className="dropzone-hint">JPG, PNG, GIF, WebP · 최대 5MB</span>
            </FileUpload.Dropzone>

            {errors.length > 0 && <ul className="error-list" role="alert" aria-label="업로드 오류">
                {errors.map((err, i) => <li key={i} className="error-item">{err}</li>)}
              </ul>}

            {files.length > 0 && <FileUpload.Preview className="file-list">
                {files.map(f => <FileUpload.Item key={f.id} file={f} className="file-item">
                    {f.previewUrl &&
              // eslint-disable-next-line @next/next/no-img-element
              <img src={f.previewUrl} alt={f.file.name} className="file-preview-img" />}
                    <span className="file-name">{f.file.name}</span>
                    <span className="file-size">{formatBytes(f.file.size)}</span>
                    <button type="button" onClick={() => removeFile(f.id)} className="file-remove-btn" aria-label={\`\${f.file.name} 삭제\`}>
                      ×
                    </button>
                  </FileUpload.Item>)}
              </FileUpload.Preview>}
          </FileUpload.Root>
        </div>;
    };
    return <ImageExample />;
  }
}`,...b.parameters?.docs?.source},description:{story:`이미지 업로드 (미리보기 포함).

accept로 이미지만 허용하고, 업로드된 이미지를 미리보기로 표시합니다.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Single File',
  render: () => {
    const SingleFileExample = () => {
      const {
        files,
        errors,
        addFiles,
        removeFile
      } = useFileUpload({
        multiple: false
      });
      return <div style={{
        width: '400px'
      }}>
          <FileUpload.Root files={files} addFiles={addFiles} removeFile={removeFile} multiple={false}>
            <FileUpload.Input />
            <FileUpload.Dropzone className="dropzone">
              <span className="dropzone-icon" aria-hidden="true">📄</span>
              <span className="dropzone-text">파일 하나를 선택하세요</span>
              <span className="dropzone-hint">새 파일을 선택하면 기존 파일이 교체됩니다</span>
            </FileUpload.Dropzone>

            {errors.length > 0 && <ul className="error-list" role="alert" aria-label="업로드 오류">
                {errors.map((err, i) => <li key={i} className="error-item">{err}</li>)}
              </ul>}

            {files.length > 0 && <FileUpload.Preview className="file-list">
                {files.map(f => <FileUpload.Item key={f.id} file={f} className="file-item">
                    <span className="file-name">{f.file.name}</span>
                    <span className="file-size">{formatBytes(f.file.size)}</span>
                    <button type="button" onClick={() => removeFile(f.id)} className="file-remove-btn" aria-label={\`\${f.file.name} 삭제\`}>
                      ×
                    </button>
                  </FileUpload.Item>)}
              </FileUpload.Preview>}
          </FileUpload.Root>
        </div>;
    };
    return <SingleFileExample />;
  }
}`,...x.parameters?.docs?.source},description:{story:`단일 파일 업로드.

multiple=false로 한 번에 하나의 파일만 허용합니다.
새 파일을 추가하면 기존 파일이 교체됩니다.`,...x.parameters?.docs?.description}}},S=[`Default`,`ImageUploadWithPreview`,`SingleFile`]}))();export{y as Default,b as ImageUploadWithPreview,x as SingleFile,S as __namedExportsOrder,v as default};