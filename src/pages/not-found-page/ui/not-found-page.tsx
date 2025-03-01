import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 500);
    return () => clearTimeout(timer);
  }, [navigate]);
  return <div>Страница не найдена, возвращаем вас на главную</div>;
};

export default NotFoundPage;
