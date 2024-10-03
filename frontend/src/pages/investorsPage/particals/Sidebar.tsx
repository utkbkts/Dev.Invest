import InvestorsSidebarPart from "./InvestorsSidebarPart";
const Sidebar = () => {
  return (
    <div className="h-full">
      <h1 className="bg-white py-2 px-4 rounded-md text-black font-bold ">
        En çok yatırım yapanlar
      </h1>
      <div className="flex flex-col gap-2">
        <InvestorsSidebarPart />
      </div>
    </div>
  );
};

export default Sidebar;
