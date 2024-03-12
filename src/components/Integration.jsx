import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme, checked }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: checked
      ? theme.palette.mode === "dark"
        ? "#2ECA45"
        : "#65C466"
      : "#FF6B6B",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Integration = () => {
  const [checked, setChecked] = useState({
    office365: true,
    github: true,
    weatherApi: true,
    philipsHue: false,
  });

  const handleToggle = (value) => {
    setChecked({ ...checked, [value]: !checked[value] });
  };

  return (
    <List>
      {["Office 365", "GitHub", "Weather API", "Philips Hue"].map((text) => {
        const key = text.toLowerCase().replace(/\s/g, "");
        return (
          <ListItem key={text}>
            <ListItemText primary={text} />
            <ListItemSecondaryAction>
              <FormControlLabel
                control={
                  <IOSSwitch
                    checked={checked[key]}
                    onChange={() => handleToggle(key)}
                  />
                }
                label=""
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Integration;
