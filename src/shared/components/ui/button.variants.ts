import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex focus:outline-none items-center justify-center rounded-xl border-0 m-2 w-16 h-16 text-xl transition-all",
  {
    variants: {
      variant: {
        primary: "bg-zinc-800 text-zinc-100 shadow-up ",
        secondary: "bg-zinc-800 text-zinc-100 shadow-down",
      },
      width: {
        full: "w-full",
        half: "w-1/2",
        auto: "w-auto",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}
