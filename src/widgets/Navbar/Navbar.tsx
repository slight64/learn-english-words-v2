import { useAppSelector } from '@/app/store/model/store';
import { logout } from '@/entities/auth/model/slice';
import { useAppDispatch } from '@/shared/lib/redux';
import { Button } from '@/shared/ui/button';
import CustomLink from '@/shared/ui/CutomLink';

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  return (
    <nav className="flex items-center bg-slate-200 py-8 px-10 h-[100px]">
      <ul className="flex items-center gap-4 text-md font-medium">
        <li>
          <CustomLink to="/">Home</CustomLink>
        </li>
        {token ? (
          <>
            <li>
              <CustomLink to="/learn">Learn</CustomLink>
            </li>
            <li>
              <CustomLink to="/create">Create</CustomLink>
            </li>
          </>
        ) : null}
      </ul>
      {token ? (
        <div className="ml-auto">
          <Button onClick={() => dispatch(logout())}>Logout</Button>
        </div>
      ) : (
        <div className="ml-auto">
          <CustomLink className="h9 px-4 py-2" to="/login">
            Login
          </CustomLink>
        </div>
      )}
    </nav>
  );
};
