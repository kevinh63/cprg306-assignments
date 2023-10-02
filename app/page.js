import Link from "next/link";
import StudentInfo from "./studentinfo";

export default function Home() {
  return (
    <main>
      <h1>CPRG306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <ul>
        <li className="hover:underline"><Link href="week2">week2</Link></li>
        <li className="hover:underline"><Link href="week3">week3</Link></li>
      </ul>
    </main>
  )
}


