import { CloseIcon } from "@/assets/icons/CloseIcon";
import { StackIcon } from "@/assets/icons/StackIcon";

type MobileNavigationButtonProps = {
	setIsMobile: (arg: boolean) => void;
	isMobile: boolean;
};

export const MobileNavigationButton = ({ setIsMobile, isMobile }: MobileNavigationButtonProps) => {
	return (
		<>
			<button
				onClick={() => setIsMobile(!isMobile)}
				className="ml-2 block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-slate-900 dark:text-white md:hidden"
			>
				<span className="sr-only">Toggle menu</span>
				{isMobile ? <CloseIcon /> : <StackIcon />}
			</button>
		</>
	);
};
