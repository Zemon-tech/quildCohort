'use client';
import React, {
  Children,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useMemo,
} from 'react';
import { motion, Transition, useMotionValue } from 'motion/react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type CarouselContextType = {
  index: number;
  setIndex: (newIndex: number) => void;
  itemsCount: number;
  setItemsCount: (newItemsCount: number) => void;
  disableDrag: boolean;
  loop: boolean;
  autoplay: boolean;
  autoplayInterval: number;
};

const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined
);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within an CarouselProvider');
  }
  return context;
}

export type CarouselProviderProps = {
  children: ReactNode;
  initialIndex?: number;
  onIndexChange?: (newIndex: number) => void;
  disableDrag?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
};

function CarouselProvider({
  children,
  initialIndex = 0,
  onIndexChange,
  disableDrag = false,
  loop = false,
  autoplay = false,
  autoplayInterval = 3000,
}: CarouselProviderProps) {
  const [index, setIndex] = useState<number>(initialIndex);
  const [itemsCount, setItemsCount] = useState<number>(0);

  const handleSetIndex = (newIndex: number) => {
    setIndex(newIndex);
    onIndexChange?.(newIndex);
  };

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!autoplay || itemsCount <= 1) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % itemsCount);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, itemsCount]);

  return (
    <CarouselContext.Provider
      value={{
        index,
        setIndex: handleSetIndex,
        itemsCount,
        setItemsCount,
        disableDrag,
        loop,
        autoplay,
        autoplayInterval,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
}

export type CarouselProps = {
  children: ReactNode;
  className?: string;
  initialIndex?: number;
  index?: number;
  onIndexChange?: (newIndex: number) => void;
  disableDrag?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
};

function Carousel({
  children,
  className,
  initialIndex = 0,
  index: externalIndex,
  onIndexChange,
  disableDrag = false,
  loop = false,
  autoplay = false,
  autoplayInterval = 3000,
}: CarouselProps) {
  const [internalIndex, setInternalIndex] = useState<number>(initialIndex);
  const isControlled = externalIndex !== undefined;
  const currentIndex = isControlled ? externalIndex : internalIndex;

  const handleIndexChange = (newIndex: number) => {
    if (!isControlled) {
      setInternalIndex(newIndex);
    }
    onIndexChange?.(newIndex);
  };

  return (
    <CarouselProvider
      initialIndex={currentIndex}
      onIndexChange={handleIndexChange}
      disableDrag={disableDrag}
      loop={loop}
      autoplay={autoplay}
      autoplayInterval={autoplayInterval}
    >
      <div className={cn('group/hover relative w-full', className)}>
        <div className='overflow-hidden'>{children}</div>
      </div>
    </CarouselProvider>
  );
}

export type CarouselNavigationProps = {
  className?: string;
  classNameButton?: string;
  alwaysShow?: boolean;
};

function CarouselNavigation({
  className,
  classNameButton,
  alwaysShow,
}: CarouselNavigationProps) {
  const { index, setIndex, itemsCount, loop } = useCarousel();

  return (
    <div
      className={cn(
        'pointer-events-none absolute left-[-12.5%] top-1/2 flex w-[125%] -translate-y-1/2 justify-between px-2',
        className
      )}
    >
      <button
        type='button'
        aria-label='Previous slide'
        className={cn(
          'pointer-events-auto h-fit w-fit rounded-full bg-zinc-50 p-2 transition-opacity duration-300 dark:bg-zinc-950',
          alwaysShow
            ? 'opacity-100'
            : 'opacity-0 group-hover/hover:opacity-100',
          alwaysShow
            ? 'disabled:opacity-40'
            : 'group-hover/hover:disabled:opacity-40',
          classNameButton
        )}
        disabled={!loop && index === 0}
        onClick={() => {
          if (loop) {
            setIndex((index - 1 + itemsCount) % itemsCount);
          } else if (index > 0) {
            setIndex(index - 1);
          }
        }}
      >
        <ChevronLeft
          className='stroke-zinc-600 dark:stroke-zinc-50'
          size={16}
        />
      </button>
      <button
        type='button'
        className={cn(
          'pointer-events-auto h-fit w-fit rounded-full bg-zinc-50 p-2 transition-opacity duration-300 dark:bg-zinc-950',
          alwaysShow
            ? 'opacity-100'
            : 'opacity-0 group-hover/hover:opacity-100',
          alwaysShow
            ? 'disabled:opacity-40'
            : 'group-hover/hover:disabled:opacity-40',
          classNameButton
        )}
        aria-label='Next slide'
        disabled={!loop && (itemsCount === 0 || index + 1 === itemsCount)}
        onClick={() => {
          if (loop) {
            setIndex((index + 1) % itemsCount);
          } else if (index < itemsCount - 1) {
            setIndex(index + 1);
          }
        }}
      >
        <ChevronRight
          className='stroke-zinc-600 dark:stroke-zinc-50'
          size={16}
        />
      </button>
    </div>
  );
}

export type CarouselIndicatorProps = {
  className?: string;
  classNameButton?: string;
};

function CarouselIndicator({
  className,
  classNameButton,
}: CarouselIndicatorProps) {
  const { index, itemsCount, setIndex } = useCarousel();

  return (
    <div
      className={cn(
        'absolute bottom-0 z-10 flex w-full items-center justify-center',
        className
      )}
    >
      <div className='flex space-x-2'>
        {Array.from({ length: itemsCount }, (_, i) => (
          <button
            key={i}
            type='button'
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            data-state={index === i ? 'active' : 'inactive'}
            className={cn(
              'h-2 w-2 rounded-full transition-opacity duration-300',
              index === i
                ? 'bg-zinc-950 dark:bg-zinc-50'
                : 'bg-zinc-900/50 dark:bg-zinc-100/50',
              classNameButton
            )}
          />
        ))}
      </div>
    </div>
  );
}

export type CarouselContentProps = {
  children: ReactNode;
  className?: string;
  transition?: Transition;
};

function CarouselContent({
  children,
  className,
  transition,
}: CarouselContentProps) {
  const { index, setIndex, setItemsCount, disableDrag, loop } = useCarousel();
  const [visibleItemsCount, setVisibleItemsCount] = useState(1);
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsLength = Children.count(children);

  const [displayIndex, setDisplayIndex] = useState(index);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;
    const firstChild = containerRef.current.children[0] as HTMLElement;
    if (!firstChild) return;

    const observer = new ResizeObserver(() => {
      if (containerRef.current && firstChild) {
        const containerWidth = containerRef.current.offsetWidth;
        const itemWidth = firstChild.offsetWidth;
        setVisibleItemsCount(containerWidth / itemWidth || 1);
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [children]);

  useEffect(() => {
    if (itemsLength) setItemsCount(itemsLength);
  }, [itemsLength, setItemsCount]);

  // Handle continuous loop logic
  useEffect(() => {
    if (!loop || itemsLength === 0) {
      setDisplayIndex(index);
      return;
    }

    const currentWrapped = ((displayIndex % itemsLength) + itemsLength) % itemsLength;
    let diff = index - currentWrapped;

    // Nearest path for infinite scroll
    if (diff > itemsLength / 2) diff -= itemsLength;
    else if (diff < -itemsLength / 2) diff += itemsLength;

    setDisplayIndex(prev => prev + diff);
  }, [index, itemsLength, loop]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -10) setIndex((index + 1) % itemsLength);
    else if (x >= 10) setIndex((index - 1 + itemsLength) % itemsLength);
  };

  const extendedChildren = useMemo(() => {
    const arr = Children.toArray(children);
    if (!loop || arr.length === 0) return arr;

    // Triple elements to allow infinite scroll in both directions
    return [
      ...arr.map((child, i) => React.cloneElement(child as React.ReactElement, { key: `pre-${i}` })),
      ...arr.map((child, i) => React.cloneElement(child as React.ReactElement, { key: `orig-${i}` })),
      ...arr.map((child, i) => React.cloneElement(child as React.ReactElement, { key: `post-${i}` })),
    ];
  }, [children, loop]);

  return (
    <motion.div
      drag={disableDrag ? false : 'x'}
      dragConstraints={{ left: 0, right: 0 }}
      dragMomentum={false}
      style={{ x: dragX }}
      animate={{
        x: `-${(displayIndex + (loop ? itemsLength : 0)) * (100 / visibleItemsCount)}%`
      }}
      onDragEnd={onDragEnd}
      onAnimationComplete={() => {
        if (!loop) return;
        // Seamlessly jump back to initial set range to prevent overflow
        const wrapped = ((displayIndex % itemsLength) + itemsLength) % itemsLength;
        if (displayIndex !== wrapped) {
          setIsTransitioning(false);
          setDisplayIndex(wrapped);
          // Briefly disable transitions for the jump, then re-enable
          setTimeout(() => setIsTransitioning(true), 10);
        }
      }}
      transition={isTransitioning ? (transition || {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      }) : { duration: 0 }}
      className={cn(
        'flex',
        !disableDrag && 'cursor-grab active:cursor-grabbing',
        className
      )}
      ref={containerRef}
    >
      {extendedChildren}
    </motion.div>
  );
}

export type CarouselItemProps = {
  children: ReactNode;
  className?: string;
};

function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <div
      className={cn(
        'w-full min-w-0 shrink-0 grow-0 overflow-hidden',
        className
      )}
    >
      {children}
    </div>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
  useCarousel,
};
