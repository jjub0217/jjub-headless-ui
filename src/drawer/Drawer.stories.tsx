import type { Meta, StoryObj } from '@storybook/react'
import { Drawer } from './index'
import { useState } from 'react'

/**
 * Drawer 컴포넌트의 구조:
 *
 * Drawer.Root — 상태 관리 (열림/닫힘)
 * Drawer.Trigger — 드로어를 여는 버튼 (aria-expanded, aria-haspopup)
 * Drawer.Portal — document.body에 렌더링
 * Drawer.Overlay — 배경 어둡게 (클릭하면 닫힘)
 * Drawer.Content — 드로어 본체 (role="dialog", data-side="left|right")
 * Drawer.Title — 제목 (aria-labelledby 자동 연결)
 * Drawer.Close — 닫기 버튼
 *
 * 자동으로 처리되는 접근성:
 * - 열릴 때 포커스 트랩 (Tab 키가 드로어 안에서만 순환)
 * - ESC 키로 닫기
 * - 닫힐 때 트리거 버튼으로 포커스 복원
 * - body 스크롤 잠금
 * - 배경 클릭으로 닫기
 */

const meta = {
  title: 'Components/Drawer',
  parameters: {
    docs: {
      description: {
        component:
          'Headless Drawer 컴포넌트. WAI-ARIA Dialog 패턴을 준수하며, 포커스 트랩, ESC 닫기, 스크롤 잠금을 자동으로 처리합니다.',
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <style>{`
          .drawer-trigger-btn {
            padding: 10px 20px;
            border-radius: 6px;
            border: 1px solid #d1d5db;
            background: white;
            cursor: pointer;
            font-size: 14px;
          }
          .drawer-trigger-btn:hover { background: #f3f4f6; }

          /* Overlay */
          [data-state="open"][aria-hidden="true"] {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 50;
          }

          /* Content base */
          [role="dialog"][data-side] {
            position: fixed;
            top: 0;
            bottom: 0;
            z-index: 51;
            background: white;
            width: 320px;
            padding: 24px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          /* Side variants */
          [role="dialog"][data-side="left"] { left: 0; }
          [role="dialog"][data-side="right"] { right: 0; }

          /* Drawer inner elements */
          .drawer-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .drawer-title {
            font-size: 18px;
            font-weight: 600;
            margin: 0;
          }
          .drawer-close-btn {
            background: transparent;
            border: none;
            font-size: 20px;
            cursor: pointer;
            padding: 4px;
            color: #6b7280;
            line-height: 1;
          }
          .drawer-close-btn:hover { color: #111827; }
          .drawer-body {
            color: #374151;
            font-size: 14px;
            line-height: 1.6;
          }
          .drawer-footer {
            margin-top: auto;
            display: flex;
            gap: 8px;
          }
          .drawer-action-btn {
            flex: 1;
            padding: 10px;
            border-radius: 6px;
            border: 1px solid #d1d5db;
            cursor: pointer;
            font-size: 14px;
          }
          .drawer-action-btn.primary {
            background: #1f2937;
            color: white;
            border-color: #1f2937;
          }
          .drawer-action-btn.primary:hover { background: #374151; }
        `}</style>
        <Story />
      </>
    ),
  ],
} satisfies Meta

export default meta

// ─── Right Slide ──────────────────────────────────────────
export const RightSlide: StoryObj = {
  name: 'Right Slide',
  render: () => (
    <Drawer.Root>
      <Drawer.Trigger className="drawer-trigger-btn">오른쪽 드로어 열기</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay />
        <Drawer.Content side="right">
          <div className="drawer-header">
            <Drawer.Title className="drawer-title">설정</Drawer.Title>
            <Drawer.Close className="drawer-close-btn">✕</Drawer.Close>
          </div>
          <div className="drawer-body">
            <p>이 드로어는 오른쪽에서 슬라이드됩니다.</p>
            <p>Tab 키를 눌러 포커스가 드로어 안에서만 순환하는지 확인해 보세요.</p>
            <p>ESC 키를 누르거나 배경을 클릭하면 닫힙니다.</p>
          </div>
          <div className="drawer-footer">
            <Drawer.Close className="drawer-action-btn">취소</Drawer.Close>
            <Drawer.Close className="drawer-action-btn primary">저장</Drawer.Close>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  ),
}

// ─── Left Slide ───────────────────────────────────────────
export const LeftSlide: StoryObj = {
  name: 'Left Slide',
  render: () => (
    <Drawer.Root>
      <Drawer.Trigger className="drawer-trigger-btn">왼쪽 드로어 열기</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay />
        <Drawer.Content side="left">
          <div className="drawer-header">
            <Drawer.Title className="drawer-title">내비게이션</Drawer.Title>
            <Drawer.Close className="drawer-close-btn">✕</Drawer.Close>
          </div>
          <nav className="drawer-body">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" style={{ textDecoration: 'none', color: '#1f2937', fontWeight: 500 }}>홈</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: '#1f2937', fontWeight: 500 }}>프로필</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: '#1f2937', fontWeight: 500 }}>설정</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: '#1f2937', fontWeight: 500 }}>로그아웃</a></li>
            </ul>
          </nav>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  ),
}

// ─── Controlled ───────────────────────────────────────────
export const Controlled: StoryObj = {
  name: 'Controlled',
  render: () => {
    const ControlledExample = () => {
      const [isOpen, setIsOpen] = useState(false)
      return (
        <div>
          <p style={{ marginBottom: '8px', fontSize: '14px' }}>
            상태: {isOpen ? '열림' : '닫힘'}
          </p>
          <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
            <Drawer.Trigger className="drawer-trigger-btn">드로어 열기</Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay />
              <Drawer.Content side="right">
                <div className="drawer-header">
                  <Drawer.Title className="drawer-title">제어 모드</Drawer.Title>
                  <Drawer.Close className="drawer-close-btn">✕</Drawer.Close>
                </div>
                <div className="drawer-body">
                  <p>open과 onOpenChange로 외부에서 상태를 제어합니다.</p>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      )
    }
    return <ControlledExample />
  },
}
