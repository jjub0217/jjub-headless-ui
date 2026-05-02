import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Bubble } from './index'

/**
 * Pretext 기반 채팅 버블 컴포넌트.
 *
 * CSS `width: fit-content`가 만드는 데드 스페이스 (가장 긴 줄에 폭이 맞춰져서 짧은 줄 옆에 빈 공간이 남는 현상)를
 * 없애기 위해 Pretext의 산수 계산으로 "같은 줄 수를 유지하는 가장 좁은 너비"를 찾아 적용.
 *
 * - canvas measureText로 글자 폭 캐싱 (DOM 측정 없음)
 * - 이진 탐색 + walkLineRanges로 tightWidth 계산
 * - word-break: keep-all로 한글을 단어 단위로만 줄바꿈
 */
const meta = {
  title: 'Components/Bubble',
  component: Bubble,
  decorators: [
    (Story, ctx) => (
      <div
        style={{
          maxWidth: ctx.parameters?.['fullWidth'] ? '1200px' : '420px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Pretext 기반 채팅 버블. fit-content와 달리 짧은 줄 옆 빈 공간이 없는 tight한 버블.',
      },
    },
  },
} satisfies Meta<typeof Bubble>

export default meta

const bubbleBaseStyle = {
  padding: '8px 12px',
  borderRadius: '16px',
  font: '15px / 20px "Helvetica Neue", Helvetica, Arial, sans-serif',
  marginBottom: '8px',
  color: 'white',
}

const recvStyle = {
  ...bubbleBaseStyle,
  background: '#22c55e',
  borderRadius: '16px 16px 16px 4px',
}

const sentStyle = {
  ...bubbleBaseStyle,
  background: '#6b7280',
  borderRadius: '16px 16px 4px 16px',
  alignSelf: 'flex-end',
}

/**
 * 기본 — 단일 버블 (maxWidth 300px 적용 + Pretext 최적화).
 *
 * maxWidth를 주면 Pretext가 줄별 폭을 산수 계산해 가장 좁은 폭(tightWidth)으로 좁힘.
 * maxWidth를 미지정하면 fit-content로 자연 폭만 적용 (Pretext 최적화 없음).
 */
export const Default: StoryObj<typeof Bubble> = {
  render: () => (
    <Bubble
      text="3시쯤 어떨까요? 그 전에 점심도 같이 먹으면 좋을 것 같아요. 근처에 맛있는 파스타 집이 있거든요."
      maxWidth={300}
      style={recvStyle}
    />
  ),
}

/**
 * 비교 — CSS fit-content vs Pretext.
 *
 * 슬라이더로 maxWidth를 조정하면서 두 방식의 시각 차이를 실시간 비교.
 * - CSS fit-content (좌): 가장 긴 줄에 폭을 맞춤 → 짧은 줄 옆에 빈 공간
 * - Pretext (우): 줄별 폭을 산수 계산해 tightWidth 적용 → 빈 공간 없음
 */
export const CompareFitContentVsPretext: StoryObj<typeof Bubble> = {
  name: 'fit-content vs Pretext (비교)',
  parameters: { fullWidth: true },
  render: () => {
    const [maxWidth, setMaxWidth] = useState(300)

    const messages = [
      { text: '안녕하세요! 오늘 날씨가 정말 좋네요.', sent: false },
      {
        text: '내일 같이 카페 가실래요? 새로 생긴 곳이 있는데 분위기가 정말 좋다고 해요.',
        sent: true,
      },
      {
        text: '주소는 서울특별시 강남구 테헤란로 123번길 45 카페드림 2층입니다.',
        sent: false,
      },
      { text: '좋아요! 몇 시에 만날까요?', sent: true },
      {
        text: '3시쯤 어떨까요? 그 전에 점심도 같이 먹으면 좋을 것 같아요. 근처에 맛있는 파스타 집이 있거든요.',
        sent: false,
      },
      { text: '네 알겠습니다!', sent: true },
      {
        text: '혹시 주차 가능한 곳인가요? 차를 가지고 갈까 고민 중이에요.',
        sent: false,
      },
    ]

    const chatContainerStyle = {
      display: 'flex',
      flexDirection: 'column' as const,
      padding: 12,
      background: '#1c1c1e',
      borderRadius: 14,
    }

    const cssRecvStyle = { ...recvStyle, width: 'fit-content' }
    const cssSentStyle = { ...sentStyle, width: 'fit-content' }

    return (
      <div>
        <div
          style={{
            marginBottom: 16,
            padding: '12px 16px',
            background: '#f9fafb',
            borderRadius: 8,
          }}
        >
          <label
            style={{
              display: 'block',
              fontSize: 14,
              fontWeight: 'bold',
              marginBottom: 8,
            }}
          >
            최대 너비:{' '}
            <span style={{ fontFamily: 'monospace', color: '#3b82f6' }}>
              {maxWidth}
            </span>
            px
          </label>
          <input
            type="range"
            min="150"
            max="500"
            value={maxWidth}
            onChange={(e) => setMaxWidth(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ display: 'flex', gap: 24 }}>
          <div style={{ flex: 1 }}>
            <h4
              style={{
                margin: '0 0 12px',
                textAlign: 'center',
                padding: 8,
                borderRadius: 6,
                background: '#fef2f2',
                color: '#991b1b',
                fontSize: 14,
              }}
            >
              CSS fit-content
            </h4>
            <div style={chatContainerStyle}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    ...(msg.sent ? cssSentStyle : cssRecvStyle),
                    maxWidth: `${maxWidth}px`,
                  }}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <h4
              style={{
                margin: '0 0 12px',
                textAlign: 'center',
                padding: 8,
                borderRadius: 6,
                background: '#f0fdf4',
                color: '#166534',
                fontSize: 14,
              }}
            >
              Pretext tightWidth
            </h4>
            <div style={chatContainerStyle}>
              {messages.map((msg, i) => (
                <Bubble
                  key={i}
                  text={msg.text}
                  maxWidth={maxWidth}
                  style={msg.sent ? sentStyle : recvStyle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
}
