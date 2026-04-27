import type { Meta, StoryObj } from '@storybook/react'
import { Toolbar } from './index'
import { useState } from 'react'

/**
 * Toolbar 컴포넌트 구조:
 *
 * Toolbar.Root      — role="toolbar", 화살표 키 네비게이션 담당
 * Toolbar.Button    — 개별 도구 버튼
 * Toolbar.Separator — 구분선 (role="separator")
 * Toolbar.ToggleGroup — 토글 버튼 그룹 (role="group")
 * Toolbar.ToggleItem  — 그룹 내 개별 토글 (aria-pressed)
 *
 * 키보드 테스트:
 * - Tab: 툴바로 포커스 진입/탈출
 * - ← → (수평) 또는 ↑ ↓ (수직): 아이템 간 이동
 * - Home/End: 첫/마지막 아이템으로 이동
 */

const meta = {
  title: 'Components/Toolbar',
  decorators: [
    (Story) => (
      <>
        <style>{`
          [role="toolbar"] {
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 4px;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            width: fit-content;
          }
          [role="toolbar"][data-orientation="vertical"] {
            flex-direction: column;
            align-items: stretch;
          }
          [role="toolbar"] button {
            padding: 6px 12px;
            border: 1px solid transparent;
            border-radius: 4px;
            background: none;
            cursor: pointer;
            font-size: 14px;
            line-height: 1;
          }
          [role="toolbar"] button:hover:not([disabled]) {
            background-color: #f3f4f6;
          }
          [role="toolbar"] button:focus-visible {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
          }
          [role="toolbar"] button[data-state="on"] {
            background-color: #dbeafe;
            border-color: #3b82f6;
            color: #1d4ed8;
            font-weight: 600;
          }
          [role="toolbar"] button[data-state="off"] {
            color: #374151;
          }
          [role="toolbar"] button[disabled] {
            opacity: 0.4;
            cursor: not-allowed;
          }
          [role="separator"][data-orientation="vertical"] {
            width: 1px;
            height: 24px;
            background-color: #d1d5db;
            margin: 0 4px;
          }
          [role="separator"][data-orientation="horizontal"] {
            height: 1px;
            width: 100%;
            background-color: #d1d5db;
            margin: 4px 0;
          }
          [role="group"] {
            display: flex;
            gap: 2px;
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
          'Headless Toolbar 컴포넌트. WAI-ARIA Toolbar 패턴을 준수하며, 화살표 키 네비게이션과 토글 그룹을 지원합니다. 스타일은 포함되어 있지 않으며, className 또는 data-state 속성으로 자유롭게 커스터마이징할 수 있습니다.',
      },
    },
  },
} satisfies Meta

export default meta

/**
 * 스토리 1: Basic Toolbar
 *
 * 기본 툴바 사용법.
 * 버튼과 구분선으로 구성된 가장 단순한 형태.
 *
 * 키보드 테스트:
 * - Tab으로 툴바 진입 → ← → 화살표로 버튼 이동
 */
export const Default: StoryObj = {
  name: 'Basic Toolbar',
  render: () => (
    <Toolbar.Root aria-label="기본 도구 모음">
      <Toolbar.Button>새로 만들기</Toolbar.Button>
      <Toolbar.Button>열기</Toolbar.Button>
      <Toolbar.Button>저장</Toolbar.Button>
      <Toolbar.Separator />
      <Toolbar.Button>실행 취소</Toolbar.Button>
      <Toolbar.Button>다시 실행</Toolbar.Button>
      <Toolbar.Separator />
      <Toolbar.Button disabled>인쇄</Toolbar.Button>
    </Toolbar.Root>
  ),
}

/**
 * 스토리 2: Text Editor Toolbar
 *
 * 텍스트 에디터 스타일 툴바.
 * 굵게/기울임/코드 토글 버튼을 포함한 실제 사용 사례.
 *
 * ToggleGroup 내부에서 하나의 서식만 선택 가능 (단일 선택).
 * aria-pressed로 스크린 리더에 선택 상태를 전달합니다.
 */
export const TextEditorToolbar: StoryObj = {
  name: 'Text Editor Toolbar',
  render: () => {
    const TextEditorExample = () => {
      const [alignment, setAlignment] = useState('left')

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Toolbar.Root aria-label="텍스트 서식 도구 모음">
            {/* 텍스트 서식 토글 그룹 */}
            <Toolbar.ToggleGroup aria-label="텍스트 서식">
              <Toolbar.ToggleItem value="bold" aria-label="굵게">
                B
              </Toolbar.ToggleItem>
              <Toolbar.ToggleItem value="italic" aria-label="기울임">
                I
              </Toolbar.ToggleItem>
              <Toolbar.ToggleItem value="code" aria-label="코드">
                {'</>'}
              </Toolbar.ToggleItem>
            </Toolbar.ToggleGroup>

            <Toolbar.Separator />

            {/* 정렬 토글 그룹 (외부 상태 제어) */}
            <Toolbar.ToggleGroup
              aria-label="텍스트 정렬"
              value={alignment}
              onValueChange={(v) => { if (v) setAlignment(v) }}
            >
              <Toolbar.ToggleItem value="left" aria-label="왼쪽 정렬">
                ≡
              </Toolbar.ToggleItem>
              <Toolbar.ToggleItem value="center" aria-label="가운데 정렬">
                ≡
              </Toolbar.ToggleItem>
              <Toolbar.ToggleItem value="right" aria-label="오른쪽 정렬">
                ≡
              </Toolbar.ToggleItem>
            </Toolbar.ToggleGroup>

            <Toolbar.Separator />

            <Toolbar.Button aria-label="링크 삽입">🔗</Toolbar.Button>
            <Toolbar.Button aria-label="이미지 삽입">🖼</Toolbar.Button>
          </Toolbar.Root>

          <p style={{ fontSize: '13px', color: '#6b7280' }}>
            현재 정렬: <strong>{alignment === 'left' ? '왼쪽' : alignment === 'center' ? '가운데' : '오른쪽'}</strong>
          </p>
        </div>
      )
    }

    return <TextEditorExample />
  },
}

/**
 * 스토리 3: Vertical Toolbar
 *
 * orientation="vertical"로 세로 방향 툴바.
 * 화살표 키가 ↑↓로 바뀝니다.
 * 구분선도 자동으로 가로 방향으로 렌더링됩니다.
 */
export const VerticalToolbar: StoryObj = {
  name: 'Vertical Toolbar',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
      <Toolbar.Root orientation="vertical" aria-label="세로 도구 모음">
        <Toolbar.Button aria-label="확대">+</Toolbar.Button>
        <Toolbar.Button aria-label="축소">−</Toolbar.Button>
        <Toolbar.Separator />
        <Toolbar.ToggleGroup aria-label="그리기 도구">
          <Toolbar.ToggleItem value="pen" aria-label="펜">✏️</Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="eraser" aria-label="지우개">🧹</Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="select" aria-label="선택">⬚</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
        <Toolbar.Separator />
        <Toolbar.Button aria-label="저장">💾</Toolbar.Button>
      </Toolbar.Root>

      <p style={{ fontSize: '13px', color: '#6b7280' }}>
        ↑ ↓ 화살표 키로<br />
        도구 간 이동 가능
      </p>
    </div>
  ),
}
