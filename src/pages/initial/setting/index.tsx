import React from "react";
import FormA from "../../../components/form";
import SelectA from "../../../components/select";
import Todo from "../../../components/todo";

interface Props {}

const Setting: React.FC<Props> = (props: Props) => {
  const options = ["English", "Arabic", "France", "chaina"];
  return (
    <div>
      <SelectA options={options} />
      <Todo />
      <FormA/>
    </div>
  );
};

export default Setting;
