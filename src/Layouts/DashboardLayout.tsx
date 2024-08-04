import { ReactNode } from 'react'
import Navbar from '../components/Modules/Navbar/Navbar'
import Footer from '../components/Modules/Footer/Footer'
import DashboardSidebar from '../components/Templates/Dashboard/DashboardSidebar'

export default function DashboardLayout({ children }: { children: ReactNode }) {

    return (
        <>
            <Navbar />
            <div className="container flex flex-col sm:flex-row pt-28 pb-10 gap-8">
                <div className="md:flex-1 w-full">
                    <DashboardSidebar />
                </div>
                <div className="md:flex-[5] xl:flex-[3] bg-white dark:bg-black-6 border-2 dark:border-black-15 rounded-xl p-6 h-max">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}
