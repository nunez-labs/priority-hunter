import {
	LayoutDashboard,
	LucideIcon,
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	Wrench,
} from "@ph/ui/client";
import Link from "next/link";

type Item = {
	to: string;
	label: string;
	icon: LucideIcon;
};

const items: Item[] = [{ to: "/", label: "Inicio", icon: LayoutDashboard }];
export const SideBar = () => {
	return (
		<aside className="w-12 shrink-0 flex flex-col border-r">
			<div className="flex h-12 w-full items-center justify-center border-b">
				<Wrench className="h-4 -w-4" />
			</div>
			<nav className="flex flex-1 flex-col items-center gap-1 py-3">
				{items.map((item) => {
					const Icon = item.icon;
					return (
						<Tooltip key={item.to}>
							<TooltipTrigger asChild>
								<Link
									href={
										item.to
									}
									className=""
								>
									<Icon className="h-[18px] w-[18px]" />
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								{item.label}
							</TooltipContent>
						</Tooltip>
					);
				})}
			</nav>
		</aside>
	);
};
