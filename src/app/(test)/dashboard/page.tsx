import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <div>Hello This is Dashboard page!!</div>
      <Link href="/dashboard_2/">dashboard 2</Link>
      <Link href="/dashboard/test">dashboard test</Link>
      <Link href="/">Home</Link>
    </>
  );
}
