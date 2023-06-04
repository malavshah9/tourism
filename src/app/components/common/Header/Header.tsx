import { useHighlights } from "@/app/queries/hooks/useHighlights";
import { COPY_TEXT } from "@/app/util/constant";
import React from "react";
import { Navbar } from "../Navbar/Navbar";

const Header = () => {
  const { data } = useHighlights();
  return (
    <Navbar
      navItems={[
        ...COPY_TEXT.NAV_ITEM_DEFAULT,
        ...(data?.map?.((item) => ({
          itemText: item.title,
          itemKey: item.title,
        })) || []),
      ]}
    />
  );
};

export { Header };
