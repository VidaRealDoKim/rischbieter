import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Gauge, FlaskConical, HandCoins } from 'lucide-react';

const items = [
	{
		icon: ShieldCheck,
		title: 'Confianca na Medicao',
		description: 'Protege o hidrômetro contra resíduos e reduz erros operacionais.',
	},
	{
		icon: Gauge,
		title: 'Eficiência Hidraulica',
		description: 'Projeto com baixa perda de carga e desempenho consistente na rede.',
	},
	{
		icon: FlaskConical,
		title: 'Engenharia Aplicada',
		description: 'Solução desenvolvida para o contexto real de saneamento e manutenção.',
	},
	{
		icon: HandCoins,
		title: 'Menor Custo Operacional',
		description: 'Reduz trocas de medidores e intervenções corretivas ao longo do ciclo.',
	},
];

const Benefits = () => {
	return (
		<section id="beneficios" className="py-20 bg-slate-900 text-slate-100" aria-labelledby="beneficios-titulo">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="max-w-3xl"
				>
					<h2 id="beneficios-titulo" className="text-3xl md:text-4xl font-bold mb-4">
						Beneficios para Operacao e Receita
					</h2>
					<p className="text-slate-300 text-lg leading-relaxed">
						O retentor de particulas ajuda a preservar a infraestrutura de medicao e aumenta a previsibilidade da operacao.
					</p>
				</motion.div>

				<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{items.map((item, index) => (
						<motion.article
							key={item.title}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.08 }}
							className="rounded-xl border border-slate-700 bg-slate-800/70 p-6"
						>
							<item.icon className="text-cyan-300" size={28} aria-hidden="true" />
							<h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
							<p className="mt-3 text-slate-300 leading-relaxed">{item.description}</p>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Benefits;
