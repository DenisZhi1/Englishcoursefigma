import { motion } from "motion/react";
import { Sparkles, Check, AlertCircle } from "lucide-react";

export function Pricing() {
  const options = [
    {
      title: "Полный курс",
      price: "12 000 ₽",
      description: "10 уроков",
      features: [
        "Все 8 модулей программы",
        "Дипломный проект",
        "Сертификат об окончании",
        "Экономия 1 000 ₽"
      ],
      highlighted: true
    },
    {
      title: "Абонемент",
      price: "1 300 ₽",
      description: "за урок",
      features: [
        "Гибкий график оплаты",
        "Все материалы курса",
        "Личная поддержка преподавателя",
        "Возможность продления"
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="size-2 bg-cyan-400 rounded-full"></div>
            <span className="text-cyan-400 tracking-wider uppercase text-sm">Стоимость</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            💳 Выберите формат обучения
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-8 rounded-2xl border-2 transition-all duration-300 ${
                option.highlighted
                  ? "bg-gradient-to-br from-orange-500/20 to-amber-500/20 border-orange-500/50 hover:border-orange-400 scale-105"
                  : "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-cyan-500/30"
              } hover:scale-110`}
            >
              {option.highlighted && (
                <div className="flex items-center gap-2 mb-4 text-orange-400">
                  <Sparkles className="size-5" />
                  <span className="text-sm uppercase tracking-wider">Выгодно</span>
                </div>
              )}
              
              <h3 className="text-2xl text-white mb-2">{option.title}</h3>
              <div className="mb-2">
                <span className={`text-4xl ${option.highlighted ? "text-orange-300" : "text-cyan-300"}`}>
                  {option.price}
                </span>
              </div>
              <p className="text-slate-400 mb-6">{option.description}</p>

              <div className="space-y-3">
                {option.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className={`size-5 shrink-0 mt-0.5 ${
                      option.highlighted ? "text-orange-400" : "text-cyan-400"
                    }`} />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-sm border border-rose-500/30 rounded-2xl"
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="size-6 text-rose-400 shrink-0 mt-1" />
            <div>
              <h3 className="text-xl text-white mb-2">📢 Набор открыт!</h3>
              <p className="text-slate-300">
                Группы маленькие — максимум 6 детей, чтобы каждый получил внимание. 
                <span className="text-rose-400"> Места ограничены!</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
