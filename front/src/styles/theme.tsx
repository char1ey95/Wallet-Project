import { ThemeProvider } from "styled-components";

interface Children {
	children: any
}

export const GlobalTheme = ({ children }: Children) => {
	const colorChip = {
		main: { color: "#1E90FF", hover: "#FFAF00" },
		white: "#d5d5d5",
		black: "#020202",
		grey: "#9d9d9d",
		font: "Gmarket",
		InputBorder: "#446df5"
	};

	return <ThemeProvider theme={colorChip}>{children}</ThemeProvider>;
};
