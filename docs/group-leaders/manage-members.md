---
sidebar_position: 2
title: Manage Members
description: Learn how to approve member requests, assign roles, and manage your group's membership.
---

# Manage Members

As a group leader, you're responsible for managing who can join your group and what they can do. This guide covers approving members, assigning roles, and handling membership issues.

## Access Member Management

1. Go to your group page
2. Click **Members** or **Manage Members** in the group menu
3. View your current members and pending requests

## Approve Join Requests

For private groups, you'll need to approve members before they can join.

### View Pending Requests

1. Go to your group page
2. Click **Member Requests** or look for the notification badge
3. See all pending join requests

### Review a Request

Each request shows:
- Applicant's name and profile
- Date of request
- Answers to membership questions (if configured)

### Approve or Decline

For each request:

1. Review the applicant's information
2. Read their answers to membership questions
3. Click **Approve** to accept them as a member
4. Or click **Decline** to reject the request

:::tip Declining Requests
If you decline a request, consider sending a message explaining why. This helps applicants understand and potentially reapply if they address the issue.
:::

## View Current Members

### Member List

See all your group members:

1. Go to **Members** in your group
2. View the complete member list
3. See each member's role and join date

### Search and Filter

For larger groups:
- **Search** by name to find specific members
- **Filter** by role to see admins, members, etc.
- **Sort** by name, join date, or role

## Member Roles

Homeschool Hive uses four roles with different permissions:

### Member

Basic group participant:
- View group content and events
- RSVP for events
- See the member directory
- Participate in discussions

### Event Manager

Can organize events:
- All Member permissions
- Create and edit events
- Manage event RSVPs
- Send event-related communications

### Co-Leader

Helps manage the group:
- All Event Manager permissions
- Approve/decline member requests
- Manage member roles (except Owner)
- Access group settings
- Send group announcements

### Owner

Full administrative control:
- All Co-Leader permissions
- Edit all group settings
- Manage payment settings
- Transfer or delete the group
- Manage all member roles including Co-Leaders

:::tip Custom Roles
In addition to the default roles, group leaders can create custom roles with granular permissions tailored to your group's needs. This allows you to define exactly what different members can do, from managing specific features to accessing certain settings.

Learn more in [Custom Roles](/docs/group-leaders/custom-roles).
:::

## Assign Roles

To change a member's role:

1. Go to **Members** in your group
2. Find the member you want to update
3. Click on their name or the options menu
4. Select **Change Role**
5. Choose the new role
6. Confirm the change

:::note Role Restrictions
- Only Owners can promote members to Co-Leader
- You cannot change your own role
- There must always be at least one Owner
:::

## Invite Members

### Share Your Group Link

1. Go to your group page
2. Click **Share** or **Invite**
3. Copy the group link
4. Share via email, social media, or messaging

### Direct Invitations

Send invitations directly:

1. Go to **Members** > **Invite**
2. Enter email addresses
3. Add a personal message (optional)
4. Click **Send Invitations**

Invited people receive an email with a link to join your group.

## Remove Members

If you need to remove someone from your group:

1. Go to **Members**
2. Find the member to remove
3. Click the options menu (three dots)
4. Select **Remove from Group**
5. Confirm the removal

### What Happens When Removed

- The member loses access to the group immediately
- They're removed from upcoming event RSVPs
- For paid memberships, review your refund policy
- They can request to rejoin (unless blocked)

### Block a Member

To prevent someone from rejoining:

1. When removing, check **Block this user**
2. Or go to group settings > **Blocked Users**
3. Add the user to the block list

Blocked users cannot:
- See the group (if private)
- Request to join
- Be invited to the group

## Handle Membership Issues

### Member Not Receiving Emails

1. Ask them to check spam/junk folders
2. Verify their email address is correct
3. Have them check their notification settings
4. They can try adding your group's email to contacts

### Payment Issues

For paid memberships with payment problems:

1. Go to **Members**
2. Find the member with issues
3. View their membership status
4. Contact them about updating payment method
5. Consider granting a grace period if needed

### Disputes

If there's a conflict between members:

1. Gather information from all parties
2. Review your group's rules and policies
3. Make a fair decision based on the situation
4. Communicate the decision clearly
5. Take action if needed (warnings, removal)

## Bulk Actions

For managing multiple members at once:

1. Go to **Members**
2. Select multiple members using checkboxes
3. Choose a bulk action:
   - Change role
   - Send message
   - Remove from group

## Member Import

Import up to 8,000 members at once from a CSV file. This feature is ideal for migrating existing member lists, onboarding large groups, or managing seasonal enrollments.

### Start an Import

1. Go to your group's **Members** page
2. Click **Import Members** or the import button
3. You'll see a 4-step process: Upload, Preview, Options, Processing

### Prepare Your CSV File

Your CSV file should include these columns:

**Required:**
- **email** - Member's email address

