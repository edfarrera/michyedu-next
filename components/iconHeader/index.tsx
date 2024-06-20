import Image from "next/image";
import { ReactNode } from "react";

interface IconHeaderProps {
  title: string | ReactNode;
  icon: string;
  className?: string;
}

export const IconHeader = ({ title, icon, className }: IconHeaderProps) => {
  return (
    <div className={`flex items-center gap-x-2 ${className}`}>
      <Image src={icon} alt="" width={40} height={30.4} />
      <h4 className="font-bold text-[color:var(--light-text)]">{title}</h4>
    </div>
  );
};
