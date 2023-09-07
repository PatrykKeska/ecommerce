import Link from "next/link";
import { SigninIcon } from "@/assets/icons/SigninIcon";

export const SigninButton = () => {
	return (
		<>
			<Link className="flex" href="/sign-in">
				<SigninIcon />
			</Link>
		</>
	);
};
