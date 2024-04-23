import { cn } from "@/lib/utils";
import { Calendar, Check } from "lucide-react";
import Image from "next/image";

type Props = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  imageSrc: string;
  onClick: (id: string) => void;
  disabled?: boolean;
  active?: boolean;
};
export default function Card({
  id,
  title,
  description,
  createdAt,
  imageSrc,
  onClick,
  disabled,
  active,
}: Props) {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center p-3 pb-6 min-h-[217px] min-w-[200px] relative",
        disabled && "opacity-50 pointer-events-none"
      )}
    >
      <div className="min-h-[24px] w-full flex items-center justify-end absolute top-5 right-5 z-10">
        {active && (
          <div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
            <Check className="text-white stroke-[4] h-4 w-4" />
          </div>
        )}
      </div>
      <Image
        src={imageSrc}
        alt={title}
        layout="responsive"
        width={100}
        height={100}
        className="rounded-lg drop-shadow-md border object-cover"
      />
      <div className="">
        <p className="text-neutral-700 text-center font-bold mt-3">{title}</p>
        <p>{description}</p>
        <p className="flex gap-x-2 items-center mt-2">
          <Calendar />
          {createdAt.toDateString()}
        </p>
      </div>
    </div>
  );
}
