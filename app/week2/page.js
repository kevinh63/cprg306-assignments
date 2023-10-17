import Link from "next/link";
import StudentInfo from "../studentinfo";

export default function Page(){
    return(
        <main className="bg-gray-100 min-h-screen">
            <h1>My Shopping List</h1>
            <StudentInfo />
            <Link href="../" className="hover:underline">Back &lt;-</Link>
        </main>
    )
}