import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './index'

/**
 * Label 컴포넌트 구조:
 *
 * Label.Root — <label> 요소, htmlFor로 연결된 input에 클릭 전달
 *
 * 접근성:
 * - htmlFor 속성으로 form 요소와 명시적 연결
 * - 라벨 클릭 시 연결된 input에 포커스가 이동
 * - 스크린 리더가 input의 이름으로 읽음
 *
 * 스타일링: className 또는 data-* 속성 활용
 */

const meta = {
  title: 'Components/Label',
  decorators: [
    (Story) => (
      <>
        <style>{`
          .label {
            display: block;
            font-size: 14px;
            font-weight: 500;
            color: #374151;
            margin-bottom: 6px;
            cursor: default;
            user-select: none;
          }
          .label[data-required]::after {
            content: ' *';
            color: #ef4444;
            font-weight: 600;
          }
          .label[data-error] {
            color: #ef4444;
          }
          .label-inline {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 14px;
            color: #374151;
            cursor: pointer;
          }
          .demo-input {
            width: 100%;
            padding: 8px 12px;
            border: 1.5px solid #d1d5db;
            border-radius: 6px;
            font-size: 14px;
            color: #111827;
            outline: none;
            box-sizing: border-box;
          }
          .demo-input:focus {
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
          }
          .demo-input[aria-invalid="true"] {
            border-color: #ef4444;
          }
          .demo-input[aria-invalid="true"]:focus {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
          }
          .error-msg {
            font-size: 12px;
            color: #ef4444;
            margin-top: 4px;
          }
          .form-field {
            margin-bottom: 16px;
            max-width: 320px;
          }
          .checkbox {
            width: 16px;
            height: 16px;
            accent-color: #3b82f6;
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
          'Headless Label 컴포넌트. <label>의 htmlFor로 form 요소와 명시적으로 연결하여 접근성을 보장합니다. 클릭 시 연결된 input에 포커스가 이동하며, 스크린 리더가 자동으로 input 이름으로 인식합니다.',
      },
    },
  },
} satisfies Meta

export default meta

/**
 * 기본 사용법.
 *
 * htmlFor로 input과 연결합니다.
 * 라벨을 클릭하면 input에 포커스가 이동합니다.
 */
export const Default: StoryObj = {
  name: 'Default',
  render: () => (
    <div className="form-field">
      <Label.Root htmlFor="name-input" className="label">
        이름
      </Label.Root>
      <input
        id="name-input"
        type="text"
        placeholder="이름을 입력하세요"
        className="demo-input"
      />
    </div>
  ),
}

/**
 * 필수 항목 표시.
 *
 * data-required 속성으로 CSS에서 * 기호를 추가합니다.
 * aria-required는 input에 직접 설정합니다.
 */
export const Required: StoryObj = {
  name: 'Required Indicator',
  render: () => (
    <div>
      <div className="form-field">
        <Label.Root htmlFor="email-input" className="label" data-required="">
          이메일
        </Label.Root>
        <input
          id="email-input"
          type="email"
          placeholder="example@email.com"
          required
          aria-required="true"
          className="demo-input"
        />
      </div>

      <div className="form-field">
        <Label.Root htmlFor="phone-input" className="label" data-required="">
          전화번호
        </Label.Root>
        <input
          id="phone-input"
          type="tel"
          placeholder="010-0000-0000"
          required
          aria-required="true"
          className="demo-input"
        />
      </div>

      <div className="form-field">
        <Label.Root htmlFor="bio-input" className="label">
          자기소개 (선택)
        </Label.Root>
        <input
          id="bio-input"
          type="text"
          placeholder="간단히 소개해주세요"
          className="demo-input"
        />
      </div>
    </div>
  ),
}

/**
 * 오류 메시지 포함.
 *
 * data-error 속성으로 에러 상태 스타일을 적용합니다.
 * aria-describedby로 에러 메시지와 input을 연결합니다.
 */
export const WithErrorMessage: StoryObj = {
  name: 'With Error Message',
  render: () => (
    <div>
      <div className="form-field">
        <Label.Root htmlFor="username-input" className="label" data-error="">
          사용자명
        </Label.Root>
        <input
          id="username-input"
          type="text"
          defaultValue="a"
          aria-invalid="true"
          aria-describedby="username-error"
          className="demo-input"
        />
        <p id="username-error" className="error-msg" role="alert">
          사용자명은 2자 이상이어야 합니다.
        </p>
      </div>

      <div className="form-field">
        <Label.Root htmlFor="password-input" className="label">
          비밀번호
        </Label.Root>
        <input
          id="password-input"
          type="password"
          placeholder="비밀번호 입력"
          className="demo-input"
        />
      </div>
    </div>
  ),
}

/**
 * 체크박스 / 라디오와 함께.
 *
 * 인라인 라벨 패턴. 체크박스 옆에 라벨을 배치합니다.
 * htmlFor 클릭으로 체크박스가 토글됩니다.
 */
export const WithCheckbox: StoryObj = {
  name: 'With Checkbox',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 4px' }}>알림 설정</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <input id="notify-email" type="checkbox" className="checkbox" defaultChecked />
        <Label.Root htmlFor="notify-email" className="label-inline" style={{ marginBottom: 0 }}>
          이메일 알림
        </Label.Root>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <input id="notify-push" type="checkbox" className="checkbox" />
        <Label.Root htmlFor="notify-push" className="label-inline" style={{ marginBottom: 0 }}>
          푸시 알림
        </Label.Root>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <input id="notify-sms" type="checkbox" className="checkbox" />
        <Label.Root htmlFor="notify-sms" className="label-inline" style={{ marginBottom: 0 }}>
          SMS 알림
        </Label.Root>
      </div>
    </div>
  ),
}
