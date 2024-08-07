import { Button, Card } from "@nextui-org/react";
import Download from "../../../assets/icons/Download";
import { downloadLinksProps } from "../../../interfaces/downloadLink.interface";
import calculateDownloadSize from "../../../utils/calculateDownloadSize";

export default function DownloadLinkBox({
  qualityTitle,
  encoder,
  size,
  channel,
}: downloadLinksProps) {
  return (
    <Card className="py-4 px-6 bg-white dark:bg-black-8 shadow-none flex 3xs:flex-row items-center justify-between gap-5">
      <div className="space-y-2">
        <p className="text-red-45 md:text-xl">{qualityTitle}</p>
        <div className="flex items-center gap-5 child:text-xs child:md:text-sm">
          <span>Encoder : {encoder}</span>
          <span>{calculateDownloadSize(size)}</span>
          <span>{channel}</span>
        </div>
      </div>
      <Button className="flex-shrink-0" variant="light" endContent={<Download />}>
        Download
      </Button>
    </Card>
  );
}
