import { motion } from "motion/react";
import { MessageCircle, Users, Gamepad2, TrendingUp } from "lucide-react";

export function WhySpecial() {
  const features = [
    {
      icon: <MessageCircle className="size-6" />,
      title: "Живая практическая речь",
      description: "Акцент на практическую, живую речь, а не на грамматику ради грамматики. Все ситуации — из реальной жизни путешественника."
    },
    {
      icon: <Gamepad2 className="size-6" />,
      title: "Интерактивные задания",
      description: "Ролевые игры, аудиоситуации, мини-квесты. Обучение через вовлечение и игру."
    },
    {
      icon: <Users className="size-6" />,
      title: "Малые группы",
      description: "Максимум 6 детей в группе — каждый получает персональное внимание преподавателя."
    },
    {
      icon: <TrendingUp className="size-6" />,
      title: "Результат A2–B1",
      description: "Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс."
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
            <div className="size-2 bg-orange-400 rounded-full"></div>
            <span className="text-orange-400 tracking-wider uppercase text-sm">Преимущества</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            ✨ Почему этот курс особенный?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-orange-500/30 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-orange-500/20 to-amber-500/20 text-orange-400 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
