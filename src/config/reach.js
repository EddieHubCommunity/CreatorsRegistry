import config from "@/config/app";

export default function REACH() {
  const data = config.reach;
  return {
    data,
    enum: Object.values(data).map((reach) => reach.value),
    select: Object.values(data).map((reach) => ({
      display: `${reach.name} (${reach.group})`,
      value: reach.value,
    })),
  };
}
