import { Link, useLocation } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "./ui/sidebar"

export function DashboardSidebar() {
  // Get current location from React Router
  const location = useLocation()

  // Navigation items
  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "📊",
      // Only exact match for dashboard to prevent it from being active for all sub-routes
      exact: true,
    },
    {
      title: "Campaigns",
      href: "/dashboard/campaigns",
      icon: "📢",
    },
    {
      title: "Messages",
      href: "/dashboard/messages",
      icon: "💬",
    },
    {
      title: "Accounts",
      href: "/dashboard/accounts",
      icon: "👥",
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: "📈",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "⚙️",
    },
  ]

  // Improved isActive function to handle exact matches
  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path
    }
    return location.pathname === path || location.pathname.startsWith(`${path}/`)
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <span className="text-2xl">📱</span>
          <span className="text-xl font-bold">WhatsApp</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={isActive(item.href, item.exact)}>
                <Link to={item.href} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                to="/auth/login"
                className="flex items-center gap-3 text-red-600 hover:bg-red-50 hover:text-red-700"
              >
                <span className="text-xl">🚪</span>
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
