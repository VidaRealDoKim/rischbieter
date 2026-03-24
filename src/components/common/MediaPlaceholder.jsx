import React from 'react';
import { Image, PlayCircle } from 'lucide-react';

/**
 * @file Placeholder para mídia indisponível (imagem ou vídeo).
 */
const MediaPlaceholder = ({
  type = 'image',
  title = 'Mídia em produção',
  label = 'Prévia de conteúdo',
  className = ''
}) => {
  const Icon = type === 'video' ? PlayCircle : Image;

  return (
    <div
      className={`flex h-full min-h-48 flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-100 p-6 text-center ${className}`}
      aria-label={`${title} indisponível`}
    >
      <Icon className="text-slate-500" size={28} aria-hidden="true" />
      <span className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
        {label}
      </span>
      <p className="mt-3 text-sm font-medium text-slate-700">{title}</p>
      <p className="mt-1 text-xs text-slate-500">Material visual em atualização para publicação.</p>
    </div>
  );
};

export default MediaPlaceholder;
