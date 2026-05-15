import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#0b1020] text-white">
            
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=2070&auto=format&fit=crop"
                    alt="Paris"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70" />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/70 via-[#111827]/40 to-black" />
            </div>

            
               
            
            {/* Content */}
            <div className="relative z-20 flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
                
                {/* 404 */}
                <h1 className="text-[180px] md:text-[260px] font-black leading-none tracking-tight text-[#d4a17d]/50">
                    404
                </h1>

                <h2 className="-mt-10 text-4xl md:text-6xl font-bold">
                    Page Not Found
                </h2>

                <p className="mt-6 max-w-2xl text-lg text-gray-300">
                    The page you are looking for might have been removed,
                    renamed, or temporarily unavailable.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="rounded-md bg-[#c89b7b] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:scale-105"
                    >
                        Go Home
                    </Link>
                </div>
            </div>

            {/* Bottom Blur */}
            <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />
        </section>
    );
}