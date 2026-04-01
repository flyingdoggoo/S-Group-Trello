import * as React from 'react';

import { cn } from "../../lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'placeholder:text-slate-400 focus-visible:border-blue-300/70 focus-visible:ring-blue-500/25 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-24 w-full rounded-xl border border-white/14 bg-slate-900/65 px-3.5 py-2.5 text-sm text-slate-100 shadow-[inset_0_1px_0_rgb(255,255,255,0.04)] transition-[color,box-shadow,border-color,background-color] outline-none focus-visible:ring-[4px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
