import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-DOtFvnP8.js";import{t as r}from"./jsx-runtime-DxP0NviS.js";function i(){let e=(0,c.useContext)(u);if(!e)throw Error(`Avatar components must be used within Avatar.Root.`);return e}function a({children:e,className:t,...n}){let[r,i]=(0,c.useState)(`idle`);return(0,l.jsx)(u.Provider,{value:{imageStatus:r,setImageStatus:i},children:(0,l.jsx)(`span`,{role:`img`,"data-state":r,className:t,...n,children:e})})}function o({alt:e,src:t,className:n,...r}){let{setImageStatus:a}=i(),o=()=>{a(`loaded`)},s=e=>{a(`error`)};return(0,l.jsx)(`img`,{...r,src:t,alt:e,onLoad:o,onError:s,className:n})}function s({children:e,className:t,delayMs:n=0,...r}){let{imageStatus:a}=i();return a===`loaded`?null:(0,l.jsx)(`span`,{"aria-hidden":`true`,"data-state":a,className:t,...r,children:e})}var c,l,u,d,f=t((()=>{c=e(n()),l=r(),u=(0,c.createContext)(null),d={Root:a,Image:o,Fallback:s}})),p,m,h,g,_,v,y;t((()=>{f(),p=r(),m={title:`Components/Avatar`,decorators:[e=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`style`,{children:`
          .avatar-root {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            border-radius: 9999px;
            overflow: hidden;
            background: #e5e7eb;
            flex-shrink: 0;
          }
          .avatar-root[data-state="loaded"] {
            background: transparent;
          }
          .avatar-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .avatar-fallback {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            font-size: 16px;
            font-weight: 600;
            color: #6b7280;
            background: #f3f4f6;
            border-radius: 9999px;
            user-select: none;
          }
          .avatar-fallback[data-state="error"] {
            color: #374151;
            background: #dbeafe;
          }
          .avatar-lg {
            width: 64px;
            height: 64px;
          }
          .avatar-lg .avatar-fallback {
            font-size: 22px;
          }
          .avatar-sm {
            width: 32px;
            height: 32px;
          }
          .avatar-sm .avatar-fallback {
            font-size: 12px;
          }
        `}),(0,p.jsx)(e,{})]})],parameters:{docs:{description:{component:`Headless Avatar 컴포넌트. 이미지 로드 실패 시 자동으로 Fallback을 표시합니다. role="img"로 스크린 리더에 의미를 전달하며, alt 텍스트를 통해 접근성을 보장합니다.`}}}},h={name:`With Image`,render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,alignItems:`center`},children:[(0,p.jsxs)(d.Root,{className:`avatar-root avatar-sm`,children:[(0,p.jsx)(d.Image,{src:`https://i.pravatar.cc/64?img=1`,alt:`사용자 김철수`,className:`avatar-img`}),(0,p.jsx)(d.Fallback,{className:`avatar-fallback`,children:`김`})]}),(0,p.jsxs)(d.Root,{className:`avatar-root`,children:[(0,p.jsx)(d.Image,{src:`https://i.pravatar.cc/96?img=2`,alt:`사용자 이영희`,className:`avatar-img`}),(0,p.jsx)(d.Fallback,{className:`avatar-fallback`,children:`이`})]}),(0,p.jsxs)(d.Root,{className:`avatar-root avatar-lg`,children:[(0,p.jsx)(d.Image,{src:`https://i.pravatar.cc/128?img=3`,alt:`사용자 박지민`,className:`avatar-img`}),(0,p.jsx)(d.Fallback,{className:`avatar-fallback`,children:`박`})]})]})},g={name:`With Fallback (Initials)`,render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,alignItems:`center`},children:[(0,p.jsx)(d.Root,{className:`avatar-root avatar-sm`,children:(0,p.jsx)(d.Fallback,{className:`avatar-fallback`,children:`김`})}),(0,p.jsx)(d.Root,{className:`avatar-root`,children:(0,p.jsx)(d.Fallback,{className:`avatar-fallback`,children:`AB`})}),(0,p.jsx)(d.Root,{className:`avatar-root avatar-lg`,children:(0,p.jsx)(d.Fallback,{className:`avatar-fallback`,children:`박`})})]})},_={name:`Image Load Error`,render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,p.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,p.jsxs)(d.Root,{className:`avatar-root`,children:[(0,p.jsx)(d.Image,{src:`https://invalid-url-that-will-fail.example/avatar.jpg`,alt:`사용자 오류`,className:`avatar-img`}),(0,p.jsx)(d.Fallback,{className:`avatar-fallback`,children:`오`})]}),(0,p.jsx)(`p`,{style:{fontSize:`11px`,color:`#9ca3af`,marginTop:`4px`},children:`로드 실패 → Fallback`})]}),(0,p.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,p.jsxs)(d.Root,{className:`avatar-root`,children:[(0,p.jsx)(d.Image,{src:`https://i.pravatar.cc/96?img=5`,alt:`사용자 정상`,className:`avatar-img`}),(0,p.jsx)(d.Fallback,{className:`avatar-fallback`,children:`정`})]}),(0,p.jsx)(`p`,{style:{fontSize:`11px`,color:`#9ca3af`,marginTop:`4px`},children:`정상 로드`})]})]})},v={name:`Avatar Group`,render:()=>{let e=[{src:`https://i.pravatar.cc/96?img=10`,alt:`사용자 1`,fallback:`1`},{src:`https://i.pravatar.cc/96?img=11`,alt:`사용자 2`,fallback:`2`},{src:`https://invalid-url.example/fail.jpg`,alt:`사용자 3`,fallback:`3`},{src:`https://i.pravatar.cc/96?img=13`,alt:`사용자 4`,fallback:`4`}];return(0,p.jsxs)(`div`,{style:{display:`flex`},children:[e.map((t,n)=>(0,p.jsxs)(d.Root,{className:`avatar-root`,style:{marginLeft:n===0?0:`-12px`,border:`2px solid white`,zIndex:e.length-n},children:[(0,p.jsx)(d.Image,{src:t.src,alt:t.alt,className:`avatar-img`}),(0,p.jsx)(d.Fallback,{className:`avatar-fallback`,children:t.fallback})]},n)),(0,p.jsx)(d.Root,{className:`avatar-root`,style:{marginLeft:`-12px`,border:`2px solid white`},"aria-label":`외 2명`,children:(0,p.jsx)(d.Fallback,{className:`avatar-fallback`,style:{fontSize:`12px`},children:`+2`})})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Image',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Avatar.Root className="avatar-root avatar-sm">
        <Avatar.Image src="https://i.pravatar.cc/64?img=1" alt="사용자 김철수" className="avatar-img" />
        <Avatar.Fallback className="avatar-fallback">김</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root className="avatar-root">
        <Avatar.Image src="https://i.pravatar.cc/96?img=2" alt="사용자 이영희" className="avatar-img" />
        <Avatar.Fallback className="avatar-fallback">이</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root className="avatar-root avatar-lg">
        <Avatar.Image src="https://i.pravatar.cc/128?img=3" alt="사용자 박지민" className="avatar-img" />
        <Avatar.Fallback className="avatar-fallback">박</Avatar.Fallback>
      </Avatar.Root>
    </div>
}`,...h.parameters?.docs?.source},description:{story:`이미지 있는 아바타.

