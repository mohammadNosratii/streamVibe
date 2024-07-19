import { useMemo, useRef, useState } from 'react';
import { Button, Image, useDisclosure } from '@nextui-org/react';
import defaultUserImage from '../../../../assets/images/defaultUser.jpg';
import TrashIcon from '../../../../assets/icons/Trash';
import MainTooltip from '../../../Modules/Tooltip/MainTooltip';
import UploadIcon from '../../../../assets/icons/Upload';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import MainModal from '../../../Modules/Modal/MainModal';
import EditAvatarContent from '../../../Modules/Modal/Content/EditAvatarContent';

interface avatarInfo {
    avatar: string
}

export default function AvatarInfo() {
    const { control, handleSubmit, watch } = useForm<avatarInfo>()
    const avatar = watch("avatar")
    const [preview, setPreview] = useState(defaultUserImage)

    const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fileInputRef = useRef<any>(null);

    const handleFileInputClick = () => {
        fileInputRef.current.click();
    };

    const submitFormHandler: SubmitHandler<avatarInfo> = (data) => {
        console.log(data);
    }
    return (
        <div className='flex items-end gap-8'>
            {useMemo(() => (
                <>
                    <div className='relative w-max'>
                        <Image src={preview} alt='' width={100} height={100} radius='full' />
                        <MainTooltip content='Remove Avatar'>
                            <Button isIconOnly radius='full' size='sm' color='danger' className='absolute right-0 bottom-0 z-10' onClick={() => setPreview(defaultUserImage)}>
                                <TrashIcon />
                            </Button>
                        </MainTooltip>
                    </div>
                    <form onSubmit={handleSubmit(submitFormHandler)} className='space-y-3'>
                        <Controller name='avatar' control={control} render={({ field: { onChange } }) => (
                            <input
                                ref={fileInputRef}
                                type='file'
                                className='hidden'
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                onChange={(e: any) => {
                                    onChange(e.target.files[0])
                                    onOpen()
                                }}
                            />
                        )} />
                        <Button startContent={<UploadIcon />} variant='ghost' radius='full' onClick={handleFileInputClick}>
                            Upload Photo
                        </Button>
                        <p className='text-xs'>At least 256 * 256px PNG or JPG file.</p>
                    </form>
                </>
            ), [control, handleSubmit, onOpen, preview])}
            <MainModal isOpen={isOpen} onOpenChange={onOpenChange} body={<EditAvatarContent src={avatar} onClose={onClose} setPreview={setPreview} />} />
        </div>
    );
}