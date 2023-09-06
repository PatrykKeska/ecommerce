import Image from "next/image";

type ProductCoverImageProps = {
	alt: string;
	src: string;
};

export const ProductCoverImage = ({ alt, src }: ProductCoverImageProps) => {
	return (
		<>
			<div className="relative h-52 w-60 overflow-hidden md:h-64 md:w-72">
				<Image
					className="object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
					fill={true}
					unoptimized={true}
					src={src}
					alt={alt}
				/>
			</div>
		</>
	);
};
