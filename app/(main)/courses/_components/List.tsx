"use client";

import { courses, userProgress } from "@/db/schema";
import Card from "./Card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export default function List({ courses, activeCourseId }: Props) {
  const router = useRouter();
  const [pending, starTransition] = useTransition();

  const onClick = (id: string) => {
    if (pending) return;

    if (id === activeCourseId) {
      return router.push("/learn");
    }

    starTransition(() => {
      upsertUserProgress(id).catch(() => {
        toast.error("Something went wrong!");
      });
    });
  };
  return (
    <div className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          description={course.description}
          createdAt={course.createdAt}
          imageSrc={course.imageSrc}
          onClick={onClick}
          disabled={pending}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
}
