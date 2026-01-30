import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "Сколько стоит?",
      answer: "Зависит от задачи: стратегия / внедрение / сопровождение. Сначала проводим бесплатный разбор вашего бизнеса, выявляем точки роста и формируем предложение под ваши цели и бюджет."
    },
    {
      question: "Вы только SMM делаете?",
      answer: "Нет. SMM — часть системы. Если в CRM хаос, SMM не спасёт. Мы работаем комплексно: от стратегии и позиционирования до автоматизации процессов и запуска всех необходимых каналов."
    },
    {
      question: "Какие CRM внедряете?",
      answer: "Bitrix24 / amoCRM / другие — под процессы и воронку. Выбираем систему исходя из специфики вашего бизнеса, масштаба и задач. Главное — не сама CRM, а правильно выстроенные в ней процессы."
    },
    {
      question: "Как долго ждать результатов?",
      answer: "Первые улучшения видны через 2-3 недели после запуска (управляемость, прозрачность процессов). Финансовые результаты — через 1-3 месяца в зависимости от длины цикла сделки и текущего состояния бизнеса."
    },
    {
      question: "Вы работаете в моей нише?",
      answer: "Работаем с сервисами, клиниками, e-commerce, производством, локальными сетями и B2B с длинной сделкой. Если у вас есть продукт и клиенты, мы поможем выстроить систему роста — принципы универсальны."
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-tr from-cyan-400/15 to-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 border border-blue-200/30 rotate-12 rounded-2xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="relative group border-none"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white/90 backdrop-blur-sm border-2 border-slate-100 rounded-xl px-6 py-2 hover:border-blue-200 transition-all hover:shadow-lg">
                <AccordionTrigger className="text-lg sm:text-xl hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
