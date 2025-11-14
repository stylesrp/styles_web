import { Card } from "@/components/ui/card";

const Rules = () => {
  const ruleCategories = [
    {
      title: "General Server Rules",
      rules: [
        "Treat all players and staff with respect at all times",
        "No metagaming - keep in-character and out-of-character information separate",
        "No powergaming - allow other players to respond and participate in RP",
        "Maintain immersion - stay in character while in the server",
        "Follow the New Life Rule (NLR) after respawning",
        "Use appropriate language and behavior for the time period",
      ],
    },
    {
      title: "Roleplay Standards",
      rules: [
        "Quality over quantity - focus on meaningful interactions",
        "Give proper RP before initiating hostile actions",
        "Value your character's life in all situations",
        "Develop a realistic character with proper backstory",
        "Use /me and /do commands to enhance roleplay",
        "Communicate clearly using voice chat when possible",
      ],
    },
    {
      title: "Combat & Conflict",
      rules: [
        "Provide adequate roleplay before engaging in combat",
        "No random deathmatch (RDM) - all violence must be justified",
        "No vehicle deathmatch (VDM) - vehicles are not weapons",
        "Surrender is always an option - don't force shootouts",
        "Respect fear RP when outnumbered or outgunned",
        "Follow proper robbery etiquette and limits",
      ],
    },
    {
      title: "Character & Jobs",
      rules: [
        "Each player may have multiple characters with different roles",
        "Don't abuse job mechanics or grind without RP",
        "Law enforcement must follow proper procedures",
        "Criminals must face consequences for their actions",
        "Business owners should actively roleplay their establishments",
        "Respect faction hierarchies and leadership decisions",
      ],
    },
    {
      title: "Technical & OOC",
      rules: [
        "Report bugs and exploits immediately to staff",
        "Don't use exploits or cheats under any circumstances",
        "Keep OOC chat for genuine questions and server issues",
        "Use proper channels on Discord for appeals and reports",
        "Follow streaming and content creation guidelines",
        "Staff decisions are final - appeal through proper channels if needed",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-western text-center mb-8 text-primary">
          Server Rules
        </h1>
        
        <p className="text-xl text-center text-accent mb-12 font-body font-medium">
          Following these rules ensures a fun and fair experience for everyone
        </p>

        <Card className="p-8 bg-card border-2 border-primary mb-8">
          <p className="font-body text-lg text-foreground leading-relaxed text-center">
            <strong className="text-primary">Important:</strong> Ignorance of the rules is not an excuse. 
            All players are expected to read and understand these rules before joining the server. 
            Rule violations may result in warnings, temporary bans, or permanent removal from the community.
          </p>
        </Card>

        <div className="space-y-8">
          {ruleCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-2 border-border hover:border-primary transition-all"
            >
              <h2 className="text-3xl font-western mb-6 text-primary">
                {category.title}
              </h2>
              <ul className="space-y-4">
                {category.rules.map((rule, ruleIndex) => (
                  <li key={ruleIndex} className="flex items-start font-body text-lg">
                    <span className="text-primary mr-4 text-2xl font-bold">
                      {ruleIndex + 1}.
                    </span>
                    <span className="text-muted-foreground leading-relaxed">
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-card border-2 border-primary mt-12">
          <h2 className="text-3xl font-western mb-4 text-primary text-center">
            Questions About Rules?
          </h2>
          <p className="font-body text-lg text-muted-foreground text-center leading-relaxed">
            If you're unsure about any rule or need clarification, please ask a staff member 
            in our Discord server. We're here to help ensure everyone has a great time!
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Rules;
