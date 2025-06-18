import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface CalendlyButtonProps {
  text?: string;
  className?: string;
  variant?: 'desktop' | 'mobile';
  calendlyUrl?: string;
  trackingLabel?: string;
}

const CalendlyButton: React.FC<CalendlyButtonProps> = ({
  text = "Partner With Us",
  className = "",
  variant = "desktop",
  calendlyUrl = "https://calendly.com/contact-flatratebookkeeping/hv-outsourcing-client-consultation",
  trackingLabel = "Partner With Us"
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Create or get modal root element
    let modalElement = document.getElementById('calendly-modal-root');
    if (!modalElement) {
      modalElement = document.createElement('div');
      modalElement.id = 'calendly-modal-root';
      modalElement.style.position = 'fixed';
      modalElement.style.top = '0';
      modalElement.style.left = '0';
      modalElement.style.zIndex = '999999';
      document.body.appendChild(modalElement);
    }
    setModalRoot(modalElement);

    return () => {
      // Cleanup when component unmounts
      const element = document.getElementById('calendly-modal-root');
      if (element && element.children.length === 0) {
        document.body.removeChild(element);
      }
    };
  }, []);

  // Analytics tracking function
  const trackCalendlyClick = (label: string, location: string) => {
    // Google Analytics tracking
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: label,
        page_location: location,
        custom_parameter_1: 'calendly_modal'
      });
    }

    // Console log for development
    console.log('Calendly CTA clicked:', {
      label,
      location,
      timestamp: new Date().toISOString()
    });
  };

  // Main click handler
  const handleCalendlyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Track analytics
    trackCalendlyClick(trackingLabel, window.location.pathname);

    // Open modal
    setIsModalOpen(true);
    setIsLoading(false);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };



  // Base button styles
  const baseStyles = "relative inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E70051] disabled:opacity-70 disabled:cursor-not-allowed";

  // Variant-specific styles
  const variantStyles = {
    desktop: "px-6 py-2 text-white bg-gradient-to-r from-[#E70051] to-[#B8003F] rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5",
    mobile: "mx-3 mt-4 bg-[#E70051] text-white px-6 py-2 rounded-lg text-center hover:bg-[#B8003F]"
  };

  // Combine all classes
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <>
      <button
        onClick={handleCalendlyClick}
        className={buttonClasses}
        disabled={isLoading}
        aria-label={`${text} - Schedule a consultation with HV Outsourcing`}
        title="Schedule a free consultation to discuss your BPO needs"
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Loading...</span>
          </div>
        ) : (
          <>
            {text}
            {/* Optional icon for desktop variant */}
            {variant === 'desktop' && (
              <svg 
                className="ml-2 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
            )}
          </>
        )}
      </button>

      {/* Render modal using portal to be completely independent */}
      {isModalOpen && modalRoot && createPortal(
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999999,
            margin: 0,
            padding: 0
          }}
        >
          {/* Full screen backdrop */}
          <div 
            onClick={closeModal}
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              margin: 0,
              padding: 0,
              cursor: 'pointer'
            }}
          ></div>
          
          {/* Modal Container */}
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90vw',
              maxWidth: '1200px',
              height: '90vh',
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              overflow: 'hidden'
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 1000,
                backgroundColor: 'white',
                border: '2px solid #e5e7eb',
                borderRadius: '50%',
                padding: '12px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label="Close Calendly booking"
            >
              <svg 
                width="24" 
                height="24" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                style={{ color: '#374151' }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>

            {/* Calendly Iframe */}
            <iframe
              src={calendlyUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule a consultation with HV Outsourcing"
              style={{ 
                border: 'none',
                borderRadius: '12px'
              }}
            ></iframe>
          </div>
        </div>,
        modalRoot
      )}
    </>
  );
};

export default CalendlyButton; 