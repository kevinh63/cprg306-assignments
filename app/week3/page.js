import Link from "next/link";
import ItemList from "./item-list";

export default function Page(){
    return(
        <main className="bg-black">
            <h1 className="text-4xl font-bold text-white">Shopping List</h1>
            <ItemList />
            <Link href="../" className="text-yellow-400 hover:text-white hover:underline">Back &lt;-</Link>
        </main>
    )
}