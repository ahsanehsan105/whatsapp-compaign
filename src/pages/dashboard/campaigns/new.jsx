"use client"

import { useState } from "react"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Textarea } from "../../../components/ui/textarea"
import { ArrowLeft, Upload, CalendarIcon } from "lucide-react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function NewCampaignPage() {
  const [activeTab, setActiveTab] = useState("manual")
  const [campaignName, setCampaignName] = useState("")
  const [messageText, setMessageText] = useState("")
  const [whatsappNumber, setWhatsappNumber] = useState("")
  const [targetGroup, setTargetGroup] = useState("")
  const [startDate, setStartDate] = useState(null)
  const [messageInterval, setMessageInterval] = useState("5")
  const [csvFile, setCsvFile] = useState(null)
  const [mediaFile, setMediaFile] = useState(null)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted")
    // Handle form submission
  }

  // Format date for display
  const formatDate = (date) => {
    if (!date) return ""
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  // Custom date picker input
  const CustomDatePickerInput = ({ value, onClick }) => (
    <div className="relative">
      <Input
        type="text"
        value={value}
        onClick={onClick}
        placeholder="mm/dd/yyyy --:-- --"
        className="pl-3 pr-10 cursor-pointer"
        readOnly
      />
      <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Create New Campaign</h1>
          <p className="text-gray-600 text-sm sm:text-base">Set up a new WhatsApp message campaign</p>
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2 w-full sm:w-auto"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Campaigns
        </Button>
      </div>

      {/* Tabs */}
      <div className="bg-gray-100 rounded-md p-1">
        <div className="flex flex-col xs:flex-row">
          <button
            className={`w-full xs:w-auto flex-1 py-3 px-4 rounded-md text-center transition-all ${
              activeTab === "manual" ? "bg-white text-gray-800" : "bg-transparent text-gray-600"
            }`}
            onClick={() => setActiveTab("manual")}
          >
            Manual Entry
          </button>
          <button
            className={`w-full xs:w-auto flex-1 py-3 px-4 rounded-md text-center transition-all ${
              activeTab === "csv" ? "bg-white text-gray-800" : "bg-transparent text-gray-600"
            }`}
            onClick={() => setActiveTab("csv")}
          >
            CSV Upload
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg border p-3 sm:p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Campaign Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Campaign Name</label>
              <Input
                placeholder={activeTab === "manual" ? "Summer Promotion 2025" : "Bulk Campaign 2025"}
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
              />
            </div>

            {/* Message Content or File Upload */}
            {activeTab === "manual" ? (
              <div>
                <label className="block text-sm font-medium mb-1">Message Content</label>
                <Textarea
                  placeholder="Enter your message content here..."
                  rows={5}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium mb-1">CSV File</label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                  <input type="file" id="csv-upload" accept=".csv" onChange={handleCsvUpload} className="hidden" />
                  <label htmlFor="csv-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center">
                      <Upload className="h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">CSV file with message data</p>
                    </div>
                  </label>
                </div>
                <div className="mt-2">
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Download template for CSV format
                  </a>
                </div>
              </div>
            )}

            {/* WhatsApp Number & Target Group */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">WhatsApp Number</label>
                <div className="relative">
                  <select
                    className="w-full h-10 pl-3 pr-10 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                  >
                    <option value="">Select WhatsApp number</option>
                    <option value="primary">+1 (555) 123-4567</option>
                    <option value="secondary">+1 (555) 987-6543</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Target Group</label>
                <div className="relative">
                  <select
                    className="w-full h-10 pl-3 pr-10 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={targetGroup}
                    onChange={(e) => setTargetGroup(e.target.value)}
                  >
                    <option value="">Select target group</option>
                    <option value="customers">Customers Group</option>
                    <option value="marketing">Marketing Group</option>
                    <option value="support">Support Group</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Start Time & Message Interval */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Start Time</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  timeFormat="h:mm aa"
                  timeIntervals={15}
                  dateFormat="MM/dd/yyyy h:mm aa"
                  customInput={<CustomDatePickerInput />}
                  placeholderText="mm/dd/yyyy --:-- --"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message Interval (minutes)</label>
                <Input
                  type="number"
                  placeholder="5"
                  value={messageInterval}
                  onChange={(e) => setMessageInterval(e.target.value)}
                />
              </div>
            </div>

            {/* Media Attachment */}
            {activeTab === "manual" && (
              <div>
                <label className="block text-sm font-medium mb-1">Media Attachment (Optional)</label>
                <div className="relative">
                  <Input
                    type="file"
                    id="media-upload"
                    accept="image/*,video/*"
                    onChange={handleMediaUpload}
                    className="hidden"
                  />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full sm:w-auto"
                      onClick={() => document.getElementById("media-upload").click()}
                    >
                      Choose file
                    </Button>
                    <span className="text-sm text-gray-500">
                      {mediaFile ? mediaFile.name : "No file chosen"}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-2">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
              Create Campaign
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}