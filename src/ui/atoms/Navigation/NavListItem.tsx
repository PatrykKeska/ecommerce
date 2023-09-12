import { NavListWrapperitem } from "./navListItemWrapper";
import { ActiveLink } from "./ActiveLink";

type NavItemProps = {
	item: {
		label: string;
		href: string;
		active: boolean;
		icon: JSX.Element;
	};
	mobile?: boolean;
};

export const NavListItem = ({ mobile, item: { label, href, active, icon } }: NavItemProps) => {
	return (
		<>
			{!mobile ? (
				<NavListWrapperitem>
					<ActiveLink item={{ label, href, active, icon }} />
				</NavListWrapperitem>
			) : (
				<NavListWrapperitem mobile>
					<ActiveLink mobile item={{ label, href, active, icon }} />
				</NavListWrapperitem>
			)}
		</>
	);
};
