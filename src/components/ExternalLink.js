import Link from "next/link";

export default function ExternalLink({ href, children, ...rest }) {
    return <Link target={"_blank"} rel={"noreferrer"} href={href} {...rest}>{ children }</Link>;
}
