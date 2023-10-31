import { ReactNode } from "react";
import Search from "../Search";
import Filter from "./Filter";
import { css } from "@emotion/react";

const TableHeader = () => {
  return (
    <Header>
      <Search />
      <Filter />
    </Header>
  );
};

function Header({ children }: { children: ReactNode }) {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 4px;
      `}
    >
      {children}
    </div>
  );
}

export default TableHeader;
