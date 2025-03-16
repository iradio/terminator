# Terminator - Appointment Booking Monitor

A service that monitors official appointment booking websites for available slots and notifies users via Telegram. It can also automatically book appointments for premium users.

## Features

- 🔍 **Website Monitoring**: Automatically checks government portals for new appointments
- 📱 **Telegram Integration**: Instant notifications about available slots
- 🤖 **Auto-booking**: Optional automatic appointment booking for premium users
- 🔒 **Secure**: Encrypted data storage and secure payment processing
- 📊 **Analytics**: Track appointment availability patterns
- 🌐 **Multi-portal Support**: Monitor multiple booking websites simultaneously

## Tech Stack

- **Backend**: Node.js + Express.js
- **Database**: PostgreSQL
- **Caching**: Redis
- **Scraping**: Puppeteer/Cheerio
- **Messaging**: Telegram Bot API
- **Payments**: Stripe
- **Containerization**: Docker

## Prerequisites

- Docker and Docker Compose
- Node.js 18 or higher (for local development)
- Telegram Bot Token
- Stripe API Keys

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/terminator.git
   cd terminator
   ```

2. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

3. Fill in the required environment variables in `.env`:
   - `TELEGRAM_BOT_TOKEN`
   - `STRIPE_SECRET_KEY`
   - `JWT_SECRET`

4. Start the services using Docker Compose:
   ```bash
   docker-compose up -d
   ```

The application will be available at `http://localhost:3000`.

## Configuration

Configuration files are located in the `config/` directory:

- `default.yaml`: Main application configuration
- `logging.yaml`: Logging settings

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Run tests:
   ```bash
   npm test
   ```

## Docker Services

- **app**: Main application service
- **db**: PostgreSQL database
- **redis**: Redis for caching and rate limiting

## Project Structure

```
terminator/
├── config/             # Configuration files
├── src/
│   ├── api/           # API routes
│   ├── bot/           # Telegram bot implementation
│   ├── scrapers/      # Website scraping modules
│   ├── services/      # Business logic
│   ├── models/        # Database models
│   └── utils/         # Utility functions
├── tests/             # Test files
└── docker-compose.yaml
```

## API Documentation

API documentation will be available at `/api/docs` after starting the server.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.