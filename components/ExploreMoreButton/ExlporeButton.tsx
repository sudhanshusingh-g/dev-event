"use client";

import Image from "next/image";
import posthog from "posthog-js";
import { productInteractionLogger } from "@/lib/posthog-logger";

const ExploreButton = () => {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={() => {
        posthog.capture("events_explored");
        productInteractionLogger.eventsExplored();
        console.log("CLICK");
      }}
    >
      <a href="#events">
        Explore Events
        <Image
          src="/icons/arrow-down.svg"
          alt="arrow-down"
          width={24}
          height={24}
          style={{ width: "auto", height: "auto" }}
        />
      </a>
    </button>
  );
};

export default ExploreButton;
