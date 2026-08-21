---
sidebar_position: 8
title: Attendance and check-in
description: Take attendance, record drop-off and pick-up, and use the sign-in code.
keywords: [take attendance, check in, drop off, pick up, sign-in QR, roster]
---

# Attendance and check-in

Attendance in Famlo is taken one meeting at a time, on a roster built for a
phone held at a door. It records two different things: whether a child was
there, and who handed them over at each end of the day.

This guide is for the people who run an activity on the day. Only an
organization's **owner**, **co-leader**, and **event manager** can open a roster
or mark anyone. See [Members, roles, and
messaging](/docs/organizations/members-and-roles) for how roles are assigned.

## Open the roster

1. Open the activity from your organization's console.
2. Select **Take attendance**, beside the Roster heading.
3. You land on **Attendance**, a list of every meeting for that activity.
4. Select the meeting you are running.

On the console dashboard, the today widget carries a **Take roll** button that
goes to the same list, so you do not have to find the activity first.

### The meeting list

Each row shows the meeting's label — its own name, or its date — and how many
attendees are expected. On the right sits either a count of how many have been
recorded out of how many are expected, or a green **Done** badge once every
expected attendee has a record.

A recurring series lists its whole term here, one row per meeting. A one-off
activity lists a single row.

If the list is empty you will see "No meetings scheduled yet. Set a date on the
activity to take attendance." Setting the date on the activity is what creates
the meeting.

## Who appears on a roster

A meeting's roster is the active bookings for that meeting, read fresh every
time you open it. Nothing is reserved in advance and nothing is copied forward.

That matters for series. Each meeting carries its own registrations, so a family
who is booked into one date appears on that date's roster and not on the others.
If a registration is cancelled, that child drops off the roster; if a
registration is added an hour before you start, they are there when you open it.

An empty roster reads "No one is registered for this meeting yet."

## Mark who is there

Every child on the roster has the same four buttons, in this order:

- **Present**
- **Late**
- **Excused**
- **Absent**

Select one. The button you chose stays highlighted, and the count in the header
updates to "N / M present". **Present** and **Late** both count toward that
number; **Excused** and **Absent** do not.

Only one status applies at a time. To correct a mistake, select the right one —
it replaces what was there. There is no undo control, and no "no show" status.

The header also carries a note that allergies, special needs, and medical notes
are shown for the attendees registered here. Those appear as badges under each
name, so you can see them without leaving the roster.

## Drop-off and pick-up

Custody is recorded separately from attendance, and separately at each end. This
is the part of the roster that answers "who has this child now".

Under each child's status buttons sit two panels:

1. **Drop off** — select it when the child arrives. The panel is replaced by
   "Dropped off" and the time.
2. **Pick up** — select it when the child leaves. The panel is replaced by
   "Picked up" and the time.

Each of the two records the time it happened and the person who recorded it.
They are stored as two separate events, not as one presence flag, so a morning
hand-over and an afternoon collection are both answerable afterwards.

**Pick up** stays unavailable until a drop-off has been recorded. Recording a
drop-off for a child you had marked **Absent** lifts them to **Present**,
because they are plainly here; an explicit **Late** or **Excused** is left as you
set it.

Once a time is recorded it stays. The roster shows it as text rather than a
button, so there is nothing to clear or re-tap by accident.

## Let parents sign their own children in

Every meeting has a printable sign-in code. Parents scan it and sign their own
children in and out, which keeps the queue at the door moving while custody is
still recorded properly.

1. On the roster, select **Show sign-in QR**.
2. The **Scan to sign in** page shows the code for that meeting, with the
   activity title and the meeting label under it.
3. Select **Print this code** to put it on paper, or leave it on screen at the
   door.

The instruction printed under the code reads: "Parents: scan with your phone
camera, sign in to Famlo if asked, then tap to drop off or pick up your
children."

What a parent gets is a page listing only their own children who hold an active
booking for that meeting. Each row shows "Not signed in yet", "Dropped off" with
a time, or "Picked up" with a time, and a single button — **Drop off** or **Pick
up** — under it. Once both are recorded the row reads "All done for today".

A parent can only ever sign in a child in their own family who is booked into
that meeting. **Present**, **Late**, **Excused**, and **Absent** stay with your
staff; a parent cannot set them. A parent's drop-off records their child as
present, and your roster updates to match.

The code is tied to one meeting. Use that meeting's code rather than reprinting
an old one.

## Reminders

On the day of a meeting, everyone who organizes the activity gets an in-app
reminder while the roster is still incomplete. It stops once every expected
attendee has a record, so finishing the roster is what ends the nudging.

## There is no attendance export

:::warning
Famlo has no attendance export. There is no CSV, no PDF, no printable roster
report, and no attendance report of any kind — for a single activity or for a
series. Attendance is readable on the roster inside Famlo and nowhere else.

If you or your families need attendance records for a state filing, keep your
own record alongside. Do not plan a reporting requirement around an export that
does not exist.
:::

The roster also has no search box, no status filter, and no progress bar. It is
a plain list of the children booked into one meeting.

## Troubleshooting

**I cannot find Take attendance.** The control sits on the activity page beside
the Roster heading, and only owners, co-leaders, and event managers see it. A
member manager or billing manager cannot take attendance.

**A child I expected is not on the roster.** The roster is that meeting's active
bookings. Check the family completed registration, that payment went through for
a paid activity, and that they booked this date rather than another in the
series.

**The list says no meetings are scheduled.** The activity has no date set. Add
one on the activity, then reopen **Take attendance**.

**Pick up will not respond.** It stays unavailable until a drop-off is recorded
for that child. Record the drop-off first.

**I marked the wrong child present.** Select the correct status on that child's
row — it replaces the old one. There is no undo button.

**I recorded a drop-off in error.** The time cannot be cleared from the roster.
Note the correction outside Famlo and carry on.

**A parent says the code will not work.** They need to be signed in to Famlo,
and they need a child with an active booking for that meeting. A parent with
nobody registered is sent back to the activity list.

## What's next

- [Scheduling activities](/docs/organizations/activities) — set the dates that
  create the meetings.
- [Members, roles, and messaging](/docs/organizations/members-and-roles) — who
  can open a roster.
- [Insights](/docs/organizations/insights) — what families near you are looking
  for.
