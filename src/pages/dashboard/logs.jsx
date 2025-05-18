import { Card } from "../../components/ui/card"
import { Table } from "../../components/ui/table"

export default function MessageLogs() {
  // Sample log data
  const logs = [
    {
      id: "1",
      messageId: "msg_123456",
      phoneNumber: "+1234567890",
      status: "Delivered",
      timestamp: "2023-05-18 14:30:22",
      campaign: "Welcome Campaign",
    },
    {
      id: "2",
      messageId: "msg_123457",
      phoneNumber: "+1987654321",
      status: "Failed",
      timestamp: "2023-05-18 14:31:05",
      campaign: "Welcome Campaign",
    },
    {
      id: "3",
      messageId: "msg_123458",
      phoneNumber: "+1122334455",
      status: "Delivered",
      timestamp: "2023-05-18 14:32:18",
      campaign: "Promo Campaign",
    },
    {
      id: "4",
      messageId: "msg_123459",
      phoneNumber: "+1555666777",
      status: "Pending",
      timestamp: "2023-05-18 14:33:45",
      campaign: "Promo Campaign",
    },
    {
      id: "5",
      messageId: "msg_123460",
      phoneNumber: "+1999888777",
      status: "Delivered",
      timestamp: "2023-05-18 14:35:12",
      campaign: "Reminder Campaign",
    },
  ]

  // Status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800"
      case "Failed":
        return "bg-red-100 text-red-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Message Logs</h1>
        <p className="text-gray-500">View the delivery status of all messages sent through the system</p>
      </div>

      <Card>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Recent Message Logs</h2>
            <div className="flex gap-2">
              <input type="text" placeholder="Search logs..." className="px-3 py-1 border rounded-md" />
              <button className="px-3 py-1 bg-gray-100 rounded-md">Filter</button>
            </div>
          </div>

          <Table>
            <thead>
              <tr>
                <th>Message ID</th>
                <th>Phone Number</th>
                <th>Campaign</th>
                <th>Status</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id}>
                  <td>{log.messageId}</td>
                  <td>{log.phoneNumber}</td>
                  <td>{log.campaign}</td>
                  <td>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${getStatusColor(log.status)}`}>
                      {log.status}
                    </span>
                  </td>
                  <td>{log.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-500">Showing 5 of 125 logs</div>
            <div className="flex gap-1">
              <button className="px-3 py-1 border rounded-md">Previous</button>
              <button className="px-3 py-1 border rounded-md bg-gray-100">1</button>
              <button className="px-3 py-1 border rounded-md">2</button>
              <button className="px-3 py-1 border rounded-md">3</button>
              <button className="px-3 py-1 border rounded-md">Next</button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
