"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ComponentPreview } from "@/components/ComponentPreview";

export function SelectExample() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6">
        <ComponentPreview title="Dropdown" description="Single selection menu.">
          <div className="w-full max-w-[200px]">
            <Select defaultValue="eth">
              <SelectTrigger>
                <SelectValue placeholder="Select network" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eth">Ethereum</SelectItem>
                <SelectItem value="btc">Bitcoin</SelectItem>
                <SelectItem value="matic">Polygon</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
