import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  CheckBoxOutlineBlank as TodoIcon,
  Check as CheckIcon,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { toggle, del } from "./features/todo/todoSlice";
export default function Item({ task }) {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <ListItemIcon>
        <IconButton
          onClick={() => {
            dispatch(toggle(task._id));
          }}>
          {task.done ? <CheckIcon color="success" /> : <TodoIcon />}
        </IconButton>
      </ListItemIcon>
      <ListItemText primary={task.subject}></ListItemText>
      <ListItemIcon>
        <IconButton
          onClick={() => {
            dispatch(del(task._id));
          }}>
          <DeleteIcon color="error"></DeleteIcon>
        </IconButton>
      </ListItemIcon>
    </ListItem>
  );
}
