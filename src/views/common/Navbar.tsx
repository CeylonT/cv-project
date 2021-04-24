import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
  useTheme,
  Grid,
  InputAdornment,
  Divider,
  Typography,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MenuIcon from "@material-ui/icons/Menu";
import { Routes } from "constants/Routes";
import { includes } from "lodash";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import { Sidebar } from "./Sidebar";
import { WhiteTypography } from "../../components/Typographies";
import { StyledTextField } from "components/StyleTextField";
import { exampleStore } from "../../stores/exampleStore";

const StyledAppBar = styled(AppBar)`
  background: white;
  z-index: ${(props) => props.theme.zIndex.drawer + 1};
`;

const StyledToolBar = styled(Toolbar)`
  background: var(--primary-gradient);
`;

const StyledMenuIcon = styled(MenuIcon)`
  color: white;
`;

const NavTitle = styled.p`
  font-family: "Kanit", sans-serif;
  font-size: 18px;
  line-height: 27px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const StyledButton = styled(Button)`
  min-width: 40px;
  height: 40px;
  background-color: var(--bg);
  &:hover {
    background-color: var(--bg);
  }
  box-shadow: unset;
`;

type Props = {
  children: React.ReactNode;
};

export const Navbar = observer((props: Props) => {
  const { children } = props;

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(0);
  const [searchKey, setSearchKey] = useState("");

  const router = useRouter();
  const query = router.query;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));

  const ref = useRef(null);

  useEffect(() => {
    setNavHeight(ref.current.offsetHeight);
  }, [isMobile]);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    window.location.reload();
  };

  const handleChange = (e) => {
    setSearchKey(e.target.value as string);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    router.push({
      pathname: "/",
      query: { ...query, query: searchKey },
    });
  };

  const sidebarHidden = includes(Routes.SIDEBAR_HIDDEN, router.pathname);

  const searchbarShow = includes(Routes.SEARCHBAR_SHOW, router.pathname);

  const publicPath = includes(Routes.PUBLIC, router.pathname);

  return (
    <>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        navHeight={navHeight}
      >
        {children}
      </Sidebar>

      <StyledAppBar position="fixed" elevation={4} ref={ref}>
        <StyledToolBar>
          {publicPath ? (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flex={1}
            >
              <Box display="flex" mr={1}>
                <img src="/static/logo.png" alt="logo" height="48px" />
              </Box>
              <NavTitle>Confidential</NavTitle>
            </Box>
          ) : (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              width="100%"
              height="100%"
            >
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                width="80%"
              >
                <Grid container direction="row" alignItems="center">
                  <Grid item sm={3}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-start"
                      flex={1}
                    >
                      {/* <Box mr={1}>
                        <IconButton
                          edge="start"
                          onClick={() => setSidebarOpen(true)}
                        >
                          <StyledMenuIcon fontSize="large" />
                        </IconButton>
                      </Box> */}
                      <Box display="flex" mr={1}>
                        <img src="/static/logo.png" alt="logo" height="48px" />
                      </Box>
                      <NavTitle>Confidential</NavTitle>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          )}

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flex={1}
          ></Box>
        </StyledToolBar>
      </StyledAppBar>
    </>
  );
});
