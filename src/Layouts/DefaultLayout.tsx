import { ReactNode } from 'react'
import Navbar from '../components/Modules/Navbar/Navbar'
import Footer from '../components/Modules/Footer/Footer'
import FreeTrial from '../components/Modules/FreeTrial/FreeTrial'
import { useLocation } from '@tanstack/react-router'

export default function DefaultLayout({ children }: { children: ReactNode }) {
    const { pathname } = useLocation()
    const isInDashboardRoutes = pathname.includes("dashboard")
    
    return (
        <>
            <Navbar />
            {children}
            {!isInDashboardRoutes && <FreeTrial />}
            <Footer />
        </>
    )
}
