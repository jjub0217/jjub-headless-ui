import type { Meta, StoryObj } from '@storybook/react'
import { AlertDialog } from './index'

/**
 * AlertDialog 컴포넌트의 구조:
 *
 * Dialog와 거의 동일하지만 두 가지가 다릅니다:
 * 1. ESC 키로 닫히지 않음 — 사용자가 반드시 확인 또는 취소를 선택해야 함
 * 2. 배경 클릭으로 닫히지 않음 — 실수로 닫히는 것을 방지
 *
 * Dialog.Close 대신 두 가지 닫기 버튼이 있습니다:
 * - AlertDialog.Action — 확인 (삭제, 탈퇴 등 위험한 행동 실행)
 * - AlertDialog.Cancel — 취소 (아무 일도 일어나지 않음)
 *
 * role="alertdialog"를 사용하여 스크린 리더에게
 * "이것은 중요한 결정이 필요한 대화상자"임을 알립니다.
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
  maxWidth: '400px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
}

const meta = {
  title: 'Components/AlertDialog',
  parameters: {
    docs: {
      description: {
        component:
          'Headless Alert Dialog 컴포넌트. 삭제 확인, 회원 탈퇴 등 사용자의 명시적 확인이 필요한 상황에서 사용합니다. ESC 키와 배경 클릭으로 닫히지 않습니다.',
      },
    },
  },
} satisfies Meta

export default meta

/**
 * 삭제 확인 다이얼로그.
 *
 * 삭제 확인 다이얼로그의 전형적인 패턴입니다.
 *
 * 테스트해보세요:
 * - ESC 키: 닫히지 않는 것을 확인
 * - 배경 클릭: 닫히지 않는 것을 확인
 * - "취소" 또는 "삭제" 버튼으로만 닫힘
 */
export const DeleteConfirm: StoryObj = {
  name: 'Delete Confirm',
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger style={{ padding: '8px 16px', cursor: 'pointer' }}>
        상품 삭제
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay style={overlayStyle}>
          <AlertDialog.Content style={contentStyle}>
            <AlertDialog.Title style={{ margin: '0 0 8px', fontSize: '18px' }}>
              상품을 삭제하시겠습니까?
            </AlertDialog.Title>
            <AlertDialog.Description style={{ margin: '0 0 16px', color: '#6b7280' }}>
              삭제된 상품은 복구할 수 없습니다.
            </AlertDialog.Description>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
              <AlertDialog.Cancel style={{ padding: '8px 16px', cursor: 'pointer' }}>
                취소
              </AlertDialog.Cancel>
              <AlertDialog.Action style={{ padding: '8px 16px', cursor: 'pointer' }}>
                삭제
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Overlay>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ),
}

/**
 * 회원 탈퇴 확인 다이얼로그.
 *
 * 회원 탈퇴 확인 다이얼로그의 전형적인 패턴입니다.
 */
export const WithdrawConfirm: StoryObj = {
  name: 'Withdraw Confirm',
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger style={{ padding: '8px 16px', cursor: 'pointer' }}>
        회원 탈퇴
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay style={overlayStyle}>
          <AlertDialog.Content style={contentStyle}>
            <AlertDialog.Title style={{ margin: '0 0 8px', fontSize: '18px' }}>
              정말 탈퇴하시겠습니까?
            </AlertDialog.Title>
            <AlertDialog.Description style={{ margin: '0 0 16px', color: '#6b7280' }}>
              탈퇴하면 모든 데이터가 삭제되며 복구할 수 없습니다.
            </AlertDialog.Description>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
              <AlertDialog.Cancel style={{ padding: '8px 16px', cursor: 'pointer' }}>
                취소
              </AlertDialog.Cancel>
              <AlertDialog.Action style={{ padding: '8px 16px', cursor: 'pointer' }}>
                탈퇴하기
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Overlay>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ),
}
