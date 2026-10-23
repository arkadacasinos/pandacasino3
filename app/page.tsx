import Image from 'next/image'

const REF_URL = 'https://nymph-pahd4.com/adsrtcqlch'

export default function Page() {
  return (
    <div className="p8k-wrap flex flex-col min-h-screen">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#0b0c0e] border-b border-[#1b1c22] px-3 sm:px-6 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Mobile hamburger anchor for pure CSS drawer */}
          <a
            href="#mobile-menu"
            className="md:hidden p8k-rail-item text-white"
            aria-label="Открыть меню Panda Casino"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </a>

          {/* Logo */}
          <a href={REF_URL} className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#18191f] border border-[#262832] flex items-center justify-center overflow-hidden">
              <Image
                src="/images/panda-logo.png"
                alt="Panda Casino логотип"
                width={36}
                height={36}
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-extrabold text-base tracking-tight text-white uppercase">Panda Casino</span>
              <span className="text-[10px] text-[#00e575] font-semibold tracking-wider">OFFICIAL MIRROR</span>
            </div>
          </a>
        </div>

        {/* Header Search Bar */}
        <div className="flex-1 max-w-md hidden md:block">
          <a
            href={REF_URL}
            className="flex items-center gap-2.5 bg-[#14151a] hover:bg-[#1a1c22] border border-[#21232c] text-[#717584] text-xs px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Искать игры в Panda Casino...</span>
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={REF_URL}
            className="p8k-btn-secondary px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg border border-[#262832]"
          >
            Вход
          </a>
          <a
            href={REF_URL}
            className="p8k-btn-primary px-3.5 sm:px-5 py-2 text-xs sm:text-sm rounded-lg shadow-md"
          >
            Регистрация
          </a>
        </div>
      </header>

      {/* Main Layout Area with Desktop Left Rail & Content */}
      <div className="flex-1 flex">
        {/* Left Rail Navigation for Desktop */}
        <aside className="hidden md:flex flex-col items-center py-4 px-2 w-16 bg-[#0e0f13] border-r border-[#1b1c22] gap-3 shrink-0">
          <a href={REF_URL} className="p8k-rail-item text-[#00e575]" title="Panda Casino Главная">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </a>
          <a href={REF_URL} className="p8k-rail-item" title="Рулетка и Колесо Фортуны">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m4.93 4.93 4.24 4.24"></path>
              <path d="m14.83 9.17 4.24-4.24"></path>
              <path d="m14.83 14.83 4.24 4.24"></path>
              <path d="m9.17 14.83-4.24 4.24"></path>
              <circle cx="12" cy="12" r="4"></circle>
            </svg>
          </a>
          <a href={REF_URL} className="p8k-rail-item" title="Кошелек и Выплаты">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <line x1="2" y1="10" x2="22" y2="10"></line>
            </svg>
          </a>
          <a href={REF_URL} className="p8k-rail-item" title="Скачать приложение Панда Казино">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
          <a href={REF_URL} className="p8k-rail-item" title="VIP Клуб и Статусы">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
            </svg>
          </a>
          <div className="relative">
            <a href={REF_URL} className="p8k-rail-item" title="Подарки и Бонусы">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 12 20 22 4 22 4 12"></polyline>
                <rect x="2" y="7" width="20" height="5"></rect>
                <line x1="12" y1="22" x2="12" y2="7"></line>
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
              </svg>
            </a>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#ff3366]"></span>
          </div>
          <a href={REF_URL} className="p8k-rail-item" title="Магазин бонусов Panda Casino">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </a>
          <a href={REF_URL} className="p8k-rail-item" title="Новости и Акции">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 11 18-5v12L3 14v-3z"></path>
              <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
            </svg>
          </a>
          <a href={REF_URL} className="p8k-rail-item" title="Турниры">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
          </a>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col p-3 sm:p-5 lg:p-6 max-w-[1440px] mx-auto w-full overflow-hidden">
          {/* SCREEN 1: Exact Replication of Reference Banner + Promo Cards */}
          <section className="flex flex-col lg:grid lg:grid-cols-12 gap-3.5 mb-5">
            {/* Big Panda Hero Banner (col-span 7 on desktop) */}
            <div className="lg:col-span-7 rounded-2xl relative overflow-hidden bg-gradient-to-r from-[#0d281e] via-[#093522] to-[#041d13] border border-[#1e4d36] p-5 sm:p-7 flex flex-col justify-between min-h-[280px] sm:min-h-[320px]">
              {/* Background ambient lighting */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-40 bg-radial from-[#00e575] to-transparent"></div>
              
              {/* Panda Character Illustration */}
              <div className="absolute right-[-10px] sm:right-2 bottom-0 w-[190px] sm:w-[260px] lg:w-[320px] pointer-events-none z-10 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]">
                <Image
                  src="/images/panda-hero.png"
                  alt="Panda Casino официальный талисман панда с деньгами"
                  width={340}
                  height={340}
                  priority
                  className="object-contain"
                />
              </div>

              {/* Banner Text Content */}
              <div className="relative z-20 max-w-[58%] sm:max-w-[55%]">
                <span className="text-white/80 font-bold uppercase tracking-wider text-xs sm:text-sm">
                  БОНУС
                </span>
                <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-[#00e575] tracking-tight leading-none mt-1 mb-2">
                  ДО 225% <span className="text-white text-lg sm:text-2xl font-bold">+1500ФС</span>
                </h1>
                <p className="text-white/85 text-xs sm:text-sm font-medium mb-4 sm:mb-6 leading-tight">
                  на первый депозит в Panda Casino
                </p>

                {/* Main CTA Button */}
                <a
                  href={REF_URL}
                  className="inline-flex items-center justify-center p8k-btn-primary px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-xs sm:text-base font-extrabold shadow-lg"
                >
                  Забрать бонус
                </a>
              </div>

              {/* Payment Method Badges */}
              <div className="relative z-20 flex flex-wrap items-center gap-2.5 sm:gap-4 mt-6 pt-3 border-t border-white/10 text-xs sm:text-sm font-bold text-white/90">
                <span className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00e575" strokeWidth="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  СБП
                </span>
                <span className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00e575" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Pay
                </span>
                <span className="flex items-center gap-1 font-black tracking-wider text-[#00c068]">
                  МИР
                </span>
                <span className="flex items-center gap-1 text-white/80">
                  <span className="text-[#ff0055] text-xs">▲</span> TRON
                </span>
                <span className="flex items-center gap-1 text-[#26a17b]">
                  ₮ tether
                </span>
              </div>
            </div>

            {/* Promo Cards: Horizontal 2-col on Mobile, col-span on Desktop */}
            <div className="grid grid-cols-2 lg:contents gap-2.5 sm:gap-3.5">
              {/* Promo Card 1: Миссии */}
              <a
                href={REF_URL}
                className="lg:col-span-2.5 rounded-2xl relative overflow-hidden bg-[#16171c] hover:bg-[#1c1e24] border border-[#23252d] p-3 sm:p-5 flex flex-col items-center justify-center text-center group transition-colors min-h-[105px] sm:min-h-[160px]"
              >
                <div className="w-9 h-9 sm:w-16 sm:h-16 rounded-full border-2 border-[#2f323c] flex items-center justify-center mb-1.5 sm:mb-3 group-hover:scale-105 transition-transform text-[#858997] group-hover:text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-8 sm:h-8">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <span className="text-white font-extrabold text-xs sm:text-base tracking-wide uppercase">
                  МИССИИ
                </span>
                <span className="text-[10px] sm:text-xs text-[#717584] mt-0.5 sm:mt-1 hidden xs:inline">Квесты и награды</span>
              </a>

              {/* Promo Card 2: Магазин Бонусов */}
              <a
                href={REF_URL}
                className="lg:col-span-2.5 rounded-2xl relative overflow-hidden bg-[#16171c] hover:bg-[#1c1e24] border border-[#23252d] p-3 sm:p-5 flex flex-col items-center justify-center text-center group transition-colors min-h-[105px] sm:min-h-[160px]"
              >
                <div className="w-9 h-9 sm:w-16 sm:h-16 rounded-full border-2 border-[#2f323c] flex items-center justify-center mb-1.5 sm:mb-3 group-hover:scale-105 transition-transform text-[#858997] group-hover:text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-8 sm:h-8">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </div>
                <span className="text-white font-extrabold text-xs sm:text-base tracking-wide uppercase leading-tight">
                  МАГАЗИН<br className="hidden sm:inline" /> БОНУСОВ
                </span>
                <span className="text-[10px] sm:text-xs text-[#717584] mt-0.5 sm:mt-1 hidden xs:inline">Фриспины за баллы</span>
              </a>
            </div>
          </section>

          {/* Live Recent Winners / Ticker Strip */}
          <section className="mb-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <a href={REF_URL} className="shrink-0 flex items-center gap-2.5 p8k-live-card px-2.5 py-1.5 rounded-xl hover:border-[#383b44] transition-all">
                <div className="w-9 h-9 rounded-lg overflow-hidden bg-black shrink-0">
                  <Image src="/images/slot-1.png" alt="Anubis Wrath" width={36} height={36} className="object-cover" />
                </div>
                <div className="flex flex-col text-[11px] leading-tight pr-1">
                  <span className="text-[#888b97] font-medium">user***40</span>
                  <span className="text-[#00e575] font-bold">1 159 руб.</span>
                </div>
              </a>

              <a href={REF_URL} className="shrink-0 flex items-center gap-2.5 p8k-live-card px-2.5 py-1.5 rounded-xl hover:border-[#383b44] transition-all">
                <div className="w-9 h-9 rounded-lg overflow-hidden bg-black shrink-0">
                  <Image src="/images/slot-2.png" alt="Lobster Bob" width={36} height={36} className="object-cover" />
                </div>
                <div className="flex flex-col text-[11px] leading-tight pr-1">
                  <span className="text-[#888b97] font-medium">user***70</span>
                  <span className="text-[#00e575] font-bold">1 600 руб.</span>
                </div>
              </a>

              <a href={REF_URL} className="shrink-0 flex items-center gap-2.5 p8k-live-card px-2.5 py-1.5 rounded-xl hover:border-[#383b44] transition-all">
                <div className="w-9 h-9 rounded-lg overflow-hidden bg-black shrink-0">
                  <Image src="/images/slot-3.png" alt="Hot Chili Bells" width={36} height={36} className="object-cover" />
                </div>
                <div className="flex flex-col text-[11px] leading-tight pr-1">
                  <span className="text-[#888b97] font-medium">user***42</span>
                  <span className="text-[#00e575] font-bold">1 025 руб.</span>
                </div>
              </a>

              <a href={REF_URL} className="shrink-0 flex items-center gap-2.5 p8k-live-card px-2.5 py-1.5 rounded-xl hover:border-[#383b44] transition-all">
                <div className="w-9 h-9 rounded-lg overflow-hidden bg-black shrink-0">
                  <Image src="/images/slot-1.png" alt="God of Wealth" width={36} height={36} className="object-cover" />
                </div>
                <div className="flex flex-col text-[11px] leading-tight pr-1">
                  <span className="text-[#888b97] font-medium">user***79</span>
                  <span className="text-[#00e575] font-bold">4 320 руб.</span>
                </div>
              </a>

              <a href={REF_URL} className="shrink-0 flex items-center gap-2.5 p8k-live-card px-2.5 py-1.5 rounded-xl hover:border-[#383b44] transition-all">
                <div className="w-9 h-9 rounded-lg overflow-hidden bg-black shrink-0">
                  <Image src="/images/slot-4.png" alt="Cowboys Gold" width={36} height={36} className="object-cover" />
                </div>
                <div className="flex flex-col text-[11px] leading-tight pr-1">
                  <span className="text-[#888b97] font-medium">user***84</span>
                  <span className="text-[#00e575] font-bold">1 200 руб.</span>
                </div>
              </a>

              <a href={REF_URL} className="shrink-0 flex items-center gap-2.5 p8k-live-card px-2.5 py-1.5 rounded-xl hover:border-[#383b44] transition-all">
                <div className="w-9 h-9 rounded-lg overflow-hidden bg-black shrink-0">
                  <Image src="/images/slot-6.png" alt="Mad Crew" width={36} height={36} className="object-cover" />
                </div>
                <div className="flex flex-col text-[11px] leading-tight pr-1">
                  <span className="text-[#888b97] font-medium">user***00</span>
                  <span className="text-[#00e575] font-bold">1 420 руб.</span>
                </div>
              </a>

              <a href={REF_URL} className="shrink-0 flex items-center gap-2.5 p8k-live-card px-2.5 py-1.5 rounded-xl hover:border-[#383b44] transition-all">
                <div className="w-9 h-9 rounded-lg overflow-hidden bg-black shrink-0">
                  <Image src="/images/slot-5.png" alt="The Bandits" width={36} height={36} className="object-cover" />
                </div>
                <div className="flex flex-col text-[11px] leading-tight pr-1">
                  <span className="text-[#888b97] font-medium">user***78</span>
                  <span className="text-[#00e575] font-bold">2 520 руб.</span>
                </div>
              </a>

              <a href={REF_URL} className="shrink-0 flex items-center gap-2.5 p8k-live-card px-2.5 py-1.5 rounded-xl hover:border-[#383b44] transition-all">
                <div className="w-9 h-9 rounded-lg overflow-hidden bg-black shrink-0">
                  <Image src="/images/slot-6.png" alt="Neon Monkey" width={36} height={36} className="object-cover" />
                </div>
                <div className="flex flex-col text-[11px] leading-tight pr-1">
                  <span className="text-[#888b97] font-medium">pres***ul</span>
                  <span className="text-[#00e575] font-bold">1 320 руб.</span>
                </div>
              </a>

              <a href={REF_URL} className="shrink-0 flex items-center gap-2.5 p8k-live-card px-2.5 py-1.5 rounded-xl hover:border-[#383b44] transition-all">
                <div className="w-9 h-9 rounded-lg overflow-hidden bg-black shrink-0">
                  <Image src="/images/slot-5.png" alt="Big Win" width={36} height={36} className="object-cover" />
                </div>
                <div className="flex flex-col text-[11px] leading-tight pr-1">
                  <span className="text-[#888b97] font-medium">user***00</span>
                  <span className="text-[#00e575] font-bold">3 980 руб.</span>
                </div>
              </a>
            </div>
          </section>

          {/* Navigation Categories and Providers Row */}
          <section className="flex flex-wrap items-center justify-between gap-2.5 mb-6 pt-1">
            {/* Search Input on Mobile/Tablet */}
            <div className="w-full md:w-auto flex-1 max-w-sm">
              <a
                href={REF_URL}
                className="flex items-center gap-2 bg-[#14151a] hover:bg-[#1a1c22] border border-[#21232c] text-[#717584] text-xs px-3.5 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span>Искать игры в Panda Casino</span>
              </a>
            </div>

            {/* Category tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
              <a href={REF_URL} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1d1f27] text-white text-xs font-semibold shrink-0">
                <span>🎰</span> Слоты
              </a>
              <a href={REF_URL} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#14151a] hover:bg-[#1a1c22] text-[#8e93a2] hover:text-white text-xs font-medium shrink-0 transition-colors">
                <span>🔥</span> Горячие
              </a>
              <a href={REF_URL} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#14151a] hover:bg-[#1a1c22] text-[#8e93a2] hover:text-white text-xs font-medium shrink-0 transition-colors">
                <span>➕</span> Новые
              </a>
              <a href={REF_URL} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#14151a] hover:bg-[#1a1c22] text-[#8e93a2] hover:text-white text-xs font-medium shrink-0 transition-colors">
                <span>👑</span> Топ
              </a>
              <a href={REF_URL} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#14151a] hover:bg-[#1a1c22] text-[#8e93a2] hover:text-white text-xs font-medium shrink-0 transition-colors">
                <span>🎁</span> Отыгрыш бонуса
              </a>
              <a href={REF_URL} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#14151a] hover:bg-[#1a1c22] text-[#8e93a2] hover:text-white text-xs font-medium shrink-0 transition-colors">
                <span>💎</span> Джекпот
              </a>
            </div>

            {/* Providers Dropdown Link */}
            <a
              href={REF_URL}
              className="flex items-center gap-2 bg-[#1a1b21] hover:bg-[#23252d] border border-[#2b2d38] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>Провайдеры</span>
            </a>
          </section>

          {/* Quick Games Showcase Cards */}
          <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-10">
            <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#14151a] border border-[#21232c] aspect-square flex flex-col justify-end p-2.5">
              <Image src="/images/slot-1.png" alt="Panda Casino Anubis Wrath" width={200} height={200} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              <span className="relative z-10 text-white font-bold text-xs">Anubis Wrath</span>
              <span className="relative z-10 text-[#00e575] text-[10px] font-semibold">Panda Casino</span>
            </a>

            <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#14151a] border border-[#21232c] aspect-square flex flex-col justify-end p-2.5">
              <Image src="/images/slot-2.png" alt="Panda Casino Lobster Bob" width={200} height={200} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              <span className="relative z-10 text-white font-bold text-xs">Lobster Bob</span>
              <span className="relative z-10 text-[#00e575] text-[10px] font-semibold">Pragmatic</span>
            </a>

            <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#14151a] border border-[#21232c] aspect-square flex flex-col justify-end p-2.5">
              <Image src="/images/slot-3.png" alt="Panda Casino Hot Chili" width={200} height={200} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              <span className="relative z-10 text-white font-bold text-xs">Hot Chili Bells</span>
              <span className="relative z-10 text-[#00e575] text-[10px] font-semibold">Amusnet</span>
            </a>

            <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#14151a] border border-[#21232c] aspect-square flex flex-col justify-end p-2.5">
              <Image src="/images/slot-4.png" alt="Panda Casino Cowboys Gold" width={200} height={200} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              <span className="relative z-10 text-white font-bold text-xs">Cowboys Gold</span>
              <span className="relative z-10 text-[#00e575] text-[10px] font-semibold">Pragmatic</span>
            </a>

            <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#14151a] border border-[#21232c] aspect-square flex flex-col justify-end p-2.5">
              <Image src="/images/slot-5.png" alt="Panda Casino The Bandits" width={200} height={200} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              <span className="relative z-10 text-white font-bold text-xs">The Bandits</span>
              <span className="relative z-10 text-[#00e575] text-[10px] font-semibold">Hacksaw</span>
            </a>

            <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#14151a] border border-[#21232c] aspect-square flex flex-col justify-end p-2.5">
              <Image src="/images/slot-6.png" alt="Panda Casino Mad Crew" width={200} height={200} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              <span className="relative z-10 text-white font-bold text-xs">Mad Crew DJ</span>
              <span className="relative z-10 text-[#00e575] text-[10px] font-semibold">Nolimit</span>
            </a>
          </section>

          {/* Quick Registration & Mirror CTA Banner */}
          <section className="bg-gradient-to-r from-[#171922] via-[#1a1c26] to-[#121318] border border-[#272a38] rounded-2xl p-6 sm:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 rounded-full bg-[#00e575]/10 text-[#00e575] text-xs font-bold uppercase tracking-wider mb-2">
                Актуальное зеркало Panda Casino
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Вход на официальный сайт Панда Казино без блокировок
              </h3>
              <p className="text-sm text-[#9aa0b2] max-w-2xl">
                Используйте рабочее зеркало Panda Casino для моментального доступа к личному кабинету, пополнению баланса через СБП и выводу выигрышей за 5 минут.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <a
                href={REF_URL}
                className="p8k-btn-primary px-7 py-3 rounded-xl text-center text-sm font-bold shadow-lg"
              >
                Регистрация за 10 секунд
              </a>
              <a
                href={REF_URL}
                className="p8k-btn-secondary px-6 py-3 rounded-xl text-center text-sm font-bold border border-[#2f3240]"
              >
                Рабочее зеркало
              </a>
            </div>
          </section>

          {/* SECTION 2: SEO Article Canvas (1500-2000 Words) */}
          <article className="p8k-text-content max-w-4xl mx-auto w-full bg-[#0e1014] border border-[#1b1d24] rounded-2xl p-5 sm:p-8 lg:p-10 shadow-xl mb-12">
            <header className="mb-6 pb-4 border-b border-[#21242e]">
              <span className="text-[#00e575] font-bold text-xs uppercase tracking-wider">
                Информационный обзор и гайд игрока
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-2 mb-3">
                Panda Casino официальный сайт — честная игра и надежные выплаты
              </h2>
              <p className="text-[#a1a6b8] text-sm">
                Полный обзор лицензионного клуба Panda Casino: как зайти на официальный сайт, активировать приветственный пакет бонусов, использовать рабочее зеркало Panda Casino на сегодня и выводить рубли на карты МИР и СБП.
              </p>
            </header>

            <section id="sec-official">
              <h2 className="text-xl sm:text-2xl font-bold">
                Panda Casino официальный сайт — регистрация и вход в личный кабинет
              </h2>
              <p>
                Современный гемблинг требует от площадок максимальной прозрачности, моментальных финансовых операций и широкого ассортимента лицензионных развлечений. <strong>Panda Casino официальный сайт</strong> создан в точном соответствии с международными стандартами честной игры. Платформа предлагает гемблерам комфортную экосистему, в которой каждый элемент интерфейса продуман до мельчайших деталей. Переходя на <strong>Panda Casino официальный сайт</strong>, пользователь попадает в стильное лобби с удобной навигацией, отзывчивым поиском по провайдерам и категориям, а также доступом к круглосуточной службе поддержки.
              </p>
              <p>
                Для создания учетной записи на официальном портале <strong>Panda Casino</strong> достаточно указать активный номер мобильного телефона или адрес электронной почты, придумать надежный пароль и выбрать валюту счета (российский рубль, доллары, евро или криптовалюты). Процедура авторизации занимает не более пятнадцати секунд. Сразу после первого входа на <strong>Panda Casino официальный сайт</strong> новичку становится доступен персонализированный бонусный раздел, где можно активировать стартовый пакет до 225% с дополнительными 1500 фриспинами.
              </p>
              <p>
                Безопасность пользовательских данных на портале <strong>Panda Casino</strong> гарантируется протоколами сквозного шифрования SSL 256-bit и строгой политикой конфиденциальности. Персональная информация игроков, платежные реквизиты и история ставок надежно изолированы от доступа третьих лиц. Регулярный независимый аудит софта от лабораторий eCOGRA и iTech Labs подтверждает строгое соответствие генератора случайных чисел (ГСЧ) заявленным фабричным коэффициентам отдачи (RTP) на уровне 96-98%.
              </p>
            </section>

            <section id="sec-mirror">
              <h2 className="text-xl sm:text-2xl font-bold">
                Panda Casino зеркало — актуальный доступ к любимым играм без блокировок
              </h2>
              <p>
                В условиях периодических ограничений со стороны сетевых регуляторов и интернет-провайдеров первостепенное значение приобретает бесперебойность сессий. <strong>Panda Casino зеркало</strong> представляет собой точную официальную копию основного ресурса, расположенную на альтернативном доменном адресе. Используя <strong>Panda Casino зеркало</strong>, вы сохраняете полный доступ ко всем функциям клуба: текущему балансу, активным турнирным очкам, статусу программы лояльности, верифицированным платежным реквизитам и избранным слотам.
              </p>
              <p>
                Главное преимущество, которым обладает фирменное <strong>Panda Casino зеркало</strong>, заключается в полном отсутствии необходимости устанавливать тяжеловесные сторонние VPN-плагины, замедляющие скорость соединения и вызывающие сетевые лаги во время вращения барабанов или трансляций Live Casino. База данных зеркал синхронизируется в режиме реального времени. Если вы пополнили баланс через мобильное устройство на основном домене, средства мгновенно отобразятся, когда вы откроете резервное <strong>Panda Casino зеркало</strong> на компьютере или планшете.
              </p>
              <p>
                Поисковые алгоритмы автоматически подбирают наиболее быстрый рабочий сервер для каждого региона. Чтобы перейти на проверенное <strong>Panda Casino зеркало</strong>, достаточно кликнуть по любой кнопке перехода на этой странице. Ссылка регулярно обновляется технической службой, что исключает риск попадания на фишинговые сайты-подделки.
              </p>
            </section>

            <section id="sec-play">
              <h2 className="text-xl sm:text-2xl font-bold">
                Panda Casino играть на реальные деньги и в бесплатном демо-режиме
              </h2>
              <p>
                Игровой каталог заведения включает свыше 5500 сертифицированных эмуляторов от ведущих мировых разработчиков: Pragmatic Play, Amusnet (EGT), Hacksaw Gaming, Nolimit City, NetEnt, Play&apos;n GO, Evolution Gaming, Spribe и многих других. В <strong>Panda Casino играть</strong> можно как на настоящие рубли с выводом выигрышей, так и в ознакомительном демо-режиме без вложений и регистрации.
              </p>
              <p>
                Бесплатная версия позволяет детально изучить волатильность аппарата, протестировать уникальные бонусные механики (Hold &amp; Win, Megaways, каскадные падения символов, расширяющиеся Wilds) и разработать собственную стратегию банкролл-менеджмента. Когда вы решите в <strong>Panda Casino играть</strong> на реальные средства, вас ждут прогрессивные джекпоты, крупные множители до x100 000 от ставки и регулярные турнирные состязания с призовыми фондами в десятки миллионов рублей.
              </p>
              <p>
                Для удобства посетителей лобби разделено на тематические категории: классические фруктовые слоты, книжные аппараты с механикой расширения, настольные дисциплины (европейская и американская рулетка, блэкджек, баккара, покер), быстрые краш-игры (Aviator, JetX, Mines) и интерактивные шоу с живыми дилерами в формате высокой четкости 4K. В <strong>Panda Casino играть</strong> одинаково комфортно с минимальными ставками от 1 рубля до хайроллер-пари на сотни тысяч рублей.
              </p>
            </section>

            <section id="sec-brand-ru">
              <h2 className="text-xl sm:text-2xl font-bold">
                Panda казино и панда казино — лицензионный клуб с быстрыми выплатами
              </h2>
              <p>
                В русскоязычном интернет-пространстве бренд часто ищут по запросам <strong>Panda казино</strong> и кириллическому названию <strong>панда казино</strong>. За несколько лет успешной работы клуб заслужил безупречную репутацию среди гемблеров благодаря кристально честным правилам вывода средств и отсутствию скрытых комиссий. В <strong>Panda казино</strong> все заявки на выплату обрабатываются автоматизированным финансовым шлюзом в режиме 24/7. Среднее время зачисления денег на карты МИР, кошельки СБП или криптоадреса составляет от 5 до 15 минут.
              </p>
              <p>
                Каждый зарегистрированный гость в <strong>панда казино</strong> автоматически подключается к многоуровневой программе лояльности. Начиная со стартового статуса «Новичок» и продвигаясь до рангов «Мастер», «VIP» и «Легенда», пользователь повышает процент еженедельного кэшбэка до 15%, получает персонального аккаунт-менеджера, сниженные вейджеры на бонусы и увеличенные суточные лимиты на снятие средств. <strong>Panda казино</strong> ценит преданность своих клиентов и поощряет активную игру индивидуальными подарками ко дню рождения.
              </p>
              <p>
                Отдельного внимания заслуживает модуль «Миссии и Магазин бонусов», реализованный в лобби клуба. Выполняя простые ежедневные задания — совершая определенное количество спинов в акционных слотах или делая ставки в лайв-играх, пользователь зарабатывает бонусные монеты. В дальнейшем эти баллы можно обменивать на бездепозитные вращения, денежные призы или ценные гаджеты в каталоге <strong>панда казино</strong>.
              </p>
            </section>

            <section id="sec-ru-mirror">
              <h2 className="text-xl sm:text-2xl font-bold">
                Панда казино зеркало — быстрое подключение к серверу и мобильная версия
              </h2>
              <p>
                Если основной сайт временно недоступен по техническим причинам или блокируется провайдером, на помощь приходит официальное <strong>панда казино зеркало</strong>. Оно сохраняет высокую скорость отклика сервера, гарантирует мгновенную загрузку анимаций слотов и полную синхронизацию игрового баланса. Независимо от того, используете ли вы стационарный компьютер на Windows/macOS или смартфон на базе Android и iOS, <strong>панда казино зеркало</strong> автоматически адаптируется под диагональ экрана вашего устройства.
              </p>
              <p>
                Мобильная веб-версия портала построена на передовой архитектуре HTML5, благодаря чему потребляет минимальное количество интернет-трафика и стабильно функционирует даже при слабом сигнале сети 3G/LTE. Открывая <strong>панда казино зеркало</strong> в мобильном браузере, игрок получает доступ к удобному жестовому управлению, возможности вращать барабаны одной рукой в вертикальной ориентации и быстро пополнять счет через банковские приложения в один клик.
              </p>
              <p>
                Чтобы не потерять связь с клубом, сохраните данную страницу в закладки браузера. Наш сервис круглосуточно мониторит работоспособность зеркал и гарантирует, что предложенное <strong>панда казино зеркало</strong> направляет исключительно на подлинный сервер игрового заведения.
              </p>
            </section>

            <section id="sec-working-mirror">
              <h2 className="text-xl sm:text-2xl font-bold">
                Панда казино зеркало рабочее на сегодня — вход без VPN и перебоев
              </h2>
              <p>
                Игроки нередко сталкиваются с ситуацией, когда вчерашняя ссылка перестает открываться из-за очередной волны блокировок. Именно поэтому <strong>панда казино зеркало рабочее</strong> обновляется ежедневно, а при необходимости — несколько раз в сутки. Администрация платформы регистрирует новые доменные имена заблаговременно, создавая разветвленную сеть безопасных зеркал, чтобы тысячи любителей азарта могли беспрепятственно крутить слоты в любое время дня и ночи.
              </p>
              <p>
                Для использования альтернативного адреса вам не нужно регистрироваться заново. Используйте ваш привычный логин и пароль: актуальное <strong>панда казино зеркало рабочее</strong> подключено к единой защищенной базе данных аккаунтов. Все накопленные бонусы, история ставок, неразыгранные фриспины и деньги на основном счете сохраняются в полном объеме.
              </p>
              <p>
                При переходе через <strong>панда казино зеркало рабочее</strong> обязательно обращайте внимание на наличие действующего SSL-сертификата (замочек в адресной строке браузера) и соответствие фирменного дизайна. Настоящее зеркало никогда не требует повторной отправки СМС-кодов для подтверждения старого пароля и не взимает дополнительных комиссий за авторизацию.
              </p>
            </section>

            <section id="sec-play-ru">
              <h2 className="text-xl sm:text-2xl font-bold">
                Панда казино играть онлайн — аппараты с высоким RTP и живые дилеры
              </h2>
              <p>
                Желание в <strong>панда казино играть</strong> объединяет как новичков, делающих первые шаги в мире слотов, так и опытных стратегов. Главный секрет популярности заведения — строгая приверженность лицензионному софту. Здесь невозможно встретить скриптовые или поддельные копии игр с заниженной отдачей. Каждый автомат загружается напрямую с серверов сертифицированных провайдеров.
              </p>
              <p>
                Решив в <strong>панда казино играть</strong>, вы можете выбрать направление по душе:
              </p>
              <ul>
                <li><strong>Видеослоты с покупкой бонусных раундов (Buy Feature):</strong> возможность не ждать выпадения трех скаттеров, а сразу приобрести раунд бесплатных вращений с повышенными коэффициентами умножения.</li>
                <li><strong>Игры с механикой Megaways:</strong> динамическое количество выигрышных линий, достигающее 117 649 способов формирования комбинаций на каждом спине.</li>
                <li><strong>Live Casino с настоящими крупье:</strong> классический блэкджек, рулетка с несколькими шариками, Crazy Time, Monopoly Live, Sweet Bonanza CandyLand в прямом эфире с профессиональными ведущими.</li>
                <li><strong>Быстрые краш-игры:</strong> раунды длительностью от нескольких секунд, где игрок сам решает, когда забрать выигрыш до того, как коэффициент обнулится.</li>
              </ul>
              <p>
                В <strong>панда казино играть</strong> можно с любого устройства: адаптивный движок подстраивает графику под возможности процессора вашего смартфона, гарантируя плавную анимацию 60 FPS без перегрева батареи.
              </p>
            </section>

            <section id="sec-online-ru">
              <h2 className="text-xl sm:text-2xl font-bold">
                Панда казино онлайн — пополнение счета, валюты и способы вывода
              </h2>
              <p>
                Финансовый комфорт пользователей — ключевой приоритет платформы <strong>панда казино онлайн</strong>. Заведение интегрировало наиболее востребованные и надежные платежные решения, адаптированные для игроков из России и стран СНГ. Пополнение счета происходит моментально и без комиссий со стороны казино.
              </p>
              <p>
                В кассе <strong>панда казино онлайн</strong> доступны следующие методы оплаты:
              </p>
              <ul>
                <li><strong>Система быстрых платежей (СБП):</strong> мгновенные переводы по QR-коду или номеру телефона без необходимости вводить полные реквизиты карты;</li>
                <li><strong>Банковские карты МИР, Visa, MasterCard:</strong> прямые платежи через защищенные шлюзы эквайринга;</li>
                <li><strong>Электронные кошельки:</strong> Piastrix, VouWallet, ЮMoney;</li>
                <li><strong>Криптовалюты:</strong> Tether USDT (TRC-20, ERC-20, TON), Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Tron (TRX), Binance Pay с минимальными сетевыми комиссиями.</li>
              </ul>
              <p>
                Минимальный депозит в <strong>панда казино онлайн</strong> составляет всего 300 рублей, что делает игру доступной для каждого желающего. Вывод средств осуществляется на те же реквизиты, с которых производилось пополнение, а верификация аккаунта требуется лишь при выводе крупных сумм от 50 000 рублей либо по первому запросу службы безопасности для защиты средств владельца.
              </p>
            </section>

            <section id="sec-official-ru">
              <h2 className="text-xl sm:text-2xl font-bold">
                Панда казино официальный клуб — бонусы, промокоды и программа лояльности
              </h2>
              <p>
                Привилегии, которые предлагает <strong>панда казино официальный</strong> ресурс, начинаются с момента создания аккаунта. Приветственный бонусный пакет распространяется на первые четыре депозита и позволяет суммарно получить до 225% надбавки к балансу и до 1500 бесплатных вращений в культовых слотах от лучших провайдеров.
              </p>
              <p>
                Кроме стартового подарка, <strong>панда казино официальный</strong> клуб регулярно радует игроков еженедельными релоад-бонусами по пятницам, специальными фриспинами по средам и бездепозитными промокодами, которые публикуются в официальном Telegram-канале заведения. Вейджер на отыгрыш большинства бонусов составляет от x30 до x40, что является одним из самых мягких и выполнимых условий на современном рынке онлайн-гемблинга.
              </p>
              <p>
                Кэшбэк в <strong>панда казино официальный</strong> начисляется каждый понедельник. Размер возврата рассчитывается от суммы чистых проигрышей за прошедшую неделю и зачисляется с минимальным вейджером от x3 до x5 в зависимости от VIP-уровня пользователя. Это дает отличный второй шанс отыграться даже при неудачной серии спинов.
              </p>
            </section>

            <section id="sec-official-site-ru">
              <h2 className="text-xl sm:text-2xl font-bold">
                Панда казино официальный сайт — служба поддержки 24/7 и безопасность
              </h2>
              <p>
                Качественный сервис невозможен без оперативной обратной связи. На портале <strong>панда казино официальный сайт</strong> работает профессиональная служба поддержки, операторы которой готовы прийти на помощь в любое время суток, без выходных и праздников. Среднее время ответа в онлайн-чате составляет менее 60 секунд.
              </p>
              <p>
                Специалисты саппорта помогут решить любой вопрос: от уточнения условий отыгрыша промо-акций и проверки статуса транзакции до помощи в прохождении верификации и подбора резервного зеркала. Связаться с поддержкой можно через встроенный онлайн-виджет в правом нижнем углу экрана, по официальной электронной почте или в Telegram-боте клуба.
              </p>
              <p>
                <strong>Панда казино официальный сайт</strong> строго соблюдает правила ответственной игры. В настройках личного кабинета пользователь всегда может установить индивидуальные лимиты на сумму депозитов, суточные проигрыши или временно приостановить действие аккаунта для самоограничения. Лицензия международного регулятора Кюрасао подтверждает юридическую чистоту проекта и гарантирует своевременную выплату даже рекордных джекпотов.
              </p>
            </section>

            {/* Comprehensive FAQ Section for High SEO Value */}
            <section id="sec-faq" className="mt-8 pt-6 border-t border-[#23252e]">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Часто задаваемые вопросы о Panda Casino (FAQ)
              </h2>

              <div className="space-y-4">
                <div className="bg-[#13151b] border border-[#222530] rounded-xl p-4">
                  <h3 className="text-white font-bold text-sm sm:text-base mb-1.5">
                    Как найти актуальное рабочее зеркало Panda Casino на сегодня?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9da3b5] m-0">
                    Самый простой способ — воспользоваться кнопками входа на этой странице. Ссылка автоматически перенаправляет на проверенное официальное зеркало Panda Casino с активным SSL-сертификатом и надежной защитой данных.
                  </p>
                </div>

                <div className="bg-[#13151b] border border-[#222530] rounded-xl p-4">
                  <h3 className="text-white font-bold text-sm sm:text-base mb-1.5">
                    Какой бонус дает Панда Казино за первый депозит?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9da3b5] m-0">
                    Новым игрокам начисляется до 225% бонуса к первому депозиту и пакет из 1500 фриспинов в топовых игровых автоматах. Бонус активируется в кассе при пополнении счета от установленной минимальной суммы.
                  </p>
                </div>

                <div className="bg-[#13151b] border border-[#222530] rounded-xl p-4">
                  <h3 className="text-white font-bold text-sm sm:text-base mb-1.5">
                    Сколько по времени занимает вывод выигрыша из панда казино?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9da3b5] m-0">
                    Благодаря автоматизированной системе процессинга выплаты на банковские карты МИР, систему быстрых платежей (СБП) и кошельки USDT обрабатываются в среднем от 5 до 15 минут без скрытых сборов.
                  </p>
                </div>

                <div className="bg-[#13151b] border border-[#222530] rounded-xl p-4">
                  <h3 className="text-white font-bold text-sm sm:text-base mb-1.5">
                    Можно ли играть в Panda Casino со смартфона?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9da3b5] m-0">
                    Да, мобильная веб-версия адаптирована под любые смартфоны и планшеты iOS и Android. Все игры запускаются прямо в браузере без необходимости скачивания тяжелых сторонних приложений.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </main>
      </div>

      {/* Floating Action Button (Telegram / Support) */}
      <a
        href={REF_URL}
        className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-[#00e575] hover:bg-[#00c966] text-black flex items-center justify-center shadow-[0_4px_20px_rgba(0,229,117,0.4)] transition-transform hover:scale-110"
        aria-label="Поддержка Panda Casino"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </a>

      {/* Pure CSS Mobile Navigation Drawer & Scrim */}
      <div
        id="mobile-menu"
        className="hidden fixed inset-y-0 left-0 w-72 bg-[#0e0f14] z-50 p-5 border-r border-[#242733] shadow-2xl overflow-y-auto"
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#21242e] mb-4">
          <div className="flex items-center gap-2">
            <Image src="/images/panda-logo.png" alt="Panda Casino" width={32} height={32} className="rounded-full" />
            <span className="font-extrabold text-white text-sm">PANDA CASINO</span>
          </div>
          <a href="#!" className="text-[#8e93a2] hover:text-white p-1 text-xl font-bold" aria-label="Закрыть меню">✕</a>
        </div>

        <div className="flex flex-col gap-2">
          <a href={REF_URL} className="p8k-btn-primary py-2.5 rounded-lg text-center text-xs font-bold mb-2">
            Забрать бонус 225%
          </a>
          <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#b1b5c2] hover:bg-[#1a1c22] hover:text-white">
            <span>🎰</span> Все слоты
          </a>
          <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#b1b5c2] hover:bg-[#1a1c22] hover:text-white">
            <span>🔥</span> Горячие игры
          </a>
          <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#b1b5c2] hover:bg-[#1a1c22] hover:text-white">
            <span>🎯</span> Миссии и задания
          </a>
          <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#b1b5c2] hover:bg-[#1a1c22] hover:text-white">
            <span>🛍️</span> Магазин бонусов
          </a>
          <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#b1b5c2] hover:bg-[#1a1c22] hover:text-white">
            <span>👑</span> VIP Программа
          </a>
          <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#b1b5c2] hover:bg-[#1a1c22] hover:text-white">
            <span>💳</span> Касса и вывод
          </a>
        </div>
      </div>
      <a href="#!" id="mobile-scrim" className="hidden fixed inset-0 bg-black/70 z-40" aria-label="Закрыть подложку"></a>

      {/* SEO Footer with Anchor Hashtags and Legal Info */}
      <footer className="mt-auto bg-[#07080a] border-t border-[#181920] px-4 py-8 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Internal Anchor Hashtags for keywords */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <a href="#sec-official" className="text-xs text-[#6e7384] hover:text-[#00e575] transition-colors">#pandacasino</a>
            <a href="#sec-mirror" className="text-xs text-[#6e7384] hover:text-[#00e575] transition-colors">#pandacasinoзеркало</a>
            <a href="#sec-play" className="text-xs text-[#6e7384] hover:text-[#00e575] transition-colors">#pandacasinoиграть</a>
            <a href="#sec-official" className="text-xs text-[#6e7384] hover:text-[#00e575] transition-colors">#pandacasinoофициальный</a>
            <a href="#sec-official" className="text-xs text-[#6e7384] hover:text-[#00e575] transition-colors">#pandacasinoофициальныйсайт</a>
            <a href="#sec-brand-ru" className="text-xs text-[#6e7384] hover:text-[#00e575] transition-colors">#pandaказино</a>
            <a href="#sec-brand-ru" className="text-xs text-[#6e7384] hover:text-[#00e575] transition-colors">#пандаказино</a>
            <a href="#sec-ru-mirror" className="text-xs text-[#6e7384] hover:text-[#00e575] transition-colors">#пандаказинозеркало</a>
            <a href="#sec-working-mirror" className="text-xs text-[#6e7384] hover:text-[#00e575] transition-colors">#пандаказинозеркалорабочее</a>
            <a href="#sec-play-ru" className="text-xs text-[#6e7384] hover:text-[#00e575] transition-colors">#пандаказиноиграть</a>
            <a href="#sec-online-ru" className="text-xs text-[#6e7384] hover:text-[#00e575] transition-colors">#пандаказиноонлайн</a>
            <a href="#sec-official-ru" className="text-xs text-[#6e7384] hover:text-[#00e575] transition-colors">#пандаказиноофициальный</a>
            <a href="#sec-official-site-ru" className="text-xs text-[#6e7384] hover:text-[#00e575] transition-colors">#пандаказиноофициальныйсайт</a>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-full bg-[#181a22] flex items-center justify-center text-xs font-bold text-red-500 border border-[#2a2c38]">18+</span>
            <span className="text-xs text-[#7d8294]">Лицензионные игры Кюрасао. Играйте ответственно.</span>
          </div>

          <p className="text-[11px] text-[#555866] max-w-xl leading-relaxed">
            © 2026 Panda Casino (Панда Казино). Все права защищены. Сервис предоставляет информацию об актуальных зеркалах и акциях онлайн-клуба.
          </p>
        </div>
      </footer>
    </div>
  )
}
