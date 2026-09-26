import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types/salon';

interface ImageModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 max-w-4xl w-full bg-[#0d0d10] border border-zinc-800 rounded-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#09090b]/80">
          <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-[#c5a880]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{item.categoryLabel}</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">Demo Visual</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Frame */}
        <div className="relative flex-1 overflow-hidden bg-black flex items-center justify-center min-h-[300px] max-h-[65vh]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption */}
        <div className="p-6 bg-[#0e0e12] border-t border-zinc-800/80">
          <h3 className="text-xl font-serif text-white mb-2">{item.title}</h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};
