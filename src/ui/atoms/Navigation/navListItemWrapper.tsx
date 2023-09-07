type NavListWrapperitemProps = {
	mobile?: boolean;
	children: React.ReactNode;
};

export const NavListWrapperitem = ({ children, mobile }: NavListWrapperitemProps) => {
	return (
		<>
			{!mobile && <li className="flex w-24 flex-grow items-center justify-center">{children}</li>}
			{mobile && <li className="flex w-full flex-grow items-center justify-center">{children} </li>}
		</>
	);
};
