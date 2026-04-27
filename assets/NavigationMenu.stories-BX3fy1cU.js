import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-1xoKwQlz.js";import{t as r}from"./jsx-runtime-DxP0NviS.js";function i(){let e=(0,l.useContext)(d);if(!e)throw Error(`NavigationMenu components must be used within NavigationMenu.Root.`);return e}function a({orientation:e=`horizontal`,"aria-label":t=`Navigation`,children:n,className:r,...i}){return(0,u.jsx)(d.Provider,{value:{orientation:e},children:(0,u.jsx)(`nav`,{role:`navigation`,"aria-label":t,"data-orientation":e,className:r,...i,children:n})})}function o({children:e,className:t,...n}){let{orientation:r}=i();return(0,u.jsx)(`ul`,{role:`list`,"data-orientation":r,className:t,...n,children:e})}function s({children:e,className:t,...n}){return(0,u.jsx)(`li`,{className:t,...n,children:e})}function c({active:e=!1,children:t,className:n,href:r=`#`,...i}){return(0,u.jsx)(`a`,{href:r,"aria-current":e?`page`:void 0,"data-active":e?``:void 0,"data-state":e?`active`:`inactive`,className:n,...i,children:t})}var l,u,d,f,p=t((()=>{l=e(n()),u=r(),d=(0,l.createContext)(null),f={Root:a,List:o,Item:s,Link:c}})),m,h,g,_,v;t((()=>{p(),m=r(),h={title:`Components/NavigationMenu`,decorators:[e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`style`,{children:`
          [role="navigation"] ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            gap: 4px;
          }
          [role="navigation"][data-orientation="vertical"] ul {
            flex-direction: column;
          }
          [role="navigation"] a {
            display: block;
            padding: 8px 16px;
            border-radius: 6px;
            text-decoration: none;
            font-size: 14px;
            color: #374151;
            transition: background-color 0.15s;
          }
          [role="navigation"] a:hover {
            background-color: #f3f4f6;
            color: #111827;
          }
          [role="navigation"] a[data-state="active"] {
            background-color: #eff6ff;
            color: #1d4ed8;
            font-weight: 600;
          }
          [role="navigation"] a:focus-visible {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
          }
        `}),(0,m.jsx)(e,{})]})],parameters:{docs:{description:{component:`Headless Navigation Menu 컴포넌트. WAI-ARIA Navigation 랜드마크 패턴을 준수하며, aria-current="page"로 현재 페이지를 스크린 리더에 전달합니다. 스타일은 포함되어 있지 않으며, className 또는 data-state 속성으로 자유롭게 커스터마이징할 수 있습니다.`}}}},g={name:`Bottom Navigation`,render:()=>(0,m.jsx)(f.Root,{"aria-label":`주요 탐색`,children:(0,m.jsxs)(f.List,{children:[(0,m.jsx)(f.Item,{children:(0,m.jsx)(f.Link,{href:`#`,active:!0,children:`홈`})}),(0,m.jsx)(f.Item,{children:(0,m.jsx)(f.Link,{href:`#`,children:`탐색`})}),(0,m.jsx)(f.Item,{children:(0,m.jsx)(f.Link,{href:`#`,children:`알림`})}),(0,m.jsx)(f.Item,{children:(0,m.jsx)(f.Link,{href:`#`,children:`마이페이지`})})]})})},_={name:`Sidebar Navigation`,render:()=>(0,m.jsx)(`div`,{style:{display:`flex`,gap:`32px`},children:(0,m.jsx)(f.Root,{orientation:`vertical`,"aria-label":`사이드바 탐색`,style:{width:`200px`},children:(0,m.jsxs)(f.List,{children:[(0,m.jsx)(f.Item,{children:(0,m.jsx)(f.Link,{href:`#`,children:`대시보드`})}),(0,m.jsx)(f.Item,{children:(0,m.jsx)(f.Link,{href:`#`,active:!0,children:`주문 관리`})}),(0,m.jsx)(f.Item,{children:(0,m.jsx)(f.Link,{href:`#`,children:`상품 관리`})}),(0,m.jsx)(f.Item,{children:(0,m.jsx)(f.Link,{href:`#`,children:`회원 관리`})}),(0,m.jsx)(f.Item,{children:(0,m.jsx)(f.Link,{href:`#`,children:`통계`})}),(0,m.jsx)(f.Item,{children:(0,m.jsx)(f.Link,{href:`#`,children:`설정`})})]})})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Bottom Navigation',
  render: () => <NavigationMenu.Root aria-label="주요 탐색">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#" active>
            홈
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">
            탐색
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">
            알림
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">
            마이페이지
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
}`,...g.parameters?.docs?.source},description:{story:`스토리 1: Bottom Navigation

모바일 앱 스타일의 하단 탐색 바 패턴.
수평 방향으로 나열된 주요 섹션 링크.

aria-current="page"로 스크린 리더가 현재 위치를 알 수 있습니다.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Sidebar Navigation',
  render: () => <div style={{
    display: 'flex',
    gap: '32px'
  }}>
      <NavigationMenu.Root orientation="vertical" aria-label="사이드바 탐색" style={{
      width: '200px'
    }}>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="#">
              대시보드
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="#" active>
              주문 관리
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="#">
              상품 관리
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="#">
              회원 관리
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="#">
              통계
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="#">
              설정
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>

    </div>
}`,..._.parameters?.docs?.source},description:{story:`스토리 2: Sidebar Navigation

대시보드 사이드바 스타일의 수직 탐색 메뉴.
orientation="vertical"로 세로 방향 배치.

실제 사용 사례: 관리자 페이지 사이드바, 설정 메뉴 등.`,..._.parameters?.docs?.description}}},v=[`Default`,`SidebarNavigation`]}))();export{g as Default,_ as SidebarNavigation,v as __namedExportsOrder,h as default};