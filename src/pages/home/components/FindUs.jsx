import React, { useContext } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { ShopUsContext } from "../../../context/ShopUsContext";
import { Link } from "react-router-dom";

const FindUs = () => {
  const [brands] = useContext(ShopUsContext);
  return (
    <Container sx={{ pt: 3 }}>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {brands.map((itm, idx) => (
          <Grid item xs={itm.xs} md={itm.md} key={idx}>
            <Item>
              <Typography
                component={"h2"}
                sx={{
                  color: "#5B5B5B",
                  fontFamily: "'Playfair Display', sans-serif",
                  fontSize: "24px",
                  fontWeight: 500,
                  lineHeight: "33px",
                }}
              >
                {itm.category}
              </Typography>

              {(12 / itm.brands.length) % 2 !== 0 ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "space-between" },
                    width: "100%",
                    flexDirection: { xs: "column", md: "row" },
                    // flexWrap: { xs: "wrap", md: "nowrap" },
                    // alignItems: { xs: "center", md: "inherit" },
                  }}
                >
                  {itm.brands.map((brand, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: 1,
                        height: "128px",
                      }}
                    >
                      <img
                        src={brand.image}
                        alt={`${brand.name}'s logo`}
                        style={{ textAlign: "center" }}
                      />
                      <Link to={brand.link}>
                        <Typography
                          sx={{
                            color: "#5B5B5B",
                            textAlign: "center",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "130%",
                          }}
                        >
                          {brand.name}
                        </Typography>
                      </Link>
                    </Box>
                  ))}
                </Box>
              ) : (
                <Grid container spacing={2}>
                  {itm.brands.map((brand, idx) => (
                    <Grid
                      item
                      xs={12}
                      md={parseInt(12 / itm.brands.length)}
                      key={idx}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: 1,
                        height: "128px",
                      }}
                    >
                      <img
                        src={brand.image}
                        alt={`${brand.name}'s logo`}
                        style={{ textAlign: "center" }}
                      />
                      <Link to={brand.link}>
                        <Typography
                          sx={{
                            color: "#5B5B5B",
                            textAlign: "center",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "130%",
                          }}
                        >
                          {brand.name}
                        </Typography>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Item>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FindUs;

// eslint-disable-next-line react/prop-types
const Item = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#F8F8F8",
        borderRadius: "30px",
        display: "flex",
        padding: "32px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "27px",
      }}
    >
      {children}
    </Box>
  );
};
