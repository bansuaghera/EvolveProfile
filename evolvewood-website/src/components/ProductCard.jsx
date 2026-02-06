import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-evolve-brown/10 group"
        >
            <div className="h-64 bg-evolve-cream flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-evolve-brown/5 to-evolve-green/10" />
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover rounded-xl shadow-sm mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                ) : null}
                <div className="w-full h-full bg-evolve-brown/20 rounded-xl flex items-center justify-center text-evolve-brown/40 font-display text-4xl font-bold uppercase tracking-widest group-hover:scale-105 transition-transform duration-500" style={{ display: product.image ? 'none' : 'flex' }}>
                    {product.title.split(' ')[0]}
                </div>
            </div>
            <div className="p-8">
                <h3 className="text-2xl font-bold font-display text-evolve-brown mb-3">{product.title}</h3>
                <p className="text-evolve-text/70 mb-6 line-clamp-3">{product.description}</p>
                <Link to={`/products`} className="inline-flex items-center text-evolve-green font-bold hover:text-evolve-brown transition-colors">
                    View Details <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
}
