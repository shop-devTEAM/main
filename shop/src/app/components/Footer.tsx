'use client'

import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

function Footer() {
  /* 나중에 최적화할 코드 */
  const mainNavText:string[] = ["스토어","제품1","제품2","제품3","제품4","제품5"];
  const accountNav:string[] = ["ID 관리","PW 관리"];
  const StoreNav:string[] = ["오시는 길","할부방식","주문상태","쇼핑 도움말"]

  /* 최적화 시키고 중복코드 없애기 */
  const [isToggle, setIsToggle] = useState(false)
  const onClickToggle = () => {
    setIsToggle(!isToggle);
  }
  const [isToggle2, setIsToggle2] = useState(false)
  const onClickToggle2 = () => {
    setIsToggle2(!isToggle2);
  }
  const [isToggle3, setIsToggle3] = useState(false)
  const onClickToggle3 = () => {
    setIsToggle3(!isToggle3);
  }

  
  return (
    <StyleFooter>
        <section>
          <ul className='policy'>
            {
              footerData.map(item => <li key={item.id}>{item.id}. <span>{item.title}</span>{item.txt}</li>)
            }
        </ul>
        </section>
        <div className="footer_wapper">
        <section className="footer_list">
          <h4 className="footer_title"><span>쇼핑 및 알아보기</span><button onClick={onClickToggle}>+</button></h4>
          <ul className={isToggle ? '' : 'footer_ul'}>
            
              {mainNavText.map((text, idx) => (
                <Link key={idx} href="/">
                  {text}
                </Link>
              ))}
          </ul>
        </section>
        <section className="footer_list">
          <h4 className="footer_title"><span>계정관리</span><button onClick={onClickToggle2}>+</button></h4>
          <ul className={isToggle2 ? '' : 'footer_ul'}>
            
            {accountNav.map((text, idx) => (
              <Link key={idx} href="/">
                {text}
              </Link>
            ))}
          </ul>
        </section>
        <section className="footer_list">
        <h4 className="footer_title"><span>스토어 알아보기</span><button onClick={onClickToggle3}>+</button>
        </h4>
          <ul className={isToggle3 ? '' : 'footer_ul'}>  
            {StoreNav.map((text, idx) => (
              <Link key={idx} href="/">
                {text}
              </Link>
            ))}
          </ul>
        </section>
        </div>
    </StyleFooter>
  );
}


