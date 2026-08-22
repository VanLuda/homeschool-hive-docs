---
sidebar_position: 14
title: "How Do I Update My Payment Method?"
description: "Step-by-step guide to updating your credit card and managing payment methods on Famlo"
keywords: [update payment, change credit card, payment method, add new card, remove payment method]
---

# How Do I Update My Payment Method?

A card you save on Famlo works at every organization on the platform, so you enter it once. This guide covers adding a card, choosing which one is used by default, replacing one that is about to expire, and moving a membership onto a different card.

## Quick Answer

Open the account menu, select **Account settings**, then select **Payments**. The page is headed **Payment methods**.

Under **Add a card**, enter your details and select **Save card**. Each saved card carries **Make default** and **Remove**. A membership already being billed is re-pointed from **Memberships**, not from this page.

What you save here is a card. Famlo does not store anything else on your behalf.

## Add a card

1. Open the account menu and select **Account settings**.
2. Select **Payments**.
3. Under **Add a card**, enter the card number, expiry date, security code and billing postcode.
4. Select **Save card**.

Your card details go directly to Stripe and are never stored on Famlo's servers.

You can also save a card during checkout instead. Either way it is then available everywhere on Famlo, at every organization you register with.

:::tip
If a card is refused while you are saving it, check the number, the expiry date and the billing postcode against what your bank has on file. A card that has never been used online may need authorising by your bank first.
:::

## Your saved cards

**Your cards** lists everything you have saved, each with its brand, last four digits and expiry date.

Two badges appear on the rows:

- **Default** marks the card offered first at checkout.
- **Expired** marks a card that can no longer be charged.

Two controls sit on each row:

- **Make default** moves the default badge to that card. It appears only on cards that are not already the default and have not expired.
- **Remove** deletes the card, after asking you to confirm.

There is no edit screen for a saved card. Nothing about a card can be changed once it is saved.

### Choose your default card

Famlo does not guess from your last purchase. There is an explicit **Make default** button, and the card holding the **Default** badge is the one offered first at checkout.

Set it deliberately, especially if you keep a household card and a personal one on the same account.

At checkout you can still pick a different one. Your saved cards appear under **Pay with**, and **Use a different card or payment method** takes you to Stripe if you want to pay with something you have not saved.

## Replace a card that is expiring

Add the new one before removing the old one, so nothing is left without a card.

1. Open **Account settings** → **Payments**.
2. Under **Add a card**, save the new card.
3. Select **Make default** on the new card if it should be the one offered first.
4. Move any memberships onto it. See below.
5. Select **Remove** on the expired card.

An **Expired** card cannot be charged and cannot be made the default. It stays listed until you remove it.

## Remove a card

1. Open **Account settings** → **Payments**.
2. Find the card and select **Remove**.
3. Confirm when asked.

:::warning
Famlo will not let you remove a card that is paying for an active membership. The refusal names the organizations the card is on file for, and asks you to change the card there first. Nothing fails silently, and no membership is left without a way to be billed.
:::

## Change the card on a membership

Membership dues have their own card on file, per membership. Changing your default card on the payments page does not move them.

1. Open **Account settings** → **Memberships**.
2. Find the membership under **Paid memberships**. The card on file is shown with its brand and last four digits.
3. Select **Change card**.
4. On **Change payment method**, choose one of your saved cards, or choose **Use a new card** and enter the details.
5. Select **Save card**.

The page tells you what happens next: "The new card takes over your next renewal. You won't be charged now."

Each membership is separate. Changing one does not change the others, so work down the list if you are retiring a card. See [Your memberships](/docs/families/memberships).

## When a membership payment fails

A failed charge shows a **Payment due** badge and an amber panel on the membership row. Famlo tells you what stage it has reached and retries while it can.

You can fix it from that panel without going anywhere else:

- Pick a card from the **Pay with** list and select **Update & retry payment**. That switches the membership to that card and retries the outstanding charge at once.
- Or select **Use a different or new card**, where the button reads **Save card & retry payment**.
- With no cards saved at all, select **Add a card** and save one first.

When it goes through, the page confirms the membership is active again.

## Security

- Card details go straight to Stripe. Famlo's servers never hold your card number.
- The organization you register with is the merchant of record, so their name is what appears on your statement.
- Organizations never see your card number or your security code.

## Troubleshooting

**My card was refused when I saved it.** Check the number, expiry date, security code and billing postcode. If they are right, ask your bank, which may be blocking an unfamiliar online charge.

**I cannot remove a card.** It is paying for an active membership. Change the card on that membership under **Memberships**, then come back and remove it.

**A card shows Expired.** It cannot be charged and cannot be made the default. Save the replacement, move any memberships onto it, then remove the expired one.

**The wrong card is offered at checkout.** Select **Make default** on the one you want. You can also just pick a different card from the **Pay with** list at the time.

**I changed my default card and my membership still used the old one.** Memberships hold their own card. Change it under **Memberships** → **Change card**.

**My saved card is not showing at checkout.** Reload the page, and check you are signed in to the account the card was saved on.

**I do not recognise a charge.** The organization is the merchant of record, so their name appears rather than Famlo's. Check the name against your bookings and your memberships, then message the organization.

## Frequently Asked Questions

**Is it safe to save my card on Famlo?**
Your card details are held by Stripe, and Famlo never sees or stores the number.

**Can organizers see my card details?**
No. They see that a payment was made and for what, not your card number.

**How many cards can I save?**
As many as you want. Only one carries the **Default** badge.

**Do I need a card to join a free organization?**
No. A card is only needed when there is something to pay.

**Can I get a receipt?**
Card receipts are issued by Stripe. See [Payments and refunds](/docs/families/payments-and-refunds).

## Related Articles

- [Payments and refunds](/docs/families/payments-and-refunds) - What you are charged, and what comes back
- [Your memberships](/docs/families/memberships) - Dues, renewals, and the card on each one
- [Refunds and Cancellations](/docs/how-to/cancel-refund) - Getting refunds for events
