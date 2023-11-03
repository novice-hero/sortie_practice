import { TableRowData } from "../type";

type HandleChange = (arg0: boolean, arg1?: TableRowData) => void;

interface Props {
  isChecked: boolean;
  data?: TableRowData;
  handleChange: HandleChange;
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
