'use client'

import Link from "next/link";
import styled from "styled-components";

function Nav() {
  const mainNavText = [
    
    { id: 0, product: <img src="#" alt="logo" className="logo" /> },
    { id: 1, product: "스토어" },
    { id: 2, product: "제품1" },
    { id: 3, product: "제품2" },
    { id: 4, product: "제품3" },
    { id: 5, product: "제품4" },
    { id: 6, product: "제품5" },
    { id: 7, product: "제품6" },
    { id: 8, product: "제품7" },
    { id: 9, product: "제품8" },
    { id: 10, product: "제품9" },
    { id: 11, product: "검색창" },
    { id: 12, product: "장바구니" },
    { id: 13, product: "메뉴" },
  ];
  // const 
  return (
  <StyledNav>
    <ul>
     {
        mainNavText.map(item => (
          <li key={item.id}>
            <Link href="/" passHref>
                {item.product}
            </Link>
          </li>
        ))
      }
    </ul>
</StyledNav>  
  );
}

const StyledNav = styled.nav`
    height:44px;
    font-size:12px;
    line-height:44px;
    padding-left: 22px;
    padding-right: 22px;
    
    ul{
      margin: 0 auto;
      max-width : 1024px;
      justify-content:space-between;
    }
    a{
      padding: 5px ,15px;
      line-height:44px;
      margin: 0 15px;
    }
    li:nth-child(14) {
      display: none;  /* a 요소 숨김 */
    }
  
@media only screen and (max-width: 833px) {  /* 핸드폰 디바이스를 위한 미디어 쿼리 */
   li:nth-child(2),li:nth-child(3),li:nth-child(4),li:nth-child(5),li:nth-child(6),li:nth-child(7),li:nth-child(8),li:nth-child(9),li:nth-child(10),li:nth-child(11) {
      display: none;  /* a 요소 숨김 */
    }
    li:nth-child(1){
      margin-right:auto;
    }
    li:nth-child(14) {
      display: inline-block; 
    }
  }

`


export default Nav;