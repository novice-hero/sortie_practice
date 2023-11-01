import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { tableDataActions } from "../../store/tableDataSlice";

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState(10);
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(parseInt(e.target.value));
    dispatch(tableDataActions.setLimit(parseInt(e.target.value)));
  };

  return (
    <select value={selectedValue} onChange={handleChange}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
    </select>
  );
};

export default Filter;
