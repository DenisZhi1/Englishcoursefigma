import { motion } from "motion/react";
import { Users, BookOpen } from "lucide-react";

export function ForWhom() {
  const groups = [
    {
      icon: <BookOpen className="size-8 text-cyan-400" />,
      title: "Первая группа",
      grade: "4–5 класс",
      color: "from-cyan-500/20 to-teal-500/20",
      border: "border-cyan-500/30"
    },
    {
      icon: <Users className="size-8 text-orange-400" />,
      title: "Вторая группа",
      grade: "6–8 класс",
      color: "from-orange-500/20 to-amber-500/20",
      border: "border-orange-500/30"
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
            <span className="text-orange-400 tracking-wider uppercase text-sm">Для кого курс</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Возрастные группы
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-8 bg-gradient-to-br ${group.color} backdrop-blur-sm border ${group.border} rounded-2xl hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-slate-900/50 rounded-xl">
                  {group.icon}
                </div>
                <div>
                  <h3 className="text-xl text-slate-200">{group.title}</h3>
                  <p className="text-2xl text-white">{group.grade}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
