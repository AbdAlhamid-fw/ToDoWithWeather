import React from "react";
import IToDoItemType from "../../interfaces/to-do-item";
import ToDoItem from "../to-do-item";
interface Props {
  items: any;
  removeItem: any;
  editItem: any;
}

const List: React.FC<Props> = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item: IToDoItemType) => {
        return (
          <>
            <ToDoItem item={item} removeItem={removeItem} editItem={editItem} />
          </>
        );
      })}
    </div>
  );
};
export default List;
