import React from 'react';
import { Routes, Route, useNavigate, useParams, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Button, SectionHeader, Card, Badge } from './components/UI';
import { AIChatWidget } from './components/AIChatWidget';
import { 
  BarChart3, Globe, Shield, Smartphone, Truck, Users, 
  Map as MapIcon, Database, LayoutDashboard, Clock, FileText,
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Code, Layers, Server, Cpu, Quote, Zap, Briefcase
} from 'lucide-react';
import { services, technologies, industries, products, testimonials, blogs } from './data';

// --- PAGE COMPONENTS ---

const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === id);
  if (!service) return <div className="p-20 text-center">Service not found</div>;

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="relative h-[60vh] bg-gray-900 flex items-center">
        <div className="absolute inset-0">
            <img src={service.image} className="w-full h-full object-cover opacity-40" alt={service.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <Button variant="outline" className="mb-6 text-white border-white hover:bg-white hover:text-black" onClick={() => navigate('/services')}>Back to Services</Button>
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
                <Button className="w-full" onClick={() => navigate('/contact')}>Request a Quote</Button>
                <p className="text-xs text-center text-gray-400 mt-4">Free consultation included.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const IndustryDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = industries.find(i => i.id === id);
  if (!item) return <div className="p-20 text-center">Industry not found</div>;

  const XIcon = ({ className }: { className: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  );

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
                    <Button onClick={() => navigate('/contact')}>Contact an Expert</Button>
                    <Button variant="outline" onClick={() => navigate('/industries')}>View All Industries</Button>
                </div>
              </div>
          </div>
        </div>
    </div>
  );
};

const TechDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tech = technologies.find(t => t.id === id);
  if (!tech) return <div className="p-20 text-center">Technology not found</div>;

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
                  <Button variant="outline" onClick={() => navigate('/technologies')}>Back to Tech Stack</Button>
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

const TechnologiesPage = () => {
  const navigate = useNavigate();
  return (
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
                      onClick={() => navigate(`/technologies/${t.id}`)}
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
};

const CareersPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-brand-bg min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader title="Careers at LogiTech" subtitle="Join the team that's modernizing the global supply chain." />
        
        {/* Culture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Remote-First Culture</h3>
              <p className="text-gray-600">We hire the best talent regardless of geography. Work where you are most productive.</p>
            </Card>
            <Card className="text-center p-8">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation Driven</h3>
              <p className="text-gray-600">We don't just maintain legacy systems. We build the future with cutting-edge tech.</p>
            </Card>
            <Card className="text-center p-8">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Benefits</h3>
              <p className="text-gray-600">Full medical, dental, vision, 401k matching, and generous learning stipends.</p>
            </Card>
        </div>

        {/* Open Roles */}
        <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-brand-dark">Current Openings</h3>
            <div className="space-y-4">
              {[
                  { title: "Senior Frontend Engineer", dept: "Engineering", loc: "Remote", type: "Full-time" },
                  { title: "Backend Developer (Node.js)", dept: "Engineering", loc: "Remote", type: "Full-time" },
                  { title: "Product Manager - Fleet", dept: "Product", loc: "Dallas, TX / Remote", type: "Full-time" },
                  { title: "Enterprise Sales Director", dept: "Sales", loc: "Chicago, IL", type: "Full-time" },
                  { title: "Customer Success Manager", dept: "Success", loc: "Remote", type: "Full-time" },
              ].map((job, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col md:flex-row justify-between items-center group cursor-pointer">
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-bold text-gray-800 group-hover:text-brand-orange transition-colors">{job.title}</h4>
                        <div className="flex space-x-4 text-sm text-gray-500 mt-1">
                          <span className="flex items-center"><Briefcase className="w-3 h-3 mr-1"/> {job.dept}</span>
                          <span className="flex items-center"><MapIcon className="w-3 h-3 mr-1"/> {job.loc}</span>
                          <span className="bg-gray-100 px-2 py-0.5 rounded text-xs uppercase font-bold tracking-wider">{job.type}</span>
                        </div>
                    </div>
                    <Button variant="outline" size="sm" icon>Apply Now</Button>
                  </div>
              ))}
            </div>
            
            <div className="mt-12 bg-brand-dark text-white p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-2">Don't see the right role?</h3>
              <p className="text-gray-400 mb-6">We are always looking for talented individuals to join our mission.</p>
              <Button onClick={() => navigate('/contact')}>Contact Recruiting</Button>
            </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  return (
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
              <Button size="lg" icon onClick={() => navigate('/contact')}>Book a Demo</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black" onClick={() => navigate('/services')}>Our Services</Button>
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
                <span className="text-brand-orange font-bold text-sm flex items-center cursor-pointer hover:underline" onClick={() => navigate(`/services/${s.id}`)}>
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="secondary" onClick={() => navigate('/services')}>View All Services</Button>
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <SectionHeader title="Industries We Serve" subtitle="Tailored technology solutions for every sector." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div 
                key={i} 
                className="group relative h-64 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => navigate(`/industries/${ind.id}`)}
              >
                <div className="absolute inset-0 bg-gray-900">
                  <img src={ind.image} alt={ind.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-white mb-2">{ind.title}</h3>
                      <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 mb-3">{ind.description}</p>
                      <div className="flex items-center text-brand-orange text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        View Solutions <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                </div>
              </div>
            ))}
              <div className="bg-brand-dark rounded-xl p-8 flex flex-col justify-center items-center text-center text-white h-64 border-2 border-dashed border-gray-700 hover:border-brand-orange cursor-pointer transition-colors" onClick={() => navigate('/industries')}>
                <h3 className="text-xl font-bold mb-2">View All Industries</h3>
                <p className="text-gray-400 text-sm mb-4">Don't see your sector?</p>
                <div className="p-3 bg-brand-orange rounded-full">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
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
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white" onClick={() => navigate('/blog')}>View All</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogs.map((b) => (
                  <div key={b.id} className="group cursor-pointer" onClick={() => navigate('/blog')}>
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
          <Button size="lg" variant="secondary" className="bg-white text-brand-orange hover:bg-gray-100" onClick={() => navigate('/contact')}>Get Started Now</Button>
        </div>
      </section>
    </>
  );
};

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

