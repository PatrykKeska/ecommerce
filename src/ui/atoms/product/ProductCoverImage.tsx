import Image from "next/image";

type ProductCoverImageType = {
	url: string | undefined;
	alt: string;
};

export const ProductCoverImage = ({ url, alt }: ProductCoverImageType) => {
	return (
		<>
			<div className="overflow-hiddenmd:h-64 relative h-52 w-full md:w-72">
				<Image
					className="rounded-sm bg-white object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
					fill={true}
					unoptimized={true}
					src={url ? url : "/images/placeholder.png"}
					alt={alt}
				/>
			</div>
		</>
	);
};
