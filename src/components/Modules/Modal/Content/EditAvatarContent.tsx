import { Button, Slider } from "@nextui-org/react";
import { useCallback, useMemo, useRef } from "react";
import AvatarEditor from "react-avatar-editor";
import { Controller, useForm } from "react-hook-form";

export default function EditAvatarContent({ src, onClose, setPreview }: { src: string, onClose: () => void, setPreview: (value: string) => void }) {
    const { control, watch } = useForm({
        defaultValues: {
            zoomLevel: 10
        }
    })
    const zoomLevel = watch("zoomLevel")
    const cropRef = useRef<AvatarEditor | null>(null)


    const handleSave = useCallback(async () => {
        if (cropRef.current) {
            const dataUrl = cropRef.current.getImage().toDataURL();
            const result = await fetch(dataUrl);
            const blob = await result.blob();
            setPreview(URL.createObjectURL(blob));
            onClose()
        }
    }, [onClose, setPreview])


    return (
        useMemo(() => (
            < div className="p-4 space-y-4" >
                <AvatarEditor
                    ref={cropRef}
                    image={src}
                    className="!w-full !h-full rounded-md"
                    border={0}
                    borderRadius={150}
                    scale={zoomLevel / 10}
                />
                <Controller control={control} name="zoomLevel" render={({ field: { onChange, value } }) => (
                    <Slider
                        step={1}
                        maxValue={50}
                        minValue={10}
                        aria-label="Slider"
                        value={value}
                        color="danger"
                        onChange={(newValue) => onChange(newValue)}
                        defaultValue={10}
                        hideValue
                        className="max-w-md"
                    />
                )} />
                <div className="grid grid-cols-2 gap-4">
                    <Button onClick={onClose}>Discard</Button>
                    <Button className="bg-red-45" onClick={handleSave}>Update Avatar</Button>
                </div>
            </div >
        ), [control, handleSave, onClose, src, zoomLevel])
    )
}
