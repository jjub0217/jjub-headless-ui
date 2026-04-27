import type { Meta, StoryObj } from '@storybook/react'
import { Toast, useToast } from './index'

/**
 * Toast 컴포넌트의 구조:
 *
 * Toast.Provider — aria-live 리전 및 상태 관리
 * Toast.Viewport — 포털로 렌더링되는 토스트 목록 (aria-live="polite")
 * Toast.Root — 개별 토스트 (role="status", 자동 닫기 타이머)
 * Toast.Title — 제목
 * Toast.Description — 내용
 * Toast.Close — 닫기 버튼
 * useToast() — addToast / removeToast 훅
 *
 * 자동으로 처리되는 접근성:
 * - aria-live="polite"로 스크린리더에 알림
 * - 지정된 시간 후 자동 닫기
 * - 닫기 버튼으로 수동 닫기
 */

const meta = {
  title: 'Components/Toast',
  parameters: {
    docs: {
      description: {
        component:
          'Headless Toast 컴포넌트. WAI-ARIA Live Region 패턴을 준수하며, 자동 닫기, 수동 닫기를 지원합니다.',
      },
    },
  },
  decorators: [
    (Story) => (
      <Toast.Provider>
        <style>{`
          [data-toast-viewport] {
            position: fixed;
            bottom: 24px;
            right: 24px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            list-style: none;
            margin: 0;
            padding: 0;
            z-index: 9999;
            max-width: 420px;
          }
          [data-toast-id] {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            border-radius: 8px;
            background: #1f2937;
            color: white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            font-size: 14px;
            line-height: 1.4;
          }
          [data-toast-id] > div:first-child {
            flex: 1;
          }
          [data-toast-id][data-variant="success"] { background: #065f46; }
          [data-toast-id][data-variant="error"] { background: #7f1d1d; }
          [data-toast-id][data-variant="warning"] { background: #78350f; }
          [data-toast-title] { font-weight: 600; margin: 0; }
          [data-toast-description] { margin: 0; opacity: 0.85; }
          [aria-label="Close notification"] {
            background: transparent;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 16px;
            padding: 0;
            flex-shrink: 0;
            line-height: 1;
            opacity: 0.7;
          }
          [aria-label="Close notification"]:hover { opacity: 1; }
          [data-toast-id] {
            animation: toastSlideIn 300ms ease-out;
          }
          @keyframes toastSlideIn {
            from {
              opacity: 0;
              transform: translateX(100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .toast-trigger-btn {
            padding: 8px 16px;
            border-radius: 6px;
            border: 1px solid #d1d5db;
            background: white;
            cursor: pointer;
            font-size: 14px;
          }
          .toast-trigger-btn:hover { background: #f3f4f6; }
        `}</style>
        <Story />
        <Toast.Viewport />
      </Toast.Provider>
    ),
  ],
} satisfies Meta

export default meta

// ─── Success Toast ────────────────────────────────────────
export const SuccessToast: StoryObj = {
  name: 'Success Toast',
  render: () => {
    const Demo = () => {
      const { addToast } = useToast()
      return (
        <button
          className="toast-trigger-btn"
          onClick={() =>
            addToast({
              title: '저장 완료',
              description: '변경 사항이 성공적으로 저장되었습니다.',
              variant: 'success',
              duration: 4000,
            })
          }
        >
          성공 토스트 보기
        </button>
      )
    }
    return <Demo />
  },
}

// ─── Error Toast ──────────────────────────────────────────
export const ErrorToast: StoryObj = {
  name: 'Error Toast',
  render: () => {
    const Demo = () => {
      const { addToast } = useToast()
      return (
        <button
          className="toast-trigger-btn"
          onClick={() =>
            addToast({
              title: '오류 발생',
              description: '요청을 처리하는 중 오류가 발생했습니다. 다시 시도해 주세요.',
              variant: 'error',
              duration: 6000,
            })
          }
        >
          오류 토스트 보기
        </button>
      )
    }
    return <Demo />
  },
}

// ─── Warning Toast ────────────────────────────────────────
export const WarningToast: StoryObj = {
  name: 'Warning Toast',
  render: () => {
    const Demo = () => {
      const { addToast } = useToast()
      return (
        <button
          className="toast-trigger-btn"
          onClick={() =>
            addToast({
              title: '주의',
              description: '세션이 곧 만료됩니다. 작업을 저장해 주세요.',
              variant: 'warning',
              duration: 5000,
            })
          }
        >
          경고 토스트 보기
        </button>
      )
    }
    return <Demo />
  },
}

// ─── Auto Close ───────────────────────────────────────────
export const AutoClose: StoryObj = {
  name: 'Auto Close (2s)',
  render: () => {
    const Demo = () => {
      const { addToast } = useToast()
      return (
        <button
          className="toast-trigger-btn"
          onClick={() =>
            addToast({
              title: '2초 후 자동 닫힘',
              description: '이 토스트는 2초 후에 자동으로 사라집니다.',
              duration: 2000,
            })
          }
        >
          자동 닫기 (2초)
        </button>
      )
    }
    return <Demo />
  },
}

// ─── Stacked Toasts ───────────────────────────────────────
export const StackedToasts: StoryObj = {
  name: 'Stacked Toasts',
  render: () => {
    const Demo = () => {
      const { addToast } = useToast()

      const addMultiple = () => {
        addToast({ title: '알림 1', description: '첫 번째 알림입니다.', variant: 'info', duration: 6000 })
        setTimeout(() =>
          addToast({ title: '알림 2', description: '두 번째 알림입니다.', variant: 'success', duration: 6000 }), 300)
        setTimeout(() =>
          addToast({ title: '알림 3', description: '세 번째 알림입니다.', variant: 'warning', duration: 6000 }), 600)
      }

      return (
        <button className="toast-trigger-btn" onClick={addMultiple}>
          토스트 3개 쌓기
        </button>
      )
    }
    return <Demo />
  },
}
