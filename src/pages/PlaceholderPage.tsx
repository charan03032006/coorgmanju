import { Link } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';
import SEO from '@/components/SEO';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <>
      <SEO title={`${title} — Coorg Manju Group of Hotels`} description={description} />
      <div className="min-h-screen flex items-center justify-center bg-cream-50 pt-20">
        <div className="section-container text-center max-w-xl">
          <div className="h-16 w-16 rounded-2xl bg-forest-100 flex items-center justify-center mx-auto mb-6">
            <Construction size={32} className="text-forest-600" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 mb-4">
            {title}
          </h1>
          <p className="text-forest-600 text-lg mb-8">
            {description || 'This page is under construction. We\'re working hard to bring you the full Coorg Manju experience.'}
          </p>
          <Link to="/" className="btn-primary">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
