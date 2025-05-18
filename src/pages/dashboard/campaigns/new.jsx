"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { Textarea } from "../../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Separator } from "../../../components/ui/separator"
import { Switch } from "../../../components/ui/switch"
import { Calendar } from "../../../components/ui/calender"
import { Popover, PopoverContent, PopoverTrigger } from "../../../components/ui/popover"
// import { format } from "../../../utils/date"
import { Alert, AlertDescription } from "../../../components/ui/alert"
import { useToast } from "../../../hooks/use-toast"

export default function NewCampaignPage() {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("manual")
  const [campaignName, setCampaignName] = useState("")
  const [messageText, setMessageText] = useState("")
  const [whatsappAccount, setWhatsappAccount] = useState("")
  const [targetGroup, setTargetGroup] = useState("")
  const [messageInterval, setMessageInterval] = useState("5")
  const [scheduleType, setScheduleType] = useState("now")
  const [scheduledDate, setScheduledDate] = useState(new Date())
  const [scheduledTime, setScheduledTime] = useState("09:00")
  const [csvFile, setCsvFile] = useState(null)
  const [includeMedia, setIncludeMedia] = useState(false)
  const [mediaFile, setMediaFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [popoverOpen, setPopoverOpen] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Validate form
    if (!campaignName) {
      setError("Campaign name is required")
      setIsSubmitting(false)
      return
    }

    if (activeTab === "manual" && !messageText) {
      setError("Message text is required")
      setIsSubmitting(false)
      return
    }

    if (activeTab === "csv" && !csvFile) {
      setError("CSV file is required")
      setIsSubmitting(false)
      return
    }

    if (!whatsappAccount) {
      setError("WhatsApp account is required")
      setIsSubmitting(false)
      return
    }

    if (!targetGroup) {
      setError("Target group is required")
      setIsSubmitting(false)
      return
    }

    try {
      // In a real app, this would be an API call to create the campaign
      // For demo purposes, we'll just simulate a successful creation
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Campaign created",
        description: "Your campaign has been created successfully.",
      })

      navigate("/dashboard/campaigns")
    } catch (err) {
      setError("An error occurred while creating the campaign. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCsvUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCsvFile(e.target.files[0])
    }
  }

  const handleMediaUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setMediaFile(e.target.files[0])
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Campaign</h1>
        <p className="text-slate-500">Set up a new WhatsApp messaging campaign</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Campaign Details</CardTitle>
              <CardDescription>Basic information about your campaign</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {error && (
                <Alert variant="danger">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="campaign-name">Campaign Name</Label>
                <Input
                  id="campaign-name"
                  placeholder="Enter campaign name"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Message Content</CardTitle>
              <CardDescription>Create your WhatsApp message content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="manual" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="manual">Manual Entry</TabsTrigger>
                  <TabsTrigger value="csv">CSV Upload</TabsTrigger>
                </TabsList>
                <TabsContent value="manual" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="message-text">Message Text</Label>
                    <Textarea
                      id="message-text"
                      placeholder="Enter your message text here"
                      rows={5}
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                    />
                    <p className="text-xs text-slate-500">
                      You can use {"{name}"} as a placeholder to personalize messages
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="include-media">Include Media</Label>
                      <Switch id="include-media" checked={includeMedia} onCheckedChange={setIncludeMedia} />
                    </div>
                    {includeMedia && (
                      <div className="mt-2 space-y-2">
                        <Label htmlFor="media-upload">Upload Media</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            id="media-upload"
                            type="file"
                            accept="image/*,video/*"
                            onChange={handleMediaUpload}
                            className="hidden"
                          />
                          <div className="grid w-full gap-2">
                            {mediaFile ? (
                              <div className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 p-2">
                                <span className="text-sm">{mediaFile.name}</span>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  className="p-1"
                                  onClick={() => setMediaFile(null)}
                                >
                                  ✖️
                                </Button>
                              </div>
                            ) : (
                              <label
                                htmlFor="media-upload"
                                className="flex cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 p-4 transition-colors hover:border-slate-400"
                              >
                                <div className="flex flex-col items-center gap-2">
                                  <span className="text-2xl">📤</span>
                                  <span className="text-sm font-medium">Click to upload image or video</span>
                                  <span className="text-xs text-slate-500">JPG, PNG, MP4 up to 16MB</span>
                                </div>
                              </label>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="csv" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="csv-upload">Upload CSV File</Label>
                    <Input id="csv-upload" type="file" accept=".csv" onChange={handleCsvUpload} className="hidden" />
                    <div className="grid w-full gap-2">
                      {csvFile ? (
                        <div className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 p-2">
                          <span className="text-sm">{csvFile.name}</span>
                          <Button type="button" variant="ghost" className="p-1" onClick={() => setCsvFile(null)}>
                            ✖️
                          </Button>
                        </div>
                      ) : (
                        <label
                          htmlFor="csv-upload"
                          className="flex cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 p-4 transition-colors hover:border-slate-400"
                        >
                          <div className="flex flex-col items-center gap-2">
                            <span className="text-2xl">📤</span>
                            <span className="text-sm font-medium">Click to upload CSV file</span>
                            <span className="text-xs text-slate-500">CSV file with message content</span>
                          </div>
                        </label>
                      )}
                    </div>
                    <p className="text-xs text-slate-500">
                      CSV should include columns: phone, name, message, media_url (optional)
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Delivery Settings</CardTitle>
              <CardDescription>Configure how and when messages will be sent</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="whatsapp-account">WhatsApp Account</Label>
                <Select value={whatsappAccount} onValueChange={setWhatsappAccount}>
                  <SelectTrigger id="whatsapp-account">
                    <SelectValue placeholder="Select WhatsApp account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="primary">Primary (+1 555-123-4567)</SelectItem>
                    <SelectItem value="secondary">Secondary (+1 555-987-6543)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="target-group">Target Group</Label>
                <Select value={targetGroup} onValueChange={setTargetGroup}>
                  <SelectTrigger id="target-group">
                    <SelectValue placeholder="Select target group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="customers">Customers Group</SelectItem>
                    <SelectItem value="marketing">Marketing Group</SelectItem>
                    <SelectItem value="support">Support Group</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message-interval">Message Interval (minutes)</Label>
                <Select value={messageInterval} onValueChange={setMessageInterval}>
                  <SelectTrigger id="message-interval">
                    <SelectValue placeholder="Select interval" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 minute</SelectItem>
                    <SelectItem value="5">5 minutes</SelectItem>
                    <SelectItem value="10">10 minutes</SelectItem>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">60 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Schedule</Label>
                <div className="flex items-center space-x-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="schedule-now"
                        name="schedule-type"
                        value="now"
                        checked={scheduleType === "now"}
                        onChange={() => setScheduleType("now")}
                        className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-500"
                      />
                      <Label htmlFor="schedule-now" className="text-sm font-normal">
                        Send immediately
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="schedule-later"
                        name="schedule-type"
                        value="later"
                        checked={scheduleType === "later"}
                        onChange={() => setScheduleType("later")}
                        className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-500"
                      />
                      <Label htmlFor="schedule-later" className="text-sm font-normal">
                        Schedule for later
                      </Label>
                    </div>
                  </div>
                </div>

                {scheduleType === "later" && (
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="space-y-2">
                      <Label htmlFor="scheduled-date">Date</Label>
                      <Popover>
                        <PopoverTrigger onClick={() => setPopoverOpen(!popoverOpen)}>
                          <Button
                            type="button"
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <span className="mr-2">📅</span>
                            {scheduledDate ? (scheduledDate, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        {popoverOpen && (
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={scheduledDate}
                              onSelect={(date) => {
                                setScheduledDate(date)
                                setPopoverOpen(false)
                              }}
                              initialFocus
                            />
                          </PopoverContent>
                        )}
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="scheduled-time">Time</Label>
                      <Input
                        id="scheduled-time"
                        type="time"
                        value={scheduledTime}
                        onChange={(e) => setScheduledTime(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => navigate("/dashboard/campaigns")}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Campaign"}
          </Button>
        </div>
      </form>
    </div>
  )
}
