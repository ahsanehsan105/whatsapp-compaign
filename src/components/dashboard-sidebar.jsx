import { Link, useLocation } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "./ui/sidebar"

export function DashboardSidebar() {
  const location = useLocation()
  const { open, toggleSidebar } = useSidebar()

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "📊",
      exact: true,
    },
    {
      title: "Campaigns",
      href: "/dashboard/campaigns",
      icon: "📢",
    },
    {
      title: "Messages Queue",
      href: "/dashboard/messages",
      icon: "💬",
    },
    {
      title: "Message Logs",
      href: "/dashboard/logs",
      icon: "📝",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "⚙️",
    },
  ]

  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path
    }
    return location.pathname === path || location.pathname.startsWith(`${path}/`)
  }

  return (
    <Sidebar open={open}>
      <SidebarHeader>
        <div className="flex items-center w-full">
          <span className="text-2xl">{open && "📱"}</span>
          {open && <span className="text-xl font-bold ml-2">WhatsApp</span>}
          <button
            onClick={toggleSidebar}
            className="ml-auto rounded p-1 text-2xl hover:bg-slate-100 focus:outline-none"
            aria-label={open ? "Close sidebar" : "Open sidebar"}
          >
            {open ? <span>←</span> : <span>☰</span>}
          </button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild={true} isActive={isActive(item.href, item.exact)}>
                <Link to={item.href} className="flex items-center gap-3 justify-start">
                  <span className="text-xl">{item.icon}</span>
                  {open && <span>{item.title}</span>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild={true}>
              <Link
                to="/auth/login"
                className="flex items-center gap-3 text-red-600 hover:bg-red-50 hover:text-red-700 justify-start"
              >
                <span className="text-xl">🚪</span>
                {open && <span>Logout</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}