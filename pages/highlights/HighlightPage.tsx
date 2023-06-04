import React from "react";
import CategoryCard from "@/app/components/common/CategoryCard/CategoryCard";
import { useActivities } from "@/app/queries/hooks/useActivities";
import { ActivityType } from "@/app/queries/types/activity";
import { Layout } from "@/app/components/common";

const HighlightPage = ({ highlightType }: { highlightType: ActivityType }) => {
  const { data, isError } = useActivities(highlightType);
  return (
    <Layout>
      <div>
        {data?.activities.map((item) => (
          <CategoryCard
            categoryId={item.name}
            key={item.name}
            categoryName={item.name}
          />
        ))}
      </div>
    </Layout>
  );
};

export { HighlightPage };
