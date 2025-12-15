# Changelog Template

Use this template when creating new changelog entries for Homeschool Hive.

---

## Template Structure

```markdown
---
slug: [version-slug]
title: [Version] - [Optional Feature Title]
authors: [homeschoolhive]
tags: [changelog, relevant-tags]
date: [YYYY-MM-DD]
---

[1-3 sentence overview summarizing the release and its primary value to users. Lead with the most important change or theme.]

<!-- truncate -->

---

## What's New

### [Feature Name]
[User-focused description of the feature. What problem does it solve? How do users benefit? Basic usage overview.]

### [Feature Name 2]
[Additional new features as needed...]

---

## Improvements

- [Clear description of improvement and user benefit]
- [Another improvement with user-facing impact]
- [Quantify when possible: "Events now load 50% faster"]

---

## Bug Fixes

- Fixed issue where [user-visible symptom]
- Resolved problem with [what users experienced]

---

## Release Details

**Release Date**: [Month Day, Year]
**Version**: [X.X.X or X.X.X-beta.X]
**Platform**: Web Application
```

---

## Template Rules

### 1. Always Start with Overview + Truncate Tag
The overview paragraph appears in blog listing previews. Keep it concise (1-3 sentences) and lead with the most impactful change.

```markdown
This release introduces scholarship payment support, allowing group leaders to generate professional invoices for families using scholarship programs.

<!-- truncate -->
```

### 2. No Emojis
Keep a professional tone. Do not use emojis in headers, content, or anywhere in the file.

**Correct:**
```markdown
## What's New
## Improvements
## Bug Fixes
```

**Incorrect:**
```markdown
### What's New
### Improvements
### Bug Fixes
```

### 3. User-Focused Language
Describe features and fixes from the user's perspective. Focus on benefits and visible changes, not implementation details.

**Correct:**
```markdown
- Group pages now work with both direct links and readable URLs for easier sharing
- Improved page layout consistency with better header spacing
- Events now load 50% faster
```

**Incorrect:**
```markdown
- Group Components endpoint to handle both UUIDs and slugs
- Added `useHeaderHeight()` hook to compute total height (64px base + 40px)
- Optimized database queries with better indexing
```

### 4. Security-Conscious Content
Never expose sensitive technical details in public-facing changelogs.

**Never include:**
- Vulnerability types (XSS, SQL injection, CSRF, RCE, DoS, SSRF)
- File paths or directory structures
- API endpoints or URL patterns
- Database table/column names
- Authentication implementation details
- Error messages or stack traces
- Framework/library version numbers (e.g., "Next.js 15.3.6 to 15.4.10")
- Infrastructure architecture details (route groups, CDN paths, caching layers)
- Internal documentation or configuration references
- Number of files changed or specific file counts
- Code snippets showing fixes

**Safe security language:**
```markdown
- Improved account security
- Enhanced data protection
- Strengthened access controls
- Updated core framework with security patches
- Fixed a security issue affecting [feature]
```

**Infrastructure change examples:**
```markdown
# Bad - exposes architecture
Fixed URL encoding issue with Next.js route group folder names, updating 35 files

# Good - user-focused
Fixed an issue where some pages were temporarily unavailable
```

### 5. Consistent Section Order
Always use this order (omit empty sections):

1. **What's New** - Major new features
2. **Improvements** - Enhancements to existing features
3. **Bug Fixes** - Resolved issues
4. **Release Details** - Version metadata

### 6. Optional Sections
Only include sections that have content. Skip empty sections entirely rather than including them with no items.

### 7. Hotfix Releases
When documenting hotfixes or patch releases:

- **Combine related hotfixes** into one changelog entry when they fix issues from the same release
- **Focus on user impact**, not root cause analysis
- **Omit internal-only changes** (documentation updates, refactoring) from public changelogs
- **Never explain the technical cause** of issues (architecture, caching, routing details)

```markdown
# Bad - exposes internals
Fixed CloudFront 503 errors caused by URL encoding incompatibility with
Next.js route group folder names. Restructured routes, updating 35 files.

# Good - user-focused
Fixed an issue where some pages were temporarily unavailable after a
recent update.
```

### 8. Tags
Always include `changelog` plus relevant feature tags:
- `groups` - Group management features
- `events` - Event features
- `payments` - Payment/billing features
- `invoices` - Invoice features
- `scholarship` - Scholarship-related features
- `notifications` - Notification features
- `calendar` - Calendar features
- `profile` - User profile features
- `security` - Security improvements (use sparingly)
- `performance` - Performance improvements
- `mobile` - Mobile-specific changes

---

## Example: Full Changelog Entry

```markdown
---
slug: 1-2-0-event-templates
title: 1.2.0 - Event Templates
authors: [homeschoolhive]
tags: [changelog, events, groups]
date: 2025-12-15
---

This release introduces event templates, allowing group leaders to save and reuse event configurations for recurring activities. We've also improved calendar performance and fixed several issues with event registration.

<!-- truncate -->

---

## What's New

### Event Templates
Group leaders can now save any event as a template for quick reuse. Create a template from an existing event, then use it to spin up new events with pre-filled details like ticket types, capacity limits, and descriptions. Perfect for recurring field trips, classes, or meetups.

### Template Library
Access all your saved templates from the new Templates tab in your group dashboard. Organize templates by category, preview details before using, and share templates with co-leaders.

---

## Improvements

- Calendar now loads 60% faster with optimized data fetching
- Event cards display more information at a glance
- Better mobile layout for event details page
- Clearer error messages when registration fails

---

## Bug Fixes

- Fixed issue where some events were not appearing in calendar view
- Resolved problem with ticket quantity not updating after purchase
- Fixed display of event times in different time zones

---

## Release Details

**Release Date**: December 15, 2025
**Version**: 1.2.0
**Platform**: Web Application
```

---

## Slug Format

Use lowercase with hyphens. Include version number and optionally a feature keyword:

- `1-0-0-beta-5` (version only)
- `1-1-0-scholarship-payments` (version + feature)
- `1-2-0-event-templates` (version + feature)

---

## Title Format

Include version number. Optionally add a feature title for major releases:

- `1.0.0-beta.5` (version only)
- `1.1.0 - Scholarship Payments` (version + feature title)
- `1.2.0 - Event Templates` (version + feature title)
