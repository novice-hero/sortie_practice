import { ReactNode } from "react";
import { css } from "@emotion/react";
import Pagination from "./Pagination";
import PrintButton from "./PrintButton";

const TableFooter = () => {
  return (
    <Footer>
      <PrintButton />
      <Pagination />
    </Footer>
  );
};

function Footer({ children }: { children: ReactNode }) {
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

export default TableFooter;
