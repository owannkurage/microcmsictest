import Link from "next/link";
import { client } from "../libs/client";
export const getStaticProps= async()=>{
  //microCMSからデータ取得
  const data= await client.get({endpoint: "news" });
  return {
    props: {
      news: data.contents,
    },
  };
}
export default function Home({news}) {
  return (
    <div className="container">
     <ul>
      {news.map((news)=>(
        <li key={news.id}>
          <Link href={`/news/${news.id}`}>{news.title}</Link>
        </li>
      ))}
     </ul>
    </div>
  )
}
