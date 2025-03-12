import React from "react";
import Link from "next/link";

interface MenuItem {
  title: string;
  url: string;
  Icon: React.ElementType;
}

const MenuItem = ({ title, url, Icon }: MenuItem) => {
  return (
    <Link href={url}>
      <span className="hidden md:block text-xl">{title}</span>
      <Icon className="cursor-pointer font-bold text-3xl md:hidden" />
    </Link>
  );
};

export default MenuItem;