**Optional:**
- **first_name** - First name (or use "name" for full name)
- **last_name** - Last name
- **role** - member, event_manager, or co_leader (defaults to member)
- **fee_exempt** - yes or no (bypasses payment for paid groups)
- **expires_at** - YYYY-MM-DD format (for grandfathered memberships with expiration dates)

:::tip Download Template
Click **Download template** on the upload page to get a properly formatted CSV file with example data. You can also paste CSV content directly into the text area.
:::

### CSV Format Example

```csv
email,first_name,last_name,role,fee_exempt,expires_at
parent@example.com,Jane,Smith,member,no,
leader@example.com,John,Doe,co_leader,yes,
helper@example.com,Sarah,Johnson,event_manager,no,
migrated@example.com,Alice,Brown,member,no,2025-06-30
```

### Step 1: Upload & Validation

1. Upload your CSV file or paste the content
2. Click **Validate CSV**
3. The system checks for:
   - Valid email addresses
   - Duplicate emails in the file
   - Members already in the group
   - Pending invitations
   - Proper date formats

### Step 2: Preview Results

Review the validation results:

- **Valid rows** - Ready to import
- **Invalid rows** - Have errors that need fixing
- **Warnings** - Issues that won't block import (duplicates, already members)
- **Estimated time** - How long the import will take

You can:
- **Start Over** - Upload a different file
- **Continue** - Proceed with valid rows (you can only import valid rows)

:::note Skipped Rows
Rows are automatically skipped if:
- The email already has an active membership
- A pending invitation already exists
- The email is a duplicate in your CSV
:::

### Step 3: Import Options

Configure how invitations will be sent:

**Custom Message** (optional)
- Add a personal message to invitation emails
- Up to 1,000 characters
- Helps introduce your group and set expectations

**Default Role**
- Choose the role for rows without a specified role
- Options: Member, Event Manager, or Co-Leader
- CSV role column overrides this default

**Discount Code** (paid groups only)
- Pre-apply a discount code to all invitations
- Useful for special promotions or founder pricing
- Only active discount codes are available

### Step 4: Processing

Track your import in real-time:

1. **Validating** - Preparing data
2. **Processing** - Creating invitations and sending emails
3. **Progress updates** - See how many invitations have been sent
4. **Estimated time remaining** - Know when it will complete

You can **cancel** the import at any time if needed.

### Results Summary

After completion, you'll see:

- **Successful invitations** - Emails sent
- **Failed invitations** - Errors encountered
- **Skipped invitations** - Already members or duplicates
- **Email status** - Delivery success/failures

### What Happens After Import

For each valid email:

1. **Invitation created** - A unique invitation link is generated
2. **Email sent** - Recipient receives an invitation email with a link
3. **30-day expiration** - Invitations expire after 30 days
4. **Account required** - Recipients must create/sign in to their account
5. **Payment required** - Unless fee_exempt is set to "yes" (for paid groups)

:::warning Import Limitations
- Maximum 8,000 members per import
- Only group owners and co-leaders can import members
- One active import job per group at a time
- Imported members must accept invitations individually
:::

## Bulk Invitations

Send multiple invitations quickly using email addresses. This is useful for smaller batches or when you don't need the advanced features of CSV import.

### Send Bulk Invitations

1. Go to **Members** > **Invite** or click the invite button
2. Enter up to 30 email addresses
3. Choose a role for all invitees
4. Add an optional personal message
5. Click **Send Invitations**

Each person receives a unique invitation link via email.

### Invitation Settings

When sending invitations, you can configure:

**Role Assignment**
- Member (default)
- Event Manager
- Co-Leader

**Personal Message**
- Optional custom message
- Up to 500 characters
- Included in the invitation email

**Expiration**
- Standard invitations expire in 7 days
- Custom expiration dates can be set

### Track Invitation Status

View all pending invitations on your Members page:

- **Pending** - Invitation sent, waiting for response
- **Accepted** - User accepted and joined the group
- **Expired** - Invitation expired after 30 days
- **Declined** - User declined the invitation

### Manage Pending Invitations

For each pending invitation, you can:

1. **Resend** - Send the invitation email again
2. **Cancel** - Revoke the invitation
3. **View details** - See when sent, who sent it, and the message

### Invitation Links

Each invitation has a unique code (UUID format) that provides secure access:

- Unique link: `https://homeschoolhive.co/invite/{invite-code}`
- One-time use only
- Expires after 30 days
- Can't be shared or reused after acceptance

:::tip Managing Many Invitations
- For large-scale invitations (30+ people), use the Member Import feature instead
- Bulk invitations are best for quick, one-off invites
- You can send multiple batches if needed
:::

## Member Directory

Control what members can see about each other:

1. Go to group **Settings**
2. Find **Privacy** or **Directory Settings**
3. Choose what information is visible to members:
   - Names only
   - Names and photos
   - Contact information

## What's Next?

1. **[Create events](/docs/group-leaders/create-events)** - Organize activities for your members
2. **[Send announcements](/docs/group-leaders/announcements)** - Communicate with your group
3. **[Set up payments](/docs/group-leaders/payments-stripe)** - Configure membership fees
