import {
  faDev,
  faGithub,
  faHashnode,
  faMedium,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

export default function socialIcon(name) {
  let icon = faThumbsUp;
  switch (name) {
    case "twitter":
      icon = faTwitter;
      break;
    case "youtube":
      icon = faYoutube;
      break;
    case "twitch":
      icon = faTwitch;
      break;
    case "hashnode":
      icon = faHashnode;
      break;
    case "devto":
      icon = faDev;
      break;
    case "github":
      icon = faGithub;
      break;
    case "medium":
      icon = faMedium;
      break;
  }
  return icon;
}
