import { Tab, Tabs } from '@nextui-org/react'
import AuthenticationCard from '../../components/Modules/AuthenticationCard/AuthenticationCard'
import ForgetPasswordByUsernameForm from '../../components/Templates/ForgetPassword/ForgetPasswordByUsernameForm'
import ForgetPasswordByEmilForm from '../../components/Templates/ForgetPassword/ForgetPasswordByEmailForm'
import { Link } from '@tanstack/react-router'
import ArrowLeftIcon from '../../assets/icons/ArrowLeft'

export default function ForgetPassword() {
    return (
        <AuthenticationCard>
            <Link to='/login' className='text-sm font-manropeMedium text-gray-60 flex items-center gap-1.5 hover:text-black-6 dark:hover:text-white transition-colors'><ArrowLeftIcon /><span>Back to Login</span></Link>
            <h1 className="text-3xl md:text-5xl font-manropeBold dark:text-white">
                Forget Password
            </h1>
            <Tabs aria-label="Forget-password options" fullWidth variant='underlined' className='mt-4'>
                <Tab key="Username" title="Username" className='w-full'>
                    <ForgetPasswordByUsernameForm />
                </Tab>
                <Tab key="Email" title="Email" className='w-full'>
                    <ForgetPasswordByEmilForm />
                </Tab>
            </Tabs>
        </AuthenticationCard>
    )
}
