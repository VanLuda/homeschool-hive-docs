---
sidebar_position: 3
title: Scheduling activities
description: Create one-off and repeating activities, and manage them once they are live.
---
<!-- SOURCE: docs/group-leaders/create-events.md -->
# Create Events

Events are at the heart of your homeschool group. This guide walks you through creating events, from simple free activities to complex paid events with multiple ticket types.

:::tip Recurring Events with Event Series
For recurring events like weekly classes, monthly workshops, or ongoing programs, use [Event Series](/docs/organizations/activities) to create multiple sessions at once. Series passes let families purchase all sessions together at a discounted rate.
:::

## Start Creating an Event

1. Go to your group page
2. Click **Create Event**
3. Follow the event creation wizard

## Basic Event Information

### Event Title

Choose a clear, descriptive title:
- "Fall Nature Walk at Smith Park"
- "Weekly Art Class - Session 3"
- "Zoo Field Trip"

### Date and Time

Set when your event takes place:

1. **Start Date** - When the event begins
2. **Start Time** - What time it starts
3. **End Time** - When the event ends (optional)
4. **Duration** - How long the event lasts

:::tip Multi-Day Events
For events spanning multiple days, create separate events for each day or use the description to explain the full schedule.
:::

### Event Type

Choose how attendees will participate:

**In-Person Event**
- Set a physical location
- Address appears on the event page
- Map shows the meeting point

**Virtual Event**
- Add a meeting URL (Zoom, Google Meet, etc.)
- Link is shared with registered attendees
- No physical location needed

**Hybrid Event**
- Both in-person and virtual attendance options
- Set both location and virtual meeting details

### Location (In-Person Events)

1. Start typing the address
2. Select from autocomplete suggestions
3. Adjust the map pin if needed
4. Add location notes (parking instructions, entrance to use, etc.)

## Event Description

Write a detailed description that covers:

- What will happen at the event
- What attendees should bring
- What to expect
- Any prerequisites or requirements
- Age recommendations

Use formatting to make it easy to read:
- Bullet points for lists
- Bold for important information
- Clear paragraphs for different topics

## Event Image

Upload an image for your event:

- Recommended size: 1200 x 630 pixels
- Formats: JPG, PNG
- Choose an image that represents the activity

A good image helps your event stand out and gives attendees a preview of what to expect.

## Categories

Select categories that describe your event:

- Field trips
- Classes/workshops
- Social events
- Sports and recreation
- Arts and music
- STEM activities
- Nature and outdoors

Categories help members find relevant events.

## Accessibility Features

Help families find events that meet their needs by marking accessibility options:

1. In the event creation form, find the **Accessibility** section
2. Toggle on any features that apply:
   - **Wheelchair Accessible** - The venue is accessible for wheelchair users
   - **Sensory-Friendly** - The environment accommodates sensory sensitivities (reduced noise, lighting adjustments, quiet spaces)
   - **Neurodiversity-Friendly** - The activity is designed to be inclusive for neurodiverse participants

:::tip Be Specific
Use the event description to provide additional accessibility details, such as the availability of quiet rooms, whether noise-canceling headphones are allowed, or specific accommodations available.
:::

## Event Discussion

Enable a discussion section on your event page where attendees can ask questions and communicate:

- Discussions are enabled by default on events
- Attendees and group members can post comments and questions
- As a leader, you can moderate the discussion and pin important information
- Discussions help attendees coordinate (e.g., carpooling, what to bring)

## Capacity Settings

### Set Event Capacity

Control how many people can attend:

1. **Unlimited** - No cap on attendance
2. **Limited** - Set a maximum number of attendees

## Registration Settings

### Registration Deadline

Set when registration closes:

- **No deadline** - Registration open until event starts
- **Custom deadline** - Set a specific date/time
- Usually 24-48 hours before the event

### Attendee Information

Choose what information to collect:

