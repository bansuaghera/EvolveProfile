import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    return (
        <>
            <SEO title="Contact Us" description="Get in touch with Evolve Profile Industries for your industrial packaging and profile needs." />
            <PageHeader title="Contact Us" subtitle="We're here to help you find the sustainable solution." />

            <section className="py-12 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold font-display text-evolve-brown">Company Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-evolve-brown/5">
                                    <MapPin className="text-evolve-green mt-1 mr-4" size={24} />
                                    <div>
                                        <h4 className="font-bold text-evolve-brown mb-1">Address</h4>
                                        <p className="text-evolve-text/70">Sr No. 262/1 P3 And 262/4 P2, Plot No-10, Dhanagood Industrial Estate, Rajkot Highway, At- Sofat Sanala Pin-363641, Ta- Morbi, Dist-Morbi</p>
                                    </div>
                                </div>
                                <div className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-evolve-brown/5">
                                    <Phone className="text-evolve-green mt-1 mr-4" size={24} />
                                    <div>
                                        <h4 className="font-bold text-evolve-brown mb-1">Phone</h4>
                                        <p className="text-evolve-text/70">+91 81415 14311</p>
                                        <p className="text-evolve-text/70">+91 97378 35434</p>
                                    </div>
                                </div>
                                <div className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-evolve-brown/5">
                                    <Mail className="text-evolve-green mt-1 mr-4" size={24} />
                                    <div>
                                        <h4 className="font-bold text-evolve-brown mb-1">Email</h4>
                                        <p className="text-evolve-text/70">evolveprofileindustries@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-xl border border-evolve-brown/10">
                            <h2 className="text-3xl font-bold font-display text-evolve-brown mb-8">Send Us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-evolve-text/70 mb-2">Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl bg-evolve-cream border-transparent focus:border-evolve-green focus:bg-white focus:ring-0 transition-colors" placeholder="Enter your name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-evolve-text/70 mb-2">Email</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-xl bg-evolve-cream border-transparent focus:border-evolve-green focus:bg-white focus:ring-0 transition-colors" placeholder="Enter your email" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-evolve-text/70 mb-2">Subject</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-evolve-cream border-transparent focus:border-evolve-green focus:bg-white focus:ring-0 transition-colors" placeholder="Inquiry about..." />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-evolve-text/70 mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-evolve-cream border-transparent focus:border-evolve-green focus:bg-white focus:ring-0 transition-colors" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="button" className="w-full bg-evolve-brown text-white font-bold py-4 rounded-xl hover:bg-evolve-green transition-colors flex items-center justify-center">
                                    Send Message <Send size={18} className="ml-2" />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
