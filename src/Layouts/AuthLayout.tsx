import { ReactNode } from 'react'
import { AuroraBackground } from '../components/Modules/AuroraBackground/AuroraBackground'

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <AuroraBackground>
                {children}
            </AuroraBackground>
        </>
    )
}
