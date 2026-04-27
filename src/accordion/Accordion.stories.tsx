import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from './index'

/**
 * Accordion 컴포넌트의 구조:
 *
 * Accordion.Root — 상태 관리 (어떤 항목이 열려있는지)
 * Accordion.Item — 개별 아코디언 항목
 * Accordion.Header — 항목 제목 영역 (<h3>)
 * Accordion.Trigger — 클릭/키보드로 열고 닫는 버튼 (aria-expanded)
 * Accordion.Content — 열렸을 때 보이는 내용 (role="region")
 *
 * 자동으로 처리되는 접근성:
 * - Enter/Space로 열기/닫기
 * - 화살표 키로 항목 간 이동
 * - Home/End로 처음/마지막 항목
 * - aria-expanded, aria-controls, aria-labelledby 자동 연결
 *
 * 필터 접기/펼치기, 사이드바 메뉴, FAQ 등에서
 * 반복되던 패턴입니다.
 */

const itemStyle = {
  borderBottom: '1px solid #e5e7eb',
}

const triggerStyle = {
  width: '100%',
  padding: '12px 0',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  textAlign: 'left' as const,
  fontSize: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const contentTextStyle = {
  padding: '0 0 12px',
  color: '#6b7280',
  fontSize: '14px',
}

const meta = {
  title: 'Components/Accordion',
  decorators: [
    (Story) => (
      <>
        <style>{`
          [data-state="open"] > button[aria-expanded] {
            font-weight: bold;
          }
          button[aria-expanded] span[aria-hidden] {
            display: inline-block;
            transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
          }
          button[aria-expanded="true"] span[aria-hidden] {
            transform: rotate(180deg);
          }
          h3 {
            margin: 0;
          }
        `}</style>
        <div style={{ maxWidth: '400px' }}>
          <Story />
        </div>
      </>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Headless Accordion 컴포넌트. WAI-ARIA Accordion 패턴을 준수하며, 단일/다중 열기 모드를 지원합니다.',
      },
    },
  },
} satisfies Meta

export default meta

/**
 * 기본 사용법 (단일 열기).
 *
 * 한 번에 하나의 항목만 열립니다.
 * 다른 항목을 열면 기존 항목은 자동으로 닫힙니다.
 *
 * 테스트해보세요:
 * - 항목 클릭 → 열림/닫힘
 * - ↑ ↓ 화살표 → 항목 간 이동
 * - Home/End → 처음/마지막 항목
 * - Enter/Space → 열기/닫기
 */
export const Default: StoryObj = {
  render: () => (
    <Accordion.Root type="single" defaultValue="faq1" collapsible>
      <Accordion.Item value="faq1" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            배송은 얼마나 걸리나요?
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div style={contentTextStyle}>주문 후 2~3일 이내에 배송됩니다. 도서산간 지역은 1~2일 추가될 수 있습니다.</div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="faq2" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            반품/교환은 어떻게 하나요?
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div style={contentTextStyle}>수령 후 7일 이내에 마이페이지에서 신청할 수 있습니다.</div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="faq3" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            결제 수단은 무엇이 있나요?
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div style={contentTextStyle}>신용카드, 계좌이체, 카카오페이, 네이버페이를 지원합니다.</div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
}

/**
 * 다중 열기 모드.
 *
 * 여러 항목을 동시에 열 수 있습니다.
 * 다른 항목을 열어도 기존 항목이 닫히지 않습니다.
 */
export const Multiple: StoryObj = {
  render: () => (
    <Accordion.Root type="multiple" defaultValue={['item1']}>
      <Accordion.Item value="item1" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            상세 필터
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div style={contentTextStyle}>가격대, 상품 상태, 거래 방식을 선택할 수 있습니다.</div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item2" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            위치 설정
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div style={contentTextStyle}>시/도, 구/군을 선택하여 거래 위치를 설정합니다.</div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item3" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            정렬 기준
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div style={contentTextStyle}>최신순, 가격 낮은 순, 가격 높은 순으로 정렬할 수 있습니다.</div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
}

/**
 * 비활성화된 항목.
 *
 * disabled 항목은 클릭/키보드로 열 수 없고, 키보드 탐색에서도 건너뜁니다.
 */
export const WithDisabledItem: StoryObj = {
  name: 'Disabled Item',
  render: () => (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item1" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            열 수 있는 항목
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div style={contentTextStyle}>이 항목은 정상적으로 열립니다.</div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item2" disabled style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={{ ...triggerStyle, opacity: 0.4, cursor: 'not-allowed' }}>
            비활성화된 항목
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div style={contentTextStyle}>이 내용은 볼 수 없습니다.</div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item3" style={itemStyle}>
        <Accordion.Header>
          <Accordion.Trigger style={triggerStyle}>
            열 수 있는 항목
            <span aria-hidden="true">▼</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div style={contentTextStyle}>이 항목도 정상적으로 열립니다.</div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
}
