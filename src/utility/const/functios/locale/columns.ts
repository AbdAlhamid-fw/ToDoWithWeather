import { ColumnsType } from "antd/lib/table";
import translationService from "../../../../servises/Translations";

const baseColumns: ColumnsType<any> | any = [
  {
    key: "id",
    title: "Id",
    dataIndex: "id",
    width: 100,
    // fixed: "left",
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
    // width: 100,
    // fixed: "left",
  },
];

const getLanguageNames = async () => {
  const getConfigsResult: any = await translationService.getConfigs();
  const languages: string[] = getConfigsResult.data.languages?.map(
    (lang: any) => {
      return lang.name;
    }
  );
  return languages;
};

const set_Columns = async () => {
  const languageColumns = (await getLanguageNames()).map((langName: string) => {
    return {
      key: langName,
      title: langName,
      dataIndex: langName,
      editable: true,
    };
  });
  let columns = [...baseColumns, ...languageColumns];
  console.log("columns out is ", {columns, languageColumns});
  return { columns, languageColumns };
};
export default set_Columns;
