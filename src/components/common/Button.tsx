const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-gold text-dark px-4 py-2 rounded hover:bg-gold-hover transition"
    >
      {children}
    </button>
  );
};

export default Button;
