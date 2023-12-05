/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { ProgressBar } from "react-loader-spinner";
import { Box } from "@mui/material";

const ErrorFallback = ({ error }) => {
  // Handle failed lazy loading of a JS/CSS chunk.

  useEffect(() => {
    const chunkFailedMessage = /Loading chunk [\d]+ failed/;
    if (error?.message && chunkFailedMessage.test(error.message)) {
      window.location.reload();
    }
  }, [error]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProgressBar
        height="100"
        width="100"
        ariaLabel="progress-bar-loading"
        wrapperClass="progress-bar-wrapper"
        borderColor="#000"
        barColor="rgb(121, 121, 121)"
      />
    </Box>
    // <div>
    //   <p>Something went wrong.</p>
    //   <pre>{error?.message}</pre>
    // </div>
  );
};

export default ErrorFallback;
