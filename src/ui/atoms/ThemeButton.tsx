"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { DarkModeIcon } from "@/assets/icons/darkModeIcon";
import { LightModeIcon } from "@/assets/icons/LightModeIcon";
export const ThemeButton = () => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => setIsMounted(true), []);

	const { resolvedTheme, setTheme } = useTheme();
	if (!isMounted) return null;

	return (
		<button
			className={clsx(
				` transition-all duration-300 ease-in-out  opacity-0${isMounted && "opacity-100"}}`,
			)}
			onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
		>
			{resolvedTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
		</button>
	);
};
