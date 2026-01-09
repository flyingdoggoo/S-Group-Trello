"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { useRoleStore } from "@/stores/roles.store";

export function ComboboxRoleMember({
  onChange,
  defaultValue,
  disabled = false,
  entityType = "project",
}: {
  onChange?: (value: string) => void;
  defaultValue?: string;
  disabled?: boolean;
  entityType?: "project" | "board";
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const { roles, fetchRoles, loading } = useRoleStore();

  useEffect(() => {
    console.log(`ComboboxRoleMember: fetching roles for ${entityType}`);
    fetchRoles(entityType);
  }, [entityType, fetchRoles]);

  useEffect(() => {
    console.log(`ComboboxRoleMember: defaultValue changed to ${defaultValue}`);
    setValue(defaultValue);
  }, [defaultValue]);

  const currentRole = roles.find((role) => role.value === value);
  const displayLabel = loading
    ? "Loading roles..."
    : currentRole?.label || "Select role...";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] justify-between"
          disabled={disabled || loading}
        >
          {displayLabel}
          {!disabled && <ChevronsUpDown className="opacity-50" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0">
        <Command>
          <CommandInput placeholder="Select role..." className="h-9" />
          <CommandList>
            <CommandEmpty>No role found.</CommandEmpty>
            <CommandGroup>
              {roles.map((role) => (
                <CommandItem
                  key={role.value}
                  value={role.value}
                  onSelect={(currentValue) => {
                    const newValue = currentValue === value ? "" : currentValue;
                    console.log(
                      `Role selected: ${currentValue} -> ${newValue}`
                    );
                    setValue(newValue);
                    setOpen(false);
                    if (onChange) onChange(newValue);
                  }}
                >
                  {role.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === role.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
