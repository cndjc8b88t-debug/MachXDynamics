---
title: "Support"
permalink: /support/
layout: base.njk
bodyClass: legal
---

# Support

MachXDynamics is made by one independent developer. There is no ticket system and no chat widget. There is one inbox, and it is read.

**{{ site.contactEmail }}**

Write if something crashes, freezes, looks wrong or reads wrong. We answer in English and German, usually within a few days.

## Reporting a problem

These details turn a long search into a short one:

- iPhone model and iOS version
{% if site.aboutScreenLive %}- App version (shown in the app's About screen)
{% endif %}- Which nozzle (sea-level or vacuum bell) and view you were in (for example Mach, Pressure or Schlieren), and roughly where the pressure-ratio slider stood
- A screenshot, if the problem is visual

## FAQ

### Is this CFD?

It solves the compressible flow equations on your device, on a coarse grid and without friction, so it can run live on a phone. That makes it good for seeing mechanisms and bad for design numbers. For those, use a full CFD package.

### What does the badge mean?

Every view carries a short label, for example `2D · inviscid · no chemistry · qualitative`. It states what the model includes and what it leaves out: a two-dimensional flow, no friction, no chemical reactions. "Qualitative" means the picture shows how the flow behaves and which way the trends go. It is not a source of design values.

### Which devices does it run on?

iOS 26 or later, iPhone only. The app runs in landscape.

Tested on iPhone 17 Pro; smoothest on iPhone 15 Pro or newer; on older iPhones settling takes a few minutes.

### Does the app collect any data?

No. It has no account, no analytics and no tracking, and it sends no data to us. (iOS may contact Apple's App Store to confirm how the app was installed.) Details are in the [Privacy Policy](/privacy/).

### Where can I learn more about what I'm seeing?

The app has info pages that explain what the simulation gets right and what it doesn't, with sources for further reading.

## Education

Teaching gas dynamics or propulsion and want to use MachXDynamics in class? Write to {{ site.contactEmail }}.

---

[Privacy Policy](/privacy/) · [Impressum](/impressum/) · [Imprint (English)](/imprint/)
