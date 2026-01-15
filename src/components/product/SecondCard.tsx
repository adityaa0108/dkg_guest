import Image from 'next/image';
import { Check } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Trusted Platform',
    description: 'More than 10,000 celebrations every month',
  },
  {
    id: 2,
    title: 'Professional Team',
    description: 'Follows all Safety Measures & Sanitisation Requirements',
  },
  {
    id: 3,
    title: 'Complete Confidence',
    description: 'Browse all Verified Reviews and Original Photographs',
  },
  {
    id: 4,
    title: '100% Refund',
    description: 'In case of non-availability, a complete refund of total amount is initiated',
  },
];

const services = [
  {
    id: 1,
    icon: '/products/premium.svg',
  },
  {
    id: 2,
    icon: '/products/ontime.svg',
  },
  {
    id: 3,
    icon: '/products/secured.svg',
  },
  {
    id: 4,
    icon: '/products/original.svg',
  },
  {
    id: 5,
    icon: '/products/reviews.svg',
  },
  {
    id: 6,
    icon: '/products/expert.svg',
  },
];

const FeatureIcon = () => (
  <div className="w-[1.25vw] h-[1.25vw] relative overflow-hidden flex-shrink-0">
    <div className="w-[1.04vw] h-[1.04vw] absolute left-[0.1vw] top-[0.1vw] bg-gradient-to-l from-purple-500 to-pink-500 rounded-sm flex items-center justify-center">
      <Check className="w-[0.73vw] h-[0.73vw] text-white" strokeWidth={3} />
    </div>
  </div>
);

const FeatureItem = ({ title, description }) => (
  <div className="flex items-start gap-[0.52vw]">
    <FeatureIcon />
    <p className="flex-1 text-[0.83vw] leading-relaxed">
      <span className="font-bold text-black">{title}</span>
      <span className="font-medium text-black"> - {description}</span>
    </p>
  </div>
);

const ServiceItem = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-[0.63vw]">
    <div className="relative w-[6.47vw] h-[9.39vw]">
      <Image
        src={icon}
        alt={label}
        width={124.29424}
        height={180.33221}
        className="object-contain"
        priority
      />
    </div>
    <p className="text-center text-[0.73vw] font-medium text-black leading-tight">
      {label}
    </p>
  </div>
);

export default function SecondCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-[0.83vw]">
      <div className="flex flex-col lg:flex-row gap-[1.25vw] w-full max-w-[91.67vw]">
        {/* Left Card - Why Choose DKGPro */}
        <article className="flex-1 px-[1.67vw] sm:px-[7.5vw] lg:px-[7.81vw] py-[2.08vw] bg-neutral-50 rounded-[1.67vw] shadow-[2px_2px_80px_0px_rgba(0,0,0,0.15)] flex flex-col items-center gap-[1.67vw]">
          <header className="w-full">
            <h2 
              className="text-center text-purple-500 text-[1.25vw] font-black tracking-widest leading-tight"
              style={{ fontFamily: 'JMH Typewriter, monospace' }}
            >
              WHY CHOOSE DKGPro?
            </h2>
          </header>
          
          <div className="w-full flex flex-col gap-[1.04vw]">
            {features.map((feature) => (
              <FeatureItem
                key={feature.id}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </article>

        {/* Right Card - Services */}
        <article className="flex-1 px-[1.67vw] sm:px-[7.5vw] lg:px-[7.81vw] py-[2.08vw] bg-neutral-50 rounded-[1.67vw] shadow-[2px_2px_80px_0px_rgba(0,0,0,0.15)] flex flex-col items-center gap-[1.67vw]">
          <header className="w-full">
            <h2 
              className="text-center text-purple-500 text-[1.25vw] font-black tracking-widest leading-tight"
              style={{ fontFamily: 'JMH Typewriter, monospace' }}
            >
              OUR SERVICES
            </h2>
          </header>
          
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-x-[1.25vw] gap-y-[1.67vw]">
            {services.map((service) => (
              <ServiceItem
                key={service.id}
                icon={service.icon}
                label={service.label}
              />
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}