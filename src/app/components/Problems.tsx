import { AlertCircle, TrendingDown, Shuffle } from "lucide-react";

export function Problems() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Нет чёткого позиционирования.",
      description: "Вы \"ещё одни\" на рынке. Клиенты сравнивают только по цене."
    },
    {
      icon: TrendingDown,
      title: "Маркетинг не даёт прогнозируемого результата.",
      description: "Рекламу включают — лиды то есть, то нет. Понять, что работает, невозможно."
    },
    {
      icon: Shuffle,
      title: "Процессы хаотичны.",
      description: "Заявки теряются, менеджеры отвечают по-разному, собственник \"дожимает сам\"."
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-pink-400/15 to-red-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-red-200/40 rotate-45 rounded-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-4">
          Похоже на вас?
        </h2>
        <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          Если вы узнали свой бизнес — тогда мы полезны.
        </p>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="relative group h-full"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-slate-100 hover:border-red-200 transition-all hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col">
                  <div className="relative w-14 h-14 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl" />
                    <div className="relative w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center opacity-90">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-1">
                    {problem.description}
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