import { cn } from '../lib/utils';

export function LiveProjectButton({ className }: { className?: string }) {
  return (
    <button 
      className={cn(
        "rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest bg-transparent",
        "px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base",
        "transition-colors hover:bg-[#D7E2EA]/10",
        className
      )}
    >
      Live Project
    </button>
  );
}
