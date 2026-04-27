import type { Meta, StoryObj } from '@storybook/react'
import { Menu } from './index'

/**
 * Menu 컴포넌트의 구조:
 *
 * Menu.Root — 상태 관리
 * Menu.Trigger — 메뉴를 여는 버튼 (aria-haspopup="menu", aria-expanded)
 * Menu.Content — 메뉴 목록 (role="menu", 포털로 렌더링)
 * Menu.Item — 개별 메뉴 항목 (role="menuitem", 클릭 시 메뉴 닫힘)
 * Menu.Separator — 구분선 (role="separator")
 *
 * 자동으로 처리되는 접근성:
 * - 방향키(↑↓)로 항목 탐색
 * - Enter / Space로 실행
 * - ESC 키로 닫기 + 트리거로 포커스 복원
 * - 외부 클릭으로 닫기
 * - 항목 클릭 후 자동 닫기
 * - 비활성화 항목은 탐색에서 제외
 */

const meta = {
  title: 'Components/Menu',
  parameters: {
    docs: {
      description: {
        component:
          'Headless Menu 컴포넌트. WAI-ARIA Menu Button 패턴을 준수하며, 방향키 탐색, ESC 닫기, 포커스 관리를 자동으로 처리합니다.',
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <style>{`
          .menu-trigger-btn {
            padding: 8px 16px;
            border-radius: 6px;
            border: 1px solid #d1d5db;
            background: white;
            cursor: pointer;
            font-size: 14px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
          }
          .menu-trigger-btn[data-state="open"] {
            background: #f3f4f6;
            border-color: #9ca3af;
          }
          .menu-trigger-btn:hover { background: #f3f4f6; }

          [role="menu"] {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 4px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.12);
            width: 200px;
            margin-top: 8px;
            z-index: 100;
            outline: none;
          }

          [role="menuitem"] {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 14px;
            color: #111827;
            cursor: pointer;
            outline: none;
            user-select: none;
          }
          [role="menuitem"]:hover,
          [role="menuitem"]:focus {
            background: #f3f4f6;
          }
          [role="menuitem"][aria-disabled="true"] {
            color: #9ca3af;
            cursor: not-allowed;
            pointer-events: none;
          }
          [role="menuitem"][data-variant="danger"] {
            color: #dc2626;
          }
          [role="menuitem"][data-variant="danger"]:hover,
          [role="menuitem"][data-variant="danger"]:focus {
            background: #fef2f2;
          }

          [role="separator"] {
            height: 1px;
            background: #e5e7eb;
            margin: 4px 0;
          }
        `}</style>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <Story />
        </div>
      </>
    ),
  ],
} satisfies Meta

export default meta

// ─── Basic Menu ───────────────────────────────────────────
export const BasicMenu: StoryObj = {
  name: 'Basic Menu',
  render: () => (
    <Menu.Root>
      <Menu.Trigger className="menu-trigger-btn">
        메뉴 ▾
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item>👤 프로필 보기</Menu.Item>
        <Menu.Item>⚙️ 설정</Menu.Item>
        <Menu.Item>❓ 도움말</Menu.Item>
      </Menu.Content>
    </Menu.Root>
  ),
}

// ─── With Separator ───────────────────────────────────────
export const WithSeparator: StoryObj = {
  name: 'With Separator',
  render: () => (
    <Menu.Root>
      <Menu.Trigger className="menu-trigger-btn">
        옵션 ▾
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item>✏️ 편집</Menu.Item>
        <Menu.Item>📋 복사</Menu.Item>
        <Menu.Item>🔗 공유</Menu.Item>
        <Menu.Separator />
        <Menu.Item data-variant="danger">
          🗑️ 삭제
        </Menu.Item>
      </Menu.Content>
    </Menu.Root>
  ),
}

// ─── With Disabled Items ──────────────────────────────────
export const WithDisabledItems: StoryObj = {
  name: 'With Disabled Items',
  render: () => (
    <Menu.Root>
      <Menu.Trigger className="menu-trigger-btn">
        작업 ▾
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item>⬇️ 다운로드</Menu.Item>
        <Menu.Item disabled>🔒 편집 (권한 없음)</Menu.Item>
        <Menu.Item disabled>📤 내보내기 (준비 중)</Menu.Item>
        <Menu.Separator />
        <Menu.Item data-variant="danger">
          🗑️ 삭제
        </Menu.Item>
      </Menu.Content>
    </Menu.Root>
  ),
}

// ─── Context Menu Style ───────────────────────────────────
export const ContextMenuStyle: StoryObj = {
  name: 'Context Menu Style',
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Menu.Root>
        <Menu.Trigger className="menu-trigger-btn">파일 ▾</Menu.Trigger>
        <Menu.Content>
          <Menu.Item>새 파일</Menu.Item>
          <Menu.Item>열기...</Menu.Item>
          <Menu.Item>저장</Menu.Item>
          <Menu.Separator />
          <Menu.Item>닫기</Menu.Item>
        </Menu.Content>
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger className="menu-trigger-btn">편집 ▾</Menu.Trigger>
        <Menu.Content>
          <Menu.Item>실행 취소</Menu.Item>
          <Menu.Item disabled>다시 실행 (사용 불가)</Menu.Item>
          <Menu.Separator />
          <Menu.Item>잘라내기</Menu.Item>
          <Menu.Item>복사</Menu.Item>
          <Menu.Item>붙여넣기</Menu.Item>
        </Menu.Content>
      </Menu.Root>
    </div>
  ),
}
