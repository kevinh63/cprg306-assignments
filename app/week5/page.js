import Link from "next/link";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Shopping List</h1>
      <ItemList />
      <div className="mt-8">
        <Link href="../" className="hover:underline">Back &lt;-</Link>
      </div>
    </main>
  );
}
