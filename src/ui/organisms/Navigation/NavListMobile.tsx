"use client";

import { type NavListItemType } from "./NavItems.type";
import { NavListItem } from "@/ui/atoms/NavListItem/NavListItem";

type NavListMobileType = {
	item: NavListItemType[];
};

export const NavListMobile = ({ item }: NavListMobileType) => {
	return (
		<ul className="md:hidden">
			{item.map(({ href, label, active }) => (
				<NavListItem key={href} mobile item={{ active, href, label }} />
			))}
		</ul>
	);
};
