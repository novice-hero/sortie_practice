import { useSelector } from "react-redux";
import { RootState } from "../../store";

const PrintButton = () => {
  const data = useSelector((state: RootState) => state.selectedData.data);
  const printData = () => {
    console.log(data);
  };
  return <button onClick={printData}>선택한 데이터 출력</button>;
};

export default PrintButton;
