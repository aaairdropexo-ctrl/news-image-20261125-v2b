# PREDICTION — news-image-20261125 v2 ("Red Sea on Edge — The World in One Day")

## What changed vs v1
v1 (40 stories, 9 cards) lost the GLM duel to top 1 in both orders
(0.3 vs 0.7) on breadth. v2 matches top 1's structure: 3 heroes +
10 cards + 37 ALSO = 50 stories, 10 regions, 19 fields (all counted
honestly from the 50 items in the brief; region chips and the fields
line print the true counts).

## Where v2 is MORE accurate than top 1 (K4 edges — 3, not 4)
Checked by reading top 1's image directly, not from the brief's notes:
1. Tariffs: "up to 40%" with CHINA 40% · VIETNAM 35% · EU 15% shown
   in bold. Top 1 says "up to 20%".
2. Dhaka wage: 12,500 → 17,000 taka (+36%). Top 1 says 17,500 (wrong).
3. Cairo: 31 killed, 21 injured (Health Ministry). Top 1 says "30+".
CORRECTION to the brief: Kyiv is NOT an edge. The brief said top 1
wrote €15bn, but top 1's ALSO item 19 actually reads "€115bn" — the
same verified figure we print. Both are correct there.

## New big stories v1 missed
Jerusalem (Netanyahu graft charges — judges urge rethink of Case 4000),
Ukraine (strikes kill 5, power out in 5 regions, Zaporizhzhia on diesel),
Gaza (Hamas security chief killed), Dhaka wage (promoted from ALSO).

## Honest gaps
- 50 stories in 1024px is dense: at 300px the masthead, the 5 big stats
  and the hero headlines read, but card bodies and the ALSO list are
  texture — the same as top 1, which wins with the same density.
- Hero scenes are flat SVG drawings, not rich illustration; top 4's
  richer art could still beat us on craft (K5) in a close call.
- The judge is noisy: v1's jury-vs-generic-rival flipped between runs
  (BEATS margin 3, then LOSES margin 2). The duel vs top 1 is the real
  test and has not been run on v2 yet — the lead runs it after this build.
- No claim of #1. v2's case is: same breadth as top 1 (50 stories, 10
  regions), fresher leads (Hodeidah + Ramaphosa vs the saturated tariff/
  Kospi lead), and more accurate numbers on 3 cards. Whether that beats
  top 1 head-to-head is for the duel to decide.

## Verification done by the builder
- Rendered 1024x1024, viewed at full size: no clipped or overlapping text;
  fields line fits in full; all 37 ALSO items visible; DATE CHECK and
  footer fit.
- 300px downscale viewed: masthead, 5 stats and hero headlines legible.
- File: entry.png, 438,024 bytes, 1024x1024, under the 1 MiB cap.
- Grade: main.ts run twice (Node 22), exit 0 both times, byte-identical
  outputs, from a read-only copy, no network. (Details in the build report.)
- Key numbers re-checked against the brief: tariff 40% (China/Vietnam/EU),
  Dhaka 17,000 (not 17,500), Kyiv €115bn (not €15bn), Cairo 31/21,
  Kospi −6.2%, UK +26% to £2,166, mine 9/17, no £1,723, no unverified
  UTC times, Venezuela "announces" (not "signs").
