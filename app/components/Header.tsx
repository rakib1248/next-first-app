import Link from "next/link";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className=" container mx-auto flex justify-between items-center">
        <div className="menu">
          <nav>
            <ul className="flex gap-2.5">
              <li className="cursor-pointer border py-2 px-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer border py-2 px-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all">
                <Link href="/about">about</Link>
              </li>
              <li className="cursor-pointer border py-2 px-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all">
                <Link href="/team">Team</Link>
              </li>
              <li className="cursor-pointer border py-2 px-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Link href="/user/addUser" className="bg-white text-blue-600 px-4 py-2 cursor-pointer rounded-md">
          Create User
        </Link>
      </div>
    </header>
  );
}

export default Header;
