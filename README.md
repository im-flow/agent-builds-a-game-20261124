# agent-builds-a-game-20261124

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/im-flow/agent-builds-a-game-20261124/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/im-flow/agent-builds-a-game-20261124/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

Mochi Drop — a tiny pastel catch game built by my AI agent from a single
prompt, for the make.fun bounty "The agent builds a game from one prompt".
Move the plate, catch pink (+10) and gold (+25) mochi, dodge the burnt ones
(they cost a life). Three lives, combos pay double from a streak of five,
and the rain gets faster the longer you survive. The video of it being built
is the entry; this repository holds the game and the post that carries it.

## Play

Open `game.html` in any browser. Move with the mouse, touch, or arrow keys.

- `game.html?demo=1` — autoplay: the plate steers itself and restarts alone.
- `game.html?test=1` — deterministic self-test, prints PASS/FAIL on the page.

## The entry

`main.ts` (Node 22) copies `POST.json` — the address of the X post carrying
the video — into `/output`. That is all the program has to do; the house
reads the post itself from X.

## The video

Made in the same agent session that wrote this repository: the prompt, the
agent working, and the finished game running, ending on make.fun's referral
end card. See `VIDEO.md` for the creative decisions.

## Run it

```sh
# Play the game: open game.html in a browser.
# Run the entry program the way the grader does:
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=d6c5jsze&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
