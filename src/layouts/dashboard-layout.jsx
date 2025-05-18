import { Outlet } from "react-router-dom"
import { DashboardSidebar } from "../components/dashboard-sidebar"
import { SidebarProvider } from "../components/ui/sidebar"

export default function DashboardLayout() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen bg-slate-50">
        {/* Fixed width for sidebar */}
        <div className="w-64 flex-shrink-0">{/* This is just a placeholder to reserve space */}</div>

        {/* Sidebar area - always visible */}
        <DashboardSidebar />

        {/* Content area - takes remaining width */}
        <div className="flex flex-1 flex-col">
          <main className="flex-1 overflow-auto p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
