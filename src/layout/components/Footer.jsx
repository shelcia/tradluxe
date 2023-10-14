import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Tooltip,
  Typography,
  useMediaQuery,
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
import { CustomTextFieldRounded } from "../../components/CustomTextField";

const Footer = () => {
  const tabMatches = useMediaQuery("(min-width:900px)");

  const icons = [
    {
      icon: <TbBrandFacebook />,
      link: "https://www.facebook.com/TradluxeSingapore",
      tooltip: "Facebook",
    },
    {
      icon: <TbBrandInstagram />,
      link: "https://www.instagram.com/TradluxeSingapore/",
      tooltip: "Instagram",
    },
    {
      icon: <TbBrandTwitter />,
      link: "https://www.facebook.com/TradluxeSingapore",
      tooltip: "Twitter",
    },
    {
      icon: <TbBrandLinkedin />,
      link: "https://www.facebook.com/TradluxeSingapore",
      tooltip: "Linkedin",
    },
  ];

  return (
    <>
      <Container sx={{ mt: 8, pb: 5 }} data-aos="fade-up">
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
          <Grid item md={6} xs={12} sx={{ mt: tabMatches ? 0 : 5 }}>
            <CustomTextFieldRounded
              size="small"
              color="secondary"
              fullWidth
              placeholder="Enter email address"
              type="email"
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
          <Typography
            variant="h3"
            sx={{
              color: "#333333",
            }}
          >
            {icons.map((icon, idx) => (
              <Tooltip title={icon.tooltip} key={idx}>
                <IconButton
                  sx={{
                    padding: "4px",
                  }}
                  component={Link}
                  href={icon.link}
                  target="_blank"
                >
                  {React.cloneElement(icon.icon, {
                    style: {
                      width: "1.875rem",
                      height: "1.875rem",
                      color: "#333333",
                      strokeWidth: "1.5",
                    },
                  })}
                </IconButton>
              </Tooltip>
            ))}
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
