export default function Tag({ text }: { text: string }) {
  return (
    <div className="py-[4px] w-[65px] grid place-items-center text-[12px] border-[1px] border-shark-950/80 text-shark-950/80 rounded-full">
      {text}
    </div>
  );
}
