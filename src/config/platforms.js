import config from "@/config/app";

export default function PLATFORMS() {
  const data = config.platforms;

  return {
    data,
    enum: Object.values(data).map((platform) => platform.value),
    select: Object.values(data).map((platform) => ({
      display: platform.display,
      value: platform.value,
    })),
  };
}
