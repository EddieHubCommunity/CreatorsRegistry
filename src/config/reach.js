export default function reach() {
  const data = {
    nano: {
      value: "nano",
      name: "Starter",
      group: "< 1k",
    },
    micro: {
      value: "micro",
      name: "Niche",
      group: "1k - 10k",
    },
    mini: {
      value: "mini",
      name: "Growing",
      group: "10k - 30k",
    },
    small: {
      value: "small",
      name: "Established",
      group: "30k - 50k",
    },
    medium: {
      value: "medium",
      name: "Popular",
      group: "50k - 100k",
    },
    large: {
      value: "large",
      name: "Leader",
      group: "100k - 500k",
    },
    giant: {
      value: "giant",
      name: "Influencer",
      group: "500k+",
    },
  };
  return {
    data,
    enum: Object.values(data).map((reach) => reach.value),
    select: Object.values(data).map((reach) => ({
      display: `${reach.name} (${reach.group})`,
      value: reach.value,
    })),
  };
}
