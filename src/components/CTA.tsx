import { motion } from "motion/react";
import { ArrowRight, Plane } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden p-12 bg-gradient-to-br from-orange-500/20 via-amber-500/20 to-orange-600/20 backdrop-blur-sm border-2 border-orange-500/50 rounded-3xl text-center"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full mb-6"
            >
              <Plane className="size-10 text-white" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl text-white mb-4">
              Готовы к новым приключениям?
            </h2>
            
            <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
              👉 Запишитесь сейчас — и следующее путешествие станет первым, 
              где ваш ребёнок заговорит по-английски без страха!
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg rounded-full transition-all duration-300 shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60"
            >
              <span>Записаться на курс</span>
              <ArrowRight className="size-5" />
            </motion.button>

            <p className="text-sm text-slate-400 mt-6">
              После нажатия с вами свяжется наш менеджер для уточнения деталей
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-16 pt-8 border-t border-slate-800"
      >
        <p className="text-slate-500">
          © 2025 Английский для путешествий. Все права защищены.
        </p>
      </motion.div>
    </section>
  );
}
