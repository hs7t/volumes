# Volumes

Volumes is a daily word game inspired by the example sections of dictionaries. This repository
holds the front-end code for it. You can play Volumes at [my website](https://volumes.hvii.cc/),
or check out the source here! (It's really bad. I'm sorry). This is my first ever "real" web project.

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

This repo also contains a workflow for GitHub Pages, if that helps.

## Credits

- [Vite](https://vite.dev/) (and its docs!!)
- [Svelte](https://svelte.dev/) (Svelte I love you and your tutorial is awesome)
- [spaCy](https://spacy.io/) (on the back-end part, for guess processing)
- [MDN](https://developer.mozilla.org/en-US/)
- A few [Stack Overflow](https://stackoverflow.com/) posts I can't link to because I lost them

### A note on LLMs

Certain LLMs (Claude Sonnet 4, GPT-4o/5, Gemini on Google AI Overviews) were lightly 
(often accidentally) used throughout the making of this project, primarily for research
purposes (I got REALLY frustrated once and Claude helped me find a bug, but that's it!). 
All code in this repository was written by me or kind snippet-sharers on the internet 
(yes this is slop, but it's human slop!!)