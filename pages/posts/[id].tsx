import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData, Data } from "../../lib/posts";

type Props = { postData: Data };

export default function Post({ postData }: Props) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const postData =
    typeof params?.id === "string" ? await getPostData(params.id) : null;

  return {
    props: {
      postData,
    },
  };
}
