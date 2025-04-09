import {
	Book,
	Bookmark,
	Calendar,
	CalendarFold,
	Home,
	PanelTop,
	School,
	Settings
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
	SidebarRail,
	SidebarSeparator,
	SidebarTrigger,
} from "~/components/ui/sidebar"

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Stundenplan",
    url: "/stundenplan",
    icon: CalendarFold,
  },
  {
    title: "Klassenbuch",
    url: "/klassenbuch",
    icon: Book,
  },
  {
    title: "Veranstaltungen",
    url: "/veranstaltungen",
    icon: Calendar,
  },
  {
    title: "Elternsprechtag",
    url: "/elternsprechtag",
    icon: PanelTop,
  },
  {
    title: "Buchungen",
    url: "/buchungen",
    icon: Bookmark,
  },
  {
    title: "Schuleinstellungen",
    url: "/schuleinstellungen",
    icon: School,
  },
]

export function AppSidebar() {
  return (
		<Sidebar collapsible="icon">
			<SidebarTrigger className="absolute -right-5 top-1/2 transform -translate-y-1/2 transition-all duration-200 ease-linear border border-gray-300 h-9 w-9 rounded-full hover:bg-cyan-400 focus-visible:ring-2" />

			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent className="p-5">
            
						<Image src='/logo.png' width={400} height={100} alt="logo" className="px-2.5"/>
					</SidebarGroupContent>
					<SidebarGroupContent className="p-1">
						<SidebarMenu className="font-semibold font-sans">
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild className="p-5 text-gray-500 hover:bg-[#e2007a]/10 hover:text-[#e00078]">
										<Link href={item.url}>
											<item.icon />
											{item.title}
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}							
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

      <SidebarFooter>
        <SidebarMenu className="font-semibold font-sans">
          <SidebarMenuItem key="einstellungen-footer">
            <SidebarMenuButton asChild className="p-5 text-gray-500 hover:bg-[#e2007a]/10 hover:text-[#e00078]">
              <Link href="/einstellungen">
                <Settings />
                Einstellungen
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
		</Sidebar>
  )
}
