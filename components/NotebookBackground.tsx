// components/NotebookBackground.tsx

export default function NotebookBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        min-h-screen
        bg-white
        opacity-100
        bg-[linear-gradient(rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.045)_1px,transparent_1px)]
        bg-[size:32px_32px]
      "
    >
      {children}
    </div>
  );
}