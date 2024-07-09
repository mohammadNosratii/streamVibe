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
    <div className="dark:bg-black-10 border-2 dark:border-black-15 p-6 md:p-12 space-y-4 rounded-2xl">
      <Accordion
        className="px-2 child:accordion-item !child:bg-red-45"
        variant="splitted"
      >
        {movieData.downLoadLink.map((item, index) => (
          <AccordionItem
            classNames={{
              base: ["dark:!bg-black-6 rounded-xl py-2 px-4"],
              title: [
                "text-[15px] font-manropeSemiBold sm:text-xl sm:font-manropeRegular",
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
