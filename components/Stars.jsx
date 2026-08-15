"use client";

import CountUp from "react-countup";

const stars = [
  { num: 2, text: "Years of Experience" },
  { num: 200, text: "Code Commits" },
  { num: 4, text: "Core Technologies" },
  { num: 5, text: "Completed Project" },
];

function Stars() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 mx-auto max-w-[80vw] xl:max-w-none">
          {stars.map((star, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  className="text-xl xl:text-6xl font-extrabold"
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

export default Stars;
