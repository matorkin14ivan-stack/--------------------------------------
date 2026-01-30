import { Button } from "@/app/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section id="cta-section" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800" />
      
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-white/20 to-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-cyan-300/20 to-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 border border-white/20 rotate-12 rounded-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 border border-white/20 -rotate-45 rounded-2xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Accent badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span className="text-sm">Бесплатный разбор</span>
          <Sparkles className="w-4 h-4 text-yellow-300" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
          Хватит сливать бюджеты, найдите где у вас{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-yellow-300">
              неэффективен маркетинг и продажи
            </span>
            <span className="absolute bottom-2 left-0 right-0 h-3 bg-yellow-300/30 -rotate-1 rounded" />
          </span>
        </h2>
        
        <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Сделаем бесплатный разбор: каналы → воронка → процессы → точки роста.
        </p>
        
        <Button 
          size="lg" 
          className="relative bg-white text-blue-600 hover:bg-blue-50 text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-xl shadow-2xl hover:shadow-white/30 transition-all hover:scale-105 group"
        >
          <span className="flex items-center gap-2">
            Получить бесплатный разбор
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
        </Button>

        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <p className="text-sm text-blue-100">
            Без воды. С цифрами и планом на 2–4 недели.
          </p>
        </div>
      </div>
    </section>
  );
}