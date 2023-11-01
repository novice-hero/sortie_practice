import { ReactNode, useEffect } from "react";
import { css } from "@emotion/react";
import { fetchAllData, fetchSortData } from "../../api";
import { tableHeader } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { tableDataActions } from "../../store/tableDataSlice";
import { sortClickActions } from "../../store/sortClickSlice";
import Checkbox from "../Checkbox";
import { TableRowData } from "../../type";

const Table = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state: RootState) => state.tableData.data);
  const currentPage = useSelector(
    (state: RootState) => state.tableData.currentPage
  );
  const limit = useSelector((state: RootState) => state.tableData.limit);
  const currentLabel = useSelector(
    (state: RootState) => state.sortClick.currentLabel
  );
  const currentOrder = useSelector(
    (state: RootState) => state.sortClick.currentOrder
  );

  const selectedData = useSelector(
    (state: RootState) => state.selectedData.data
  );

  const headerLabel = tableHeader.map((data) => data.label);

  const headerClick = async (label: string) => {
    if (
      label === "registrationNumber" ||
      label === "documentEvaluation" ||
      label === "writtenEvaluation"
    ) {
      dispatch(sortClickActions.update(label));
    }
  };

  const checkSelectedRow = (
    tableData: TableRowData,
    selectedData: TableRowData[]
  ) => {
    const selected = selectedData.filter(
      (data) => data.registrationNumber === tableData.registrationNumber
    );

    return selected.length ? true : false;
  };

  useEffect(() => {
    const initData = async () => {
      const allData = await fetchAllData();
      dispatch(tableDataActions.setEndPage(allData));

      const pageData = await fetchSortData(
        currentLabel,
        currentOrder,
        currentPage,
        limit
      );
      dispatch(tableDataActions.setData(pageData));
    };

    initData();
  }, [currentLabel, currentOrder, currentPage, dispatch, limit]);

  return (
    <TableWrapper>
      <TableHeader>
        <tr>
          <td>
            <Checkbox allData={tableData} />
          </td>
          {tableHeader.map((data) =>
            data.label === "registrationNumber" ||
            data.label === "documentEvaluation" ||
            data.label === "writtenEvaluation" ? (
              <td
                onClick={() => headerClick(data.label)}
                key={data.label}
                css={css`
                  &:hover {
                    cursor: pointer;
                    background-color: #9ecbf6;
                  }
                `}
              >
                {data.value}
              </td>
            ) : (
              <td key={data.label}>{data.value}</td>
            )
          )}
        </tr>
      </TableHeader>
      <TableBody>
        {tableData?.map((data, idx) => (
          <TableRow
            key={data.applicant + data.phoneNumber + idx}
            isSelected={checkSelectedRow(data, selectedData)}
          >
            <td>
              <Checkbox data={data} />
            </td>
            {headerLabel.map((label, innerIdx) => (
              <td key={label + innerIdx}>{data[label]}</td>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
};

function TableRow({
  children,
  isSelected,
}: {
  children: ReactNode;
  isSelected?: boolean;
}) {
  return (
    <tr
      css={css`
        background-color: ${isSelected ? "#c7c7c7" : "inherit"};
      `}
    >
      {children}
    </tr>
  );
}

function TableWrapper({ children }: { children: ReactNode }) {
  return (
    <table
      css={css`
        width: 100%;
        td {
          padding: 0.5rem;
        }
      `}
    >
      {children}
    </table>
  );
}

function TableHeader({ children }: { children: ReactNode }) {
  return (
    <thead
      css={css`
        background-color: #dbecfc;
      `}
    >
      {children}
    </thead>
  );
}

function TableBody({ children }: { children: ReactNode }) {
  return (
    <tbody
      css={css`
        background-color: #ffffff;
        td {
          padding: 0.5rem;
        }
      `}
    >
      {children}
    </tbody>
  );
}

export default Table;
