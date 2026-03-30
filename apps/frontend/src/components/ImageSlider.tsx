import { useState, useEffect, useRef, useCallback } from "react";

const IMAGES = [
  "/assets/banner2.jpg",
  "/assets/banner3.jpg",
  "/assets/banner4.jpg",
  "/assets/banner5.png",
  "/assets/banner6.jpg",
  "/assets/banner7.png",
  "/assets/banner8.jpg",
  "/assets/banner9.jpg",
  "/assets/banner10.jpg",
  "/assets/banner11.jpg",
  "/assets/banner12.png",
];
const INTERVAL = 5000;

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, INTERVAL);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    startTimer();
  };

  return (
    <div className="relative w-full overflow-hidden bg-white mt-[18.62px]">
      {/* Slider Container */}
      <div className="relative h-[200px] md:h-[400px] flex items-center justify-center w-full">
        <div className="flex items-center justify-center gap-0 md:gap-8 w-full">
          {IMAGES.map((src, index) => {
            const position = index - currentIndex;
            const isCenter = position === 0;
            const isLeft =
              position === -1 ||
              (currentIndex === 0 && index === IMAGES.length - 1);
            const isRight =
              position === 1 ||
              (currentIndex === IMAGES.length - 1 && index === 0);

            if (!isCenter && !isLeft && !isRight) return null;

            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-in-out ${
                  isCenter
                    ? "z-10 opacity-100 scale-100 translate-x-0"
                    : isLeft
                      ? "z-0 opacity-0 md:opacity-100 blur-[3px] scale-100 translate-x-[-100%] md:-translate-x-[1250px]"
                      : "z-0 opacity-0 md:opacity-100 blur-[3px] scale-100 translate-x-[100%] md:translate-x-[1250px]"
                }`}
              >
                <div
                  className={`w-[90vw] md:w-[1200px] h-[200px] md:h-[400px] shrink-0 ${!isCenter ? "md:w-[300px]" : ""}`}
                >
                  <img
                    src={src}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-full rounded-xl md:rounded-2xl object-cover shadow-lg"
                  />
                  {!isCenter && (
                    <div className="absolute inset-0 rounded-2xl hidden md:block" />
                  )}
                  {isCenter && (
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-white via-white/20 to-transparent pointer-events-none rounded-b-xl md:rounded-b-2xl" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Bars */}
      <div className="flex justify-center gap-2 mt-4 pb-4 ">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="relative cursor-pointer h-[4px] w-10 rounded-full bg-gray-200 overflow-hidden group hover:bg-gray-300 transition-colors duration-200"
          >
            {index === currentIndex ? (
              <span
                key={currentIndex}
                className="absolute inset-y-0 left-0 rounded-full bg-[#043174]"
                style={{ animation: 'slider-progress 5s linear forwards' }}
              />
            ) : index < currentIndex ? (
              <span className="absolute inset-0 rounded-full bg-[#043174]/40" />
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