const StyleFooter = styled.footer`
  background-color:#f5f5f7;
  width:100%;
  font-size:12px;
  padding-top:32px;
  section{
    width:80%;
    margin:0 auto;
    .policy {
      margin-bottom: 14px;
      li {
      display: inline-block;
      margin-bottom: 4px;
      color: #6e6e73;
      span{
        font-weight: bold;
       }
     }
   }
    h4{
      display:flex;
      justify-content:space-between;
      margin: 0 10px;
      padding: 10px 0;
      button{
        cursor: pointer;
        background: none;
        border:none;
        font-size:16px;
      }
    }
    ul{
      display: block;
      margin: 0 15px;
      display:flex;
      flex-direction:column;
      a{
        padding:5px;
        margin:5px 0;
        position:relative;
      }
      a:hover{
          text-decoration:underline;
        }

    }
    .footer_ul {
      visibility: hidden;
      height:0
    }
  }
  @media only screen and (min-width: 1700px) {
    }

    @media only screen and (min-width: 1024px) {
      .footer_title{
        display:flex;
        justify-content:center;
      }
      .footer_wapper{
        text-align:center;
        width:80%;
        margin: 0 auto;
        display:flex;
      }
      .footer_ul>a {
        visibility: visible;
      }
      button{
        display:none;
      }
  }
  
@media only screen and (min-width: 900px) {  /* 핸드폰 디바이스를 위한 미디어 쿼리 */
.footer_ul{
      }
  }
  
`
const footerData: {
  id: number;
  title: string;
  txt: string;
}[] = [
  { id: 1, title: '환불 정책 : ', txt: '저희 가상 쇼핑몰은 만족하지 못하신 경우에는 구매한 제품에 대한 환불을 제공합니다. 환불은 일정 기간 이내에 요청하셔야 하며, 제품의 상태와 사용 여부에 따라 조건이 적용될 수 있습니다. 가상쇼핑몰 반품 센터에 반품하신 제품이 접수되면 환불 절차에 들어갑니다. 환불 처리는 구입 당시 사용한 지불방식에 따라 다릅니다. 언제든 가상 리테일 매장에 제품을 반품할 수 있습니다. 저희 쇼핑 스페셜리스트가 반품을 도와 드립니다. 환불 역시 같이 처리됩니다.' },
  { id: 2, title: '배송 정책 : ', txt: '저희 가상 쇼핑몰은 신속하고 안전한 배송을 위해 노력하고 있습니다. 주문한 제품은 지정된 배송업체를 통해 정확한 주소로 배송됩니다. 배송 시 일부 지역이나 국가에는 추가 요금이 발생할 수 있으며, 이에 대한 안내는 사이트에서 확인하실 수 있습니다. 저희 가상 쇼핑몰의 파트너이자 독립적으로 운영되는 제3의 업체에 의해 배송됩니다. 저희 가상쇼핑몰의 계열사는 고객과 파트너 간 계약의 당사자가 아닙니다.' },
  { id: 3, title: '회원 혜택 : ', txt: '가상 쇼핑몰 회원은 특별한 혜택을 받을 수 있습니다. 회원 가입 시 일부 할인 혜택이 제공되거나, 새로운 제품 출시나 이벤트에 대한 사전 알림을 받을 수 있습니다. 또한, 회원 전용 세일이나 포인트 적립 프로그램 등을 통해 추가 혜택을 누릴 수 있습니다. 특별 할인가는 이용 자격을 갖춘 고객에게 적용됩니다. 특별 할인 혜택을 받는 방법에 관한 자세한 내용은 매장 내 가상 스페셜리스트에게 문의하거나 02-1234-5678에 전화로 문의하시기 바랍니다. 보다 오래 안심할 수 있도록. 이제 쇼핑 스페셜 케어가 우발적인 손상에 대한 수리 서비스를 횟수 제한 없이 제공합니다.' },
  { id: 4, title : '이용 약관: ', txt:'할부 서비스는 신용 카드 발급사인 신한, BC, KB, NH, 롯데, 삼성, 현대, 하나, KEB 및 시티은행에서 제공합니다. 모든 할부 구입은 신용 카드 발급사의 승인을 받아야 합니다. 신용 카드 발급사에서 할부 구입을 승인해 주지 않는 경우에도 Apple 직원에게 승인 거부 사유가 전달되지 않습니다. 할부 구입에 대한 승인 결과는 신용 카드 발급사에 문의하십시오. 할부 조건, 수수료, 청구액 등은 신용 카드 발급사에 문의하십시오. 청구액은 카드 명세서에 표시됩니다. 할부 서비스를 이용하려면 한국 거주자여야 합니다. 할부 서비스를 이용하려면 구입 시 현지 발급 신용 카드 또는 현지 발급 제휴 카드(Visa, Mastercard, AMEX, China Union Pay)를 사용해야 합니다. 해외 신용 카드(한국 외 다른 국가 또는 지역에서 발급 받은 신용 카드), 직불/체크 카드 및 현지 발급/제휴 법인 카드는 할부 서비스를 이용할 수 없습니다. 할부는 광고 가격 또는 정찰 가격을 기준으로 합니다. 모든 주문 제품은 무료 배송됩니다. 이 정보는 2021년 03월 16일 기준 최신 정보입니다.' },
  { id: 5, title: '개인정보 보호: ', txt: '가상 쇼핑몰은 고객의 개인정보를 보호하기 위해 철저한 보안 시스템을 갖추고 있습니다. 고객의 개인정보는 안전하게 처리되며, 제3자와의 공유는 필요한 경우에만 이루어집니다. 개인정보 처리에 대한 자세한 내용은 개인정보 처리 방침을 참고해 주세요. 개인정보 처리방침 외에도 저희 가상쇼핑몰에서는 제품에 내장된 데이터 및 개인 정보 보호와 관련된 정보와 개인 데이터 사용을 요청하는 특정 기능에 관한 정보를 제공합니다. 제품별 정보에는 데이터 및 개인 정보 보호 아이콘이 표시됩니다.' },
  
]

export default Footer;

