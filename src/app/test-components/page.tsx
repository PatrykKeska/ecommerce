import { SearchInput } from "@/ui/atoms/Input/SearchInput";
import { Loader } from "@/ui/atoms/Loader/Loader";
import { ResponseModal } from "@/ui/molecules/ReponseModal";

const TestComponentsPage = () => {
	return (
		<section className="mx-auto flex max-w-xl flex-col gap-5 p-5">
			<ResponseModal type="fail" />
			<ResponseModal type="success" />
			<Loader />
			<SearchInput />
		</section>
	);
};

export default TestComponentsPage;
