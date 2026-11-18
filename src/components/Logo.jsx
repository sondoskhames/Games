import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 text-white">
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="24" fill="#fff" />
        <path
          d="M14 14 L34 34 M34 14 L14 34"
          stroke="#0071ff"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-2xl font-bold uppercase">Lugx</span>
    </Link>
  );
}