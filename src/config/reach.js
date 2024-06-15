export default function reach() {
  const data = {
    nano: {
      value: "nano",
      name: "Nano",
      group: "< 1k",
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
