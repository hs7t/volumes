# Volumes

Volumes is a daily word game inspired by the "examples" sections of dictionaries. This repository
holds the front-end code for it. You can play Volumes at [my website](https://volumes.hvii.cc/),
or check out the source here! (It's really bad. I'm sorry).

## Running Volumes yourself

Volumes comes in two independent parts: the Volumes website (this repo) and the Volume Network 
([volnet](https://github.com/hs7t/volnet/)). The Volume Network exposes puzzles through a public
API.

This section focuses on the website. To run it yourself, please follow these steps:

### Clone the repo and install dependencies

As you heard it!

```bash
git clone https://github.com/hs7t/volumes.git
cd volumes
npm install
```

### Set up an API

If you wish to use a different instance of volnet (or your own better implementation), set an 
API URL at `public/config.json`. By default, it's set to my own, something like this:

```json
{
    "volnet_api_url": "https://volnet.hs7t.hackclub.app"
}
```

### Run it!

Volumes is written using Svelte and Vite. To run it, do:

```bash
npm run dev
```

Or try:

```bash
npm run build
```

...to get a built version at `/dist` - you can deploy it anywhere!