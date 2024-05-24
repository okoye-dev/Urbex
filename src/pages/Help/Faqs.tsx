import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useFaqs } from "./hooks/useFaqs";

interface IProps {}

const FAQs: FC<IProps> = () => {
  const faqs = useFaqs();
  return (
    <div className="w-full py-6">
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={index.toString()}>
            <AccordionTrigger className="flex flex-col items-start">
              {faq.question} <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionTrigger>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQs;
