# Faisal Suleiman Yero - Employability Portfolio

A responsive static portfolio for Faisal Suleiman Yero, Computer Science student at the University of Dundee.

## Preview locally

From the repository folder, run:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

This repository deploys the site from the root directory of `main` using GitHub Actions.
For a free GitHub account, make the repository public, then open **Settings → Pages**
and set the build and deployment source to **GitHub Actions**. Push to `main` to start
the first deployment; later pushes deploy automatically.

## Add your work

- Add project pages to `projects/` and update the matching `data-project` value in `index.html`.
- Daymark Task Manager links to the [task-manager repository](https://github.com/faisalsyero/task-manager).
- Project Two links directly to the Messaging App GitHub repository. The launch button opens `https://github.com/jamesfinnon/messaging-app.git` in a new tab.
- Project Three links directly to the Blackjack AI GitHub repository. The launch button opens `https://github.com/struanmckenzie/blackjack-ai.git` in a new tab.
- The Pokemon AI Team Optimiser links to the [pokemon-bestteam repository](https://github.com/faisalsyero/pokemon-bestteam) and is marked in progress.
- Replace project text, technology tags, role descriptions, and challenge descriptions in `index.html`.

## Add your CV

The CV download and view buttons use `Employability CV.pdf` in the repository root.
Replace that file to update the CV shown on the portfolio.

## Add professional profiles

LinkedIn and GitHub profile links are configured in `index.html`.
