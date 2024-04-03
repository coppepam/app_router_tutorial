import Link from "next/link";

export default function Dashboard_Test() {
  return (
    <>
      <div>
        Dashboard 2 Test page!! this pages layout extends dashboard layout.
      </div>
      <Link href="/dashboard_2">Dashboard 2</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/">Home</Link>
    </>
  );
}