const ServicesPage = () => {
  const navigate = useNavigate();
  return (
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
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(`/services/${s.id}`)}>View Details</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  const navigate = useNavigate();
  return (
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
                  <Button onClick={() => navigate('/contact')}>Request Demo</Button>
                  <Button variant="outline">View Features</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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

const IndustriesPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-brand-bg min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader title="Industries We Serve" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <div key={i} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer" onClick={() => navigate(`/industries/${ind.id}`)}>
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
};

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

const PrivacyPage = () => (
  <div className="bg-white min-h-screen pt-12 pb-24">
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionHeader title="Privacy Policy" subtitle="Last Updated: October 2024" />
      <div className="prose prose-lg max-w-none text-gray-600">
        <h3 className="text-2xl font-bold text-brand-dark mb-4">1. Information We Collect</h3>
        <p className="mb-6">At LogiTech Solutions, we collect various types of information to provide our transportation and logistics software services. This includes driver personal information, geolocation data from GPS devices, vehicle telemetry data, and business contact information from our clients.</p>
        
        <h3 className="text-2xl font-bold text-brand-dark mb-4">2. Use of Information</h3>
        <p className="mb-6">We use the collected data to optimize routes, calculate fuel efficiency, ensure regulatory compliance (such as ELD mandates), and improve the overall functionality of our SaaS platforms. We do not sell driver location data to third-party advertisers.</p>
        
        <h3 className="text-2xl font-bold text-brand-dark mb-4">3. Data Security</h3>
        <p className="mb-6">We employ industry-standard encryption protocols (TLS/SSL) for all data in transit and at rest. Given the sensitive nature of supply chain data, we perform regular security audits and penetration testing on our infrastructure.</p>
        
        <h3 className="text-2xl font-bold text-brand-dark mb-4">4. Third-Party Sharing</h3>
        <p className="mb-6">We may share data with government regulatory bodies (e.g., DOT, FMCSA) only when explicitly required by law or to facilitate compliance reporting requested by the client.</p>
      </div>
    </div>
  </div>
);

const TermsPage = () => (
  <div className="bg-white min-h-screen pt-12 pb-24">
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionHeader title="Terms of Service" subtitle="Agreement between LogiTech Solutions and User" />
      <div className="prose prose-lg max-w-none text-gray-600">
        <h3 className="text-2xl font-bold text-brand-dark mb-4">1. Acceptance of Terms</h3>
        <p className="mb-6">By accessing or using our website, mobile applications, or SaaS platforms, you agree to be bound by these Terms of Service and all applicable laws and regulations governing the transportation industry.</p>
        
        <h3 className="text-2xl font-bold text-brand-dark mb-4">2. Use License</h3>
        <p className="mb-6">Permission is granted to temporarily download one copy of the materials (information or software) on LogiTech Solutions' website for personal, non-commercial transitory viewing only. For SaaS subscribers, usage rights are governed by the specific Enterprise Service Agreement signed upon purchase.</p>
        
        <h3 className="text-2xl font-bold text-brand-dark mb-4">3. Compliance</h3>
        <p className="mb-6">Users agree not to use our software to bypass any Hours of Service (HOS) regulations, weight limits, or other transportation laws. LogiTech Solutions bears no liability for regulatory fines incurred by misuse of our software.</p>
        
        <h3 className="text-2xl font-bold text-brand-dark mb-4">4. Intellectual Property</h3>
        <p className="mb-6">All custom code, algorithms, and designs provided during custom development projects remain the intellectual property of LogiTech Solutions unless explicitly transferred via a Work for Hire agreement.</p>
      </div>
    </div>
  </div>
);

const SLAPage = () => (
  <div className="bg-white min-h-screen pt-12 pb-24">
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionHeader title="Service Level Agreement" subtitle="Our commitment to reliability and uptime." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="text-center p-8 bg-green-50 border-green-200">
              <h3 className="text-4xl font-black text-green-600 mb-2">99.9%</h3>
              <p className="font-bold text-brand-dark">Uptime Guarantee</p>
              <p className="text-sm text-gray-500 mt-2">For all Enterprise SaaS Plans</p>
          </Card>
          <Card className="text-center p-8 bg-blue-50 border-blue-200">
              <h3 className="text-4xl font-black text-blue-600 mb-2">1 Hour</h3>
              <p className="font-bold text-brand-dark">Critical Response Time</p>
              <p className="text-sm text-gray-500 mt-2">24/7 Support for Severity 1 Issues</p>
          </Card>
      </div>
      <div className="prose prose-lg max-w-none text-gray-600">
        <h3 className="text-2xl font-bold text-brand-dark mb-4">1. Service Availability</h3>
        <p className="mb-6">We guarantee that our SaaS platforms (FleetManager, DispatchMaster) will be available 99.9% of the time during any monthly billing cycle. Downtime excludes scheduled maintenance windows which are communicated at least 48 hours in advance.</p>
        
        <h3 className="text-2xl font-bold text-brand-dark mb-4">2. Support Response Times</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Severity 1 (System Down):</strong> 1 Hour Response (24/7)</li>
          <li><strong>Severity 2 (Major Feature Failure):</strong> 4 Hours Response (Business Hours)</li>
          <li><strong>Severity 3 (Minor Bug):</strong> 24 Hours Response (Business Hours)</li>
        </ul>
        
        <h3 className="text-2xl font-bold text-brand-dark mb-4">3. Credits</h3>
        <p className="mb-6">If we fail to meet the Uptime Guarantee, customers are eligible for service credits calculated as a percentage of the monthly subscription fee, up to a maximum of 50% of the monthly fee.</p>
      </div>
    </div>
  </div>
);

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-8 text-center">
        <h2 className="text-2xl font-bold mb-6">Client Portal</h2>
        <input className="w-full p-3 border mb-4 rounded" placeholder="Email" />
        <input className="w-full p-3 border mb-6 rounded" type="password" placeholder="Password" />
        <Button className="w-full">Login</Button>
        <p className="mt-4 text-sm text-gray-500 cursor-pointer" onClick={() => navigate('/')}>Back to Home</p>
      </Card>
    </div>
  );
};

const PortfolioPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-20 text-center">
      <h2 className="text-3xl font-bold">Portfolio Gallery Coming Soon</h2>
      <Button onClick={()=>navigate('/')} className="mt-4">Go Home</Button>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceDetailPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/:id" element={<IndustryDetailPage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/technologies/:id" element={<TechDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/sla" element={<SLAPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <AIChatWidget />
    </Layout>
  );
};

export default App;