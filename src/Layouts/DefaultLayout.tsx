import { ReactNode } from 'react'
import Navbar from '../components/Modules/Navbar/Navbar'
import Footer from '../components/Modules/Footer/Footer'

export default function DefaultLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
