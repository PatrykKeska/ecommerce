import { CollectionGrid } from "@/ui/organisms/CollectionGrid/CollectionGrid";
import { EllectronicCollectionGrid } from "@/ui/organisms/CollectionGrid/ElectronicCollectionGrid";

export default function Home() {
	return (
		<>
			<main className="flex min-h-screen w-full flex-col items-center justify-between p-5 md:p-7">
				<CollectionGrid />
				<EllectronicCollectionGrid />
			</main>
		</>
	);
}
