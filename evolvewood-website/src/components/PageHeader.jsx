export default function PageHeader({ title, subtitle }) {
    return (
        <div className="bg-evolve-brown text-white py-20 lg:py-28 rounded-b-[3rem] mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay"></div>

            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-evolve-green/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">{title}</h1>
                {subtitle && <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">{subtitle}</p>}
            </div>
        </div>
    )
}
