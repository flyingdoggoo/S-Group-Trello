import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/60 focus-visible:ring-[4px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-b from-blue-400 to-blue-500 text-white shadow-[0_14px_30px_-18px_rgba(59,130,246,0.95)] hover:from-blue-300 hover:to-blue-500 hover:shadow-[0_20px_34px_-18px_rgba(59,130,246,0.9)]',
        destructive:
          'text-white bg-red-500 border border-red-300/50 shadow-[0_12px_26px_-18px_rgba(248,113,113,0.95)] hover:bg-red-400 focus-visible:ring-destructive/30 dark:focus-visible:ring-destructive/40',
        outline:
          'border border-white/14 bg-slate-900/55 text-slate-100 shadow-[inset_0_1px_0_rgb(255,255,255,0.03)] hover:border-blue-300/45 hover:bg-slate-800/75 hover:text-white dark:bg-slate-900/55',
        secondary:
          'bg-slate-800/75 text-slate-100 border border-slate-700/70 shadow-[0_12px_28px_-20px_rgba(15,23,42,0.9)] hover:bg-slate-700/80',
        ghost:
          'text-slate-300 hover:bg-slate-800/65 hover:text-white',
        link: 'text-blue-300 underline-offset-4 hover:text-blue-200 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-9 gap-1.5 px-3.5 text-sm has-[>svg]:px-3',
        lg: 'h-11 px-6 text-[0.95rem] has-[>svg]:px-4',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
