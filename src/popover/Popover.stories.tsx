import type { Meta, StoryObj } from '@storybook/react'
import { Popover } from './index'
import { useState } from 'react'

/**
 * Popover 컴포넌트의 구조:
 *
 * Popover.Root — 상태 관리 (열림/닫힘)
 * Popover.Trigger — 팝오버를 여는 버튼 (aria-haspopup, aria-expanded)
 * Popover.Content — 플로팅 패널 (role="dialog", 포털로 렌더링)
 * Popover.Close — 닫기 버튼 (포커스 복원)
 *
 * 자동으로 처리되는 접근성:
 * - ESC 키로 닫기 + 트리거로 포커스 복원
 * - 외부 클릭으로 닫기
 * - 열릴 때 첫 번째 포커서블 요소로 포커스 이동
 */

const meta = {
  title: 'Components/Popover',
  parameters: {
    docs: {
      description: {
        component:
          'Headless Popover 컴포넌트. WAI-ARIA Dialog 패턴을 준수하며, ESC 닫기, 외부 클릭 닫기, 포커스 관리를 자동으로 처리합니다.',
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <style>{`
          .popover-trigger-btn {
            padding: 8px 16px;
            border-radius: 6px;
            border: 1px solid #d1d5db;
            background: white;
            cursor: pointer;
            font-size: 14px;
          }
          .popover-trigger-btn[data-state="open"] {
            background: #f3f4f6;
            border-color: #9ca3af;
          }
          .popover-trigger-btn:hover { background: #f3f4f6; }

          .popover-content {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 16px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.12);
            width: 280px;
            margin-top: 8px;
            z-index: 100;
          }

          .popover-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
          }
          .popover-header-title {
            font-weight: 600;
            font-size: 15px;
            margin: 0;
          }
          .popover-close-btn {
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 16px;
            color: #6b7280;
            padding: 2px;
            line-height: 1;
          }
          .popover-close-btn:hover { color: #111827; }

          .popover-body {
            font-size: 14px;
            color: #374151;
            line-height: 1.6;
          }

          .popover-input {
            width: 100%;
            box-sizing: border-box;
            padding: 8px;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            font-size: 14px;
            margin-top: 8px;
          }
          .popover-input:focus {
            outline: none;
            border-color: #6366f1;
            box-shadow: 0 0 0 2px rgba(99,102,241,0.15);
          }

          .popover-action-btn {
            margin-top: 12px;
            width: 100%;
            padding: 8px;
            border-radius: 6px;
            border: none;
            background: #1f2937;
            color: white;
            cursor: pointer;
            font-size: 14px;
          }
          .popover-action-btn:hover { background: #374151; }

          /* Notification panel */
          .notif-item {
            display: flex;
            gap: 10px;
            padding: 8px 0;
            border-bottom: 1px solid #f3f4f6;
            font-size: 13px;
          }
          .notif-item:last-child { border-bottom: none; }
          .notif-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #6366f1;
            flex-shrink: 0;
            margin-top: 4px;
          }
          .notif-text { color: #374151; }
          .notif-time { color: #9ca3af; font-size: 11px; margin-top: 2px; }
        `}</style>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <Story />
        </div>
      </>
    ),
  ],
} satisfies Meta

export default meta

// ─── Basic Popover ────────────────────────────────────────
export const BasicPopover: StoryObj = {
  name: 'Basic Popover',
  render: () => (
    <Popover.Root>
      <Popover.Trigger className="popover-trigger-btn">팝오버 열기</Popover.Trigger>
      <Popover.Content className="popover-content">
        <div className="popover-header">
          <h3 className="popover-header-title">팝오버</h3>
          <Popover.Close className="popover-close-btn" />
        </div>
        <div className="popover-body">
          <p style={{ margin: 0 }}>ESC 키를 누르거나 외부를 클릭하면 닫힙니다.</p>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="popover-input"
          />
          <Popover.Close className="popover-action-btn">확인</Popover.Close>
        </div>
      </Popover.Content>
    </Popover.Root>
  ),
}

// ─── Notification Panel ───────────────────────────────────
export const NotificationPanel: StoryObj = {
  name: 'Notification Panel',
  render: () => (
    <Popover.Root>
      <Popover.Trigger className="popover-trigger-btn">
        🔔 알림 (3)
      </Popover.Trigger>
      <Popover.Content className="popover-content" style={{ minWidth: '300px' }}>
        <div className="popover-header">
          <h3 className="popover-header-title">알림</h3>
          <Popover.Close className="popover-close-btn" />
        </div>
        <div>
          <div className="notif-item">
            <div className="notif-dot" />
            <div>
              <div className="notif-text">새 댓글이 달렸습니다.</div>
              <div className="notif-time">5분 전</div>
            </div>
          </div>
          <div className="notif-item">
            <div className="notif-dot" />
            <div>
              <div className="notif-text">주문이 배송 완료되었습니다.</div>
              <div className="notif-time">1시간 전</div>
            </div>
          </div>
          <div className="notif-item">
            <div className="notif-dot" style={{ background: '#d1d5db' }} />
            <div>
              <div className="notif-text" style={{ color: '#9ca3af' }}>새 메시지가 도착했습니다.</div>
              <div className="notif-time">어제</div>
            </div>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  ),
}

// ─── Controlled ───────────────────────────────────────────
export const Controlled: StoryObj = {
  name: 'Controlled',
  render: () => {
    const ControlledExample = () => {
      const [open, setOpen] = useState(false)
      return (
        <div>
          <p style={{ marginBottom: '8px', fontSize: '14px' }}>
            상태: {open ? '열림' : '닫힘'}
          </p>
          <Popover.Root open={open} onOpenChange={setOpen}>
            <Popover.Trigger className="popover-trigger-btn">팝오버 열기</Popover.Trigger>
            <Popover.Content className="popover-content">
              <div className="popover-header">
                <h3 className="popover-header-title">제어 모드</h3>
                <Popover.Close className="popover-close-btn" />
              </div>
              <p className="popover-body" style={{ margin: 0 }}>
                open과 onOpenChange로 외부에서 상태를 제어합니다.
              </p>
            </Popover.Content>
          </Popover.Root>
        </div>
      )
    }
    return <ControlledExample />
  },
}
