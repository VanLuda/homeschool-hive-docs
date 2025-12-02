---
sidebar_position: 6
title: Stripe Payment Setup
description: Learn how to connect Stripe to receive payments for memberships and events.
---

# Stripe Payment Setup

To accept payments for memberships and events, you'll need to connect a Stripe account to your group. This guide walks you through the setup process.

## What is Stripe?

Stripe is a secure payment processing service that handles all financial transactions for your group. When members pay for events or memberships:

1. Payment is processed securely by Stripe
2. Funds are deposited to your connected bank account
3. Homeschool Hive never sees or stores payment card details

## Before You Start

To connect Stripe, you'll need:

- Your group must be a paid group (membership fee) or have paid events
- A valid email address
- Bank account information for receiving payouts
- Business or personal information for identity verification

## Connect Your Stripe Account

### Start the Connection

1. Go to your group page
2. Click **Settings** > **Payments** or **Payment Setup**
3. Click **Connect with Stripe**

### Choose Account Type

Select the type of Stripe account:

**Individual**
- For personal use or informal groups
- Payouts to your personal bank account
- Simpler setup process

**Business**
- For registered organizations, co-ops, or LLCs
- Requires business information
- Can accept higher payment volumes

### Complete Stripe Onboarding

Stripe will ask for:

1. **Personal Information**
   - Legal name
   - Date of birth
   - Address
   - Last 4 digits of SSN (for US)

2. **Business Information** (if applicable)
   - Business name
   - Business type
   - EIN or Tax ID

3. **Bank Account**
   - Account holder name
   - Routing number
   - Account number

4. **Identity Verification**
   - May require photo ID
   - Used to prevent fraud

### Complete the Setup

1. Review and accept Stripe's terms
2. Complete any additional verification steps
3. Return to Homeschool Hive
4. Your account is now connected

## Verify Connection

After connecting:

1. Go to **Settings** > **Payments**
2. You should see "Stripe Connected" status
3. View your Stripe account details

## Receiving Payments

### How Payouts Work

When members pay for events or memberships:

1. Payment is collected by Stripe
2. Fees are deducted (Stripe processing + platform fee)
3. Remaining amount is added to your Stripe balance
4. Stripe deposits funds to your bank account

### Payout Schedule

By default, Stripe pays out:
- **Daily** - Funds available next business day
- Can be changed to weekly or monthly in Stripe settings

### View Your Balance

1. Go to **Settings** > **Payments**
2. See your current Stripe balance
3. View recent transactions and payouts

Or log into your Stripe dashboard directly for detailed reporting.

## Understanding Fees

### Processing Fees

Standard Stripe processing fees:
- 2.9% + $0.30 per transaction (US cards)
- Higher for international cards

### Platform Fee

Homeschool Hive charges a small platform fee:
- Percentage of each transaction
- Helps maintain and improve the platform
- View current rates in your account

### Example Transaction

For a $50 event registration:
```
Ticket Price:         $50.00
Stripe Fee (2.9%+30¢): -$1.75
Platform Fee:          -$1.25
Your Payout:          $47.00
```

*Fees are approximate and may vary*

## Managing Your Stripe Account

### Access Stripe Dashboard

For detailed financial management:

1. Go to **Settings** > **Payments**
2. Click **View Stripe Dashboard**
3. Or go directly to dashboard.stripe.com

In the Stripe dashboard you can:
- View all transactions
- Download reports
- Manage payout schedule
- Update bank information
- Handle disputes

### Update Bank Account

To change where payouts go:

1. Log into Stripe dashboard
2. Go to **Settings** > **Bank accounts**
3. Add a new bank account
4. Set it as default for payouts
5. Remove old account if desired

### Update Business Information

If your group's information changes:

1. Log into Stripe dashboard
2. Go to **Settings** > **Business settings**
3. Update your information
4. May require re-verification

## Handling Refunds

### Process Refunds

When you need to refund a payment:

1. Go to the event or membership in Homeschool Hive
2. Find the specific transaction
3. Click **Refund**
4. Enter refund amount (full or partial)
5. Confirm the refund

Refunds are:
- Deducted from your Stripe balance
- Returned to the original payment method
- Processing fees may or may not be refunded (depends on timing)

### Refund Timeline

- Refunds typically take 5-10 business days to appear
- Customer sees refund on their card statement
- Stripe sends notification when processed

## Troubleshooting

### Connection Issues

If Stripe won't connect:
- Check that you completed all verification steps
- Ensure your browser allows popups from Stripe
- Try a different browser
- Contact support if issues persist

### Verification Required

Stripe may request additional verification:
- Check your email for requests from Stripe
- Log into Stripe dashboard to complete requirements
- Payouts may be paused until verified

### Payout Delays

If payouts aren't arriving:
- Check your bank account details in Stripe
- Verify your identity is confirmed
- Review any holds or issues in Stripe dashboard
- Contact Stripe support for payout questions

### Disputes and Chargebacks

If a member disputes a charge:
1. Stripe notifies you of the dispute
2. Provide evidence (registration details, communication)
3. Stripe reviews and makes a decision
4. Disputed amount may be held during review

## Disconnect Stripe

If you need to disconnect your Stripe account:

1. Go to **Settings** > **Payments**
2. Click **Disconnect Stripe**
3. Confirm the disconnection

:::warning Before Disconnecting
- Process any pending refunds first
- You won't be able to accept payments until reconnected
- Members won't be able to pay for events or memberships
:::

## What's Next?

1. **[Set membership fees](/docs/group-leaders/membership-fees)** - Configure group membership pricing
2. **[Create paid events](/docs/group-leaders/create-events)** - Set up ticketed events
3. **[Generate scholarship invoices](/docs/group-leaders/scholarship-invoices)** - Invoice for scholarship families
