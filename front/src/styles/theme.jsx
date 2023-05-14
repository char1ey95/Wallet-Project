import { ThemeProvider } from "styled-components"

export const GlobalTheme = ({ children }) => {
  const colorChip = {
    yellow: {
      color: "#FFD700",
      hover: "#FFAF00",
    }
  }
  
    return (
        <ThemeProvider theme={colorChip}>{children}</ThemeProvider>
    )
  }