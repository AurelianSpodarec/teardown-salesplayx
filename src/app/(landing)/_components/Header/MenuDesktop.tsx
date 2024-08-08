import Link from "next/link";
import dataMenu, { IMenuItem } from "./dataMenu";

import { Button } from "@/components/atoms/button";

function NavItem({ name, url, isActive }: IMenuItem) {
  return (
    <Link href={url}>{name}</Link>
  )
}

function MenuDesktop() {
  return (
    <nav className="hidden lg:flex container mx-auto align-center flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href="/">
        <img className="max-w-[205px]" src="/assets/images/logo.png" />
        <span className="sr-only">SalesPlayX</span>
      </Link>
      <div className="md:ml-auto md:mr-auto flex flex-wrap align-center items-center text-base justify-center space-x-4">
        {dataMenu.map((item) => {
          return <NavItem name={item.name} url={item.url} isActive={false} />
        })}
      </div>
      <div>
        <Link href="/sing-up" className="inline-block py-3 px-3.5 xs:py-4 xs:px-8 mr-3 hover:border-blue-700 xs:text-lg text-black text-center font-semibold leading-none rounded transition duration-100">Sign In</Link>
        <Button size="sm" label="Book a demo" />
      </div>
    </nav>
  )
}

export default MenuDesktop;
