/* 
퓨어 리액트의 app 컴포넌트 역할을 합니다
*/

import Card from "./components/Card";
import { slideData, noticeData , cardData} from "./components/data";
import Slide from "./components/Slide";

export default function Home() {
  return (
    <main>
    <Slide height={54} data={noticeData} ctrlBtn={30} />
    <Slide height={400} data={slideData} ctrlBtn={80} />
    <Card data={cardData}/>
    </main>
  )
}
