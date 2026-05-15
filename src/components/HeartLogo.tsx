export function HeartLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 3 4.5 6.5 4.5c2 0 3.6 1.1 4.5 2.7C12 5.6 13.5 4.5 15.5 4.5 19 4.5 21.1 8.2 19.6 11.7 17.5 16.4 12 21 12 21z" />
    </svg>
  );
}
