import { ColumnsType } from "antd/lib/table";
import { TableA } from "../../components/table";
import LocaleForm from "./form";


interface Props {}

const columns: ColumnsType<any> | any = [
  {
    key: "id",
    title: "Id",
    dataIndex: "id",
  },
  {
    key: "key",
    title: "Key",
    dataIndex: "key",
    editable: true,
    onCell: (record: any) => ({
      record,
      editable: true,
    }),
  },
  {
    key: "firstLanguage",
    title: "First Language",
    dataIndex: "firstLanguage",
  },
  {
    key: "secoundLanguage",
    title: "Secound Languagee",
    dataIndex: "secoundLanguage",
  },
  {
    key: "firstLanguage",
    title: "First Language",
    dataIndex: "firstLanguage",
  },
  {
    key: "thirdLanguage",
    title: "Third Language",
    dataIndex: "thirdLanguage",
  },
];

const data: any[] = [
  {
    id: 1,
    key: "logIn",
    firstLanguage: "log",
    secoundLanguage: "لوغ",
    thirdLanguage: "LOG",
  },
  {
    id: 1,
    key: "logIn",
    firstLanguage: "log",
    secoundLanguage: "لوغ",
    thirdLanguage: "LOG",
  },
  {
    id: 1,
    key: "logIn",
    firstLanguage: "log",
    secoundLanguage: "لوغ",
    thirdLanguage: "LOG",
  },
  {
    id: 1,
    key: "logIn",
    firstLanguage: "log",
    secoundLanguage: "لوغ",
    thirdLanguage: "LOG",
  },
];

export const Locale = (props: Props) => {
  return (
    <div>
      <LocaleForm />
      <TableA dataSource={data} columns={columns} />
    </div>  
  );
};
