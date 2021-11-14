import { Table, Button,  Space } from "antd";
import { Edit, X } from "react-feather";
interface TableProps {
  columns: any;
  dataSource: any;
  style?: any;
  loading?: boolean;
  actions?: any[];
}

export const TableA: React.FC<TableProps> = ({
  columns,
  dataSource,
  style,
  loading,
  actions,
}) => {
  const getActions = () => {
    let actionsButions = {
      title: "Actions",
      key: "action",
      render: (text: any, record: any) => (
        <>
          <Space size={10}>
            {actions &&
              actions.map((action) => {
                return (
                  <>
                    {action.name === "delete" ? (
                      <>
                        <Button
                          type="primary"
                          shape="circle"
                          onClick={() => {
                            action.cb(record.id, record);
                          }}
                          danger
                        >
                          <X size={20} />
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          type="primary"
                          shape="circle"
                          onClick={() => {
                            action.cb(record.id, record);
                          }}
                        >
                          <Edit size={20}  />
                        </Button>
                      </>
                    )}
                  </>
                );
              })}
          </Space>
        </>
      ),
    };
    return actionsButions;
  };

  return (
    <>
      {" "}
      <div className={style}>
        <Table<any>
          dataSource={dataSource}
          columns={[...columns, getActions()]}
          rowClassName={() => "editable-row"}
          scroll={{ x: 1300 }}
          loading={loading}
        />
      </div>
    </>
  );
};
