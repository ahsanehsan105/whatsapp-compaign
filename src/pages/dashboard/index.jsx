export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-slate-500 text-sm sm:text-base">Monitor your WhatsApp campaigns and message delivery status</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
            <span className="text-xl">📊</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-slate-500">+2 from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Messages Sent</CardTitle>
            <span className="text-xl">💬</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,351</div>
            <p className="text-xs text-slate-500">+12% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Delivery Rate</CardTitle>
            <span className="text-xl">✅</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.2%</div>
            <p className="text-xs text-slate-500">+0.5% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Accounts</CardTitle>
            <span className="text-xl">⏱️</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-slate-500">Both accounts connected</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Campaigns & Upcoming Messages */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {/* Recent Campaigns */}
        <div className="rounded-lg border border-slate-200 p-4 sm:p-6 bg-white">
          <h2 className="text-lg sm:text-2xl font-bold">Recent Campaigns</h2>
          <p className="text-slate-500 mb-4 sm:mb-6 text-sm sm:text-base">Your most recent WhatsApp campaigns</p>
          <div className="space-y-6">
            {/* Summer Promotion */}
            <RecentCampaign
              title="Summer Promotion"
              status={{ text: "Active", color: "green" }}
              progress={65}
              messages="780 / 1200 messages"
              started="2025-05-10"
            />
            {/* New Product Launch */}
            <RecentCampaign
              title="New Product Launch"
              status={{ text: "Active", color: "green" }}
              progress={32}
              messages="800 / 2500 messages"
              started="2025-05-12"
            />
            {/* Customer Feedback */}
            <RecentCampaign
              title="Customer Feedback"
              status={{ text: "Completed", color: "blue" }}
              progress={100}
              messages="500 / 500 messages"
              started="2025-05-01"
            />
            {/* Holiday Special */}
            <RecentCampaign
              title="Holiday Special"
              status={{ text: "Paused", color: "yellow" }}
              progress={45}
              messages="810 / 1800 messages"
              started="2025-04-25"
            />
          </div>
        </div>

        {/* Upcoming Messages */}
        <div className="rounded-lg border border-slate-200 p-4 sm:p-6 bg-white">
          <h2 className="text-lg sm:text-2xl font-bold">Upcoming Messages</h2>
          <p className="text-slate-500 mb-4 sm:mb-6 text-sm sm:text-base">Messages scheduled to be sent soon</p>
          <div className="space-y-4">
            <UpcomingMessage
              campaign="Summer Promotion"
              tags={[
                { text: "Media", color: "blue" },
                { text: "in 5 minutes", color: "green" },
              ]}
              message="Don't miss our summer sale! 20% off all products until June 30th."
            />
            <UpcomingMessage
              campaign="Summer Promotion"
              tags={[
                { text: "in 15 minutes", color: "green" },
              ]}
              message="Use code SUMMER25 for an extra 5% off your purchase!"
            />
            <UpcomingMessage
              campaign="New Product Launch"
              tags={[
                { text: "Media", color: "blue" },
                { text: "in 25 minutes", color: "green" },
              ]}
              message="Introducing our newest product line! Check it out now."
            />
            <UpcomingMessage
              campaign="New Product Launch"
              tags={[
                { text: "in 35 minutes", color: "green" },
              ]}
              message="Limited time offer: Get a free sample with your first purchase!"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Card components
const Card = ({ children, className }) => (
  <div className={`rounded-lg border border-slate-200 ${className}`}>{children}</div>
)
const CardHeader = ({ children, className }) => <div className={`p-3 sm:p-4 ${className}`}>{children}</div>
const CardTitle = ({ children, className }) => <h3 className={`font-medium ${className}`}>{children}</h3>
const CardContent = ({ children, className }) => <div className={`p-3 pt-0 sm:p-4 sm:pt-0 ${className}`}>{children}</div>

// Recent Campaign component
function RecentCampaign({ title, status, progress, messages, started }) {
  const statusColors = {
    green: "bg-green-500 text-white",
    blue: "bg-blue-500 text-white",
    yellow: "bg-yellow-500 text-white",
  }
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
        <h3 className="font-semibold text-base sm:text-lg">{title}</h3>
        <span className={`px-4 py-1 rounded-full text-xs sm:text-sm ${statusColors[status.color]}`}>{status.text}</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2 mb-2 sm:h-2.5">
        <div
          className="bg-blue-600 h-2 rounded-full sm:h-2.5"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm text-slate-500 gap-1">
        <span>{messages}</span>
        <span>Started: {started}</span>
      </div>
    </div>
  )
}

// Upcoming Message component
function UpcomingMessage({ campaign, tags, message }) {
  const tagColors = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    yellow: "bg-yellow-100 text-yellow-800",
  }
  return (
    <div className="border rounded-lg p-3 sm:p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
        <h3 className="font-semibold text-sm sm:text-base">{campaign}</h3>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 rounded-full text-xs ${tagColors[tag.color] || ""}`}
            >
              {tag.text}
            </span>
          ))}
        </div>
      </div>
      <p className="text-slate-600 text-sm sm:text-base">{message}</p>
    </div>
  )
}