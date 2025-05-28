'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const links = [
  { name: 'Adán', href: '/adán' },
  { name: 'Ana', href: '/ana' },
  { name: 'Domingo', href: '/domingo' },
  { name: 'Javier', href: '/javier' },
  { name: 'Kevin', href: '/kevin' },
  { name: 'Mario', href: '/mario' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80">
          <Image src="/nextjs-icon.png" alt="Next.js Logo" width={28} height={28} priority />
          <span className="text-lg font-semibold tracking-tight">Next Journey</span>
        </Link>

        <nav>
          <ul className="flex gap-4 text-sm font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    'transition-colors hover:text-blue-600',
                    pathname === link.href && 'font-bold text-blue-600'
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
