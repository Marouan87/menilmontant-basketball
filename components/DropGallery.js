'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function DropGallery({ images }) {
  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    if (!zoom) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setZoom(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [zoom]);

  return (
    <>
      <div className="duo">
        {images.map((img) => (
          <figure key={img.src} style={{ margin: 0 }}>
            <button
              type="button"
              className="zoom-btn"
              onClick={() => setZoom(img)}
              aria-label={`Agrandir : ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1000}
                height={1000}
                sizes="(max-width: 800px) 45vw, 280px"
                style={{ width: '100%', height: 'auto' }}
              />
            </button>
            <figcaption className="caption">{img.caption}</figcaption>
          </figure>
        ))}
      </div>

      {zoom ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={zoom.alt}
          onClick={() => setZoom(null)}
        >
          <Image
            src={zoom.src}
            alt={zoom.alt}
            width={1400}
            height={1400}
            style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '92vh' }}
          />
          <button type="button" className="lightbox-close" onClick={() => setZoom(null)}>
            Fermer ✕
          </button>
        </div>
      ) : null}
    </>
  );
}
