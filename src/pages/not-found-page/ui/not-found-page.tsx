import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 800);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Страница не найдена, вовращаем на главную
      </h1>
    </div>
  );
};

export default NotFoundPage;
