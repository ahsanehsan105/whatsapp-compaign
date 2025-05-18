export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-slate-500">Monitor your WhatsApp campaigns and message delivery status</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
            <span className="text-xl">📊</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-slate-500">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Messages Sent</CardTitle>
            <span className="text-xl">💬</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,351</div>
            <p className="text-xs text-slate-500">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Delivery Rate</CardTitle>
            <span className="text-xl">✅</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.2%</div>
            <p className="text-xs text-slate-500">+0.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
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

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Campaigns */}
        <div className="rounded-lg border border-slate-200 p-6">
          <h2 className="text-2xl font-bold">Recent Campaigns</h2>
          <p className="text-slate-500 mb-6">Your most recent WhatsApp campaigns</p>

          <div className="space-y-6">
            {/* Summer Promotion */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">Summer Promotion</h3>
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">Active</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 mb-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "65%" }}></div>
              </div>
              <div className="flex justify-between text-sm text-slate-500">
                <span>780 / 1200 messages</span>
                <span>Started: 2025-05-10</span>
              </div>
            </div>

            {/* New Product Launch */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">New Product Launch</h3>
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">Active</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 mb-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "32%" }}></div>
              </div>
              <div className="flex justify-between text-sm text-slate-500">
                <span>800 / 2500 messages</span>
                <span>Started: 2025-05-12</span>
              </div>
            </div>

            {/* Customer Feedback */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">Customer Feedback</h3>
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">Completed</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 mb-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
              </div>
              <div className="flex justify-between text-sm text-slate-500">
                <span>500 / 500 messages</span>
                <span>Started: 2025-05-01</span>
              </div>
            </div>

            {/* Holiday Special */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">Holiday Special</h3>
                <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm">Paused</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 mb-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "45%" }}></div>
              </div>
              <div className="flex justify-between text-sm text-slate-500">
                <span>810 / 1800 messages</span>
                <span>Started: 2025-04-25</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Messages */}
        <div className="rounded-lg border border-slate-200 p-6">
          <h2 className="text-2xl font-bold">Upcoming Messages</h2>
          <p className="text-slate-500 mb-6">Messages scheduled to be sent soon</p>

          <div className="space-y-4">
            {/* Message 1 */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Summer Promotion</h3>
                <div className="flex gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">Media</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">in 5 minutes</span>
                </div>
              </div>
              <p className="text-slate-600">Don't miss our summer sale! 20% off all products until June 30th.</p>
            </div>

            {/* Message 2 */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Summer Promotion</h3>
                <div className="flex gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">in 15 minutes</span>
                </div>
              </div>
              <p className="text-slate-600">Use code SUMMER25 for an extra 5% off your purchase!</p>
            </div>

            {/* Message 3 */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">New Product Launch</h3>
                <div className="flex gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">Media</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">in 25 minutes</span>
                </div>
              </div>
              <p className="text-slate-600">Introducing our newest product line! Check it out now.</p>
            </div>

            {/* Message 4 */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">New Product Launch</h3>
                <div className="flex gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">in 35 minutes</span>
                </div>
              </div>
              <p className="text-slate-600">Limited time offer: Get a free sample with your first purchase!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Simple Card components since we removed shadcn/ui
const Card = ({ children, className }) => (
  <div className={`rounded-lg border border-slate-200 ${className}`}>{children}</div>
)

const CardHeader = ({ children, className }) => <div className={`p-4 ${className}`}>{children}</div>

const CardTitle = ({ children, className }) => <h3 className={`font-medium ${className}`}>{children}</h3>

const CardContent = ({ children, className }) => <div className={`p-4 pt-0 ${className}`}>{children}</div>
