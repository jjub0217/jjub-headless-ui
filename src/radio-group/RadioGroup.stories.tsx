import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup } from './index'
import { useState } from 'react'

/**
 * RadioGroup 컴포넌트의 구조:
 *
 * RadioGroup.Root — role="radiogroup", 상태 관리 (하나만 선택)
 * RadioGroup.Option — role="radio", aria-checked
 *
 * 자동으로 처리되는 접근성:
 * - 화살표 키로 옵션 이동 + 자동 선택
 * - Home/End로 처음/마지막 옵션
 * - 하나만 선택 가능 (라디오 패턴)
 * - tabIndex 관리 (선택된 옵션만 Tab으로 접근)
 *
 * 그룹 내 단일 선택이 필요한 곳에서 사용합니다.
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
  borderRadius: '50%',
  border: '2px solid #d1d5db',
  flexShrink: 0,
}

const meta = {
  title: 'Components/RadioGroup',
  decorators: [
    (Story) => (
      <>
        <style>{`
          [role="radio"][data-state="checked"] {
            font-weight: bold;
          }
          [role="radio"][data-state="checked"] span[aria-hidden] {
            border-color: #3b82f6;
            background: radial-gradient(circle, #3b82f6 40%, transparent 41%);
          }
          [role="radio"][data-state="unchecked"] {
            color: #6b7280;
          }
          [role="radio"]:not([data-disabled]):hover {
            background-color: #f3f4f6;
          }
          [role="radio"][data-disabled] {
            opacity: 0.4;
            cursor: not-allowed;
          }
          [role="radio"]:focus-visible {
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
          'Headless RadioGroup 컴포넌트. WAI-ARIA Radio Group 패턴을 준수하며, 그룹 내 단일 선택을 지원합니다.',
      },
    },
  },
} satisfies Meta

export default meta

/**
 * 기본 사용법.
 *
 * 테스트해보세요:
 * - 클릭 → 옵션 선택
 * - ↑ ↓ 화살표 → 옵션 이동 + 자동 선택
 * - Home/End → 처음/마지막 옵션
 * - 하나만 선택 가능
 */
export const Default: StoryObj = {
  render: () => (
    <RadioGroup.Root defaultValue="medium">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <RadioGroup.Option value="small" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />작은 사이즈</RadioGroup.Option>
        <RadioGroup.Option value="medium" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />중간 사이즈</RadioGroup.Option>
        <RadioGroup.Option value="large" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />큰 사이즈</RadioGroup.Option>
      </div>
    </RadioGroup.Root>
  ),
}

/**
 * 가로 방향.
 *
 * orientation="horizontal"로 가로 배치.
 * 화살표 키가 ← →로 바뀝니다.
 */
export const Horizontal: StoryObj = {
  render: () => (
    <RadioGroup.Root defaultValue="all" orientation="horizontal">
      <div style={{ display: 'flex', gap: '4px' }}>
        <RadioGroup.Option value="all" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />전체</RadioGroup.Option>
        <RadioGroup.Option value="new" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />새 항목</RadioGroup.Option>
        <RadioGroup.Option value="used" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />중고</RadioGroup.Option>
        <RadioGroup.Option value="refurbished" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />리퍼</RadioGroup.Option>
      </div>
    </RadioGroup.Root>
  ),
}

/**
 * 비활성화된 옵션.
 */
export const WithDisabledOption: StoryObj = {
  name: 'Disabled Option',
  render: () => (
    <RadioGroup.Root defaultValue="card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <RadioGroup.Option value="card" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />카드 결제</RadioGroup.Option>
        <RadioGroup.Option value="bank" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />계좌이체</RadioGroup.Option>
        <RadioGroup.Option value="phone" style={optionStyle} disabled><RadioGroup.Indicator style={indicatorStyle} />휴대폰 결제 (점검 중)</RadioGroup.Option>
      </div>
    </RadioGroup.Root>
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
      const [selected, setSelected] = useState('light')
      const labels: Record<string, string> = { light: '라이트', dark: '다크', system: '시스템' }

      return (
        <div>
          <p style={{ marginBottom: '8px' }}>테마: <strong>{labels[selected]}</strong></p>
          <RadioGroup.Root value={selected} onValueChange={setSelected} orientation="horizontal">
            <div style={{ display: 'flex', gap: '4px' }}>
              <RadioGroup.Option value="light" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />라이트</RadioGroup.Option>
              <RadioGroup.Option value="dark" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />다크</RadioGroup.Option>
              <RadioGroup.Option value="system" style={optionStyle}><RadioGroup.Indicator style={indicatorStyle} />시스템</RadioGroup.Option>
            </div>
          </RadioGroup.Root>
        </div>
      )
    }

    return <ControlledExample />
  },
}
