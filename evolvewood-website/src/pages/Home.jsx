import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { ArrowRight, Leaf, Recycle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, features, blogs } from '../data/content';
import ProductCard from '../components/ProductCard';

export default function Home() {
    return (
        <>
            <SEO title="Home" description="EvolveWood - Premium Eco-Industrial Recycled Material Manufacturer" />

            {/* Hero Section */}
            <section className="relative pt-12 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-evolve-green/5 rounded-l-[4rem] -z-10 hidden lg:block" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center space-x-2 bg-evolve-green/10 text-evolve-green px-4 py-2 rounded-full mb-6 font-medium">
                                <Leaf size={16} /> <span>Eco-Friendly Industrial Solutions</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold font-display text-evolve-brown mb-6 leading-tight">
                                Perfect way <br /> <span className="text-evolve-green">to pack.</span>
                            </h1>
                            <p className="text-xl text-evolve-text/80 mb-8 max-w-lg leading-relaxed">
                                Evolve Profile Industries is delivering sustainable, high-performance recycled plastic lumber for industrial, civil, and furniture applications.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/products" className="bg-evolve-brown text-white px-8 py-4 rounded-full font-bold hover:bg-evolve-green transition-colors flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    Explore Products <ArrowRight size={20} className="ml-2" />
                                </Link>
                                <Link to="/contact" className="bg-transparent border-2 border-evolve-brown text-evolve-brown px-8 py-4 rounded-full font-bold hover:bg-evolve-brown hover:text-white transition-all">
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-square bg-evolve-brown/10 rounded-[3rem] overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center text-evolve-brown/20">
                                    {/* Placeholder for Hero Image */}
                                    <Recycle size={120} />
                                </div>
                                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-evolve-green/20 p-3 rounded-full text-evolve-green">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-evolve-brown">100% Termite Proof</div>
                                            <div className="text-sm text-evolve-text/60">Guaranteed Protection</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Us (Dark Block) */}
            <section className="bg-evolve-brown text-white py-24 rounded-[3rem] mx-4 lg:mx-8 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold font-display mb-8">About <span className="text-evolve-light-green">EvolveWood</span></h2>
                            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                                <p>
                                    Evolve Profile Industries is engaged in manufacturing of plastic packaging materials.
                                    With a rich experience and a team of professionals, we are able to cater the industry with an innovative products.
                                </p>
                                <p>
                                    <strong>Dedication to Innovation:</strong> We've revolutionized the industry with safer, stronger, and more environmentally-friendly products.
                                </p>
                                <p>
                                    <strong>Sustainability from Start to Finish:</strong> Our holistic approach to green products promotes positive effects on the environment throughout the entire life cycle of any project.
                                </p>
                            </div>
                            <div className="mt-10">
                                <Link to="/about" className="text-evolve-light-green font-bold border-b-2 border-evolve-light-green pb-1 inline-flex items-center hover:text-white hover:border-white transition-colors">
                                    Read Our Story <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-6 mt-12">
                                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                    <h4 className="text-3xl font-bold text-evolve-light-green mb-2">10M+</h4>
                                    <p className="text-sm">Tons of Plastic Recycled</p>
                                </div>
                                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                    <h4 className="text-3xl font-bold text-evolve-light-green mb-2">50+</h4>
                                    <p className="text-sm">Industries Served</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                    <h4 className="text-3xl font-bold text-evolve-light-green mb-2">100%</h4>
                                    <p className="text-sm">Eco Friendly Products</p>
                                </div>
                                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                    <h4 className="text-3xl font-bold text-evolve-light-green mb-2">24/7</h4>
                                    <p className="text-sm">Support & Service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-evolve-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-evolve-green font-bold tracking-widest uppercase text-sm">Why EvolveWood</span>
                        <h2 className="text-4xl lg:text-5xl font-bold font-display text-evolve-brown mt-3">Why EvolveWood?</h2>
                        <p className="mt-4 text-evolve-text/70">
                            India is generating about 3.5 million tonnes of plastic waste annually. We turn this waste into high-value industrial products.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-evolve-brown/5">
                                <div className="bg-evolve-green/10 w-14 h-14 rounded-xl flex items-center justify-center text-evolve-green mb-6">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold font-display text-evolve-brown mb-3">{feature.name}</h3>
                                <p className="text-sm text-evolve-text/70">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Range */}
            <section className="py-24 bg-white rounded-[4rem]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <span className="text-evolve-green font-bold tracking-widest uppercase text-sm">Our Products</span>
                            <h2 className="text-4xl font-bold font-display text-evolve-brown mt-3">Product Profiles Range</h2>
                        </div>
                        <Link to="/products" className="hidden md:flex items-center text-evolve-brown font-bold hover:text-evolve-green">
                            View All Products <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product, idx) => (
                            <ProductCard key={product.id} product={product} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Teaser / Initiatives */}
            <section className="py-24 bg-evolve-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold font-display text-evolve-brown">Government Initiatives & Blogs</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-12 rounded-[3rem] shadow-lg flex flex-col items-center text-center">
                            <div className="flex space-x-4 mb-8">
                                <div className="text-4xl font-bold text-evolve-green">Clean<br /><span className="text-evolve-brown">India</span></div>
                                <div className="text-4xl font-bold text-evolve-green">Go<br /><span className="text-evolve-brown">Green</span></div>
                            </div>
                            <h3 className="text-2xl font-bold font-display text-evolve-brown mb-4">West to Best</h3>
                            <p className="text-evolve-text/70 mb-8">Supporting the national mission for a cleaner, greener environment through sustainable manufacturing.</p>
                            <Link to="/about" className="bg-evolve-green text-white px-8 py-3 rounded-full font-bold hover:bg-evolve-brown transition-colors">Learn More</Link>
                        </div>

                        {/* Latest Blog Post */}
                        <div className="bg-evolve-brown text-white p-12 rounded-[3rem] shadow-lg">
                            <span className="bg-evolve-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Latest News</span>
                            <h3 className="text-2xl font-bold font-display mb-4">{blogs[0].title}</h3>
                            <p className="text-white/70 mb-8">{blogs[0].excerpt}</p>
                            <Link to="/blog" className="text-evolve-light-green font-bold flex items-center hover:text-white transition-colors">
                                Read Full Blog <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
