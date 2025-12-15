---
sidebar_position: 5
title: Import Events
description: Learn how to bulk import events from a CSV file.
---

# Import Events

Import Events lets you create multiple events at once by uploading a CSV file. This is ideal for migrating from another system, planning an entire semester of activities, or setting up many events quickly.

## When to Use Bulk Import

Bulk import is most useful when you have:

- **Many events to create** - Setting up 10+ events is faster with import than creating each manually
- **Events from another system** - Migrating from spreadsheets or another platform
- **Seasonal planning** - Setting up an entire semester or year of activities
- **Recurring schedules** - Creating multiple similar events with different dates

:::tip Event Series vs Bulk Import
For recurring events with the same time and location (like weekly classes), use [Event Series](/docs/group-leaders/event-series) instead. Event Series automatically generates sessions and supports series passes. Use bulk import when your events vary in details or aren't on a regular schedule.
:::

## Accessing Event Import

1. Go to your group page
2. Click the **Events** tab
3. Click **Import Events** in the top right

:::note Required Permissions
Only Group Owners, Co-Leaders, and Event Managers can import events. See [Managing Members](/docs/group-leaders/manage-members) for role details.
:::

## Downloading the CSV Template

To ensure your CSV file has the correct format:

1. On the Import Events page, click **Download Template**
2. The template downloads as `event-import-template.csv`
3. Open it in Excel, Google Sheets, or any spreadsheet program

The template includes:
- Example data for both single events and series
- All required and optional columns
- Comments explaining each field

## CSV Format Requirements

### Required Columns

Every row must include these columns:

| Column | Format | Description |
|--------|--------|-------------|
| `type` | `event` or `series` | Whether this is a single event or recurring series |
| `name` | Text | Event title |
| `start_date` | YYYY-MM-DD | Date of the event (e.g., 2025-03-15) |
| `start_time` | HH:MM | Start time in 24-hour format (e.g., 14:00 for 2 PM) |
| `end_time` | HH:MM | End time in 24-hour format (e.g., 16:30 for 4:30 PM) |

### Optional Columns

Add these columns to configure additional event details:

**Event Details:**
- `description` - Event description (plain text)
- `category` - Category names, comma-separated (e.g., "Arts & Crafts, Academic")
- `image_url` - URL to an image (will be downloaded and attached to event)

**Location Settings:**
- `location_name` - Venue name (e.g., "Community Center")
- `location_address` - Full street address for geocoding (e.g., "123 Main St, Austin, TX 78701")
- `location_type` - `physical`, `virtual`, or `hybrid` (default: physical)
- `virtual_meeting_url` - Zoom/Teams link for virtual or hybrid events

**Visibility & Registration:**
- `visibility` - `public`, `group_members`, or `unlisted` (default: public)
- `show_attendees` - `true` or `false` (default: true)
- `collect_attendee_info` - `true` or `false` (default: false)
- `registration_deadline` - Deadline as YYYY-MM-DD or YYYY-MM-DD HH:MM
- `scholarship_enabled` - `true` or `false` (default: false)
- `no_refunds` - `true` or `false` (default: false)

**Capacity & Pricing:**
- `capacity` - Maximum attendees (number)
- `series_pass_price` - Price for a series pass or single event ticket (e.g., 25.00)
- `drop_in_price` - Per-session price for series (e.g., 5.00)
- `intro_price` - Special price for first session of series (e.g., 3.00)
- `tickets_json` - Advanced: JSON array for custom ticket types

**Series Options (required if type = series):**
- `recurrence` - `daily`, `weekly`, `biweekly`, or `monthly`
- `sessions` - Number of sessions (number)

### Format Examples

**Single Free Event:**
```csv
type,name,start_date,start_time,end_time,location_name,location_address,location_type,visibility
event,Park Day Meetup,2025-03-20,11:00,14:00,Zilker Park,2100 Barton Springs Rd Austin TX,physical,public
```

