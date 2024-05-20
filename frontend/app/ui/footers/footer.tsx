export default function Footer() {
  return (
    <footer className="relative z-50 lg:fixed bottom-0 right-0">
      <ul className="flex gap-3 text-shark-600 p-5 mt-4 justify-end">
        <li>
          <a className="hover:text-shark-950 hover:underline hover:cursor-pointer">
            email
          </a>
        </li>
        <li>
          <a className="hover:text-shark-950 hover:underline hover:cursor-pointer">
            github
          </a>
        </li>
        <li>
          <a className="hover:text-shark-950 hover:underline hover:cursor-pointer">
            instagram
          </a>
        </li>
      </ul>
    </footer>
  );
}
