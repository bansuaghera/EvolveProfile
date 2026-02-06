import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { blogs } from '../data/content';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

export default function Blog() {
    return (
        <>
            <SEO title="Blog" description="Latest news and insights on sustainable manufacturing and packaging." />
            <PageHeader title="Our Blog" subtitle="Insights on sustainability, recycling, and industry trends." />

            <section className="py-12 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {blogs.map((blog) => (
                            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} key={blog.slug}>
                                <Link to={`/blog/${blog.slug}`} className="group block bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-evolve-brown/10 h-full flex flex-col">
                                    <div className="h-48 bg-evolve-brown/10 relative overflow-hidden">
                                        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute bottom-4 left-4 bg-evolve-green text-white text-xs font-bold px-3 py-1 rounded-full">{blog.category}</div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center text-xs text-evolve-text/50 mb-4 space-x-4">
                                            <span className="flex items-center"><Calendar size={14} className="mr-1" /> {blog.date}</span>
                                            <span className="flex items-center"><User size={14} className="mr-1" /> {blog.author}</span>
                                        </div>
                                        <h3 className="text-xl font-bold font-display text-evolve-brown mb-3 group-hover:text-evolve-green transition-colors">{blog.title}</h3>
                                        <p className="text-evolve-text/70 line-clamp-3 text-sm">{blog.excerpt}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    )
}
