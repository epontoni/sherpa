import { getCourses, getUserProgress } from "@/db/queries";
import List from "./_components/List";

export default async function CoursesPage() {
  const coursesData = await getCourses();
  const userProgressData = await getUserProgress();

  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);
  return (
    <div className="h-full max-w-screen-xl px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Courses</h1>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
}
