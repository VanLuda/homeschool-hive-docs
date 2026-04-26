---
sidebar_position: 7
title: Membership Fees
description: Learn how to configure and manage membership fees for your group.
---

# Membership Fees

If your group charges for membership, this guide explains how to set up and manage membership fees, billing cycles, and member payments.

## Setting Up Membership Fees

### Enable Paid Membership

When creating or editing your group:

1. Go to **Settings** > **Membership**
2. Select **Paid Membership**
3. Configure your pricing options

### Pricing Options

**Price**
- Set the amount members pay
- Consider your group's expenses and value provided

**Billing Cycle**

Choose how often members are charged:

| Cycle | Best For |
|-------|----------|
| **Monthly** | Groups with ongoing expenses, members who prefer smaller payments |
| **Quarterly** | Balance between flexibility and commitment (every 3 months) |
| **Semi-Annual** | Medium-term commitment with fewer renewals (every 6 months) |
| **Annual** | Groups wanting predictable income, members who want to pay once |

You can offer multiple options and let members choose their preferred billing cycle.

### Annual Discount

Encourage annual subscriptions by offering a discount:

- Annual price should be less than 12x monthly
- Example: $10/month or $100/year (saves $20)
- Provides more predictable income for your group

## How Member Billing Works

### Initial Payment

When a member joins:

1. They see your membership options (monthly/annual)
2. They select their preferred billing cycle
3. Payment is processed immediately
4. Membership begins right away

### Automatic Renewals

Memberships renew automatically:

1. System charges the member's saved payment method
2. Membership continues uninterrupted
3. Member receives a receipt via email

### Renewal Reminders

Before renewal:
- Members receive a reminder email (typically 7 days before)
- They can update their payment method if needed
- They can cancel before being charged

## Managing Member Payments

### View Payment Status

See which members have paid:

1. Go to **Members**
2. View membership status for each member:
   - **Active** - Current on payments
   - **Past Due** - Payment failed or overdue
   - **Cancelled** - Membership cancelled

### Handle Failed Payments

When a payment fails:

1. The member is notified via email
2. Stripe automatically retries the charge
3. After multiple failures, membership may be paused
4. Member can update payment method and retry

### Grace Period

Consider offering a grace period for failed payments:
- Allows members time to fix payment issues
- Prevents immediate access loss
- Configure in your group settings

## Changing Membership Prices

### Raise Prices

To increase your membership fee:

1. Go to **Settings** > **Membership**
2. Update the price
3. Choose how to apply:
   - **New members only** - Existing members keep current rate
   - **All members at renewal** - Everyone pays new rate at next renewal

:::tip Communicate Price Changes
Notify members before changing prices. Good practice is 30 days notice for increases.
:::

### Lower Prices

To decrease your membership fee:
- Update the price in settings
- New members pay the new lower rate
- Consider whether to apply to existing members

## Membership Tiers

### Multiple Membership Levels

Some groups offer different membership tiers:

**Example:**
- **Basic** - $5/month - Access to events
- **Standard** - $10/month - Events + member directory
- **Premium** - $20/month - All features + priority registration

Currently, Famlo supports a single membership fee per group. For multiple tiers, consider:
- Creating separate groups for different levels
- Using event pricing to differentiate access
- Contacting support about your specific needs

## Member Experience

### What Members See

When joining a paid group:

1. Group page shows membership price
2. "Join" button starts the payment flow
3. They select billing cycle (if you offer both)
4. Enter or select payment method
5. Complete payment
6. Immediately gain access

### Managing Their Membership

Members can:
- View their membership status in the group
- See their next renewal date
- Update their payment method
- Cancel their membership

## Cancellations

### When Members Cancel

If a member cancels:
- They retain access until the end of their paid period
- They won't be charged again
- They can rejoin later if they choose

### Refund Policy

Decide your refund policy:

**No Refunds**
- Member cancels but keeps access until end of period
- No money returned

**Prorated Refunds**
- Calculate remaining time
- Refund that portion
- Good for annual memberships

**Full Refunds**
- Return entire payment
- Usually within a time window (e.g., first 7 days)

Configure your policy and communicate it clearly to members.

### Processing Refunds

To refund a membership:

1. Go to **Members**
2. Find the member
3. View their membership details
4. Click **Refund**
5. Enter refund amount
6. Confirm

## Reporting

### Membership Revenue

Track your membership income:

1. Go to **Settings** > **Payments** or **Analytics**
2. View:
   - Total active memberships
   - Monthly recurring revenue
   - Payment history
   - Failed payment count

### Export Data

Download membership data:
- Member list with payment status
- Payment history
- Export to CSV for your records

## Free Trial Periods

Offer new members a trial period before their first payment:

1. Go to **Settings** > **Billing**
2. Find the **Trial Period** section
3. Set the number of days for the free trial (e.g., 7 days, 14 days, 30 days)
4. Save your settings

During the trial:
- New members join and get full access immediately
- No payment is collected until the trial ends
- Members can cancel before the trial expires to avoid charges
- Members receive a reminder before the trial period ends

:::tip Choosing a Trial Length
A 7-14 day trial gives families enough time to attend an event or two and experience the community. Longer trials (30 days) work well for groups with monthly event schedules.
:::

## Grace Period

Configure a grace period to give members extra time when a payment fails:

1. Go to **Settings** > **Billing**
2. Find the **Grace Period** section
3. Set the number of days members keep access after a failed payment

During the grace period:
- Members retain full access to the group
- Stripe automatically retries the payment
- Members receive notifications to update their payment method
- If the payment succeeds within the grace period, membership continues uninterrupted
- If the grace period expires without payment, membership is paused

## What's Next?

1. **[Manage members](/docs/group-leaders/manage-members)** - Handle member requests and roles
2. **[Generate scholarship invoices](/docs/group-leaders/scholarship-invoices)** - For scholarship families
3. **[View analytics](/docs/group-leaders/analytics)** - Track group performance
