# Tools on this machine

The owner keeps tools in `D:\DevTools` and links them into `C:\Users\mehmo\.claude\skills` with junctions. Install new skills the same way, not on C:.

## SEO toolkit
- Skill files are in `D:\DevTools\claude-seo\skills\*`, linked as `~/.claude/skills/seo`, `seo-audit` and the rest.
- Run a script with `"$HOME/.claude/skills/seo/scripts/claude-seo" run <script>.py`.
- The venv Python is `$HOME/.claude/skills/seo/.venv/Scripts/python.exe`.
- Set `PLAYWRIGHT_BROWSERS_PATH="$HOME/.claude/skills/seo/ms-playwright"`.
- Its SSRF guard blocks localhost.

## Hallmark design skill
- Files are in `D:\DevTools\hallmark`, from github.com/nutlope/hallmark at commit 407fa68 (see `.source`), linked as `~/.claude/skills/hallmark`.
- It was installed by downloading the files directly, because `npx skills add` and `git clone` both failed on this network. `npx skills update` won't update it; re-download instead.
- The screenshot (render) step needs `puppeteer-core`, installed in `D:\DevTools\hallmark-deps`.
- Run the linter:
  ```
  HALLMARK_PUPPETEER=/d/DevTools/hallmark-deps CHROME_PATH="C:/Program Files/Google/Chrome/Application/chrome.exe" \
    node /d/DevTools/hallmark/scripts/sloplint.mjs src --genre editorial --render --url <route> ...
  ```
- Point `--url` at the prerendered build: run `npm run build`, then serve `dist/` with a static server that maps `/route` to `route.html`. A plain SPA dev server is not the same as production.

## Performance checks
- The keyless PageSpeed Insights API often hits its daily quota, so run Lighthouse locally instead:
  ```
  CHROME_PATH="C:/Program Files/Google/Chrome/Application/chrome.exe" \
    npx -y lighthouse@12.6.1 <url> --quiet --chrome-flags="--headless=new" --only-categories=performance --output=json --output-path=<file>
  ```
- Run each page three times and compare medians. TBT varies a lot between runs on this machine.
- Don't measure Netlify deploy previews. They inject a review-toolbar iframe from app.netlify.com (about 300 KB), and `--blocked-url-patterns` doesn't reach inside it.
- To compare against `main`, build it in a temporary `git worktree` and serve both `dist/` folders locally. If you link `node_modules` into the worktree with a junction, delete the junction on its own (`[System.IO.Directory]::Delete(path, $false)` in PowerShell) before `git worktree remove`, so the real `node_modules` is never touched.

## Other
- Python in Git Bash sometimes fails to start in this repo ("No module named 'encodings'"). Use the Edit tool or Node for file edits instead.
- The npm cache and npx downloads are in `D:\DevTools\npm-cache` (packages under `_npx/<hash>/`).
- The network to GitHub and Netlify is flaky, with connection resets. Wrap `git push`/`pull`, `gh` and `curl` in retry loops.
