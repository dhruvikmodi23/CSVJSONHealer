"use client"

import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useToast } from "../hooks/use-toast"

const Navbar = ({ user, setUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { toast } = useToast()

  const handleLogout = () => {
    localStorage.removeItem("token")
    setUser(null)
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    })
    navigate("/login")
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center">
              <svg className="h-8 w-8 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900 hidden sm:block">DataFixer AI</span>
            </Link>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-6">
              <Link
                to="/dashboard"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive("/dashboard")
                    ? "text-emerald-600 border-b-2 border-emerald-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Dashboard
              </Link>
              <Link
                to="/upload"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive("/upload")
                    ? "text-emerald-600 border-b-2 border-emerald-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Upload
              </Link>
              <Link
                to="/history"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive("/history")
                    ? "text-emerald-600 border-b-2 border-emerald-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                History
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <div className="relative ml-3">
              <button
                type="button"
                className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <span className="sr-only">Open user menu</span>
                <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-medium">
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700 hidden md:inline">
                  {user?.name}
                </span>
              </button>

              {isProfileOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-10">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    <p className="font-medium">{user?.name}</p>
                    <p className="text-gray-500 truncate">{user?.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden bg-white shadow-lg`}>
        <div className="pt-2 pb-3 space-y-1 px-4">
          <Link
            to="/dashboard"
            className={`block pl-3 pr-4 py-2 rounded-md text-base font-medium ${
              isActive("/dashboard")
                ? "bg-emerald-50 text-emerald-700"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/upload"
            className={`block pl-3 pr-4 py-2 rounded-md text-base font-medium ${
              isActive("/upload")
                ? "bg-emerald-50 text-emerald-700"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Upload
          </Link>
          <Link
            to="/history"
            className={`block pl-3 pr-4 py-2 rounded-md text-base font-medium ${
              isActive("/history")
                ? "bg-emerald-50 text-emerald-700"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            History
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200 px-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-medium">
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </div>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">{user?.name}</div>
              <div className="text-sm font-medium text-gray-500">{user?.email}</div>
            </div>
          </div>
          <div className="mt-3 space-y-1">
            <button
              onClick={() => {
                handleLogout()
                setIsMenuOpen(false)
              }}
              className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 rounded-md"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar