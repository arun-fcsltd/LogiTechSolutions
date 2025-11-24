import React from 'react';
import { ServiceItem, ProductItem, IndustryItem, TechItem, Testimonial, BlogPost } from './types';
import { 
  Database, Truck, Smartphone, Users, Globe, LayoutDashboard, 
  Code, Server
} from 'lucide-react';
import { createElement } from 'react';

// Helper to create elements since we are in a pure TS file (mostly) but usually tsx is better for JSX.
// However, simple objects work if we don't need complex JSX.
// We will store the icon as a ReactNode.

export const services: ServiceItem[] = [
  { 
    id: "custom-tms",
    title: "Custom TMS Development", 
    shortDescription: "Tailor-made Transportation Management Systems that fit your unique workflow.", 
    fullDescription: "Stop adapting your business to rigid software. Our Custom TMS Development service builds a platform around your specific operations. Whether you are a carrier, broker, or shipper, we engineer solutions that automate dispatch, streamline accounting, and provide real-time visibility across your entire supply chain.",
    icon: createElement(Database, { className: "w-8 h-8 text-brand-orange" }), 
    features: ["Automated Load Planning", "Carrier Onboarding & Compliance", "One-Click Invoicing", "EDI/API Integrations"],
    benefits: ["Reduce administrative time by 40%", "Eliminate double-entry data errors", "Scale operations without adding headcount"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: "fleet-management",
    title: "Fleet Management Software", 
    shortDescription: "Real-time tracking, maintenance scheduling, and asset utilization analytics.", 
    fullDescription: "Maximize the lifespan of your assets and ensure driver safety with our comprehensive Fleet Management Software. We combine telematics data, maintenance logs, and fuel reporting into a single pane of glass.",
    icon: createElement(Truck, { className: "w-8 h-8 text-brand-orange" }), 
    features: ["Real-time GPS Tracking", "Preventative Maintenance Alerts", "Fuel Tax (IFTA) Reporting", "Driver Behavior Scorecards"],
    benefits: ["Lower fuel costs by 15%", "Reduce vehicle downtime", "Improve CSA scores"],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: "mobile-apps",
    title: "Driver Mobile Apps (iOS/Android)", 
    shortDescription: "Native apps for drivers to manage loads, PODs, and logs.", 
    fullDescription: "Empower your drivers with intuitive mobile applications designed for life on the road. Our apps work offline, sync instantly when connected, and make document management a breeze.",
    icon: createElement(Smartphone, { className: "w-8 h-8 text-brand-orange" }), 
    features: ["Electronic Proof of Delivery (ePOD)", "Document Scanning & Crop", "HOS Integration", "In-app Chat with Dispatch"],
    benefits: ["Instant billing upon delivery", "Better driver retention", "Reduced check calls"],
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ce7d02?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: "crm-solutions",
    title: "Freight Brokerage CRM", 
    shortDescription: "High-velocity CRM built specifically for freight brokers and sales teams.", 
    fullDescription: "General purpose CRMs like Salesforce are great, but they don't understand lanes, equipment types, or carrier MC numbers. Our Freight CRM is built to help brokers close more shippers and cover more loads.",
    icon: createElement(Users, { className: "w-8 h-8 text-brand-orange" }), 
    features: ["Lane History & Rate Intelligence", "Carrier Capacity Matching", "Automated Email Sequences", "VOIP Integration"],
    benefits: ["Increase load count per broker", "Build stronger carrier relationships", "Never lose a lead"],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: "web-design",
    title: "Logistics Website Design", 
    shortDescription: "High-conversion websites for trucking companies and 3PLs.", 
    fullDescription: "Your website is your 24/7 salesperson. We design professional, industrial-grade websites that build trust with shippers and attract quality drivers. SEO-optimized and mobile-responsive.",
    icon: createElement(Globe, { className: "w-8 h-8 text-brand-orange" }), 
    features: ["Driver Recruiting Funnels", "Shipment Tracking Portal", "Quote Request Forms", "SEO & Content Strategy"],
    benefits: ["Attract better paying shippers", "Lower cost per hire for drivers", "Professional brand image"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  { 
    id: "cms-development",
    title: "Enterprise CMS Development", 
    shortDescription: "Manage your content, compliance documents, and training portals.", 
    fullDescription: "Centralize your knowledge. We build secure Content Management Systems for internal training, safety documentation, and customer-facing knowledge bases.",
    icon: createElement(LayoutDashboard, { className: "w-8 h-8 text-brand-orange" }), 
    features: ["Safety Video Portals", "Driver Handbooks", "Version Control", "Role-based Access"],
    benefits: ["Streamline driver orientation", "Ensure regulatory compliance", "Centralized document control"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
  }
];

export const technologies: TechItem[] = [
  { id: "html", name: "HTML5", category: "Frontend", description: "The semantic backbone of the web.", useCases: ["Structure", "SEO", "Accessibility"], icon: createElement(Code, { className: "w-6 h-6" }) },
  { id: "css", name: "CSS3", category: "Frontend", description: "Modern styling for responsive layouts.", useCases: ["Design", "Animations", "Layouts"], icon: createElement(Code, { className: "w-6 h-6" }) },
  { id: "tailwind", name: "Tailwind CSS", category: "Frontend", description: "Utility-first CSS framework for rapid UI development.", useCases: ["Rapid Prototyping", "Design Systems", "Consistency"], icon: createElement(Code, { className: "w-6 h-6" }) },
  { id: "react", name: "React", category: "Frontend", description: "Library for building interactive user interfaces.", useCases: ["SPAs", "Dashboards", "Interactive Forms"], icon: createElement(Code, { className: "w-6 h-6" }) },
  { id: "nextjs", name: "Next.js", category: "Frontend", description: "The React framework for production.", useCases: ["SEO-heavy sites", "Server Side Rendering", "Performance"], icon: createElement(Code, { className: "w-6 h-6" }) },
  { id: "vue", name: "Vue.js", category: "Frontend", description: "Progressive JavaScript framework.", useCases: ["Lightweight Apps", "Components", "Ease of Use"], icon: createElement(Code, { className: "w-6 h-6" }) },
  { id: "nuxt", name: "Nuxt", category: "Frontend", description: "Intuitive Vue Framework.", useCases: ["Universal Apps", "Static Generation"], icon: createElement(Code, { className: "w-6 h-6" }) },
  { id: "node", name: "Node.js", category: "Backend", description: "JavaScript runtime built on Chrome's V8 engine.", useCases: ["Real-time APIs", "Microservices", "Scalability"], icon: createElement(Server, { className: "w-6 h-6" }) },
  { id: "express", name: "Express", category: "Backend", description: "Fast, unopinionated, minimalist web framework for Node.js.", useCases: ["REST APIs", "Middleware", "Routing"], icon: createElement(Server, { className: "w-6 h-6" }) },
  { id: "laravel", name: "Laravel", category: "Backend", description: "The PHP Framework for Web Artisans.", useCases: ["Enterprise Apps", "Rapid Development", "Security"], icon: createElement(Server, { className: "w-6 h-6" }) },
  { id: "asp", name: "ASP.NET Core", category: "Backend", description: "Cross-platform, high-performance framework.", useCases: ["Enterprise", "Microservices", "High Load"], icon: createElement(Server, { className: "w-6 h-6" }) },
  { id: "sql", name: "SQL", category: "Database", description: "Standard language for relational database management.", useCases: ["Data Integrity", "Complex Queries", "Reporting"], icon: createElement(Database, { className: "w-6 h-6" }) },
  { id: "postgres", name: "PostgreSQL", category: "Database", description: "The World's Most Advanced Open Source Relational Database.", useCases: ["Geospatial Data", "Reliability", "ACID Compliance"], icon: createElement(Database, { className: "w-6 h-6" }) },
  { id: "mongodb", name: "MongoDB", category: "Database", description: "The application data platform (NoSQL).", useCases: ["Flexible Schema", "Big Data", "Real-time Analytics"], icon: createElement(Database, { className: "w-6 h-6" }) },
];

export const industries: IndustryItem[] = [
  { 
    id: "trucking-carriers",
    title: "Trucking Carriers", 
    description: "For fleets ranging from 5 to 5,000 trucks. We build the tech that keeps your wheels turning.", 
    challenges: ["Rising fuel costs", "Driver retention", "Compliance mandates (ELD)"], 
    solutions: ["Custom TMS", "Driver Retention Apps", "Automated Maintenance"],
    image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=2072&auto=format&fit=crop"
  },
  { 
    id: "freight-brokers",
    title: "Freight Brokers", 
    description: "Speed is the game. Our software helps brokers cover loads faster than the competition.", 
    challenges: ["Margin compression", "Carrier fraud", "Inbox overload"], 
    solutions: ["High-speed CRM", "Automated Carrier Vetting", "Email Parsing Bots"],
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: "3pl-warehousing",
    title: "3PL & Warehousing", 
    description: "Optimize space and accelerate fulfillment with custom WMS solutions.", 
    challenges: ["Inventory accuracy", "Labor efficiency", "Returns management"], 
    solutions: ["Barcode Scanning Apps", "Robotics Integration", "Client Portals"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: "cold-chain",
    title: "Cold Chain Logistics", 
    description: "Temperature-sensitive monitoring and compliance technology.", 
    challenges: ["Spoilage risk", "FSMA compliance", "Equipment failure"], 
    solutions: ["IoT Temp Monitoring", "Real-time Alerts", "Compliance Reporting"],
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1974&auto=format&fit=crop"
  },
  { 
    id: "last-mile",
    title: "Last Mile Delivery", 
    description: "The final step is the hardest. We optimize routes and customer communication.", 
    challenges: ["Failed deliveries", "High cost per stop", "Customer anxiety"], 
    solutions: ["Route Optimization", "SMS Notifications", "Live Tracking Links"],
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2070&auto=format&fit=crop"
  }
];

export const products: ProductItem[] = [
  { name: "FleetManager Pro", tagline: "Complete Asset Control", description: "The industry standard for managing mixed fleets of any size.", image: "https://picsum.photos/id/1073/600/400", tags: ["SaaS", "Web", "Mobile"] },
  { name: "DispatchMaster", tagline: "Drag & Drop Dispatch", description: "Visual load board and dispatching system for busy ops floors.", image: "https://picsum.photos/id/192/600/400", tags: ["Desktop", "Cloud"] },
  { name: "TruckTrack GPS", tagline: "Real-Time Visibility", description: "Hardware-agnostic telematics dashboard.", image: "https://picsum.photos/id/526/600/400", tags: ["IoT", "Real-time"] },
];

export const testimonials: Testimonial[] = [
  { id: "1", name: "Sarah Jenkins", role: "VP of Operations", company: "Red Hawk Transport", text: "LogiTech rebuilt our entire dispatch system. We've seen a 30% increase in loads covered per broker.", image: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: "2", name: "Mike Ross", role: "Fleet Manager", company: "Continental Logistics", text: "The driver app they built is phenomenal. Our drivers actually like using it, which is a miracle.", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: "3", name: "David Chen", role: "Owner", company: "Swift Mile Delivery", text: "Their route optimization algorithm saved us $50k in fuel in the first quarter alone.", image: "https://randomuser.me/api/portraits/men/45.jpg" }
];

export const blogs: BlogPost[] = [
  { id: "1", title: "The Future of AI in Trucking", excerpt: "How predictive maintenance is changing the game for fleet managers.", date: "Oct 12, 2024", author: "James Wilson", category: "Technology", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop" },
  { id: "2", title: "EDI vs API: What's Best?", excerpt: "Breaking down the pros and cons of data integration standards in 2024.", date: "Sep 28, 2024", author: "Sarah Connor", category: "Development", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
  { id: "3", title: "5 Ways to Retain Drivers", excerpt: "Technology plays a bigger role in driver satisfaction than you might think.", date: "Sep 15, 2024", author: "Mike T.", category: "Industry", image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop" }
];