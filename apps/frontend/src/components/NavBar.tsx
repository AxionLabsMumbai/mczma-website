import { useState, useEffect } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useLanguage } from '../context/LanguageContext';

const navItems = [
  { name: 'About Us', path: '/about' },
  { name: 'MCZMA', path: '/mczma' },
  { name: 'CZMP', path: '/czmp' },
  { name: 'Notifications & Circulars', path: '/notifications' },
  { name: 'How to apply', path: '/how-to-apply' },
  { name: 'Apply on Parivesh 2.0', path: '/apply-parivesh' },
  { name: 'Fees Submission', path: '/fees-submission' },
];

export default function NavBar() {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [fontOffset, setFontOffset] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [isSpeechOn, setIsSpeechOn] = useState(false);

  // Font size
  useEffect(() => {
    document.body.style.zoom = `${100 + fontOffset}%`;
    return () => { document.body.style.zoom = '100%'; };
  }, [fontOffset]);

  // Speech synthesis on hover
  useEffect(() => {
    if (!isSpeechOn) {
      window.speechSynthesis.cancel();
      return;
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const text = target.innerText?.trim();
      if (text && text.length > 0) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
      }
    };

    const handleMouseOut = () => {
      window.speechSynthesis.cancel();
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.speechSynthesis.cancel();
    };
  }, [isSpeechOn]);

  return (
    <div className="sticky top-0 z-[100] bg-white shadow-sm font-helvetica">
      {/* Top Blue Bar */}
      <div className="w-full bg-[#043174] py-2 md:py-0">
        <div className="w-full px-4 md:container md:mx-auto md:px-8 flex flex-col md:flex-row md:flex-nowrap md:items-center md:justify-end md:h-[36px] md:gap-x-[20px] text-white text-[10px] md:text-[12px] gap-y-2 md:gap-y-0">

          {/* Links Group */}
          <div className="flex items-center justify-evenly pb-1.5 border-b border-white/15 md:border-0 md:pb-0 md:justify-start md:gap-3">
            <div
              onClick={() => navigate({ to: '/contact-us' })}
              className="whitespace-nowrap cursor-pointer hover:underline transition-colors"
            >
              Contact Us
            </div>
            <div
              onClick={() => navigate({ to: '/faq' })}
              className="whitespace-nowrap cursor-pointer hover:underline transition-colors"
            >
              FAQs
            </div>
          </div>

          <div className="hidden md:block opacity-50">|</div>

          {/* Font Size, Language, Speech, Search Group */}
          <div className="flex items-center w-full md:w-auto gap-2 md:gap-[16px]">
            {/* Font size */}
            <div className="flex items-center gap-2">
              <button onClick={() => setFontOffset(prev => Math.max(prev - 2, -4))} className="hover:underline cursor-pointer">A-</button>
              <button onClick={() => setFontOffset(0)} className="hover:underline cursor-pointer">A</button>
              <button onClick={() => setFontOffset(prev => Math.min(prev + 2, 4))} className="hover:underline cursor-pointer">A+</button>
            </div>

            <div className="opacity-40">|</div>

            {/* Language dropdown */}
            <div
              className="relative flex items-center gap-[6px] md:gap-[10px] cursor-pointer"
              onMouseEnter={() => setIsLangOpen(true)}
              onMouseLeave={() => setIsLangOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>{language}</span>
              <svg
                className={`w-2 h-2 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 10 6"
                fill="none"
              >
                <path d="M1 1l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {isLangOpen && (
                <div className="absolute top-full right-0 pt-1 z-50">
                  <div className="w-[100px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 py-2">
                    {(['English', 'Marathi', 'Hindi'] as const)
                      .filter(lang => lang !== language)
                      .map(lang => (
                        <button
                          key={lang}
                          className="w-full text-[12px] py-2 px-3 text-gray-700 hover:text-[#0085E2] hover:bg-blue-50 transition-colors text-left cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsLangOpen(false);
                            setLanguage(lang);
                          }}
                        >
                          {lang}
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Speech Toggle */}
            <div
              className={`rounded-[8px] border border-white/30 cursor-pointer h-[24px] md:h-[28px] px-2 flex items-center justify-center gap-1 transition-all duration-300 ${isSpeechOn ? 'bg-white/20' : 'hover:bg-white/10'}`}
              onClick={() => setIsSpeechOn(prev => !prev)}
              title={isSpeechOn ? 'Turn Speech Off' : 'Turn Speech On'}
            >
              {isSpeechOn ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                  <span className="text-[10px] md:text-[12px] font-medium hidden md:block">Speech On</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                  <span className="text-[10px] md:text-[12px] font-medium hidden md:block">Speech Off</span>
                </>
              )}
            </div>

            {/* Search */}
            <div className="rounded-[8px] bg-white/20 flex-1 md:flex-none md:w-[180px] h-[24px] md:h-[28px] flex items-center gap-[6px] px-[8px] hover:bg-white/30 transition-colors focus-within:bg-white/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-90 shrink-0">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search"
                className="bg-transparent border-none outline-none text-white placeholder-white/80 text-[10px] md:text-[12px] w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* White Navbar */}
      <div className="w-full min-h-[60px] h-auto flex items-center bg-white py-3 px-4 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src="/assets/mczma (2).png" alt="MCZMA Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden xl:flex items-center gap-x-4 text-[14px] text-black">
            {navItems.map((item) => (
              <div
                key={item.name}
                onClick={() => navigate({ to: item.path })}
                className="whitespace-nowrap cursor-pointer hover:text-[#0085E2] transition-colors py-4"
              >
                {item.name}
              </div>
            ))}

            <span className="text-gray-300">|</span>

            {/* Login */}
            <div
              onClick={() => navigate({ to: '/login' })}
              className="flex items-center gap-1.5 whitespace-nowrap cursor-pointer text-[#C0392B] hover:text-[#96281B] transition-colors py-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 9.9-1" />
              </svg>
              Login
            </div>

            <span className="text-gray-300">|</span>

            {/* Register */}
            <div
              onClick={() => navigate({ to: '/register' })}
              className="flex items-center gap-1.5 whitespace-nowrap cursor-pointer text-[#C0392B] hover:text-[#96281B] transition-colors py-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Register
            </div>
          </div>

          {/* Mobile hamburger */}
          <button className="xl:hidden p-2 text-gray-700 hover:text-[#0085E2]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
