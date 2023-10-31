import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { tableDataActions } from "../../store/tableDataSlice";

const Pagination = () => {
  const endPage = useSelector((state: RootState) => state.tableData.endPage);
  const pageArr = [];
  const dispatch = useDispatch();

  for (let i = 1; i <= endPage; i++) {
    pageArr.push(i);
  }

  const pageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickPage = parseInt(e.currentTarget.textContent!);
    dispatch(tableDataActions.setCurrentPage(clickPage));
  };

  return (
    <>
      <div>
        {pageArr.map((page) => (
          <button onClick={pageClick}>{page}</button>
        ))}
      </div>
    </>
  );
};

export default Pagination;
