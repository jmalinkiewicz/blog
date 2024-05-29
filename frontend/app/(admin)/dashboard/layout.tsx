import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="mt-[65px] bg-honey-100 border-b-2 border-shark-200 w-full">
        <nav className="max-w-screen-xl m-auto py-1.5 flex gap-4">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard">New Post</Link>
        </nav>
      </div>
      {children}
    </div>
  );
}
