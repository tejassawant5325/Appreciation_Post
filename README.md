# A little corner, just for you

A static, mobile-first digital love letter and scrapbook. It uses plain HTML, CSS, and JavaScript, so it runs anywhere and deploys directly to GitHub Pages.

## Project structure

```
index.html          Page structure
css/style.css       Layout, color system, animation, responsive rules
js/script.js        Personal content configuration and interactions
assets/images/      Add your photos here
assets/music/       Add `our-song.mp3` here
```

## Run locally

Open `index.html` in a modern browser, or serve this directory with a static server such as VS Code Live Server.

## Personalize the page

Open [`js/script.js`](js/script.js) and edit only the clearly marked `CONFIG` object at the top.

- Set `herName` and `myName`.
- Edit the four `gifts` messages.
- Replace each `memories` placeholder. Add your photo to `assets/images/`, then set its `image` value to a relative path such as `assets/images/our-first-date.jpg`.
- Fill `thingsToRemember` with real moments; the supplied blanks deliberately do not invent them for you.
- Update `humanMoment` and the `letter` in your own voice.
- Add your song at `assets/music/our-song.mp3`. Playback is always opt-in; the button hides gracefully if that file is not available.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Choose **Deploy from a branch**, then select `main` and `/ (root)`.
4. Save and wait for GitHub to publish the site.

There is no build process and no dependency installation.
