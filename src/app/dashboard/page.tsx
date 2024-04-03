import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <div>Hello This is Dashboard page!!</div>
      <Link href="/dashboard/test">test</Link>
      <Link href="/">Home</Link>
    </>
  );
}