- **Names** - Always required
- **Ages** - Request attendee ages
- **Allergies** - Collect allergy information
- **Emergency Contact** - Request emergency contact details
- **Custom Questions** - Add your own questions

## Ticket Configuration

### Free Events

For free events:
- No ticket setup needed
- Members simply RSVP
- You can still limit capacity

### Paid Events

For events with fees:

1. Click **Add Ticket Type**
2. Configure each ticket:
   - **Name** - "Adult Ticket", "Child Ticket", etc.
   - **Price** - Cost per ticket
   - **Quantity Available** - How many of this type
   - **Description** - What's included

### Multiple Ticket Types

Create different tickets for different attendees:

**Example:**
- Adult Ticket - $15
- Child (5-12) - $10
- Child (under 5) - Free

### Add-Ons

Offer optional extras:

**Per-Attendee Add-Ons**
- Purchased for each person
- Example: Lunch ($8), Materials ($5)

**Per-Order Add-Ons**
- Purchased once per registration
- Example: Parking Pass ($5), Family Photo ($10)

To add an add-on:
1. Click **Add Add-On**
2. Enter name, price, and description
3. Choose per-attendee or per-order
4. Set quantity limits if needed

## Scholarship Eligibility

If your group supports scholarship payments:

1. Toggle **Scholarship Eligible** on
2. Specify which ticket types qualify
3. Parents can choose scholarship payment at checkout

See [Scholarship Invoices](/docs/organizations/scholarships) for more details.

## Event Terms

Require attendees to accept custom terms and conditions before registering for your event. This is useful for liability waivers, codes of conduct, photo release agreements, and other acknowledgments.

### When to Use Event Terms

Consider adding event terms for:

- **Physical activities** - Waivers for field trips, sports, climbing, swimming
- **Photo releases** - Permission to photograph children at events
- **Behavioral expectations** - Code of conduct for overnight trips or intensive programs
- **Allergy acknowledgments** - Confirmation that parents have reviewed allergy policies
- **Equipment responsibilities** - Agreement to care for borrowed materials

### Configuring Event Terms

1. Find the **Terms & Acknowledgments** card in the event creation form
2. Toggle **Require Terms Acceptance** on
3. Add individual term items that attendees must accept

### Adding Term Items

Each term item is a statement attendees must acknowledge:

1. Click **Add Item**
2. Enter the term text (e.g., "I agree to the liability waiver and release")
3. Toggle **Required** on/off
4. Add more items as needed

**Required vs Optional:**
- **Required terms** - Attendees must check these to proceed (marked with *)
- **Optional terms** - Attendees can skip these checkboxes

### Using Templates

Save time by loading terms from templates you've created:

1. Click **Load from Template**
2. Select a template from the dropdown
3. The template items are copied to your event
4. Customize as needed for this specific event

To create templates, go to your group settings and find **Terms Templates** in the sidebar.

### Dynamic Variables

Personalize your terms with variables that auto-fill event details:

| Variable | Replaced With |
|----------|---------------|
| `{group_name}` | Your group's name |
| `{event_name}` | This event's title |
| `{event_date}` | The event date |
| `{organizer_name}` | Event organizer's name |

**Example:**
```
I understand that {event_name} on {event_date} is organized by {group_name}.
```

Becomes:
```
I understand that Zoo Field Trip on Friday, March 15, 2025 is organized by Springfield Homeschoolers.
```

### How Terms Appear to Attendees

During checkout, attendees see your terms on the payment step:

