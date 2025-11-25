import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ComponentPreview } from "@/components/ComponentPreview";

export function CardExample() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6">
        <ComponentPreview title="Simple Card" description="Basic content container.">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Create Account</CardTitle>
              <CardDescription>Start your crypto journey today.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input placeholder="Account Name" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Create</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </div>
    </div>
  );
}
