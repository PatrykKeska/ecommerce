import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { type NavListItemType } from "../NavItems.type";

const navItems = [
	{
		label: "Home",
		href: "/",
		active: false,
	},
	{
		label: "All",
		href: "/products",
		active: false,
	},
	{
		label: "Clothes",
		href: "/category/clothes",
		active: false,
	},
	{
		label: "Electonics",
		href: "/category/electonics",
		active: false,
	},
	{
		label: "Shoes",
		href: "/category/shoes",
		active: false,
	},
	{
		label: "Components",
		href: "/test-components",
		active: false,
	},
];

export const useGetNavLinks = () => {
	const [navLinks, setNavLinks] = useState<NavListItemType[]>(navItems);
	const pathname = usePathname();
	useEffect(() => {
		setNavLinks((prev) => {
			return prev.map((item) => {
				if (item.href === pathname) {
					item.active = true;
				} else {
					item.active = false;
				}
				return item;
			});
		});
	}, [pathname]);
	return [navLinks];
};
