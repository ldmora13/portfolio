import ThemeToggle from "@/components/ThemeToggle"
import { House, Layers, GalleryVertical, FlaskConical, User } from "lucide-react"

export default function Header() {
  return (
    <div className="flex flex-center px-4 py-2 mx-auto mt-4">
        <header className="flex items-center px-4 py-2 gap-x-20 justify-between w-full rounded-2xl">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="h-16 w-16 text-[#0A0A0B] dark:text-[#F5F5F5]"
                role="img"
                aria-label="MORA"
            >
                <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M14 24l10 10M86 24l-10 10" opacity=".4" />
                    <path d="M24 76V34l26 28 26-28v42" />
                </g>

                <g fill="currentColor">
                    <circle cx="24" cy="76" r="5" />
                    <circle cx="24" cy="34" r="4" />
                    <circle cx="50" cy="62" r="6.5" />
                    <circle cx="76" cy="34" r="4" />
                    <circle cx="76" cy="76" r="5" />
                    <circle cx="14" cy="24" r="2.2" opacity=".5" />
                    <circle cx="86" cy="24" r="2.2" opacity=".5" />
                </g>
            </svg>

            <div className="flex flex-row gap-x-8 p-5 rounded-2xl max-w-4xl">
                <House className="w-6 h-6 text-foreground" />
                <GalleryVertical className="w-6 h-6 text-foreground" />
                <FlaskConical className="w-6 h-6 text-foreground" />
                <Layers className="w-6 h-6 text-foreground" />
                <User className="w-6 h-6 text-foreground" />
            </div>
            <ThemeToggle />

        </header>
    </div>
  )
}
