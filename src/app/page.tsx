import TopicCreateForm from "@/components/topics/Topic-create-form";

export default function Home() {
  return (
    <div className="w-full h-screen grid grid-cols-4 p-4">
      <div className="col-span-3">
        <h2 className="text-xl m-2">Top posts</h2>
      </div>
      <div className="">
        <TopicCreateForm />
      </div>
    </div>
  );
}
