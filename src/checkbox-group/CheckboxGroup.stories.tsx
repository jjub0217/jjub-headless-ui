import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxGroup } from './index'
import { useState } from 'react'

/**
 * CheckboxGroup 컴포넌트의 구조:
 *
 * CheckboxGroup.Root — role="group", 다중 선택 상태 관리
 * CheckboxGroup.Option — role="checkbox", aria-checked
 * CheckboxGroup.Indicator — 체크 표시 (✓)
 *
 * RadioGroup과의 차이:
 * - RadioGroup: 하나만 선택 (단일 선택)
 * - CheckboxGroup: 여러 개 선택 가능 (다중 선택)
 *
 * 카테고리 필터, 가격대 필터 등에서
 * 반복되던 다중 선택 패턴입니다.
 */

const optionStyle = {
  padding: '8px 16px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '14px',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  background: 'none',
}

const indicatorStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '16px',
  height: '16px',
  borderRadius: '3px',
  border: '2px solid #d1d5db',
  flexShrink: 0,
  fontSize: '11px',
}

const meta = {
  title: 'Components/CheckboxGroup',
  decorators: [
    (Story) => (
      <>
        <style>{`
          [role="checkbox"][data-state="checked"] {
            font-weight: bold;
          }
          [role="checkbox"][data-state="checked"] span[aria-hidden] {
            border-color: #3b82f6;
            background-color: #3b82f6;
            color: white;
          }
          [role="checkbox"][data-state="unchecked"] {
            color: #6b7280;
          }
          [role="checkbox"]:not([data-disabled]):hover {
            background-color: #f3f4f6;
          }
          [role="checkbox"][data-disabled] {
            opacity: 0.4;
            cursor: not-allowed;
          }
          [role="checkbox"]:focus-visible {
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
          'Headless CheckboxGroup 컴포넌트. 다중 선택을 지원하며, role="checkbox"와 aria-checked로 스크린 리더에 상태를 전달합니다.',
      },
    },
  },
} satisfies Meta

export default meta

/**
 * 기본 사용법.
 *
 * 여러 옵션을 동시에 선택할 수 있습니다.
 * 선택된 옵션을 다시 클릭하면 선택 해제됩니다.
 */
export const Default: StoryObj = {
  render: () => (
    <CheckboxGroup.Root defaultValue={['dog']}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <CheckboxGroup.Option value="dog" style={optionStyle}>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          강아지
        </CheckboxGroup.Option>
        <CheckboxGroup.Option value="cat" style={optionStyle}>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          고양이
        </CheckboxGroup.Option>
        <CheckboxGroup.Option value="bird" style={optionStyle}>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          조류
        </CheckboxGroup.Option>
        <CheckboxGroup.Option value="fish" style={optionStyle}>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          어류
        </CheckboxGroup.Option>
      </div>
    </CheckboxGroup.Root>
  ),
}

/**
 * 가로 방향.
 */
export const Horizontal: StoryObj = {
  render: () => (
    <CheckboxGroup.Root defaultValue={['new']}>
      <div style={{ display: 'flex', gap: '4px' }}>
        <CheckboxGroup.Option value="new" style={optionStyle}>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          새 상품
        </CheckboxGroup.Option>
        <CheckboxGroup.Option value="used" style={optionStyle}>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          중고
        </CheckboxGroup.Option>
        <CheckboxGroup.Option value="refurbished" style={optionStyle}>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          리퍼
        </CheckboxGroup.Option>
      </div>
    </CheckboxGroup.Root>
  ),
}

/**
 * 비활성화된 옵션.
 */
export const WithDisabledOption: StoryObj = {
  name: 'Disabled Option',
  render: () => (
    <CheckboxGroup.Root defaultValue={['email']}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <CheckboxGroup.Option value="email" style={optionStyle}>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          이메일 알림
        </CheckboxGroup.Option>
        <CheckboxGroup.Option value="sms" style={optionStyle}>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          SMS 알림
        </CheckboxGroup.Option>
        <CheckboxGroup.Option value="push" style={optionStyle} disabled>
          <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
          푸시 알림 (준비 중)
        </CheckboxGroup.Option>
      </div>
    </CheckboxGroup.Root>
  ),
}

/**
 * Controlled.
 *
 * 외부에서 선택 상태를 제어하는 예시.
 */
export const Controlled: StoryObj = {
  render: () => {
    const ControlledExample = () => {
      const [selected, setSelected] = useState<string[]>(['mon', 'wed', 'fri'])
      const days = [
        { value: 'mon', label: '월' },
        { value: 'tue', label: '화' },
        { value: 'wed', label: '수' },
        { value: 'thu', label: '목' },
        { value: 'fri', label: '금' },
        { value: 'sat', label: '토' },
        { value: 'sun', label: '일' },
      ]

      return (
        <div>
          <p style={{ marginBottom: '8px' }}>선택: <strong>{selected.join(', ') || '없음'}</strong></p>
          <CheckboxGroup.Root value={selected} onValueChange={setSelected}>
            <div style={{ display: 'flex', gap: '4px' }}>
              {days.map((day) => (
                <CheckboxGroup.Option key={day.value} value={day.value} style={optionStyle}>
                  <CheckboxGroup.Indicator style={indicatorStyle}>✓</CheckboxGroup.Indicator>
                  {day.label}
                </CheckboxGroup.Option>
              ))}
            </div>
          </CheckboxGroup.Root>
        </div>
      )
    }

    return <ControlledExample />
  },
}
