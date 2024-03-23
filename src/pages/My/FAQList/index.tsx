import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledSectionContainer } from '../../../components/common/UploadSection/index.styles';
import Description from '../../../components/common/Description';
import RowButton from '../../../components/common/RowButton';
import { LargeTag } from '../../../components/common/Tag';
import { SecondaryTopbar } from '../../../components/common/TopBar';
import { CloseDefaultIcon } from '../../../assets/icons';
import Text from '../../../components/common/Text';
import StyledPageContainer from '../../Upload/UploadDefaultStep/index.styles';
import Column from '../../../components/common/Column';
import StyledTextContainer from './index.styles';

export enum FAQs {
  UploadType,
  ForbiddenContent,
  UploadUnavailable,
  PaymentCode,
  CancelOrder,
  PriceMistake,
  PaymentAndPurchase,
  DownloadableContent,
  DownloadCount,
  Reward,
  ClaimCopyright,
  BugReport,
}

const FAQContents = {
  [FAQs.UploadType]: (
    <p>
      현재는 PDF 형식만 업로드할 수 있습니다. 추후에 다른 파일 형식도 업로드
      하실 수 있도록 업데이트 될 예정입니다.
    </p>
  ),

  [FAQs.ForbiddenContent]: (
    <>
      <p>
        네, 업로드하기 전 다음과 같은 사항들을 확인해주시고 업로드해주세요.{' '}
      </p>
      <br />
      <p>
        1. 반드시 권리 전부를 소유한 파일만 업로드해주세요 <br />
        2. 개인정보가 포함된 자료는 판매 등록이 어려울 수 있습니다. <br />
        3. 팀플 과제는 현재 업로드가 불가합니다. 해당 사항은 My -{'>'} 더보기창
        -{'>'} 업로드 가이드라인에서도 확인하실 수 있습니다. 등록된 자료는
        언제든지 자료함에서 판매 중지가 가능합니다.
      </p>
    </>
  ),

  [FAQs.UploadUnavailable]: (
    <>
      <p>
        업로드한 자료가 다른 유저에게 보이지 않는 경우, 다음과 같은 이유가 있을
        수 있습니다.
      </p>
      <br />
      <p>
        1. <strong>최초 판매의 경우</strong> : 최초 업로드 시, 안전한 장터
        생태계를 유지하기 위해 업로드한 자료는 서비스 내에서 검수 과정을
        거칩니다. 이 과정에서 자료의 적합성과 안전성을 확인하며, 해당 과정이
        완료되기 전까지는 다른 유저에게 자료가 표시되지 않습니다.
        <br /> 2. <strong>보이던 자료가 보이지 않는 경우</strong> : 자료가
        이전에 보였지만 갑자기 보이지 않는 경우, 해당 자료가 특정 사유에 의해
        판매 중단된 상태일 수 있습니다. 자세한 사유는 고객센터 문의를 통해
        확인하실 수 있습니다.
      </p>
    </>
  ),

  [FAQs.PaymentCode]: (
    <p>
      식별코드는 어떤 자료에 대한 주문인지를 식별하기 위해서 만들어진 고유의
      코드입니다. Majorfolio는 토스 익명송금을 이용하여 결제하는 형식을 취하고
      있기 떄문에, 결제를 위해 반드시 식별코드를 입력하셔야 합니다. <br />
      구매자에 대한 개인정보의 경우, 익명 처리되므로 해당 부분에 관해서는
      염려하지 않으셔도 됩니다.
    </p>
  ),

  [FAQs.CancelOrder]: (
    <p>
      네, 가능합니다.
      <br /> 먼저, 주문이 {`"`}결제대기{`"`} 상태인지 확인해주세요. 자료가 {`"`}
      결제대기{`"`} 상태라면, 자료함 또는 거래내역의 구매내역에서 해당
      자료카드를 클릭하세요. 그리고 송금안내 페이지에서 {`"`}구매취소{`"`}를
      클릭하여 구매취소 요청을 하실 수 있습니다. <br />
      *혹시 이미 송금을 하셨다면 취소하지 마시고, 고객센터에 문의해주시면 더욱
      빠르게 환불 도움받으실 수 있습니다.
    </p>
  ),
  [FAQs.PriceMistake]: (
    <>
      <p>송금한 금액을 잘못 입력한 경우, 다음 두 가지 경우를 참고해주세요.</p>
      <br />
      <p>
        1. <strong>필요 금액보다 적게 송금한 경우</strong>: 적게 송금하신 경우,
        동일한 식별코드를 사용하여 나머지 금액을 정확히 맞추어 추가 송금을
        진행해주세요.
      </p>
      <p>
        2. <strong>필요 금액보다 많이 송금한 경우</strong>: 고객센터에
        계좌정보와 함께 문의주시면 초과된 만큼 환불해 도와드리겠습니다.
      </p>{' '}
      <br />
      <p>
        <strong>혹시 환불을 원하시나요?</strong> <br /> 환불을 원할시에도
        마찬가지로, 고객센터에 계좌 정보와 함께 문의해주시면 환불 절차를
        안내해드리겠습니다.
      </p>
    </>
  ),
  [FAQs.PaymentAndPurchase]: (
    <>
      <p>“결제완료”와 “구매완료”는 다음과 같은 차이가 있습니다:</p>
      <br />
      <p>
        - <strong>결제완료</strong>: 송금이 완료된 후, 자료를 최초로 열람하기
        이전이나 결제 완료일로부터 7일 이전의 상태를 의미합니다. “결제완료”
        단계에서는 자료함에서 환불을 요청하시는 것이 가능합니다.
      </p>
      <p>
        - <strong>구매완료</strong>: 자료가 최초로 열람되거나 결제 완료일로부터
        7일이 지난 상태를 의미합니다. “구매완료” 단계에서는 환불 요청이
        불가능하며 오직 자료 다운로드와 열람만이 가능합니다. (ex. 1월 1일 구매
        후 미열람 시, 1월 8일까지는 “결제완료” 상태이며, 1월 9일부터 “구매완료“
        상태로 전환됩니다.)
      </p>
    </>
  ),
  [FAQs.DownloadableContent]: (
    <>
      현재는 업로드 형식과 마찬가지로 PDF 형식만 다운로드하실 수 있습니다.
      추후에 다른 파일 형식도 다운로드 하실 수 있도록 업데이트 될 예정입니다.
    </>
  ),
  [FAQs.DownloadCount]: (
    <>
      네, 가능합니다. <br /> 단, “결제완료”한 자료를 한 번 다운로드할 시, 즉시
      “구매완료” 상태로 전환되기 때문에 디지털 상품 특성상 환불이 불가능하다는
      점을 유의해주세요.
    </>
  ),
  [FAQs.Reward]: (
    <>
      구매자의 주문이 “구매완료“ 상태가 된 후, 평균 5영업일 내로 등록하신
      연락처로 지급됩니다.
      <br /> 만약 판매 보상 지급에 관련해서 문제가 있는 경우, 고객센터로
      문의해주세요.
    </>
  ),
  [FAQs.ClaimCopyright]: (
    <>
      해당 유저와 추가적인 무단 유포를 제재할 수 있도록 문제 사항과 증거를
      포함하여 고객센터에 문의해주세요.
    </>
  ),
  [FAQs.BugReport]: (
    <>
      <p>
        서비스 버그 및 오류 사항은 고객센터를 통해 제보해주시면 신속히 처리할 수
        있도록 도와드리겠습니다.
      </p>
      <br />
      <p>
        문의
        <br />
        💬 카카오톡채널 :
        <a
          href="http://pf.kakao.com/_NexmfG"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          http://pf.kakao.com/_NexmfG
        </a>
        <br />✉ 메일 : majorforlio.official@gmail.com
      </p>
    </>
  ),
};

