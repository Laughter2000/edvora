import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { tabStyles } from "./components/tabs";

export default extendTheme(
  globalStyles,
  tabStyles,

);
