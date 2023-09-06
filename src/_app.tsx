"use client";
import { ThemeProvider } from "next-themes";

type AppProps = {
	children: React.ReactNode | React.ReactNode[];
};
export const ThemeController = ({ children }: AppProps) => {
	return (
		<>
			<ThemeProvider>{children}</ThemeProvider>
		</>
	);
};
