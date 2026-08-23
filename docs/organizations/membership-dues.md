---
sidebar_position: 6
title: Membership dues
description: Charge recurring dues, and handle failed payments.
keywords: [membership dues, recurring dues, billing cadence, failed payment, complimentary membership, record cash payment]
---

# Membership dues

Charge families a recurring amount to belong to your organization. Dues are separate from activity tickets — dues buy membership, tickets buy a seat at one activity.

Two different roles are involved. Turning dues on is a **Settings** change, so owners and co-leaders do it. Watching who is paying happens under **Billing**, which owners and billing managers can open.

## Two things have to be true first

This is where most organizations get stuck, so check both before you go looking for the setting.

1. **Your visibility is Closed or Hidden.** An organization set to Open cannot charge for membership. Save the dues form on an Open listing and it refuses with "must be Closed or Hidden to charge a membership fee".
2. **Your payouts are Active.** Until Stripe onboarding is finished there is nowhere for the money to go. The dues panel shows "Connect your payouts to start collecting dues" with a **Set up payouts** link.

Visibility is on the same **Settings** page, in the **Membership & joining** block above dues. Payouts are covered in [Getting paid](/docs/organizations/getting-paid).

:::warning An open listing cannot bill
Open visibility leaves your member content ungated. Dues cannot be charged on an Open listing at all. Switch to **Closed** if you still want to be listed and found, or **Hidden** if you would rather not appear in the directory.
:::

## Turn dues on

1. Open the account menu and choose **Manage organizations**.
2. Pick your organization, then open **Settings**.
3. Scroll to **Membership dues**.
4. Tick **Enable membership dues**.
5. Enter **Price (USD)**.
6. Choose a **Billing cadence**.
7. Write a **Description (optional)** — what members get for their dues.
8. Select **Save membership settings**.

## The six cadences

| Cadence | What happens |
| --- | --- |
| **Monthly** | Renews every month. |
| **Every 2 months** | Renews every two months. |
| **Quarterly** | Renews every three months. |
| **Every 6 months** | Renews every six months. |
| **Annually** | Renews once a year. |
| **One-time fee** | Charged once, when you approve the member. Never renews. |

You pick one cadence for the whole organization. Families do not choose, and you cannot offer a monthly option alongside an annual one. There are no membership tiers and no free trial.

## What a family sees

On your join request form, a family sees your price and cadence, a **Discount code (optional)** box, and the reassurance "You won't be charged until the organizers approve your request." They send the request with **Send request**, and the first charge happens on approval.

From then on the charge repeats on your cadence, and the family is emailed ahead of a renewal so it is not a surprise. An annual renewal gets around a month's notice; a monthly one gets a few days.

## Watching who is paying

Open **Billing** in your organization's console. The **Subscriptions** page opens on three figures:

- **Monthly revenue** — everything normalised to a month, so an annual membership counts as a twelfth.
- **Paying members** — how many are active.
- **Past due** — how many payments have failed.

Under the figures, each member is listed with their status, their price, their next charge date and how long they have been a member. A complimentary member is marked **(comped)**.

Statuses read Active, Past due, Awaiting payment, Incomplete or Canceled. **Awaiting payment** is not a failure — it means a complimentary window has closed and this member has never paid through Famlo, so there is nothing to charge yet.

## When a payment fails

Failed payments lead the **Subscriptions** page, because they are the only thing on it anyone has to act on. Stripe retries the card on its own while you decide whether to intervene.

A failing membership moves through three stages:

1. **Retry** — the first courtesy reminder. Stripe is still attempting the card.
2. **Action required** — the charge needs the family to do something before it can settle, usually a bank verification step.
3. **Final warning** — retries are nearly exhausted and the membership will lapse.

You have two controls on each failing row:

- **Send a reminder** emails the family and asks them to update their card.
- **Offer a discount…** picks one of your promo codes, and **Offer** sets it aside for them. The family sees "Your group offered you a discount" on their own membership page and applies it with one tap. Useful when the real problem is the price rather than the card.

