import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/ComponentPreview";

export function DialogExample() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6">
        <ComponentPreview title="Modal" description="Overlay for critical actions.">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Transaction</DialogTitle>
                <DialogDescription>
                  Are you sure you want to send 0.5 ETH to 0x123...?
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-body-sm text-alternative">Transaction details would go here.</p>
              </div>
              <DialogFooter>
                <Button variant="outline" className="mr-2">Cancel</Button>
                <Button>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentPreview>
      </div>
    </div>
  );
}
