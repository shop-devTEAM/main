'use client'

import Link from "next/link";
import { MouseEventHandler, useState } from "react";
import styled from "styled-components";

function Nav() {
  //모바일 toggle 메뉴버튼 
  const [toggle, setToggle] = useState<boolean>(false);
  const menuToggle = () => {
    setToggle(!toggle);
  }
  //홈 nav data
  const mainNavText: ({
    id: number;
    product: JSX.Element;
    path:string;
    onclick?:MouseEventHandler;
    submenu: never[];
} | {
    id: number;
    product: string;
    path:string;
    onclick?:MouseEventHandler;
    submenu: {
        id: number;
        title: string;
        links: {
          id:number;
          path:string;
          subname:string;
        }[];
    }[];
})[] = [
    { id: 0, product: <img src="#" alt="logo" className="logo" />, path:"/", onclick:()=>{} ,submenu:[] },
    { id: 1, product: "스토어", path:"/", onclick:()=>{} ,submenu: [
      { id: 1, title: "쇼핑하기", links: [
        {id: 1, path:"/", subname:"최신 제품 쇼핑하기"}, 
        {id: 2, path:"/", subname:"여성의류"}, 
        {id: 3, path:"/", subname:"남성의류"}, 
        {id: 4, path:"/", subname:"악세서리"}, 
        {id: 5, path:"/", subname:"커피/음료"}, 
        {id: 6, path:"/", subname:"베이커리"}] 
      },
      { id: 2, title: "의류", links: [
        {id: 1, path:"/", subname:"Tops 상의"}, 
        {id: 2, path:"/", subname:"Pants 바지"}, 
        {id: 3, path:"/", subname:"Dresses 원피스"},
        {id: 4, path:"/", subname:"Skirt 치마"}, 
        {id: 5, path:"/", subname:"Outer 아우터"}] 
      },
      { id: 3, title: "악세서리", links: [
        {id: 1, path:"/", subname:"가방"}, 
        {id: 2, path:"/", subname:"벨트"}, 
        {id: 3, path:"/", subname:"모자"}, 
        {id: 4, path:"/", subname:"선글라스"},
        {id: 5, path:"/", subname:"양말"},
        {id: 6, path:"/", subname:"장갑"}] 
      },
    ] },
    { id: 2, product: "제품1", path:"/", onclick:()=>{} ,submenu: [
      { id: 1, title: "쇼핑하기", links: [
        {id: 1, path:"/", subname:"최신 제품 쇼핑하기"}, 
        {id: 2, path:"/", subname:"여성의류"}, 
        {id: 3, path:"/", subname:"남성의류"}, 
        {id: 4, path:"/", subname:"악세서리"}, 
        {id: 5, path:"/", subname:"커피/음료"}, 
        {id: 6, path:"/", subname:"베이커리"}] 
      },
      { id: 2, title: "의류", links: [
        {id: 1, path:"/", subname:"Tops 상의"}, 
        {id: 2, path:"/", subname:"Pants 바지"}, 
        {id: 3, path:"/", subname:"Dresses 원피스"},
        {id: 4, path:"/", subname:"Skirt 치마"}, 
        {id: 5, path:"/", subname:"Outer 아우터"}] 
      },
      { id: 3, title: "악세서리", links: [
        {id: 1, path:"/", subname:"가방"}, 
        {id: 2, path:"/", subname:"벨트"}, 
        {id: 3, path:"/", subname:"모자"}, 
        {id: 4, path:"/", subname:"선글라스"},
        {id: 5, path:"/", subname:"양말"},
        {id: 6, path:"/", subname:"장갑"}] 
      },
    ]  },
    { id: 3, product: "제품2", path:"/", onclick:()=>{} ,submenu: [
      { id: 1, title: "쇼핑하기", links: [
        {id: 1, path:"/", subname:"최신 제품 쇼핑하기"}, 
        {id: 2, path:"/", subname:"여성의류"}, 
        {id: 3, path:"/", subname:"남성의류"}, 
        {id: 4, path:"/", subname:"악세서리"}, 
        {id: 5, path:"/", subname:"커피/음료"}, 
        {id: 6, path:"/", subname:"베이커리"}] 
      },
      { id: 2, title: "의류", links: [
        {id: 1, path:"/", subname:"Tops 상의"}, 
        {id: 2, path:"/", subname:"Pants 바지"}, 
        {id: 3, path:"/", subname:"Dresses 원피스"},
        {id: 4, path:"/", subname:"Skirt 치마"}, 
        {id: 5, path:"/", subname:"Outer 아우터"}] 
      },
      { id: 3, title: "악세서리", links: [
        {id: 1, path:"/", subname:"가방"}, 
        {id: 2, path:"/", subname:"벨트"}, 
        {id: 3, path:"/", subname:"모자"}, 
        {id: 4, path:"/", subname:"선글라스"},
        {id: 5, path:"/", subname:"양말"},
        {id: 6, path:"/", subname:"장갑"}] 
      },
    ] },
    { id: 4, product: "제품3", path:"/", onclick:()=>{} ,submenu: [
      { id: 1, title: "쇼핑하기", links: [
        {id: 1, path:"/", subname:"최신 제품 쇼핑하기"}, 
        {id: 2, path:"/", subname:"여성의류"}, 
        {id: 3, path:"/", subname:"남성의류"}, 
        {id: 4, path:"/", subname:"악세서리"}, 
        {id: 5, path:"/", subname:"커피/음료"}, 
        {id: 6, path:"/", subname:"베이커리"}] 
      },
      { id: 2, title: "의류", links: [
        {id: 1, path:"/", subname:"Tops 상의"}, 
        {id: 2, path:"/", subname:"Pants 바지"}, 
        {id: 3, path:"/", subname:"Dresses 원피스"},
        {id: 4, path:"/", subname:"Skirt 치마"}, 
        {id: 5, path:"/", subname:"Outer 아우터"}] 
      },
      { id: 3, title: "악세서리", links: [
        {id: 1, path:"/", subname:"가방"}, 
        {id: 2, path:"/", subname:"벨트"}, 
        {id: 3, path:"/", subname:"모자"}, 
        {id: 4, path:"/", subname:"선글라스"},
        {id: 5, path:"/", subname:"양말"},
        {id: 6, path:"/", subname:"장갑"}] 
      },
    ]  },
    { id: 5, product: "제품4", path:"/",onclick:()=>{} ,submenu: [
      { id: 1, title: "쇼핑하기", links: [
        {id: 1, path:"/", subname:"최신 제품 쇼핑하기"}, 
        {id: 2, path:"/", subname:"여성의류"}, 
        {id: 3, path:"/", subname:"남성의류"}, 
        {id: 4, path:"/", subname:"악세서리"}, 
        {id: 5, path:"/", subname:"커피/음료"}, 
        {id: 6, path:"/", subname:"베이커리"}] 
      },
      { id: 2, title: "의류", links: [
        {id: 1, path:"/", subname:"Tops 상의"}, 
        {id: 2, path:"/", subname:"Pants 바지"}, 
        {id: 3, path:"/", subname:"Dresses 원피스"},
        {id: 4, path:"/", subname:"Skirt 치마"}, 
        {id: 5, path:"/", subname:"Outer 아우터"}] 
      },
      { id: 3, title: "악세서리", links: [
        {id: 1, path:"/", subname:"가방"}, 
        {id: 2, path:"/", subname:"벨트"}, 
        {id: 3, path:"/", subname:"모자"}, 
        {id: 4, path:"/", subname:"선글라스"},
        {id: 5, path:"/", subname:"양말"},
        {id: 6, path:"/", subname:"장갑"}] 
      },
    ]  },
    { id: 6, product: "제품5", path:"/",onclick:()=>{} ,submenu: [
      { id: 1, title: "쇼핑하기", links: [
        {id: 1, path:"/", subname:"최신 제품 쇼핑하기"}, 
        {id: 2, path:"/", subname:"여성의류"}, 
        {id: 3, path:"/", subname:"남성의류"}, 
        {id: 4, path:"/", subname:"악세서리"}, 
        {id: 5, path:"/", subname:"커피/음료"}, 
        {id: 6, path:"/", subname:"베이커리"}] 
      },
      { id: 2, title: "의류", links: [
        {id: 1, path:"/", subname:"Tops 상의"}, 
        {id: 2, path:"/", subname:"Pants 바지"}, 
        {id: 3, path:"/", subname:"Dresses 원피스"},
        {id: 4, path:"/", subname:"Skirt 치마"}, 
        {id: 5, path:"/", subname:"Outer 아우터"}] 
      },
      { id: 3, title: "악세서리", links: [
        {id: 1, path:"/", subname:"가방"}, 
        {id: 2, path:"/", subname:"벨트"}, 
        {id: 3, path:"/", subname:"모자"}, 
        {id: 4, path:"/", subname:"선글라스"},
        {id: 5, path:"/", subname:"양말"},
        {id: 6, path:"/", subname:"장갑"}] 
      },
    ]  },
    { id: 7, product: "제품6", path:"/",onclick:()=>{} ,submenu: [
      { id: 1, title: "쇼핑하기", links: [
        {id: 1, path:"/", subname:"최신 제품 쇼핑하기"}, 
        {id: 2, path:"/", subname:"여성의류"}, 
        {id: 3, path:"/", subname:"남성의류"}, 
        {id: 4, path:"/", subname:"악세서리"}, 
        {id: 5, path:"/", subname:"커피/음료"}, 
        {id: 6, path:"/", subname:"베이커리"}] 
      },
      { id: 2, title: "의류", links: [
        {id: 1, path:"/", subname:"Tops 상의"}, 
        {id: 2, path:"/", subname:"Pants 바지"}, 
        {id: 3, path:"/", subname:"Dresses 원피스"},
        {id: 4, path:"/", subname:"Skirt 치마"}, 
        {id: 5, path:"/", subname:"Outer 아우터"}] 
      },
      { id: 3, title: "악세서리", links: [
        {id: 1, path:"/", subname:"가방"}, 
        {id: 2, path:"/", subname:"벨트"}, 
        {id: 3, path:"/", subname:"모자"}, 
        {id: 4, path:"/", subname:"선글라스"},
        {id: 5, path:"/", subname:"양말"},
        {id: 6, path:"/", subname:"장갑"}] 
      },
    ]  },
    { id: 8, product: "제품7", path:"/",onclick:()=>{} ,submenu: [
      { id: 1, title: "쇼핑하기", links: [
        {id: 1, path:"/", subname:"최신 제품 쇼핑하기"}, 
        {id: 2, path:"/", subname:"여성의류"}, 
        {id: 3, path:"/", subname:"남성의류"}, 
        {id: 4, path:"/", subname:"악세서리"}, 
        {id: 5, path:"/", subname:"커피/음료"}, 
        {id: 6, path:"/", subname:"베이커리"}] 
      },
      { id: 2, title: "의류", links: [
        {id: 1, path:"/", subname:"Tops 상의"}, 
        {id: 2, path:"/", subname:"Pants 바지"}, 
        {id: 3, path:"/", subname:"Dresses 원피스"},
        {id: 4, path:"/", subname:"Skirt 치마"}, 
        {id: 5, path:"/", subname:"Outer 아우터"}] 
      },
      { id: 3, title: "악세서리", links: [
        {id: 1, path:"/", subname:"가방"}, 
        {id: 2, path:"/", subname:"벨트"}, 
        {id: 3, path:"/", subname:"모자"}, 
        {id: 4, path:"/", subname:"선글라스"},
        {id: 5, path:"/", subname:"양말"},
        {id: 6, path:"/", subname:"장갑"}] 
      },
    ]  },
    { id: 9, product: "제품8", path:"/",onclick:()=>{} ,submenu: [
      { id: 1, title: "쇼핑하기", links: [
        {id: 1, path:"/", subname:"최신 제품 쇼핑하기"}, 
        {id: 2, path:"/", subname:"여성의류"}, 
        {id: 3, path:"/", subname:"남성의류"}, 
        {id: 4, path:"/", subname:"악세서리"}, 
        {id: 5, path:"/", subname:"커피/음료"}, 
        {id: 6, path:"/", subname:"베이커리"}] 
      },
      { id: 2, title: "의류", links: [
        {id: 1, path:"/", subname:"Tops 상의"}, 
        {id: 2, path:"/", subname:"Pants 바지"}, 
        {id: 3, path:"/", subname:"Dresses 원피스"},
        {id: 4, path:"/", subname:"Skirt 치마"}, 
        {id: 5, path:"/", subname:"Outer 아우터"}] 
      },
      { id: 3, title: "악세서리", links: [
        {id: 1, path:"/", subname:"가방"}, 
        {id: 2, path:"/", subname:"벨트"}, 
        {id: 3, path:"/", subname:"모자"}, 
        {id: 4, path:"/", subname:"선글라스"},
        {id: 5, path:"/", subname:"양말"},
        {id: 6, path:"/", subname:"장갑"}] 
      },
    ] },
    { id: 10, product: "제품9", path:"/",onclick:()=>{} ,submenu: [
      { id: 1, title: "쇼핑하기", links: [
        {id: 1, path:"/", subname:"최신 제품 쇼핑하기"}, 
        {id: 2, path:"/", subname:"여성의류"}, 
        {id: 3, path:"/", subname:"남성의류"}, 
        {id: 4, path:"/", subname:"악세서리"}, 
        {id: 5, path:"/", subname:"커피/음료"}, 
        {id: 6, path:"/", subname:"베이커리"}] 
      },
      { id: 2, title: "의류", links: [
        {id: 1, path:"/", subname:"Tops 상의"}, 
        {id: 2, path:"/", subname:"Pants 바지"}, 
        {id: 3, path:"/", subname:"Dresses 원피스"},
        {id: 4, path:"/", subname:"Skirt 치마"}, 
        {id: 5, path:"/", subname:"Outer 아우터"}] 
      },
      { id: 3, title: "악세서리", links: [
        {id: 1, path:"/", subname:"가방"}, 
        {id: 2, path:"/", subname:"벨트"}, 
        {id: 3, path:"/", subname:"모자"}, 
        {id: 4, path:"/", subname:"선글라스"},
        {id: 5, path:"/", subname:"양말"},
        {id: 6, path:"/", subname:"장갑"}] 
      },
    ]  },
    { id: 11, product: "검색창", path:"/",onclick:()=>{} ,submenu:[] },
    { id: 12, product: "장바구니", path:"/",onclick:()=>{} ,submenu:[] },
    { id: 13, product: "메뉴", path:"/",onclick:()=>{ menuToggle() } ,submenu: [] },
  ];

  //모바일 메뉴data
  const mobileMenu: {
    id: number;
    name: string;
    path: string;
}[] = [
    {id : 1, name:"카테고리1", path:"/"},
    {id : 2, name:"카테고리2", path:"/"},
    {id : 3, name:"카테고리3", path:"/"},
    {id : 4, name:"카테고리4", path:"/"},
    {id : 5, name:"카테고리5", path:"/"},
  ]
  return (
  <StyledNav>
    <ul>
  {
    mainNavText.map((item) => (
      <li key={item.id} onClick={item.onclick} className="navitem" >
        <Link href={item.path} passHref>
         {item.product}
        </Link>
        <div className="content">
          <div className="row">
      {
        item.submenu && (
          item.submenu.map((subitem) => (
            <div key={subitem.id} className="column">
              <h3>{subitem.title}</h3>
              {
                subitem.links.map((link) => (
                  <Link key={link.id} href={link.path}>{link.subname}</Link>
                  ))
              }
            </div>
          )))
        }
        </div>
        </div>
    </li>
  ))}
</ul>
{ 
  toggle && <StyledmobileMenu>
      <Link href="/" onClick={()=>{menuToggle()}} className="closemenu"> X </Link>
      <ul className="movcontainer">
        {
          mobileMenu.map(item => <li key={item.id} className="movlist">
            <Link href={item.path}>{item.name}</Link>
            </li>
            )
        }
      </ul>
    </StyledmobileMenu>
    }
</StyledNav>  
  );
}

