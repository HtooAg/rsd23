import {
  Card,
  CardActionArea,
  CardContent,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import { pink, blue } from "@mui/material/colors";
import { formatRelative, parseISO } from "date-fns";
export default function PostCard({ post }) {
  return (
    <Card key={post._id} sx={{ mb: 1 }} variant="outlined">
      <CardActionArea>
        <CardContent sx={{ display: "flex", p: 2 }}>
          <Box sx={{ mr: 3 }}>
            <Avatar
              alt="Profile Picture"
              sx={{
                width: 64,
                height: 64,
                bgcolor: pink[500],
              }}>
              {post.user.name.charAt(0)}
            </Avatar>
          </Box>
          <Box>
            <Box sx={{ mb: 1 }}>
              <Typography sx={{ mr: 1 }} component="span">
                <b>{post.user.name}</b>
              </Typography>

              <Typography component="span" sx={{ color: "grey" }}>
                @{post.user.handle}
              </Typography>

              <Typography component="span" sx={{ ml: 1, color: pink[400] }}>
                <small>
                  {formatRelative(parseISO(post.created), new Date())}
                </small>
              </Typography>
            </Box>

            <Typography variant="subtitle1" color="text.secondary">
              {post.body}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
