import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  score?: string;
  date: string;
  image: string;
}

const CertificateCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedCard, setExpandedCard] = useState<Certificate | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Sample certificate data
  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Java Programming National Examination Certificate',
      issuer: 'National Computer Rank Examination',
      score: 'over 90%',
      date: 'March 2024',
      image: 'public/image/certificates/javaCerti.jpeg',
    },
    {
      id: 2,
      title: 'Web Development National Examination Certificate',
      issuer: 'National Computer Rank Examination',
      score: 'over 90%',
      date: 'March 2024',
      image: 'public/image/certificates/WebDevCerti.jpeg',
    },
    {
      id: 3,
      title: 'Programming Foundations: Object-Oriented Design',
      issuer: 'LinkedIn Learning',
      date: 'May 2025',
      image: 'public/image/certificates/CertificateOfCompletion_Programming Foundations ObjectOriented Design-1.png',
    },
    {
      id: 4,
      title: 'Business Analyst and Project Manager Collaboration',
      issuer: 'International Institute of Business Analysis (IIBA®)',
      date: 'May 2025',
      image: 'public/image/certificates/CertificateOfCompletion_Programming Foundations ObjectOriented Design-1.png',
    },
    {
      id: 5,
      title: 'UI/UX Design Principles',
      issuer: 'Design Guild',
      date: 'July 2024',
      image: '/api/placeholder/300/200',
    },
    {
      id: 6,
      title: 'Grade Report',
      issuer: 'Red River College',
      score: 'average over 90%',
      date: 'May 2025',
      image: 'public/image/certificates/transcript.png',
    }
  ];

  // Calculate total number of pages (for desktop)
  const cardsPerPage = 3;
  const totalPages = Math.ceil(certificates.length / cardsPerPage);

  // Get current cards for the page (for desktop carousel)
  const getCurrentCertificates = () => {
    const startIndex = currentPage * cardsPerPage;
    return certificates.slice(startIndex, startIndex + cardsPerPage);
  };

  // Navigation handlers
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Expand card handler
  const handleExpandCard = (certificate: Certificate) => {
    setExpandedCard(certificate);
  };

  // Close expanded card
  const closeExpandedCard = () => {
    setExpandedCard(null);
  };

  // Check for mobile device
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Clean up
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Auto-rotate carousel every 10 seconds (desktop only)
  useEffect(() => {
    if (isMobile) return; // Don't auto-rotate on mobile

    const timer = setInterval(() => {
      if (!expandedCard) {
        goToNextPage();
      }
    }, 10000);

    return () => clearInterval(timer);
  }, [currentPage, expandedCard, isMobile]);

  // Render a single certificate card
  const renderCard = (certificate: Certificate) => (
    <div
      key={certificate.id}
      className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-4 w-full transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover"
        />
        <button
          className="absolute bottom-0 right-0 p-2 bg-purple-600 text-white rounded-tl-lg"
          onClick={() => handleExpandCard(certificate)}
        >
          <Maximize2 size={18} />
        </button>
      </div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{certificate.title}</h3>
      {certificate.score && <p className="text-purple-600 dark:text-purple-400 font-medium">Score: {certificate.score}</p>}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {certificate.issuer} • {certificate.date}
      </p>
    </div>
  );

  return (
    <section id="certification">
      <div className="w-full bg-gray-50 dark:bg-gray-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">
              My Certificates
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I scored over <span className="text-purple-600 dark:text-purple-400">90%</span> in both the Java and Web Development exams of the National Computer Rank Examination in China,
              and with a GPA of <span className="text-purple-600 dark:text-purple-400">4.44</span>, I have consistently maintained excellent academic performance.
            </p>
          </div>

          {/* Mobile: Card list view */}
          {isMobile && (
            <div className="flex flex-col gap-6">
              {certificates.map(certificate => renderCard(certificate))}
            </div>
          )}

          {/* Desktop: Carousel view */}
          {!isMobile && (
            <div className="relative">
              {/* Cards container */}
              <div className="flex justify-center gap-6 mb-8">
                {getCurrentCertificates().map(certificate => renderCard(certificate))}
              </div>

              {/* Navigation arrows */}
              <button
                className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-gray-600 transition-all"
                onClick={goToPrevPage}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-gray-600 transition-all"
                onClick={goToNextPage}
              >
                <ChevronRight size={24} />
              </button>

              {/* Page indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all ${currentPage === index ? 'w-8 bg-purple-600 dark:bg-purple-400' : 'w-2 bg-gray-300 dark:bg-gray-600'
                      }`}
                    onClick={() => setCurrentPage(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Expanded card modal */}
        {expandedCard && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-5xl w-full p-6 md:p-8 relative">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={closeExpandedCard}
              >
                <X size={24} />
              </button>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <img
                    src={expandedCard.image}
                    alt={expandedCard.title}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{expandedCard.title}</h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p><span className="font-semibold">Issuer:</span> {expandedCard.issuer}</p>
                    {expandedCard.score && (
                      <p><span className="font-semibold">Score:</span> <span className="text-purple-600 dark:text-purple-400 font-bold">{expandedCard.score}</span></p>
                    )}
                    <p><span className="font-semibold">Date Issued:</span> {expandedCard.date}</p>
                    <p className="mt-6">This certificate validates my expertise and knowledge in this technical area, demonstrating my commitment to excellence and continuous learning.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificateCarousel;