import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-4">
            <h1 className="text-9xl font-black text-loly-pink mb-4">404</h1>
            <p className="text-2xl font-mono mb-8">This page got rug pulled.</p>
            <Link
                href="/"
                className="bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
            >
                Go Home
            </Link>
        </div>
    );
}
