import data from "@/config/app.json";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} EddieHub All rights reserved | v{data.version}
        </div>
        <a
          href="https://github.com/EddieHubCommunity/CreatorsRegistry"
          className="text-gray-500 hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-6 w-6 inline-block mb-1" />
        </a>
      </div>
    </footer>
  );
}
