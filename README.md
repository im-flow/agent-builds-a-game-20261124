# Mochi Drop — a tiny browser game built from one prompt

A pastel catch game: move the plate, catch pink (+10) and gold (+25) mochi,
dodge the burnt ones (they cost a life). Three lives, combos pay double from
a streak of five, and the rain gets faster the longer you survive.

Built by my AI agent from a single prompt, for the make.fun bounty
"The agent builds a game from one prompt". The video of it being built is
the entry; this repository holds the game and the post that carries it.

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
