import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex items-center">
      {/* 3D Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient sphere top right */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        
        {/* Medium gradient sphere bottom left */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-cyan-400/25 to-blue-500/25 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
        
        {/* Small accent sphere center */}
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-bl from-indigo-400/20 to-pink-500/20 rounded-full blur-2xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />

        {/* Geometric shapes */}
        <div className="absolute top-20 right-1/4 w-32 h-32 border-2 border-blue-300/30 rotate-45 rounded-3xl" />
        <div className="absolute bottom-40 right-1/3 w-24 h-24 border-2 border-purple-300/30 rotate-12 rounded-2xl" />
        <div className="absolute top-1/3 left-1/4 w-40 h-40 border border-cyan-300/30 -rotate-12 rounded-full" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-8 leading-tight">
            Хотите понять, почему деньги{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                "не прибавляются"
              </span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-red-200/30 -rotate-1 rounded" />
            </span>
            {" "}— даже когда лиды есть?
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 mb-8 leading-relaxed">
            Если вы "перепробовали все", но выручка все равно не растет —{" "}
            <span className="text-blue-600 font-medium">пора собирать систему.</span>
          </p>

          {/* Value Proposition Box */}
          <div className="relative inline-block mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20" />
            <div className="relative bg-white/80 backdrop-blur-sm border-2 border-blue-100 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <p className="text-base sm:text-lg text-slate-700">
                  Мы находим кризисные места и даём план внедрения
                </p>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg sm:text-xl px-10 sm:px-12 py-7 sm:py-8 rounded-xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:scale-105 group"
              onClick={() => scrollToSection('cta-section')}
            >
              <span className="relative z-10 flex items-center gap-2">
                Получить разбор
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
            </Button>
          </div>

          {/* Authors Info */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm">
                  АБ
                </div>
                <span>Антон Бобров</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-slate-400 rounded-full" />
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                  ИМ
                </div>
                <span>Иван Маторкин</span>
              </div>
            </div>
            <p className="text-slate-500 mt-4">
              Опыт с 2013 года • Стратегия и внедрение через проверенную команду
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
