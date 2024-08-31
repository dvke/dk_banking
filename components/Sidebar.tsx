"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import PlaidLink from "./PlaidLink";
import { useState } from "react";
import { HamIcon } from "lucide-react";

const Sidebar = ({ user }: SiderbarProps) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const pathname = usePathname();

  console.log(isCollapse);

  return (
    <section
      className={`${isCollapse ? "max-w-[100px] delay-500 " : ""}sidebar z-50`}
    >
      <nav className="flex flex-col gap-4">
        <div
          className={`${
            isCollapse ? "flex-col " : ""
          }flex mb-12 items-center justify-between`}
        >
          <Link href={"/"} className="flex  cursor-pointer items-center gap-2">
            <Image
              src="/icons/logo.svg"
              alt="#"
              width={34}
              height={34}
              className={`${
                isCollapse ? "size-14 " : ""
              }size-[24px] max-xl:size-14`}
            />
            <h1 className={`${isCollapse ? "hidden" : ""} sidebar-logo`}>
              Duke
            </h1>
          </Link>
          <button
            className="max-xl:hidden"
            onClick={() => setIsCollapse(!isCollapse)}
            title={`${isCollapse ? "Expand" : "Collapse"} Menu`}
          >
            <Image
              src="/icons/hamburger.svg"
              width={30}
              height={30}
              alt="menu"
              className="cursor-pointer"
            />
          </button>
        </div>
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);
          return (
            <Link
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
              href={link.route}
              key={link.label}
              title={link.label}
            >
              <div className="relative size-6">
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  fill
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <p
                className={cn(`${isCollapse ? "hidden" : ""} sidebar-label`, {
                  "!text-white": isActive,
                })}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
        <PlaidLink isCollapse={isCollapse} user={user} />
      </nav>
      <Footer isCollapse={isCollapse} user={user} />
    </section>
  );
};

export default Sidebar;
