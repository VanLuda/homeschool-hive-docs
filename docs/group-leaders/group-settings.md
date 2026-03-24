---
sidebar_position: 13
title: Group Settings Overview
description: Learn how to access and navigate your group settings to configure every aspect of your Homeschool Hive group.
---

# Group Settings Overview

Group settings give you centralized control over how your group looks, who can join, what members see, and how payments work. This guide walks you through each settings tab so you know where to find the configuration you need.

## Accessing Group Settings

1. Navigate to your group page
2. Click the **Settings** button (gear icon) in the group header
3. You will land on the **General** settings tab by default

On desktop, a sidebar on the left lists all available settings tabs. On mobile, tap the current tab name at the top to expand a dropdown menu with all tabs.

:::info Required Permissions
Most settings tabs require the **Edit Group** permission. Some tabs (like Billing and Discount Codes) require specific permissions such as **View Billing** or **Manage Payments**. If you do not see a particular tab, ask your group Owner to assign you the appropriate role or permissions.
:::

## Settings Tabs

### General

Configure your group's core identity and public-facing information.

- **Group Name** -- The display name for your group
- **Description** -- A summary that appears on your group's public profile
- **Location** -- Set your group's city or region using the address search (with map pin placement for precision)
- **Custom URL (Slug)** -- Choose a memorable URL like `homeschoolhive.co/groups/your-group-name`
- **Cover Photo** -- Upload a banner image for your group page
- **Brand Color** -- Pick an accent color for your group's visual theme
- **External Links** -- Add links to your website, Facebook, Instagram, or YouTube
- **Visibility** -- Control who can find and join your group (see below)
- **Danger Zone** -- Transfer ownership or delete your group

#### Visibility Options

| Visibility | Discoverable | Join Method | Membership Fees |
|------------|-------------|-------------|-----------------|
| **Open** | Yes | Instant join | No |
| **Closed** | Yes | Approval required | Optional |
| **Hidden** | No | Invite link only | Optional |

:::warning
Open groups cannot be changed to Closed or Hidden after creation, to protect existing members' expectations.
:::

### Billing & Payments

Set up Stripe Connect to accept payments for memberships and event tickets.

- **Stripe Connection** -- Connect or manage your Stripe account
- **Verification Status** -- View your Stripe verification status (not connected, pending, verified, action required)
- **Payment Capabilities** -- See whether charges and payouts are enabled
- **Membership Pricing** -- Enable paid memberships and configure pricing, billing cycle, trial period, and grace period

For a detailed walkthrough, see [Stripe Connect Setup](/docs/group-leaders/payments-stripe).

### Categories

Help members find your group by tagging it with relevant categories and age ranges.

- **Category Tags** -- Select from predefined category types (e.g., educational focus, activity type) to describe your group
- **Age Ranges** -- Define the age ranges your group serves so families can filter by their children's ages

Changes to categories save automatically when you make a selection.

### Discount Codes

Create promotional codes that reduce prices on event tickets or membership fees.

- **Create Codes** -- Set up percentage or fixed-amount discounts
- **Apply To** -- Target discounts to events, memberships, or both
- **Usage Limits** -- Control how many times a code can be redeemed
- **Expiration Dates** -- Set when codes become inactive

:::info Stripe Required
Discount Codes require a verified Stripe Connect account. If Stripe is not connected, you will see a prompt to set it up first.
:::

For the full guide, see [Discount Codes](/docs/group-leaders/discount-codes).

### Membership Questions

Customize the intake form that prospective members fill out when requesting to join your group.

- **Add Questions** -- Create custom questions for your join request form
- **Question Types** -- Choose from free text, multiple choice, or checkbox responses
- **Required Fields** -- Mark questions as required so applicants must answer them
- **Reorder** -- Drag questions to change the order they appear on the form

Membership questions help you screen applicants and gather information before approving them.

### Roles & Permissions

Manage the roles available in your group and control what each role can do.

