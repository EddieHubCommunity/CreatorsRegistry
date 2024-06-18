import config from "@/config/app";

export default function REACH() {
  const data = config.reach;
  const values = Object.values(data).map((reach) => reach.value);
  return {
    data,
    enum: values,
    select: Object.values(data).map((reach) => ({
      display: `${reach.name} (${reach.group})`,
      value: reach.value,
    })),
    sortByLargest: (platforms) => {
      const sortOrder = values.reverse();

      return platforms.sort(
        (a, b) => sortOrder.indexOf(a.reach) - sortOrder.indexOf(b.reach)
      );
    },
  };
}
