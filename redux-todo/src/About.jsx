import { Box, Typography, Avatar } from "@mui/material";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Container>
      <Box sx={{ mx: { lg: 20, md: 10 } }}>
        <Typography variant="h1">About Us</Typography>
        <Typography variant="p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et modi
          temporibus esse autem ipsum quasi illum ab aspernatur! Enim ab magni
          error autem eveniet. Illo eum temporibus minima inventore a!
        </Typography>
        <Box sx={{ display: "flex", my: 3 }}>
          <Avatar sx={{ mr: 1, bgcolor: "purple" }}>A</Avatar>
          <Avatar sx={{ mr: 1, bgcolor: "teal" }}>B</Avatar>
          <Avatar sx={{ bgcolor: "brown" }}>C</Avatar>
        </Box>
        <Link to={"/"}>Home</Link>
      </Box>
    </Container>
  );
}
