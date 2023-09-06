export const Loader = () => {
	return (
		<>
			<div className="flex h-full w-full items-center justify-center">
				<div className="relative h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900 dark:border-gray-200"></div>
				<span className=" absolute animate-bounce text-gray-900 dark:text-white">Loading...</span>
			</div>
		</>
	);
};
