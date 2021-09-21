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

interface FormProps {}

export const FormA = (props: FormProps) => { 
const onSubmit = (values:any) => { 
     console.log("values are : ",values);
     
}
  return (
    <div className="FormA">
      <>
        <Form
          labelCol={{
            span: 40,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
          }}
       //   onValuesChange={}
          // size={componentSize}
          onFinish={onSubmit}
        >
          <Form.Item label="Input" name="input">
            <Input />
          </Form.Item>
          <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
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
          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Switch" valuePropName="checked">
            <Switch />
          </Form.Item>
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
