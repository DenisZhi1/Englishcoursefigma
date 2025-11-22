import { motion } from "motion/react";
import { 
  Plane, 
  Hotel, 
  UtensilsCrossed, 
  MapPin, 
  AlertCircle, 
  Ticket, 
  Users2, 
  Award 
} from "lucide-react";

export function Program() {
  const modules = [
    {
      icon: <Plane className="size-6" />,
      title: "Аэропорт без стресса",
      description: "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.",
      result: "Уверенность уже в первые часы за границей.",
      color: "cyan"
    },
    {
      icon: <Hotel className="size-6" />,
      title: "В отеле: заселение и помощь",
      description: "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.",
      result: "Практика вежливых фраз и повседневной лексики.",
      color: "teal"
    },
    {
      icon: <UtensilsCrossed className="size-6" />,
      title: "Кафе и рестораны",
      description: "Заказ еды, вопросы про аллергены, счёт и чаевые.",
      result: "Развитие гастрономического словаря и уверенности в общении.",
      color: "orange"
    },
    {
      icon: <MapPin className="size-6" />,
      title: "На улице: ориентирование и просьбы",
      description: "Как спросить дорогу, вызвать такси или найти аптеку.",
      result: "Понимание устной речи и произношения в реальных ситуациях.",
      color: "amber"
    },
    {
      icon: <AlertCircle className="size-6" />,
      title: "Экстренные случаи",
      description: "Потеря вещей, болезнь, помощь полиции — всё это на английском.",
      result: "Важные фразы, которые могут спасти отпуск.",
      color: "rose"
    },
    {
      icon: <Ticket className="size-6" />,
      title: "Туризм и развлечения",
      description: "Покупка билетов, экскурсии, общение с гидами, музеи и парки.",
      result: "Погружение в культурный контекст через язык.",
      color: "cyan"
    },
    {
      icon: <Users2 className="size-6" />,
      title: "Дружба в путешествиях",
      description: "Как познакомиться с другими детьми или подростками за границей.",
      result: "Игровая практика диалогов и неформального общения.",
      color: "teal"
    },
    {
      icon: <Award className="size-6" />,
      title: "Дипломный проект: «Мой идеальный отпуск»",
      description: "Ребёнок планирует воображаемое путешествие и представляет его на английском.",
      result: "Развитие связной речи и творческого самовыражения.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        bg: "from-cyan-500/20 to-cyan-600/20",
        border: "border-cyan-500/30",
        icon: "bg-cyan-500/20 text-cyan-400",
        accent: "text-cyan-400"
      },
      teal: {
        bg: "from-teal-500/20 to-teal-600/20",
        border: "border-teal-500/30",
        icon: "bg-teal-500/20 text-teal-400",
        accent: "text-teal-400"
      },
      orange: {
        bg: "from-orange-500/20 to-orange-600/20",
        border: "border-orange-500/30",
        icon: "bg-orange-500/20 text-orange-400",
        accent: "text-orange-400"
      },
      amber: {
        bg: "from-amber-500/20 to-amber-600/20",
        border: "border-amber-500/30",
        icon: "bg-amber-500/20 text-amber-400",
        accent: "text-amber-400"
      },
      rose: {
        bg: "from-rose-500/20 to-rose-600/20",
        border: "border-rose-500/30",
        icon: "bg-rose-500/20 text-rose-400",
        accent: "text-rose-400"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="program" className="py-20 px-4">
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
            <span className="text-cyan-400 tracking-wider uppercase text-sm">Программа курса</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Что вы изучите
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            8 тематических модулей для полной уверенности в путешествиях
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module, index) => {
            const colors = getColorClasses(module.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} rounded-2xl hover:scale-105 transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${colors.icon} rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {module.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-white mb-2">{module.title}</h3>
                    <p className="text-slate-300 text-sm mb-3">{module.description}</p>
                    <div className="flex items-start gap-2">
                      <span className="text-lg shrink-0">👉</span>
                      <p className={`${colors.accent} text-sm`}>{module.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
