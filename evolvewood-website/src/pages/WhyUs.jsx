import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { features, blogs } from '../data/content';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function WhyUs() {
    return (
        <>
            <SEO title="Why Choose Us" />
            <PageHeader title="Why EvolveWood?" subtitle="The smart, sustainable choice for modern industry." />

            <section className="py-12 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden mb-16 border border-evolve-brown/10">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-12 lg:p-16 bg-evolve-brown text-white">
                                <h2 className="text-3xl font-bold font-display mb-8">Traditional Wood</h2>
                                <ul className="space-y-6">
                                    <li className="flex items-start opacity-80">
                                        <XCircle className="text-red-400 mr-4 flex-shrink-0" />
                                        <span>Susceptible to termite attacks and decay</span>
                                    </li>
                                    <li className="flex items-start opacity-80">
                                        <XCircle className="text-red-400 mr-4 flex-shrink-0" />
                                        <span>Requires regular maintenance and painting</span>
                                    </li>
                                    <li className="flex items-start opacity-80">
                                        <XCircle className="text-red-400 mr-4 flex-shrink-0" />
                                        <span>Contributes to deforestation</span>
                                    </li>
                                    <li className="flex items-start opacity-80">
                                        <XCircle className="text-red-400 mr-4 flex-shrink-0" />
                                        <span>Absorbs moisture and rot</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-12 lg:p-16 bg-white text-evolve-brown">
                                <h2 className="text-3xl font-bold font-display mb-8 text-evolve-green">EvolveWood</h2>
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="text-evolve-green mr-4 flex-shrink-0" />
                                        <span className="font-bold">100% Termite Proof & Rot Resistant</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="text-evolve-green mr-4 flex-shrink-0" />
                                        <span className="font-bold">Maintenance Free - No painting required</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="text-evolve-green mr-4 flex-shrink-0" />
                                        <span className="font-bold">Eco-Friendly - Saves Trees</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="text-evolve-green mr-4 flex-shrink-0" />
                                        <span className="font-bold">Waterproof & Weather Resistant</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold font-display text-evolve-brown mb-6">Our Commitment</h3>
                        <p className="text-evolve-text/80 text-lg leading-relaxed">
                            India is generating about 3.5 million tonnes of plastic waste annually.
                            EvolveWood products help reduce this burden by recycling plastic into durable, high-utility profiles.
                            Around 60% of the generated plastic waste is reportedly recycled and remaining quantities were disposed in landfills.
                            We are changing that.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
