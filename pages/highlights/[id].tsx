import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ACTIVITY_TYPES, COPY_TEXT } from "@/app/util/constant";
import { HighlightPage } from "../../src/app/components/page-components/HighlightPage";
import { ActivityType } from "@/app/queries/types/activity";
import { CustomClientQueryProvider } from "../../src/app/util/QueryClient";

const HighlightDynamicPage = (props: any) => {
  const router = useRouter();
  const { id } = router.query;
  const [isValidActivityType, setIsValidActivityType] = useState(false);

  useEffect(() => {
    if (id && typeof id === "string") {
      setIsValidActivityType(!!ACTIVITY_TYPES.find((item) => item === id));
    }
  }, [id]);

  return !isValidActivityType ? (
    <div>{COPY_TEXT.NOT_VALID_ACTIVITY} </div>
  ) : (
    <CustomClientQueryProvider>
      <HighlightPage highlightType={id as ActivityType} />
    </CustomClientQueryProvider>
  );
};

export default HighlightDynamicPage;
