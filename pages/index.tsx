import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "@/components/layout";
import utilStyles from "@/styles/utils.module.css";
import { getSortedPostsData } from "@/lib/posts";
import Date from "@/components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  // TODO: jestとstorybookがgetSortedPostsDataを呼び出すと落ちる問題の解決
  // const allPostsData = [{ id: "id" }];
  return {
    props: {
      allPostsData,
    },
  };
}

type Props = {
  allPostsData: ReturnType<typeof getSortedPostsData>;
};

export default function Home({ allPostsData }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Next.js Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
