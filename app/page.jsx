import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

function page() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-0">
            <span className="text-xl">Front-End Developer</span>
            <h1 className="mb-6">
              Hello i'm
              <br />
              <span className="text-accent">Seyed</span>{" "}
              <span>Amirali Mirabdolah</span>
            </h1>
            <p className="max-w-125 inline-flex mb-9 text-white/80">
              I'm a Front-End Developer with +2 years of experience building web
              applications. I mainly work with React and Next.js, and I'm always
              learning and improving my skills to keep up with new technologies
              and better ways of building for the web.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="size-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-0 mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default page;
