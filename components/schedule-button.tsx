"use client";

import React from "react";
import { Button } from "@/components/ui/moving-border";
import Image from "next/image";

export function ScheduleButton() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-secondary dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <Image
          src="/whatsapp-icon.svg"
          alt="whatsapp-logo"
          width={20}
          height={20}
          className="mr-2 filter invert"
        />
        Agendar um Horário
      </Button>
    </div>
  );
}
