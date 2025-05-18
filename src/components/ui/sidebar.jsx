"use client"

import { createContext, useContext } from "react"

const SidebarContext = createContext(null)

export function SidebarProvider({ children }) {
  // Always open, no toggle functionality
  const value = { open: true, mobileOpen: false }

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

export function Sidebar({ children, className = "", ...props }) {
  return (
    <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg ${className}`} {...props}>
      <div className="flex h-full flex-col overflow-hidden">{children}</div>
    </aside>
  )
}

export function SidebarHeader({ children, className = "", ...props }) {
  return (
    <div className={`flex items-center justify-between border-b border-slate-200 p-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function SidebarContent({ children, className = "", ...props }) {
  return (
    <div className={`flex-1 overflow-y-auto p-2 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function SidebarFooter({ children, className = "", ...props }) {
  return (
    <div className={`border-t border-slate-200 p-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

// Keep this for compatibility but it won't be used
export function SidebarTrigger({ className = "", ...props }) {
  return null
}

export function SidebarMenu({ children, className = "", ...props }) {
  return (
    <div className={`space-y-1 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function SidebarMenuItem({ children, className = "", ...props }) {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  )
}

export function SidebarMenuButton({ children, isActive = false, className = "", ...props }) {
  return (
    <button
      className={`flex w-full items-center rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
        isActive ? "bg-emerald-100 text-emerald-900" : "text-slate-700 hover:bg-slate-100"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
