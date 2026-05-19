# Prototype Playground

A simple HTML playground for building and hosting design prototypes.

## What this is

A lightweight scaffold for keeping HTML prototypes organized in one place. Each prototype lives in its own folder, and the root `index.html` acts as an index linking out to them.

Designed to pair well with:
- **Claude / Claude Code** for generating HTML/CSS
- **Windsurf** (or any code editor) for local editing
- **GitHub** for version control
- **Any static host** (GitHub Pages, Netlify, Vercel, internal Pages services, etc.) for sharing live URLs

## Workflow

1. **Build a prototype** — generate HTML/CSS in Claude (or paste from a tool like Stitch)
2. **Save it** — drop the file(s) into `/prototypes/your-prototype-name/`
3. **Link it** — add a list item in `index.html` pointing to the new prototype
4. **Push** — commit and push to your Git remote
5. **View** — your host will serve the updated URL

## Repo structure

```
.
├── index.html          # Landing page (your index of prototypes)
├── prototypes/         # Each prototype gets its own folder
│   └── (empty for now)
└── README.md
```

## Adding a new prototype

1. Create a new folder: `prototypes/my-prototype/`
2. Add an `index.html` inside it
3. Open the root `index.html` and add a new `<li>` linking to it:
   ```html
   <li>
     <a href="./prototypes/my-prototype/">My prototype</a>
     <div class="prototype-meta">Added [date]</div>
   </li>
   ```
4. Delete the empty-state div once you have at least one prototype

## Local preview

Open `index.html` directly in your browser, or run a quick local server from your terminal:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Git workflow

```
git add .
git commit -m "Add new prototype"
git push
```

Whichever static host you've connected will rebuild automatically.
