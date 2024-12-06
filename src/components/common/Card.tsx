interface CardProps {
  title: string;
  price: number;
  image: string;
}

const Card = ({ title, price, image }: CardProps) => {
  return (
    <div className="bg-dark p-4 rounded shadow-card">
      <img
        src={image}
        alt={title}
        className="rounded w-full h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-bold text-light">${title}</h3>
      <p className="text-gold text-lg">${price}</p>
    </div>
  );
};

export default Card;
