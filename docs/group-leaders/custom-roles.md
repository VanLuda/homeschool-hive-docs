---
sidebar_position: 12
title: Custom Roles & Permissions
description: Learn how to create custom roles and manage permissions for your group members.
---

# Custom Roles & Permissions

Control what your team members can do in your group with roles and permissions. Assign default roles or create custom roles tailored to your group's needs.

## Understanding Roles & Permissions

Roles define what actions a member can take within your group. Each role has a set of permissions that control access to features like:

- Creating and managing events
- Approving new members
- Viewing analytics
- Managing payments
- Sending announcements

## Default Roles

Every group comes with four built-in system roles:

### Owner

Full administrative control of the group:

- All permissions enabled
- Manage payment settings and payouts
- Transfer or delete the group
- Assign any role to members
- Cannot be deleted or demoted

:::note One Owner Required
Every group must have exactly one Owner. To transfer ownership, contact support.
:::

### Co-Leader

Trusted administrators who help manage the group:

- Create, edit, and cancel events
- Approve or decline member requests
- Manage member roles (except Owner)
- Send group announcements
- View analytics and billing
- Access all group settings

### Event Manager

Focused on event operations:

- Create and edit events
- Set event pricing
- Manage RSVPs
- Take attendance at events
- View event analytics

### Member

Standard group participant:

- View group content and events
- RSVP for events
- See the member directory
- Participate in group activities

## Creating Custom Roles

Create specialized roles that fit your group's unique needs.

### Access Role Settings

1. Go to your group page
2. Click **Settings** in the group menu
3. Select **Roles** from the settings sidebar

### Create a New Role

1. Click **Create Role**
2. Fill in the role details:
   - **Name** - A clear, descriptive name (e.g., "Volunteer Coordinator")
   - **Description** - Explain what this role is for
   - **Color** - Choose a color to identify this role
3. Select the permissions for this role
4. Click **Save**

### Role Color

Choose a color that helps identify the role at a glance. Colors appear:

- Next to the role name in lists
- On member badges
- In the roles management page

## Available Permissions

Permissions are organized into categories:

### General

| Permission | Description |
|------------|-------------|
| View Group | See group content and member directory |
| Edit Group | Modify group settings and details |

### Events

| Permission | Description |
|------------|-------------|
| Create Events | Create new events for the group |
| Edit Events | Modify existing event details |
| Cancel Events | Cancel or delete events |
| Edit Event Pricing | Change ticket prices and add-ons |
| Manage RSVPs | View and manage event registrations |
| Take Attendance | Check in attendees at events |

### Members

| Permission | Description |
|------------|-------------|
| Approve Members | Accept or decline join requests |
| Manage Messages | Send announcements and communications |
| Manage Roles | Assign roles to group members |

### Billing

| Permission | Description |
|------------|-------------|
| Manage Payments | Process refunds and payment issues |
| View Payouts | See payout history and details |
| View Billing | Access billing information |

### Analytics

| Permission | Description |
|------------|-------------|
| View Analytics | See group and event statistics |

## Assigning Roles to Members

### Assign a Role

1. Go to **Members** in your group
2. Find the member you want to update
3. Click on their name or the options menu
4. Select **Change Role**
5. Choose from:
   - Default roles (Member, Event Manager, Co-Leader)
   - Custom roles you've created
6. Click **Save**

### Bulk Role Assignment

For multiple members:

1. Go to **Members**
2. Select members using checkboxes
3. Click **Change Role** from bulk actions
4. Choose the new role
5. Confirm the change

## Editing Custom Roles

### Modify a Role

1. Go to **Settings** > **Roles**
2. Find the role you want to edit
3. Click the **Edit** (pencil) icon
4. Update the name, description, color, or permissions
5. Click **Save**

:::warning Permission Changes
When you change a role's permissions, the changes apply immediately to all members with that role.
:::

### Edit System Roles

System roles (Owner, Co-Leader, Event Manager, Member) can be customized:

- You can modify their permissions
- You cannot delete them
- Only Owners can edit system roles

## Duplicating Roles

Create a new role based on an existing one:

1. Go to **Settings** > **Roles**
2. Find the role to duplicate
3. Click the **Duplicate** (copy) icon
4. Modify the name and permissions as needed
5. Click **Save**

This is useful when:

- Creating similar roles with slight variations
- Starting from a system role's permissions
- Setting up multiple event coordinator roles

## Deleting Custom Roles

### Delete a Role

1. Go to **Settings** > **Roles**
2. Find the custom role to delete
3. Click the **Delete** (trash) icon
4. Confirm the deletion

### Deletion Requirements

You can only delete a role if:

- It's a custom role (not a system role)
- No members are currently assigned to it

If members have the role, reassign them first:

1. Go to **Members**
2. Filter by the role you want to delete
3. Reassign each member to a different role
4. Return to **Roles** and delete

## Best Practices

### Designing Your Role Structure

**Start simple:**
- Use default roles until you have specific needs
- Add custom roles as your group grows

**Common custom roles:**
- **Volunteer Coordinator** - Manage events without billing access
- **Social Media Manager** - Send announcements only
- **Treasurer** - Billing and payments without event management
- **Activity Lead** - Create and manage specific event types

### Permission Guidelines

**Principle of least privilege:**
- Give only the permissions needed for the role
- It's easier to add permissions than remove them

**Sensitive permissions:**
- `Manage Payments` - Can process refunds
- `Manage Roles` - Can change other members' access
- `Edit Group` - Can modify group settings

### Role Documentation

For your team:
- Use clear, descriptive role names
- Add descriptions explaining each role's purpose
- Document any custom roles in your group's procedures

## Troubleshooting

### Member Can't Access a Feature

1. Check their assigned role
2. Verify the role has the required permission
3. If using a custom role, ensure all needed permissions are enabled

### Can't Delete a Role

The role still has members assigned:
1. Go to **Members** and filter by the role
2. Reassign all members to different roles
3. Return to delete the role

### Permission Not Working

1. Have the member log out and log back in
2. Check if the feature requires multiple permissions
3. Verify the role settings saved correctly

## What's Next?

1. **[Manage Members](/docs/group-leaders/manage-members)** - Assign roles to your members
2. **[Create Events](/docs/group-leaders/create-events)** - Set up events for your group
3. **[Analytics](/docs/group-leaders/analytics)** - View group statistics and reports
