import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <SEO title="Page Not Found" />
            <h1 className="text-9xl font-bold font-display text-evolve-brown/20">404</h1>
            <h2 className="text-4xl font-bold text-evolve-brown mt-4 mb-6">Page Not Found</h2>
            <p className="text-evolve-text/70 mb-8 max-w-md">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <Link to="/" className="bg-evolve-green text-white px-8 py-3 rounded-full font-bold hover:bg-evolve-brown transition-colors">
                Back to Home
            </Link>
        </div>
    )
}
