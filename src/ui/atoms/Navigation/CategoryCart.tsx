import NextImage from "next/image";
import Link from "next/link";
type CategoryCartProps = {
	pathname: string;
	coverImage: string;
	label: string;
};

export const CategoryCart = ({ pathname, coverImage, label }: CategoryCartProps) => {
	return (
		<>
			<li className="group" key={pathname}>
				<Link href={{ pathname: pathname }}>
					<div className="relative h-80 w-full max-w-2xl overflow-hidden rounded-md md:h-80 lg:h-96 ">
						<NextImage
							className="rounded-sm bg-white object-cover transition-all duration-300 ease-in-out group-hover:rotate-3 group-hover:scale-110"
							fill={true}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							quality={80}
							src={coverImage}
							alt={label}
						/>
						<span className="absolute bottom-5 right-5 rounded-md bg-black/50 px-8 py-3 text-2xl font-bold text-white dark:bg-white/90 dark:text-black">
							{label}
						</span>
					</div>
				</Link>
			</li>
		</>
	);
};
