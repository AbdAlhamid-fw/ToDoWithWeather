import { ColumnsType } from 'antd/lib/table';
import React from 'react'
import { TableA } from '../../components/table'

interface Props {}



const columns: ColumnsType<any> = [
  {
    key: "id",
    title: "Id",
    dataIndex: "id",
  },
  {
    key: "key",
    title: "Key",
    dataIndex: "key",
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
            <TableA  dataSource={data} columns={columns}/> 
        </div>
    )
}
