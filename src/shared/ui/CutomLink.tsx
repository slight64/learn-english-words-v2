import { Link } from 'react-router-dom';

const CustomLink = ({
  to,
  children,
  className,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link className={`underline underline-offset-4 ${className}`} to={to}>
      {children}
    </Link>
  );
};

export default CustomLink;
