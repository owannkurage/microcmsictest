import { client } from "../../libs/client";

export default function NewsId({ news }) {
    return (
      <main>
        <h1>{news.title}</h1>
        <p>{news.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${news.content}`,
          }}
        />
      </main>
    );
  }


//静的生成のためのパスを指定(この処理を含めないと、)自動的ルーティング
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "news" });
  
    const paths = data.contents.map((content) => `/news/${content.id}`);
    return { paths, fallback: false };
  };
  


export const getStaticProps =async (context) => {
    const id = context.params.id;//ぱらむのIDを受け取る
    const data = await client.get({ endpoint: "news", contentId: id });//contentIdを指定することで記事の詳細を取得
    return {
      props: {
        news: data,
      },
    };
  };