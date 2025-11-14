import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Sparkles, Gift } from "lucide-react";

const Store = () => {
  const handleStoreClick = () => {
    window.open("https://placeholder.tebex.io/", "_blank");
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-western text-center mb-8 text-primary">
          Server Store
        </h1>
        
        <p className="text-xl text-center text-accent mb-16 font-body font-medium">
          Support the server and unlock exclusive items
        </p>

        <Card className="p-8 md:p-12 bg-card border-2 border-border mb-12">
          <div className="flex flex-col items-center text-center mb-10">
            <ShoppingCart className="w-20 h-20 text-primary mb-6" />
            <h2 className="text-3xl font-western mb-4 text-primary">
              Visit Our Tebex Store
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Browse our selection of cosmetic items, custom vehicles, and exclusive perks. 
              Your purchases directly support server development and help us provide the best 
              Wild West roleplay experience possible.
            </p>
            
            <Button
              size="lg"
              className="western-gradient text-lg font-body font-bold px-12 py-6 hover:scale-105 transition-transform"
              onClick={handleStoreClick}
            >
              Open Store
            </Button>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card border-2 border-border hover:border-primary transition-all">
            <Sparkles className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-western mb-4 text-primary">Cosmetic Items</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Customize your character with unique clothing, accessories, and weapon skins 
              that set you apart in the Wild West.
            </p>
          </Card>

          <Card className="p-8 bg-card border-2 border-border hover:border-primary transition-all">
            <Gift className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-western mb-4 text-primary">Exclusive Perks</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Access special features, custom jobs, and priority queue placement to enhance 
              your roleplay experience.
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-card border-2 border-primary">
          <h2 className="text-3xl font-western mb-4 text-primary text-center">
            Important Information
          </h2>
          <ul className="space-y-3 font-body text-lg text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-3 text-2xl">•</span>
              <span>All purchases are final - please review items carefully before buying</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-2xl">•</span>
              <span>Store items are cosmetic and don't provide gameplay advantages</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-2xl">•</span>
              <span>Your purchase supports server hosting and development costs</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-2xl">•</span>
              <span>Items are delivered automatically to your in-game character</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-2xl">•</span>
              <span>For support issues, contact us on Discord with your purchase details</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Store;
