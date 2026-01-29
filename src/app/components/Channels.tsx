import { Instagram, Search, Target, MessageCircle, Globe, Mail } from "lucide-react";

export function Channels() {
  const channels = [
    {
      icon: Instagram,
      title: "SMM",
      platforms: "Instagram / VK / Reels / Shorts",
      description: "Контент-воронка, прогревы, лидоген",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: Search,
      title: "Контекст и SEO",
      platforms: "Яндекс / Google",
      description: "Спрос \"здесь и сейчас\"",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Таргет",
      platforms: "Meta / VK",
      description: "По задаче",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: MessageCircle,
      title: "Инфлюенс и Telegram",
      platforms: "Блогеры / Каналы",
      description: "Охват + доверие, измеряем качество лидов",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Globe,
      title: "Сайт/лендинги",
      platforms: "Веб-присутствие",
      description: "Упаковка оффера и конверсия",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Mail,
      title: "CRM-каналы",
      platforms: "WhatsApp / Telegram / Email",
      description: "Догрев и возвраты",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-20 w-96 h-96 bg-gradient-to-tr from-purple-400/15 to-pink-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-cyan-200/40 -rotate-12 rounded-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Каналы, с которыми работаем
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Подключаем{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                только то, что нужно
              </span>
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-blue-200/30 -rotate-1 rounded" />
            </span>
            {" "}вашему бизнесу
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div
                key={index}
                className="relative group h-full"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${channel.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-slate-100 hover:border-blue-200 transition-all hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col">
                  {/* Icon with gradient */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${channel.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl mb-2">
                    {channel.title}
                  </h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${channel.gradient} bg-clip-text text-transparent mb-3`}>
                    {channel.platforms}
                  </p>
                  <p className="text-slate-600 leading-relaxed flex-1">
                    {channel.description}
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