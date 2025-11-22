import { motion } from "motion/react";
import { Monitor, Headphones, Wifi, Video } from "lucide-react";

export function Requirements() {
  const requirements = [
    {
      icon: <Monitor className="size-6" />,
      text: "Стационарный компьютер или ноутбук"
    },
    {
      icon: <Headphones className="size-6" />,
      text: "Наушники и микрофон"
    },
    {
      icon: <Wifi className="size-6" />,
      text: "Стабильный интернет"
    },
    {
      icon: <Video className="size-6" />,
      text: "Zoom"
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
            <span className="text-cyan-400 tracking-wider uppercase text-sm">Технические требования</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            💻 Что потребуется
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg shrink-0">
                  {req.icon}
                </div>
                <span className="text-slate-200">{req.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
