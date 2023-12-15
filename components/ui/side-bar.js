import NavLinks from "@/components/ui/nav-links";

export default function SideBar() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-col justify-between space-x-0 space-y-2">
        <NavLinks />
      </div>
    </div>
  );
}
