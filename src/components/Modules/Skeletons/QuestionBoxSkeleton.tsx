import { Skeleton } from '@nextui-org/react'

export default function QuestionBoxSkeleton() {
    return (
        <div className='flex items-end gap-2'>
            <Skeleton className='w-[45px] h-[45px] rounded-lg' />
            <Skeleton className='w-full h-[30px] rounded-md' />
        </div>
    )
}
