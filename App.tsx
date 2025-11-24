import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Page, ServiceItem, ProductItem, IndustryItem, TechItem, Testimonial, BlogPost } from './types';
import { Button, SectionHeader, Card, Badge } from './components/UI';
import { AIChatWidget } from './components/AIChatWidget';
import { 
  BarChart3, Globe, Shield, Smartphone, Truck, Users, 
  Map as MapIcon, Database, LayoutDashboard, Clock, FileText,
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Code, Layers, Server, Cpu, Quote
} from 'lucide-react';

const App: React.FC = () => {
  // Navigation State handles both the Page and an optional ID for detail views
  const [currentView, setCurrentView] = useState<{ page: Page; id?: string }>({ page: Page.HOME });

  const navigateTo = (page: Page, id?: string) => {
    setCurrentView({ page, id });
    window.scrollTo(0, 0);
  };

  // --- DATA DEFINITIONS ---

  const services: ServiceItem[] = [
    { 
      id: "custom-tms",
      title: "Custom TMS Development", 
      shortDescription: "Tailor-made Transportation Management Systems that fit your unique workflow.", 
      fullDescription: "Stop adapting your business to rigid software. Our Custom TMS Development service builds a platform around your specific operations. Whether you are a carrier, broker, or shipper, we engineer solutions that automate dispatch, streamline accounting, and provide real-time visibility across your entire supply chain.",
      icon: <Database className="w-8 h-8 text-brand-orange"/>, 
      features: ["Automated Load Planning", "Carrier Onboarding & Compliance", "One-Click Invoicing", "EDI/API Integrations"],
      benefits: ["Reduce administrative time by 40%", "Eliminate double-entry data errors", "Scale operations without adding headcount"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      id: "fleet-management",
      title: "Fleet Management Software", 
      shortDescription: "Real-time tracking, maintenance scheduling, and asset utilization analytics.", 
      fullDescription: "Maximize the lifespan of your assets and ensure driver safety with our comprehensive Fleet Management Software. We combine telematics data, maintenance logs, and fuel reporting into a single pane of glass.",
      icon: <Truck className="w-8 h-8 text-brand-orange"/>, 
      features: ["Real-time GPS Tracking", "Preventative Maintenance Alerts", "Fuel Tax (IFTA) Reporting", "Driver Behavior Scorecards"],
      benefits: ["Lower fuel costs by 15%", "Reduce vehicle downtime", "Improve CSA scores"],
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      id: "mobile-apps",
      title: "Driver Mobile Apps (iOS/Android)", 
      shortDescription: "Native apps for drivers to manage loads, PODs, and logs.", 
      fullDescription: "Empower your drivers with intuitive mobile applications designed for life on the road. Our apps work offline, sync instantly when connected, and make document management a breeze.",
      icon: <Smartphone className="w-8 h-8 text-brand-orange"/>, 
      features: ["Electronic Proof of Delivery (ePOD)", "Document Scanning & Crop", "HOS Integration", "In-app Chat with Dispatch"],
      benefits: ["Instant billing upon delivery", "Better driver retention", "Reduced check calls"],
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ce7d02?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      id: "crm-solutions",
      title: "Freight Brokerage CRM", 
      shortDescription: "High-velocity CRM built specifically for freight brokers and sales teams.", 
      fullDescription: "General purpose CRMs like Salesforce are great, but they don't understand lanes, equipment types, or carrier MC numbers. Our Freight CRM is built to help brokers close more shippers and cover more loads.",
      icon: <Users className="w-8 h-8 text-brand-orange"/>, 
      features: ["Lane History & Rate Intelligence", "Carrier Capacity Matching", "Automated Email Sequences", "VOIP Integration"],
      benefits: ["Increase load count per broker", "Build stronger carrier relationships", "Never lose a lead"],
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      id: "web-design",
      title: "Logistics Website Design", 
      shortDescription: "High-conversion websites for trucking companies and 3PLs.", 
      fullDescription: "Your website is your 24/7 salesperson. We design professional, industrial-grade websites that build trust with shippers and attract quality drivers. SEO-optimized and mobile-responsive.",
      icon: <Globe className="w-8 h-8 text-brand-orange"/>, 
      features: ["Driver Recruiting Funnels", "Shipment Tracking Portal", "Quote Request Forms", "SEO & Content Strategy"],
      benefits: ["Attract better paying shippers", "Lower cost per hire for drivers", "Professional brand image"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    { 
      id: "cms-development",
      title: "Enterprise CMS Development", 
      shortDescription: "Manage your content, compliance documents, and training portals.", 
      fullDescription: "Centralize your knowledge. We build secure Content Management Systems for internal training, safety documentation, and customer-facing knowledge bases.",
      icon: <LayoutDashboard className="w-8 h-8 text-brand-orange"/>, 
      features: ["Safety Video Portals", "Driver Handbooks", "Version Control", "Role-based Access"],
      benefits: ["Streamline driver orientation", "Ensure regulatory compliance", "Centralized document control"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
    }
  ];

  const technologies: TechItem[] = [
    { id: "html", name: "HTML5", category: "Frontend", description: "The semantic backbone of the web.", useCases: ["Structure", "SEO", "Accessibility"], icon: <Code className="w-6 h-6"/> },
    { id: "css", name: "CSS3", category: "Frontend", description: "Modern styling for responsive layouts.", useCases: ["Design", "Animations", "Layouts"], icon: <Code className="w-6 h-6"/> },
    { id: "tailwind", name: "Tailwind CSS", category: "Frontend", description: "Utility-first CSS framework for rapid UI development.", useCases: ["Rapid Prototyping", "Design Systems", "Consistency"], icon: <Code className="w-6 h-6"/> },
    { id: "react", name: "React", category: "Frontend", description: "Library for building interactive user interfaces.", useCases: ["SPAs", "Dashboards", "Interactive Forms"], icon: <Code className="w-6 h-6"/> },
    { id: "nextjs", name: "Next.js", category: "Frontend", description: "The React framework for production.", useCases: ["SEO-heavy sites", "Server Side Rendering", "Performance"], icon: <Code className="w-6 h-6"/> },
    { id: "vue", name: "Vue.js", category: "Frontend", description: "Progressive JavaScript framework.", useCases: ["Lightweight Apps", "Components", "Ease of Use"], icon: <Code className="w-6 h-6"/> },
    { id: "nuxt", name: "Nuxt", category: "Frontend", description: "Intuitive Vue Framework.", useCases: ["Universal Apps", "Static Generation"], icon: <Code className="w-6 h-6"/> },
    { id: "node", name: "Node.js", category: "Backend", description: "JavaScript runtime built on Chrome's V8 engine.", useCases: ["Real-time APIs", "Microservices", "Scalability"], icon: <Server className="w-6 h-6"/> },
    { id: "express", name: "Express", category: "Backend", description: "Fast, unopinionated, minimalist web framework for Node.js.", useCases: ["REST APIs", "Middleware", "Routing"], icon: <Server className="w-6 h-6"/> },
    { id: "laravel", name: "Laravel", category: "Backend", description: "The PHP Framework for Web Artisans.", useCases: ["Enterprise Apps", "Rapid Development", "Security"], icon: <Server className="w-6 h-6"/> },
    { id: "asp", name: "ASP.NET Core", category: "Backend", description: "Cross-platform, high-performance framework.", useCases: ["Enterprise", "Microservices", "High Load"], icon: <Server className="w-6 h-6"/> },
    { id: "sql", name: "SQL", category: "Database", description: "Standard language for relational database management.", useCases: ["Data Integrity", "Complex Queries", "Reporting"], icon: <Database className="w-6 h-6"/> },
    { id: "postgres", name: "PostgreSQL", category: "Database", description: "The World's Most Advanced Open Source Relational Database.", useCases: ["Geospatial Data", "Reliability", "ACID Compliance"], icon: <Database className="w-6 h-6"/> },
    { id: "mongodb", name: "MongoDB", category: "Database", description: "The application data platform (NoSQL).", useCases: ["Flexible Schema", "Big Data", "Real-time Analytics"], icon: <Database className="w-6 h-6"/> },
  ];

  const industries: IndustryItem[] = [
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

  const products: ProductItem[] = [
    { name: "FleetManager Pro", tagline: "Complete Asset Control", description: "The industry standard for managing mixed fleets of any size.", image: "https://picsum.photos/id/1073/600/400", tags: ["SaaS", "Web", "Mobile"] },
    { name: "DispatchMaster", tagline: "Drag & Drop Dispatch", description: "Visual load board and dispatching system for busy ops floors.", image: "https://picsum.photos/id/192/600/400", tags: ["Desktop", "Cloud"] },
    { name: "TruckTrack GPS", tagline: "Real-Time Visibility", description: "Hardware-agnostic telematics dashboard.", image: "https://picsum.photos/id/526/600/400", tags: ["IoT", "Real-time"] },
  ];

  const testimonials: Testimonial[] = [
    { id: "1", name: "Sarah Jenkins", role: "VP of Operations", company: "Red Hawk Transport", text: "LogiTech rebuilt our entire dispatch system. We've seen a 30% increase in loads covered per broker.", image: "https://randomuser.me/api/portraits/women/12.jpg" },
    { id: "2", name: "Mike Ross", role: "Fleet Manager", company: "Continental Logistics", text: "The driver app they built is phenomenal. Our drivers actually like using it, which is a miracle.", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: "3", name: "David Chen", role: "Owner", company: "Swift Mile Delivery", text: "Their route optimization algorithm saved us $50k in fuel in the first quarter alone.", image: "https://randomuser.me/api/portraits/men/45.jpg" }
  ];

  const blogs: BlogPost[] = [
    { id: "1", title: "The Future of AI in Trucking", excerpt: "How predictive maintenance is changing the game for fleet managers.", date: "Oct 12, 2024", author: "James Wilson", category: "Technology", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop" },
    { id: "2", title: "EDI vs API: What's Best?", excerpt: "Breaking down the pros and cons of data integration standards in 2024.", date: "Sep 28, 2024", author: "Sarah Connor", category: "Development", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
    { id: "3", title: "5 Ways to Retain Drivers", excerpt: "Technology plays a bigger role in driver satisfaction than you might think.", date: "Sep 15, 2024", author: "Mike T.", category: "Industry", image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop" }
  ];

  // --- DETAIL PAGE COMPONENTS ---

  const ServiceDetailPage = ({ id }: { id: string }) => {
    const service = services.find(s => s.id === id);
    if (!service) return <div>Service not found</div>;

    return (
      <div className="animate-fade-in">
        {/* Hero */}
        <div className="relative h-[60vh] bg-gray-900 flex items-center">
          <div className="absolute inset-0">
             <img src={service.image} className="w-full h-full object-cover opacity-40" alt={service.title} />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-white">
            <Button variant="outline" className="mb-6 text-white border-white hover:bg-white hover:text-black" onClick={() => navigateTo(Page.SERVICES)}>Back to Services</Button>
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase">{service.title}</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">{service.shortDescription}</p>
          </div>
        </div>

        {/* Content */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 text-brand-dark">Overview</h2>
                <p className="text-lg text-gray-600 mb-12 leading-relaxed">{service.fullDescription}</p>

                <h3 className="text-2xl font-bold mb-6 text-brand-dark">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {service.features.map((f, i) => (
                    <Card key={i} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">{f}</span>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <div className="bg-gray-50 p-8 rounded-lg sticky top-24 border border-gray-100 shadow-lg">
                  <h3 className="text-xl font-bold mb-6 text-brand-dark">Why Choose This?</h3>
                  <ul className="space-y-4 mb-8">
                    {service.benefits.map((b, i) => (
                       <li key={i} className="flex items-start text-sm">
                         <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                         {b}
                       </li>
                    ))}
                  </ul>
                  <Button className="w-full" onClick={() => navigateTo(Page.CONTACT)}>Request a Quote</Button>
                  <p className="text-xs text-center text-gray-400 mt-4">Free consultation included.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const IndustryDetailPage = ({ id }: { id: string }) => {
    const item = industries.find(i => i.id === id);
    if (!item) return <div>Not found</div>;

    return (
      <div className="animate-fade-in">
         <div className="relative h-[50vh] bg-brand-dark flex items-center justify-center text-center">
            <div className="absolute inset-0 overflow-hidden">
               <img src={item.image} className="w-full h-full object-cover opacity-30" alt={item.title}/>
            </div>
            <div className="relative z-10 px-6">
               <h1 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase">{item.title}</h1>
               <p className="text-xl text-brand-orange font-bold max-w-2xl mx-auto">{item.description}</p>
            </div>
         </div>
         
         <div className="py-20 bg-brand-bg">
            <div className="container mx-auto px-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-500">
                     <h3 className="text-2xl font-bold mb-6 text-brand-dark flex items-center"><Shield className="mr-3 text-red-500"/> Common Challenges</h3>
                     <ul className="space-y-4">
                        {item.challenges.map((c,i) => (
                           <li key={i} className="flex items-center text-gray-700 font-medium">
                              <XIcon className="w-5 h-5 text-red-500 mr-3" /> {c}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-500">
                     <h3 className="text-2xl font-bold mb-6 text-brand-dark flex items-center"><CheckCircle className="mr-3 text-green-500"/> Our Solutions</h3>
                     <ul className="space-y-4">
                        {item.solutions.map((s,i) => (
                           <li key={i} className="flex items-center text-gray-700 font-medium">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3" /> {s}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               
               <div className="mt-16 text-center">
                  <h3 className="text-2xl font-bold mb-8">Ready to modernize your {item.title} business?</h3>
                  <div className="flex justify-center space-x-4">
                     <Button onClick={() => navigateTo(Page.CONTACT)}>Contact an Expert</Button>
                     <Button variant="outline" onClick={() => navigateTo(Page.INDUSTRIES)}>View All Industries</Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
  };

  const TechDetailPage = ({ id }: { id: string }) => {
     const tech = technologies.find(t => t.id === id);
     if (!tech) return <div>Not found</div>;

     return (
        <div className="animate-fade-in bg-white min-h-screen">
           <div className="bg-gray-50 border-b border-gray-200 py-20">
              <div className="container mx-auto px-6 flex flex-col items-center text-center">
                 <div className="p-4 bg-white rounded-full shadow-lg mb-6 text-brand-orange">
                    {React.cloneElement(tech.icon as React.ReactElement<{ className?: string }>, { className: "w-12 h-12" })}
                 </div>
                 <h1 className="text-5xl font-black text-brand-dark mb-4">{tech.name}</h1>
                 <Badge>{tech.category}</Badge>
                 <p className="text-xl text-gray-600 mt-6 max-w-2xl">{tech.description}</p>
              </div>
           </div>
           
           <div className="container mx-auto px-6 py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div>
                    <h3 className="text-2xl font-bold mb-6">Why we use {tech.name}</h3>
                    <p className="text-gray-600 leading-loose mb-6">
                       At LogiTech, we choose {tech.name} for projects that demand scalability, performance, and long-term maintainability. 
                       It integrates perfectly with our modern stack to deliver robust solutions for the logistics industry.
                    </p>
                    <Button variant="outline" onClick={() => navigateTo(Page.TECHNOLOGIES)}>Back to Tech Stack</Button>
                 </div>
                 <div className="bg-brand-dark text-white p-8 rounded-xl">
                    <h3 className="text-xl font-bold mb-6 text-brand-orange">Perfect For</h3>
                    <ul className="space-y-4">
                       {tech.useCases.map((u, i) => (
                          <li key={i} className="flex items-center">
                             <ArrowRight className="w-4 h-4 text-brand-orange mr-3" /> {u}
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>
           </div>
        </div>
     );
  };

  const TechnologiesPage = () => (
    <div className="bg-brand-bg min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader title="Our Technology Stack" subtitle="We build with the most reliable, scalable, and modern tools available." />
        
        {['Frontend', 'Backend', 'Database'].map(cat => (
           <div key={cat} className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-gray-400 border-b border-gray-200 pb-2">{cat} Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                 {technologies.filter(t => t.category === cat).map((t, i) => (
                    <div 
                      key={i} 
                      onClick={() => navigateTo(Page.TECHNOLOGIES, t.id)}
                      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center group border border-transparent hover:border-brand-orange"
                    >
                       <div className="text-gray-400 group-hover:text-brand-orange transition-colors mb-4 transform group-hover:scale-110 duration-300">
                          {t.icon}
                       </div>
                       <h4 className="font-bold text-gray-800">{t.name}</h4>
                    </div>
                 ))}
              </div>
           </div>
        ))}
      </div>
    </div>
  );

  // --- MAIN PAGE COMPONENTS ---

  const HomePage = () => (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block py-1 px-3 border border-brand-orange text-brand-orange text-xs font-bold uppercase tracking-widest mb-4 rounded-sm bg-black/50 backdrop-blur-sm">
              Technology for Transport
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              DRIVING THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">FUTURE</span> OF LOGISTICS
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              We build custom software, mobile apps, and enterprise systems specifically for trucking companies, freight brokers, and 3PLs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" icon onClick={() => navigateTo(Page.CONTACT)}>Book a Demo</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black" onClick={() => navigateTo(Page.SERVICES)}>Our Services</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-orange py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div><div className="text-4xl font-black mb-1">500+</div><div className="text-sm font-bold uppercase opacity-80">Apps Launched</div></div>
            <div><div className="text-4xl font-black mb-1">$2B+</div><div className="text-sm font-bold uppercase opacity-80">Freight Managed</div></div>
            <div><div className="text-4xl font-black mb-1">50k+</div><div className="text-sm font-bold uppercase opacity-80">Drivers Connected</div></div>
            <div><div className="text-4xl font-black mb-1">99.9%</div><div className="text-sm font-bold uppercase opacity-80">Uptime SLA</div></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Specialized Solutions" subtitle="We don't just write code. We understand Hours of Service, IFTA, EDI, and the complexities of the supply chain." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((s, i) => (
              <Card key={i} className="h-full flex flex-col items-start">
                <div className="mb-6 p-4 bg-orange-50 rounded-lg">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-dark">{s.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{s.shortDescription}</p>
                <div className="space-y-2 mb-6 w-full">
                  {s.features.slice(0, 3).map(f => (
                    <div key={f} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-brand-orange mr-2" /> {f}
                    </div>
                  ))}
                </div>
                <span className="text-brand-orange font-bold text-sm flex items-center cursor-pointer hover:underline" onClick={() => navigateTo(Page.SERVICES, s.id)}>
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="secondary" onClick={() => navigateTo(Page.SERVICES)}>View All Services</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <SectionHeader title="Client Success" subtitle="Don't just take our word for it." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {testimonials.map((t) => (
                  <div key={t.id} className="bg-gray-50 p-8 rounded-xl relative">
                     <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-200" />
                     <div className="flex items-center mb-6">
                        <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full mr-4 border-2 border-brand-orange" />
                        <div>
                           <h4 className="font-bold text-brand-dark">{t.name}</h4>
                           <p className="text-xs text-gray-500 uppercase tracking-wide">{t.role}, {t.company}</p>
                        </div>
                     </div>
                     <p className="text-gray-600 italic">"{t.text}"</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Blogs Preview */}
      <section className="py-24 bg-brand-dark text-white">
         <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl font-black uppercase mb-4">Latest Insights</h2>
                  <div className="h-1 w-20 bg-brand-orange"></div>
               </div>
               <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white" onClick={() => navigateTo(Page.BLOG)}>View All</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {blogs.map((b) => (
                  <div key={b.id} className="group cursor-pointer" onClick={() => navigateTo(Page.BLOG)}>
                     <div className="h-48 overflow-hidden rounded-lg mb-6">
                        <img src={b.image} alt={b.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                     </div>
                     <div className="flex items-center text-xs text-brand-orange font-bold mb-3 uppercase tracking-wider">
                        <span>{b.category}</span>
                        <span className="mx-2">•</span>
                        <span>{b.date}</span>
                     </div>
                     <h3 className="text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors">{b.title}</h3>
                     <p className="text-gray-400 text-sm line-clamp-2">{b.excerpt}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-orange relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between text-white">
          <div className="mb-8 md:mb-0 md:max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Digitally Transform Your Fleet?</h2>
            <p className="opacity-90 text-lg">Schedule a free consultation with our solutions architect today.</p>
          </div>
          <Button size="lg" variant="secondary" className="bg-white text-brand-orange hover:bg-gray-100" onClick={() => navigateTo(Page.CONTACT)}>Get Started Now</Button>
        </div>
      </section>
    </>
  );

  const AboutPage = () => (
    <div className="bg-brand-bg min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader title="About LogiTech" subtitle="Bridging the gap between heavy machinery and high technology." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" alt="Team" className="rounded-lg shadow-2xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-brand-dark">Our Mission</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Founded by former fleet managers and software engineers, LogiTech Solutions exists to eliminate the inefficiencies in the global supply chain. We believe that better software leads to safer roads, faster deliveries, and more profitable trucking companies.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white border-l-4 border-brand-orange shadow-sm">
                <h4 className="font-bold text-xl mb-1">10+ Years</h4>
                <p className="text-sm text-gray-500">Industry Experience</p>
              </div>
              <div className="p-4 bg-white border-l-4 border-brand-yellow shadow-sm">
                <h4 className="font-bold text-xl mb-1">Certified</h4>
                <p className="text-sm text-gray-500">ELD & EDI Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ServicesPage = () => (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader title="Our Services" subtitle="End-to-end technology development for the transportation sector." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Card key={i} className="bg-gray-50 flex flex-col h-full">
              <div className="mb-6 flex justify-between items-start">
                 <div className="p-3 bg-white shadow-sm rounded-lg">{s.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">{s.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{s.shortDescription}</p>
              <div className="border-t border-gray-200 pt-4 mt-auto">
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigateTo(Page.SERVICES, s.id)}>View Details</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const ProductsPage = () => (
    <div className="bg-brand-bg min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader title="Our Products" subtitle="Proven SaaS platforms ready to deploy for your business." />
        <div className="grid grid-cols-1 gap-12">
          {products.map((p, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row hover:shadow-2xl transition-shadow duration-300">
              <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  {p.tags.map(t => <Badge key={t}>{t}</Badge>)}
                </div>
                <h3 className="text-3xl font-black text-brand-dark mb-2">{p.name}</h3>
                <p className="text-brand-orange font-bold text-lg mb-4 uppercase tracking-wide">{p.tagline}</p>
                <p className="text-gray-600 mb-8 text-lg">{p.description}</p>
                <div className="flex space-x-4">
                  <Button onClick={() => navigateTo(Page.CONTACT)}>Request Demo</Button>
                  <Button variant="outline">View Features</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader title="Contact Us" subtitle="Start your digital transformation journey today." />
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="bg-brand-dark text-white p-10 md:w-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <p className="text-gray-400 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
              <div className="space-y-6">
                <div className="flex items-center"><Phone className="w-5 h-5 text-brand-orange mr-4"/> +1 (800) 555-TRUCK</div>
                <div className="flex items-center"><Mail className="w-5 h-5 text-brand-orange mr-4"/> sales@logitech.com</div>
                <div className="flex items-center"><MapPin className="w-5 h-5 text-brand-orange mr-4"/> Dallas, TX</div>
              </div>
            </div>
            <div className="mt-12">
              <div className="w-16 h-16 bg-brand-orange rounded-full opacity-20 absolute -bottom-8 -left-8"></div>
            </div>
          </div>
          <div className="p-10 md:w-3/5 bg-gray-50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none" placeholder="Acme Logistics Inc." />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Service Interested In</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none bg-white">
                  <option>Custom Development</option>
                  <option>Fleet Management Software</option>
                  <option>Mobile App Development</option>
                  <option>Consulting</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const IndustriesPage = () => (
     <div className="bg-brand-bg min-h-screen pt-12 pb-24">
       <div className="container mx-auto px-6">
         <SectionHeader title="Industries We Serve" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
               <div key={i} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer" onClick={() => navigateTo(Page.INDUSTRIES, ind.id)}>
                  <div className={`absolute inset-0 bg-gray-900`}>
                     <img src={ind.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" alt={ind.title}/>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                     <div className="transform group-hover:translate-y-[-10px] transition-transform duration-300">
                        <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2">{ind.title}</h3>
                        <p className="text-brand-orange font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Solutions</p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
       </div>
     </div>
  );

  const BlogPage = () => (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader title="Industry Insights" subtitle="News and analysis from the world of logistics technology." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {blogs.map((b) => (
              <div key={b.id} className="flex flex-col md:flex-row gap-6 items-start border-b border-gray-100 pb-12">
                 <img src={b.image} className="w-full md:w-48 h-32 object-cover rounded-lg" alt={b.title} />
                 <div>
                    <div className="text-xs text-brand-orange font-bold uppercase mb-2">{b.category} • {b.date}</div>
                    <h2 className="text-xl font-bold mb-3 hover:text-brand-orange cursor-pointer">{b.title}</h2>
                    <p className="text-gray-600 text-sm mb-4">{b.excerpt}</p>
                    <span className="text-sm font-bold text-brand-dark">By {b.author}</span>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </div>
  );

  const XIcon = ({ className }: { className: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  );

  // --- RENDER LOGIC ---

  const renderPage = () => {
    // Check for Detail Views first
    if (currentView.page === Page.SERVICES && currentView.id) {
       return <ServiceDetailPage id={currentView.id} />;
    }
    if (currentView.page === Page.INDUSTRIES && currentView.id) {
       return <IndustryDetailPage id={currentView.id} />;
    }
    if (currentView.page === Page.TECHNOLOGIES && currentView.id) {
       return <TechDetailPage id={currentView.id} />;
    }

    // Standard Page Views
    switch (currentView.page) {
      case Page.HOME: return <HomePage />;
      case Page.ABOUT: return <AboutPage />;
      case Page.SERVICES: return <ServicesPage />;
      case Page.PRODUCTS: return <ProductsPage />;
      case Page.INDUSTRIES: return <IndustriesPage />;
      case Page.TECHNOLOGIES: return <TechnologiesPage />;
      case Page.CONTACT: return <ContactPage />;
      case Page.BLOG: return <BlogPage />;
      case Page.PORTFOLIO: return <div className="p-20 text-center"><h2 className="text-3xl font-bold">Portfolio Gallery Coming Soon</h2><Button onClick={()=>navigateTo(Page.HOME)} className="mt-4">Go Home</Button></div>;
      case Page.LOGIN: return <div className="min-h-screen flex items-center justify-center bg-gray-100"><Card className="w-full max-w-md p-8 text-center"><h2 className="text-2xl font-bold mb-6">Client Portal</h2><input className="w-full p-3 border mb-4 rounded" placeholder="Email" /><input className="w-full p-3 border mb-6 rounded" type="password" placeholder="Password" /><Button className="w-full">Login</Button><p className="mt-4 text-sm text-gray-500 cursor-pointer" onClick={() => navigateTo(Page.HOME)}>Back to Home</p></Card></div>;
      default: return <HomePage />;
    }
  };

  return (
    <Layout currentPage={currentView.page} onNavigate={(p) => navigateTo(p)}>
      {renderPage()}
      <AIChatWidget />
    </Layout>
  );
};

export default App;