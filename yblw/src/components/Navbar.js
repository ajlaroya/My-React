import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
            margin: "0 20px",
            overflow: "hidden",
            borderRadius: "50%",
            border: "2px solid",
            borderColor: "#FF5349",
            padding: "1px",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>
      </Link>
      <Stack direction="row" gap="40px" fontSize="20px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "2px solid #FF5349",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212", borderBottom: "3px solid #FFF", }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
