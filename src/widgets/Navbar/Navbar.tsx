import CustomLink from "@/shared/ui/CutomLink"

export const Navbar = () => {
  return (
<nav className="flex items-center bg-slate-200 py-4 px-10">
      <ul className="flex items-center gap-4 text-md font-medium">
        <li>
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="/learn">Learn</CustomLink>
        </li>
        <li>
          <CustomLink to="/create">Create</CustomLink>
        </li>
        <li>
          <CustomLink to="/login">Login</CustomLink>
        </li>
      </ul>
    </nav>
  )
}
