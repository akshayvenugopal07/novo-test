# Project AI agent rules

This repo ships two AI agent tools, installed **project-locally** (never
globally): **lavish** (rich HTML artifact / plan review) and **gh-axi**
(GitHub CLI for agents). Any agent working here can use both. The repo is
also managed as a firstmate project (crewed, parallel task execution) —
see `../../AGENTS.md` in the firstmate distro root for orchestration rules.

## Lavish (plan / artifact review)

**lavish-axi** is available via `npx -y lavish-axi` (no install required).
The `lavish` skill ships at `.agents/skills/lavish/SKILL.md` (symlinked
into `.claude/skills/`), discovered by Claude Code and other
agent-skills-format harnesses.

Before starting non-trivial work, or when answering with a plan,
comparison, diagram, table, or anything easier to review visually, use the
`lavish` skill: write the HTML artifact, then `npx -y lavish-axi <file.html>`
and `npx -y lavish-axi poll <file.html>` to collect the user's annotations
and queued feedback before proceeding. Upstream docs:
<https://github.com/kunchenguid/lavish-axi>.

## gh-axi (GitHub operations)

**gh-axi** wraps `gh` with agent-optimized, token-efficient output. Use it
for all GitHub tasks (issues, PRs, workflows, releases, labels, etc.)
instead of raw `gh` or ad-hoc API calls. It runs via `npx -y gh-axi` (no
install required); the skill ships at `.agents/skills/gh-axi/SKILL.md`.
Prerequisite: `gh auth login` (already authenticated as akshayvenugopal07).
Upstream docs: <https://github.com/kunchenguid/gh-axi>.

## Delivery

This project is registered with firstmate as `no-mistakes-prod-only`:
changes ship through the `no-mistakes` pipeline (`git push no-mistakes
<branch>`) rather than pushing straight to `origin`. See `no-mistakes
doctor` output and the firstmate `project-management` skill for details.

## Maintaining this file

Keep this file short and only add rules that aren't obvious from reading
the code.
