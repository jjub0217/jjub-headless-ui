import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from './index'
import { useState } from 'react'

/**
 * Toggle 컴포넌트의 구조:
 *
 * Toggle.Root — role="switch", aria-checked로 켜짐/꺼짐 상태를 전달
 *
 * 자동으로 처리되는 접근성:
 * - Space/Enter로 토글
 * - 스크린 리더가 "켜짐/꺼짐" 상태를 읽어줌
 * - data-state="on/off"로 CSS 스타일링 가능
 *
 * 방문 완료 토글(★/☆) 등에서 반복되던 패턴입니다.
 */

const meta = {
  title: 'Components/Toggle',
  decorators: [
    (Story) => (
      <>
        <style>{`
          [role="switch"] {
            cursor: pointer;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            font-size: 14px;
          }
          [role="switch"][data-state="on"] {
            font-weight: bold;
          }
          [role="switch"][data-state="off"] {
            color: #6b7280;
          }
          [role="switch"]:not([data-disabled]):hover {
            background-color: #f3f4f6;
          }
          [role="switch"][data-disabled] {
            opacity: 0.4;
            cursor: not-allowed;
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
          'Headless Toggle(Switch) 컴포넌트. role="switch"와 aria-checked로 켜짐/꺼짐 상태를 스크린 리더에 전달합니다.',
      },
    },
  },
} satisfies Meta

export default meta

/**
 * 기본 사용법.
 *
 * 테스트해보세요:
 * - 클릭 → 켜짐/꺼짐 전환
 * - Space/Enter → 키보드로 전환
 */
export const Default: StoryObj = {
  render: () => (
    <Toggle.Root defaultPressed={false}>
      알림 수신
    </Toggle.Root>
  ),
}

/**
 * 아이콘 토글.
 *
 * ★/☆ 아이콘으로 상태를 표현하는 토글 패턴입니다.
 */
export const IconToggle: StoryObj = {
  name: 'Icon Toggle',
  render: () => {
    const IconToggleExample = () => {
      const [starred, setStarred] = useState(false)

      return (
        <Toggle.Root
          pressed={starred}
          onPressedChange={setStarred}
          aria-label={starred ? 'Remove from favorites' : 'Add to favorites'}
          style={{ fontSize: '24px', background: 'none', padding: '4px' }}
        >
          {starred ? '★' : '☆'}
        </Toggle.Root>
      )
    }

    return <IconToggleExample />
  },
}

/**
 * 비활성화된 토글.
 */
export const Disabled: StoryObj = {
  render: () => (
    <Toggle.Root defaultPressed={true} disabled>
      비활성화됨
    </Toggle.Root>
  ),
}

/**
 * Controlled 토글.
 *
 * 외부에서 상태를 제어하는 예시.
 */
export const Controlled: StoryObj = {
  render: () => {
    const ControlledExample = () => {
      const [darkMode, setDarkMode] = useState(false)

      return (
        <div>
          <p style={{ marginBottom: '8px' }}>다크 모드: <strong>{darkMode ? '켜짐' : '꺼짐'}</strong></p>
          <Toggle.Root pressed={darkMode} onPressedChange={setDarkMode}>
            {darkMode ? '🌙 다크 모드' : '☀️ 라이트 모드'}
          </Toggle.Root>
        </div>
      )
    }

    return <ControlledExample />
  },
}
