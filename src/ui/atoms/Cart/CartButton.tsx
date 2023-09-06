import Link from "next/link";
import { CartIcon } from "@/assets/icons/CartIcon";

type CartButtonProps = {
	quantity: number;
};

export const CartButton = ({ quantity }: CartButtonProps) => {
	return (
		<Link href="/cart">
			<CartIcon quantity={quantity} />
		</Link>
	);
};
