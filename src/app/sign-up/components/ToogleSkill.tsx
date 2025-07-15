"use client";

import { useState } from "react";
import { Command, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { X, Check } from "lucide-react";


const skills = [ "UI/UX", "Frontend","Backend", "AI/ML","DevOps", "Project Management" ];

export default function ToggleSkill() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelected(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className="w-full min-h-[40px] border border-input rounded-md p-2 flex flex-wrap gap-2 cursor-pointer"
        >
          {selected.length === 0 && <span className="text-muted-foreground">Select skills</span>}
          {selected.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {tag}
              <X
                className="w-3 h-3 cursor-pointer"
                onMouseDown={e => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleTag(tag);
                }}
              />
            </Badge>
          ))}
        </div>
      </PopoverTrigger>

      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search skills..." />
          <CommandList>
            {skills.map((tag) => (
              <CommandItem
                key={tag}
                onSelect={() => toggleTag(tag)}
                className="cursor-pointer"
              >
                {selected.includes(tag) ? <Check /> : ""}{tag}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
