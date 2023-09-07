"use client";

import { ThemeProvider } from "next-themes";

type ProvidersProps = {
	children: React.ReactNode | React.ReactNode[];
};

const Providers = ({ children }: ProvidersProps) => {
	return (
		<>
			<ThemeProvider attribute="class">{children}</ThemeProvider>
		</>
	);
};

export default Providers;
