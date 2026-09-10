"use client";

import CountUp from "react-countup";

const stats = [
  { num: 2, text: "Years of Experience" },
  { num: 5, text: "Projects Completed" },
  { num: 8, text: "Core Technologies" },
  { num: 200, text: "Code Commits" },
];

function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center sm:flex-row flex-wrap gap-6 mx-auto max-w-[80vw] xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-between min-w-62.5 sm:justify-center xl:justify-start"
              >
                <p className="text-4xl xl:text-6xl font-extrabold">
                  {item.text === "Code Commits" ||
                  item.text === "Years of Experience"
                    ? "+"
                    : ""}
                </p>
                <CountUp
                  className="text-4xl xl:text-6xl font-extrabold"
                  end={item.num}
                  duration={5}
                  delay={2}
                />
                <p
                  className={`${item.text.length < 15 ? "sm:max-w-25" : "sm:max-w-37.5"} leading-snug text-white/80`}
                >
                  {item.text}
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
