import { useEffect, useState } from "react";
import { Users, Server, Activity } from "lucide-react";
import { Card } from "./ui/card";
import { serverConfig } from "@/config/serverConfig";

interface DiscordStats {
  presence_count: number;
  name: string;
}

interface GameServerStats {
  players: number;
  maxPlayers: number;
  hostname: string;
}

const ServerStats = () => {
  const [discordStats, setDiscordStats] = useState<DiscordStats | null>(null);
  const [gameStats, setGameStats] = useState<GameServerStats | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchDiscordStats = async () => {
    if (!serverConfig.discord.enabled) return;
    
    try {
      const response = await fetch(
        `https://discord.com/api/guilds/${serverConfig.discord.guildId}/widget.json`
      );
      if (response.ok) {
        const data = await response.json();
        setDiscordStats(data);
      }
    } catch (error) {
      console.error("Failed to fetch Discord stats:", error);
    }
  };

  const fetchGameServerStats = async () => {
    if (!serverConfig.gameServer.enabled) return;

    try {
      // Using CFX.re API for FiveM/RedM servers
      const response = await fetch(
        `https://servers-frontend.fivem.net/api/servers/single/${serverConfig.gameServer.cfxCode}`
      );
      if (response.ok) {
        const data = await response.json();
        setGameStats({
          players: data.Data?.clients || 0,
          maxPlayers: data.Data?.sv_maxclients || 0,
          hostname: data.Data?.hostname || "Server",
        });
      }
    } catch (error) {
      console.error("Failed to fetch game server stats:", error);
    }
  };

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      await Promise.all([fetchDiscordStats(), fetchGameServerStats()]);
      setLoading(false);
    };

    fetchStats();

    // Auto-refresh stats based on config
    const interval = setInterval(fetchStats, serverConfig.display.refreshInterval);
    return () => clearInterval(interval);
  }, []);

  if (!serverConfig.display.showOnHomePage) return null;
  if (!serverConfig.discord.enabled && !serverConfig.gameServer.enabled) return null;

  return (
    <section className="py-16 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Live Server Status
          </h2>
          <p className="text-muted-foreground font-body">
            Real-time stats from our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Discord Stats */}
          {serverConfig.discord.enabled && (
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold font-heading mb-1">
                    Discord Community
                  </h3>
                  {loading ? (
                    <p className="text-muted-foreground font-body text-sm">Loading...</p>
                  ) : discordStats ? (
                    <div>
                      <p className="text-2xl font-bold text-primary">
                        {discordStats.presence_count}
                      </p>
                      <p className="text-sm text-muted-foreground font-body">
                        Members Online
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground font-body">
                      Stats unavailable
                    </p>
                  )}
                </div>
              </div>
            </Card>
          )}

          {/* Game Server Stats */}
          {serverConfig.gameServer.enabled && (
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Server className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold font-heading mb-1">
                    {serverConfig.gameServer.type === "fivem" ? "FiveM" : "RedM"} Server
                  </h3>
                  {loading ? (
                    <p className="text-muted-foreground font-body text-sm">Loading...</p>
                  ) : gameStats ? (
                    <div>
                      <p className="text-2xl font-bold text-primary">
                        {gameStats.players}/{gameStats.maxPlayers}
                      </p>
                      <p className="text-sm text-muted-foreground font-body">
                        Players Online
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground font-body">
                      Stats unavailable
                    </p>
                  )}
                </div>
              </div>
            </Card>
          )}
        </div>

        <div className="text-center mt-6">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-body">
            <Activity className="h-4 w-4" />
            <span>Stats update every {serverConfig.display.refreshInterval / 1000} seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerStats;
