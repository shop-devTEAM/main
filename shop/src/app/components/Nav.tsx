'use client'

import Link from "next/link";
import styled from "styled-components";

function Nav() {
  const mainNavText:string[] = ["스토어","제품1","제품2","제품3","제품4","제품5"];
  // const 
  return (
  <StyledNav>
    <nav>
      <h1><img src="" alt="logo" /></h1>
      <ul className="main_nav">
      {mainNavText.map((text, idx) => (
        <Link key={idx} href="/" passHref>
          {text}
        </Link>
      ))}
      </ul>
      <ul>
        <Link href="/">검색창</Link>
        <Link href="/">장바구니</Link>
      </ul>
  </nav>
</StyledNav>  
  );
}

const StyledNav = styled.nav`
  nav{
    display:flex;
    height:44px;
    justify-content:center;
    font-size:12px;
    line-height:44px;
  h1{
    width:50px;
  }
  ul{
    a{
      padding: 5px ,15px;
      line-height:44px;
      margin: 0 15px;
    }
  }
}

@media (max-width: 767px) {  /* 핸드폰 디바이스를 위한 미디어 쿼리 */
    nav {
      justify-content:space-between;
      .main_nav > a {
      display: none;  /* a 요소 숨김 */
    }
  }
}
`


export default Nav;