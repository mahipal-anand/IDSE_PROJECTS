# THE LAST DATASET · DataQuest Learning Adventure

A seven-chapter, browser-based IDSE learning adventure. Each concept now follows a story-led sequence: research story → theory → interactive visual experiment → understanding check → continued exploration. Python recovery remains an in-world terminal interaction.

🎮 Play The Last Dataset

Explore data science through an interactive, story-driven RPG learning adventure!

https://mahipal-anand.github.io/IDSE_PROJECTS/last-dataset%207/

Internet is required for the Pyodide runtime and scientific packages to load on first use.

## Learning sequence
Each chapter contains four concept sequences. Every sequence includes:
1. A story transmission that explains why the concept matters to the research team.
2. An undergraduate-friendly theory explanation and practical context.
3. An interactive visual demonstration with adjustable inputs.
4. An understanding check shown only after the explanation and experiment.
5. Immediate feedback, hints, and a return to the game world.

The learning console is a contextual side drawer, not a full-screen completion popup. The environment remains visible behind it. There is no forced chapter-completion recap modal. After all four concepts are understood, the player walks to the physical archive terminal and presses E to access Python.

## Chapters
| Chapter | Topics |
|---|---|
| 01 · The Forgotten Terminal | Python foundations, types, conditions, slicing, sorting |
| 02 · The Dimension Chamber | NumPy arrays, shape, indexing, broadcasting |
| 03 · The Corrupted Archives | Pandas, missing values, duplicates, groupby and aggregation |
| 04 · The Probability Experiment | Bernoulli, Binomial, Poisson, variance |
| 05 · The Signal Observatory | Bar charts, histograms, scatter plots, subplots |
| 06 · The Prediction Arena | Regression, classification, kNN, test sets |
| 07 · The Clustering Core | Unsupervised learning, assignment, centroids, choosing K |

## Controls
- WASD / arrow keys: move
- E: interact with a nearby object
- Click the floor: walk to a location
- Esc: close the learning console

Progress is saved in browser local storage. Internet is required for Pyodide and scientific packages.

## Verification
Run `node tests/smoke-test.js`. The checks cover chapter count, learning sequence structure, terminal gating, Pyodide integration, persistence, responsive styling, and reduced-motion support. A full browser playthrough is still recommended before public submission.
