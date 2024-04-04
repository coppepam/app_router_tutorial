export default function FormButton({
  action,
}: {
  action: () => Promise<void>;
}) {
  return (
    <form action={action}>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Call Error Action!
      </button>
    </form>
  );
}
