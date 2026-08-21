---
sidebar_position: 6
title: Payments and refunds
description: How you are charged, how refunds work, and managing your cards.
---

# Payments and refunds

Famlo is free for families. You pay the organization for what you register for, and nothing else. This guide covers what you are charged, how to save and remove cards, and exactly what comes back when you cancel.

## What you pay

The price on the listing is the price you pay. Nothing is added at checkout.

Organizations pay Famlo a flat 10% platform fee. That fee is taken out of the organization's share of your payment rather than added to your total. The checkout order summary shows a **Platform Fee** row, and the value beside it reads "included".

The organization is the merchant of record. Their name appears on your card statement, not Famlo's, and they are responsible for their own refund decisions. Famlo never adds a booking fee or a processing fee of its own.

## Saving a card

A card you save works at every organization on Famlo. You enter it once.

1. Open the account menu and select **Account settings**.
2. Select **Payments**. The page is headed **Payment methods**.
3. Under **Add a card**, enter your card details.
4. Select **Save card**.

Your card details go directly to Stripe and are never stored on Famlo's servers. You can also save a card at checkout instead, then reuse it everywhere.

### Managing your saved cards

**Your cards** lists each saved card with its brand, last four digits and expiry date. A **Default** badge marks the card offered first at checkout, and an **Expired** badge marks one that can no longer be charged.

Two controls sit on each row:

- **Make default** moves the default badge to that card. It appears only on cards that are not already the default and have not expired.
- **Remove** deletes the card. You are asked to confirm first.

There is no edit screen for a saved card. To replace a card that is about to expire, add the new one and then remove the old one.

:::warning
You cannot remove a card that is paying for an active membership. Famlo names the organization it is on file for and asks you to change the card there first. See [Your memberships](/docs/families/memberships).
:::

## Account credit

If your account holds credit, Famlo applies it automatically at checkout against whatever is due after any promo code. There is nothing to redeem. The order summary shows a **Credits applied** line for the amount used.

Your balance appears as **Account credit** at the bottom of the account settings navigation whenever it is above zero.

Cancel a booking that used credit and that credit returns to your balance in full. This happens whether or not any card money comes back.

## Promo codes

Type a code into the **Promo code** field in the checkout order summary and select **Apply**. A valid code changes your total straight away and the discount appears as its own line.

Applying a code books nothing on its own. You still complete checkout afterwards. Some organizations also offer a code against a membership you already hold — see [Your memberships](/docs/families/memberships).

## Cancelling and refunds

### Cancel a booking

Cancelling shows you the refund before you commit to it.

1. Open the activity you registered for. **Bookings** in the account menu and [your calendar](/docs/families/calendar) both list what you are booked into.
2. Select **Cancel registration**.
3. Read the breakdown on the **Cancel booking** screen: **Amount paid**, **Activity refund**, **Service fee refund** and **Total refund**, with a plain sentence explaining the outcome.
4. Select **Cancel booking** to confirm, or **Keep booking** to back out.

Cancelling cannot be undone. To come back you register again, and only if a spot is still open.

A free activity you booked in a single tap has a one-tap **Cancel RSVP** instead. There is no refund screen, because there is no money to return.

### When money comes back

Refund timing is the same at every organization on Famlo. It is a single cutoff, not a sliding scale.

| When you cancel | Card refund |
| --- | --- |
| 24 hours or more before the activity starts | Full |
| Less than 24 hours before it starts | None |
| After it has started | None |

There is no partial-refund band, and no organization sets its own cutoff. A self-cancellation either returns the whole card charge or returns nothing.

One exception exists, set on the individual activity. An organization can mark an activity as no-refunds, and cancelling it returns nothing however early you do it. The cancel screen tells you plainly: "This activity has a no-refunds policy. Contact the organizer for help."

### What a refund is measured against

Refunds are card-only. The refundable amount is what your card was actually charged: the ticket price after any promo code, account credit and scholarship award.

Money that never went through your card cannot come back through it.

- A **promo discount** was never charged, so nothing returns for it.
- **Account credit** returns to your credit balance rather than your card.
- A **scholarship award** was never charged and is never held by Famlo. The organization settles that side with you directly — see [Scholarships](/docs/families/scholarships).

An order that cost you nothing on a card has no card refund to issue. That covers a free ticket and an order fully covered by promo, credit and scholarship. The cancel screen says so rather than showing a zero you might read as a fault.

### The platform fee on a refund

The platform fee is refunded or kept according to who cancelled and when.

| Who cancels | Platform fee |
| --- | --- |
| You, 24 hours or more before the start | Refunded |
| You, inside the 24-hour cutoff | Not refunded |
| The organization or one of its leaders | Refunded |
| Famlo, because the activity was cancelled | Refunded |

This line decides what the organization keeps, not what you paid, because the fee came out of their share in the first place. Whenever the fee is refunded, the full card charge comes back to you.

If the organization cancels, a leader cancels on your behalf, or the activity is called off, you are made whole. The full card charge is returned no matter how close to the start it happens.

### How long it takes

Approved refunds go back to the original card and take five to ten business days to appear on your statement. Famlo emails you when one is sent, with the subject "Your refund for … is on the way".

## Receipts

Famlo does not produce a receipt document of its own. Card receipts are issued by Stripe.

- Your confirmation email, "You're registered for …", arrives immediately and is your record of the booking.
- A **View Stripe receipt** link appears beside your order in your [message thread](/docs/families/messages) with the organization, once Stripe has issued the receipt.
- Membership dues have their own receipts on the memberships page. See [Your memberships](/docs/families/memberships).

## Troubleshooting

**My card was declined at checkout.** Check the number, expiry date and security code, then confirm the card has room on it. If it still fails, try another card or ask your bank — a card saved months ago may have been blocked for an online charge.

**I cannot remove a card.** It is paying for an active membership. Change the card on that membership first, then remove this one.

**A saved card shows Expired.** It cannot be charged and cannot be made the default. Add the replacement card, then remove the expired one.

**I cancelled but nothing came back to my card.** Either you cancelled inside the 24-hour cutoff, or your card was never charged at all because promo, credit or scholarship covered the order. The cancel screen states which before you confirm.

**I do not recognise a charge on my statement.** The organization is the merchant of record, so their name appears rather than Famlo's. Check the organization name against your bookings and your memberships.

**My refund has not arrived.** Allow ten business days from the cancellation. If it is still missing after that, [contact support](/docs/account/support).

## Related

- [Registering and checking out](/docs/families/registering)
- [Scholarships](/docs/families/scholarships)
- [Your memberships](/docs/families/memberships)
- [Your calendar](/docs/families/calendar)
