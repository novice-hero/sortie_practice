import { useState } from "react";
import { TableRowData } from "../type";
import { useDispatch } from "react-redux";
import { selectedDataActions } from "../store/selectedDataSlice";

interface Props {
  data?: TableRowData;
  allData?: TableRowData[];
}

const Checkbox = ({ data, allData }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleChange = () => {
    setIsChecked(!isChecked);

    if (allData) {
      if (isChecked) {
        dispatch(selectedDataActions.resetData());
        return;
      }
      dispatch(selectedDataActions.addData(allData));
      return;
    }

    if (isChecked) {
      dispatch(selectedDataActions.removeData(data));
      return;
    }
    dispatch(selectedDataActions.addData(data));
  };

  return <input type="checkbox" checked={isChecked} onChange={handleChange} />;
};

export default Checkbox;
