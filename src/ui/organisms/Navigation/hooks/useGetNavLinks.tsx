import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { type NavListItemType } from "../NavItems.type";
import { HomeIcon } from "@/assets/icons/HomeIcon";
import { ClothesIcon } from "@/assets/icons/ClothesIcon";
import { ElectronicsIcon } from "@/assets/icons/ElectronicsIcon";
import { ShoesIcon } from "@/assets/icons/ShoesIcon";
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
		href: "/products",
		active: false,
		icon: <AllIcon />,
	},
	{
		label: "Clothes",
		href: "/category/clothes",
		active: false,
		icon: <ClothesIcon />,
	},
	{
		label: "Electonics",
		href: "/category/electonics",
		active: false,
		icon: <ElectronicsIcon />,
	},
	{
		label: "Shoes",
		href: "/category/shoes",
		active: false,
		icon: <ShoesIcon />,
	},
	{
		label: "Components",
		href: "/test-components",
		active: false,
		icon: <ShoesIcon />,
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
