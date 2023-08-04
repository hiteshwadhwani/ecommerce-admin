"use client";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BillboardClient = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Billboard"
          description="Manage billboard for your store"
        />
        <Button
          onClick={() => router.push(`/{}`)}
        >
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      <Separator />
    </>
  );
};
export default BillboardClient;
