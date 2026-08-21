---
sidebar_position: 4
title: Tickets and pricing
description: Ticket types, scopes, add-ons, and what to charge.
keywords: [activity ticket price, per family ticket, series pass, add-ons, what to charge homeschool class]
---

# Tickets and pricing

Every paid activity is priced through tickets. A ticket carries a name, a price, an optional capacity and a few options, and a family picks one when they register. This guide is for anyone who can edit activities.

Before you can save a price above $0, payouts have to be Active. Set that up first in [Getting paid](/docs/organizations/getting-paid).

## Open the ticket editor

1. Open the account menu and choose **Manage organizations**.
2. Pick your organization, then open **Activities**.
3. Choose the activity and open it for editing.
4. Expand the **Tickets & Pricing** section.

## Free or paid

The section opens with the question **How would you like to handle admission?** and two buttons.

- **Free** sets every ticket to $0. Families register without paying.
- **Paid** reveals the ticket editor.

You can switch back. Choosing **Free** on an activity that already has priced tickets sets those prices to $0.

## What is on a ticket

Each ticket row shows three fields, and folds the rest behind **Options**.

| Field | What it does |
| --- | --- |
| **Ticket Name** | What the family picks. "General Admission", "Sibling", "Second child". |
| **Price ($)** | The amount charged. $0 makes this ticket free. |
| **Capacity** | How many of this ticket exist. Leave it blank for **Unlimited**. |
| **Scope** | Whether the ticket covers one person, one family, or one group. |
| **Type** | **Standard**, **Series pass** or **Intro session**. |
| **Eligible for scholarship** | Flags this ticket for scholarship families. See [Scholarships](/docs/organizations/scholarships). |
| **Description** | What is included. Shown to the family under the ticket name. |

There are no minimum or maximum purchase limits, and no per-ticket member pricing. Use **Add Ticket** for another row, **Drag to reorder** to move one, and **Remove ticket** to delete one.

### Scope

**Scope** decides what one ticket buys.

- **Per person** — one seat. Two children means two tickets.
- **Per family** — the whole family on one ticket. Use this when your price is per household rather than per head.
- **Per group** — one ticket covering a party, for a venue or an attraction that charges by the booking.

### Type

:::warning A series pass does not hold a seat at every session
**Series pass** and **Intro session** are labels on a ticket. They change what the family reads, and nothing else. A repeating activity creates a separate occurrence for each date, and a family registers for each occurrence on its own. Selling a "12-week pass" does not book those twelve dates. If you need a family in the room every week, say so in the **Description** and check the roster for each date.
:::

Use **Standard** unless you have a reason not to.

## Add-ons and extras

Below the tickets sits **Add-ons & Extras** — optional items a family can buy alongside their ticket. Lunch, materials, a T-shirt.

1. Select **Add Extra**.
2. Fill in **Add-on Name** and **Price ($)**.
3. Set **Capacity** if you only have so many, or leave it blank.
4. Expand **Options** to add a **Description**.

An add-on has no scope and no type. There is no choice between charging it once per order and once per attendee — an add-on is simply an item the family can add.

## Capacity

You set **Capacity** on each ticket row, and that ticket stops selling once it is reached. Leave it blank and the ticket is uncapped. Your activity list shows registrations against capacity so you can see how full a date is at a glance.

When a paid activity fills, it closes rather than queuing anyone. Families save it, and the button they see reads **Join the waitlist**. Nobody holds a position in that waitlist and nobody is next in line. When a place frees up, everyone watching is told at the same moment and the first to register takes it.

## Pricing against the 10% fee

Famlo takes a flat 10% of what the family pays by card, out of your payout rather than on top of the ticket price. Stripe's processing charge comes out too. Price with both in mind.

| List price | Platform fee | Card processing | You keep |
| --- | --- | --- | --- |
| $10.00 | $1.00 | $0.59 | $8.41 |
| $25.00 | $2.50 | $1.03 | $21.47 |
| $50.00 | $5.00 | $1.75 | $43.25 |
| $100.00 | $10.00 | $3.20 | $86.80 |

Card processing above assumes Stripe's typical US rate of 2.9% + $0.30. Stripe publishes the current figures.

A few practical rules:

- Working backwards from what you need to clear: divide by 0.9 for the platform fee, then add roughly another 3% for processing. To keep $45, list about $52.
- Charge per session rather than per term where you can. A family who has to find $240 in one go hesitates; $20 a week does not.
- A promo code, an account credit or a scholarship award reduces the card charge, and the 10% follows the smaller number.
- Scholarship money carries no platform fee at all.

## Changing a price after you publish

Edit the ticket, change **Price ($)**, and save. Existing bookings are untouched — a family who already paid keeps what they paid. The new price applies to whoever registers next.

If you are raising a price on a running series, tell your families before you save it.

## Refunds

You cannot issue a refund by hand. There is no refund button on a booking, no partial refund, and no way to type an amount. Refund outcomes follow the policy.

- A family cancelling **24 hours or more** before start gets a full refund.
- A family cancelling **inside 24 hours** gets nothing back.
- Turn on **No Refunds** in the activity's **Settings** section to override that and refund nothing at any point. The help text reads "Disable refunds (otherwise allowed up to 24 hours before)".
- **Cancel activity** on the activity's console page refunds and notifies everyone registered, then unpublishes it.

Set **No Refunds** before you take bookings, not after, and put the reason in the activity description.

## Troubleshooting

**The price field won't save.**
Payouts are not finished. A ticket cannot carry a price above $0 until your organization can accept money. See [Getting paid](/docs/organizations/getting-paid).

**A family says they registered for the series but is missing from week three.**
Each date is registered separately, whatever the ticket is called. Check the roster for that date and let the family know they need to register for the ones they want.

**I can't find a purchase limit setting.**
There isn't one. Use **Capacity** on the ticket to cap how many exist in total.

**I can't find where to switch fee display on or off.**
There is nothing to switch. Families are charged exactly the price you list, with no fee line at checkout.

**I want to refund one family but not cancel the activity.**
There is no control for that. The family can cancel their own booking, and the 24-hour rule decides what comes back to them.

## What's next

- [Scheduling activities](/docs/organizations/activities) — set up the activity the tickets hang off.
- [Promo codes](/docs/organizations/promo-codes) — discount a booking at checkout.
- [Getting paid](/docs/organizations/getting-paid) — payouts and the platform fee.
