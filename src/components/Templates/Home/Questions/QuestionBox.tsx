import { Accordion, AccordionItem, Card } from "@nextui-org/react";
import PlusIcon from "../../../../assets/icons/Plus";
import MinusIcon from "../../../../assets/icons/Minus";
import { questionBoxProps } from "../../../../interfaces/questionBox.interface";
import { useGetFrequentlyQuestionsApi } from "../../../../hooks/api/useHomeApi";
import QuestionBoxSkeleton from "../../../Modules/Skeletons/QuestionBoxSkeleton";

export default function QuestionBox() {
  const { data: getFrequentlyQuestions, isLoading } =
    useGetFrequentlyQuestionsApi();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 w-[95%] mx-auto gap-8 lg:gap-14">
      {isLoading ? (
        Array.from({ length: 8 }, (_, index) => (
          <QuestionBoxSkeleton key={index} />
        ))
      ) : (
        <>
          <Accordion>
            {getFrequentlyQuestions
              ?.slice(0, 4)
              .map((question: questionBoxProps) => (
                <AccordionItem
                  key={question.id}
                  aria-label={question.title}
                  title={question.title}
                  indicator={({ isOpen }) =>
                    isOpen ? (
                      <MinusIcon />
                    ) : (
                      <PlusIcon className="fill-current" />
                    )
                  }
                  className="frequencyBorder-gradient"
                  startContent={
                    <Card className="bg-white dark:bg-black-15 w-12 h-12 flex items-center justify-center shadow-sm">
                      {question.id.toString().padStart(2, "0")}
                    </Card>
                  }
                >
                  {question.description}
                </AccordionItem>
              ))}
          </Accordion>
          <Accordion>
            {getFrequentlyQuestions
              ?.slice(4, 8)
              .map((question: questionBoxProps) => (
                <AccordionItem
                  key={question.id}
                  aria-label={question.title}
                  title={question.title}
                  indicator={({ isOpen }) =>
                    isOpen ? (
                      <MinusIcon />
                    ) : (
                      <PlusIcon className="fill-current" />
                    )
                  }
                  className="frequencyBorder-gradient"
                  startContent={
                    <Card className="bg-white dark:bg-black-15 w-12 h-12 flex items-center justify-center shadow-sm">
                      {question.id.toString().padStart(2, "0")}
                    </Card>
                  }
                >
                  {question.description}
                </AccordionItem>
              ))}
          </Accordion>
        </>
      )}
    </div>
  );
}
