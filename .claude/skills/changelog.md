---
name: changelog
description: Write a changelog entry for a Homeschool Hive release. ALWAYS use the changelog agent.
user-invocable: true
---

# Changelog Skill

Write public-facing release notes by analyzing git history from the homeschool-hive repository.

## Usage

- `/changelog` - Generate changelog for the latest release (auto-detects from git tags)
- `/changelog 1.5.0` - Generate changelog for a specific version
- `/changelog 1.4.9...1.5.0` - Generate changelog comparing two versions

## Instructions

**ALWAYS spawn the changelog agent in the background.** Do not attempt to write changelogs directly.

```
Use the Task tool with:
- subagent_type="changelog"
- run_in_background=true

Pass any version argument provided by the user in the prompt.
```

The agent runs in the background so you can continue working. Use TaskOutput to check on progress.

The changelog agent will:
1. Read git history from `/Users/carlvanderlaan/Sites/homeschool-hive`
2. Apply security rules (no vulnerability details, no implementation specifics)
3. Write user-focused, sanitized content
4. Save the MDX file to `/Users/carlvanderlaan/Sites/homeschool-hive-docs/blog/YYYY-MM-DD.mdx`

Never write changelog content without using the changelog agent.
