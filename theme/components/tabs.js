export const tabStyles = {
    components: {
      Tabs: {
        variants: {
          unstyled: {
            _selected: {
                color: 'white', 
                fontWeight: "700", 
                borderBottomColor: "white", 
                borderBottomWidth: "2px" 
            },
            _focus:{borderColor: "none"}
          },
        },
        //   "transparent-with-icon": {
        //     bg: "transparent",
        //     fontWeight: "bold",
        //     borderRadius: "inherit",
        //     cursor: "pointer",
        //     _hover: "none",
        //     _active: {
        //       bgColor: "none",
        //       color: "none",
        //       transform: "none",
        //       borderColor: "transparent",
        //     },
        //     _focus: {
        //       boxShadow: "none",
        //       color: "none",
        //       bgColor: "none"
        //     },
        //     _hover: {
        //       boxShadow: "none",
        //       color: "none",
        //       bgColor: "none"
        //     },
        //   },
        // },
        baseStyle: {
            colorScheme: "green",
          _selected: {
            color: 'white', 
            fontWeight: "700", 
            borderBottomColor: "white", 
            borderBottomWidth: "2px" 
        },
        _focus: {borderColor: "none"}
        },

        defaultProps: {
            colorScheme: "red",
            variant: 'unstyled',
          },
      },
    },
  };
  