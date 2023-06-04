"use client";
import { HeadingThin, Layout, Loader } from "./components/common";
import HighlightCard from "./components/common/HighlightCard/HighlightCard";
import { useHighlights } from "./queries/hooks/useHighlights";
import { Header } from "./components/common/Header";
import { COPY_TEXT } from "./util/constant";
import styles from "./page.module.css";

export default function Home() {
  const { data, error, isError, isLoading } = useHighlights();

  return (
    <Layout>
      <div className={styles.bg}>
        <Header />
        <div className={styles.header}>
          <h1 className={styles.mainHeading}>{COPY_TEXT.MAIN_HEADING}</h1>
        </div>
      </div>
      <div className={styles.cardMain}>
        <div>
          <HeadingThin>{COPY_TEXT.HIGHLIGHTS}</HeadingThin>
        </div>
        <div className={styles.cards}>
          {isLoading ? (
            <Loader />
          ) : (
            data?.map((item) => (
              <HighlightCard
                imgUrl={item.image}
                subtitle={item.description}
                title={item.title}
                // ideally key should be uniq id but there is no id so using title, don't prefer to use index.
                key={item.title}
              />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}
