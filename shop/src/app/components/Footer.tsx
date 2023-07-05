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
      <footer>
        <section>
        환불 정책: 저희 가상 쇼핑몰은 만족하지 못하신 경우에는 구매한 제품에 대한 환불을 제공합니다. 환불은 일정 기간 이내에 요청하셔야 하며, 제품의 상태와 사용 여부에 따라 조건이 적용될 수 있습니다.
        배송 정책: 저희 가상 쇼핑몰은 신속하고 안전한 배송을 위해 노력하고 있습니다. 주문한 제품은 지정된 배송업체를 통해 정확한 주소로 배송됩니다. 배송 시 일부 지역이나 국가에는 추가 요금이 발생할 수 있으며, 이에 대한 안내는 사이트에서 확인하실 수 있습니다.
        회원 혜택: 가상 쇼핑몰 회원은 특별한 혜택을 받을 수 있습니다. 회원 가입 시 일부 할인 혜택이 제공되거나, 새로운 제품 출시나 이벤트에 대한 사전 알림을 받을 수 있습니다. 또한, 회원 전용 세일이나 포인트 적립 프로그램 등을 통해 추가 혜택을 누릴 수 있습니다.
        고객 지원: 저희 가상 쇼핑몰은 고객 지원 서비스를 운영하고 있습니다. 제품에 대한 문의, 주문 상태 확인, 환불 및 교환 절차 등에 관한 문의는 고객 센터를 통해 도움을 받으실 수 있습니다. 저희는 고객의 문의에 신속하게 대응하며, 최상의 서비스를 제공하기 위해 노력하고 있습니다.
        개인정보 보호: 가상 쇼핑몰은 고객의 개인정보를 보호하기 위해 철저한 보안 시스템을 갖추고 있습니다. 고객의 개인정보는 안전하게 처리되며, 제3자와의 공유는 필요한 경우에만 이루어집니다. 개인정보 처리에 대한 자세한 내용은 개인정보 처리 방침을 참고해 주세요.
        </section>
        <section className="footer_list">
          <h4 className="footer_title">쇼핑 및 알아보기 <button onClick={onClickToggle}>+</button></h4>
          <ul className={isToggle ? '' : 'footer_ul'}>
            
              {mainNavText.map((text, idx) => (
                <Link key={idx} href="/">
                  {text}
                </Link>
              ))}
          </ul>
        </section>
        <section className="footer_list">
          <h4 className="footer_title">계정관리 <button onClick={onClickToggle2}>+</button></h4>
          <ul className={isToggle2 ? '' : 'footer_ul'}>
            
            {accountNav.map((text, idx) => (
              <Link key={idx} href="/">
                {text}
              </Link>
            ))}
          </ul>
        </section>
        <section className="footer_list">
        <h4 className="footer_title">스토어 알아보기 <button onClick={onClickToggle3}>+</button></h4>
          <ul className={isToggle3 ? '' : 'footer_ul'}>  
            {StoreNav.map((text, idx) => (
              <Link key={idx} href="/">
                {text}
              </Link>
            ))}
          </ul>
        </section>
      </footer>
    </StyleFooter>
  );
}


const StyleFooter = styled.footer`
  background-color:gray;
  width:100%;
  font-size:12px;
  section{
    width:80%;
    margin:0 auto;
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
    .footer_ul{
      display:none;
    }
  }
`

export default Footer;

