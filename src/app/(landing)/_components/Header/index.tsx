'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

import Container from "@/components/_layout/Container";

// import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1220) setMobileOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="">
      <Container>
        <div className="flex justify-between items-center py-2">

          <MenuDesktop />

          <div className="lg:hidden">
            <button type="button" onClick={() => setMobileOpen(true)}>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><g id="Menu / Hamburger_LG"><path id="Vector" d="M3 17H21M3 12H21M3 7H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
            </button>
          </div>

          {/* <MenuMobile isOpen={mobileOpen} setMobileOpen={setMobileOpen} /> */}

        </div>
      </Container>
    </header>
  )
}

export default Header;

 
//           <div>
//             SalesPlayboy
//           </div>
//           <nav>
//             <Link href="/">Home</Link>
//             <Link href="">Solutions</Link>
//             <Link href="">Pricing</Link>
//             <Link href="">Blog</Link>
//             <Link href="">Contact</Link>
//           </nav>

//           <div>
//             Login
//             <Link href="">
//               Book a demo
//             </Link>
//           </div>
 