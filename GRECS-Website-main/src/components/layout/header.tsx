import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 sm:px-8">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/grecs-logo.png"
              alt="GRECS Logo"
              width={100}
              height={40}
              className="h-auto"
            />
          </Link>
        </div>
        {/* You can add navigation links here later if needed */}
      </div>
    </header>
  );
}