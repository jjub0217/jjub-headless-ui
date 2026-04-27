import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './index'
import { useState, useEffect } from 'react'

/**
 * Progress 컴포넌트 구조:
 *
 * Progress.Root — role="progressbar", aria-valuenow/min/max 자동 설정
 * Progress.Indicator — 진행 상태를 시각적으로 표현하는 내부 바
 *
 * data-state 값:
 * - "loading": 진행 중 (0 < value < max)
 * - "complete": 완료 (value === max)
 * - "indeterminate": 값 미정 (value === null)
 *
 * 스타일링: data-percentage 또는 CSS 변수로 너비 조절
 */

const meta = {
  title: 'Components/Progress',
  decorators: [
    (Story) => (
      <>
        <style>{`
          .progress-track {
            width: 100%;
            height: 8px;
            background: #e5e7eb;
            border-radius: 9999px;
            overflow: hidden;
          }
          .progress-track[data-state="complete"] .progress-fill {
            background: #22c55e;
          }
          .progress-track[data-state="loading"] .progress-fill {
            background: #3b82f6;
          }
          .progress-track[data-state="indeterminate"] .progress-fill {
            background: #3b82f6;
            width: 40% !important;
            animation: indeterminate 1.5s ease-in-out infinite;
          }
          @keyframes indeterminate {
            0%   { transform: translateX(-150%); }
            100% { transform: translateX(350%); }
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
          'Headless Progress 컴포넌트. WAI-ARIA progressbar 패턴을 준수하며, 스크린 리더에 진행률을 자동으로 전달합니다. data-state와 data-percentage 속성으로 스타일을 자유롭게 적용할 수 있습니다.',
      },
    },
  },
} satisfies Meta

export default meta

/**
 * 기본 (50%).
 *
 * value=50이면 50% 진행 상태.
 * Indicator의 너비를 data-percentage로 제어합니다.
 */
export const Default: StoryObj = {
  name: 'Default (50%)',
  render: () => (
    <div style={{ width: '320px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px', color: '#374151' }}>
        <span>파일 업로드 중...</span>
        <span>50%</span>
      </div>
      <Progress.Root value={50} className="progress-track">
        <Progress.Indicator
          className="progress-fill"
          style={{ height: '100%', width: '50%', borderRadius: '9999px', transition: 'width 0.3s ease' }}
        />
      </Progress.Root>
    </div>
  ),
}

/**
 * 완료 (100%).
 *
 * data-state="complete"로 완료 스타일(초록)이 적용됩니다.
 */
export const Full: StoryObj = {
  name: 'Full (100%)',
  render: () => (
    <div style={{ width: '320px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px', color: '#374151' }}>
        <span>업로드 완료!</span>
        <span>100%</span>
      </div>
      <Progress.Root value={100} className="progress-track">
        <Progress.Indicator
          className="progress-fill"
          style={{ height: '100%', width: '100%', borderRadius: '9999px', transition: 'width 0.3s ease' }}
        />
      </Progress.Root>
    </div>
  ),
}

/**
 * 애니메이션 (자동 증가).
 *
 * useEffect로 value를 자동으로 증가시켜 실제 로딩 상황을 시뮬레이션합니다.
 */
export const Animated: StoryObj = {
  name: 'Animated',
  render: () => {
    const AnimatedExample = () => {
      const [value, setValue] = useState(0)

      useEffect(() => {
        if (value >= 100) return
        const timer = setTimeout(() => setValue((v) => Math.min(v + 5, 100)), 200)
        return () => clearTimeout(timer)
      }, [value])

      return (
        <div style={{ width: '320px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px', color: '#374151' }}>
            <span>{value < 100 ? '처리 중...' : '완료!'}</span>
            <span>{value}%</span>
          </div>
          <Progress.Root value={value} className="progress-track">
            <Progress.Indicator
              className="progress-fill"
              style={{ height: '100%', width: `${value}%`, borderRadius: '9999px', transition: 'width 0.2s ease' }}
            />
          </Progress.Root>
          {value >= 100 && (
            <button
              onClick={() => setValue(0)}
              style={{ marginTop: '10px', padding: '4px 12px', fontSize: '13px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #d1d5db' }}
            >
              다시 시작
            </button>
          )}
        </div>
      )
    }
    return <AnimatedExample />
  },
}

/**
 * Indeterminate (불확정 상태).
 *
 * value를 null로 전달하면 indeterminate 상태가 됩니다.
 * CSS 애니메이션으로 이동하는 바를 구현합니다.
 */
export const Indeterminate: StoryObj = {
  name: 'Indeterminate',
  render: () => (
    <div style={{ width: '320px' }}>
      <div style={{ marginBottom: '6px', fontSize: '13px', color: '#374151' }}>
        <span>데이터 로딩 중...</span>
      </div>
      <Progress.Root value={null} className="progress-track">
        <Progress.Indicator
          className="progress-fill"
          style={{ height: '100%', borderRadius: '9999px' }}
        />
      </Progress.Root>
    </div>
  ),
}

/**
 * Controlled.
 *
 * 슬라이더로 진행률을 직접 제어하는 예시.
 */
export const Controlled: StoryObj = {
  name: 'Controlled',
  render: () => {
    const ControlledExample = () => {
      const [value, setValue] = useState(30)

      return (
        <div style={{ width: '320px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px', color: '#374151' }}>
            <span>진행률</span>
            <span>{value}%</span>
          </div>
          <Progress.Root value={value} className="progress-track">
            <Progress.Indicator
              className="progress-fill"
              style={{ height: '100%', width: `${value}%`, borderRadius: '9999px', transition: 'width 0.15s ease' }}
            />
          </Progress.Root>
          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            style={{ width: '100%', marginTop: '12px' }}
            aria-label="진행률 조절"
          />
        </div>
      )
    }
    return <ControlledExample />
  },
}
