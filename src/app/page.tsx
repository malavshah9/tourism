import Image from "next/image";
import styles from "./page.module.css";
import { HeadingThin, Layout } from "./components/common";
import HighlightCard from "./components/common/HighlightCard/HighlightCard";

const cardArr = [1, 2, 3, 4, 5];

export default function Home() {
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
          {cardArr.map((item) => (
            <HighlightCard
              imgUrl=""
              subtitle="subtitlejsdf jsdhaf sadhfjkshaf khsfkahd asdjahdasd asdasd asd asda sdjas djkasdj askdajsdkajsdasd kaskdj asd"
              title={String("asdasd" + item)}
              key={item}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
