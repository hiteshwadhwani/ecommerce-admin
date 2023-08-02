"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Copy, Server } from "lucide-react";
import { BadgeProps } from "./badge";
import { Badge } from "./badge";
import React from "react";
import { Button } from "./button";
import { toast } from "react-hot-toast";

interface ApiAlertProps {
  title: string;
  description: string;
  variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
  public: "Public",
  admin: "Admin",
};

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

const ApiAlert: React.FC<ApiAlertProps> = ({ title, description, variant }) => {
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success('copied to clipboard')
  };
  return (
    <Alert>
      <Server className="h-4 w-4" />
      <AlertTitle className="flex gap-x-3 items-center">
        {title}
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className="flex flex-row justify-between items-center mt-2">
        <code className="rounded bg-muted px-4 py-2 font-mono text-sm font-semibold">
          {description}
        </code>
        <Button variant={"outline"} size={"sm"} onClick={onCopy}>
          <Copy className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
};
export default ApiAlert;
