# Feedback Loop

Use this folder for a Codex <-> Claude working loop.

## Purpose

Keep iterative review notes, handoff context, and open issues out of the main product docs.

## Conventions

- `feedback/codex-to-claude-YYYY-MM-DD.md`
  - what Codex reviewed
  - findings
  - recommended edits
  - open questions

- `feedback/claude-to-codex-YYYY-MM-DD.md`
  - what Claude changed
  - what still needs review
  - disagreements or tradeoffs
  - follow-up requests

- `feedback/shared-issues.md`
  - durable backlog of unresolved issues worth carrying across sessions

## Rules

- Keep notes short and specific.
- Reference files with exact paths.
- Separate findings from suggestions.
- Mark anything factual that still needs verification.
- Do not treat feedback notes as source-of-truth product docs.

## Suggested Format

```md
# Codex to Claude

Date: YYYY-MM-DD
Scope:

## Findings
- [severity] issue with path and short explanation

## Suggestions
- concrete change to make

## Open Questions
- question that blocks confidence
```
