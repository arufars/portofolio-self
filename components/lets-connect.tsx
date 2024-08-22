import Link from "next/link";

const sosmed = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/your-linkedin",
  },
  {
    name: "Github",
    url: "https://github.com/username-your",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/your-twitter",
  },
  {
    name: "Discord",
    url: "https://discord.com/your-discord",
  },
];

export default function LetConnect() {
  return (
    <div className="py-8 px-6">
      <h1 className="font-statoshi-bold text-xl">
        Let&apos;s start working together!
      </h1>
      <div className="py-2">
        <h4 className="text-slate-500">Social</h4>
        <ul>
          {sosmed.map((sosmed, idx) => (
            <li
              key={idx}
              className="text-slate-200 hover:text-slate-400 transition-all relative hover:translate-x-3"
            >
              <Link href={sosmed.url}>{sosmed.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
