"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table"
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSeparator,
} from "../../../components/ui/dropdown"
import { Badge } from "../../../components/ui/badge"

// Sample campaign data
const campaigns = [
  {
    id: 1,
    name: "Summer Promotion",
    status: "active",
    progress: "1,245 / 2,500",
    progressPercent: 49.8,
    startDate: "Jun 10, 2023",
    account: "Primary",
    group: "Customers Group",
  },
  {
    id: 2,
    name: "New Product Launch",
    status: "active",
    progress: "856 / 3,000",
    progressPercent: 28.5,
    startDate: "Jun 15, 2023",
    account: "Secondary",
    group: "Marketing Group",
  },
  {
    id: 3,
    name: "Holiday Special",
    status: "scheduled",
    progress: "0 / 2,000",
    progressPercent: 0,
    startDate: "Dec 15, 2023",
    account: "Primary",
    group: "Customers Group",
  },
  {
    id: 4,
    name: "Spring Sale",
    status: "completed",
    progress: "2,500 / 2,500",
    progressPercent: 100,
    startDate: "May 15, 2023",
    account: "Primary",
    group: "Customers Group",
  },
  {
    id: 5,
    name: "Customer Survey",
    status: "completed",
    progress: "1,850 / 2,000",
    progressPercent: 92.5,
    startDate: "Apr 10, 2023",
    account: "Secondary",
    group: "Customers Group",
  },
]

export default function CampaignsPage() {
  const [openMenuId, setOpenMenuId] = useState(null)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Campaigns</h1>
          <p className="text-slate-500">Manage your WhatsApp messaging campaigns</p>
        </div>
        <Button>
          <Link to="/dashboard/campaigns/new" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="mr-2">➕</span>
            New Campaign
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Campaigns</CardTitle>
          <CardDescription>View and manage all your WhatsApp campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Account</TableHead>
                <TableHead>Group</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell className="font-medium">
                    <Link to={`/dashboard/campaigns/${campaign.id}`} className="hover:underline">
                      {campaign.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {campaign.status === "active" && (
                      <Badge variant="success">
                        <span className="mr-1">✅</span>
                        Active
                      </Badge>
                    )}
                    {campaign.status === "scheduled" && (
                      <Badge variant="warning">
                        <span className="mr-1">⏱️</span>
                        Scheduled
                      </Badge>
                    )}
                    {campaign.status === "completed" && (
                      <Badge variant="secondary">
                        <span className="mr-1">✅</span>
                        Completed
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs">{campaign.progress}</span>
                      <div className="h-2 w-full rounded-full bg-slate-100">
                        <div
                          className="h-2 rounded-full bg-emerald-500"
                          style={{ width: `${campaign.progressPercent}%` }}
                        ></div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{campaign.startDate}</TableCell>
                  <TableCell>{campaign.account}</TableCell>
                  <TableCell>{campaign.group}</TableCell>
                  <TableCell className="text-right">
                    <Dropdown>
                      <DropdownTrigger onClick={() => setOpenMenuId(campaign.id === openMenuId ? null : campaign.id)}>
                        <Button variant="ghost" className="p-2">
                          <span className="text-xl">⋮</span>
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu open={campaign.id === openMenuId} onClose={() => setOpenMenuId(null)} align="right">
                        <div className="p-2 font-medium">Actions</div>
                        <DropdownSeparator />
                        <DropdownItem>
                          <Link to={`/dashboard/campaigns/${campaign.id}`} style={{ width: "100%", display: "flex" }}>
                            <span className="mr-2">📄</span>
                            View Details
                          </Link>
                        </DropdownItem>
                        {campaign.status === "active" && (
                          <DropdownItem>
                            <span className="mr-2">⏸️</span>
                            Pause Campaign
                          </DropdownItem>
                        )}
                        {campaign.status === "scheduled" && (
                          <>
                            <DropdownItem>
                              <span className="mr-2">▶️</span>
                              Start Now
                            </DropdownItem>
                            <DropdownItem>
                              <span className="mr-2">📄</span>
                              Edit Campaign
                            </DropdownItem>
                          </>
                        )}
                        <DropdownSeparator />
                        <DropdownItem className="text-red-600">
                          <span className="mr-2">🗑️</span>
                          Delete Campaign
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
