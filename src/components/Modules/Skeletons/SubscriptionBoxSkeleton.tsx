import { Skeleton } from '@nextui-org/react'

export default function SubscriptionBoxSkeleton() {
    return (
        <div className="flex flex-col items-center justify-between gap-10 bg-white dark:bg-black-10 border dark:border-black-15 rounded-xl p-6 2xl:p-12">
            <div className="w-full space-y-5">
                <Skeleton className='w-[40%] mx-auto h-[30px] rounded-md' />
                <div className='space-y-2'>
                    {Array.from({ length: 2 }, (_, index) => (
                        <Skeleton key={index} className='w-[70%] mx-auto rounded-md h-[20px]' />
                    ))}
                </div>
                <div className="pt-4">
                    <Skeleton className='w-[30%] mx-auto h-[30px] rounded-md' />
                </div>
            </div>
            <ul className="child:flex child:items-center child:gap-3 child:dark:text-gray-60 child:text-base child:justify-center w-full space-y-2">
                {Array.from({ length: 3 }, (_, index) => (
                    <li key={index} className=''>
                        <div className="w-1.5 h-1.5 rounded-full bg-red-45"></div>
                        <Skeleton className='w-[50%] h-[15px] rounded-md' />
                    </li>
                ))}
            </ul>
        </div>
    )
}
