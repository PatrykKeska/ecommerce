import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { type NavListItemType } from "../NavItems.type";
import { HomeIcon } from "@/assets/icons/HomeIcon";
import { ClothesIcon } from "@/assets/icons/ClothesIcon";
import { ElectronicsIcon } from "@/assets/icons/ElectronicsIcon";
import { ShoesIcon } from "@/assets/icons/ShoesIcon";
import { AllIcon } from "@/assets/icons/AllIcon";
import { TshirtIcon } from "@/assets/icons/TshirtIcon";
import { ShirtIcon } from "@/assets/icons/ShirtIcon";
import { PantsIcon } from "@/assets/icons/PantsIcon";

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
		label: "Sweters",
		href: "/category/sweters",
		active: false,
		icon: <ClothesIcon />,
	},
	{
		label: "Pants",
		href: "/category/pants",
		active: false,
		icon: <PantsIcon />,
	},
	{
		label: "T-Shirts",
		href: "/category/t-shirts",
		active: false,
		icon: <TshirtIcon />,
	},
	{
		label: "Shirts",
		href: "/category/shirts",
		active: false,
		icon: <ShirtIcon />,
	},

	{
		label: "Shoes",
		href: "/category/shoes",
		active: false,
		icon: <ShoesIcon />,
	},
	{
		label: "Electonics",
		href: "/category/electonics",
		active: false,
		icon: <ElectronicsIcon />,
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
				// /products/should handle all numbers here and not just 1

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
