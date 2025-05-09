# Dumpster Vermin 🦝

A Telegram Mini-App game where players care for their very own dumpster
raccoon pet, powered by $VERMIN.

## 📝 Description

Dumpster Vermin is a Tamagotchi-inspired game where players care for a raccoon
pet living in a dumpster.The game integrates with Solana blockchain using
Honeycomb Protocol, allowing players to interact with their pets using the
$VERMIN memecoin.

### Key Features

- **Wallet Integration**: Connect your Solana wallet seamlessly within Telegram
- **NFT Hatching**: Mint an NFT to hatch your raccoon pet
- **Pet Interaction**: Feed your raccoon with $VERMIN to coax it out of the dumpster
- **Daily Rewards**: Spin a roulette wheel twice daily to win $VERMIN and other
  meme tokens
- **Holding Incentives**: Your $VERMIN holdings act as a multiplier for rewards
  (up to a cap)

## 🚀 Tech Stack

- **Frontend**: React.js
- **Build Tool**: Vite
- **Blockchain**: Solana (via Honeycomb Protocol)
- **Database**: Turso
- **Deployment**: Vercel
- **Environment**: Telegram Mini-App

## 🛠️ Prerequisites

- Node.js (v16+)
- npm or yarn
- Telegram account
- Solana wallet (Phantom, Solflare, etc.)

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dumpster-vermin.git
cd dumpster-vermin
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Set up environment variables:

Create a `.env` file in the root directory with the following variables:

```env
VITE_TELEGRAM_BOT_TOKEN=your_telegram_bot_token
VITE_HONEYCOMB_API_KEY=your_honeycomb_api_key
VITE_TURSO_CONNECTION_URL=your_turso_connection_url
VITE_TURSO_AUTH_TOKEN=your_turso_auth_token
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## 📱 Telegram Bot Setup

1. Create a new bot via [@BotFather](https://t.me/BotFather) on Telegram.
2. Set up your bot with BotFather and configure the mini-app:
   - Use `/newbot` to create a new bot
   - Use `/mybots` to select your bot
   - Go to "Bot Settings" > "Menu Button" to add your mini-app URL

## 🔗 Honeycomb Protocol Integration

The application uses Honeycomb Protocol to interact with the Solana blockchain:

1. Set up a Honeycomb account at [honeycomb.protocol](https://honeycomb.protocol)
2. Create a new project and obtain API keys
3. Configure NFT minting parameters in the dashboard
4. Configure $VERMIN token integration

## 💾 Turso Database Setup

1. Create a Turso account at [turso.tech](https://turso.tech)
2. Create a new database
3. Get connection URL and authentication token
4. Run the migrations provided in the `migrations` folder:

```bash
npm run migrate
# or
yarn migrate
```

## 📊 Database Schema

The application uses the following core tables:

- `users`: Stores user information and wallet connections
- `pets`: Stores pet information, including NFT details and status
- `feedings`: Records of pet feeding events
- `spins`: Records of roulette spins and rewards

## 🎮 Game Mechanics

### Pet Lifecycle

1. **Connection**: User connects their wallet and authorizes the app
2. **Hatching**: User mints an NFT to hatch their raccoon pet
3. **Maintenance**: User must feed their pet regularly with $VERMIN

### Roulette System

- Players can spin twice per day
- Rewards include $VERMIN and other meme tokens
- Holding more $VERMIN increases potential rewards (capped at a maximum value)
- The multiplier formula: `min(userBalance * multiplierFactor, maxMultiplier)`

## 🚢 Deployment

The app is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in the Vercel dashboard
3. Deploy with the following settings:
   - Framework: Vite
   - Build Command: `npm run build` or `yarn build`
   - Output Directory: `dist`

## 🧪 Testing

Run tests with:

```bash
npm run test
# or
yarn test
```

## 📈 Future Roadmap

- Social features: compare and interact with friends' pets
- Customization: dumpster decorations and pet accessories as NFTs
- Breeding: combine pets to create new unique raccoons
- Leaderboards: competition for best-kept pets
- Additional mini-games to earn more $VERMIN

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

If you have any questions or feedback, please reach out through:

- Telegram: [@YourTelegramUsername]
- Twitter: [@YourTwitterHandle]
- Discord: [Your Discord Server]

## 🙏 Acknowledgements

- Telegram Mini Apps Platform
- Honeycomb Protocol
- Solana Foundation
- $VERMIN community
