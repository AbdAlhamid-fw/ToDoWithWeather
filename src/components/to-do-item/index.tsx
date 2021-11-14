import { FunctionComponent } from "react";
import { Delete, Edit } from "react-feather";
import IToDoItemType from "../../interfaces/to-do-item";
// import Checkbox from "material-ui/Checkbox";
// import TextField from "material-ui/TextField";
// import Divider from "material-ui/Divider";
// import FlatButton from "material-ui/FlatButton";
// import DeleteIcon from "material-ui/svg-icons/action/delete";
// import Paper from "material-ui/Paper";

interface ToDoItemProps {
  id?: number;
  item: IToDoItemType;
  removeItem: any;
  editItem: any;
  
}

const ToDoItem: FunctionComponent<ToDoItemProps> = ({
  item,
  removeItem,
  editItem,
}) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
    },
    row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    checkbox: {
      marginLeft: 16,
      width: 40,
    },
    input: {
      flex: 1,
    },
    icon: {
      marginRight: 6,
    },
  };
  return (
    <>
      {/* there is a problem with matiral ui  */}
      {/* <Paper zDepth={1}>
        <div style={styles.row}>
          <Checkbox
            style={styles.checkbox}
            onCheck={this.onPressCheck}
            checked={finished}
          />
          <TextField
            id={todo.id}
            style={styles.input}
            underlineShow={false}
            hintText={text ? undefined : "What needs to be done?"}
            onChange={this.onTextChange}
            value={text || ""}
          />
          <FlatButton
            style={styles.icon}
            icon={<DeleteIcon />}
            secondary
            onClick={this.onPressDelete}
          />
        </div>
        <Divider />
      </Paper> */}
      <article className="grocery-item" key={item.id}>
        <h2>{item.title}</h2>
        <label htmlFor="description">Description :</label>
        <p  className="description">{item.description}</p>
        <label htmlFor="archive-at">Archive At :</label>
        <b>
          <i className="archive-at">{item.archiveAt}</i>
        </b>
        <label htmlFor="created-at">Created At :</label>
        <b>
          <i className="created-at">{item.createdAt}</i>
        </b>

        <label htmlFor="finished-at">Finished At :</label>
        <b>
          <i className="finished-at">{item.finishedAt}</i>
        </b>
        <div className="btn-container">
          <button
            type="button"
            className="edit-btn"
            onClick={() => editItem(item.id)}
          >
            <Edit size={15} color="green" />
          </button>
          <button
            type="button"
            className="delete-btn"
            onClick={() => removeItem(item.id)}
          >
            <Delete size={15} color="red" />
          </button>
        </div>
      </article>
    </>
  );
};

export default ToDoItem;
