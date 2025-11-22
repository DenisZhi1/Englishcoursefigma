import { motion } from "motion/react";
import { Calendar, Clock } from "lucide-react";

export function Schedule() {
  const schedules = [
    {
      day: "Четверг",
      time: "15:00 (МСК)",
      group: "группа 4–5 класс",
      color: "cyan"
    },
    {
      day: "Пятница",
      time: "15:30 (МСК)",
      group: "группа 6–8 класс",
      color: "orange"
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
            <span className="text-orange-400 tracking-wider uppercase text-sm">Расписание занятий</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            🕒 Когда проходят уроки
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {schedules.map((schedule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-6 bg-gradient-to-br ${
                schedule.color === "cyan"
                  ? "from-cyan-500/20 to-teal-500/20 border-cyan-500/30"
                  : "from-orange-500/20 to-amber-500/20 border-orange-500/30"
              } backdrop-blur-sm border rounded-2xl hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 ${
                  schedule.color === "cyan"
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "bg-orange-500/20 text-orange-400"
                } rounded-xl shrink-0`}>
                  <Calendar className="size-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className={`size-4 ${
                      schedule.color === "cyan" ? "text-cyan-400" : "text-orange-400"
                    }`} />
                    <h3 className="text-2xl text-white">{schedule.day}</h3>
                  </div>
                  <p className={`text-xl mb-2 ${
                    schedule.color === "cyan" ? "text-cyan-300" : "text-orange-300"
                  }`}>
                    {schedule.time}
                  </p>
                  <p className="text-slate-300">{schedule.group}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
