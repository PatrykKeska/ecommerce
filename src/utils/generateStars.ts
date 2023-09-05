export const renderStars = (rating: number) => {
    if (!rating) return null;
    const stars = [];
    if (rating % 1 >= 0.5) rating = Math.ceil(rating);
    else rating = Math.floor(rating);
    for (let i = 0; i < rating; i++) {
        stars.push(<ProductRatingStar />);
    }
    return stars;
};