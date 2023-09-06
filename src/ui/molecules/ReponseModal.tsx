import { FailModal } from "../atoms/Modals/FailModal";
import { SucessModal } from "../atoms/Modals/SuccessModal";

type ResponseModalProps = {
	type: "success" | "fail";
	message?: string;
};

export const ResponseModal = ({ message, type }: ResponseModalProps) => {
	return (
		<>
			{type === "success" && <SucessModal message={message} />}
			{type === "fail" && <FailModal message={message} />}
		</>
	);
};
