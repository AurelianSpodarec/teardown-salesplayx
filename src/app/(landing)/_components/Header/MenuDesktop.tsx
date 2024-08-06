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
    <nav className="container mx-auto align-center flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href="/">
        <img className="max-w-[205px]" src="https://cdn.prod.website-files.com/66930939f22a8544a8921248/66946729cda53bab1c15de68_Screenshot%202024-07-14%20at%202.02.35%E2%80%AFPM-p-500.png" />
        {/* <img className="max-w-[130px]" src="//images.squarespace-cdn.com/content/v1/60c24f208febea5136b4e297/c3e7a990-00bc-4757-be1c-98583e196609/Vector.png?format=1500w" /> */}
        <span className="sr-only">SalesPlayX</span>
        {/* <span className="font-bold text-3xl uppercase ">SalesPlay</span> */}
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
