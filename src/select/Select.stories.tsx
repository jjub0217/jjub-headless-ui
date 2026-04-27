import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './index'
import { useState } from 'react'

/**
 * Select 컴포넌트의 구조:
 *
 * Select.Root — 상태 관리 (선택된 값, 열림/닫힘)
 * Select.Trigger — 드롭다운을 여는 버튼 (role="combobox")
 * Select.Value — 선택된 값 또는 placeholder 표시
 * Select.Content — 옵션 목록 (role="listbox")
 * Select.Option — 개별 옵션 (role="option")
 *
 * 자동으로 처리되는 접근성:
 * - 화살표 키로 옵션 탐색
 * - Enter/Space로 옵션 선택
 * - ESC로 닫기
 * - Home/End로 처음/마지막 옵션 이동
 * - 외부 클릭으로 닫기
 *
 * 여러 프로젝트에서 반복되던 드롭다운 선택 로직을
 * 하나로 통합한 컴포넌트입니다.
 */

const triggerStyle = {
  padding: '8px 16px',
  cursor: 'pointer',
  minWidth: '200px',
  textAlign: 'left' as const,
}

const contentStyle = {
  backgroundColor: 'white',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  padding: '4px',
  marginTop: '4px',
  minWidth: '200px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
}

const optionStyle = {
  padding: '8px 12px',
  borderRadius: '4px',
}

const meta = {
  title: 'Components/Select',
  decorators: [
    (Story) => (
      <>
        <style>{`
          [role="option"][data-state="checked"] {
            font-weight: bold;
          }
          [role="option"][data-highlighted] {
            background-color: #f3f4f6;
          }
          [role="option"]:not([data-disabled]):hover {
            background-color: #f3f4f6;
          }
          [role="option"][data-disabled] {
            opacity: 0.4;
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
          'Headless Select 컴포넌트. WAI-ARIA Listbox 패턴을 준수하며, 키보드 탐색과 스크린 리더를 지원합니다.',
      },
    },
  },
} satisfies Meta

export default meta

/**
 * 기본 사용법.
 *
 * 테스트해보세요:
 * - 버튼 클릭 → 드롭다운 열림
 * - ↑ ↓ 화살표 → 옵션 탐색 (배경색 변화)
 * - Enter/Space → 옵션 선택
 * - ESC → 드롭다운 닫기
 * - Home/End → 처음/마지막 옵션
 */
export const Default: StoryObj = {
  render: () => {
    const DefaultExample = () => {
      const [value, setValue] = useState('')
      const labels: Record<string, string> = { dog: '강아지', cat: '고양이', bird: '조류', fish: '어류', reptile: '파충류' }

      return (
        <Select.Root value={value} onValueChange={setValue}>
          <Select.Trigger style={triggerStyle}>
            <Select.Value placeholder="카테고리 선택">{labels[value] || '카테고리 선택'}</Select.Value>
          </Select.Trigger>
          <Select.Content style={contentStyle}>
            <Select.Option value="dog" style={optionStyle}>강아지</Select.Option>
            <Select.Option value="cat" style={optionStyle}>고양이</Select.Option>
            <Select.Option value="bird" style={optionStyle}>조류</Select.Option>
            <Select.Option value="fish" style={optionStyle}>어류</Select.Option>
            <Select.Option value="reptile" style={optionStyle}>파충류</Select.Option>
          </Select.Content>
        </Select.Root>
      )
    }

    return <DefaultExample />
  },
}

/**
 * 비활성화된 옵션이 포함된 Select.
 *
 * disabled 옵션은 키보드 탐색에서 건너뜁니다.
 */
export const WithDisabledOption: StoryObj = {
  name: 'Disabled Option',
  render: () => {
    const DisabledExample = () => {
      const [value, setValue] = useState('')
      const labels: Record<string, string> = { seoul: '서울', busan: '부산', jeju: '제주 (품절)', daegu: '대구' }

      return (
        <Select.Root value={value} onValueChange={setValue}>
          <Select.Trigger style={triggerStyle}>
            <Select.Value placeholder="지역 선택">{labels[value] || '지역 선택'}</Select.Value>
          </Select.Trigger>
          <Select.Content style={contentStyle}>
            <Select.Option value="seoul" style={optionStyle}>서울</Select.Option>
            <Select.Option value="busan" style={optionStyle}>부산</Select.Option>
            <Select.Option value="jeju" style={optionStyle} disabled>제주 (품절)</Select.Option>
            <Select.Option value="daegu" style={optionStyle}>대구</Select.Option>
          </Select.Content>
        </Select.Root>
      )
    }

    return <DisabledExample />
  },
}

/**
 * Controlled Select.
 *
 * 외부에서 값을 제어하는 예시.
 * "초기화" 버튼으로 선택을 리셋할 수 있습니다.
 */
export const Controlled: StoryObj = {
  render: () => {
    const ControlledExample = () => {
      const [value, setValue] = useState('cat')
      const labels: Record<string, string> = { dog: '강아지', cat: '고양이', bird: '조류' }

      return (
        <div>
          <p style={{ marginBottom: '8px' }}>선택된 값: <strong>{labels[value] || '없음'}</strong></p>
          <button
            onClick={() => setValue('')}
            style={{ marginBottom: '16px', padding: '4px 8px', cursor: 'pointer' }}
          >
            초기화
          </button>
          <div>
            <Select.Root value={value} onValueChange={setValue}>
              <Select.Trigger style={triggerStyle}>
                <Select.Value placeholder="선택하세요">{labels[value] || '선택하세요'}</Select.Value>
              </Select.Trigger>
              <Select.Content style={contentStyle}>
                <Select.Option value="dog" style={optionStyle}>강아지</Select.Option>
                <Select.Option value="cat" style={optionStyle}>고양이</Select.Option>
                <Select.Option value="bird" style={optionStyle}>조류</Select.Option>
              </Select.Content>
            </Select.Root>
          </div>
        </div>
      )
    }

    return <ControlledExample />
  },
}
