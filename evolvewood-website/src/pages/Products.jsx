import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import { products } from '../data/content';

export default function Products() {
    return (
        <>
            <SEO title="Products" description="Explore our range of recycled lumber products including square bars, rectangles, and customized profiles." />
            <PageHeader title="Product Profiles Range" subtitle="High-strength, durable, and eco-friendly alternatives to wood." />

            <section className="py-12 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, idx) => (
                            <ProductCard key={product.id} product={product} index={idx} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
