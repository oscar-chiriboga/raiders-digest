# Running the App Locally

## Development Setup

To run the app locally with the Event Timers feature, you need to run two processes:

### Terminal 1: Start the Expo Web Server
```powershell
npm run web
```

### Terminal 2: Start the API Proxy Server
```powershell
npm run proxy
```

The proxy server runs on `http://localhost:3001` and forwards requests to the MetaForge API to avoid CORS issues during development.

## How It Works

- **Development**: Requests go to `http://localhost:3001/api/event-timers` (proxy server)
- **Production**: Requests go to `/api/event-timers` (Vercel serverless function)

The app automatically detects if you're running on localhost and uses the appropriate endpoint.

## Deployment

When you deploy to Vercel, the serverless function at `/api/event-timers.js` will handle the API requests automatically. No additional configuration needed!

```powershell
# Deploy to production
vercel --prod
```
