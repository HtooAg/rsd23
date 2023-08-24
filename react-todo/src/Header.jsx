import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Badge,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import {
  List as ListIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  MoreVert as MoreVertIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

import { useContext, useState } from "react";
import { ThemeContext } from "./ThemedApp";

export default function Header({ count, clear, toggleDrawer }) {
  const { mode, setMode } = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Box sx={{ flexGrow: 1, mb: 3 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton onClick={toggleDrawer()}>
              <MenuIcon />
            </IconButton>
            <Badge badgeContent={count} color="error" sx={{ ml: 2 }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                TodoApp
              </Typography>
            </Badge>
          </Box>
          {mode === "dark" ? (
            <IconButton onClick={() => setMode("light")}>
              <LightModeIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => setMode("dark")}>
              <DarkModeIcon />
            </IconButton>
          )}
          <IconButton onClick={e => setShowMenu(e.currentTarget)}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={showMenu}
            open={Boolean(showMenu)}
            onClose={() => setShowMenu(false)}>
            <MenuItem
              onClick={() => {
                clear();
                setShowMenu(false);
              }}
              sx={{ width: 200 }}>
              Clear
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
