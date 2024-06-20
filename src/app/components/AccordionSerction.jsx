import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionSerction = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            className={"text-sm font-bold hover:text-orange-500"}
          >
            Food Recycling And Digestion
          </AccordionTrigger>
          <AccordionContent
            className={"bg-green-200/10 p-1 text-xs text-muted-foreground"}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, fugit. Velit consequuntur maiores totam distinctio
            molestiae, doloribus laudantium temporibus voluptate cumque,
            incidunt officiis molestias voluptatum id, pariatur aperiam nulla.
            Exercitationem.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger
            className={"text-sm font-bold hover:text-orange-500"}
          >
            Metal And Plastique Recycling Facilitites
          </AccordionTrigger>
          <AccordionContent
            className={"bg-green-200/10 p-1 text-xs text-muted-foreground"}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, fugit. Velit consequuntur maiores totam distinctio
            molestiae, doloribus laudantium temporibus voluptate cumque,
            incidunt officiis molestias voluptatum id, pariatur aperiam nulla.
            Exercitationem.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger
            className={"text-sm font-bold hover:text-orange-500"}
          >
            Medical And Biologocal Traitement
          </AccordionTrigger>
          <AccordionContent
            className={"bg-green-200/10 p-1 text-xs text-muted-foreground"}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, fugit. Velit consequuntur maiores totam distinctio
            molestiae, doloribus laudantium temporibus voluptate cumque,
            incidunt officiis molestias voluptatum id, pariatur aperiam nulla.
            Exercitationem.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionSerction;