export default function FAQList() {
  const navigate = useNavigate();

  const [openedFAQ, setOpenedFAQ] = useState<null | FAQs>(null);

  const description = (
    <Description normalText="메이저폴리오의" boldText="FAQ를 확인해보세요" />
  );

  const faqList = (
    <>
      <Column>
        <RowButton
          tag={
            <LargeTag
              backgroundColor="gray/gray100"
              size={12}
              weight="bold"
              lineHeight="sm"
              color="gray/gray900"
            >
              업로드
            </LargeTag>
          }
          text="업로드할 수 있는 자료의 형식은 무엇이 있나요?"
          onClick={() =>
            setOpenedFAQ(openedFAQ === FAQs.UploadType ? null : FAQs.UploadType)
          }
        />
        {openedFAQ === FAQs.UploadType && (
          <StyledTextContainer>
            <Text size={14} color="gray/gray900">
              {FAQContents[FAQs.UploadType]}
            </Text>
          </StyledTextContainer>
        )}
      </Column>
      <Column>
        <RowButton
          tag={
            <LargeTag
              backgroundColor="gray/gray100"
              size={12}
              weight="bold"
              lineHeight="sm"
              color="gray/gray900"
            >
              업로드
            </LargeTag>
          }
          text="업로드하면 안 되는 자료가 있나요?"
          onClick={() =>
            setOpenedFAQ(
              openedFAQ === FAQs.ForbiddenContent
                ? null
                : FAQs.ForbiddenContent,
            )
          }
        />
        {openedFAQ === FAQs.ForbiddenContent && (
          <StyledTextContainer>
            <Text size={14} color="gray/gray900">
              {FAQContents[FAQs.ForbiddenContent]}
            </Text>
          </StyledTextContainer>
        )}
      </Column>
      <Column>
        <RowButton
          tag={
            <LargeTag
              backgroundColor="gray/gray100"
              size={12}
              weight="bold"
              lineHeight="sm"
              color="gray/gray900"
            >
              업로드
            </LargeTag>
          }
          text="업로드한 자료가 다른 유저에게 보이지 않는 이유가 무엇인가요?"
          onClick={() =>
            setOpenedFAQ(
              openedFAQ === FAQs.UploadUnavailable
                ? null
                : FAQs.UploadUnavailable,
            )
          }
        />
        {openedFAQ === FAQs.UploadUnavailable && (
          <StyledTextContainer>
            <Text size={14} color="gray/gray900">
              {FAQContents[FAQs.UploadUnavailable]}
            </Text>
          </StyledTextContainer>
        )}
      </Column>
      <Column>
        <RowButton
          tag={
            <LargeTag
              backgroundColor="gray/gray100"
              size={12}
              weight="bold"
              lineHeight="sm"
              color="gray/gray900"
            >
              구매/결제
            </LargeTag>
          }
          text="송금할 때 식별 코드는 무엇이며 입력해야하는 이유가 무엇인가요?"
          onClick={() =>
            setOpenedFAQ(
              openedFAQ === FAQs.PaymentCode ? null : FAQs.PaymentCode,
            )
          }
        />
        {openedFAQ === FAQs.PaymentCode && (
          <StyledTextContainer>
            <Text size={14} color="gray/gray900">
              {FAQContents[FAQs.PaymentCode]}
            </Text>
          </StyledTextContainer>
        )}
      </Column>
      <Column>
        <RowButton
          tag={
            <LargeTag
              backgroundColor="gray/gray100"
              size={12}
              weight="bold"
              lineHeight="sm"
              color="gray/gray900"
            >
              구매, 결제
            </LargeTag>
          }
          text="주문을 잘못했어요. 결제하지 않고 취소할 수 있나요?"
          onClick={() =>
            setOpenedFAQ(
              openedFAQ === FAQs.CancelOrder ? null : FAQs.CancelOrder,
            )
          }
        />
        {openedFAQ === FAQs.CancelOrder && (
          <StyledTextContainer>
            <Text size={14} color="gray/gray900">
              {FAQContents[FAQs.CancelOrder]}
            </Text>
          </StyledTextContainer>
        )}
      </Column>
      <Column>
        <RowButton
          tag={
            <LargeTag
              backgroundColor="gray/gray100"
              size={12}
              weight="bold"
              lineHeight="sm"
              color="gray/gray900"
            >
              구매, 결제
            </LargeTag>
          }
          text="금액을 잘못 입력하고 송금했어요. 어떻게 해야하나요?"
          onClick={() =>
            setOpenedFAQ(
              openedFAQ === FAQs.PriceMistake ? null : FAQs.PriceMistake,
            )
          }
        />
        {openedFAQ === FAQs.PriceMistake && (
          <StyledTextContainer>
            <Text size={14} color="gray/gray900">
              {FAQContents[FAQs.PriceMistake]}
            </Text>
          </StyledTextContainer>
        )}
      </Column>
      <Column>
        <RowButton
          tag={
            <LargeTag
              backgroundColor="gray/gray100"
              size={12}
              weight="bold"
              lineHeight="sm"
              color="gray/gray900"
            >
              구매
            </LargeTag>
          }
          text="결제완료와 구매완료의 차이가 뭔가요?"
          onClick={() =>
            setOpenedFAQ(
              openedFAQ === FAQs.PaymentAndPurchase
                ? null
                : FAQs.PaymentAndPurchase,
            )
          }
        />
        {openedFAQ === FAQs.PaymentAndPurchase && (
          <StyledTextContainer>
            <Text size={14} color="gray/gray900">
              {FAQContents[FAQs.PaymentAndPurchase]}
            </Text>
          </StyledTextContainer>
        )}
      </Column>
      <Column>
        <RowButton
          tag={
            <LargeTag
              backgroundColor="gray/gray100"
              size={12}
              weight="bold"
              lineHeight="sm"
              color="gray/gray900"
            >
              구매
            </LargeTag>
          }
          text="다운로드할 수 있는 자료의 형식은 무엇이 있나요?"
          onClick={() =>
            setOpenedFAQ(
              openedFAQ === FAQs.DownloadableContent
                ? null
                : FAQs.DownloadableContent,
            )
          }
        />
        {openedFAQ === FAQs.DownloadableContent && (
          <StyledTextContainer>
            <Text size={14} color="gray/gray900">
              {FAQContents[FAQs.DownloadableContent]}
            </Text>
          </StyledTextContainer>
        )}
      </Column>
      <Column>
        <RowButton
          tag={
            <LargeTag
              backgroundColor="gray/gray100"
              size={12}
              weight="bold"
              lineHeight="sm"
              color="gray/gray900"
            >
              구매
            </LargeTag>
          }
          text="다운로드를 여러 번할 수 있나요?"
          onClick={() =>
            setOpenedFAQ(
              openedFAQ === FAQs.DownloadCount ? null : FAQs.DownloadCount,
            )
          }
        />
        {openedFAQ === FAQs.DownloadCount && (
          <StyledTextContainer>
            <Text size={14} color="gray/gray900">
              {FAQContents[FAQs.DownloadCount]}
            </Text>
          </StyledTextContainer>
        )}
      </Column>
      <Column>
        <RowButton
          tag={
            <LargeTag
              backgroundColor="gray/gray100"
              size={12}
              weight="bold"
              lineHeight="sm"
              color="gray/gray900"
            >
              판매
            </LargeTag>
          }
          text="판매된 자료에 대한 보상은 언제 받을 수 있나요?"
          onClick={() =>
            setOpenedFAQ(openedFAQ === FAQs.Reward ? null : FAQs.Reward)
          }
        />
        {openedFAQ === FAQs.Reward && (
          <StyledTextContainer>
            <Text size={14} color="gray/gray900">
              {FAQContents[FAQs.Reward]}
            </Text>
          </StyledTextContainer>
        )}
      </Column>
      <Column>
        <RowButton
          tag={
            <LargeTag
              backgroundColor="gray/gray100"
              size={12}
              weight="bold"
              lineHeight="sm"
              color="gray/gray900"
            >
              저작권
            </LargeTag>
          }
          text="제 자료를 다운로드한 사람이 무단으로 유포하고 있어요. 어떻게 신고하죠?"
          onClick={() =>
            setOpenedFAQ(
              openedFAQ === FAQs.ClaimCopyright ? null : FAQs.ClaimCopyright,
            )
          }
        />
        {openedFAQ === FAQs.ClaimCopyright && (
          <StyledTextContainer>
            <Text size={14} color="gray/gray900">
              {FAQContents[FAQs.ClaimCopyright]}
            </Text>
          </StyledTextContainer>
        )}
      </Column>
      <Column>
        <RowButton
          tag={
            <LargeTag
              backgroundColor="gray/gray100"
              size={12}
              weight="bold"
              lineHeight="sm"
              color="gray/gray900"
            >
              문의
            </LargeTag>
          }
          text="서비스 이용중 버그 또는 잘못된 정보를 발견했어요. 어떻게 제보하나요?"
          onClick={() =>
            setOpenedFAQ(openedFAQ === FAQs.BugReport ? null : FAQs.BugReport)
          }
        />
        {openedFAQ === FAQs.BugReport && (
          <StyledTextContainer>
            <Text size={14} color="gray/gray900">
              {FAQContents[FAQs.BugReport]}
            </Text>
          </StyledTextContainer>
        )}
      </Column>
    </>
  );
  return (
    <>
      <SecondaryTopbar
        transition={
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="previous"
          >
            <CloseDefaultIcon />
          </button>
        }
        title={
          <Text size={18} weight="bold" lineHeight="sm" color="gray/gray900">
            FAQ
          </Text>
        }
      />
      <StyledPageContainer>
        {description}
        <StyledSectionContainer>{faqList}</StyledSectionContainer>
      </StyledPageContainer>
    </>
  );
}
