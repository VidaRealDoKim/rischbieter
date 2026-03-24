/**
 * @file Seção de Galeria e Vídeos.
 * @description Exibe evidências visuais com suporte a placeholders intencionais quando mídia não está disponível.
 */

import React from 'react';
import { motion } from 'framer-motion';
import SectionLayout from '@/components/common/SectionLayout';
import MediaPlaceholder from '@/components/common/MediaPlaceholder';
import { galleryItems, videoItems } from '@/content/productData';

const MediaGallery = () => {
  return (
    <SectionLayout
      id="midia"
      title="Galeria e Vídeos"
      description="Evidências visuais para reforçar credibilidade técnica, operação em campo e aplicação real do produto."
      className="py-24"
      bgClass="bg-white"
    >
      <div className="space-y-10">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">Galeria do produto</h3>
          <p className="mt-2 text-sm text-slate-600">
            Imagens de instalação, comparativos e evidências de campo.
          </p>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item, index) => (
              <motion.figure
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                {item.available ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-48 w-full object-cover"
                  />
                ) : (
                  <MediaPlaceholder
                    type="image"
                    title={item.title}
                    label={item.placeholderLabel}
                    className="min-h-48 rounded-none border-0"
                  />
                )}
                <figcaption className="px-4 py-3 text-sm text-slate-600">{item.title}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-900">Vídeos demonstrativos</h3>
          <p className="mt-2 text-sm text-slate-600">
            Conteúdo recomendado: instalação no cavalete e manutenção por retrolavagem.
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            {videoItems.map((video, index) => (
              <motion.article
                key={video.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-xl border border-slate-200 bg-white p-4"
              >
                <div className="aspect-video overflow-hidden rounded-lg bg-slate-100">
                  {video.embedUrl ? (
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      loading="lazy"
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <MediaPlaceholder
                      type="video"
                      title={video.title}
                      label={video.placeholderLabel}
                      className="h-full rounded-none border-0"
                    />
                  )}
                </div>
                <h4 className="mt-3 text-base font-semibold text-slate-900">{video.title}</h4>
                <p className="mt-1 text-sm text-slate-600">{video.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default MediaGallery;
