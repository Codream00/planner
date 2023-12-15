import SideBar from "@/components/ui/side-bar";

export default function Home() {
  return (
    <main className="flex h-screen flex-row items-center justify-between p-0">
      <div className="w-80 bg-gray-50 h-full">
        <div className="flex flex-col p-2">
          <SideBar></SideBar>
        </div>
      </div>
      <div className="w-full flex-grow overflow-y-auto bg-blue-500 h-full"></div>
    </main>
  );
}
