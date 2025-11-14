// Server Configuration
// Edit these values to match your server details

export const serverConfig = {
  // Discord Configuration
  discord: {
    enabled: true, // Set to false to disable Discord stats
    guildId: "YOUR_DISCORD_SERVER_ID", // Replace with your Discord server ID
    inviteLink: "https://discord.gg/placeholder", // Your Discord invite link
  },

  // FiveM/RedM Server Configuration
  gameServer: {
    enabled: true, // Set to false to disable game server stats
    type: "fivem", // Options: "fivem" or "redm"
    cfxCode: "placeholder", // Your server's CFX join code (e.g., "abc123")
    // Alternative: Use IP:Port instead
    // ip: "123.456.789.0",
    // port: "30120",
  },

  // Server Display Settings
  display: {
    showOnHomePage: true, // Show stats on home page
    refreshInterval: 30000, // Refresh stats every 30 seconds (30000ms)
  }
};
