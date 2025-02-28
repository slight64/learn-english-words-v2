import type { RootState } from '@/app/store/model/store';
import { useAppSelector } from '@/app/store/model/store';
import { Link } from 'react-router-dom';

export function Navbar() {
  const token = useAppSelector((state: RootState) => state.auth.token);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          WordsApp
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Главная
          </Link>
          {token ? (
            <>
              <Link to="/learn" className="hover:text-gray-300">
                Учить
              </Link>
              <Link to="/create" className="hover:text-gray-300">
                Создать
              </Link>
            </>
          ) : (
            <Link to="/login" className="hover:text-gray-300">
              Войти
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
