export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-white/70 backdrop-blur-md flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto rounded-full border-2 border-gold/20 border-t-gold loader-spin mb-3" />
        <p className="text-sm text-brown-light tracking-wide">Loading...</p>
      </div>
    </div>
  );
}
