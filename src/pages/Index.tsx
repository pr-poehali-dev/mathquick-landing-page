import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-9xl">✖️</div>
          <div className="absolute bottom-20 right-20 text-8xl">➕</div>
          <div className="absolute top-40 right-40 text-7xl">➗</div>
        </div>
        <div className="text-center max-w-4xl mx-auto z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Таблица за 4 недели, а не за полгода
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Адаптивный тренажёр с методом Лейтнера
          </p>
          <Button
            size="lg"
            onClick={() => handleScroll('pricing')}
            className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 rounded-full hover-scale shadow-2xl"
          >
            Начать бесплатно
          </Button>
        </div>
      </section>

      <section id="problem" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl text-primary mb-8">
                Вот в чём твоя проблема
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                <p>
                  Традиционные методы заучивания таблицы умножения превращают обучение
                  в мучение. Ребёнок тратит полгода на зубрёжку, теряет мотивацию и
                  начинает ненавидеть математику.
                </p>
                <p>
                  Вы покупаете дорогие репетиторы, тратите время на проверку домашних
                  заданий, но результат всё равно далёк от идеала. Ребёнок путается,
                  забывает и просто не хочет учиться.
                </p>
                <p>
                  А ведь таблица умножения — это фундамент. Без неё страдает вся
                  дальнейшая математика: дроби, уравнения, геометрия. И отставание
                  растёт как снежный ком.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-9xl opacity-20">😰</div>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">📱</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">MathQuick</h3>
                  <p className="text-sm text-muted-foreground">Умный тренажёр</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-3xl font-bold text-center">7 × 8 = ?</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {['54', '56', '63', '48'].map((num) => (
                      <Button key={num} variant="outline" className="h-16 text-xl">
                        {num}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
              <h2 className="text-4xl md:text-5xl text-primary mb-8">
                MathQuick решает это
              </h2>
              <div className="space-y-6">
                {[
                  {
                    num: '1',
                    title: 'Адаптация',
                    desc: 'Алгоритм подстраивается под ребёнка и фокусируется на сложных примерах',
                  },
                  {
                    num: '2',
                    title: 'Метод Лейтнера',
                    desc: 'Научно доказанная техника интервальных повторений',
                  },
                  {
                    num: '3',
                    title: 'Геймификация',
                    desc: 'Баллы, достижения и уровни превращают учёбу в игру',
                  },
                  {
                    num: '4',
                    title: 'Результат',
                    desc: 'Таблица умножения за 4 недели вместо 6 месяцев',
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                      <p className="text-foreground/80">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center text-primary mb-16">
            Почему MathQuick?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Clock',
                title: 'Быстро',
                desc: '4 недели вместо полугода. Всего 10 минут в день для гарантированного результата.',
              },
              {
                icon: 'Brain',
                title: 'Научно',
                desc: 'Метод Лейтнера используется в крупнейших EdTech компаниях мира. Доказанная эффективность.',
              },
              {
                icon: 'Wallet',
                title: 'Дёшево',
                desc: 'Дешевле одного похода к репетитору. Без скрытых платежей и подписок.',
              },
            ].map((benefit) => (
              <Card
                key={benefit.title}
                className="hover-scale transition-shadow hover:shadow-xl"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={benefit.icon} size={40} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center text-primary mb-16">
            Как это работает?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'UserPlus',
                title: 'Регистрация',
                desc: 'Создайте аккаунт за 30 секунд',
              },
              {
                icon: 'Target',
                title: 'Тест',
                desc: 'Определяем текущий уровень ребёнка',
              },
              {
                icon: 'Zap',
                title: 'Тренировка',
                desc: '10 минут ежедневных занятий',
              },
              {
                icon: 'Trophy',
                title: 'Результат',
                desc: 'Таблица выучена за 4 недели',
              },
            ].map((step, index) => (
              <div key={step.title} className="text-center animate-fade-in">
                <div className="mb-4 flex justify-center">
                  <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="mb-4 flex justify-center">
                  <Icon name={step.icon} size={48} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-foreground/80">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="social-proof" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center text-primary mb-16">
            Отзывы родителей
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  'Не верила, что это возможно! Мой сын выучил таблицу за месяц. Теперь щёлкает примеры как орешки.',
                name: 'Анна',
                city: 'Москва',
                stars: 5,
              },
              {
                quote:
                  'Репетитор стоил 2000₽ в час, а результата не было. MathQuick дал результат за 299 рублей!',
                name: 'Дмитрий',
                city: 'Санкт-Петербург',
                stars: 5,
              },
              {
                quote:
                  'Дочка сама просит позаниматься! Раньше приходилось уговаривать. Спасибо за геймификацию.',
                name: 'Елена',
                city: 'Казань',
                stars: 5,
              },
            ].map((review) => (
              <Card key={review.name} className="hover-scale">
                <CardContent className="p-6">
                  <div className="mb-4 text-accent text-2xl">
                    {'⭐'.repeat(review.stars)}
                  </div>
                  <p className="text-lg mb-4 italic text-foreground/90">
                    "{review.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.city}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Начни сегодня</h2>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
            <div className="space-y-4 text-left mb-8">
              {[
                'Полный доступ ко всем функциям',
                'Метод интервальных повторений',
                'Система достижений и наград',
                'Статистика прогресса',
                'Без рекламы',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} className="text-accent" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-xl py-6 hover-scale"
              >
                Попробовать бесплатно
              </Button>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white text-xl py-6 hover-scale"
              >
                Купить за 299₽
              </Button>
            </div>
          </div>
          <p className="text-sm opacity-80">Гарантия возврата денег в течение 7 дней</p>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center text-primary mb-16">
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Подойдёт ли MathQuick моему ребёнку?',
                a: 'Да! MathQuick разработан для детей 7–11 лет. Алгоритм адаптируется под любой уровень — от полного нуля до продвинутого.',
              },
              {
                q: 'Сколько времени нужно заниматься?',
                a: 'Всего 10 минут в день. Этого достаточно для эффективного запоминания без перегрузки. Метод Лейтнера работает именно при коротких регулярных сессиях.',
              },
              {
                q: 'Что такое метод Лейтнера?',
                a: 'Это научно доказанная техника интервальных повторений. Сложные примеры повторяются чаще, лёгкие — реже. Так мозг запоминает информацию в 3 раза быстрее.',
              },
              {
                q: 'Можно ли вернуть деньги?',
                a: 'Да, мы даём 7-дневную гарантию возврата денег без вопросов. Если не увидите результата — вернём всю сумму.',
              },
              {
                q: 'Нужно ли постоянное подключение к интернету?',
                a: 'Да, для работы приложения требуется интернет. Это позволяет синхронизировать прогресс между устройствами и получать обновления.',
              },
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="py-12 px-6 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">MathQuick</h3>
              <p className="text-sm opacity-80">
                Таблица умножения за 4 недели с методом Лейтнера
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Ссылки</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="#hero" className="hover:opacity-100 transition-opacity">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:opacity-100 transition-opacity">
                    Цены
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:opacity-100 transition-opacity">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>support@mathquick.ru</li>
                <li>+7 (495) 123-45-67</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-60">
            © 2025 MathQuick. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
