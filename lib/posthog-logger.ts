"use client";

import posthog from "posthog-js";

export const productInteractionLogger = {
  eventsExplored() {
    posthog.logger.info("events explored", {
      interaction: "explore_events_cta",
    });
  },
  eventSelected(eventSlug: string) {
    posthog.logger.info("featured event selected", {
      event_slug: eventSlug,
      interaction: "featured_event_card",
    });
  },
};
