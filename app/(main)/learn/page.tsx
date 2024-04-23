import FeedWrapper from "@/components/FeedWrapper";
import StickyWrapper from "@/components/StickyWrapper";
import Header from "./_components/Header";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

export default async function LearnPage() {
  const userProgressData = await getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>Stiky Content</StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        <div className="bg-blue-300 h-[150px]" />
        <div className="bg-blue-500 h-[150px]" />
        <div className="bg-blue-300 h-[150px]" />
        <div className="bg-blue-500 h-[150px]" />
        <div className="bg-blue-300 h-[150px]" />
        <div className="bg-blue-500 h-[150px]" />
      </FeedWrapper>
    </div>
  );
}
