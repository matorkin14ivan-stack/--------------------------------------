import { CheckCircle2 } from "lucide-react";

export function Difference() {
  const differences = [
    "Начинаем со стратегии и экономики, а не \"с рекламы\".",
    "Считаем маржу, CAC, LTV, окупаемость, ROMI/ROAS — и привязываем решения к ним.",
    "Делаем брендбук как инструкцию, а не как PDF \"для галочки\".",
    "Встраиваем маркетинг в операционку: скрипты, контроль, процессы, чтобы лиды не \"умирали\"."
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 border border-blue-400/20 rotate-12 rounded-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 border border-purple-400/20 -rotate-45 rounded-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              Мы не делаем{" "}
              <span className="relative inline-block">
                <span className="line-through text-slate-400">"красиво"</span>
              </span>
            </h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">
              Мы делаем{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  "работает"
                </span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-blue-400/30 -rotate-1 rounded" />
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {differences.map((difference, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-6 hover:border-blue-400/50 hover:bg-white/10 transition-all">
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-md opacity-50" />
                    <CheckCircle2 className="relative w-7 h-7 text-blue-400" />
                  </div>
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                    {difference}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
