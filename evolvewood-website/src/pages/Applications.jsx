import { motion } from "framer-motion";
import SEO from "../components/SEO";

// Ensure these images exist in public/images/
// The user will need to place their screenshots here as application1.jpg and application2.jpg
const appImg1 = "/images/application1.jpg?v=3";
const appImg2 = "/images/application2.jpg?v=3";
const appImg3 = "/images/application_industrial.jpg?v=3";

const sectionVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.7,
            ease: "easeOut",
        },
    }),
};

const Applications = () => {
    return (
        <>
            <SEO title="Applications" description="Application in various sectors including industrial, storage, civil, and agriculture." />
            <div className="bg-[#f5f5ee] min-h-screen py-16 px-6 md:px-16 pt-32">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Application in Various Sectors
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                        Our products are widely used across multiple industries including
                        storage, civil infrastructure, agriculture, fencing, and outdoor
                        furniture. Below are real-world applications demonstrating strength,
                        durability, and versatility.
                    </p>
                </motion.div>

                {/* Industrial Application Section */}
                <motion.div
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={sectionVariant}
                    className="grid md:grid-cols-2 gap-10 items-center mb-20"
                >
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Industrial Application
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our high-strength profiles are engineering marvels designed for heavy industry.
                            They replace traditional materials in chemical factories, steel plants, and heavy machinery packaging.
                            Resistant to corrosion, chemicals, and shock, they are perfect for export packaging and structural support.
                        </p>

                        <ul className="mt-5 space-y-2 text-gray-700">
                            <li>✔ Pipe & Steel Handling</li>
                            <li>✔ Chemical & Pharma Logistics</li>
                            <li>✔ Heavy Machinery Packaging</li>
                            <li>✔ Structural Support Beams</li>
                        </ul>
                    </div>

                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={appImg3}
                        alt="Industrial Applications"
                        className="rounded-2xl shadow-xl w-full object-cover order-1 md:order-2"
                        onError={(e) => { e.target.src = "https://placehold.co/600x400?text=Please+Upload+application_industrial.jpg"; }}
                    />
                </motion.div>

                {/* Section 1 */}
                <motion.div
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={sectionVariant}
                    className="grid md:grid-cols-2 gap-10 items-center mb-20"
                >
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={appImg1}
                        alt="Storage and Civil Applications"
                        className="rounded-2xl shadow-xl w-full object-cover"
                        onError={(e) => { e.target.src = "https://placehold.co/600x400?text=Please+Upload+application1.jpg"; }}
                    />

                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Storage & Civil Applications
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our material is highly suitable for warehouses, godowns, and bulk
                            storage environments. It is also used in civil projects such as
                            fencing systems, marine walkways, garden fencing, road fencing,
                            and retaining wall structures. The high load capacity and weather
                            resistance make it ideal for long-term infrastructure use.
                        </p>

                        <ul className="mt-5 space-y-2 text-gray-700">
                            <li>✔ Warehouse & Godown Storage</li>
                            <li>✔ Marine & Garden Fencing</li>
                            <li>✔ Road Safety Barriers</li>
                            <li>✔ Retaining Wall Systems</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Section 2 */}
                <motion.div
                    custom={2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={sectionVariant}
                    className="grid md:grid-cols-2 gap-10 items-center mb-20"
                >
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Agriculture & Landscape Use
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            In agriculture and landscape development, our products are used
                            for raised planting beds, vineyard supports, mountain staircases,
                            and animal boundary systems. They provide strong structural support
                            while blending naturally with outdoor environments.
                        </p>

                        <ul className="mt-5 space-y-2 text-gray-700">
                            <li>✔ Raised Plant Beds</li>
                            <li>✔ Farm & Vineyard Boundaries</li>
                            <li>✔ Mountain Staircases</li>
                            <li>✔ Animal Control Fencing</li>
                        </ul>
                    </div>

                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={appImg2}
                        alt="Agriculture Applications"
                        className="rounded-2xl shadow-xl w-full object-cover order-1 md:order-2"
                        onError={(e) => { e.target.src = "https://placehold.co/600x400?text=Please+Upload+application2.jpg"; }}
                    />
                </motion.div>

            </div>
        </>
    );
};

export default Applications;
