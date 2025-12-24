---
name: changelog
description: Write a changelog entry for a Homeschool Hive release. ALWAYS use the changelog agent.
user-invocable: true
---

# Changelog Skill

When the user asks to write a changelog, release notes, or anything related to documenting a release:

**ALWAYS spawn the changelog agent.** Do not attempt to write changelogs directly.

```
Use the Task tool with subagent_type="changelog" to handle this request.
```

The changelog agent has the security guidelines and template built in. It will:
1. Read the template from `.claude/templates/changelog.md`
2. Apply all security rules automatically
3. Write user-focused, sanitized content

Never write changelog content without using the changelog agent.
