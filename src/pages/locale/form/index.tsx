import "antd/dist/antd.css";
import { Form, Input, Button, message } from "antd";
import { useTranslation } from "../../../components/queries/translations";
import { useEffect, useState } from "react";
import set_Columns from "../../../utility/const/functios/locale/columns";

interface FormProps {
  id: number;
  actionType: string;
  setIsOpen: (value: boolean) => void;
}

const LocaleForm: React.FC<FormProps> = ({
  id,
  actionType,
  setIsOpen,
}) => {
  const [data, setData] = useState<any>();
  const [form] = Form.useForm();
  const [inputs, setInputs] = useState<any[]>([]);

   const getinputs = async () => {
     setInputs(await (await set_Columns()).languageColumns);
   };
  useEffect(() => {
    getinputs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    actionType === "add" && setData([]);
  }, [actionType]);

  useEffect(() => {
    form.setFieldsValue({
      key: data?.key,
      ar: data?.ar,
      en: data?.en,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const { createTranslation, translationData, updateTranslation } =
    useTranslation(id, {
      translationsDetailsConfig: {
        onSuccess: (data: any) => {
          actionType === "add" ? setData([]) : setData(data.data[0]);
        },
        onError: (erorr: any) => {
          message.error("There is an error !!");
        },
      },
      createTranslationConfig: {
        onSuccess: (data: any) => {
          message.success("done");
          translationData.refetch();
        },
        onError: (erorr: any) => {
          message.error("There is an error !!");
        },
      },
      updateTranslationConfig: {
        onSuccess: () => {
          setIsOpen(false);
          message.success("done");
          translationData.refetch();
        },
        onError: (erorr: any) => {
          message.error("There is an error !!");
        },
      },
    });

  const action: any =
    actionType === "add" ? createTranslation : updateTranslation;

  const onSubmit = (values: any) => {
    const language = {
      key: values.key,
      values: [
        {
          value: values.ar,
          language_id: 1,
        },
        {
          value: values.en,
          language_id: 2,
        },
      ],
      //ToDO:  collection_id
      collection_id: 1,
    };
    const lastLanguage =
      actionType === "add" ? language : { ...language, id: id };
    action.mutate(lastLanguage);
    translationData.refetch();
  };


  return (
    <div>
      <Form
        labelCol={{
          span: 100,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{}}
        //   onValuesChange={}
        onFinish={onSubmit}
        form={form}
      >
        {/* TODO: map for inputs */}
        {/* inputs  */}
        <div className="inputs">
          <Form.Item label="key" name="key">
            <Input />
          </Form.Item>
          {inputs.map((input: any) => (
            <Form.Item
              label={input.en ?? input.key}
              name={input.key}
              key={input.key}
            >
              <Input />
            </Form.Item>
          ))}
        </div>

        {/* Button */}
        <Button type="primary" htmlType="submit">
          {action.isLoading ? <>Loading ...</> : <>Submit</>}
        </Button>
      </Form>
    </div>
  );
};
export default LocaleForm;
