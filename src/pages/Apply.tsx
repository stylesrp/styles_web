import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, CheckCircle2 } from "lucide-react";

const Apply = () => {
  const handleApply = () => {
    window.open("https://forms.gle/placeholder", "_blank");
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-western text-center mb-8 text-primary">
          Join Our Community
        </h1>
        
        <p className="text-xl text-center text-accent mb-16 font-body font-medium">
          Start your Wild West adventure today
        </p>

        <Card className="p-8 md:p-12 bg-card border-2 border-border mb-12">
          <div className="flex flex-col items-center text-center mb-8">
            <FileText className="w-20 h-20 text-primary mb-6" />
            <h2 className="text-3xl font-western mb-4 text-primary">
              Application Process
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We review all applications carefully to ensure the best roleplay experience 
              for our community. The process typically takes 24-48 hours.
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-western text-xl text-primary mb-2">Step 1: Read the Rules</h3>
                <p className="font-body text-muted-foreground">
                  Make sure you've read and understood all server rules before applying.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-western text-xl text-primary mb-2">Step 2: Fill Out the Application</h3>
                <p className="font-body text-muted-foreground">
                  Complete the application form with honest and detailed information about yourself 
                  and your roleplay experience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-western text-xl text-primary mb-2">Step 3: Join Discord</h3>
                <p className="font-body text-muted-foreground">
                  Make sure you're in our Discord server so we can contact you about your application.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-western text-xl text-primary mb-2">Step 4: Wait for Review</h3>
                <p className="font-body text-muted-foreground">
                  Our staff will review your application and contact you via Discord with the results.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="western-gradient text-lg font-body font-bold px-10 py-6 hover:scale-105 transition-transform"
              onClick={handleApply}
            >
              Submit Application
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-lg font-body font-bold px-10 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all"
              onClick={() => window.open("https://discord.gg/placeholder", "_blank")}
            >
              Join Discord First
            </Button>
          </div>
        </Card>

        <Card className="p-8 bg-card border-2 border-border">
          <h2 className="text-3xl font-western mb-4 text-primary text-center">
            Application Tips
          </h2>
          <ul className="space-y-3 font-body text-lg text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-3 text-2xl">•</span>
              <span>Be honest about your roleplay experience level</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-2xl">•</span>
              <span>Take time to write thoughtful, detailed responses</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-2xl">•</span>
              <span>Show your understanding of the Wild West setting</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-2xl">•</span>
              <span>Check your spelling and grammar before submitting</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-2xl">•</span>
              <span>Be patient - quality applications take time to review</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Apply;
