import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute top-0 left-0 right-0 h-[40rem] w-full bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 shadow-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Discover the Future of Agency Management
          </div>

          <h1
            className={cn(
              "text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight",
              "bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/70"
            )}
          >
            Elevate Your Vision with Intelligent Collaboration
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience seamless agency management powered by AI. Unite teams,
            spark creativity, and deliver extraordinary results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="px-8 py-6 rounded-full font-medium text-base bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Begin Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 rounded-full font-medium text-base border-primary/20 hover:bg-primary/5"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Platform Preview */}
        <div className="relative mt-8">
          <div className="w-full max-w-6xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-primary/10 bg-card">
            <div className="absolute inset-0">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Kibito platform dashboard preview"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-6 rounded-xl bg-background/90 backdrop-blur-md border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                  <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 mb-3">
                    +150%
                  </span>
                  <span className="text-sm font-medium">Team Efficiency</span>
                </div>
                <div className="p-6 rounded-xl bg-background/90 backdrop-blur-md border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                  <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 mb-3">
                    -40%
                  </span>
                  <span className="text-sm font-medium">Meeting Time</span>
                </div>
                <div className="p-6 rounded-xl bg-background/90 backdrop-blur-md border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                  <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 mb-3">
                    +95%
                  </span>
                  <span className="text-sm font-medium">Client Success</span>
                </div>
                <div className="p-6 rounded-xl bg-background/90 backdrop-blur-md border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                  <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 mb-3">
                    +8h
                  </span>
                  <span className="text-sm font-medium">Weekly Savings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
