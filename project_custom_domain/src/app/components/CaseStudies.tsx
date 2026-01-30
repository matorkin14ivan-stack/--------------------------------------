import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function CaseStudies() {
  const cases = [
    {
      title: "Клиника эстетической медицины",
      start: "Нет системы лидогенерации, клиенты приходят по сарафану",
      done: "Запустили контент-воронку в Instagram, настроили CRM с автораспределением лидов, внедрили скрипты продаж",
      result: "Рост выручки на 240% за 6 месяцев, CAC снижен на 35%, конверсия лид → клиент выросла с 12% до 28%",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      title: "E-commerce проект (детская одежда)",
      start: "Высокий CAC, низкая LTV, нет стратегии удержания клиентов",
      done: "Переупаковали бренд, построили сквозную аналитику, запустили email-маркетинг и ретаргет",
      result: "LTV вырос на 180%, повторные покупки увеличились до 42%, ROAS 4.2 на стабильной основе",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "B2B сервис автоматизации",
      start: "Длинная сделка, низкая конверсия, отсутствие прогрева",
      done: "Создали экспертный контент, выстроили воронку через Telegram и лиды-магниты, автоматизировали прогрев",
      result: "Конверсия в сделку выросла с 3% до 11%, средний чек увеличился на 65%, цикл сделки сократился на 3 недели",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Сеть стоматологий (3 филиала)",
      start: "Разрозненная работа филиалов, нет единых процессов и отчётности",
      done: "Унифицировали позиционирование, внедрили единую CRM, запустили локальный таргет и SEO",
      result: "Общий рост записей на 320%, окупаемость маркетинга достигнута за 2 месяца, NPS вырос с 45 до 78",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="cases-section" className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-tr from-cyan-400/15 to-green-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-40 h-40 border border-purple-200/40 -rotate-12 rounded-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Кейсы
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Реальные результаты наших клиентов
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="relative group h-full"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-slate-100 hover:border-blue-200 transition-all hover:shadow-2xl h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1 h-12 bg-gradient-to-b ${caseStudy.gradient} rounded-full`} />
                  <h3 className={`text-2xl sm:text-3xl bg-gradient-to-r ${caseStudy.gradient} bg-clip-text text-transparent`}>
                    {caseStudy.title}
                  </h3>
                </div>

                <div className="space-y-5 flex-1 flex flex-col">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Старт</p>
                    <p className="text-slate-700 leading-relaxed">
                      {caseStudy.start}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Что сделали</p>
                    <p className="text-slate-700 leading-relaxed">
                      {caseStudy.done}
                    </p>
                  </div>

                  <div className={`relative bg-gradient-to-br ${caseStudy.gradient} bg-opacity-10 rounded-xl p-4 border-2 border-slate-100 mt-auto`}>
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl" />
                    <div className="relative flex items-start gap-3">
                      <div className={`w-6 h-6 bg-gradient-to-br ${caseStudy.gradient} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-600 mb-1">Результат</p>
                        <p className="text-slate-800 leading-relaxed font-medium">
                          {caseStudy.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="relative border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-base sm:text-lg px-6 sm:px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
          >
            Посмотреть больше кейсов
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}