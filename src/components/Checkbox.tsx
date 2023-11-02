import { TableRowData } from "../type";

type HandleSingleChange = (arg0: boolean, arg1: TableRowData) => void;
type HandleAllChange = (arg0: boolean) => void;

interface Props {
  isChecked: boolean;
  data?: TableRowData;
  handleChange: HandleSingleChange | HandleAllChange;
}

const Checkbox = ({ isChecked, data, handleChange }: Props) => {
  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={(e) =>
        data
          ? handleChange(e.target.checked, data)
          : handleChange(e.target.checked)
      }
    />
  );
};

export default Checkbox;
