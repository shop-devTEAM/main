"use client"
import styled from "styled-components";

interface CardProps {
  data?:{
    id:number;
    title:string;
    contents:string;
  }[]
}

function Card(props:CardProps) {
  const {data} = props;
  return (
    <StyledCard>
      <p className="card_title">새로운 상품들을 만나보세요</p>
      <div className="card_container">
          {data.map((item) => (
              <div  className="card" key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.contents}</p>
              </div>
            ))
          }
        </div>
        <div className="controller">
          <span className="prev">&lang;</span>
          <span className="next">&rang;</span>
        </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  position:relative;
  overflow:hidden;
  .card_title{
    font-size:34px;
    margin:40px 0 25px; 
    padding-left:30%
  }
  .card_container{
    background-color:pink;
    display:flex;
    width:288%;
  }
  .card{
    width: 400px; height:500px;
    min-width:400px;
    margin-left:20px
  }
  .controller span {
    display: block;
    width:50px;
    height:50px;
    position: absolute; top:50%;
    background-color:gray;
    text-align:center;
    line-height:50px;
    font-weight: bold;
    cursor: pointer;
    border-radius:50%;
  }
  .controller .prev {
    left: 10px;
  }
  .controller .next {
    right: 10px;
  }

  @media only screen and (max-width: 733px) {
    .card_container{
      background-color:pink;
      width:1000%;
    }
    .card {
      width:90%;
      margin:0 10px;
    }
    .card_title{
      text-align:center;
      font-size:30px;
      margin:40px 0 25px; 
      padding-left:0;
    }  
}
  
`

export default Card;