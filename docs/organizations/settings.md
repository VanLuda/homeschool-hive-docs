---
sidebar_position: 2
title: Organization settings
description: Your public page, joining rules, dues, and closing your listing.
keywords: [organization settings, visibility, join policy, screening questions, short link, organization handle]
---

# Organization settings

Settings is where you change everything about your listing after it is published: how it reads, who can see it, how people join, whether you charge dues, and — at the very bottom — how to close it.

It is **one scrolling page**, not a set of tabs. Everything below is on it, in the order you meet it. Owners and co-leaders can open it.

## Opening settings

1. Open the account menu and choose **Manage organizations**.
2. Select your organization.
3. Choose **Settings** in the console.

The page is headed **Edit organization**.

## Your public details

The form at the top of the page carries the things a family reads first.

| Field | What it does |
| --- | --- |
| **Organization name** | The name on your listing and in the directory. |
| **Short link** | Your vanity address, shown with a fixed `famlo.co/@` prefix. Optional. |
| **Type** | Which of the eighteen organization types you are. This is part of your public address. |
| **Tagline** | One line under your name. |
| **Description** | The longer text on your page. |
| **City** and **State** | Where you are, for families filtering by area. |
| **Time zone** | The default zone for activities you schedule. Leave blank for the platform default. |
| **Website** | Your own site, if you have one. |
| **Contact email** | Where families reach you. |
| **Published (visible in the directory)** | Untick to take the listing out of the directory without deleting anything. |

Select **Save changes** when you are done.

### Your short link

**Short link** claims an address like `famlo.co/@riverbend`, which is easier to text or print than the full one. It takes lowercase letters, numbers, hyphens and underscores, between 3 and 30 characters, and it has to start and end with a letter or number.

Your type-based address keeps working either way, so a co-op called Riverbend stays reachable at `famlo.co/co-op/riverbend`.

## Logo and photos

Below the form, the **Logo** row shows your current mark. Select **Upload** to add one, **Change** to replace it, or **Remove** to clear it. JPG or PNG, up to 10 MB. Without one, families see your initial on a coloured circle.

Under that, **Photos** opens a page of its own. The first photo is your cover — it is what people see on your listing and everywhere it appears in the directory. You can hold up to 15, they are resized automatically, and **Save photos** commits the change.

## Membership and joining

The **Membership & joining** block controls "who can find and join your group, and what they agree to first". It holds four things, and one **Save membership & joining** button at the bottom saves all of them.

### Visibility

Visibility answers whether you are listed, and whether member content is gated.

| Option | On screen |
| --- | --- |
| **Open** | "Listed publicly. Anyone can see everything." |
| **Closed** | "Listed publicly, but events and the member roster are for members only." |
| **Private** | "Hidden from search and directories — reachable only by a direct link you share." |

You can change visibility whenever you like. Nothing here is a one-way door.

### How do people join?

Join policy is a separate question from visibility, and it answers the mechanism.

- **Anyone can join instantly**
- **They request to join and you review each one**
- **Invite only (they join from a link you send)**

Because the two are separate controls, you can combine them. A listed co-op that still screens every applicant is **Open** visibility with **They request to join and you review each one**.

:::note Gated listings always review requests
The hint under the control says it: "Closed and Private groups always review requests — instant join applies to Open groups only." If you set **Closed** or **Private** and also pick instant join, the review requirement wins, because member content is gated and instant join would walk straight past the gate.
:::

### Join rules

**Join rules (optional)** is a free-text box for the expectations every member agrees to — a code of conduct, commitments, whatever you need. Tick **Require members to accept these rules before joining** to make agreement a condition of joining.

### Screening questions

Three slots, labelled **Question 1**, **Question 2** and **Question 3**. Three is the maximum, and every question is free text — there are no multiple-choice or checkbox questions.

Each has a **Required** checkbox. Leave a question blank to drop it.

Applicants answer these when they request to join, so they only do anything when approval is required. You read the answers on the **Requests** page — see [Members, roles, and messaging](/docs/organizations/members-and-roles).

## Membership dues

The **Membership dues** block turns on a recurring subscription for belonging to your organization, separate from anything you charge for a single activity.

| Control | What it does |
| --- | --- |
| **Enable membership dues** | Turns dues on. |
| **Price (USD)** | The amount, in dollars. |
| **Billing cadence** | One of **Monthly**, **Every 2 months**, **Quarterly**, **Every 6 months**, **Annually**, or **One-time fee**. |
| **Description (optional)** | What members get for their dues. |

Select **Save membership settings**.

:::warning Two conditions before you can charge
Both have to be true, or the save is refused.

1. **Your visibility is Closed or Private.** An Open listing has nothing gated behind membership, so it cannot bill. Saving anyway returns "Visibility must be Closed or Hidden to charge a membership fee".
2. **Your payouts are set up.** Until then the block shows "Connect your payouts to start collecting dues" with a **Set up payouts** link, and enabling dues is refused with a message telling you what is still outstanding.
:::

Visibility is in the **Membership & joining** block directly above, so both fixes are on this one page. Payouts are covered in [Getting paid](/docs/organizations/getting-paid), and the full picture of running dues is in [Membership dues](/docs/organizations/membership-dues). What families pay for, and what they never pay for, is in [What's free and what's paid](/docs/families/whats-free-and-whats-paid).

## Danger zone

The last block on the page, visible to the owner only. **Schedule deletion** puts the listing into a 30-day grace period; **Cancel scheduled deletion** takes it back out.

The whole process — what happens the moment you schedule it, who is told, and what happens on the date — is in [Closing your listing](/docs/organizations/closing-your-listing).

## What is not here

Several things people look for on a settings page live elsewhere, or do not exist:

- **Promo codes**, **Scholarships** and **Payouts** are their own console sections, not settings blocks.
- **Roles** are set on the **Members** page, one person at a time. There are six fixed roles and no way to build a custom one.
- There is no notification panel for your organization. Each family controls what they receive from their own [notification settings](/docs/account/notifications).
- There is no content-moderation queue and no reusable term templates. The one place you set expectations is **Join rules**, above.

## Troubleshooting

**I can't find the Settings link.** Only owners and co-leaders can open settings. If your role is event manager, member manager, billing manager or member, the section is not offered to you.

**Saving dues says my visibility must be Closed or Hidden.** Scroll up to **Membership & joining**, choose **Closed** or **Private**, save that block, then come back to dues. "Hidden" in the error message is the same option the radio calls **Private**.

**My short link is refused.** It may already be taken, reserved, or contain a character that is not allowed. Stick to lowercase letters, numbers, hyphens and underscores, and start and end with a letter or number.

**My listing does not appear in the directory.** Check **Published (visible in the directory)** in the form at the top. A listing set to **Private** visibility is excluded from every listing by design, and one with a scheduled deletion is hidden immediately.

**I changed a screening question and applicants still see the old one.** The **Membership & joining** block has its own button. Select **Save membership & joining**, not **Save changes** at the top.
