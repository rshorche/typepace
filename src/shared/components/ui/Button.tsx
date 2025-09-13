import { cn } from "@/shared/lib/cn";
import { type ButtonProps, buttonVariants } from "./button.variants";

export const Button = ({
  className,
  variant,
  width,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, width, className }))}
      {...props}>
      {children}
    </button>
  );
};
