import { SignIn } from "@clerk/nextjs";
const SigninPage = () => {
	return (
		<section className="flex h-screen w-full items-start justify-center  pt-10">
			<SignIn />
		</section>
	);
};

export default SigninPage;
