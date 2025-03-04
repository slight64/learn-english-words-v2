import { useAppDispatch, useAppSelector } from '@/app/models/store';
import type { RootState } from '@/app/models/types';
import { logout } from '@/features/auth/model/slice';
import { AuthDialog } from '@/features/auth/ui/auth-dialog';
import { Button } from '@/shared/components/ui/button';
import CustomLink from '@/shared/components/ui/CustomLink';

export function Navbar() {
  const token = useAppSelector((state: RootState) => state.auth.token);
  const dispatch = useAppDispatch();

  return (
    <nav className="bg-gray-800 text-white py-4 px-10 h-16 flex items-center relative before:absolute before:z-[-1] before:bg-gray-800 before:top-0 before:left-1/2 before:translate-x-[-50%] before:w-screen before:content-[''] before:bottom-0">
      <div className="container flex justify-between ">
        <CustomLink to="/" className="text-xl font-bold">
          WordsApp
        </CustomLink>
        <div className="space-x-4">
          <CustomLink to="/" className="hover:text-gray-300">
            Главная
          </CustomLink>
          {token ? (
            <>
              <CustomLink to="/learn" className="hover:text-gray-300">
                Учить
              </CustomLink>
              <CustomLink to="/create" className="hover:text-gray-300">
                Создать
              </CustomLink>
              <Button variant="outline" onClick={() => dispatch(logout())}>
                Выйти
              </Button>
            </>
          ) : (
            <AuthDialog>
              <Button variant="outline" className="hover:text-gray-300">
                Войти
              </Button>
            </AuthDialog>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
