import Link from "next/link";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ghifar-firmansyah/",
  },
  {
    name: "Github",
    url: "https://github.com/arufars",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
  },
  {
    name: "Discord",
    url: "https://discord.com",
  },
];

export default function LetsConnect() {
  return (
    <div className="py-8 px-6">
      <h1 className="font-statoshi-bold text-xl">
        Let&apos;s start working together!
      </h1>
      <div className="py-2">
        <h4 className="text-slate-500">Social</h4>
        <ul>
          {socialLinks.map((link, idx) => (
            <li
              key={idx}
              className="text-slate-200 hover:text-slate-400 transition-all relative hover:translate-x-3"
            >
              <Link href={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
