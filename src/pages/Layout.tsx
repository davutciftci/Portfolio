
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans antialiased text-slate-200 selection:bg-indigo-500/30">
      <Navbar />
      <main className="grow pt-20">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