A discount applied to a membership that is already running holds for every renewal after it, so offer a modest percentage. See [Promo codes](/docs/organizations/promo-codes).

Expand **What we've sent them** to see everything the platform has already emailed that member, so you do not repeat it.

There is no grace period setting. The retry schedule is fixed, and a membership that never recovers cancels itself.

## Dues paid outside Famlo

Cash at a meeting, a cheque, a bank transfer. Record it so the platform stops asking that family to pay again.

This one needs both roster access and billing access, so in practice it is the owner who does it. The **Billing** link only appears on a member's row when your organization actually charges dues.

1. Open **Members**.
2. Find the member and select **Billing** on their row.
3. Enter **Amount paid**.
4. Choose **How they paid** — Cash, Check, Transfer or Other.
5. Set **Date received** to the day it was handed over, not today.
6. Set **Membership paid up until** to the date the payment covers.
7. Add a **Note (optional)** for your own records. The member never sees it.
8. Select **Record payment**.

Recording a payment does not move any money. It writes down that a payment already happened somewhere else, and sets the window Famlo should stay quiet for. Past entries are listed under **Recorded off-platform** with the amount, method, date and who recorded it.

A week before the covered date runs out, the family is reminded. After it, Famlo asks them to pay.

## Complimentary memberships

Leave **Membership paid up until** blank and that family is never asked to pay again. Use it for a founding family, a volunteer, or a scholarship place. They show as **(comped)** on the **Subscriptions** page.

The form still asks for **Amount paid** and **How they paid**, so enter whatever they actually handed over. It is the blank date, not the amount, that makes the membership complimentary.

## Removing a paying member

1. Open **Billing**, then find the member on the **Subscriptions** list.
2. Expand the row's remove control — it reads **Remove** and the member's first name.
3. Choose **Stops** — **Immediately** or **At period end**.
4. Choose **Refund** — **No refund**, **Prorate** or **Full refund**.
5. Select **Remove** and confirm.

Those three choices are the whole refund control for dues. There is no box to type an amount into.

## Changing the price

Edit **Price (USD)** and select **Save membership settings**. There is no chooser for how the change applies — no "new members only", no "everyone at renewal". Because of that, tell existing members before you change what they pay. Thirty days' notice is the usual courtesy, and some states require notice ahead of an annual renewal.

## Troubleshooting

**I can't find the membership dues section.**
It sits near the bottom of **Settings**, below **Membership & joining**. If you cannot open Settings at all, you are neither the owner nor a co-leader. See [Members, roles, and messaging](/docs/organizations/members-and-roles).

**I'm a billing manager and there is no Billing link on a member's row.**
Recording an off-platform payment also needs access to the members roster, which is an owner and co-leader thing. Ask the owner to record it.

**Saving dues gives me a visibility error.**
Your organization is Open. Change visibility to Closed or Hidden in **Membership & joining**, save that, then set your dues.

**The dues form shows a payouts warning.**
Stripe onboarding is not finished. Follow **Set up payouts** and come back.

**A member paid me in cash but Famlo keeps emailing them.**
Record the payment on their **Billing** panel and set **Membership paid up until** past the date they have covered.

**Recording a payment is refused because the member pays by card.**
They have a live card subscription. Recording a second payment would leave them charged twice. Remove the card subscription first, then record the cash.

**A member says they were charged twice.**
Check whether they hold both a card subscription and a recorded off-platform payment for the same window. Remove the subscription with **Refund** set to **Prorate** or **Full refund**.

**I want to offer a free trial.**
There is no trial setting, and no way to record a $0 payment. Use a promo code on the join step instead, or let a family attend a public activity before they apply.

## What's next

- [Promo codes](/docs/organizations/promo-codes) — discount dues at the join step.
- [Members, roles, and messaging](/docs/organizations/members-and-roles) — approve members and set who can bill.
- [Getting paid](/docs/organizations/getting-paid) — payouts and the platform fee.
