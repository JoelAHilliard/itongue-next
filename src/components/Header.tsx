'use client'; // This indicates the component uses client-side hooks

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="items-center justify-center bg-accent">
      <div className="flex max-w-screen-lg max-w-container mx-auto w-full flex py-2 justify-between gap-2 px-4 font-medium items-center">
        <Link href="/" className={pathname === '/' ? 'active' : ''}>
          <span className="text-2xl">iTongue</span>
        </Link>
        <div className="flex gap-4 text-base font-light text-muted-foreground items-center">
          <Link href="/upload" className={pathname === '/upload' ? 'font-normal border-b border-b-primary' : ''}>
            Upload
          </Link>
          <Link href="/prevUploads" className={pathname === '/previousUploads' ? 'font-normal border-b border-b-primary' : ''}>
            Previous Uploads
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
