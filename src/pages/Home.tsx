import { Button } from "@/components/ui/button";
import ServerStats from "@/components/ServerStats";
import heroBackground from "@/assets/hero-background.png";
import logo from "@/assets/dust-valley-logo.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <img
            src={logo}
            alt="Dust Valley RP Logo"
            className="w-48 h-48 mx-auto mb-8 drop-shadow-2xl animate-fade-in"
          />
          
          <h1 className="text-5xl md:text-7xl font-western mb-6 text-shadow-western animate-fade-in">
            Welcome to Dust Valley RP
          </h1>
          
          <p className="text-xl md:text-2xl font-body font-medium mb-12 text-accent animate-fade-in">
            The Wild West Roleplay Experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="western-gradient text-lg font-body font-bold px-8 py-6 hover:scale-105 transition-transform"
              onClick={() => window.open("https://discord.gg/placeholder", "_blank")}
            >
              Join Discord
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-lg font-body font-bold px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all"
              onClick={() => window.open("cfx.re/join/placeholder", "_blank")}
            >
              Connect to Server
            </Button>
          </div>
        </div>
      </section>

      {/* Server Stats Section */}
      <ServerStats />

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-western text-center mb-16 text-primary">
            Experience the Wild West
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border-2 border-border hover:border-primary transition-all hover:scale-105">
              <h3 className="text-2xl font-western mb-4 text-primary">Authentic Roleplay</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Immerse yourself in a realistic Wild West environment with detailed roleplay mechanics and an active community.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border-2 border-border hover:border-primary transition-all hover:scale-105">
              <h3 className="text-2xl font-western mb-4 text-primary">Custom Features</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Enjoy unique scripts, custom jobs, and immersive activities designed specifically for the Western theme.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border-2 border-border hover:border-primary transition-all hover:scale-105">
              <h3 className="text-2xl font-western mb-4 text-primary">Active Community</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Join a welcoming community of players and staff dedicated to creating memorable roleplay experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
