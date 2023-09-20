import Link from "next/link";
import StudentInfo from "../studentinfo";

export default function Page(){
    return(
        <main>
            <h1>My Shopping List</h1>
            <StudentInfo />
            <Link href="../">Back &lt;-</Link>
        </main>
    )
}