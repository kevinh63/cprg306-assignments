import Link from "next/link";
import StudentInfo from "./studentinfo";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <h1>CPRG306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <ul>
        <li className="hover:underline"><Link href="week2">week2</Link></li>
        <li className="hover:underline"><Link href="week3">week3</Link></li>
        <li className="hover:underline"><Link href="week4">week4</Link></li>
        <li className="hover:underline"><Link href="week5">week5</Link></li>
        <li className="hover:underline"><Link href="week6">week6</Link></li>
        <li className="hover:underline"><Link href="week7">week7</Link></li>
        <li className="hover:underline"><Link href="week8">week8</Link></li>
        <p>week9 was midterm</p>
        <li className="hover:underline"><Link href="week10">week10</Link></li>
      </ul>
    </main>
  )
}


