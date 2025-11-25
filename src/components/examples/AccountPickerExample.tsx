import React from "react";
import { AccountPicker } from "@/components/metamask/account-picker";
import { ComponentPreview } from "@/components/ComponentPreview";

export function AccountPickerExample() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6">
        <ComponentPreview title="States" description="Disconnected and Connected modes.">
          <div className="flex flex-col items-center gap-4">
             <AccountPicker />
             <AccountPicker
               isConnected
               address="0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
               name="Main Account"
             />
             <AccountPicker
               isConnected
               address="0x82D...91aF"
               name="Vault"
             />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
