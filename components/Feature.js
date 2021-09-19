import {
  SparklesIcon,
  LightningBoltIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/outline";

export default function Feature({ icon, title, desc }) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-8 h-8">{icon}</div>
        <div className="mt-6 text-3xl tracking-wide ">{title}</div>
        <div className="mt-4 font-mono">{desc}</div>
      </div>
    </div>
  );
}
