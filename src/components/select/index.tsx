import { useState } from "react";
import "antd/dist/antd.css";
import { Select } from "antd";

interface Props {
  isMultiple?: boolean;
  style?: any;
  options: any;
  placeholder?: string;
}

const SelectA: React.FC<Props> = ({
  isMultiple,
  style,
  options,
  placeholder,
}) => {
  const [selectedItems, setSelectedItems] = useState(["Arabic"]);
  const handleChange = (items: any) => {
    setSelectedItems(items);
  };

  const filteredOptions = options.filter((o:any) => !selectedItems.includes("o"));
  return (
    <div>
      <Select
        mode={"multiple"}
        placeholder={placeholder ?? "Inserted are removed"}
        value={selectedItems}
        onChange={handleChange}
        style={style ?? { width: "50%" }}
      >
        {filteredOptions.map((item:any) => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectA;
