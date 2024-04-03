import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <div>Dashboard 2 page!!</div>
      <Link href="/dashboard">dashboard</Link>
      <Link href="/dashboard_2/test">dashboard 2 test</Link>
      <Link href="/">Home</Link>
    </>
  );
}
