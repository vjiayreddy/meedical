import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ToolBar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import { MENUS_DATA } from "../../data";
import Grid from "@mui/material/Grid";
import UiIconButton from "../iconButton/iconButton";
import UiSvgIcon from "../svgIcon/svgIcon";

const StyledLogoWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexGrow: 1,
  },
}));

const StyledNavigationBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const StyledTabs = styled(Tabs)(() => ({
  height: "100%",
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));

const UiAppBar = () => {
  const [tabIndex, setTabIndex] = useState<any>(false);
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue);
  };

  return (
    <AppBar position="sticky">
      <ToolBar disableGutters>
        <StyledLogoWrapper>
          <Typography variant="h6">LOGO</Typography>
        </StyledLogoWrapper>
        <StyledNavigationBox flexGrow={1}>
          <StyledTabs value={tabIndex} onChange={handleTabChange}>
            {MENUS_DATA.map((menu, index) => (
              <Tab key={index} label={menu} />
            ))}
          </StyledTabs>
        </StyledNavigationBox>
        <Box>
          <Grid container spacing={1}>
            <Grid item>
              <UiIconButton size="small">
                <UiSvgIcon fontSize="small" iconName="SEARCH_ICON" />
              </UiIconButton>
            </Grid>
            <Grid item>
              <UiIconButton size="small">
                <UiSvgIcon fontSize="small" iconName="USER_ICON" />
              </UiIconButton>
            </Grid>
            <Grid item>
              <UiIconButton size="small">
                <UiSvgIcon fontSize="small" iconName="CART_ICON" />
              </UiIconButton>
            </Grid>
          </Grid>
        </Box>
      </ToolBar>
    </AppBar>
  );
};
export default UiAppBar;
