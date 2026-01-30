import { Search, Lightbulb, BarChart3, Database, Rocket, TrendingUp } from "lucide-react";

export function HowWeWork() {
  const steps = [
    {
      icon: Search,
      title: "Диагностика",
      duration: "7–10 дней",
      description: "Аудит каналов, продукта, пути клиента, конкурентов, воронки продаж. Фиксируем точку А и KPI.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Стратегия и позиционирование",
      duration: "1–2 недели",
      description: "Сегменты, офферы, причины купить, сообщения, упаковка.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Воронка + аналитика",
      duration: "1–2 недели",
      description: "Сквозная, разметка, события, отчётность, контроль качества лидов.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Database,
      title: "CRM и процессы",
      duration: "1–2 недели",
      description: "Этапы по действиям клиента, SLA, распределение, напоминания, шаблоны, скрипты.",
      gradient: "from-teal-500 to-green-500"
    },
    {
      icon: Rocket,
      title: "Запуск/перезапуск каналов",
      duration: "параллельно",
      description: "SMM (контент-воронка), платный трафик, инфлюенс, сайт/лендинг, ретаргет.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Оптимизация по цифрам",
      duration: "каждую неделю",
      description: "Меняем то, что не работает. Усиливаем то, что даёт продажи.",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tr from-blue-400/15 to-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-20 w-40 h-40 border border-purple-200/40 rotate-45 rounded-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Как мы строим систему
          </h2>
          <p className="text-xl text-slate-600">
            за{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                6–8 недель
              </span>
            </span>
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group h-full"
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-md border-2 border-slate-100 hover:border-blue-200 transition-all hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col">
                  {/* Step number badge */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-xl">
                    <span className="text-white font-semibold">{index + 1}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl mb-2">
                    {step.title}
                  </h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent mb-3`}>
                    {step.duration}
                  </p>
                  <p className="text-slate-600 leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}