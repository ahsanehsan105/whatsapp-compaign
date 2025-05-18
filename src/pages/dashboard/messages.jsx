import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { Badge } from "../../components/ui/badge"
import { CheckCircle2, Clock, AlertCircle, Search, FileText, MessageSquare } from "lucide-react"
import { Input } from "../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { ImageIcon } from "lucide-react"

// Sample message data
const messages = [
  {
    id: 1,
    campaign: "Summer Promotion",
    recipient: "+1 (555) 111-2222",
    content: "Hi John! Check out our summer sale with 30% off all products...",
    status: "delivered",
    type: "text",
    sentAt: "Today, 11:45 AM",
  },
  {
    id: 2,
    campaign: "Summer Promotion",
    recipient: "+1 (555) 333-4444",
    content: "Hi Sarah! Check out our summer sale with 30% off all products...",
    status: "delivered",
    type: "image",
    sentAt: "Today, 11:40 AM",
  },
  {
    id: 3,
    campaign: "New Product Launch",
    recipient: "+1 (555) 555-6666",
    content: "Hello Mike! We're excited to announce our new product line...",
    status: "pending",
    type: "text",
    sentAt: "Today, 11:35 AM",
  },
  {
    id: 4,
    campaign: "Summer Promotion",
    recipient: "+1 (555) 777-8888",
    content: "Hi Lisa! Check out our summer sale with 30% off all products...",
    status: "failed",
    type: "text",
    sentAt: "Today, 11:30 AM",
  },
  {
    id: 5,
    campaign: "New Product Launch",
    recipient: "+1 (555) 999-0000",
    content: "Hello David! We're excited to announce our new product line...",
    status: "delivered",
    type: "image",
    sentAt: "Today, 11:25 AM",
  },
  {
    id: 6,
    campaign: "Summer Promotion",
    recipient: "+1 (555) 123-4567",
    content: "Hi Emma! Check out our summer sale with 30% off all products...",
    status: "delivered",
    type: "text",
    sentAt: "Today, 11:20 AM",
  },
  {
    id: 7,
    campaign: "New Product Launch",
    recipient: "+1 (555) 987-6543",
    content: "Hello James! We're excited to announce our new product line...",
    status: "delivered",
    type: "text",
    sentAt: "Today, 11:15 AM",
  },
  {
    id: 8,
    campaign: "Summer Promotion",
    recipient: "+1 (555) 246-8024",
    content: "Hi Olivia! Check out our summer sale with 30% off all products...",
    status: "delivered",
    type: "image",
    sentAt: "Today, 11:10 AM",
  },
  {
    id: 9,
    campaign: "New Product Launch",
    recipient: "+1 (555) 135-7913",
    content: "Hello William! We're excited to announce our new product line...",
    status: "failed",
    type: "text",
    sentAt: "Today, 11:05 AM",
  },
  {
    id: 10,
    campaign: "Summer Promotion",
    recipient: "+1 (555) 864-2097",
    content: "Hi Sophia! Check out our summer sale with 30% off all products...",
    status: "delivered",
    type: "text",
    sentAt: "Today, 11:00 AM",
  },
]

export default function MessagesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
        <p className="text-muted-foreground">View and monitor all sent WhatsApp messages</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Message Logs</CardTitle>
          <CardDescription>Track the status of all messages sent through the system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search messages..." className="pl-8" />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by campaign" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Campaigns</SelectItem>
                  <SelectItem value="summer">Summer Promotion</SelectItem>
                  <SelectItem value="product">New Product Launch</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign</TableHead>
                  <TableHead>Recipient</TableHead>
                  <TableHead>Content</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Sent At</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {messages.map((message) => (
                  <TableRow key={message.id}>
                    <TableCell className="font-medium">{message.campaign}</TableCell>
                    <TableCell>{message.recipient}</TableCell>
                    <TableCell className="max-w-[200px] truncate">{message.content}</TableCell>
                    <TableCell>
                      {message.type === "text" ? (
                        <Badge
                          variant="outline"
                          className="bg-slate-100 text-slate-700 hover:bg-slate-100 hover:text-slate-700"
                        >
                          <MessageSquare className="mr-1 h-3 w-3" />
                          Text
                        </Badge>
                      ) : (
                        <Badge
                          variant="outline"
                          className="bg-purple-50 text-purple-700 hover:bg-purple-50 hover:text-purple-700"
                        >
                          <ImageIcon className="mr-1 h-3 w-3" />
                          Image
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      {message.status === "delivered" && (
                        <Badge
                          variant="outline"
                          className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-700"
                        >
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                          Delivered
                        </Badge>
                      )}
                      {message.status === "pending" && (
                        <Badge
                          variant="outline"
                          className="bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700"
                        >
                          <Clock className="mr-1 h-3 w-3" />
                          Pending
                        </Badge>
                      )}
                      {message.status === "failed" && (
                        <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50 hover:text-red-700">
                          <AlertCircle className="mr-1 h-3 w-3" />
                          Failed
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>{message.sentAt}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <FileText className="h-4 w-4" />
                        <span className="sr-only">View Details</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing <strong>10</strong> of <strong>253</strong> messages
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Message Statistics</CardTitle>
            <CardDescription>Overview of message delivery performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-slate-50 p-4">
                <div className="text-sm text-muted-foreground">Total Messages</div>
                <div className="text-2xl font-bold">24,351</div>
                <div className="mt-1 text-xs text-emerald-600">+12% from last month</div>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <div className="text-sm text-muted-foreground">Delivery Rate</div>
                <div className="text-2xl font-bold">98.2%</div>
                <div className="mt-1 text-xs text-emerald-600">+0.5% from last month</div>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <div className="text-sm text-muted-foreground">Failed Messages</div>
                <div className="text-2xl font-bold">438</div>
                <div className="mt-1 text-xs text-red-600">+2% from last month</div>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <div className="text-sm text-muted-foreground">Avg. Delivery Time</div>
                <div className="text-2xl font-bold">1.2s</div>
                <div className="mt-1 text-xs text-emerald-600">-0.1s from last month</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Failures</CardTitle>
            <CardDescription>Messages that failed to deliver</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {messages
                .filter((message) => message.status === "failed")
                .map((message) => (
                  <div key={message.id} className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{message.recipient}</h4>
                        <span className="text-sm text-muted-foreground">{message.sentAt}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{message.content}</p>
                      <div className="mt-1">
                        <Badge variant="outline" className="bg-red-50 text-red-700">
                          Error: Network issue
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}

              {messages.filter((message) => message.status === "failed").length === 0 && (
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8">
                  <CheckCircle2 className="h-12 w-12 text-emerald-300" />
                  <p className="mt-2 text-center text-muted-foreground">No failed messages to display</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
