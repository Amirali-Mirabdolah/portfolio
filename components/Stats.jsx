"use client";

import CountUp from "react-countup";

const stats = [
  { num: 2, text: "Years of Experience" },
  { num: 5, text: "Projects Completed" },
  { num: 2, text: "Core Technologies" },
  { num: 200, text: "Code Commits" },
];

function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 mx-auto max-w-[80vw] xl:max-w-none">
          {stats.map((star, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  className="text-4xl xl:text-6xl font-extrabold"
                  end={star.num}
                  duration={5}
                  delay={2}
                />
                <p
                  className={`${star.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
                >
                  {star.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
