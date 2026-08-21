---
sidebar_position: 9
title: Getting paid
description: Set up payouts, and understand the platform fee.
keywords: [famlo platform fee, organization payouts, connect stripe, merchant of record, how much does famlo charge]
---

# Getting paid

Set up payouts once, and every paid booking and every membership payment lands in your own bank account. Only the organization's owner can reach the **Payouts** page, because it is their bank details and their identity Stripe verifies. You need payouts finished before anyone can put a price on a ticket or turn on membership dues.

## The platform fee

Famlo charges a **flat 10%** of what a family pays by card. There are no tiers, no volume ladder, no setup fee and no monthly subscription.

**Scholarship money carries 0%.** When an award covers part of an order, no fee is taken on that part.

The fee comes out of your payout. It is not added to what the family pays, and families are never shown a fee line at checkout. A $50 ticket costs the family exactly $50.00.

### A $50 booking, end to end

| Line | Amount |
| --- | --- |
| What the family pays | $50.00 |
| Famlo platform fee (10%) | -$5.00 |
| Card processing | -$1.75 |
| Your payout | $43.25 |

Card processing is Stripe's own charge, not Famlo's. It is typically 2.9% + $0.30 on a US card, and Stripe publishes the current rates.

If a promo code or an account credit reduces the order, the 10% is charged on the smaller amount. A $50 ticket with a $10 code carries a $4.00 fee, not $5.00.

## Set up payouts

1. Open the account menu and choose **Manage organizations**.
2. Pick the organization you are setting up.
3. Open **More**, then **Payouts**.
4. Select **Connect with Stripe**.
5. Complete Stripe's onboarding — identity details, business details if you have them, and the bank account you want paid.
6. Return to Famlo when Stripe sends you back.

Stripe asks whether you are an individual or a business, and which country you are in. Those questions belong to Stripe's onboarding, not to Famlo, and you answer them there.

## Check where you stand

The **Payouts** page shows one status line and two indicators.

| Status | What it means |
| --- | --- |
| Not connected | You have not started. Select **Connect with Stripe**. |
| Onboarding incomplete | Stripe still needs something. Select **Continue Stripe onboarding**. |
| Pending verification | Stripe is reviewing your details. Nothing is required from you. |
| Active | You can accept paid bookings and bill dues. |

Below that, **Charges** and **Payouts** each read Enabled or Pending. Both need to read Enabled before money moves.

While Stripe is reviewing, the page offers **Check again** rather than an onboarding button, because there is nothing left for you to fill in. Once you are Active, the button becomes **Update payout details**, which reopens Stripe so you can change your bank account or your business information.

:::note Payout timing is Stripe's
How often Stripe deposits to your bank, and how long a first payout is held, are Stripe's settings. Change them in your own Stripe Dashboard.
:::

## Who the family pays

Your organization is the merchant of record. Your name appears on the family's card statement, you own the customer relationship, and you handle your own disputes. Famlo takes its 10% off the top of the transfer and passes the rest to your connected account.

That is also why refunds, disputes and payout schedules are settled against your Stripe account rather than a Famlo balance.

## Refunds come from policy, not a button

There is no "issue refund" action anywhere in Famlo. Refund amounts follow the policy, based on who cancelled and when.

- A family cancelling **24 hours or more** before the activity starts gets a full refund, and the platform fee is returned to you.
- A family cancelling **inside 24 hours** gets nothing back, and the fee is not returned.
- If you cancel the activity with **Cancel activity**, every registered family is made whole and the platform fee is returned to you.
- An activity can be marked **No Refunds**, which overrides the 24-hour rule.

Scholarship money never passes through Stripe, so it is never part of a card refund. You and the family settle that directly and you record the outcome in Famlo.

Full detail is in [Cancellations and refunds](/docs/how-to/cancel-refund) and, from the family's side, [Payments and refunds](/docs/families/payments-and-refunds).

## Limits worth knowing

- You cannot put a price on a ticket until payouts are Active. Try it and the price field refuses to save.
- You cannot turn on membership dues until payouts are Active either. See [Membership dues](/docs/organizations/membership-dues).
- There is no way to disconnect Stripe from inside Famlo. Access is granted and revoked from your own Stripe Dashboard.
- Free activities need no payout setup at all.

## Troubleshooting

**I finished Stripe onboarding but the page still says Onboarding incomplete.**
Stripe has more to ask. Select **Continue Stripe onboarding** to reopen the form at the outstanding fields. If it says Pending verification instead, Stripe is reviewing and the page updates on its own.

**Nothing happens when I select Connect with Stripe.**
Allow pop-ups and redirects for Stripe, then try again. If the button is greyed out rather than unresponsive, [contact support](/docs/account/support).

**I can't set a ticket price.**
Payouts are not Active. Finish onboarding first, then set the price.

**A red banner says Famlo can no longer reach my Stripe account.**
Someone removed Famlo from the Connected applications list in your Stripe Dashboard. Paid bookings, dues and refunds all stop until it is restored, and that has to be re-authorised from your side. Select **Contact support** on the Payouts page and we will get you reconnected.

**My payout is smaller than I expected.**
Subtract 10% for the platform fee, then Stripe's processing charge. Promo codes, account credit and scholarship awards all reduce the amount charged to the card, and your payout follows the smaller number.

## What's next

- [Tickets and pricing](/docs/organizations/tickets-and-pricing) — price an activity against the 10%.
- [Membership dues](/docs/organizations/membership-dues) — charge recurring dues.
- [Scholarships](/docs/organizations/scholarships) — accept award money at zero fee.
