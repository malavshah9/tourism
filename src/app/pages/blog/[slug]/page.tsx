"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { HeadingThin, Layout } from "../../components/common";
import HighlightCard from "../../components/common/HighlightCard/HighlightCard";
import { useHighlights } from "../../queries/hooks/useHighlights";

const cardArr = [1, 2, 3, 4, 5];

export default function Page(props: any) {
  console.log(props);
  const { data, error, isError, isLoading } = useHighlights();
  return (
    <Layout>
      <div className={styles.header}>
        <h1 className={styles.mainHeading}>Welcome to Hawaii</h1>
      </div>
      <div className={styles.cardMain}>
        <div>
          <HeadingThin>Highlights</HeadingThin>
        </div>
        <div className={styles.cards}>
          {isLoading ? (
            <h2>Loading...</h2>
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
