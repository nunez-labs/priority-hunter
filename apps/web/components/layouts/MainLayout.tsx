import { SideBar } from "@/components/interfaces/SideBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-full min-h-dvh flex items-center justify-center">
			<div className="flex w-full min-h-dvh overflow-hidden">
				<SideBar />

				<div className="flex-1 overflow-y-auto">
					{children}
				</div>
			</div>
		</div>
	);
};

export { MainLayout };