**Single Paid Event:**
```csv
type,name,start_date,start_time,end_time,location_name,location_address,capacity,series_pass_price,category
event,Science Fair,2025-04-15,10:00,15:00,Community Center,100 Center Blvd Austin TX,100,5,STEM
```

**Weekly Series:**
```csv
type,name,start_date,start_time,end_time,recurrence,sessions,series_pass_price,drop_in_price,location_name,location_address
series,8-Week Art Class,2025-01-15,10:00,12:00,weekly,8,200,30,Art Studio,123 Main St Austin TX
```

**Virtual Event:**
```csv
type,name,start_date,start_time,end_time,location_type,virtual_meeting_url,visibility
event,Online Book Club,2025-03-25,19:00,20:30,virtual,https://zoom.us/j/123456789,group_members
```

### CSV Formatting Tips

- **Headers** - First row must contain column names (case-insensitive)
- **Quotes** - Use double quotes around values containing commas (e.g., "Arts, Academic")
- **Empty values** - Leave cells blank for optional fields you don't need
- **Dates** - Always use YYYY-MM-DD format
- **Times** - Use 24-hour format (14:00, not 2:00 PM)
- **Encoding** - Save as UTF-8 encoding for special characters

## Uploading and Importing

### Upload Your CSV

1. On the Import Events page, either:
   - **Drag and drop** your CSV file onto the upload area
   - Click **Select File** to browse for your CSV
2. The file is validated immediately
3. You'll see a preview of what will be imported

### Review the Preview

The preview shows:

- **Valid** - Number of rows ready to import (green)
- **Errors** - Number of rows with validation errors (red)
- **Warnings** - Number of rows with warnings (yellow)

Each row displays:

- Row number from your CSV
- Status icon (checkmark or X)
- Event/series name and date
- Any errors or warnings for that row

### Handle Validation Results

**If all rows are valid:**
- Review the preview
- Click **Import Events** to proceed

**If there are errors:**
- Review error messages for each row
- Choose one of these options:
  1. Click **Change file** to fix your CSV and re-upload
  2. Check **Skip invalid rows** to import only the valid rows

**If there are warnings:**
- Warnings don't prevent import
- Review them to ensure your data is correct
- Common warnings: dates in the past, very high capacity

:::tip Paid Events Require Stripe
If any row includes pricing (series_pass_price, drop_in_price, etc.), your group must have completed Stripe Connect verification. Free events can be imported without payment setup.
:::

### Confirm and Import

1. Review the preview one final time
2. If you have invalid rows, decide whether to skip them
3. Click **Import [N] Events** where N is the number of events to create
4. Wait while events are created (this may take a few moments)

## Understanding Import Results

After import completes, you'll see a summary:

### Success

If all events were created successfully:

- Green success message
- List of created events with links to view them
- **Import More** button to import another file
- **View Group** button to return to your group

### Partial Success

If some events couldn't be created:

- Yellow warning message
- Count of successfully created events
- List of created events
- Error details for failed rows
- Errors are shown with row numbers

### Common Import Errors

