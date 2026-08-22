---
sidebar_position: 7
title: Promo codes
description: Create codes that work on bookings and on dues.
keywords: [promo code, discount code, early bird, percent off, minimum order, redemption limit]
---

# Promo codes

A promo code is a word a family types at checkout for a discount. Every code you create belongs to your whole organization and works on both paid activities and membership dues. Owners and co-leaders can manage them.

## One code, both kinds of purchase

There is no split between activity codes and membership codes. `SPRING25` discounts a field trip booking and a membership join request, and every redemption of it — whichever it was — counts against the same ledger.

That matters most for **One redemption per family**. A family who spends the code on a booking cannot then spend it on their dues.

## Create a code

1. Open the account menu and choose **Manage organizations**.
2. Pick your organization.
3. Open **More**, then **Promo codes**.
4. Select **New code**.
5. Fill in the form and select **Create promo code**.

## The nine fields

| Field | What it does |
| --- | --- |
| **Code** | What the family types. Letters, numbers, dashes and underscores, 3 to 50 characters. Stored in capitals and matched case-insensitively, so a family can type it any way. Must be unique within your organization. |
| **Type** | **Percent off** or **Fixed amount off**. |
| **Percent off** | 1 to 100. Shown when Type is Percent off. |
| **Amount off** | A dollar figure. Shown when Type is Fixed amount off. Never takes an order below $0. |
| **Minimum order (optional)** | The code only applies when the subtotal is at least this much. |
| **Starts (optional)** | Before this moment the code is Scheduled and will not apply. Leave blank to start now. |
| **Expires (optional)** | After this moment the code is Expired. Leave blank for no end. |
| **Max total redemptions (optional)** | A cap across everybody. Leave blank for no cap. |
| **One redemption per family** | Each family may use the code once, on a booking or on dues, not both. |
| **Active — families can apply this code right now** | The on switch. Untick to pause a code without deleting it. |

**Percent off** and **Amount off** are the same field wearing two labels — the form swaps one for the other when you change **Type**, so you only ever fill in one.

There is nothing else on the form. No membership duration, no member-only restriction, no way to limit a code to particular activities, and no per-family redemption count above one.

## The five statuses

Every code carries one status, worked out from its own settings.

| Status | Why |
| --- | --- |
| **Active** | Working now. |
| **Scheduled** | **Starts** is in the future. It will begin on its own. |
| **Expired** | **Expires** has passed. Edit the date to bring it back. |
| **Limit reached** | **Max total redemptions** has been hit. |
| **Inactive** | **Active** is unticked. |

## Reading the list

The **Promo codes** page lists each code with its value, how many times it has been used against its cap, its date window, its status, and any **Minimum order** or **One per family** restriction. Each row offers **Edit** and **Delete**.

Deleting is permanent, and families holding the code stop getting the discount straight away. Untick **Active** instead when you only want to pause a promotion — the code keeps its redemption history and you can switch it back on.

## The three places a family uses a code

**At activity checkout**, there is a **Promo code** box. The family types the code, selects **Apply**, and the order summary shows a **Discount** line with the code name and the amount taken off.

**On a membership join request**, the field is labelled **Discount code (optional)**. Nothing is charged until you approve the request, and the discount comes off that first charge.

**On a membership they already hold**, a family opens their own membership and uses **Have a discount code?** followed by **Apply code**.

That last one behaves differently, and it is worth knowing: a code applied to a membership that is already running discounts **every renewal from then on**, not just the next one. A code used on a join request discounts the first charge only.

## Offering a code to a member who is failing

When a membership payment fails, the **Subscriptions** page under **Billing** puts your codes to work. Pick one from **Offer a discount…** on that member's row and select **Offer**.

The family then sees "Your group offered you a discount" on their own membership page, with a one-tap **Apply** button for that code. Because it lands on a running membership, it holds for every renewal — so offer a small percentage rather than a large one. See [Membership dues](/docs/organizations/membership-dues).

## How a code changes what you are paid

The platform fee follows what the family actually pays by card, so a discount shrinks the fee alongside it. You absorb the discount itself. [Getting paid](/docs/organizations/getting-paid) covers what comes out of a payment.

Existing bookings are never revalued. Changing or deleting a code leaves families who already used it exactly where they were.

## Worked examples

**Early bird on a summer camp**

Codes cannot be limited to one activity, so lean on the date window instead. Set **Expires** to two weeks before the camp starts, tick **One redemption per family**, and announce it only to the families you want to reach.

**First fifty families**

Set **Max total redemptions** to 50 and leave the dates blank. The code flips itself to Limit reached on the fiftieth use.

**A welcome offer on dues**

Create a percent code and share it wherever families find your join page. Used on a join request, it comes off the first charge and nothing after. There is no setting that makes a join-request discount run for a fixed number of months.

**A code that goes live on Monday**

Set **Starts** to Monday morning. The code sits at Scheduled until then, so you can publish it in advance without anybody using it early.

## Troubleshooting

**A family says the code does not work.**
The message they see tells you which check failed:

- "This promo code is no longer active." — **Active** is unticked.
- "This promo code isn't available yet." — **Starts** is still in the future.
- "This promo code has expired." — past **Expires**.
- "This promo code has reached its redemption limit." — **Max total redemptions** is used up.
- "This code requires a minimum order of…" — the order is under **Minimum order**.
- "You've already used this promo code." — **One redemption per family** is on and they have used it, on a booking or on dues.

**I can't create a code with the name I want.**
Codes have to be unique within your organization, and can only contain letters, numbers, dashes and underscores. Check whether an old inactive code is already holding the name.

**I want a code for one class only.**
There is no per-activity restriction. Use the date window and share the code only where that class is advertised.

**I want a discount that lasts a member's first three months.**
There is no duration setting. A join-request code discounts the first charge; a code applied to a running membership holds for every renewal. There is nothing in between.

**I want to see who redeemed a code.**
The list row shows the running total against the cap. There is no per-redemption history page.

**I can't open Promo codes.**
Only the owner and co-leaders can. See [Members, roles, and messaging](/docs/organizations/members-and-roles).

## What's next

- [Tickets and pricing](/docs/organizations/tickets-and-pricing) — set the prices the codes discount.
- [Membership dues](/docs/organizations/membership-dues) — the other place codes apply.
- [Getting paid](/docs/organizations/getting-paid) — payouts and the platform fee.
