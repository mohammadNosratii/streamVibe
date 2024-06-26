import { Button } from "@nextui-org/react";
import QuestionBox from "./QuestionBox";

export default function FrequentlyQuestions() {
    return (
        <div className="container my-32">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4 justify-between">
                <div className="space-y-3">
                    <h2 className="text-2xl lg:text-3xl 2xl:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-60 text-sm lg:text-base 2xl:text-lg">
                        Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
                    </p>
                </div>
                <Button className="text-white bg-red-45 rounded-md md:px-6 md:py-7 lg:px-6 lg:py-8 text-sm md:text-md lg:text-xl"
                >
                    Ask a Question
                </Button>
            </div>
            <QuestionBox />
        </div>
    )
}
