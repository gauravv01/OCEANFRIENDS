import * as React from "react";
import styles from "./Index.module.css";

import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import MenuIcon from "@mui/icons-material/Menu";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Icons = [
  {
    icon: <HomeIcon />,
    key: 1,
    path: "/",
  },
  {
    icon: <CheckBoxOutlineBlankIcon />,
    key: 2,
    path: "/catalogue",
  },
  {
    icon: <HistoryIcon />,
    key: 3,
    path: "/history",
  },
  {
    icon: <MenuIcon />,
    key: 4,
  },
];

export default function Navigation({ position, bottom }) {
  const navigate = useNavigate();
  const [selection, setSelection] = React.useState([true, false, false, false]);

  const onchange = (index) => {
    if (Icons[index].path) {
      navigate(Icons[index].path);
    }
    const arr = new Array(selection.length).fill(false);
    arr[index] = true;
    setSelection(arr);
  };

  return (
    <div className={styles.main} style={{ position: position, bottom: bottom }}>
      <div className={styles.iconContainer}>
        {Icons.map((item, index) => {
          return (
            <div
              key={item.key}
              onClick={onchange.bind(null, index)}
              className={styles.icon}
              style={{
                background: selection[index]
                  ? "linear-gradient(180deg, #5F97FF 0%, #735BFD 100%)"
                  : "inherit",
                color: selection[index] ? "white" : "#7A91D2",
              }}>
              {item.icon}
            </div>
          );
        })}
      </div>
    </div>
  );
}
