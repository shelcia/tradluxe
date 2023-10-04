import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitter,
} from "react-icons/tb";
import { FaRegCopyright } from "react-icons/fa";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff",
    borderRadius: "40px",
    padding: "6px 6px 6px 24px",
    border: "none",
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

const Footer = () => {
  return (
    <>
      <Container sx={{ mt: 8, pb: 5 }}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Typography
              component={"h1"}
              sx={{
                color: "#0F0F0F",
                fontFamily: "'Playfair Display', sans-serif",
                fontSize: "32px",
                fontWeight: 400,
                lineHeight: "130%",
              }}
            >
              Get Our Latest
            </Typography>

            <Typography
              component={"h1"}
              sx={{
                color: "#0F0F0F",
                fontFamily: "'Playfair Display', sans-serif",
                fontSize: "48px",
                fontWeight: 400,
                lineHeight: "130%",
              }}
            >
              News & Updates
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <CssTextField
              size="small"
              color="secondary"
              fullWidth
              placeholder="Enter email address"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FiMail />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{
                        background:
                          "linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(94deg, #ABABAB -8.85%, #B7B7B7 32.41%, #EDEDED 56.97%, #B2B2B2 76.57%, #797979 103.05%)",
                      }}
                    >
                      <FiArrowUpRight />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Divider
          component="div"
          role="presentation"
          sx={{
            mt: 6,
            "&:before": {
              borderTop: "1px solid #393939",
            },
            "&:after": {
              borderTop: "1px solid #393939",
            },
          }}
        >
          <Typography variant="h3" sx={{ color: "#333333" }}>
            <TbBrandFacebook />
            <TbBrandInstagram />
            <TbBrandTwitter />
            <TbBrandLinkedin />
          </Typography>
        </Divider>
        <Box
          sx={{
            textAlign: "center",
            mt: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant="h6">
            Copyright <FaRegCopyright style={{ verticalAlign: "center" }} />{" "}
            2023 Tradluxe
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
