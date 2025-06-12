import React, { useState } from 'react';
import { Book, ChevronLeft, ChevronRight, X } from 'lucide-react';

const InteractiveStorybook: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const storyPages = [
    {
      title: "Corporate Overview",
      content: [
        "Horvath & Vaeth Outsourcing OPC is a premier, enterprise-grade BPO headquartered in Makati, Philippines, with 180 fully operational seats (expandable to 268).",
        "We serve U.S.-based startups, SMEs, and Fortune 500 companies across a variety of sectors, utilizing programs like Salesforce, Five9, Zoominfo, and more.",
        "Founded in 2019, we began operations remotely with just 30 agents supporting the co-founders' U.S. businesses."
      ]
    },
    {
      title: "Our Journey",
      content: [
        "In December 2024, our vision became fully realized when we opened our flagship physical call center in Makati City.",
        "H&V Outsourcing was built out of necessity to create a highly capable, performance-obsessed customer service and sales team.",
        "One such company, a $50M/year herbal supplement brand, needed everything from customer support to B2B and B2C sales."
      ]
    },
    {
      title: "Proven Results",
      content: [
        "In just a few months, our BPO team grew B2B sales from $0 to $400K/month.",
        "We scaled B2C from nothing to $100K/month by uncovering untapped senior markets.",
        "Our ability to scale fast, test intelligently, and execute relentlessly made us realize we had something bigger."
      ]
    },
    {
      title: "Our Mission",
      content: [
        "To be the most revenue-focused and performance-driven outsourcing partner in the world.",
        "We aim to make our clients money—period. By aligning our success with yours, we ensure mutual growth and loyalty.",
        "Because we are both the client and the provider, we deliver unmatched empathy, accountability, and results."
      ]
    },
    {
      title: "Technology & Infrastructure",
      content: [
        "Enterprise-grade infrastructure with 100+ Mbps fiber with auto-failover + VLAN-secured networks.",
        "Cloud-based telephony systems with AI IVR, ACD, and omnichannel support.",
        "AES-256 encryption, hybrid cloud/on-prem storage, daily backups, MFA enforced security."
      ]
    },
    {
      title: "Our Team",
      content: [
        "Every agent has proven B2B experience and fluent, neutral-accent English verified by C2 proficiency test.",
        "Demonstrated ability to engage in complex, unscripted conversations.",
        "English-only policy enforced on the floor at all times with U.S.-born leadership on every shift."
      ]
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % storyPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + storyPages.length) % storyPages.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#E70051]/5 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Story: <span className="text-[#E70051]">A Deeper Dive into HV Outsourcing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our journey, capabilities, and commitment through our comprehensive documentation. 
            Click to flip through our story.
          </p>
          
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#E70051] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B8003F] transform hover:scale-105 transition-all duration-200 flex items-center justify-center mx-auto group"
          >
            <Book className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
            Open Our Interactive Storybook
          </button>
        </div>

        {/* Storybook Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {storyPages.slice(0, 3).map((page, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => {
                setCurrentPage(index);
                setIsOpen(true);
              }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {page.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {page.content[0]}
              </p>
              <div className="mt-4 text-[#E70051] text-sm font-medium">
                Read more →
              </div>
            </div>
          ))}
        </div>

        {/* Modal Storybook */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <Book className="w-6 h-6 text-[#E70051]" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    HV Outsourcing Story
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 min-h-[400px] flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {storyPages[currentPage].title}
                  </h2>
                  <div className="space-y-4">
                    {storyPages[currentPage].content.map((paragraph, index) => (
                      <p key={index} className="text-gray-600 leading-relaxed text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8">
                  <button
                    onClick={prevPage}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-[#E70051] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span>Previous</span>
                  </button>
                  
                  <div className="flex space-x-2">
                    {storyPages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          currentPage === index ? 'bg-[#E70051]' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextPage}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-[#E70051] transition-colors"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveStorybook;