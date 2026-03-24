---
sidebar_position: 14
title: Custom Reports
description: Create, run, and export custom reports to track event signups, emergency contacts, scholarship invoices, and group members.
---

# Custom Reports

Custom reports let you pull structured data from your group into sortable, filterable tables that you can export as CSV or PDF. Use reports to track event attendance, gather emergency contact lists, monitor scholarship invoice status, or review your membership roster.

## Accessing Reports

1. Navigate to your group page
2. Click **Reports** in the group navigation
3. View your list of saved reports, or create a new one

:::info Required Permission
You need the **View Analytics** permission to access reports. Group Owners and Co-Leaders have this by default.
:::

## Report Types

When you create a report, the first step is choosing its type. Each type pulls from a different data source and offers different columns and filters.

### Event Signups

View who signed up for events, including attendee details, payment status, and check-in information.

**Available columns include:**
- Attendee Name, Age, Parent/Guardian, Parent Email
- Event, Event Date, Ticket Type, Ticket Price
- Add-ons, Total Paid, Payment Status, Payment Type
- Checked In, Allergies, Special Needs, Medical Notes
- Registration Date

### Emergency Contacts

Access emergency contact information for event attendees or all group members.

**Available columns include:**
- Attendee Name, Age, Parent/Guardian, Parent Email
- Emergency Contact Name, Emergency Phone
- Allergies, Special Needs, Medical Notes
- Event, Event Date

:::tip Field Day or Event Day Preparation
Create an Emergency Contacts report filtered to a specific event, then export it as a PDF to keep on hand during the event.
:::

### Scholarship Tracking

Track scholarship invoice status, payments received, and pending amounts.

**Available columns include:**
- Invoice Number, Child Name, Parent Name
- Event, Event Date
- Status (pending, submitted, succeeded)
- Total Amount, Provider
- Issued Date, Submitted Date, Received Date

### Group Members

View all group members with their contact information, membership status, and join date.

**Available columns include:**
- Member Name, Email, Phone
- Role, Membership Status, Join Date
- Number of Children, Children Names, Children Details
- Subscription Status, Renewal Date, Membership Rate
- Last Payment, Membership Expires, City, State

## Creating a Report

The report builder walks you through four steps.

### Step 1: Select Type

1. Click **Create Report** from the reports list
2. Choose one of the four report types
3. Click the report type card to proceed

### Step 2: Configure Columns

Select which columns appear in your report and arrange their order.

1. Each report type comes with a set of **default visible columns** (marked with the eye icon)
2. Toggle the **eye icon** next to any column to show or hide it
3. **Drag columns** using the grip handle to reorder them
4. Columns marked **Required** cannot be hidden

:::tip
You do not need to display a column to group by it. Grouping works independently of column visibility.
:::

### Step 3: Set Filters

Narrow down the data returned by your report. Available filters depend on the report type.

**Event Signups, Emergency Contacts, and Scholarship Tracking:**
- **Event** -- Filter to a specific event
- **Date Range** -- Set a start and/or end date
- **Payment Status** -- Filter by pending, succeeded, failed, or refunded (Event Signups only)
- **Payment Type** -- Filter by Stripe, scholarship, or free (Event Signups only)
- **Scholarship Status** -- Filter by pending, submitted, or succeeded (Scholarship Tracking only)

**Group Members:**
- **Membership Status** -- Filter by active, pending, suspended, or expired
- **Role** -- Filter by Owner, Co-Leader, Event Manager, or Member
- **Join Date Range** -- Set start and/or end dates
- **Subscription Status** -- Filter by active, past due, canceled, unpaid, or trialing

You can also configure **Group By** at this step to organize results into collapsible groups (for example, group Event Signups by event name or by payment status). You can select one or two levels of grouping for a hierarchical view.

### Step 4: Save

1. Enter a **Report Name** (required)
2. Add an optional **Description** for your own reference
3. Toggle **Share with group leaders** if you want other leaders to see and run this report
4. Click **Save Report**

After saving, you are taken to the report viewer where you can run it immediately.

## Running a Report

1. Open a saved report from the reports list (click **Run Report** on the card)
2. On the report viewer page, click the **Run Report** button
3. The report queries your group's data and displays results in a table

### Sorting

Click any column header to sort the table by that column. Click again to reverse the sort direction.

### Filter Overrides

When viewing a report, you can temporarily adjust filters without changing the saved configuration:

1. Click **Filters** to expand the filter panel
2. Change the event selection, date range, or other filters
3. Click **Run Report** again to refresh results with the new filters

These overrides are temporary and do not modify the saved report.

### Grouped View vs. Detailed View

If your report has a **Group By** column configured, results default to a **Grouped view**:

- Data is organized into collapsible sections by the grouped column
- Each section shows a count and aggregated totals for currency columns (e.g., total amount paid)
- Click a group header to expand it and see individual rows
- Switch to **Detailed view** using the view toggle to see all rows in a flat table

### Pagination

Reports display 50 rows per page. Use the pagination controls at the bottom of the table to navigate between pages. The total record count is shown after you run the report.

## Editing a Report

1. From the reports list, click the **three-dot menu** on any report you created
2. Select **Edit**
3. The report builder opens with your existing configuration pre-filled
4. Modify the columns, filters, name, description, or sharing setting
5. Click **Save Report** to update

:::note
Only the person who created a report can edit it, unless you are the group Owner.
:::

## Exporting Reports

After running a report, you can export the results in two formats:

- **CSV** -- A spreadsheet-compatible file you can open in Excel, Google Sheets, or other tools
- **PDF** -- A formatted document suitable for printing or sharing

Click the **CSV** or **PDF** button in the report header to download the file.

:::tip
Export an Emergency Contacts report as a PDF before each event so you have a printed reference available without needing your device.
:::

## Sharing Reports

When you toggle **Share with group leaders** on a report, other users with the View Analytics permission can see and run the report. Shared reports display a "Shared" badge on the report card.

Shared reports can only be edited by the original creator or the group Owner.

## Deleting a Report

1. From the reports list, click the **three-dot menu** on the report
2. Select **Delete**
3. Confirm the deletion in the dialog

Deleted reports cannot be recovered.

## Tips and Best Practices

- **Name reports descriptively** -- Use names like "Fall Semester Signups" or "Field Day Emergency Contacts" so you can quickly find them later
- **Use Group By for summaries** -- Grouping by event name or payment status gives you a quick overview without scrolling through every row
- **Create event-specific reports** -- Filter to a single event for a focused attendance or contact list
- **Export before events** -- Download emergency contacts and attendance lists ahead of time in case you lose internet access at your venue

## Related Guides

- [Analytics and Reporting](/docs/group-leaders/analytics)
- [Managing Events](/docs/group-leaders/manage-events)
- [Scholarship Invoices](/docs/group-leaders/scholarship-invoices)
- [Check-In](/docs/group-leaders/check-in)
