import { Tab, Tabs } from '@nextui-org/react'
import AuthenticationCard from '../../components/Modules/AuthenticationCard/AuthenticationCard'
import ForgetPasswordByUsernameForm from '../../components/Templates/ForgetPassword/ForgetPasswordByUsernameForm'
import ForgetPasswordByEmilForm from '../../components/Templates/ForgetPassword/ForgetPasswordByEmailForm'

export default function ForgetPassword() {
    return (
        <AuthenticationCard>
            <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-center">
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