- **System Roles** -- View the four built-in roles (Owner, Co-Leader, Event Manager, Member)
- **Custom Roles** -- Create additional roles with specific permission sets
- **Permissions** -- Toggle individual permissions for each custom role
- **Member Counts** -- See how many members are assigned to each role

For step-by-step instructions, see [Custom Roles & Permissions](/docs/group-leaders/custom-roles).

### Group Rules

Set expectations and guidelines that members must follow in your group.

- **Add Rules** -- Create individual rules with a title and description
- **Reorder Rules** -- Drag and drop to change the display order
- **Require Acceptance** -- Toggle whether members must acknowledge and accept the rules when joining

:::tip
Clear, specific rules help set expectations and reduce conflicts. Include rules about communication norms, event attendance policies, and respectful behavior.
:::

### Term Templates

Create reusable schedule templates for organizing your group's academic or activity terms.

- **Create Templates** -- Define named templates (e.g., "Fall Semester," "Summer Camp Session")
- **Template Items** -- Add individual terms or agreements within each template
- **Required Items** -- Mark specific items as required
- **Default Template** -- Set one template as the default for new events

Term templates save time when you create recurring events that follow a regular schedule.

### Scholarship Invoices

Generate professional invoices for families to submit to ESA (Education Savings Account) providers or other scholarship programs.

- **Enable Scholarship Invoicing** -- Turn on the invoice generation feature
- **Invoice Footer** -- Customize the footer text on generated invoices
- **Custom Instructions** -- Add instructions for families on how to submit invoices to their scholarship provider

:::info Stripe Required
Scholarship Invoicing requires a verified Stripe Connect account. This feature is free to use with Stripe Connect -- there is no additional subscription needed.
:::

For more details, see [Scholarship Invoices](/docs/group-leaders/scholarship-invoices).

### Notifications

Configure how your group sends notifications to members.

- **Group-Level Overrides** -- Set notification preferences that apply to all group members
- **Notification Types** -- Control which events trigger notifications (new events, announcements, reminders, etc.)

:::note
Group notification settings override members' global preferences for notifications from your group. Members can still customize their individual preferences from their own account settings.
:::

### Content Moderation

Review and take action on content that has been reported by group members.

- **Reported Content** -- View posts and comments that members have flagged
- **Filter by Status** -- See pending, reviewed, resolved, or dismissed reports
- **Severity Levels** -- Reports are categorized as high, medium, or low severity
- **Moderation Actions** -- Dismiss the report, warn the author, hide or delete the content, or ban the author

Report reasons include spam, harassment, inappropriate content, misinformation, violence, hate speech, and copyright violations.

## Quick Reference

| Settings Tab | What It Controls | Required Permission |
|---|---|---|
| General | Name, description, location, visibility, cover photo | Edit Group |
| Billing & Payments | Stripe Connect, membership pricing | View Billing |
| Categories | Category tags, age ranges | Edit Group |
| Discount Codes | Promo codes for events and memberships | Manage Payments |
| Membership Questions | Join request intake form | Approve Members |
| Roles & Permissions | Custom roles and permissions | Manage Roles |
| Group Rules | Community guidelines | Edit Group |
| Term Templates | Reusable schedule templates | Edit Group |
| Scholarship Invoices | Invoice generation for ESA/scholarships | Manage Payments |
| Notifications | Group notification preferences | Edit Group |
| Content Moderation | Reported content review | Edit Events |

## Related Guides

- [Creating a Group](/docs/group-leaders/create-group)
- [Stripe Connect Setup](/docs/group-leaders/payments-stripe)
- [Custom Roles & Permissions](/docs/group-leaders/custom-roles)
- [Discount Codes](/docs/group-leaders/discount-codes)
- [Scholarship Invoices](/docs/group-leaders/scholarship-invoices)
- [Membership Fees](/docs/group-leaders/membership-fees)
- [Deleting a Group](/docs/group-leaders/delete-group)
