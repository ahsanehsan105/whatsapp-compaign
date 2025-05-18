import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-slate-500">Monitor your WhatsApp campaigns and message delivery status</p>
        </div>
        <Button>
          <Link to="/dashboard/campaigns/new" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="mr-2">➕</span>
            New Campaign
          </Link>
        </Button>
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

      <Tabs defaultValue="active">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="active">Active Campaigns</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Campaigns</CardTitle>
              <CardDescription>Currently running WhatsApp campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Summer Promotion</h3>
                      <p className="text-sm text-slate-500">Progress: 1,245 / 2,500 messages sent</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-emerald-600 font-medium flex items-center">
                        <span className="mr-1">✅</span>
                        Active
                      </div>
                      <Button variant="outline" size="small">
                        Pause
                      </Button>
                      <Button variant="ghost" size="small">
                        <Link to="/dashboard/campaigns/1" style={{ color: "inherit", textDecoration: "none" }}>
                          View
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-emerald-500" style={{ width: "49.8%" }}></div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">New Product Launch</h3>
                      <p className="text-sm text-slate-500">Progress: 856 / 3,000 messages sent</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-emerald-600 font-medium flex items-center">
                        <span className="mr-1">✅</span>
                        Active
                      </div>
                      <Button variant="outline" size="small">
                        Pause
                      </Button>
                      <Button variant="ghost" size="small">
                        <Link to="/dashboard/campaigns/2" style={{ color: "inherit", textDecoration: "none" }}>
                          View
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-emerald-500" style={{ width: "28.5%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Other tab contents would go here */}
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>WhatsApp Account Status</CardTitle>
          <CardDescription>Status of your connected WhatsApp accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold">Primary Account</h3>
                  <p className="text-sm text-slate-500">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                  <span className="text-xs">✅</span>
                  Connected
                </div>
                <Button variant="outline" size="small">
                  Disconnect
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold">Secondary Account</h3>
                  <p className="text-sm text-slate-500">+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                  <span className="text-xs">✅</span>
                  Connected
                </div>
                <Button variant="outline" size="small">
                  Disconnect
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
