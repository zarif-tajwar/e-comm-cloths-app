import { cn } from '@/lib/util';
import React from 'react';

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  horizontal?: boolean;
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, horizontal, ...props }, ref) => {
    return (
      <div
        className={cn(
          'bg-primary-100',
          !horizontal && 'h-px w-full',
          horizontal && 'h-full w-px',
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);

Divider.displayName = 'Divider';

export default Divider;