**During validation:**
- Missing required fields (type, name, dates, times)
- Invalid date format (use YYYY-MM-DD)
- Invalid time format (use HH:MM)
- End time before start time
- Series missing recurrence or session count
- Invalid category names (category doesn't exist in your group)

**During import:**
- Group needs Stripe verification for paid events
- Location geocoding failed (address not found)
- Image download failed (invalid URL or timeout)

## Fixing Import Errors

If your import has errors:

1. Note the row numbers with errors
2. Click **Change file**
3. Open your original CSV
4. Fix the errors based on the error messages
5. Save the CSV
6. Upload the corrected file

**Common fixes:**
- Add missing required fields
- Correct date/time formats
- Fix category names to match your group's categories
- Remove pricing for groups without Stripe setup
- Verify location addresses are complete

## Advanced Features

### Multiple Categories

Assign multiple categories to an event:

```csv
category
"Arts & Crafts, Academic, Social"
```

Categories are matched to your group's event categories (case-insensitive).

### Image URLs

Provide a URL to an event image:

```csv
image_url
https://example.com/event-photo.jpg
```

The import process will:
1. Download the image
2. Upload it to Homeschool Hive storage
3. Attach it to the event

Requirements:
- Must be a valid HTTP/HTTPS URL
- Image format: JPG, PNG, GIF, or WebP
- Maximum file size: 5MB
- Download must complete within 10 seconds

### Custom Tickets (Advanced)

For complex ticket configurations, use `tickets_json`:

```csv
tickets_json
"[{""name"":""Adult"",""price"":15,""capacity"":50},{""name"":""Child"",""price"":10,""capacity"":50}]"
```

Each ticket object can include:
- `name` - Ticket name (required)
- `price` - Ticket price (required)
- `capacity` - Maximum quantity
- `description` - Ticket description
- `is_addon` - true for add-on items

:::warning JSON Formatting
JSON in CSV requires careful escaping. For complex tickets, it's often easier to create the event manually or import basic events and add tickets afterward.
:::

### Location Geocoding

When you provide a `location_address`, the import process:

1. Geocodes the address using Mapbox
2. Creates or reuses a location record
3. Associates it with the event
4. Stores coordinates for map display

For best results:
- Include full addresses: "123 Main St, Austin, TX 78701"
- US addresses only
- Verify addresses exist (geocoding failures are logged but don't stop import)

## After Importing

### Review Imported Events

1. Go to your group's Events page
2. Find your newly imported events
3. Click on each to review details
4. Make any final adjustments

### What to Check

- Event images loaded correctly
- Categories assigned properly
- Locations geocoded accurately
- Ticket prices are correct
- Registration settings match your intent

### Make Adjustments

To edit an imported event:

1. Open the event page
2. Click **Edit Event**
3. Make changes
4. Click **Save Changes**

See [Create Events](/docs/group-leaders/create-events) for editing details.

## Tips for Successful Imports

### Planning Your Import

- **Start small** - Test with 2-3 events first
- **Review the template** - Understand all available fields
- **Match your categories** - Verify category names match your group's categories
- **Check dates** - Ensure dates are in the future and formatted correctly

### Preparing Your CSV

- **Use the template** - Start from the downloaded template
- **Keep it simple** - Only include columns you need
- **Test addresses** - Verify locations geocode correctly
- **Remove duplicates** - Check for duplicate event names/dates

### After Import

- **Review immediately** - Check all events after import
- **Test registration** - Try registering for a test event
- **Communicate** - Let members know about new events
- **Monitor** - Watch for questions about imported events

## Troubleshooting

### Import Button Disabled

**Problem:** Can't click the Import button

**Solutions:**
- Ensure at least one row is valid
- If there are errors, check **Skip invalid rows**
- Verify CSV uploaded successfully

### All Rows Show Errors

**Problem:** Every row has validation errors

**Solutions:**
- Check CSV has header row with column names
- Verify date format is YYYY-MM-DD
- Verify time format is HH:MM (24-hour)
- Ensure required columns are present

### Events Created But Missing Details

**Problem:** Events imported but some information is missing

**Causes:**
- Optional columns left blank
- Geocoding failed for addresses
- Image download failed or timed out
- Categories didn't match group's categories

**Solutions:**
- Edit events to add missing details
- Manually add images
- Verify category names
- Re-enter locations

### Stripe Verification Error

**Problem:** Can't import paid events

**Solution:**
- Complete Stripe Connect setup in group settings
- Or remove all pricing from CSV to create free events
- See [Payments & Stripe](/docs/group-leaders/payments-stripe)

## What's Next?

1. **[Create Events](/docs/group-leaders/create-events)** - Learn about all event configuration options
2. **[Event Series](/docs/group-leaders/event-series)** - Set up recurring events with series passes
3. **[Manage Events](/docs/group-leaders/manage-events)** - Handle RSVPs and attendance
