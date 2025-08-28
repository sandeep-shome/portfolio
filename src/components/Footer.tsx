"use client";
import Image from "next/image";
import React from "react";
import { Paragraph } from "./Paragraph";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="p-4 flex items-center justify-center text-xs text-neutral-500 border-t border-neutral-100 gap-2">
      <div className="flex items-center gap-1">
        <span className="font-semibold">{new Date().getFullYear()} </span>
        &#8212; Built by Sandeep Shome with{" "}
      </div>
      <Link href={"/"}>
        <Image
          src={"/images/logos/aceternity.png"}
          alt="aceternity"
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
};
