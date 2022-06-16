import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
        borderRadius: "30px",
        background: "#ffffff",
        boxShadow: "5px 5px 12px #dedede, -5px -5px 12px #ffffff",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
