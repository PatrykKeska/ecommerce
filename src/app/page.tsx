import { ResponseModal } from "@/ui/molecules/ReponseModal";

export default function Home() {
	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-between p-5 md:p-7">
			<ResponseModal type="fail" />
			<ResponseModal type="success" />
		</main>
	);
}
