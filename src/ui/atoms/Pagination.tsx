import Link from "next/link";
import { getPaginationDetails } from "@/api/getPaginationDetails";

type PaginationProps = {};

export const Pagination = async ({}: PaginationProps) => {
	const paginationDetails = await getPaginationDetails();
	if (!paginationDetails.products?.meta) return <h1>No more pages</h1>;
	const { pagination } = paginationDetails.products?.meta;
	const pages = Array.from(Array(pagination.pageCount + 1).keys()).slice(1);

	return (
		<>
			<section className="mt-10 flex w-72  gap-2 overflow-x-scroll px-10 pb-5 md:w-1/2 md:justify-center md:overflow-x-hidden">
				{pages.map((page) => (
					<Link
						className="shrink-0 rounded-md border-2 border-gray-300 px-5 py-3 transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
						key={page}
						href={{ pathname: `/products/${page}` }}
					>
						{page}
					</Link>
				))}
			</section>
		</>
	);
};
