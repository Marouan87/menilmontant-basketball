'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav } from '@/content/site';

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Ménilmontant Basketball, accueil">
          <Image
            src="/images/logo-white.png"
            alt=""
            width={46}
            height={46}
            priority
            style={{ width: 46, height: 'auto' }}
          />
          <span className="brand-text">
            <b>Ménilmontant</b>
            <i>Basketball</i>
          </span>
        </Link>

        <nav className="nav" aria-label="Navigation principale">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? 'active' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="burger"
          aria-expanded={open}
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {open ? (
        <nav className="nav-mobile" aria-label="Navigation mobile">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
