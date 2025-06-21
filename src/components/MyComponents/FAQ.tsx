import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { ChevronDown } from "lucide-react"
function FAQ() {
  return (
    <section id="FAQ" className="bg-gray-100">
          <div className="container mx-auto py-20 px-4 md:px-0 ">
               <h3 className="text-xl md:text-3xl text-center mb-4">Frequently sked Questions</h3>
               <div className=" mx-auto w-3/4 md:w-1/2 p-4 rounded-xl flex flex-col gap-8 bg-white">
                 <Collapsible className="w-full ">
                      <div className="flex justify-between">
                        <CollapsibleTrigger className="w-full text-left">Can I use this in my project? </CollapsibleTrigger><ChevronDown />
                      </div>
                      <CollapsibleContent>
                      Yes. Free to use for personal and commercial projects. No attribution
                      required.
                      </CollapsibleContent>
                 </Collapsible>
                 <Collapsible className="w-full">
                      <div className="flex justify-between">
                        <CollapsibleTrigger className="w-full text-left">Can I use this in my project? </CollapsibleTrigger><ChevronDown />
                      </div>
                      <CollapsibleContent>
                      Yes. Free to use for personal and commercial projects. No attribution
                      required.
                      </CollapsibleContent>
                 </Collapsible>
                 <Collapsible className="w-full">
                      <div className="flex justify-between">
                        <CollapsibleTrigger className="w-full text-left">Can I use this in my project? </CollapsibleTrigger><ChevronDown />
                      </div>
                      <CollapsibleContent>
                      Yes. Free to use for personal and commercial projects. No attribution
                      required.
                      </CollapsibleContent>
                 </Collapsible>
                 <Collapsible className="w-full">
                      <div className="flex justify-between">
                        <CollapsibleTrigger className="w-full text-left">Can I use this in my project? </CollapsibleTrigger><ChevronDown />
                      </div>
                      <CollapsibleContent>
                      Yes. Free to use for personal and commercial projects. No attribution
                      required.
                      </CollapsibleContent>
                 </Collapsible>
               </div>
          </div>
    </section>
  )
}

export default FAQ