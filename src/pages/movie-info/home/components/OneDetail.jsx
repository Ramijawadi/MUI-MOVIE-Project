import { Box, Typography } from "@mui/material";
import React from "react";

const OneDetail = ({ title, content }) => {
  return (
    <Box my={3}>
      <Typography component="p" variant="body1" color="text.secondary">
        {title}
      </Typography>

      {typeof content === "string" ? (
        <Typography
          component="div"
          variant="h6"
          color="text.primary"
          ml={2.5}
        >
          {content}
        </Typography>
      ) : (
        content
      )}
    </Box>
  );
};

export default OneDetail;
