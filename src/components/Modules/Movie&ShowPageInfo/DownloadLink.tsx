import { Accordion, AccordionItem } from "@nextui-org/react";
import Download from "../../../assets/icons/Download";
import ChevronDoubleRight from "../../../assets/icons/ChevronDouble";
import DownloadLinkBox from "./DownloadLinkBox";
import { allMoviesData } from "../../../interfaces/allMoviesData.interface";

export default function DownloadLink({
  movieData,
}: {
  movieData: allMoviesData;
}) {
  return (
    <div className="bg-white dark:bg-black-10 border-2 dark:border-black-15 p-6 md:p-12 space-y-4 rounded-2xl">
      <h3 className="text-gray-600 dark:text-gray-60 text-sm md:text-lg">Download Links</h3>
      <Accordion
        className="px-0 child:accordion-item !child:bg-red-45 !gap-4"
        variant="splitted"
      >
        {movieData.downLoadLink.map((item, index) => (
          <AccordionItem
            classNames={{
              base: ["!bg-mainLight !shadow-none dark:!bg-black-6 rounded-xl py-2 px-4"],
              title: [
                "text-[15px] font-manropeSemiBold sm:text-xl sm:font-manropeRegular capitalize",
              ],
            }}
            key={index}
            aria-label={item.category}
            title={item.category}
            startContent={<Download />}
            indicator={({ isOpen }) =>
              isOpen ? (
                <div className="rotate-180">
                  <ChevronDoubleRight />
                </div>
              ) : (
                <ChevronDoubleRight />
              )
            }
          >
            <div className="space-y-6">
              {item.links.map((link, index) => (
                <DownloadLinkBox key={index} {...link} />
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
