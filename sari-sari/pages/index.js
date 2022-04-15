import Head from "next/head";
import { PostCard } from "../components";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections";
import Masonry from "react-masonry-css";
import Script from "next/script";

export default function Home({ posts }) {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    900: 2,
    700: 2,
    600: 1,
    500: 1,
  };

  return (
    <div className="container mx-auto px-9 mb-8">
      <Head>
        <title>sári-sarì</title>

        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Sari-Sari" />
        <meta
          name="description"
          content="Arthur Laroya's personal blog on web development, creativity, and many more!"
        />
        <meta
          name="keywords"
          content="arthur,laroya,sari,sari-sari,blog,personal,programming,creativity,design,art,photography,content,development,self,variety"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Arthur Laroya" />
        <link rel="icon" href="/favicon.ico" />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <FeaturedPosts />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {posts.map((post, index) => (
          <PostCard post={post.node} key={index} />
        ))}
      </Masonry>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
