---
sidebar_position: 5
title: Members, roles, and messaging
description: Approve members, assign roles, and reach the people in your organization.
---
<!-- SOURCE: docs/group-leaders/manage-members.md -->
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

Famlo uses four roles with different permissions:

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

Learn more in [Custom Roles](/docs/organizations/members-and-roles).
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

- Unique link: `https://famlo.co/invite/{invite-code}`
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

1. **[Create events](/docs/organizations/activities)** - Organize activities for your members
2. **[Send announcements](/docs/organizations/members-and-roles)** - Communicate with your group
3. **[Set up payments](/docs/organizations/getting-paid)** - Configure membership fees


<!-- MERGED FROM: docs/group-leaders/announcements.md — Phase 4: fold into the sections above, do not leave as an appendix -->

## Announcements

Keep your group informed with announcements. This guide covers how to send updates, post to your group feed, and communicate effectively with members.

### Types of Communication

Famlo offers several ways to communicate with your group:

| Type | Best For | Reaches |
|------|----------|---------|
| **Announcements** | Important group-wide updates | All members |
| **Feed Posts** | Casual updates and discussions | Members viewing the feed |
| **Event Updates** | Event-specific information | Event attendees |
| **Direct Messages** | Individual communication | Specific members |

### Posting Announcements

#### Create an Announcement

1. Go to your group page
2. Click **Announcements** or **Post Announcement**
3. Write your announcement:
   - Add a title (optional)
   - Write your message
   - Add links or formatting as needed
4. Choose delivery options
5. Click **Post**

#### Delivery Options

Choose how members receive your announcement:

**In-App Notification**
- Appears in members' notification feed
- Quick and unobtrusive
- Good for routine updates

**Email Notification**
- Sent to members' email addresses
- Higher visibility
- Best for important announcements

**Both**
- Maximum reach
- Members receive in-app and email
- Use for critical information

#### Schedule Announcements

Post announcements at a specific time:

1. Write your announcement
2. Click **Schedule** instead of **Post**
3. Select date and time
4. Confirm scheduling

Good for:
- Coordinating with events
- Posting during peak engagement times
- Preparing content in advance

### Group Feed

#### What is the Group Feed?

The group feed is a social space where:
- Leaders post updates
- Members can comment and engage
- Discussions happen naturally
- Information is archived and searchable

#### Post to the Feed

1. Go to your group page
2. Find the post composer
3. Write your post
4. Add images or links (optional)
5. Click **Post**

#### Feed vs. Announcements

| Feed Posts | Announcements |
|------------|---------------|
| Casual updates | Important notices |
| Members must visit to see | Pushed to members |
| Open discussion | One-way communication |
| Less formal | More formal |

### Event-Specific Communication

#### Send Event Updates

Communicate with attendees of a specific event:

1. Go to the event page
2. Click **Send Update** or **Message Attendees**
3. Write your message
4. Choose notification method
5. Send

**When to use:**
- Schedule changes
- Location updates
- Day-of reminders
- Weather-related notices
- Cancellations

#### Update All vs. Specific Attendees

Choose who receives your update:

- **All attendees** - Everyone registered
- **Confirmed only** - Those who've paid/confirmed
- **Custom selection** - Choose specific people

### Writing Effective Announcements

#### Best Practices

**Be Clear and Concise**
- Lead with the most important information
- Use short paragraphs and bullet points
- Include relevant dates, times, and locations
- Add links to more details

**Include Action Items**
- Tell members what they need to do
- Set clear deadlines
- Make it easy to take action

**Example:**
```
Registration Now Open for Spring Field Trips!

Our spring schedule is finalized with 8 exciting events:
- Zoo Visit (March 15)
- Nature Center (March 22)
- Science Museum (April 5)
- And more!

Action needed: Register by March 1 to secure your spot.

View all events and register: [link]

Questions? Reply to this message or post in the group.
```

#### When to Announce

**Announce these:**
- New events available
- Schedule or location changes
- Registration deadlines
- Important group news
- Policy updates
- Seasonal schedules

**Don't over-announce:**
- Avoid sending too many announcements
- Batch smaller updates when possible
- Reserve email for truly important items
- Members may tune out if overwhelmed

### Managing Comments

#### Enable or Disable Comments

Control whether members can respond:

1. When creating a post, look for comment settings
2. Toggle comments on or off
3. Disable for one-way announcements
4. Enable for discussions

#### Moderate Comments

If you allow comments:

- Monitor for inappropriate content
- Respond to questions
- Delete problematic comments if needed
- Pin helpful replies

### Announcement History

#### View Past Announcements

1. Go to your group page
2. Click **Announcements** or scroll the feed
3. See all past communications
4. Search or filter to find specific posts

#### Edit or Delete

For posted announcements:

1. Find the announcement
2. Click the options menu
3. Select **Edit** or **Delete**
4. Make changes or confirm deletion

:::note Editing Sent Announcements
If you edit an announcement that was already emailed, the email won't update. Consider posting a correction instead.
:::

### Member Communication Preferences

#### Respecting Preferences

Members control their notification settings. Some may:
- Disable email notifications
- Only receive in-app notifications
- Limit which types of updates they get

#### Encouraging Engagement

Remind members to:
- Check their notification settings
- Enable email for important updates
- Follow the group for feed updates

### Multi-Channel Strategy

For maximum engagement, use multiple channels:

1. **Post to feed** for general visibility
2. **Send in-app notification** for timely awareness
3. **Email** for critical must-see information

#### Example: New Event Launch

1. Create the event
2. Post to feed: "Excited to announce our spring zoo trip!"
3. Send announcement email: Full details, registration link
4. Follow up in feed: Answer questions, build excitement

### Troubleshooting

#### Members Not Receiving Announcements

Common causes:
- Email in spam folder
- Notifications disabled in settings
- Email address incorrect
- Haven't logged in recently

Solutions:
- Remind members to check spam
- Encourage updating notification settings
- Use multiple communication channels

#### Announcement Not Showing

If your post doesn't appear:
- Refresh the page
- Check if it was scheduled for later
- Verify it wasn't accidentally deleted
- Try posting again

### What's Next?

1. **[View analytics](/docs/organizations/insights)** - Track engagement with your posts
2. **[Manage members](/docs/organizations/members-and-roles)** - Handle member questions
3. **[Create events](/docs/organizations/activities)** - Organize activities to announce