1. Each term appears as a checkbox with your custom text
2. Required terms show a red asterisk (*)
3. Platform terms (Famlo's terms of service) also appear
4. Attendees must accept all required terms before completing registration

### Viewing Acceptance Records

After your event, you can see who accepted terms:

1. Go to your event page
2. Click **Manage Event**
3. Select the **Terms Acceptances** tab
4. View a list of all attendees and their acceptance timestamps

:::note Platform Terms
In addition to your event-specific terms, attendees are also required to accept Famlo's platform terms of service on their first purchase. Platform terms cover payment processing, refunds, and data privacy.
:::

## Publishing Your Event

### Save as Draft

Not ready to publish yet?
- Click **Save Draft**
- Return later to finish and publish
- Find drafts in your group's event management

### Publish Event

When you're ready:
1. Review all event details
2. Click **Publish Event**
3. The event is now visible to members
4. Notifications are sent based on group settings

## After Publishing

### Edit Your Event

To make changes after publishing:

1. Go to the event page
2. Click **Edit Event**
3. Make your changes
4. Click **Save Changes**

:::warning Notify Attendees
If you make significant changes (time, location, cancellation), registered attendees are automatically notified.
:::

### Cancel an Event

If you need to cancel:

1. Go to the event page
2. Click **Cancel Event**
3. Add a cancellation reason
4. Confirm cancellation

All registered attendees will be notified, and refunds will be processed according to your policy.

## Event Templates

For recurring similar events, save time with templates:

1. Create an event with your standard settings
2. When creating a new similar event, select **Copy from Previous Event**
3. Adjust the date and any unique details
4. Publish the new event

:::tip For Recurring Events
If you're running a series of sessions (like weekly classes), consider using [Event Series](/docs/organizations/activities) instead. Event series automatically create all sessions and let families purchase series passes for the entire schedule.
:::

## What's Next?

1. **[Manage event attendance](/docs/organizations/activities)** - Handle RSVPs and registrations
2. **[Configure tickets](/docs/organizations/tickets-and-pricing)** - Advanced ticketing options
3. **[Send announcements](/docs/organizations/members-and-roles)** - Promote your events


<!-- MERGED FROM: docs/group-leaders/event-series.md — Phase 4: fold into the sections above, do not leave as an appendix -->

## Event Series

Event Series let you create recurring activities like weekly classes, monthly workshops, or ongoing programs. Parents can purchase a series pass for all sessions or drop in to individual sessions.

### What Are Event Series?

An event series is a collection of related sessions that repeat on a schedule. Common examples include:

- **Weekly art classes** - 8 sessions over 2 months
- **Monthly book clubs** - 6 sessions across a semester
- **Bi-weekly science labs** - 12 sessions for a term
- **Daily summer camps** - 5 consecutive sessions

With event series, you can:

- Set up all sessions at once with automatic date generation
- Offer series passes for attendees who want all sessions
- Allow drop-in attendance for individual sessions
- Track attendance across the entire series
- Manage capacity for each session

### Creating a Series Event

#### Start with Basic Event Details

1. Go to your group page
2. Click **Create Event**
3. Fill in the event basics:
   - Event title (e.g., "Fall Art Class Series")
   - Start date and time for the first session
   - End time
   - Location or virtual meeting details
   - Description

#### Enable Event Series

1. Find the **Event Series** card
2. Toggle the switch to enable series mode
3. The card expands to show series configuration options

#### Configure the Schedule

**Frequency Options:**

| Frequency | Description |
|-----------|-------------|
| Weekly | Repeats every week |
| Bi-weekly | Repeats every 2 weeks |
| Monthly | Repeats once per month |
| Daily | Repeats every day |

**For weekly events**, you can select which days of the week:

1. Click on the day circles (S, M, T, W, T, F, S)
2. Selected days appear highlighted in blue
3. Sessions will be created for each selected day

#### Set the Number of Sessions

1. Enter the total number of sessions (2-52)
2. Use quick presets: 4, 6, 8, or 12 sessions
3. The preview updates to show all session dates

#### Preview and Adjust Dates

The session preview shows:

- Session number
- Date and time for each session
- Status (included or excluded)

**To exclude specific dates** (holidays, conflicts, etc.):

1. Find the date in the preview list
2. Click the **X** button next to that date
3. The date appears crossed out
4. Sessions are renumbered automatically

:::tip Planning Around Holidays
Before publishing, review your session dates and exclude any that fall on holidays or school breaks. This saves you from editing sessions later.
:::

### Series Passes vs Drop-In Tickets

Event series support two types of attendance:

#### Series Pass

A series pass grants access to all sessions in the series:

- **One purchase** covers the entire series
- Typically offers a **discounted rate** compared to drop-in
- Pass holders are **automatically reserved** for each session
- Ideal for committed attendees who plan to attend every session

#### Drop-In Tickets

Drop-in tickets are for individual session attendance:

- Purchased **per session**
- Usually priced higher per session than the series pass rate
- Subject to **session capacity** after series pass holders
- Great for families who want to try a session or can't commit to the full series

#### Setting Up Ticket Types

When creating tickets for a series event:

1. Click **Add Tickets** or **Manage Tickets**
2. Create a **Series Pass** ticket:
   - Name it clearly (e.g., "Full Series Pass - 8 Sessions")
   - Set the total price for all sessions
   - Optionally limit quantity
   - Check **Series Pass** option
3. Create **Drop-In** tickets:
   - Name each ticket type (e.g., "Single Session - Adult")
   - Set the per-session price
   - These tickets are available for individual sessions

:::note Pricing Strategy
Many groups price the series pass at a 10-20% discount compared to buying all sessions individually. For example, if drop-in is $15/session for 8 sessions ($120 total), the series pass might be $99.
:::

### Managing Series Sessions

After creating a series event, you can manage individual sessions.

#### Access Series Management

1. Go to your series event page
2. Click **Manage Series** or find it in the event menu
3. View the series management dashboard

#### Series Overview

The dashboard shows:

- **Total Sessions** - Number of sessions in the series
- **Upcoming** - Sessions that haven't happened yet
- **Series Passes Sold** - Number of pass holders
- **Passes Available** - Remaining series pass capacity

#### View Session Details

Each session card displays:

- Session number and name
- Date and time
- Attendance count
- Status (Upcoming, Completed, or Cancelled)

Click on a session to expand and see:

- Series pass reservations
- Drop-in tickets sold
- Available spots
- Session capacity

#### Edit a Session

To modify an individual session:

1. Find the session in the list
2. Click the **Edit** (pencil) icon
3. Update session details:
   - Session name
   - Date and time
   - Description/notes
   - Capacity override
4. Click **Save**

:::warning Notify Attendees
When you change a session's date or time, registered attendees receive a notification about the change.
:::

#### Cancel a Session

If you need to cancel a specific session:

1. Find the session in the list
2. Click the **Cancel** (trash) icon
3. Confirm the cancellation
4. Attendees are notified automatically

Cancelled sessions:

- Appear with a "Cancelled" badge
- Are moved to the "Past & Cancelled" section
- Don't affect other sessions in the series

#### Add a Session

To add an extra session to an existing series:

1. Click **Add Session** in the series management
2. Set the date, time, and details
3. The new session is added to the series

### Editing Series Events

#### Edit the Parent Event

To update details that apply to all sessions:

1. Go to the series event page
2. Click **Edit Event**
3. Modify the event details
4. Changes apply to the series as a whole

#### What You Can Change

| Setting | Affects |
|---------|---------|
| Title | All sessions |
| Description | All sessions |
| Location | All sessions |
| Image | All sessions |
| Ticket prices | Future purchases only |
| Capacity | All sessions (unless overridden) |

#### What Requires Individual Session Edits

- Session-specific dates/times
- Session-specific descriptions
- Per-session capacity overrides

### Series Pass Check-In

Track attendance for series pass holders across all sessions.

#### How Check-In Works

1. Series pass holders are reserved for each session
2. At each session, mark them as checked in
3. Track their attendance across the series
4. See who attended which sessions

For detailed check-in instructions, see [Check-In & Attendance](/docs/organizations/attendance).

### Best Practices

#### Planning Your Series

- **Set realistic session counts** - Start with 4-8 sessions if it's your first series
- **Build in buffer dates** - Exclude potential conflict dates upfront
- **Consider your audience** - Weekly works for committed groups; bi-weekly gives more flexibility

#### Pricing Strategy

- **Value the series pass** - Make it clearly worthwhile to commit
- **Price drop-ins fairly** - Not so high they discourage attendance, not so low they undercut the pass
- **Consider intro sessions** - Some groups offer the first session at a special rate

#### Communication

- **Clarify expectations** - Explain what the series pass includes
- **Send reminders** - Use session reminders to keep attendance high
- **Provide session recaps** - Help pass holders who miss a session stay caught up

### What's Next?

1. **[Check-In & Attendance](/docs/organizations/attendance)** - Track attendance at your series sessions
2. **[Tickets & Pricing](/docs/organizations/tickets-and-pricing)** - Advanced ticketing options
3. **[Send Announcements](/docs/organizations/members-and-roles)** - Keep series attendees informed


<!-- MERGED FROM: docs/group-leaders/manage-events.md — Phase 4: fold into the sections above, do not leave as an appendix -->

## Manage Events

Once your event is published, you'll need to manage registrations, communicate with attendees, and handle any issues. This guide covers event management from start to finish.

### Access Event Management

1. Go to your group page
2. Click **Events** or navigate to the specific event
3. Click **Manage Event** or access the event dashboard

### View Registrations

#### Attendee List

See who's registered for your event:

1. Go to the event page
2. Click **Attendees** or **View Registrations**
3. See the complete list of registered attendees

The list shows:
- Attendee names
- Registration date
- Ticket type
- Payment status
- Contact information

#### Export Attendee List

Download your attendee list:

1. Click **Export** or **Download CSV**
2. Choose what to include:
   - Names and contact info
   - Ticket details
   - Custom question responses
   - Allergy information
3. Open in Excel or Google Sheets

:::tip Day-of-Event Use
Export your attendee list before the event to have a check-in sheet or for emergency contact information.
:::

### Manage RSVPs

#### View RSVP Status

Each attendee has a status:

| Status | Meaning |
|--------|---------|
| **Confirmed** | Registered and paid (if applicable) |
| **Pending** | Started registration but not completed |
| **Cancelled** | Cancelled their registration |

#### Manually Add Attendees

Add someone who needs to be registered offline:

1. Go to **Manage Event** > **Add Attendee**
2. Enter their information
3. Select ticket type
4. Mark payment as collected (if applicable)
5. Click **Add**

#### Cancel a Registration

If an attendee needs to be removed:

1. Find them in the attendee list
2. Click **Cancel Registration**
3. Choose refund option (for paid events):
   - Full refund
   - Partial refund
   - No refund
4. Add a note explaining the cancellation
5. Confirm

### Capacity Management

#### Adjust Capacity

If you need to change event capacity:

1. Go to **Edit Event**
2. Update the capacity number
3. Save changes

:::note Increasing Capacity
If you increase capacity, members who have favorited the event will be notified about available spots.
:::

#### Close Registration Early

To stop accepting registrations before the event:

1. Go to **Edit Event**
2. Set **Registration Deadline** to now
3. Or toggle **Registration Closed**

### Communicate with Attendees

#### Send Event Updates

Notify all attendees about changes:

1. Go to **Manage Event**
2. Click **Send Update** or **Message Attendees**
3. Write your message
4. Choose notification method (email, in-app, both)
5. Send

**When to send updates:**
- Schedule or location changes
- Important reminders
- Weather-related updates
- Last-minute information

#### Send Reminders

Send reminder notifications:

1. Go to **Manage Event**
2. Click **Send Reminder**
3. Customize the reminder message
4. Choose when to send (now or scheduled)

### Managing Series Events

If you've created an event series, you'll see additional management options.

#### Series Events in Event List

Series events appear with a special indicator:

- **Parent event** - Shows the series name with a recurring icon
- Listed as a single entry in your events list
- Displays total number of sessions

#### Access Series Management Dashboard

To manage all sessions in a series:

1. Go to the series event page
2. Click **Manage Series** or find it in the event menu
3. View the series dashboard with all sessions

The dashboard provides:

- Overview of series pass sales
- List of all sessions with attendance counts
- Individual session management options
- Capacity tracking across sessions

For complete details on managing series events, see [Event Series](/docs/organizations/activities).

### Attendance Tracking

Track who arrives at your events and view attendance reports.

#### Check-In Feature

Famlo provides a dedicated check-in system for tracking attendance:

1. Go to **Manage Event** > **Check-In**
2. View the complete list of registered attendees
3. Mark attendees as they arrive
4. See real-time attendance statistics

**What you can track:**

- Who has checked in
- Who hasn't arrived yet
- No-shows (mark after event)
- Check-in timestamps

**For series events:**

- Series pass holders appear automatically for each session
- Drop-in attendees are listed separately
- Track attendance across all sessions

#### Attendance Reports

Generate reports to analyze attendance:

1. Go to **Manage Event** > **Reports**
2. Click **Attendance Report**
3. Choose format (PDF or CSV)
4. Download or view the report

**Report includes:**

- Complete attendee roster
- Check-in status for each person
- Attendance percentages
- Payment status
- For series: attendance across all sessions

For detailed instructions on using the check-in system, see [Check-In & Attendance](/docs/organizations/attendance).

### Manage Event Categories

Organize your group's events with custom categories:

1. Go to your group page
2. Navigate to **Settings** > **Categories** or **Categories** in the sidebar
3. View, create, edit, or delete categories

#### Create a Category

1. Click **Add Category**
2. Enter a category name (e.g., "Field Trips", "Art Classes", "Park Days")
3. Optionally set an age range for the category
4. Save the category

#### Using Categories

- When creating events, assign one or more categories
- Members can filter your group's events by category
- Categories help families quickly find events relevant to their interests

### Event Day

#### Handle Walk-Ins

If someone wants to attend who isn't registered:

1. Check if there's available capacity
2. Use **Add Attendee** to register them on the spot
3. Collect payment if required
4. Add them to the attendee list

### After the Event

#### View Event Summary

After your event concludes:

1. Go to the event page
2. View the summary:
   - Total registrations
   - Actual attendance
   - Revenue collected

#### Request Feedback

Get feedback from attendees:

1. Go to **Manage Event**
2. Click **Request Feedback**
3. Attendees receive a survey request
4. View responses in your dashboard

#### Copy Event for Next Time

If you're running this event again:

1. Go to the event page
2. Click **Copy Event** or **Duplicate**
3. Update the date and details
4. Publish the new event

:::tip Consider Using Event Series
If you're running the same event multiple times on a regular schedule, consider creating an [Event Series](/docs/organizations/activities) instead of duplicating individual events. Series events make it easier to manage recurring activities.
:::

### Troubleshooting

#### Attendee Can't Register

Common causes:
- Event is at capacity
- Registration deadline passed
- Payment method issues
- Not a group member (for members-only events)

#### Payment Not Received

If payment shows as pending:

1. Check with the attendee about their payment method
2. Review any error messages in the transaction
3. The attendee may need to retry payment
4. Contact support for unresolved issues

#### Need to Issue Refunds

See [Payments](/docs/organizations/getting-paid) for refund procedures.

### What's Next?

1. **[Event Series](/docs/organizations/activities)** - Create recurring events with series passes
2. **[Check-In & Attendance](/docs/organizations/attendance)** - Track attendance at your events
3. **[Configure tickets](/docs/organizations/tickets-and-pricing)** - Advanced pricing options
4. **[Generate scholarship invoices](/docs/organizations/scholarships)** - For scholarship families
5. **[View analytics](/docs/organizations/insights)** - Track event performance
