import React from "react";
//import { FaEdit, FaTrash } from "react-icons/fa";
import { Edit, Delete } from "react-feather";
interface Props {
  items: any;
  removeItem: any;
  editItem: any;
}

const List: React.FC<Props> = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item: any) => {
        const { id, title } = item;
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(id)}
              >
                <Edit size={15} color="green"/>
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}
              >
                <Delete size={15} color="red"/>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default List;
