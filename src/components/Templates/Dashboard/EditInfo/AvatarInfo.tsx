import { useCallback, useMemo, useRef, useState } from 'react';
import { Avatar, Button, useDisclosure } from '@nextui-org/react';
import defaultUserImage from '../../../../assets/images/defaultUser.jpg';
import TrashIcon from '../../../../assets/icons/Trash';
import MainTooltip from '../../../Modules/Tooltip/MainTooltip';
import UploadIcon from '../../../../assets/icons/Upload';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import MainModal from '../../../Modules/Modal/MainModal';
import EditAvatarContent from '../../../Modules/Modal/Content/EditAvatarContent';
import toast from 'react-hot-toast';

interface avatarInfo {
    avatar: string
}

export default function AvatarInfo() {
    const { control, handleSubmit, watch } = useForm<avatarInfo>()
    const avatar = watch("avatar")
    const [preview, setPreview] = useState(defaultUserImage)

    const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure()

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileInputClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, onChange: (value: File) => void) => {
        console.log("trigger");

        const file: File | undefined = e.target.files?.[0];
        if (file) {
            const fileSizeInMB = file.size / 1024 / 1024;
            const maxSizeInMB = 10; // 10MB size limit
            if (fileSizeInMB > maxSizeInMB) {
                toast.error("Selected File's size must be under 10MB˝")
                return;
            }
            onChange(file);
            onOpen();
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }, [onOpen])

    const submitFormHandler: SubmitHandler<avatarInfo> = (data) => {
        console.log(data);
    }
    return (
        <div className='flex items-end gap-8'>
            {useMemo(() => (
                <>
                    <div className='relative w-max'>
                        <Avatar src={preview} isBordered className='w-[100px] h-[100px]' />
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
                                accept='.jpg, .png, .jpeg'
                                onChange={(e) => handleFileChange(e, onChange)}
                            />
                        )} />
                        <Button startContent={<UploadIcon />} variant='ghost' radius='full' onClick={handleFileInputClick}>
                            Upload Photo
                        </Button>
                        <p className='text-xs'>At least 256 * 256px PNG or JPG file.</p>
                    </form>
                </>
            ), [control, handleFileChange, handleSubmit, preview])}
            <MainModal isOpen={isOpen} onOpenChange={onOpenChange} body={<EditAvatarContent src={avatar} onClose={onClose} setPreview={setPreview} />} />
        </div>
    );
}