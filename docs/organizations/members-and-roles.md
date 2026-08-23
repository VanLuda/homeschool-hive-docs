---
sidebar_position: 5
title: Members, roles, and messaging
description: Approve members, assign roles, and reach the people in your organization.
keywords: [organization roles, co-leader, event manager, member manager, billing manager, approve join requests, bulk invite, announcements, message access]
---

# Members, roles, and messaging

Everything about the people in your organization sits in three places in the console: **Members** is the roster, **Requests** is the queue of families waiting to be let in, and **Invite members** is where you add a lot of people at once.

To get there, open the account menu, choose **Manage organizations**, select your organization, and pick the section you want. Sections you are not permitted to open are not shown to you at all.

## Approving people who ask to join

If your join policy is **They request to join and you review each one**, families land in **Requests**. The section carries a badge with the number waiting.

1. Open **Requests**.
2. Select **Review** on a row to read the whole request, or **Approve** to accept it straight from the list.
3. On the review page you see their **Screening answers** and whether they accepted your join rules.
4. Under **Decision**, select **Approve request**.

To turn someone down, use **Deny request** on the review page — not from the list, because denying asks for a reason. Choose one of **Incomplete answers**, **Does not meet criteria**, **At capacity**, **Duplicate** or **Other**, and add a note if it helps.

If your organization charges dues, approving is the moment the card is charged. The confirmation names the applicant and warns that their card will be charged. See [Membership dues](/docs/organizations/membership-dues).

Owners, co-leaders and member managers can work this queue.

## The six roles

There are six roles, and each carries a fixed set of permissions. You cannot build a new role or edit the permissions on an existing one — **custom roles do not exist**.

The roster describes them under **What each role can do**:

| Role | How the roster describes it |
| --- | --- |
| **Owner** | "Full control — settings, roles, events, members, and billing." |
| **Co-Leader** | "Leadership: edit the group, run events, and approve members." |
| **Event Manager** | "Create and run events, manage RSVPs and the waitlist." |
| **Member Manager** | "Review and approve members joining the group." |
| **Billing Manager** | "Manage payments, billing, and view payouts." |
| **Member** | "Standard member — can view the group." |

### What each role can actually open

| Console section | Who can open it |
| --- | --- |
| **Dashboard** | Every role except **Member** |
| **Activities** | Owner, Co-Leader, Event Manager |
| **Local insights** | Owner, Co-Leader, Event Manager |
| **Members** | Owner, Co-Leader |
| **Requests** | Owner, Co-Leader, Member Manager |
| **Billing** | Owner, Billing Manager |
| **Settings** | Owner, Co-Leader |
| **Quick replies** | Owner, Co-Leader |
| **Promo codes** | Owner, Co-Leader |
| **Scholarships** | Owner, Co-Leader |
| **Payouts** | Owner only |
| **Invite members** | Owner only |

Four consequences are worth stating outright, because they surprise people:

- **Payouts is owner-only.** A **Billing Manager** can watch subscriptions and revenue under **Billing**, but cannot open **Payouts** or touch the payout connection.
- **A Co-Leader cannot change roles or invite anyone.** They also cannot open **Payouts** or **Billing**. Editing the listing, running activities and approving members is the extent of it.
- **A Member Manager is not an administrator.** Approving people who ask to join is the only thing the role can do — it cannot edit the listing, schedule anything, or see money.
- **Recording a dues payment taken off Famlo needs both tiers at once.** The control lives on the roster, which needs owner or co-leader, and the panel itself needs owner or billing manager. In practice that means the owner.

## Changing someone's role

Only the owner sees these controls. Everyone else is told so at the foot of the roster: "Only the organization owner can add members or change roles."

1. Open **Members**.
2. Find the person and select **Edit** on their row.
3. Choose a new **Role**. The hint under the box changes to describe the role you are about to give them.
4. Select **Save**.

The roster is 25 people to a page, and a search box appears above the list once you pass 20 members.

## Message access

**Message access** is a separate grant from role, on the same editor, with three levels:

- **No conversations**
- **Assigned activities only** — threads on activities this person is assigned to
- **All conversations** — every thread belonging to the organization

There is also an option beginning **Match their role**, which names the level their role already implies. Choosing it clears any override and hands them back to their role. That is not the same as **No conversations**.

This separation exists for one specific case. A teacher who holds the plain **Member** role can be given **Assigned activities only** so they can answer questions about their own classes, without being promoted to **Event Manager** and handed activity editing and bookings along with it.

:::warning "All conversations" is a wide grant
It opens every family's private messages with your organization, including anything they wrote about a child. Give it deliberately. Role and message-access changes are both recorded under **Recent changes** at the foot of the roster, with who made them and when.
:::

## Making someone else an owner

There is no transfer-ownership flow, no danger-zone step for it, and nothing to type to confirm. You promote someone by changing their role.

1. Open **Members**.
2. Select **Edit** on their row.
3. Set **Role** to **Owner**.
4. Select **Save**.

Two things follow. You are **not** demoted — an organization can have several owners at once, and both of you keep full control. And the last owner is protected: changing their role is refused with "You can't change the last owner's role — promote another owner first."

There is one real limit. **Payouts** and the **Danger zone** stay with the person who created or claimed the listing, and giving somebody the **Owner** role does not move them. If you need those in someone else's hands, [contact support](/docs/account/support).

## Adding one person

1. Open **Members**.
2. Select **Add member**.
3. Enter their **Email address** and pick a **Role**.
4. Select **Add member**.

