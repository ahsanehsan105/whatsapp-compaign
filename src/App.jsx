import { Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./pages/auth/login"
import DashboardLayout from "./layouts/dashboard-layout"
import DashboardPage from "./pages/dashboard"
import CampaignsPage from "./pages/dashboard/campaigns"
import NewCampaignPage from "./pages/dashboard/campaigns/new"
import MessagesPage from "./pages/dashboard/messages"
import AccountsPage from "./pages/dashboard/accounts"
import AnalyticsPage from "./pages/dashboard/analytics"
import SettingsPage from "./pages/dashboard/settings"
import UsersPage from "./pages/dashboard/users"
import MessageLogs from "./pages/dashboard/logs"

function App() {
  return (
    <Routes>
      {/* Redirect from home to login */}
      <Route path="/" element={<Navigate to="/auth/login" replace />} />
      <Route path="/auth/login" element={<LoginPage />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="campaigns" element={<CampaignsPage />} />
        <Route path="campaigns/new" element={<NewCampaignPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="logs" element={<MessageLogs />} />
        <Route path="accounts" element={<AccountsPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="users" element={<UsersPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  )
}

export default App
