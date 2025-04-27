import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

type StatItemProps = {
  value: number;
  label: string;
  suffix?: string;
};

const StatItem = ({ value, label, suffix = '' }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      
      let start = 0;
      const duration = 2000; // Duration in ms
      const startTime = Date.now();
      
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentCount = Math.floor(progress * value);
        
        setCount(currentCount);
        
        if (progress === 1) {
          clearInterval(timer);
        }
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [inView, value, controls]);

  return (
    <motion.div 
      ref={ref}
      className="bg-white p-6 rounded-lg shadow-md text-center"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-primary text-4xl md:text-5xl font-bold font-poppins mb-2">
        {count}{suffix}
      </div>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { value: 75, label: "Partnered Universities", suffix: "+" },
    { value: 10000, label: "International Students", suffix: "+" },
    { value: 98, label: "Visa Success Rate", suffix: "%" },
    { value: 250, label: "Courses Available", suffix: "+" }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              value={stat.value} 
              label={stat.label} 
              suffix={stat.suffix} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
