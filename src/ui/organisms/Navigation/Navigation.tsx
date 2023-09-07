"use client";
import { UserButton, useAuth } from "@clerk/nextjs";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { useGetNavLinks } from "./hooks/useGetNavLinks";
import { NavListMobile } from "./NavListMobile";
import { NavListItem } from "@/ui/atoms/Navigation/NavListItem";
import { ThemeButton } from "@/ui/atoms/ThemeButton";
import { SigninButton } from "@/ui/atoms/SigninButton";
import { CartButton } from "@/ui/atoms/Cart/CartButton";
import { MobileNavigationButton } from "@/ui/atoms/Navigation/MobileNavigationButton";

export const Navigation = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [navLinks] = useGetNavLinks();
	const { isSignedIn } = useAuth();

	return (
		<>
			<header className="relative z-10 border-b-2 bg-white dark:bg-slate-700 dark:text-white">
				<div className="mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
					<div className="flex flex-1 items-center justify-end md:justify-between">
						<nav aria-label="Global" className="hidden md:block">
							<ul className="flex items-center gap-2 text-sm">
								{navLinks.map((item) => (
									<NavListItem key={item.href} item={item} />
								))}
							</ul>
						</nav>

						<div className="flex items-center gap-4">
							<ThemeButton />
							<CartButton quantity={5} />
							{!isSignedIn && <SigninButton />}
							<UserButton afterSignOutUrl="/" />
						</div>

						<MobileNavigationButton setIsMobile={setIsMobile} isMobile={isMobile} />
					</div>
				</div>

				<Transition
					show={isMobile}
					enter="transition ease-in-out duration-300 transform"
					enterFrom="-translate-x-full"
					enterTo="translate-x-0"
					leave="transition ease-in-out duration-300 transform"
					leaveFrom="translate-x-0"
					leaveTo="-translate-x-full"
				>
					<nav className=" absolute z-20 w-full bg-slate-50 pb-3 shadow-xl dark:bg-slate-600 md:hidden">
						<NavListMobile item={navLinks} />
					</nav>
				</Transition>
			</header>
		</>
	);
};
