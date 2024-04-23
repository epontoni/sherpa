"use client";

import { courses } from "@/db/schema";
import Card from "./Card";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId: string;
};

export default function List({ courses, activeCourseId }: Props) {
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
          onClick={() => {}}
          disabled={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
}
