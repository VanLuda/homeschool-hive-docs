---
sidebar_position: 6
title: Payments and refunds
description: How you are charged, how refunds work, and managing your cards.
---
<!-- SOURCE: docs/parents/payments.md -->
# Payments

This guide covers everything you need to know about payments in Famlo, including viewing your payment history, managing payment methods, and understanding refunds.

## Payment Methods

Famlo accepts the following payment methods:

- **Credit Cards** - Visa, Mastercard, American Express, Discover
- **Debit Cards** - Cards with Visa or Mastercard logos

All payments are processed securely through Stripe.

## Manage Payment Methods

### Add a Payment Method

1. Go to **Account Settings**
2. Click **Payment Methods**
3. Click **Add Payment Method**
4. Enter your card details:
   - Card number
   - Expiration date
   - CVV/Security code
   - Billing zip code
5. Click **Save**

### Set a Default Payment Method

Your default payment method is used for:
- Event registrations
- Membership renewals
- Automatic recurring payments

To set a default:

1. Go to **Account Settings** > **Payment Methods**
2. Find the card you want as default
3. Click **Set as Default**

### Remove a Payment Method

1. Go to **Account Settings** > **Payment Methods**
2. Find the card you want to remove
3. Click **Remove**
4. Confirm the removal

:::note Active Subscriptions
You cannot remove a payment method if it's being used for active membership subscriptions. Update your subscription payment method first.
:::

## View Payment History

To see all your past payments:

1. Go to **Account Settings**
2. Click **Card Payments** or **Payment History**
3. View your transactions

Each transaction shows:
- Date of payment
- Description (event or membership)
- Amount charged
- Payment method used
- Receipt link

### Download Receipts

For each payment:

1. Find the transaction in your payment history
2. Click **View Receipt** or **Download**
3. A PDF receipt will download or open

## Understanding Fees

When you pay for events or memberships, you may see:

- **Ticket/Registration Price** - The base cost set by the group
- **Platform Fee** - A small fee that supports Famlo
- **Processing Fee** - Payment processing costs

The total amount charged includes all applicable fees, which are displayed before you complete payment.

## Refunds

### Requesting a Refund

If you need a refund for an event registration:

1. Go to the event page
2. Click **Cancel Registration**
3. Review the refund policy
4. Confirm your cancellation
5. Refund will be processed according to the group's policy

### Refund Policies

Refund policies are set by each group and may include:

- **Full refund** - Cancel before a specific deadline
- **Partial refund** - Reduced refund after the deadline
- **No refund** - Non-refundable after registration
- **Credit** - Receive credit toward future events instead of refund

Always check the event's refund policy before registering.

### Refund Processing Time

Once a refund is approved:

- Credit/debit cards: 5-10 business days to appear on your statement
- The refund goes back to the original payment method

### Membership Refunds

For membership cancellations:

- Monthly memberships: Generally no refund, access continues until end of billing period
- Annual memberships: Refund policies vary by group

Contact the group leader for membership refund questions.

## Payment Issues

### Payment Declined

If your payment is declined:

1. Verify your card details are correct
2. Check that your card hasn't expired
3. Ensure sufficient funds or credit limit
4. Try a different payment method
5. Contact your bank if issues persist

### Double Charged

If you believe you were charged twice:

1. Check your payment history in Famlo
2. Wait 24-48 hours for pending charges to clear
3. Some banks show temporary authorizations that disappear
4. Contact support if you see two completed charges

### Subscription Payment Failed

If an automatic membership payment fails:

1. You'll receive an email notification
2. Update your payment method
3. The payment will be retried automatically
4. Your membership may be paused until payment succeeds

## Payment Security

Your payment information is protected:

- All transactions use secure SSL encryption
- Card details are stored securely by Stripe
- Famlo never sees your full card number
- PCI-compliant payment processing

## What's Next?

1. **[Track scholarship invoices](/docs/families/payments-and-refunds)** - For scholarship reimbursement
2. **[Manage payment methods](/docs/families/payments-and-refunds)** - Update your saved cards
3. **[View your calendar](/docs/families/calendar)** - See upcoming events


<!-- MERGED FROM: docs/account/payment-methods.md — Phase 4: fold into the sections above, do not leave as an appendix -->

## Payment Methods

Manage your saved payment methods to make checkout faster and keep your memberships active. This guide covers adding, updating, and removing payment cards.

### Access Payment Methods

1. Go to **Account Settings**
2. Click **Payment Methods** or **Payments**

### Your Saved Cards

#### View Saved Cards