Someone with a Famlo account joins immediately. Someone without one is emailed an invitation and joins the moment they sign up: "No Famlo account yet? We'll email them an invitation and add them the moment they sign up."

If your organization charges dues, the form also asks how this person is treated. **They pay for their own membership** means they are asked for payment before booking members-only activities. **No charge — comp them** covers staff, volunteers, scholarship families, or anyone who already paid you directly. The choice only applies to the **Member** role, because staff are never asked for dues.

## Inviting a lot of people at once

Open **Invite members** in the console, or select **Adding lots of people?** from the add-member form. This section is owner-only.

1. Under **Paste emails**, put one email per line — or paste a CSV with an `email` column and an optional `role` column.
2. Or use **…or upload a file** to choose a `.csv`.
3. Select **Send invitations**.

The CSV takes **two columns and no others**: `email` and `role`. There is no name column, no fee-exemption column and no expiry column. Anything without a role becomes a **Member**.

**Up to 500 rows per upload.** Go over and only the first 500 are read, and you are told: "Only the first 500 were read — split larger lists into separate uploads."

**Last import** then reports four numbers: **Added**, **Invited**, **Already there** and **Invalid**. Below that, every still-open invitation is listed with the role it grants and when it was sent. Each has **Resend** and **Revoke**.

## Removing someone

1. Open **Members**.
2. Select **Edit** on their row.
3. Select **Remove from group** and confirm.

The confirmation spells out the consequence: "They lose access to this group's activities and conversations." The last owner cannot be removed.

There is no block list and no way to bar someone from asking again. There are also no checkboxes on the roster — you act on one person at a time.

## How a leader is described publicly

Members holding a staff role appear on the **Staff** tab of your public page. Select **Add bio** on their row — or **Bio** if they already have one — to write the sentence or two shown beside their name. Up to 400 characters, and leaving it empty removes it. Owners and co-leaders can edit these.

## Recording dues paid outside Famlo

When a family pays you directly, record it so Famlo stops asking them for money they have already handed over. The **Billing** link only appears on a row when your organization charges dues.

1. Open **Members** and select **Billing** on their row.
2. Fill in **Amount paid**, **How they paid** and **Date received**.
3. Set **Membership paid up until** — the date their access runs to. Leave it blank if they should never be asked, which covers a founding family, a volunteer or a scholarship place.
4. Add a **Note (optional)** for your own records. The member never sees it.
5. Select **Record payment**.

This records that a payment already happened somewhere else. It does not move money. If the person is already paying by card through Famlo, the form refuses rather than double-billing them, and tells you to cancel that subscription first.

Past entries appear underneath as **Recorded off-platform**. Separately, the family ledger on your console dashboard has an export that produces a CSV of exactly what is on screen; it is available to whoever can open billing.

## Announcements

An announcement is a one-way message from your organization to the people connected to one activity. They get it in their inbox and by email, unless they have turned those emails off.

:::note There is no organization-wide broadcast
Every announcement belongs to a single activity. There is no organization-wide announcement, no newsletter, no feed, and no way to write once to your entire membership. If you need everyone to hear something, you send it from each activity it concerns.
:::

Owners, co-leaders and event managers can send them. There are two composers, and they are the same system.

### From the activity page

1. Open **Activities** and select the activity.
2. Scroll to **Announcements**.
3. Write a **Subject (optional)** and a **Message**.
4. Select the send button and confirm. It names your own count, as in **Send to 12 registrants**.

This composer goes to everyone registered.

### From your inbox

1. Open **Messages** and select the activity you manage.
2. Under **Announce to everyone**, write your message.
3. Choose the audience: **Everyone registered** or **Registered + interested**.
4. Select **Announce**.

**Registered + interested** widens it to people who saved the activity or have already written to you about it — the right choice for "three spots left", and the wrong one for a message meant only for families who are coming.

### What announcements cannot do

- You cannot edit one after sending. Post a correction instead.
- You cannot delete one.
- You cannot schedule one for later. It sends when you select the button.
- You do not receive your own announcement.

Past announcements for an activity are listed underneath the composer on the activity page, newest first, with who wrote each one and when.

## Troubleshooting

**I can't see Add member or Edit on the roster.** Those are owner-only. The foot of the page says "Only the organization owner can add members or change roles."

**I'm a billing manager and Payouts is missing.** That is expected. **Payouts** is owner-only, even though your role can see billing.

**I made a co-leader an owner and Payouts is still only mine.** Also expected. The **Owner** role gives full control of members, settings and activities, but payouts and the danger zone stay with whoever created or claimed the listing.

**I can't change my own role.** You are probably the only owner. Give someone else the **Owner** role first, then change yours.

**Someone I invited never turned up on the roster.** They have not signed up yet. Open **Invite members** and look for them under the pending invitations, then select **Resend**.

**I want to message my whole organization at once.** There is no control for that. Send an announcement from each activity the message concerns.

**A teacher can't see families' questions about their own class.** Open **Members**, select **Edit** on their row, and set **Message access** to **Assigned activities only**. They also need to be assigned to that activity.

**There's no search box on my roster.** It appears once you have more than 20 members.

## Related guides

- [Organization settings](/docs/organizations/settings)
- [Scheduling activities](/docs/organizations/activities)
- [Membership dues](/docs/organizations/membership-dues)
- [Getting paid](/docs/organizations/getting-paid)
- [Closing your listing](/docs/organizations/closing-your-listing)
