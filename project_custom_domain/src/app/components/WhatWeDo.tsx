import { Target, Sparkles, Settings, Share2 } from "lucide-react";

export function WhatWeDo() {
  const services = [
    {
      icon: Target,
      title: "Системный маркетинг",
      description: "Разбираем путь клиента, строим воронку, собираем каналы, ставим план по цифрам.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      title: "Брендинг и позиционирование",
      description: "Чтобы вы отличались фактами, а не лозунгами. И чтобы команда говорила одним голосом.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Settings,
      title: "Автоматизация и оптимизация процессов",
      description: "CRM, скрипты, контроль касаний, распределение лидов, SLA, отчёты. Чтобы маркетинг не упирался в хаос на стороне продаж.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Share2,
      title: "SMM как канал доверия и продаж",
      description: "Контент не \"для лайков\", а под задачи: охват → прогрев → заявка → продажа. Особенно работает в нишах, где важны эмоции и доверие.",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-20 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-cyan-400/15 to-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-40 h-40 border border-blue-200/30 -rotate-12 rounded-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Мы строим{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                систему роста
              </span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-blue-200/30 rotate-1 rounded" />
            </span>
          </h2>
        </div>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative group h-full"
              >
                {/* Animated gradient glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-slate-100 hover:border-blue-200 transition-all hover:shadow-2xl h-full flex flex-col">
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className="text-3xl bg-gradient-to-br from-slate-200 to-slate-300 bg-clip-text text-transparent">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <h3 className="text-xl sm:text-2xl flex-1">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}