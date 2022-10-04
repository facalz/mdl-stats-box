<p align='center'>
  <img src="https://raw.githubusercontent.com/facalz/assets/main/facalz-npm/mdl-update-box/image.png">
  <h3 align="center">📺 mdl-update-box</h3>
  <p align="center">Automatic update pinned gist to show your stats in MyDramaList.</p>
</p>

---
> 📌✨ For more pinned-gist projects like this one, check out: <https://github.com/matchai/awesome-pinned-gists>

## 🎒 Prep Work

1. Create a new public GitHub Gist (<https://gist.github.com/>)
2. Create a token with the `gist` scope and copy it. (<https://github.com/settings/tokens/new>)

## 🖥 Project Setup

1. Fork this repo
2. Go to your fork's `Settings` > `Environments` > `New environment` and create an environment called "prod"
3. Choose your "prod" environment and `Add Secret` for each environment secret (below)
4. Enable Actions on your fork via the 'Actions' tab
5. Enable the 'mdl-stats-box' Workflow via the 'Actions' tab
6. Kick off a workflow run of the 'mdl-stats-box' Workflow via Actions > mdl-stats-box > Run workflow

## 🤫 Environment Secrets

- **GIST_ID:** The ID portion from your gist url: https://gist.github.com/facalz/ `c7ecf280a4fc2214a85cef64896e020f`
- **GH_TOKEN:** The GitHub token generated above.
- **USER:** Your user in [MyDramaList](https://mydramalist.com).
- **TITLE:** Title for gist (Optional).