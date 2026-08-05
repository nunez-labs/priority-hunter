import { LayoutDashboard, LucideIcon, SidebarProvider } from "@ph/ui/client";

type Item = {
	to: string;
	label: string;
	icon: LucideIcon;
};

const items: Item[] = [{ to: "/", label: "Inicio", icon: LayoutDashboard }];
export const SideBar = () => {
	return (
		//		<aside className="w-12 shrink-0 flex flex-col border-r">
		//			Este es el sidebar
		//		</aside>
		//		<SidebarProvider></SidebarProvider>
		//
		<div>Hola</div>
	);
};
