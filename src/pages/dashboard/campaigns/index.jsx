"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSeparator,
} from "../../../components/ui/dropdown";
import { Badge } from "../../../components/ui/badge";
import constant from "../../constant";
import axios from 'axios';
export default function CampaignsPage() {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [getCampaigns, setGetCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await axios.get(`${constant.apiUrl}/getCampaigns`);
        console.log(response);
        setGetCampaigns(response.data);
      } catch (error) {
        setError("Error fetching blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchCampaign();
  }, []);
  console.log("getcampaigns",getCampaigns);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Campaigns
          </h1>
          <p className="text-slate-500 text-sm sm:text-base">
            Manage your WhatsApp messaging campaigns
          </p>
        </div>
        <Button className="w-full sm:w-auto">
          <Link
            to="/dashboard/campaigns/new"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <span className="mr-2">➕</span>
            New Campaign
          </Link>
        </Button>
      </div>

      <Card>
        {/* <CardHeader>
          <CardTitle className="text-lg sm:text-xl">All Campaigns</CardTitle>
          <CardDescription className="text-sm sm:text-base">View and manage all your WhatsApp campaigns</CardDescription>
        </CardHeader> */}
        <CardContent className="p-0">
          {/* Table for md+ screens */}
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  {/* <TableHead>Progress</TableHead> */}
                  <TableHead>Start Date</TableHead>
                  <TableHead>WhatsApp Number</TableHead>
                  {/* <TableHead>Group</TableHead> */}
                </TableRow>
              </TableHeader>
              <TableBody>
                {getCampaigns.map((campaign) => (
                  <TableRow key={campaign.id}>
                    <TableCell className="font-medium">
                      <Link
                        to={`/dashboard/campaigns/${campaign.id}`}
                        className="hover:underline"
                      >
                        {campaign.name}
                      </Link>
                    </TableCell>
                    <TableCell>{campaign.status}</TableCell>
                    {/* <TableCell>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs">{campaign.progress}</span>
                        <div className="h-2 w-full rounded-full bg-slate-100">
                          <div
                            className="h-2 rounded-full bg-emerald-500"
                            style={{ width: `${campaign.progressPercent}%` }}
                          ></div>
                        </div>
                      </div>
                    </TableCell> */}
                    <TableCell>{campaign.startTime}</TableCell>
                    <TableCell>+{campaign.sessionId}</TableCell>
                    {/* <TableCell>{campaign.group}</TableCell> */}
                    {/* <TableCell className="text-right">
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
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* Responsive cards for mobile */}
          <div className="md:hidden flex flex-col gap-4 p-2">
            {getCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm flex flex-col gap-3"
              >
                <div className="flex justify-between items-center">
                  <Link
                    to={`/dashboard/campaigns/${campaign.id}`}
                    className="font-medium text-base hover:underline"
                  >
                    {campaign.name}
                  </Link>
                  <Dropdown>
                    <DropdownTrigger
                      onClick={() =>
                        setOpenMenuId(
                          campaign.id === openMenuId ? null : campaign.id
                        )
                      }
                    >
                      <Button variant="ghost" className="p-2">
                        <span className="text-xl">⋮</span>
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      open={campaign.id === openMenuId}
                      onClose={() => setOpenMenuId(null)}
                      align="right"
                    >
                      <div className="p-2 font-medium">Actions</div>
                      <DropdownSeparator />
                      <DropdownItem>
                        <Link
                          to={`/dashboard/campaigns/${campaign.id}`}
                          style={{ width: "100%", display: "flex" }}
                        >
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
                </div>
                <div className="flex gap-2 flex-wrap">
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
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-600">
                    Progress: {campaign.progress}
                  </span>
                  <div className="h-2 mt-1 w-full rounded-full bg-slate-100">
                    <div
                      className="h-2 rounded-full bg-emerald-500"
                      style={{ width: `${campaign.progressPercent}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-600">
                  <div>
                    <span className="font-semibold">Start:</span>{" "}
                    {campaign.startDate}
                  </div>
                  <div>
                    <span className="font-semibold">Account:</span>{" "}
                    {campaign.account}
                  </div>
                  <div>
                    <span className="font-semibold">Group:</span>{" "}
                    {campaign.group}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
