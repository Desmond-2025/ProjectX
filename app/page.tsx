import { UserButton } from "@clerk/nextjs"
import { ModeToggle } from "@/components/mode-toggle"

import { Button } from "@/components/ui/button"

import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-row items-center justify-between gap-x-4">
          <UserButton />
          <ModeToggle />
        </div>
        <Button className="bg-purple-200">
          Dashboard
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="relative flex flex-col place-items-center">
        <h1 className="mb-0 text-8xl font-extrabold leading-normal tracking-tight bg-gradient-to-b from-purple-300 to-gray-700 bg-clip-text text-transparent">
          Project X
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Talk face to face with your favorite content creators.
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  )
}
