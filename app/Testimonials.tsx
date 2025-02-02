import React, { useState } from "react";

const testimonials: string | any[] = [
  {
    name: "Supraj B",
    occupation: "B.Tech",
    text: "Sunshine helped me a lot to adjust to campus life here. I also felt secure since I knew there will always be someone I could turn to.",
    image: "/experiences/SuprajB-comp.jpg",
  },
  {
    name: "Karthik Kanukollu",
    occupation: "B.Tech",
    text: "I first heard about Sunshine on the day I joined college; when we were introduced to our mentors. It is a very good initiative, as it gives new students someone in the college they can ask doubts, so they don't feel left out.",
    image: "/experiences/KarthikK-comp.jpg",
  },
  {
    name: "Sai Manasa Pappu",
    occupation: "B.Tech",
    text: "Yeah, my mentors are the ones whom I first consulted for most of the issues. Sunshine events had also been an opportunity to interact with many of my batch mates in my early days.",
    image: "/experiences/SaiM-comp.jpg",
  },
  {
    name: "Riddhi Sahare",
    occupation: "B.Tech",
    text: "At the time of registration I got to know about Sunshine. In starting days I used to feel so lonely because of less number of known people, at that time Sunshine really helped me.",
    image: "/experiences/RiddhiS-crop.jpg",
  },
  {
    name: "Dhanush Sahasra Bejjarapu",
    occupation: "B.Tech",
    text: "My mentors helped me a lot when I was struggling. So I see Sunshine as an opportunity to lead freshers in a right direction",
    image: "/experiences/DhanushS-crop.jpg",
  },
  {
    name: "Akshit Jain",
    occupation: "B.Tech",
    text: "It is a very good initiative as it helps people to open up to others, as they are exposed to a completely new environment and helps them to cope up with it.",
    image: "/experiences/AkshitJ-comp.jpg",
  },
  {
    name: "Harsh Jain Pincha",
    occupation: "B.Tech",
    text: "I feel Sunshine is a great initiative. It is the first family for a fresher away from home where they feel secure.",
    image: "/experiences/HarshJ-comp.jpg",
  },
  {
    name: "Athithiya Raj K",
    occupation: "B.Tech",
    text: "I came to IITH from so far. First day, it helped me recover from home sickness. I got to know many people and made many friends here which may not have been possible without Sunshine. If Sunshine was not there, I might have stayed reserved and alone staying all day in my room.",
    image: "/experiences/AthithiyaR-comp.jpg",
  },
  {
    name: "Radhika Deshpande",
    occupation: "Sunshine Student Head (2017 & 2018)",
    text: "We often give our happiness the back seat thinking that it will someday come in the future. But, we forget that happiness is to be designed for the present. If you give your dreams priority, you will never have time for fears, regrets and grudges.",
    image: "/experiences/Radhika_Deshpande-comp.jpg",
  },
];

const getDeviceWidth = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth;
  }
  return null;
};

