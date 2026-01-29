import { Gauge, Network, Shield, TrendingUp } from "lucide-react";

export function Results() {
  const results = [
    {
      icon: Gauge,
      title: "Появляется управляемость",
      description: "Лиды, источники, статусы, контроль касаний.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Network,
      title: "Маркетинг становится системой",
      description: "А не набором активностей.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Снижается стоимость ошибки",
      description: "Меньше \"слива\" заявок из-за процессов.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Растёт бренд",
      description: "Охваты, узнаваемость, доверие (социальный капитал).",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/25 to-purple-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-10 w-48 h-48 border border-blue-200/30 rotate-45 rounded-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Что вы получаете{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                на выходе
              </span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-blue-200/30 rotate-1 rounded" />
            </span>
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <div
                key={index}
                className="relative group h-full"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${result.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-md border-2 border-slate-100 hover:border-blue-200 transition-all hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                  {/* Icon with gradient */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${result.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl mb-3">
                    {result.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-1">
                    {result.description}
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