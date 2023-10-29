"use client"

import Link from "next/link"

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 md:p-6">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav className="hidden md:flex gap-4">
        {/* <Link className="text-sm md:text-base" href="#">
          Work
        </Link>
        <Link className="text-sm md:text-base" href="#">
          About
        </Link> */}
      </nav>
      <div className="hidden md:flex gap-2">
        <Link href="https://www.facebook.com/bankzxcv">
          <svg
            className=" h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </Link>
        <Link href="https://www.instagram.com/bankzxcv">
          <svg
            className=" h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
