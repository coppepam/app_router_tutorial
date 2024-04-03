import Link from "next/link";

export default function Dashboard_Test() {
  return (
    <>
      <div>
        Dashboard Test page!! this pages layout extends dashboard layout.
      </div>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/">Home</Link>
    </>
  );
}
