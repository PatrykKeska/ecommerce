import clsx from "clsx";
import Link from "next/link";
import { NavListWrapperitem } from "./navListItemWrapper";

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
					<Link
						className={clsx(
							` rounded-md ${active && "bg-slate-600 dark:bg-slate-900"} ${
								active && "text-white"
							} hover:bg-text-white animate-fadeDown flex w-full flex-col items-center  gap-1 px-3 py-1 text-center text-gray-500 transition-all duration-300 ease-in-out hover:bg-slate-600 hover:text-white dark:text-white dark:hover:bg-slate-900`,
						)}
						href={href}
					>
						{icon}
						{label}
					</Link>
				</NavListWrapperitem>
			) : (
				<NavListWrapperitem mobile>
					<Link
						href={href}
						className={clsx(
							`flex w-full items-center gap-2  bg-slate-50 dark:bg-slate-600 ${
								active && "bg-slate-600 dark:bg-slate-800"
							}
                            ${active && "text-white"}
                            px-4 py-3 `,
						)}
					>
						<span className="font-mediu flex items-center gap-3 text-sm">
							{icon}
							{label}
						</span>
					</Link>
				</NavListWrapperitem>
			)}
		</>
	);
};
