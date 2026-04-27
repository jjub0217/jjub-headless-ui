import type { Meta, StoryObj } from '@storybook/react'
import { TagInput } from './index'
import { useState } from 'react'

/**
 * TagInput 컴포넌트 구조:
 *
 * TagInput.Root — 상태 관리 컨테이너 (controlled/uncontrolled)
 * TagInput.Input — 입력 필드, 한국어 IME 조합 처리 포함
 * TagInput.Tag — 개별 태그 (role="listitem")
 * TagInput.Remove — 태그 삭제 버튼
 *
 * 키보드 조작:
 * - Enter: 태그 추가 (IME 조합 중에는 무시)
 * - Backspace (빈 입력): 마지막 태그 삭제
 */

const meta = {
  title: 'Components/TagInput',
  decorators: [
    (Story) => (
      <>
        <style>{`
          .tag-input-root {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border: 1.5px solid #d1d5db;
            border-radius: 8px;
            min-height: 44px;
            background: white;
          }
          .tag-input-root:focus-within {
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
          }
          .tag-input-root[data-disabled] {
            background: #f9fafb;
            opacity: 0.6;
          }
          .tag {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 2px 8px;
            background: #eff6ff;
            color: #1d4ed8;
            border-radius: 9999px;
            font-size: 13px;
            font-weight: 500;
          }
          .tag-remove {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 16px;
            height: 16px;
            border: none;
            background: none;
            color: #3b82f6;
            cursor: pointer;
            border-radius: 9999px;
            font-size: 14px;
            line-height: 1;
            padding: 0;
          }
          .tag-remove:hover {
            background: #bfdbfe;
          }
          .tag-remove:focus-visible {
            outline: 2px solid #3b82f6;
            outline-offset: 1px;
          }
          .tag-input {
            flex: 1;
            min-width: 120px;
            border: none;
            outline: none;
            font-size: 14px;
            background: transparent;
          }
          .tag-input::placeholder {
            color: #9ca3af;
          }
          .tag-input[data-at-max] {
            display: none;
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
          'Headless TagInput 컴포넌트. 한국어 IME 조합을 지원하며, Enter로 태그 추가, Backspace로 마지막 태그 삭제가 가능합니다. 스타일 없이 제공되며 className 또는 data 속성으로 자유롭게 커스터마이징할 수 있습니다.',
      },
    },
  },
} satisfies Meta

export default meta

/**
 * 기본 사용법.
 *
 * - 입력창에 텍스트를 입력하고 Enter를 누르면 태그가 추가됩니다.
 * - 입력창이 비어있을 때 Backspace를 누르면 마지막 태그가 삭제됩니다.
 * - 한국어 입력 시 IME 조합 중에는 Enter가 태그로 추가되지 않습니다.
 */
export const Default: StoryObj = {
  name: 'Default',
  render: () => (
    <TagInput.Root defaultValue={['강아지', '고양이']} className="tag-input-root">
      <TagInput.Input className="tag-input" placeholder="태그 입력 후 Enter..." />
      {['강아지', '고양이'].map((tag, i) => (
        <TagInput.Tag key={tag} value={tag} index={i} className="tag">
          {tag}
          <TagInput.Remove index={i} className="tag-remove" />
        </TagInput.Tag>
      ))}
    </TagInput.Root>
  ),
}

/**
 * 동적 렌더링 (권장 패턴).
 *
 * tags 배열을 외부 state로 관리하거나 controlled 방식으로 사용하는 예시.
 * 실제 사용 시에는 이 패턴을 권장합니다.
 */
export const Dynamic: StoryObj = {
  name: 'Dynamic (Recommended)',
  render: () => {
    const DynamicExample = () => {
      const [tags, setTags] = useState<string[]>(['React', 'TypeScript'])

      return (
        <div>
          <TagInput.Root
            value={tags}
            onValueChange={setTags}
            className="tag-input-root"
          >
            {tags.map((tag, i) => (
              <TagInput.Tag key={tag} value={tag} index={i} className="tag">
                {tag}
                <TagInput.Remove index={i} className="tag-remove" />
              </TagInput.Tag>
            ))}
            <TagInput.Input className="tag-input" placeholder="태그 입력 후 Enter..." />
          </TagInput.Root>
          <p style={{ marginTop: '8px', fontSize: '13px', color: '#6b7280' }}>
            현재 태그: {tags.length > 0 ? tags.join(', ') : '없음'}
          </p>
        </div>
      )
    }
    return <DynamicExample />
  },
}

/**
 * 최대 태그 수 제한.
 *
 * maxTags prop으로 최대 태그 수를 제한합니다.
 * 최대에 도달하면 입력창이 숨겨집니다.
 */
export const MaxTags: StoryObj = {
  name: 'Max Tags Limit',
  render: () => {
    const MaxTagsExample = () => {
      const [tags, setTags] = useState<string[]>(['첫번째', '두번째'])
      const MAX = 3

      return (
        <div>
          <p style={{ marginBottom: '8px', fontSize: '14px', color: '#374151' }}>
            최대 {MAX}개까지 추가 가능합니다.
          </p>
          <TagInput.Root
            value={tags}
            onValueChange={setTags}
            maxTags={MAX}
            className="tag-input-root"
          >
            {tags.map((tag, i) => (
              <TagInput.Tag key={tag} value={tag} index={i} className="tag">
                {tag}
                <TagInput.Remove index={i} className="tag-remove" />
              </TagInput.Tag>
            ))}
            <TagInput.Input className="tag-input" placeholder="태그 입력..." />
          </TagInput.Root>
          <p style={{ marginTop: '6px', fontSize: '12px', color: '#9ca3af' }}>
            {tags.length} / {MAX}
          </p>
        </div>
      )
    }
    return <MaxTagsExample />
  },
}

/**
 * Controlled.
 *
 * value + onValueChange로 외부에서 태그를 완전히 제어하는 예시.
 * 초기화 버튼으로 태그를 리셋할 수 있습니다.
 */
export const Controlled: StoryObj = {
  name: 'Controlled',
  render: () => {
    const ControlledExample = () => {
      const [tags, setTags] = useState<string[]>(['헤드리스', 'UI'])

      return (
        <div>
          <TagInput.Root
            value={tags}
            onValueChange={setTags}
            className="tag-input-root"
          >
            {tags.map((tag, i) => (
              <TagInput.Tag key={tag} value={tag} index={i} className="tag">
                {tag}
                <TagInput.Remove index={i} className="tag-remove" />
              </TagInput.Tag>
            ))}
            <TagInput.Input className="tag-input" placeholder="태그 추가..." />
          </TagInput.Root>
          <div style={{ marginTop: '10px' }}>
            <button
              onClick={() => setTags([])}
              style={{ padding: '4px 12px', fontSize: '13px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #d1d5db' }}
            >
              전체 삭제
            </button>
          </div>
        </div>
      )
    }
    return <ControlledExample />
  },
}
