import clsx from "clsx";
import Link from "next/link";
import { NavListWrapperitem } from "./navListItemWrapper";

type NavItemProps = {
	item: {
		label: string;
		href: string;
		active: boolean;
	};
	mobile?: boolean;
};

export const NavListItem = ({ mobile, item: { label, href, active } }: NavItemProps) => {
	return (
		<>
			{!mobile ? (
				<NavListWrapperitem>
					<Link
						className={clsx(
							`rounded-md ${active && "bg-slate-600 dark:bg-slate-900"} ${
								active && "text-white"
							} hover:bg-text-white w-full p-2 text-center text-gray-500 transition-all  duration-300 ease-in-out hover:bg-slate-600 hover:text-white dark:text-white dark:hover:bg-slate-900`,
						)}
						href={href}
					>
						{label}
					</Link>
				</NavListWrapperitem>
			) : (
				<NavListWrapperitem mobile>
					<Link
						href={href}
						className={clsx(
							`flex w-full items-center gap-2 border-s-[3px] border-blue-300 bg-slate-50 dark:bg-slate-600 ${
								active && "bg-slate-600 dark:bg-slate-800"
							}
                            ${active && "text-white"}
                            px-4 py-3 `,
						)}
					>
						<span className="text-sm font-medium"> {label} </span>
					</Link>
				</NavListWrapperitem>
			)}
		</>
	);
};
