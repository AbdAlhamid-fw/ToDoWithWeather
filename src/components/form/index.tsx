import "antd/dist/antd.css";
import {
  Form,
  Input,
  Button,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import Todo from "../todo";

interface FormProps {
  onFinish?: () => {};
  elementProps?: {
    name?: string;
    label?: string;
    type?: string;
    treeData?:any;
    mode?:any
    options?:any;
  };
}

export const FormA = (props: FormProps) => {
  const onSubmit = (values: any) => {
    console.log("values are : ", values);
  };
  
  //const options = ["English", "Arabic", "France", "chaina"];
  return (
    <div className="FormA">
      <>
        <Todo />
        <Form
          labelCol={{
            span: 40,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{}}
          //   onValuesChange={}
          // size={componentSize}
          onFinish={onSubmit}
        >
          {/* list */}

          {/* input  */}
          <Form.Item label="Input" name="input">
            <Input />
          </Form.Item>
          {/* TextArea */}
          <Form.Item name={"textArea"} label="TextArea">
            <Input.TextArea />
          </Form.Item>
          {/* select  */}
          <Form.Item label="Select">
            <Select
              mode={undefined}
              options={[
                { label: "test", value: "1" },
                { label: "test2", value: "2" },
                { label: "test3", value: "3" },
              ]}
            ></Select>
          </Form.Item>
          {/* multiSelect */}
          {/* <Form.Item
            name="select-multiple"
            label="Select[multiple]"
            rules={[
              {
                required: true,
                message: "Please select your favourite colors!",
                type: "array",
              },
            ]}
          >
            <Select
              mode="multiple"
              placeholder="Please select favourite colors"
            >
          
            </Select>
          </Form.Item> */}
          {/* tree select  */}
          <Form.Item label="TreeSelect">
            <TreeSelect
              treeData={[
                {
                  title: "Light",
                  value: "light",
                  children: [
                    {
                      title: "Bamboo",
                      value: "bamboo",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          {/* cascader */}
          <Form.Item label="Cascader">
            <Cascader
              options={[
                {
                  value: "zhejiang",
                  label: "Zhejiang",
                  children: [
                    {
                      value: "hangzhou",
                      label: "Hangzhou",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          {/* date picker */}
          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>
          {/* InputNumber */}
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>
          {/* Switch */}
          <Form.Item label="Switch" valuePropName="checked">
            <Switch />
          </Form.Item>
          {/* Button */}
          <Form.Item label="Button">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    </div>
  );
};
export default FormA;
