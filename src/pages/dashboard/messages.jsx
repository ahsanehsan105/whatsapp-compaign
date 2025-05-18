"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { Badge } from "../../components/ui/badge"
import { CheckCircle2, AlertCircle, Search, MoreVertical, Clock, Eye, Edit, XCircle } from "lucide-react"
import { Input } from "../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"

// Custom dropdown component using React state
function Dropdown({ items }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        <MoreVertical className="h-4 w-4" />
        <span className="sr-only">More Options</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item, index) => (
              <button
                key={index}
                className={`flex w-full items-center px-4 py-2 text-sm hover:bg-gray-100 ${item.className || ""}`}
                onClick={() => {
                  if (item.onClick) item.onClick()
                  setIsOpen(false)
                }}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Sample upcoming messages data
const upcomingMessages = [
  {
    id: 1,
    campaign: "Summer Promotion",
    content: "Don't miss our summer sale! 20% off all...",
    scheduledTime: "in 5 minutes",
    recipient: "+1 (555) 123-4567",
    group: "Marketing Group",
    hasMedia: true,
  },
  {
    id: 2,
    campaign: "Summer Promotion",
    content: "Use code SUMMER25 for an extra 5% off your purchase!",
    scheduledTime: "in 15 minutes",
    recipient: "+1 (555) 123-4567",
    group: "Marketing Group",
    hasMedia: false,
  },
  {
    id: 3,
    campaign: "New Product Launch",
    content: "Introducing our newest product line! Check it...",
    scheduledTime: "in 25 minutes",
    recipient: "+1 (555) 987-6543",
    group: "Sales Prospects",
    hasMedia: true,
  },
  {
    id: 4,
    campaign: "New Product Launch",
    content: "Limited time offer: Get a free sample with your first...",
    scheduledTime: "in 35 minutes",
    recipient: "+1 (555) 987-6543",
    group: "Sales Prospects",
    hasMedia: false,
  },
]

// Sample sent messages data
const sentMessages = [
  {
    id: 1,
    campaign: "Summer Promotion",
    content: "Summer is here! Check out our new collection.",
    status: "delivered",
    recipient: "+1 (555) 123-4567",
    group: "Marketing Group",
    hasMedia: true,
  },
  {
    id: 2,
    campaign: "Summer Promotion",
    content: "Flash sale today only! Use code FLASH15 for 15% off.",
    status: "read",
    recipient: "+1 (555) 123-4567",
    group: "Marketing Group",
    hasMedia: false,
  },
  {
    id: 3,
    campaign: "New Product Launch",
    content: "Our new product line launches tomorrow! Be...",
    status: "delivered",
    recipient: "+1 (555) 987-6543",
    group: "Sales Prospects",
    hasMedia: true,
  },
  {
    id: 4,
    campaign: "New Product Launch",
    content: "Get ready for our biggest launch yet!",
    status: "failed",
    recipient: "+1 (555) 987-6543",
    group: "Sales Prospects",
    hasMedia: false,
  },
]

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredUpcoming, setFilteredUpcoming] = useState(upcomingMessages)
  const [filteredSent, setFilteredSent] = useState(sentMessages)
  const [campaignFilter, setCampaignFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Define dropdown items for upcoming messages
  const upcomingDropdownItems = [
    {
      icon: <Eye className="mr-2 h-4 w-4" />,
      label: "View Detail",
      onClick: () => console.log("View Detail clicked"),
    },
    {
      icon: <Edit className="mr-2 h-4 w-4" />,
      label: "Edit Detail",
      onClick: () => console.log("Edit Detail clicked"),
    },
    {
      icon: <XCircle className="mr-2 h-4 w-4" />,
      label: "Cancel Message",
      className: "text-red-600",
      onClick: () => console.log("Cancel Message clicked"),
    },
  ]

  // Define dropdown items for sent messages
  const sentDropdownItems = [
    {
      icon: <Eye className="mr-2 h-4 w-4" />,
      label: "View Detail",
      onClick: () => console.log("View Detail clicked"),
    },
  ]

  useEffect(() => {
    // Filter upcoming messages
    const upcomingResults = upcomingMessages.filter((message) => {
      const matchesSearch =
        searchQuery === "" ||
        message.campaign.toLowerCase().includes(searchQuery.toLowerCase()) ||
        message.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        message.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
        message.group.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCampaign =
        campaignFilter === "all" ||
        (campaignFilter === "summer" && message.campaign.includes("Summer")) ||
        (campaignFilter === "product" && message.campaign.includes("Product"))

      return matchesSearch && matchesCampaign
    })

    // Filter sent messages
    const sentResults = sentMessages.filter((message) => {
      const matchesSearch =
        searchQuery === "" ||
        message.campaign.toLowerCase().includes(searchQuery.toLowerCase()) ||
        message.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        message.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
        message.group.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCampaign =
        campaignFilter === "all" ||
        (campaignFilter === "summer" && message.campaign.includes("Summer")) ||
        (campaignFilter === "product" && message.campaign.includes("Product"))

      const matchesStatus = statusFilter === "all" || message.status === statusFilter

      return matchesSearch && matchesCampaign && matchesStatus
    })

    setFilteredUpcoming(upcomingResults)
    setFilteredSent(sentResults)
  }, [searchQuery, campaignFilter, statusFilter])

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Message Queue</h1>
        <p className="text-muted-foreground">Monitor and manage your scheduled WhatsApp messages</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Message Queue Status</CardTitle>
          <CardDescription>View and manage upcoming and sent messages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="bg-gray-100 rounded-md p-1">
              <div className="flex">
                <button
                  className={`flex-1 py-3 px-4 rounded-md text-center ${
                    activeTab === "upcoming" ? "bg-white text-gray-800" : "bg-transparent text-gray-600"
                  }`}
                  onClick={() => setActiveTab("upcoming")}
                >
                  Upcoming
                </button>
                <button
                  className={`flex-1 py-3 px-4 rounded-md text-center ${
                    activeTab === "sent" ? "bg-white text-gray-800" : "bg-transparent text-gray-600"
                  }`}
                  onClick={() => setActiveTab("sent")}
                >
                  Sent
                </button>
              </div>
            </div>
          </div>

          <div className="mb-4 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search messages..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {activeTab === "sent" ? (
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="read">Read</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
              ) : null}
              <Select value={campaignFilter} onValueChange={setCampaignFilter}>
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
                  <TableHead>Message</TableHead>
                  {activeTab === "upcoming" ? <TableHead>Scheduled</TableHead> : <TableHead>Status</TableHead>}
                  <TableHead>WhatsApp Number</TableHead>
                  <TableHead>Group</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeTab === "upcoming"
                  ? filteredUpcoming.map((message) => (
                      <TableRow key={message.id}>
                        <TableCell className="font-medium">{message.campaign}</TableCell>
                        <TableCell className="max-w-[300px] truncate">
                          {message.content}
                          {message.hasMedia && (
                            <Badge variant="outline" className="ml-2 bg-slate-100 text-slate-700">
                              Media
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4 text-amber-500" />
                            <span className="text-amber-500 font-medium">{message.scheduledTime}</span>
                          </div>
                        </TableCell>
                        <TableCell>{message.recipient}</TableCell>
                        <TableCell>{message.group}</TableCell>
                        <TableCell className="text-right">
                          <Dropdown items={upcomingDropdownItems} />
                        </TableCell>
                      </TableRow>
                    ))
                  : filteredSent.map((message) => (
                      <TableRow key={message.id}>
                        <TableCell className="font-medium">{message.campaign}</TableCell>
                        <TableCell className="max-w-[300px] truncate">
                          {message.content}
                          {message.hasMedia && (
                            <Badge variant="outline" className="ml-2 bg-slate-100 text-slate-700">
                              Media
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          {message.status === "delivered" && (
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 hover:text-blue-700">
                              <CheckCircle2 className="mr-1 h-3 w-3" />
                              Delivered
                            </Badge>
                          )}
                          {message.status === "read" && (
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 hover:text-green-700">
                              <CheckCircle2 className="mr-1 h-3 w-3" />
                              Read
                            </Badge>
                          )}
                          {message.status === "failed" && (
                            <Badge className="bg-red-100 text-red-700 hover:bg-red-100 hover:text-red-700">
                              <AlertCircle className="mr-1 h-3 w-3" />
                              Failed
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>{message.recipient}</TableCell>
                        <TableCell>{message.group}</TableCell>
                        <TableCell className="text-right">
                          <Dropdown items={sentDropdownItems} />
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing <strong>{activeTab === "upcoming" ? filteredUpcoming.length : filteredSent.length}</strong> of{" "}
              <strong>{activeTab === "upcoming" ? upcomingMessages.length : sentMessages.length}</strong> messages
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
    </div>
  )
}
