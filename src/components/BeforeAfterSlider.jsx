import { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

const BeforeAfterSlider = ({
  beforeImage = "/before-land.png",
  afterImage = "/after-land.png",
  beforeLabel = "Before Development",
  afterLabel = "Fully Developed Layout",
  eyebrow = "TRANSFORMATION GALLERY",
  title = "Development That Speaks For Itself",
  description = "Drag the slider to see how raw land is transformed into high-value, fully developed gated community plots."
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    updateWidth();
    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="transformation" className="py-16 px-4 bg-bg-alternate border-y border-[rgba(217,167,74,0.15)] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="inline-block text-primary text-[0.75rem] tracking-[0.3em] uppercase font-semibold mb-3">
              {eyebrow}
            </span>
            <h2 className="text-[2rem] max-lg:text-[1.875rem] max-sm:text-[1.5rem] text-[#1a1a1a] font-bold font-serif leading-tight">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-[#666666] font-sans text-[0.95rem] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Interactive Image Slider */}
        <div
          ref={containerRef}
          className="relative aspect-[16/10] lg:aspect-[16/7] overflow-hidden rounded-3xl shadow-2xl select-none group"
        >
          {/* Base Image (After) */}
          <img
            src={afterImage}
            alt="After development plot layout"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay Container & Image (Before) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden transition-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={beforeImage}
              alt="Before development land"
              className="h-full object-cover max-w-none"
              style={{
                width: containerWidth ? `${containerWidth}px` : '100%',
                maxWidth: 'none'
              }}
            />
          </div>

          {/* Labels */}
          <span className="absolute left-5 top-5 rounded-full bg-primary px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-md z-10">
            {beforeLabel}
          </span>
          <span className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-bold text-primary shadow-md z-10">
            {afterLabel}
          </span>

          {/* Divider Line & Drag Handle */}
          <div
            className="pointer-events-none absolute inset-y-0 w-1 bg-white z-20 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-primary shadow-2xl transition-transform duration-150 group-hover:scale-110">
              <MoveHorizontal className="w-6 h-6 stroke-[2.5px]" />
            </span>
          </div>

          {/* Invisible Range Input Slider */}
          <input
            aria-label="Before-and-after control slider"
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleSliderChange}
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 z-30 touch-none"
          />
        </div>

        {/* Stats below slider */}
        <div className="mt-8 flex flex-wrap gap-12 sm:gap-16 items-center">
          <div>
            <strong className="text-3xl text-primary font-serif font-bold">100%</strong>
            <span className="block text-sm text-[#666666] font-sans mt-1">Gated Community & Clear Title</span>
          </div>
          <div>
            <strong className="text-3xl text-accent font-serif font-bold">Fast-Track</strong>
            <span className="block text-sm text-[#666666] font-sans mt-1">Layout & Infrastructure Development</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
