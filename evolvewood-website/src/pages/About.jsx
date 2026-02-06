import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { Target, Eye, Globe } from 'lucide-react';

export default function About() {
    return (
        <>
            <SEO title="About Us" description="Learn about Evolve Profile Industries and our mission to save nature through recycling." />
            <PageHeader title="About Us" subtitle="Dedicated to innovation and sustainability from start to finish." />

            <section className="py-12 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="prose prose-lg text-evolve-text/80">
                            <h2 className="text-3xl font-bold text-evolve-brown font-display mb-6">Who We Are</h2>
                            <p>
                                Evolve profile industries is engaged in manufacturing of a plastic packaging materials.
                                With a reach experience and a team of professionals, we are able to cater the industry with an innovative products.
                            </p>
                            <p>Why Evolve Group?</p>
                            <h3 className="text-xl font-bold text-evolve-brown mt-8">Dedication to innovation</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>We've revolutionized the industry with safer, stronger, and more environmentally-friendly products.</li>
                            </ul>
                            <h3 className="text-xl font-bold text-evolve-brown mt-8">Sustainability from start to finish</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Our holistic approach to green products promotes positive effects on the environment throughout the entire life cycle of any project.</li>
                                <li>From the manufacturing process to the finished material, we go the extra mile to make sure every step is sustainable.</li>
                                <li>Protecting the environment is in our DNA and will forever remain one of our key objectives.</li>
                            </ul>
                        </div>

                        <div className="grid gap-8">
                            <div className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-evolve-green">
                                <div className="flex items-center space-x-4 mb-4">
                                    <Target className="text-evolve-green" size={32} />
                                    <h3 className="text-2xl font-bold font-display text-evolve-brown">Our Mission</h3>
                                </div>
                                <p className="text-evolve-text/70">To replace wood and plastic with sustainable recycled solutions, minimizing environmental impact while maximizing durability.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-evolve-brown">
                                <div className="flex items-center space-x-4 mb-4">
                                    <Eye className="text-evolve-brown" size={32} />
                                    <h3 className="text-2xl font-bold font-display text-evolve-brown">Our Vision</h3>
                                </div>
                                <p className="text-evolve-text/70">To become the global leader in recycled industrial profiles and pave the way for a greener, cleaner future.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
