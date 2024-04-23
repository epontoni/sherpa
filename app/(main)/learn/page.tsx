import FeedWrapper from "@/components/FeedWrapper";
import StickyWrapper from "@/components/StickyWrapper";
import Header from "./_components/Header";

export default function LearnPage() {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>Stiky Content</StickyWrapper>
      <FeedWrapper>
        <Header title="Lesson title" />
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