const TestimonialCarousel = () => {
  const width = getDeviceWidth();
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="relative">
      {/* SVG Background */}
      <div className="absolute z-0 w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={width && width < 1350 ? 680 : undefined}
          preserveAspectRatio="none"
          viewBox="0 0 1920 880"
        >
          <g transform="translate(960,440) scale(1,1) translate(-960,-440)">
            <linearGradient
              id="lg-0.047955344060927496"
              x1="0"
              x2="1"
              y1="0"
              y2="0"
            >
              <stop stopColor="hsl(217, 88%, 33.7%)" offset="0"></stop>
              <stop stopColor="hsl(217, 88%, 75.1%)" offset="1"></stop>
            </linearGradient>
            <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
              <animate
                attributeName="d"
                dur="33.333333333333336s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                begin="0s"
                values="M0 0L 0 804.2328934685746Q 320 597.3613372284876  640 571.0708916590191T 1280 512.0661063245175T 1920 301.8788007488083L 1920 0 Z;M0 0L 0 877.6839081951588Q 320 668.0720922803877  640 649.0018928349388T 1280 328.7087077664202T 1920 162.95038242563396L 1920 0 Z;M0 0L 0 724.9886210051687Q 320 661.4364572061575  640 623.2173947479624T 1280 359.20353038907734T 1920 135.51673041732283L 1920 0 Z;M0 0L 0 804.2328934685746Q 320 597.3613372284876  640 571.0708916590191T 1280 512.0661063245175T 1920 301.8788007488083L 1920 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
              <animate
                attributeName="d"
                dur="33.333333333333336s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                begin="-6.666666666666667s"
                values="M0 0L 0 765.7607191473613Q 320 641.7853945676919  640 624.2534689988059T 1280 365.27264408032966T 1920 190.38947978522663L 1920 0 Z;M0 0L 0 842.1984196370487Q 320 570.6690721707517  640 540.6844954979398T 1280 439.92879442880593T 1920 200.29713960445451L 1920 0 Z;M0 0L 0 796.6802345094818Q 320 721.9216894353016  640 696.8815669355181T 1280 373.6367381440213T 1920 196.63169821789495L 1920 0 Z;M0 0L 0 765.7607191473613Q 320 641.7853945676919  640 624.2534689988059T 1280 365.27264408032966T 1920 190.38947978522663L 1920 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
              <animate
                attributeName="d"
                dur="33.333333333333336s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                begin="-13.333333333333334s"
                values="M0 0L 0 801.7562714943509Q 320 634.0247183381232  640 605.7090791951217T 1280 503.9393370140325T 1920 224.7551247480177L 1920 0 Z;M0 0L 0 821.0401780336218Q 320 670.8690783540507  640 637.0744123031742T 1280 456.40745286432224T 1920 278.1294357804296L 1920 0 Z;M0 0L 0 744.0534225112256Q 320 637.6425395409125  640 593.2079605185819T 1280 457.03995196824286T 1920 254.87693899994804L 1920 0 Z;M0 0L 0 801.7562714943509Q 320 634.0247183381232  640 605.7090791951217T 1280 503.9393370140325T 1920 224.7551247480177L 1920 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
              <animate
                attributeName="d"
                dur="33.333333333333336s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                begin="-20s"
                values="M0 0L 0 817.8603658675457Q 320 592.9404308081629  640 559.1126621853513T 1280 428.9912604821798T 1920 209.017381620229L 1920 0 Z;M0 0L 0 802.0504889976935Q 320 561.3963273210122  640 537.6024084387631T 1280 430.41283267566695T 1920 256.1972069733954L 1920 0 Z;M0 0L 0 789.4448177495887Q 320 561.9675446430498  640 531.6192318019404T 1280 414.76018143244175T 1920 265.9163329632971L 1920 0 Z;M0 0L 0 817.8603658675457Q 320 592.9404308081629  640 559.1126621853513T 1280 428.9912604821798T 1920 209.017381620229L 1920 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
              <animate
                attributeName="d"
                dur="33.333333333333336s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                begin="-26.666666666666668s"
                values="M0 0L 0 844.0541574423102Q 320 623.0697081316591  640 592.8483890737847T 1280 469.85448734523794T 1920 190.81850676853674L 1920 0 Z;M0 0L 0 871.4928294956283Q 320 618.9784567388518  640 593.1183717103518T 1280 376.5051942642811T 1920 141.32293927545027L 1920 0 Z;M0 0L 0 782.0118384610068Q 320 727.3267836497654  640 694.0476176759635T 1280 518.1545471640493T 1920 276.0053882957168L 1920 0 Z;M0 0L 0 844.0541574423102Q 320 623.0697081316591  640 592.8483890737847T 1280 469.85448734523794T 1920 190.81850676853674L 1920 0 Z"
              ></animate>
            </path>
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-3 md:px-6 pt-16 relative z-1">
        <section className="mb-32 text-center">
          <h2 className="mb-12 text-3xl font-bold">What we hear</h2>

          <div className="mx-auto max-w-3xl">
            <div className="bg-blue-900 p-4 rounded-lg text-white">
              <img
                className="mx-auto mb-6 rounded-full shadow-lg w-24 h-24 object-cover"
                src={currentTestimonial.image}
                alt="avatar"
              />
              <h5 className="mb-2 text-lg font-bold">
                {currentTestimonial.name}
              </h5>
              <p className="mb-4 font-medium">
                {currentTestimonial.occupation}
              </p>
              <p className="mb-6 text-gray-300 lg:h-16">
                {currentTestimonial.text}
              </p>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                className="text-white text-2xl hover:text-blue-500 focus:outline-none"
                onClick={handlePrev}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                  />
                </svg>
              </button>
              <button
                className="text-blue-500 text-2xl hover:text-blue-900 focus:outline-none"
                onClick={handleNext}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
