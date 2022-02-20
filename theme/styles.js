import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {
    primary: "#171717",
    secondary: "#232323",
  },

  styles: {
    global: (props) => ({
      body: {
        bg: '#232323',
        fontFamily: 'Inter, sans-serif'
      },
      html: {
        fontFamily: 'Inter, sans-serif'
      },
    }),  
  },

};
