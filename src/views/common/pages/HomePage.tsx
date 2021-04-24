import React, { useState } from "react";
import { Box, Typography, Paper, Grid, Button } from "@material-ui/core";
import { Limit } from "../Limit";
import { WhiteBox } from "components/Boxes";
import { warpGanService } from "services/warpGanService";
import Image from "svgs/image.svg";

export const HomePage = () => {
  const [resultSrc, setResultSrc] = useState<string>("");
  const [sourceSrc, setSourceSrc] = useState<string>("");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setSourceSrc(URL.createObjectURL(file));
      const data = await warpGanService.uploadImage(file);
      setResultSrc(data);
    }
  };

  return (
    <Box
      display="flex"
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <WhiteBox
        display="flex"
        minWidth="1280px"
        flexDirection="column"
        my={2}
        p={5}
      >
        <Box py={2}>
          <Typography variant="h2">
            <b>Warp GAN</b>
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" width="100%">
          <Box display="flex" py={1} mb={3}>
            <Box pr={2} minWidth="50%" minHeight="300px">
              {!sourceSrc ? (
                <Paper style={{ height: "100%" }} variant="outlined">
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{ height: "100%" }}
                  >
                    <Image style={{ width: "40px", height: "40px" }} />
                    <Typography variant="body2" color="textPrimary">
                      Upload Image
                    </Typography>
                  </Grid>
                </Paper>
              ) : (
                <img src={sourceSrc} style={{ width: "100%" }} />
              )}
            </Box>

            <Box pl={2} minWidth="50%" minHeight="300px">
              {!resultSrc ? (
                <Paper style={{ height: "100%" }} variant="outlined">
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{ height: "100%" }}
                  >
                    <Image style={{ width: "40px", height: "40px" }} />
                    <Typography variant="body2" color="textPrimary">
                      Result Image
                    </Typography>
                  </Grid>
                </Paper>
              ) : (
                <img
                  src={`data:image/png;base64,${resultSrc}`}
                  style={{ width: "100%" }}
                />
              )}
            </Box>
          </Box>

          <Box py={1}>
            <input
              style={{ display: "none" }}
              id="contained-button-file"
              type="file"
              accept="image/*"
              onChange={(e) => handleUpload(e)}
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                fullWidth
              >
                <b>{resultSrc ? "Upload New Image?" : "Upload Image"}</b>
              </Button>
            </label>
          </Box>
          {!!resultSrc && (
            <Box py={1}>
              <a
                download="result.png"
                href={`data:image/png;base64,${resultSrc}`}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  component="span"
                  fullWidth
                >
                  <b>Download Image</b>
                </Button>
              </a>
            </Box>
          )}
        </Box>
      </WhiteBox>
    </Box>
  );
};
