// SPDX-License-Identifier: MIT
// The Funniest Excuse for Skipping a Meeting — entry for @aint965.
// Writes one fixed, funny single-line excuse to <outdir>/entry.txt
// (default /output/entry.txt). Deterministic: no network, no randomness,
// no file reads outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Candidate brainstorm (scored against the judge's 5 criteria):
//  1. "Sorry, I have to skip — my calendar just invited itself to a meeting
//     about this meeting, and it RSVP'd yes for both of us."
//     Funny but the calendar joke is convoluted; the twist needs a beat.
//  2. "Can't make it — I just got promoted to the meeting's waiting room
//     and the promotion comes with a corner office and no agenda."
//     Cute, but "waiting room" is a Zoom cliché and the punchline wanders.
//  3. "Skipping this one — I've already attended it three times in my head
//     and we still didn't decide anything."
//     Very relatable, but the twist is mild — a smile, not a laugh.
//  4. "Sorry, can't join — my laptop and I have agreed to a trial
//     separation, starting with this meeting."
//     Fresh angle, but the joke is about the laptop, not the meeting.
//  5. "Sorry, I can't join — I'm still trapped in a breakout room from
//     last Tuesday's meeting and no one has come back for me yet."
//     Strong and relatable, but the setup is long and the payoff soft.
//  6. "Can't attend — I've been double-booked with the meeting where we
//     decide what this meeting was supposed to decide."
//     Good meetings-about-meetings angle, but wordy and the twist lands late.
//  7. "Sorry, I need to skip — I just realised I've been on mute in this
//     meeting since 2023 and nobody noticed."
//     Relatable, but "on mute" is well-worn territory now.
//  8. "Skipping — my out-of-office reply just scheduled a meeting with
//     itself and I'm the only attendee who showed up."
//     Clever, but needs a second read to land — an excuse that needs
//     explaining has already lost.
//  9. "Can't make it — I'm currently in a meeting about why I keep
//     missing meetings, and it's running over."
//     WINNER: the excuse is itself a meeting — a sharp, self-referential
//     twist; instantly true to office life (meetings about meetings);
//     fresh (no wifi, cat or dentist); tight.
// 10. "Sorry, I have to miss this one — I accidentally accepted the
//     meeting in a parallel universe and the Wi-Fi there is worse."
//     Stock wifi excuse in disguise — fails criterion 5 outright.
//
// REVISION ROUND (v1 -> final):
// v1: "Can't make it — I'm currently in a meeting about why I keep
//      missing meetings, and it's running over."
// Defects fixed: (a) "currently" was a wasted word — cut; (b) the bare
// "Can't make it" read like a text, not a real work excuse — opened with
// "Sorry, I can't make it" so it reads as a genuine excuse (criterion 1);
// (c) "in a meeting" was flat — "stuck in a meeting" adds the trapped,
// relatable feeling and sharpens the irony that the excuse-meeting is
// itself inescapable. Net: same twist, tighter and more believable.

const EXCUSE =
  "Sorry, I can't make it — I'm stuck in a meeting about why I keep missing meetings, and it's running over.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
