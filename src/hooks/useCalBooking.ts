import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

export const useCalBooking = () => {
  const [isCalLoaded, setIsCalLoaded] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: "discovery-call" });
        cal("ui", { 
          hideEventTypeDetails: false, 
          layout: "month_view",
          theme: "dark"
        });
        setIsCalLoaded(true);
      } catch (error) {
        console.error("Failed to load Cal.com API:", error);
      }
    })();
  }, []);

  return {
    isCalLoaded
  };
};
