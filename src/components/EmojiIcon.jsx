export function EmojiIcon({ emoji }) {
  return (
    <div className="flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-md">
      <span className="text-4xl" style={{ lineHeight: 1 }}>{emoji}</span>
    </div>
  );
} 