import { getCourses } from "@/db/queries";
import List from "./_components/List";

export default async function CoursesPage() {
  const courses = await getCourses();
  return (
    <div className="h-full max-w-screen-xl px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Courses</h1>
      <List
        courses={courses}
        activeCourseId={"1f777ff2-f792-4ae8-bfc7-4566c3674a73"}
      />
    </div>
  );
}
