---
sidebar_position: 5
title: Tickets and Pricing
description: Learn how to configure ticket types, pricing, and add-ons for your events.
---

# Tickets and Pricing

This guide covers advanced ticketing options for your events, including multiple ticket types, add-ons, and pricing strategies.

## Ticket Types

### Why Use Multiple Ticket Types

Multiple ticket types let you:
- Offer different prices for adults vs. children
- Create member vs. non-member pricing
- Limit certain ticket types (e.g., only 10 scholarship spots)
- Bundle different experiences (e.g., VIP vs. standard)

### Creating Ticket Types

For each ticket type, configure:

**Name**
- Clear, descriptive name
- Examples: "Adult", "Child (5-12)", "Family Pass"

**Price**
- Cost per ticket
- Set to $0 for free tickets

**Description**
- What's included with this ticket
- Any restrictions or requirements

**Quantity Available**
- Total number of this ticket type
- Leave blank for unlimited

**Purchase Limits**
- Minimum per order (usually 1)
- Maximum per order (to prevent overselling)

### Example Ticket Configurations

**Simple Adult/Child Pricing:**
| Ticket Type | Price | Quantity |
|-------------|-------|----------|
| Adult | $15 | Unlimited |
| Child (5-17) | $10 | Unlimited |
| Child (under 5) | Free | Unlimited |

**Family Event:**
| Ticket Type | Price | Quantity |
|-------------|-------|----------|
| Family (up to 6) | $40 | 20 |
| Individual | $12 | 50 |

**Limited Spots:**
| Ticket Type | Price | Quantity |
|-------------|-------|----------|
| General Admission | $20 | 25 |
| Scholarship | $20 | 5 |

## Add-Ons

Add-ons are optional extras attendees can purchase with their registration.

### Per-Attendee Add-Ons

Purchased for each person attending:

**Examples:**
- Lunch - $8 per person
- Materials/supplies - $5 per person
- T-shirt - $15 per person

**Configuration:**
1. Click **Add Add-On**
2. Enter name and price
3. Select **Per Attendee**
4. Set quantity limits if needed

### Per-Order Add-Ons

Purchased once per registration, regardless of attendee count:

**Examples:**
- Parking pass - $10 per vehicle
- Family photo package - $25
- Facility fee - $5

**Configuration:**
1. Click **Add Add-On**
2. Enter name and price
3. Select **Per Order**

### Add-On Settings

For each add-on:
- **Required vs. Optional** - Must they purchase or can they skip?
- **Quantity limits** - Maximum available
- **Description** - What's included

## Pricing Strategies

### Early Bird Pricing

Encourage early registration:

1. Create two ticket types with same name
2. Set the early bird with lower price and limited quantity
3. When early bird sells out, regular price remains

**Example:**
- Early Bird - $15 (first 20 registrations)
- Regular - $20 (unlimited)

### Member vs. Non-Member Pricing

If non-members can attend:

1. Create member-priced tickets
2. Create non-member tickets at higher price
3. Configure visibility based on membership status

### Sliding Scale / Pay What You Can

For accessibility:

1. Create multiple ticket types at different prices
2. Let attendees choose their level
3. Example: "Standard - $20", "Reduced - $10", "Supporter - $30"

### Group Discounts

For families or large groups:

1. Create a "Family Pass" ticket type
2. Price it lower than buying individual tickets
3. Set a maximum family size in the description

## Free Events

### Completely Free

For no-cost events:
- Don't add any ticket types
- Or add a single $0 ticket type
- Attendees simply RSVP

### Free with Paid Add-Ons

Event is free but extras cost:
- Set base ticket to $0
- Add paid add-ons (lunch, materials, etc.)
- Attendees can register free and optionally purchase extras

## Capacity and Tickets

### Overall Event Capacity

Set in event settings:
- Total attendees allowed
- Applies across all ticket types

### Per-Ticket Capacity

Set on each ticket type:
- Limits that specific ticket
- Example: Only 5 scholarship spots

### How They Work Together

If event capacity is 50 and you have:
- Adult tickets: 30 available
- Child tickets: 30 available

Total registrations stop at 50, even if individual ticket types haven't sold out.

## Fees and Pricing Display

### Understanding Fees

When attendees pay, they may see:
- **Ticket price** - Your set price
- **Platform fee** - Homeschool Hive fee
- **Processing fee** - Payment processing cost

### Price Display Options

Choose how prices appear:
- **Show fees separately** - Attendees see base price + fees
- **Include fees in price** - All-inclusive pricing

## Managing Ticket Sales

### View Sales

Monitor ticket sales:
1. Go to **Manage Event**
2. View sales by ticket type
3. See total revenue collected

### Close Ticket Sales

Stop sales for a specific ticket:
1. Go to **Edit Event**
2. Find the ticket type
3. Set quantity to 0 or mark as sold out

### Modify Prices

To change prices after publishing:

1. Go to **Edit Event**
2. Update ticket prices
3. Save changes

:::warning Price Changes
Changing prices doesn't affect existing registrations. New price applies to new registrations only.
:::

## Refunds

### Automatic Refunds

When attendees cancel (if allowed):
- System processes refund automatically
- Based on your cancellation policy
- Refund goes to original payment method

### Manual Refunds

For special situations:
1. Go to the attendee's registration
2. Click **Issue Refund**
3. Enter refund amount
4. Add a note explaining the reason
5. Process the refund

### Partial Refunds

You can issue partial refunds:
- For unused add-ons
- When transferring registrations
- For goodwill gestures

## What's Next?

1. **[Set up Stripe payments](/docs/group-leaders/payments-stripe)** - Connect your payment account
2. **[Generate scholarship invoices](/docs/group-leaders/scholarship-invoices)** - For scholarship families
3. **[Manage events](/docs/group-leaders/manage-events)** - Handle registrations
