import { Box, Link } from "@mui/material";
import React, { useEffect } from "react";
import { IconSidebarContainer } from "./IconSidebarContainer";
import { useAppRegister } from "@hooks/useAppRegister";
import { appList } from "@features/contents/registerApps";
import { GitHubIcon } from "@assets/Icons/GitHubIcon";

type AppContentProps = {
  children: React.ReactNode;
};

export const AppContent: React.FC<AppContentProps> = ({ children }) => {
  const { registerApp, unregisterApp } = useAppRegister();

  useEffect(() => {
    appList.forEach((app) => registerApp(app));
    return () => {
      appList.forEach((app) => unregisterApp(app.id));
    };
  }, [registerApp, unregisterApp]);

  return (
    <Box
      display="flex"
      justifyContent="left"
      height="100vh"
      width="100%"
      overflow="hidden"
    >
      <Box component="nav">
        <IconSidebarContainer />
      </Box>

      <Box
        flexGrow={1}
        height="100%"
        sx={{ overflowY: "scroll", overflowX: "hidden" }}
      >
        {children}
      </Box>
      <Link
        href="https://github.com/s-hiraoku/figma-gitlab-bridge"
        className="github-corner"
        aria-label="GitHubでソースコードを表示する"
        underline="none"
      >
        <GitHubIcon />
      </Link>
    </Box>
  );
};
