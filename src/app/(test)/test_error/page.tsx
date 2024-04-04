import Link from "next/link";
import { ErrorAction } from "@/app/components/action/error_action";
import FormButton from "@/app/components/form_button";

export default function TestError() {
  return (
    <>
      <div>Test Error page!!</div>
      <FormButton action={ErrorAction} />
      <Link href="/">Home</Link>
    </>
  );
}
