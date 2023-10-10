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
		label: "Sweaters",
		href: "/swetears/1",
		active: false,
		icon: <ClothesIcon />,
	},
	{
		label: "Pants",
		href: "/pants/1",
		active: false,
		icon: <PantsIcon />,
	},
	{
		label: "T-Shirts",
		href: "/t-shirts/1",
		active: false,
		icon: <TshirtIcon />,
	},
	{
		label: "Shirts",
		href: "/shirts/1",
		active: false,
		icon: <ShirtIcon />,
	},

	{
		label: "Shoes",
		href: "/shoes/1",
		active: false,
		icon: <ShoesIcon />,
	},
	{
		label: "Electonics",
		href: "/electronics/1",
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
