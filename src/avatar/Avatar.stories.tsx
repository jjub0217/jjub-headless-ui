import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './index'

/**
 * Avatar 컴포넌트 구조:
 *
 * Avatar.Root — role="img", 이미지 로드 상태 추적
 * Avatar.Image — 이미지, onError 시 자동으로 Fallback 표시
 * Avatar.Fallback — 이미지 실패 시 표시 (이니셜, 아이콘 등)
 *
 * data-state 값:
 * - "idle": 이미지 로드 전
 * - "loading": 로드 중
 * - "loaded": 로드 완료 (Fallback 숨김)
 * - "error": 로드 실패 (Fallback 표시)
 */

const meta = {
  title: 'Components/Avatar',
  decorators: [
    (Story) => (
      <>
        <style>{`
          .avatar-root {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            border-radius: 9999px;
            overflow: hidden;
            background: #e5e7eb;
            flex-shrink: 0;
          }
          .avatar-root[data-state="loaded"] {
            background: transparent;
          }
          .avatar-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .avatar-fallback {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            font-size: 16px;
            font-weight: 600;
            color: #6b7280;
            background: #f3f4f6;
            border-radius: 9999px;
            user-select: none;
          }
          .avatar-fallback[data-state="error"] {
            color: #374151;
            background: #dbeafe;
          }
          .avatar-lg {
            width: 64px;
            height: 64px;
          }
          .avatar-lg .avatar-fallback {
            font-size: 22px;
          }
          .avatar-sm {
            width: 32px;
            height: 32px;
          }
          .avatar-sm .avatar-fallback {
            font-size: 12px;
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
          'Headless Avatar 컴포넌트. 이미지 로드 실패 시 자동으로 Fallback을 표시합니다. role="img"로 스크린 리더에 의미를 전달하며, alt 텍스트를 통해 접근성을 보장합니다.',
      },
    },
  },
} satisfies Meta

export default meta

/**
 * 이미지 있는 아바타.
 *
 * 이미지가 정상적으로 로드되면 Fallback은 숨겨집니다.
 */
export const WithImage: StoryObj = {
  name: 'With Image',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Avatar.Root className="avatar-root avatar-sm">
        <Avatar.Image
          src="https://i.pravatar.cc/64?img=1"
          alt="사용자 김철수"
          className="avatar-img"
        />
        <Avatar.Fallback className="avatar-fallback">김</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root className="avatar-root">
        <Avatar.Image
          src="https://i.pravatar.cc/96?img=2"
          alt="사용자 이영희"
          className="avatar-img"
        />
        <Avatar.Fallback className="avatar-fallback">이</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root className="avatar-root avatar-lg">
        <Avatar.Image
          src="https://i.pravatar.cc/128?img=3"
          alt="사용자 박지민"
          className="avatar-img"
        />
        <Avatar.Fallback className="avatar-fallback">박</Avatar.Fallback>
      </Avatar.Root>
    </div>
  ),
}

/**
 * Fallback (이니셜).
 *
 * 이미지 없이 이니셜만 사용하는 예시.
 * src를 제공하지 않으면 Fallback이 바로 표시됩니다.
 */
export const WithFallbackInitials: StoryObj = {
  name: 'With Fallback (Initials)',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Avatar.Root className="avatar-root avatar-sm">
        <Avatar.Fallback className="avatar-fallback">김</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root className="avatar-root">
        <Avatar.Fallback className="avatar-fallback">AB</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root className="avatar-root avatar-lg">
        <Avatar.Fallback className="avatar-fallback">박</Avatar.Fallback>
      </Avatar.Root>
    </div>
  ),
}

/**
 * 이미지 로드 실패.
 *
 * 잘못된 src를 제공하면 onError가 발생하고 Fallback이 표시됩니다.
 * data-state="error"로 에러 스타일을 적용할 수 있습니다.
 */
export const ImageLoadError: StoryObj = {
  name: 'Image Load Error',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatar.Root className="avatar-root">
          <Avatar.Image
            src="https://invalid-url-that-will-fail.example/avatar.jpg"
            alt="사용자 오류"
            className="avatar-img"
          />
          <Avatar.Fallback className="avatar-fallback">오</Avatar.Fallback>
        </Avatar.Root>
        <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px' }}>로드 실패 → Fallback</p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Avatar.Root className="avatar-root">
          <Avatar.Image
            src="https://i.pravatar.cc/96?img=5"
            alt="사용자 정상"
            className="avatar-img"
          />
          <Avatar.Fallback className="avatar-fallback">정</Avatar.Fallback>
        </Avatar.Root>
        <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px' }}>정상 로드</p>
      </div>
    </div>
  ),
}

/**
 * 아바타 그룹.
 *
 * 여러 아바타를 겹쳐서 표시하는 패턴.
 */
export const AvatarGroup: StoryObj = {
  name: 'Avatar Group',
  render: () => {
    const users = [
      { src: 'https://i.pravatar.cc/96?img=10', alt: '사용자 1', fallback: '1' },
      { src: 'https://i.pravatar.cc/96?img=11', alt: '사용자 2', fallback: '2' },
      { src: 'https://invalid-url.example/fail.jpg', alt: '사용자 3', fallback: '3' },
      { src: 'https://i.pravatar.cc/96?img=13', alt: '사용자 4', fallback: '4' },
    ]

    return (
      <div style={{ display: 'flex' }}>
        {users.map((user, i) => (
          <Avatar.Root
            key={i}
            className="avatar-root"
            style={{ marginLeft: i === 0 ? 0 : '-12px', border: '2px solid white', zIndex: users.length - i }}
          >
            <Avatar.Image src={user.src} alt={user.alt} className="avatar-img" />
            <Avatar.Fallback className="avatar-fallback">{user.fallback}</Avatar.Fallback>
          </Avatar.Root>
        ))}
        <Avatar.Root
          className="avatar-root"
          style={{ marginLeft: '-12px', border: '2px solid white' }}
          aria-label="외 2명"
        >
          <Avatar.Fallback className="avatar-fallback" style={{ fontSize: '12px' }}>+2</Avatar.Fallback>
        </Avatar.Root>
      </div>
    )
  },
}
