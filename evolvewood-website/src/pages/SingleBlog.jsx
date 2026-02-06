import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/content';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

export default function SingleBlog() {
    const { slug } = useParams();
    const blog = blogs.find(b => b.slug === slug);

    if (!blog) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center">
                <h1 className="text-4xl font-display font-bold text-evolve-brown mb-4">Blog Post Not Found</h1>
                <Link to="/blog" className="text-evolve-green hover:underline">Return to Blog</Link>
            </div>
        );
    }

    return (
        <>
            <SEO title={blog.title} description={blog.excerpt} />
            <div className="bg-evolve-brown text-white py-20 lg:py-32 rounded-b-[3rem] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="flex items-center justify-center space-x-2 text-evolve-light-green font-bold uppercase tracking-widest text-sm mb-4">
                        <Tag size={14} /> <span>{blog.category}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold font-display mb-6 leading-tight">{blog.title}</h1>
                    <div className="flex items-center justify-center space-x-6 text-white/80">
                        <span className="flex items-center"><Calendar size={16} className="mr-2" /> {blog.date}</span>
                        <span className="flex items-center"><User size={16} className="mr-2" /> {blog.author}</span>
                    </div>
                </div>
            </div>

            <article className="py-12 lg:py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg prose-brown mx-auto">
                        <p className="lead text-xl text-evolve-text/80 font-medium mb-8">{blog.excerpt}</p>
                        <div className="bg-evolve-cream p-8 rounded-2xl border-l-4 border-evolve-green mb-8">
                            <p className="italic text-evolve-brown">{blog.content}</p>
                            <p className="text-sm mt-4 text-evolve-text/60">[Full content would be populated here from a CMS or generic JSON data]</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <h3>Impact on Sustainability</h3>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <div className="mt-16 pt-8 border-t border-evolve-brown/10">
                        <Link to="/blog" className="inline-flex items-center font-bold text-evolve-brown hover:text-evolve-green transition-colors">
                            <ArrowLeft size={20} className="mr-2" /> Back to All Articles
                        </Link>
                    </div>
                </div>
            </article>
        </>
    )
}
