"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
export const ThemeButton = () => {
	const [isMounted, setIsMounted] = useState(false);
	const [isDarkMode, setDarkMode] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => setIsMounted(true), []);
	const toggleDarkMode = (checked: boolean) => {
		setDarkMode(checked);
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	};
	if (!isMounted) return null;
	return (
		<DarkModeSwitch
			sunColor="black"
			moonColor="white"
			checked={isDarkMode}
			onChange={toggleDarkMode}
			size={30}
		/>
	);
};
