import { ThemeProvider } from "styled-components"

export const GlobalTheme = ({ children }) => {
  const colorChip = {
    yellow: {
      color: "#FFD700",
      hover: "#FFAF00",
    },
    black: {
      color: "#000000"
    }
  }
  
    return (
        <ThemeProvider theme={colorChip}>{children}</ThemeProvider>
    )
  }