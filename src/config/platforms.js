export default function platforms() {
  const data = {
    twitter: {
      value: "twitter",
      display: "Twitter (X)",
    },
    youtube: {
      value: "youtube",
      display: "YouTube",
    },
    linkedin: {
      value: "linkedin",
      display: "LinkedIn",
    },
  };
  return {
    data,
    enum: Object.values(data).map((platform) => platform.value),
    select: Object.values(data).map((platform) => ({
      display: platform.display,
      value: platform.value,
    })),
  };
}
