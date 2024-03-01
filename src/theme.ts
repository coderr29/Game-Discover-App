import { extendTheme,ThemeConfig } from "@chakra-ui/react";
import React from 'react'

const config: ThemeConfig = {
  initialColorMode: 'dark'
};

const theme= extendTheme({config});

export default theme;