const StyledNav = styled.nav`
  background-color:blue;
    height:44px;
    font-size:12px;
    line-height:44px;
    padding-left: 22px;
    padding-right: 22px;
    position: relative;
    ul{
      margin: 0 auto;
      max-width : 1024px;
      justify-content:space-between;
    }
    li{
      float: left;
	    overflow: hidden;
    }
    a{
      padding: 5px ,15px;
      line-height:44px;
      margin: 0 15px;
    }
    li:hover > .content { /* submenu hovering */
      display: block;
    }
    li:nth-child(14) {
      display: none;  /* 모바일메뉴버튼 숨김 */
    }

    .content{ /* submenu container */
      display: none;
	    position: absolute;
	    background: #fff;
	    width: 100%;
	    left: 0;
	    z-index: 10;
      -webkit-transition: all .25s ease;
	    -moz-transition: all .25s ease;
	    -ms-transition: all .25s ease;
	    -o-transition: all .25s ease;
	    transition: all 1s ease;
    }
    .content .row{ 
      transform: translate(-50%,0);
      position:relative;
      left:74%;
    }

    .content .column {
	    float: left;
	    width: 18%;
      padding: 10px 10px 40px 10px;
	    background: #FFF;
    }
    .content .column:nth-child(2) {
      width: 12%;
    }
    .content .column a {
	    display: block;
	    float: none;
	    color: #5f5f60;
	    text-align: left;
    }
    .content .column h3 {
	    color: #5f5f60;
	    padding: 10px;
      font-size:12px;
      font-weight: normal;
    }
    .content .column:nth-child(1){
      font-size: 20px;
      font-weight: bold;
    }
    .column a:hover {
	    color:#000;
    }
   .row:after {
	    content: '';
	    display: table;
	    clear: both;
    }

    @media only screen and (max-width: 1700px) {
      .content .row{ 
        left:70%;
      }
    }

    @media only screen and (max-width: 1024px) {
      .content .row{ 
        transform: translate(0);
        left:0%;
      }
    .content .column {
	    width: 33%;
    }
    .content .column:nth-child(2) {
      width: 33%;
    }
  }
  
@media only screen and (max-width: 833px) {  /* 핸드폰 디바이스를 위한 미디어 쿼리 */
   .navitem:nth-child(2),.navitem:nth-child(3),.navitem:nth-child(4),.navitem:nth-child(5),.navitem:nth-child(6),.navitem:nth-child(7),.navitem:nth-child(8),.navitem:nth-child(9),.navitem:nth-child(10),.navitem:nth-child(11) {
      display: none;  /* a 요소 숨김 */
    }
    .navitem:nth-child(1){
      margin-right:auto;
    }
    .navitem:nth-child(14) {
      display: inline-block; 
    }
  }
  


`

const StyledmobileMenu = styled.div`
 width: 100%;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;

 .movcontainer{
    flex-direction: column;
    position:absolute;
    top:10%;
    left:8%;
 }
 .closemenu {
  position: absolute;
  top: 2%;
  right: 2.6%;
  padding: 0.375rem;
  text-align: center;
 }
 .movlist a{
  font-size: 24px;
  color:#5f5f60;
  font-weight: bold;
 }
 .movlist a:hover{
  color:#000;
 }

`;


export default Nav;