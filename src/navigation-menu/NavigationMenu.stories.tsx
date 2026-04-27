import type { Meta, StoryObj } from '@storybook/react'
import { NavigationMenu } from './index'

/**
 * NavigationMenu 컴포넌트 구조:
 *
 * NavigationMenu.Root — role="navigation", aria-label로 스크린 리더에 식별
 * NavigationMenu.List — 메뉴 항목 목록 (ul)
 * NavigationMenu.Item — 개별 항목 (li)
 * NavigationMenu.Link — 링크 (a), active prop으로 현재 페이지 표시
 *
 * 접근성:
 * - aria-current="page": 현재 페이지 링크에 자동 부여
 * - data-state="active/inactive": CSS 스타일링용
 * - role="navigation": 랜드마크로 스크린 리더가 바로 탐색 가능
 */

const meta = {
  title: 'Components/NavigationMenu',
  decorators: [
    (Story) => (
      <>
        <style>{`
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
        `}</style>
        <Story />
      </>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Headless Navigation Menu 컴포넌트. WAI-ARIA Navigation 랜드마크 패턴을 준수하며, aria-current="page"로 현재 페이지를 스크린 리더에 전달합니다. 스타일은 포함되어 있지 않으며, className 또는 data-state 속성으로 자유롭게 커스터마이징할 수 있습니다.',
      },
    },
  },
} satisfies Meta

export default meta

/**
 * 스토리 1: Bottom Navigation
 *
 * 모바일 앱 스타일의 하단 탐색 바 패턴.
 * 수평 방향으로 나열된 주요 섹션 링크.
 *
 * aria-current="page"로 스크린 리더가 현재 위치를 알 수 있습니다.
 */
export const Default: StoryObj = {
  name: 'Bottom Navigation',
  render: () => (
    <NavigationMenu.Root aria-label="주요 탐색">
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
  ),
}

/**
 * 스토리 2: Sidebar Navigation
 *
 * 대시보드 사이드바 스타일의 수직 탐색 메뉴.
 * orientation="vertical"로 세로 방향 배치.
 *
 * 실제 사용 사례: 관리자 페이지 사이드바, 설정 메뉴 등.
 */
export const SidebarNavigation: StoryObj = {
  name: 'Sidebar Navigation',
  render: () => (
    <div style={{ display: 'flex', gap: '32px' }}>
      <NavigationMenu.Root orientation="vertical" aria-label="사이드바 탐색" style={{ width: '200px' }}>
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
  ),
}
