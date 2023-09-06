export const renderStars = (rating: number, Component: JSX.Element) => {
	if (!rating) return null;
	const stars = [];
	if (rating % 1 >= 0.5) rating = Math.ceil(rating);
	else rating = Math.floor(rating);
	for (let i = 0; i < rating; i++) {
		stars.push(Component);
	}
	return stars;
};
