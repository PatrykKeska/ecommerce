import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { type NavListItemType } from "../NavItems.type";
import { HomeIcon } from "@/assets/icons/HomeIcon";
import { ClothesIcon } from "@/assets/icons/ClothesIcon";
import { AllIcon } from "@/assets/icons/AllIcon";

const navItems = [
	{
		label: "Home",
		href: "/",
		active: false,
		icon: <HomeIcon />,
	},
	{
		label: "All",
		href: "/products/1",
		active: false,
		icon: <AllIcon />,
	},
	{
		label: "Categories",
		href: "/categories",
		active: false,
		icon: <ClothesIcon />,
	},
];

export const useGetNavLinks = () => {
	const [navLinks, setNavLinks] = useState<NavListItemType[]>(navItems);
	const pathname = usePathname();
	useEffect(() => {
		setNavLinks((prev) => {
			return prev.map((item) => {
				if (item.href === pathname || (pathname.includes(item.href) && item.href !== "/")) {
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
