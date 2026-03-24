import React from 'react';

/**
 * @file Card reutilizável para métricas e evidências.
 */
const StatCard = ({ value, title, description, badge }) => {
  return (
    <article className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
      {badge && (
        <span className="inline-flex rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700">
          {badge}
        </span>
      )}
      <p className="mt-3 text-4xl font-extrabold leading-none text-blue-700 md:text-5xl">{value}</p>
      <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </article>
  );
};

export default StatCard;
