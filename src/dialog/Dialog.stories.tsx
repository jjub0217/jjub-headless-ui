import type { Meta, StoryObj } from '@storybook/react'
import { Dialog } from './index'
import { useState } from 'react'

/**
 * Dialog 컴포넌트의 구조:
 *
 * Dialog.Root — 상태 관리 (열림/닫힘)
 * Dialog.Trigger — 다이얼로그를 여는 버튼
 * Dialog.Portal — document.body에 렌더링 (z-index 충돌 방지)
 * Dialog.Overlay — 뒤쪽 어두운 배경 (클릭하면 닫힘)
 * Dialog.Content — 다이얼로그 본체 (role="dialog", 포커스 트랩)
 * Dialog.Title — 제목 (aria-labelledby 자동 연결)
 * Dialog.Description — 설명 (aria-describedby 자동 연결)
 * Dialog.Close — 닫기 버튼
 *
 * 자동으로 처리되는 접근성:
 * - 열릴 때 포커스가 다이얼로그 안으로 이동
 * - Tab 키가 다이얼로그 안에서만 순환 (포커스 트랩)
 * - ESC 키로 닫기
 * - 닫힐 때 트리거 버튼으로 포커스 복원
 * - body 스크롤 잠금
 */

const overlayStyle = {
  position: 'fixed' as const,
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
}

const contentStyle = {
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '24px',
  minWidth: '320px',
  maxWidth: '480px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
}

const meta = {
  title: 'Components/Dialog',
  parameters: {
    docs: {
      description: {
        component:
          'Headless Dialog 컴포넌트. WAI-ARIA Dialog (Modal) 패턴을 준수하며, 포커스 트랩, ESC 닫기, 포커스 복원을 자동으로 처리합니다.',
      },
    },
  },
} satisfies Meta

export default meta

/**
 * 기본 사용법.
 *
 * "다이얼로그 열기" 버튼을 클릭하면 다이얼로그가 열립니다.
 *
 * 테스트해보세요:
 * - Tab 키: 포커스가 다이얼로그 안에서만 순환하는지
 * - ESC 키: 다이얼로그가 닫히는지
 * - 닫힌 후: 포커스가 "다이얼로그 열기" 버튼으로 돌아오는지
 * - 배경 클릭: 다이얼로그가 닫히는지
 */
export const Default: StoryObj = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger>다이얼로그 열기</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay style={overlayStyle}>
        <Dialog.Content style={contentStyle}>
          <Dialog.Title style={{ margin: '0 0 8px', fontSize: '18px' }}>
            기본 다이얼로그
          </Dialog.Title>
          <Dialog.Description style={{ margin: '0 0 16px', color: '#6b7280' }}>
            이것은 기본 다이얼로그입니다. ESC 키 또는 배경을 클릭하면 닫힙니다.
          </Dialog.Description>
          <Dialog.Close style={{ padding: '8px 16px', cursor: 'pointer' }}>
            닫기
          </Dialog.Close>
        </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  ),
}

/**
 * 폼이 포함된 다이얼로그.
 *
 * Tab 키로 입력 필드와 버튼 사이를 이동해보세요.
 * 포커스가 다이얼로그 밖으로 나가지 않는 것을 확인할 수 있습니다.
 */
export const WithForm: StoryObj = {
  name: 'Form Dialog',
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger style={{ padding: '8px 16px', cursor: 'pointer' }}>
        프로필 수정
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay style={overlayStyle}>
        <Dialog.Content style={contentStyle}>
          <Dialog.Title style={{ margin: '0 0 8px', fontSize: '18px' }}>
            프로필 수정
          </Dialog.Title>
          <Dialog.Description style={{ margin: '0 0 16px', color: '#6b7280' }}>
            닉네임과 자기소개를 수정할 수 있습니다.
          </Dialog.Description>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>닉네임</span>
              <input
                type="text"
                defaultValue="jjub0217"
                style={{ padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px' }}
              />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>자기소개</span>
              <textarea
                defaultValue="안녕하세요!"
                rows={3}
                style={{ padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px', resize: 'vertical' }}
              />
            </label>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '16px' }}>
            <Dialog.Close style={{ padding: '8px 16px', cursor: 'pointer' }}>
              취소
            </Dialog.Close>
            <Dialog.Close style={{ padding: '8px 16px', cursor: 'pointer' }}>
              저장
            </Dialog.Close>
          </div>
        </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  ),
}

/**
 * 외부에서 열림/닫힘 상태를 제어하는 예시.
 *
 * Tabs의 Controlled와 같은 개념입니다.
 * open + onOpenChange로 상태를 직접 관리합니다.
 */
export const Controlled: StoryObj = {
  render: () => {
    const ControlledExample = () => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <div>
          <p style={{ marginBottom: '8px' }}>상태: {isOpen ? '열림' : '닫힘'}</p>
          <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger style={{ padding: '8px 16px', cursor: 'pointer' }}>
              다이얼로그 열기
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay style={overlayStyle}>
              <Dialog.Content style={contentStyle}>
                <Dialog.Title style={{ margin: '0 0 8px', fontSize: '18px' }}>
                  제어 모드
                </Dialog.Title>
                <Dialog.Description style={{ margin: '0 0 16px', color: '#6b7280' }}>
                  open과 onOpenChange로 외부에서 상태를 제어합니다.
                </Dialog.Description>
                <Dialog.Close style={{ padding: '8px 16px', cursor: 'pointer' }}>
                  닫기
                </Dialog.Close>
              </Dialog.Content>
              </Dialog.Overlay>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      )
    }

    return <ControlledExample />
  },
}
