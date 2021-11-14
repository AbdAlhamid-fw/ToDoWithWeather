import { useEffect, useState } from "react";
import { TableA } from "../../components/table";
import LocaleForm from "./form";
import { useTranslation } from "../../components/queries/translations";
import BasicSideBar from "../../components/Basic-side-bar";
import set_Columns from "../../utility/const/functios/locale/columns";
import { message } from "antd";
interface Props {}

export const Locale = (props: Props) => {
  const [columns, setColumns] = useState<any[]>([]);
  const [id, setId] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [actionType, setActionType] = useState("add");
  const {
    translationData,
    deleteTranslation,
    //  getConfigs,
  } = useTranslation(id, {
    deleteTranslationConfig: {
      onSuccess: (data: any) => {
        message.success("done");
        translationData.refetch();
      },
      onError: (erorr: any) => {
        message.error("There is an error !!");
      },
    },
    getConfigsConfig: {
      onSeccess: (data: any) => {},
    },
  });

  const getAllTranslations: any = async () => {
    try {
      // const checkForDuplicationResult: any =
      //   await translationService.checkForDuplication("a");
      // );
    } catch (error) {
      console.log("error is : ", error);
    }
  };
 
  //  state window
  const setStateWindow = (value: boolean) => {
    setIsOpen(value);
  };

  const actions = [
    {
      name: "edit",
      cb: (id: number, record: any) => {
        setId(id);
        setActionType("edit");
        setIsOpen(true);
      },
    },
    {
      name: "delete",
      cb: (id: any, record: any) => {
        deleteTranslation.mutate(id);
        translationData.refetch();
      },
    },
  ];

  const getColumns = async () => {
    setColumns(await (await set_Columns()).columns);
  };

  useEffect(() => {
    getColumns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("actionType in locale is : ", actionType);
  }, [actionType]);

  return translationData.isLoading ? (
    <> Looding . . . </>
  ) : translationData.isError ? (
    <>Error ! </>
  ) : (
    <div>
      <BasicSideBar
        isOpen={isOpen}
        setIsOpen={setStateWindow}
        setTypeAction={setActionType}
      >
        <LocaleForm
          id={id}
          actionType={actionType}
          setIsOpen={setStateWindow}
        />
      </BasicSideBar>
      <TableA
        dataSource={translationData?.data?.data}
        columns={columns}
        loading={translationData.isLoading ? true : false}
        // pagination
        actions={actions}
      />
    </div>
  );
};
