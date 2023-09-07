import { ClothesIcon } from "@/assets/icons/ClothesIcon";
import { ShoesIcon } from "@/assets/icons/ShoesIcon";
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
			<ClothesIcon />
			<ShoesIcon />
			<div></div>
		</section>
	);
};

export default TestComponentsPage;
