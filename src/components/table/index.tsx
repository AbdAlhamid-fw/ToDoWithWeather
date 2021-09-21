import { Table } from "antd";



interface TableProps {
  columns: any;
  dataSource: any;
  style?: any;
}

export const TableA: React.FC<TableProps> = ({
  columns,
  dataSource,
  style,
}) => {
  return (
    <div className={style}>
      <Table<any>
        dataSource={dataSource}
        columns={columns}
        rowClassName={() => "editable-row"}
      />
    </div>
  );
};
