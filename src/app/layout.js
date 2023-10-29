import "./globals.css"

import Headers from "@/components/header"
// import { Button } from "@/components/ui/button"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Jirayu Portfolio",
  description: "Jirayu Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Headers /> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
