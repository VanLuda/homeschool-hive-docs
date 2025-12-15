# Knowledge Base Link Recommendations

This document outlines specific opportunities to add contextual help links throughout the Homeschool Hive web application, connecting users to relevant knowledge base documentation.

**Base URL:** `https://kb.homeschoolhive.com`

---

## Phase 1: Admin Features (High Priority)

| File | Location | Link Text | URL |
|------|----------|-----------|-----|
| `apps/web/src/app/(web)/groups/[groupId]/members/import/ImportMembersClient.tsx` | Page header | "Learn how to import members" | `/docs/group-leaders/manage-members` |
| `apps/web/src/app/(web)/groups/[groupId]/members/import/components/CSVUploader.tsx` | Near file input | "View CSV format requirements" | `/docs/group-leaders/manage-members` |
| `apps/web/src/app/(web)/groups/[groupId]/events/import/ImportClient.tsx` | Page header | "Learn how to import events" | `/docs/group-leaders/import-events` |
| `apps/web/src/app/(web)/groups/[groupId]/(admin)/settings/scholarship/ScholarshipManagementClient.tsx` | Page header | "Learn how scholarship invoices work" | `/docs/group-leaders/scholarship-invoices` |
| `apps/web/src/app/(web)/groups/[groupId]/(admin)/settings/discount/DiscountCodesClient.tsx` | Page header | "Learn how to create discount codes" | `/docs/group-leaders/discount-codes` |
| `apps/web/src/app/(web)/groups/[groupId]/(admin)/settings/roles/RolesSettingsClient.tsx` | Page header | "Learn about roles and permissions" | `/docs/group-leaders/custom-roles` |
| `apps/web/src/app/(web)/groups/[groupId]/(admin)/dashboard/DashboardOverview.tsx` | Dashboard header | "Learn how to use your analytics" | `/docs/group-leaders/analytics` |

---

## Phase 2: Event Management

| File | Location | Link Text | URL |
|------|----------|-----------|-----|
| `apps/web/src/app/(web)/events/create/EventForm.tsx` | Form header | "Get tips for creating great events" | `/docs/group-leaders/create-events` |
| `apps/web/src/components/events/EventDateTime.tsx` | Near series toggle | "Learn how event series work" | `/docs/group-leaders/event-series` |
| `apps/web/src/components/events/EventTicketsManager.tsx` | Ticket section header | "Learn how to set up tickets and pricing" | `/docs/group-leaders/tickets-pricing` |
| `apps/web/src/components/events/PricingRulesFieldArray.tsx` | Pricing section | "Learn about pricing options" | `/docs/group-leaders/tickets-pricing` |
| Event manage page | Registrations tab | "Learn how to manage registrations" | `/docs/group-leaders/manage-events` |
| Check-in page | Page header | "Learn how to check in attendees" | `/docs/group-leaders/check-in` |

---

## Phase 3: Settings & Account

| File | Location | Link Text | URL |
|------|----------|-----------|-----|
| `apps/web/src/app/(web)/groups/[groupId]/(admin)/settings/general/GroupEditClient.tsx` | Privacy section | "Learn about public vs. private groups" | `/docs/group-leaders/create-group` |
| Billing settings | Connect Stripe section | "Learn how to set up Stripe payments" | `/docs/group-leaders/payments-stripe` |
| Membership settings | Pricing section | "Learn how to set membership fees" | `/docs/group-leaders/membership-fees` |
| `apps/web/src/components/account/AccountSettings.tsx` | Profile section | "Learn how to manage your profile" | `/docs/account/profile-settings` |
| `apps/web/src/components/account/AccountSettings.tsx` | Security section | "Learn how to set up two-factor authentication" | `/docs/account/profile-settings#mfa` |
| Family members page | Page header | "Learn how to manage family members" | `/docs/account/family-members` |
| Payment methods page | Page header | "Learn how to manage payment methods" | `/docs/account/payment-methods` |
| Notification settings | Preferences section | "Learn how to customize your notifications" | `/docs/getting-started/notifications` |
| Delete account section | Near delete button | "Learn what happens when you delete your account" | `/docs/account/delete-account` |

---

## Phase 4: Parent-Facing Features

| File | Location | Link Text | URL |
|------|----------|-----------|-----|
| Event discovery page | Search section | "Learn how to find events" | `/docs/parents/find-events` |
| RSVP components | Registration form | "Learn how to RSVP for events" | `/docs/parents/rsvp-events` |
| Join group page | Page header | "Learn how to join groups" | `/docs/parents/group-membership` |
| Calendar page | Calendar header | "Learn how to use your calendar" | `/docs/parents/calendar` |
| Calendar subscription | Export section | "Learn how to sync with your calendar app" | `/docs/parents/calendar#subscription` |
| Scholarship invoices (parent) | Invoices list | "Learn how to use scholarship invoices" | `/docs/parents/scholarship-invoices` |
| Social feed | First-time prompt | "Learn how to use the group feed" | `/docs/parents/social-feed` |
| `apps/web/src/components/groups/MembersClientV1.tsx` | Members header | "Learn how to manage group members" | `/docs/group-leaders/manage-members` |

---

## Onboarding & Auth

| File | Location | Link Text | URL |
|------|----------|-----------|-----|
| `apps/web/src/components/groups/NewGroupChecklist.tsx` | Checklist items | "Learn how to get started" | `/docs/intro` |
| Auth login page | Footer | "Learn how to create your account" | `/docs/getting-started/create-account` |
| MFA page | Info section | "Learn about two-factor authentication" | `/docs/account/profile-settings#mfa` |

---

## Summary

- **Total recommendations:** 35+ link placements
- **Link text pattern:** Action-oriented phrases starting with "Learn how to...", "Learn about...", "Get tips for...", or "View..."
- **Highest impact areas:** Member Import, Event Import, Scholarship Management, Discount Codes