이미지가 정상적으로 로드되면 Fallback은 숨겨집니다.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Fallback (Initials)',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Avatar.Root className="avatar-root avatar-sm">
        <Avatar.Fallback className="avatar-fallback">김</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root className="avatar-root">
        <Avatar.Fallback className="avatar-fallback">AB</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root className="avatar-root avatar-lg">
        <Avatar.Fallback className="avatar-fallback">박</Avatar.Fallback>
      </Avatar.Root>
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Fallback (이니셜).

이미지 없이 이니셜만 사용하는 예시.
src를 제공하지 않으면 Fallback이 바로 표시됩니다.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Image Load Error',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <Avatar.Root className="avatar-root">
          <Avatar.Image src="https://invalid-url-that-will-fail.example/avatar.jpg" alt="사용자 오류" className="avatar-img" />
          <Avatar.Fallback className="avatar-fallback">오</Avatar.Fallback>
        </Avatar.Root>
        <p style={{
        fontSize: '11px',
        color: '#9ca3af',
        marginTop: '4px'
      }}>로드 실패 → Fallback</p>
      </div>

      <div style={{
      textAlign: 'center'
    }}>
        <Avatar.Root className="avatar-root">
          <Avatar.Image src="https://i.pravatar.cc/96?img=5" alt="사용자 정상" className="avatar-img" />
          <Avatar.Fallback className="avatar-fallback">정</Avatar.Fallback>
        </Avatar.Root>
        <p style={{
        fontSize: '11px',
        color: '#9ca3af',
        marginTop: '4px'
      }}>정상 로드</p>
      </div>
    </div>
}`,..._.parameters?.docs?.source},description:{story:`이미지 로드 실패.

잘못된 src를 제공하면 onError가 발생하고 Fallback이 표시됩니다.
data-state="error"로 에러 스타일을 적용할 수 있습니다.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Avatar Group',
  render: () => {
    const users = [{
      src: 'https://i.pravatar.cc/96?img=10',
      alt: '사용자 1',
      fallback: '1'
    }, {
      src: 'https://i.pravatar.cc/96?img=11',
      alt: '사용자 2',
      fallback: '2'
    }, {
      src: 'https://invalid-url.example/fail.jpg',
      alt: '사용자 3',
      fallback: '3'
    }, {
      src: 'https://i.pravatar.cc/96?img=13',
      alt: '사용자 4',
      fallback: '4'
    }];
    return <div style={{
      display: 'flex'
    }}>
        {users.map((user, i) => <Avatar.Root key={i} className="avatar-root" style={{
        marginLeft: i === 0 ? 0 : '-12px',
        border: '2px solid white',
        zIndex: users.length - i
      }}>
            <Avatar.Image src={user.src} alt={user.alt} className="avatar-img" />
            <Avatar.Fallback className="avatar-fallback">{user.fallback}</Avatar.Fallback>
          </Avatar.Root>)}
        <Avatar.Root className="avatar-root" style={{
        marginLeft: '-12px',
        border: '2px solid white'
      }} aria-label="외 2명">
          <Avatar.Fallback className="avatar-fallback" style={{
          fontSize: '12px'
        }}>+2</Avatar.Fallback>
        </Avatar.Root>
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:`아바타 그룹.

여러 아바타를 겹쳐서 표시하는 패턴.`,...v.parameters?.docs?.description}}},y=[`WithImage`,`WithFallbackInitials`,`ImageLoadError`,`AvatarGroup`]}))();export{v as AvatarGroup,_ as ImageLoadError,g as WithFallbackInitials,h as WithImage,y as __namedExportsOrder,m as default};