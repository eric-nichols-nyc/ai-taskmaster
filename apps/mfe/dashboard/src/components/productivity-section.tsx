import { LineChart, Clock } from "lucide-react"

export function ProductivitySection() {
  return (
    <div className="bg-[#1a2235] rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <LineChart className="size-5 text-purple-400" />
          <h2 className="text-xl font-semibold text-purple-400">Productivity</h2>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="size-4 text-gray-400" />
          <span className="text-sm text-gray-400">Analytics</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm">Tasks</span>
          <span className="text-xs text-green-400 ml-auto">1/3 (33%)</span>
        </div>
        <div className="w-full h-2 bg-[#232b3d] rounded-full overflow-hidden">
          <div className="h-full bg-green-400 rounded-full" style={{ width: "33%" }}></div>
        </div>
      </div>
    </div>
  )
}
