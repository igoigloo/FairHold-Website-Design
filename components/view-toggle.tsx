"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Building2 } from "lucide-react"
import { useView } from "@/contexts/view-context"

export function ViewToggle() {
  const { currentView, setCurrentView } = useView()

  return (
    <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
      <Button
        variant={currentView === "client" ? "default" : "ghost"}
        size="sm"
        onClick={() => setCurrentView("client")}
        className={`
          relative transition-all duration-300 ease-in-out transform
          ${
            currentView === "client"
              ? "bg-blue-700 text-white shadow-md scale-105 hover:bg-blue-800"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-200 hover:scale-102"
          }
        `}
      >
        <User className="h-4 w-4 mr-2" />
        Client View
        {currentView === "client" && (
          <Badge className="ml-2 bg-blue-600 text-white text-xs animate-pulse">Active</Badge>
        )}
      </Button>

      <Button
        variant={currentView === "vendor" ? "default" : "ghost"}
        size="sm"
        onClick={() => setCurrentView("vendor")}
        className={`
          relative transition-all duration-300 ease-in-out transform
          ${
            currentView === "vendor"
              ? "bg-green-700 text-white shadow-md scale-105 hover:bg-green-800"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-200 hover:scale-102"
          }
        `}
      >
        <Building2 className="h-4 w-4 mr-2" />
        Vendor View
        {currentView === "vendor" && (
          <Badge className="ml-2 bg-green-600 text-white text-xs animate-pulse">Active</Badge>
        )}
      </Button>
    </div>
  )
}
