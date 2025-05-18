"use client"

import { useState } from "react"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Separator } from "../../components/ui/separator"
import { Switch } from "../../components/ui/switch"
import { AlertCircle, Save } from "lucide-react"
import { Alert, AlertDescription } from "../../components/ui/alert"
import { useToast } from "../../hooks/use-toast"

export default function SettingsPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // General settings
  const [companyName, setCompanyName] = useState("Acme Inc.")
  const [defaultInterval, setDefaultInterval] = useState("5")
  const [maxMessagesPerCampaign, setMaxMessagesPerCampaign] = useState("3000")

  // WhatsApp settings
  const [enableRetries, setEnableRetries] = useState(true)
  const [maxRetries, setMaxRetries] = useState("3")
  const [retryInterval, setRetryInterval] = useState("5")
  const [enableMediaMessages, setEnableMediaMessages] = useState(true)
  const [maxMediaSize, setMaxMediaSize] = useState("16")

  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [notificationEmail, setNotificationEmail] = useState("admin@example.com")
  const [notifyCampaignStart, setNotifyCampaignStart] = useState(true)
  const [notifyCampaignEnd, setNotifyCampaignEnd] = useState(true)
  const [notifyErrors, setNotifyErrors] = useState(true)

  const handleSaveSettings = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // In a real app, this would be an API call to save settings
      // For demo purposes, we'll just simulate a successful save
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Settings saved",
        description: "Your settings have been saved successfully.",
      })
    } catch (err) {
      setError("An error occurred while saving settings. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Configure your WhatsApp automation system</p>
      </div>

      <form onSubmit={handleSaveSettings}>
        <Tabs defaultValue="general">
          <TabsList className="mb-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Configure basic system settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="default-interval">Default Message Interval (minutes)</Label>
                  <Select value={defaultInterval} onValueChange={setDefaultInterval}>
                    <SelectTrigger id="default-interval">
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
                <div className="space-y-2">
                  <Label htmlFor="max-messages">Maximum Messages Per Campaign</Label>
                  <Input
                    id="max-messages"
                    type="number"
                    value={maxMessagesPerCampaign}
                    onChange={(e) => setMaxMessagesPerCampaign(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Limit the number of messages that can be sent in a single campaign
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Default Message Templates</CardTitle>
                <CardDescription>Configure default message templates for campaigns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="default-template">Default Template</Label>
                  <Textarea
                    id="default-template"
                    placeholder="Enter default message template"
                    rows={4}
                    defaultValue="Hi {name}, this is a message from {company}. {message}"
                  />
                  <p className="text-xs text-muted-foreground">
                    You can use {"{name}"}, {"{company}"}, and {"{message}"} as placeholders
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="whatsapp" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>WhatsApp Settings</CardTitle>
                <CardDescription>Configure WhatsApp messaging settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enable-retries">Enable Message Retries</Label>
                    <p className="text-sm text-muted-foreground">Automatically retry failed message deliveries</p>
                  </div>
                  <Switch id="enable-retries" checked={enableRetries} onCheckedChange={setEnableRetries} />
                </div>

                {enableRetries && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="max-retries">Maximum Retry Attempts</Label>
                      <Input
                        id="max-retries"
                        type="number"
                        value={maxRetries}
                        onChange={(e) => setMaxRetries(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="retry-interval">Retry Interval (minutes)</Label>
                      <Input
                        id="retry-interval"
                        type="number"
                        value={retryInterval}
                        onChange={(e) => setRetryInterval(e.target.value)}
                      />
                    </div>
                  </>
                )}

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enable-media">Enable Media Messages</Label>
                    <p className="text-sm text-muted-foreground">Allow sending images and other media in messages</p>
                  </div>
                  <Switch id="enable-media" checked={enableMediaMessages} onCheckedChange={setEnableMediaMessages} />
                </div>

                {enableMediaMessages && (
                  <div className="space-y-2">
                    <Label htmlFor="max-media-size">Maximum Media Size (MB)</Label>
                    <Input
                      id="max-media-size"
                      type="number"
                      value={maxMediaSize}
                      onChange={(e) => setMaxMediaSize(e.target.value)}
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rate Limiting</CardTitle>
                <CardDescription>Configure message rate limiting to avoid WhatsApp restrictions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="rate-limit">Maximum Messages Per Minute</Label>
                  <Input id="rate-limit" type="number" defaultValue="30" />
                  <p className="text-xs text-muted-foreground">
                    Limit the number of messages that can be sent per minute to avoid WhatsApp restrictions
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cooldown-period">Cooldown Period (minutes)</Label>
                  <Input id="cooldown-period" type="number" defaultValue="60" />
                  <p className="text-xs text-muted-foreground">
                    Period to wait after reaching the rate limit before resuming sending
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
                <CardDescription>Configure email notifications for campaign events</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Enable Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive email notifications for important events</p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>

                {emailNotifications && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="notification-email">Notification Email</Label>
                      <Input
                        id="notification-email"
                        type="email"
                        value={notificationEmail}
                        onChange={(e) => setNotificationEmail(e.target.value)}
                      />
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="font-medium">Notification Events</h3>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="notify-campaign-start">Campaign Start</Label>
                        <Switch
                          id="notify-campaign-start"
                          checked={notifyCampaignStart}
                          onCheckedChange={setNotifyCampaignStart}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="notify-campaign-end">Campaign Completion</Label>
                        <Switch
                          id="notify-campaign-end"
                          checked={notifyCampaignEnd}
                          onCheckedChange={setNotifyCampaignEnd}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="notify-errors">Delivery Errors</Label>
                        <Switch id="notify-errors" checked={notifyErrors} onCheckedChange={setNotifyErrors} />
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage users who have access to the system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <h3 className="font-medium">Admin User</h3>
                      <p className="text-sm text-muted-foreground">admin@example.com</p>
                    </div>
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700">
                      Admin
                    </Badge>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <h3 className="font-medium">Marketing User</h3>
                      <p className="text-sm text-muted-foreground">marketing@example.com</p>
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                      Editor
                    </Badge>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <h3 className="font-medium">Support User</h3>
                      <p className="text-sm text-muted-foreground">support@example.com</p>
                    </div>
                    <Badge variant="outline" className="bg-slate-100 text-slate-700">
                      Viewer
                    </Badge>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    Add New User
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Save className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Settings
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
