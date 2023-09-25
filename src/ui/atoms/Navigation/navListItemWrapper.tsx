type NavListWrapperitemProps = {
	mobile?: boolean;
	children: React.ReactNode;
};

export const NavListWrapperitem = ({ children, mobile }: NavListWrapperitemProps) => {
	return (
		<>
			{!mobile && (
				<li className="flex w-28 min-w-[100px] flex-grow items-center justify-center">
					{children}
				</li>
			)}
			{mobile && <li className="flex w-full flex-grow items-center justify-center">{children} </li>}
		</>
	);
};
