import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { industries } from '../data/content';
import { CheckCircle2 } from 'lucide-react';

export default function Industries() {
    return (
        <>
            <SEO title="Industries We Serve" description="Evolve Wood serves various sectors including Industrial, Storage, Civil, and Furniture." />
            <PageHeader title="Industries We Serve" subtitle="Versatile solutions for a wide range of industrial and commercial applications." />

            <section className="py-12 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {industries.map((ind, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-lg border border-evolve-brown/10">
                                <h3 className="text-2xl font-bold font-display text-evolve-brown mb-6 pb-4 border-b border-evolve-brown/10">{ind.title}</h3>
                                <ul className="space-y-4">
                                    {ind.items.map((item, i) => (
                                        <li key={i} className="flex items-center text-evolve-text/80">
                                            <CheckCircle2 size={20} className="text-evolve-green mr-3 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
