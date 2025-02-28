import { Link } from "react-router-dom"

const CustomLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
  return (
    <Link className="underline underline-offset-4" to={to}>{children}</Link>
  )
}

export default CustomLink
