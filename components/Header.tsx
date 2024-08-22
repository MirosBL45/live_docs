import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/assets/icons/logo.svg';
import LogoIcon from '@/public/assets/icons/logo-icon.svg';
import { cn } from '@/lib/utils';

export default function Header({ children, className }: HeaderProps) {
  return (
    <header className={cn("header", className)}>
      <Link href={'/'} className="md:flex-1">
        <Image
          // src="/assets/icons/logo.svg"
          src={Logo}
          alt="Logo with name"
          width={120}
          height={32}
          className="hidden md:block"
        />
        <Image
          // src="/assets/icons/logo-icon.svg"
          src={LogoIcon}
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </header>
  );
}
