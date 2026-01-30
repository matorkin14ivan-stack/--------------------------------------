import { Mail, MessageCircle, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-slate-400 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-20 w-56 h-56 bg-gradient-to-tr from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg" />
              <h3 className="text-white text-xl">Системный маркетинг</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Строим маркетинг как систему для роста бизнеса. Опыт с 2013 года.
            </p>
          </div>

          <div>
            <h3 className="text-white text-xl mb-4">Контакты</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <p>info@example.com</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <p>@example</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                  <Instagram className="w-4 h-4" />
                </div>
                <p>@example</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                Системный маркетинг
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                Брендинг и позиционирование
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                Автоматизация процессов
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                SMM и контент
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p>© 2025 Системный маркетинг и автоматизация бизнеса</p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs border-2 border-slate-900">
                  АБ
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs border-2 border-slate-900">
                  ИМ
                </div>
              </div>
              <span className="text-xs">Антон Бобров и Иван Маторкин</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
