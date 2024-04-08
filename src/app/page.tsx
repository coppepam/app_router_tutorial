import Image from "next/image";
import Link from "next/link";

import { ErrorAction } from "@/app/components/action/error_action";
import FormButton from "@/app/components/form_button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link href="/login">Login</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/setting">Setting</Link>
      <Link href="/test_error">Test Error</Link>

      <FormButton action={ErrorAction} />
    </main>
  );
}
