import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { features } from '../data/content';

export default function Features() {
    return (
        <>
            <SEO title="Features" description="Discover the superior features of Evolve Wood: Waterproof, Termite Proof, Fire Resistant, and more." />
            <PageHeader title="Why EvolveWood Represents Quality" subtitle="Engineered for performance, sustainability, and durability." />

            <section className="py-12 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-evolve-brown/5 group">
                                <div className="bg-evolve-green/10 w-16 h-16 rounded-2xl flex items-center justify-center text-evolve-green mb-6 group-hover:bg-evolve-green group-hover:text-white transition-colors">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold font-display text-evolve-brown mb-3">{feature.name}</h3>
                                <p className="text-sm text-evolve-text/70 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
