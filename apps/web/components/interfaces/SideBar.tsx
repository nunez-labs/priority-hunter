"use client";

import { cn } from "@ph/ui";
import {
	LayoutDashboard,
	LucideIcon,
	ProjectorIcon,
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	Wrench,
} from "@ph/ui/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = {
	to: string;
	label: string;
	icon: LucideIcon;
};

const items: Item[] = [
	{ to: "/", label: "Inicio", icon: LayoutDashboard },
	{ to: "/projects", label: "Projects", icon: ProjectorIcon },
];
export const SideBar = () => {
	const pathname = usePathname();
	return (
		<aside className="w-12 shrink-0 flex flex-col border-r">
			<div className="flex h-12 w-full items-center justify-center border-b">
				<Wrench className="h-4 -w-4" />
			</div>
			<nav className="flex flex-1 flex-col items-center gap-1 py-3">
				{items.map((item) => {
					const active =
						item.to === "/"
							? pathname === "/"
							: pathname.startsWith(
									item.to,
								);
					const Icon = item.icon;
					return (
						<Tooltip key={item.to}>
							<TooltipTrigger asChild>
								<Link
									href={
										item.to
									}
									className={cn(
										"relative grid h-9 w-9 place-items-center rounded-md text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
										active &&
											"bg-sidebar-accent text-sidebar-primary-foreground",
									)}
								>
									{active && (
										<span className="absolute -left-[7px] top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r bg-primary" />
									)}
									<Icon className="h-[18px] w-[18px]" />
								</Link>
							</TooltipTrigger>
							<TooltipContent
								side="right"
								className="font-medium"
							>
								{item.label}
							</TooltipContent>
						</Tooltip>
					);
				})}
			</nav>
		</aside>
	);
};
