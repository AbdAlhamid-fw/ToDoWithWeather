import React from "react";
import SelectA from "../../../components/select";
import Todo from "../../../components/todo";

interface Props {}

const Setting: React.FC<Props> = (props: Props) => {
  const options = ["English", "Arabic", "France", "chaina"];
  return (
    <div>
      <SelectA options={options} />
      <Todo />
    </div>
  );
};

export default Setting;
