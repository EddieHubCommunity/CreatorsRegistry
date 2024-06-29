import {
  faDev,
  faGithub,
  faHashnode,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

export default function socialIcon(name) {
  let icon = faThumbsUp;
  let color = "#000000";
  switch (name) {
    case "twitter":
      icon = faTwitter;
      color = "#1DA1F2";
      break;
    case "youtube":
      icon = faYoutube;
      color = "#FF0000";
      break;
    case "twitch":
      icon = faTwitch;
      color = " #6441A5";
      break;
    case "hashnode":
      icon = faHashnode;
      color = "#1DA1F2";
      break;
    case "devto":
      icon = faDev;
      color = "#0A0A0A";
      break;
    case "github":
      icon = faGithub;
      color = "#DAD7CB";
      break;
  }
  return { icon, color };
}
