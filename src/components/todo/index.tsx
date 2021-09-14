import React, { useState } from "react";
import { Edit, Plus } from "react-feather";
import List from "../List";
import "./index.css";

interface props {
  placeholder?: string;
  title?: string;
}
const Todo: React.FC<props> = ({ placeholder, title }) => {
  //States
  const [name, setName] = useState("");
  const [list, setList] = useState<any>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState<number>(0);

  //functions
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name) {
    } else if (name && isEditing) {
      setList(
        list.map((item: any) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(0);
      setIsEditing(false);
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const clearList = () => {
    setList([]);
  };

  const removeItem = (id: number) => {
    setList(list.filter((item: any) => item.id !== id));
  };

  const editItem = (id: number) => {
    const specificItem = list.find((item: any) => item.id === id) ?? {
      id: "0",
      title: "",
    };
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title ?? undefined);
  };

  //template
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>{title ?? "List"}</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder={placeholder ?? "Input your List"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? <Edit size={20} /> : <Plus size={20} />}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            Clear All
          </button>
        </div>
      )}
    </section>
  );
};
export default Todo;
