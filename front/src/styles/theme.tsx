import { ThemeProvider } from "styled-components";

interface Children {
  children: any
}

export const GlobalTheme = ({ children }: Children) => {
	const colorChip = {
		yellow: {
			color: "#1E90FF",
			hover: "#FFAF00",
		},
		black: {
			color: "#000000",
		},
	};

	return <ThemeProvider theme={colorChip}>{children}</ThemeProvider>;
};