See all your saved payment methods:
- Card type (Visa, Mastercard, etc.)
- Last 4 digits
- Expiration date
- Default status

#### Default Payment Method

Your default card is used for:
- Automatic membership renewals
- Quick checkout (one-click when available)
- Any automatic charges

A star or "Default" label indicates your default card.

### Adding a Payment Method

#### Add a New Card

1. Go to **Payment Methods**
2. Click **Add Payment Method** or **Add Card**
3. Enter your card details:
   - Card number
   - Expiration date (MM/YY)
   - CVV/Security code
   - Billing zip code
4. Click **Save**

#### Supported Cards

Famlo accepts:
- Visa
- Mastercard
- American Express
- Discover

Debit cards with Visa or Mastercard logos are also accepted.

#### Save During Checkout

You can also save cards during checkout:
1. At checkout, enter your card details
2. Check **Save this card for future use**
3. Complete your payment
4. Card is saved to your account

### Managing Payment Methods

#### Set Default Card

To change your default payment method:

1. Go to **Payment Methods**
2. Find the card you want as default
3. Click **Set as Default** or the star icon
4. Confirm the change

Your default card will be used for automatic payments.

#### Update Card Information

If your card details change (new expiration date, etc.):

1. Go to **Payment Methods**
2. Find the card to update
3. Click **Edit** or **Update**
4. Enter new information
5. Click **Save**

:::tip Card Updates
If you receive a new card with the same number but new expiration, update it before the old one expires to avoid failed payments.
:::

#### Remove a Card

To delete a saved card:

1. Go to **Payment Methods**
2. Find the card to remove
3. Click **Remove** or the trash icon
4. Confirm the removal

:::warning Active Subscriptions
You cannot remove a card that's being used for active membership subscriptions. Either cancel the subscription or set a different default card first.
:::

### Payment Security

#### How Your Data is Protected

Your payment information is secure:

- **Encryption** - All data is encrypted during transmission
- **Stripe Security** - Card details stored by Stripe, not Famlo
- **PCI Compliance** - Meets industry security standards
- **Tokenization** - Actual card numbers aren't stored on our servers

#### What We Store

Famlo stores:
- Card type and last 4 digits (for display)
- Expiration date
- Billing zip code

We never see or store:
- Full card number
- CVV/Security code

#### Secure Checkout

Every payment uses:
- SSL encryption
- Fraud detection
- Secure payment processing through Stripe

### Automatic Payments

#### How They Work

If you have active memberships:

1. Renewal date approaches
2. Default payment method is charged
3. Receipt is emailed to you
4. Membership continues uninterrupted

#### Failed Automatic Payments

If an automatic payment fails:

1. You receive an email notification
2. Stripe retries the charge (typically 3 times)
3. Update your payment method if needed
4. Membership may pause after failed attempts

#### Update Before Renewal

To avoid failed payments:
- Check your default card before renewal dates
- Update expired cards promptly
- Ensure sufficient funds/credit limit

### Payment History

#### View Past Payments

See all your transactions:

1. Go to **Account Settings** > **Payments** or **Card Payments**
2. View your payment history
3. See details for each transaction:
   - Date
   - Description
   - Amount
   - Card used
   - Status

#### Download Receipts

For any payment:

1. Find the transaction in your history
2. Click **View Receipt** or **Download**
3. Get a PDF receipt for your records

#### Filter Transactions

Find specific payments:
- Filter by date range
- Filter by type (membership, event)
- Search by description

### Troubleshooting

#### Card Declined

If your card is declined:

1. **Check card details** - Ensure number, expiration, CVV are correct
2. **Check funds** - Ensure sufficient balance or credit
3. **Check expiration** - Card may have expired
4. **Contact bank** - They may have blocked the transaction
5. **Try different card** - Use another payment method

#### Card Not Saving

If your card won't save:
- Verify all required fields are filled
- Check for typos in card number
- Ensure expiration date is in the future
- Try a different browser
- Contact support if issues persist

#### Unknown Charge

If you see an unexpected charge:
1. Check your payment history in Famlo
2. Review your active memberships
3. Check for family members who may have registered
4. Contact support if you can't identify it

#### Refund Not Appearing

If you're waiting for a refund:
- Refunds take 5-10 business days to process
- Check your card statement after this period
- The refund goes to the original payment method
- Contact support if not received after 10 business days

### What's Next?

1. **[View payment history](/docs/families/payments-and-refunds)** - See all your transactions
2. **[Manage subscriptions](/docs/families/organizations)** - Control membership billing
3. **[Account settings](/docs/account/login-and-security)** - Update your profile
