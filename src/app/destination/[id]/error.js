'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

export default function Error({ error, reset }) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b1020] text-white">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2070&auto=format&fit=crop')",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Gradient Blur */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/60 via-black/40 to-black" />

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c89b7b]/10 blur-3xl" />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 mx-6 w-full max-w-2xl rounded-[32px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
            >

                {/* Icon */}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#c89b7b]/30 bg-[#c89b7b]/10">
                    <AlertTriangle className="h-12 w-12 text-[#d4a17d]" />
                </div>

                {/* Error Code */}
                <h1 className="mt-8 text-7xl font-black tracking-tight text-[#d4a17d]/30">
                    ERROR
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                    Something Went Wrong
                </h2>

                {/* Description */}
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
                    An unexpected error occurred while loading this page.
                    Please try again or return to the homepage.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                    <button
                        onClick={() => reset()}
                        className="group flex items-center gap-2 rounded-xl bg-[#c89b7b] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:scale-105"
                    >
                        <RefreshCw className="h-4 w-4 transition group-hover:rotate-180" />
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold uppercase tracking-wide backdrop-blur-md transition hover:bg-white/20"
                    >
                        <Home className="h-4 w-4" />
                        Back Home
                    </Link>

                </div>

                {/* Error Message */}
                {error?.message && (
                    <div className="mt-8 rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-left">
                        <p className="text-sm text-red-200">
                            {error.message}
                        </p>
                    </div>
                )}
            </motion.div>
        </section>
    )
}