import Link from "next/link";
import { ErrorAction } from "./error_action";

export default function TestError() {
  return (
    <>
      <div>Test Error page!!</div>
      <form action={ErrorAction}>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Call Error Action!
        </button>
      </form>
      <Link href="/">Home</Link>
    </>
  );
}
