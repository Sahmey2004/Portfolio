import { useEffect } from 'react';

const SEOHead = ({ 
  title = "Sahmey Raiyan Khan - Computer Science Student & AI Enthusiast | DePauw University",
  description = "Sahmey Raiyan Khan is a Computer Science and Business Analytics student at DePauw University. Passionate about AI, machine learning, and full-stack development.",
  keywords = "Sahmey Raiyan Khan, Sahmey, DePauw University, Computer Science, Business Analytics, AI, Machine Learning, Software Engineer",
  canonical = "https://sahmey.com/"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    }
  }, [title, description, keywords, canonical]);

  return null;
};

export default SEOHead;