"use client";

import { type NavListItemType } from "./NavItems.type";
import { NavListItem } from "@/ui/atoms/NavListItem/NavListItem";

type NavListMobileType = {
	item: NavListItemType[];
};

export const NavListMobile = ({ item }: NavListMobileType) => {
	return (
		<ul>
			{item.map((item) => (
				<NavListItem key={item.href} mobile item={item} />
			))}
		</ul>
	);
};
