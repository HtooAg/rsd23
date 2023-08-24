import Item from "./Item";
import Form from "./Form";
import { Container, List, Box } from "@mui/material";
import { useSelector } from "react-redux";

export default function Home() {
  const { tasks, loading, error } = useSelector(state => state.todo);
  return (
    <Container>
      <Box sx={{ mx: { lg: 20, md: 10 } }}>
        {!loading && !error && <Form />}
        <List>
          {tasks
            .filter(task => !task.done)
            .map(task => {
              return <Item key={task._id} task={task} />;
            })}
        </List>
        <List>
          {tasks
            .filter(task => task.done)
            .map(task => {
              return <Item key={task._id} task={task} />;
            })}
        </List>
      </Box>
    </Container>
  );
}
