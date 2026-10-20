import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-ivory px-4">
      <div className="text-center">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Page Not Found</p>
        <h1 className="font-heading text-7xl font-bold text-brown-deep mb-4">404</h1>
        <p className="text-brown-light text-lg mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3 bg-gold text-brown-deep rounded-full font-bold hover:bg-gold-dark hover:text-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
