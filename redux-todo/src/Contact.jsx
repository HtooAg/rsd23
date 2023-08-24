import { Box, Typography, Avatar } from "@mui/material";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <Container>
      <Box sx={{ mx: { lg: 20, md: 10 } }}>
        <Typography variant="h1">Contact Us</Typography>

        <Box sx={{ display: "flex", my: 3 }}>
          <Avatar sx={{ width: 128, height: 128, mr: 2, bgcolor: "purple" }}>
            A
          </Avatar>
          <Avatar sx={{ width: 128, height: 128, mr: 2, bgcolor: "teal" }}>
            B
          </Avatar>
          <Avatar sx={{ width: 128, height: 128, bgcolor: "brown" }}>C</Avatar>
        </Box>
        <Typography variant="p" sx={{ mb: 2 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et modi
          temporibus esse autem ipsum quasi illum ab aspernatur! Enim ab magni
          error autem eveniet. Illo eum temporibus minima inventore a!
        </Typography>
        <Typography variant="p" sx={{ mb: 2 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et modi
          temporibus esse autem ipsum quasi illum ab aspernatur! Enim ab magni
          error autem eveniet. Illo eum temporibus minima inventore a!
        </Typography>
        <br />
        <Link to={"/"}>Home</Link>
      </Box>
    </Container>
  );
}
