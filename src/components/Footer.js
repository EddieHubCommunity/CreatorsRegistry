import data from '@/config/app.json';
import Link from 'next/link';

export default function Footer() {
  const githubUrl = "https://github.com/EddieHubCommunity/CreatorsRegistry";

  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} EddieHub All rights reserved | v{data.version}
        </div>
        <Link href={githubUrl}>
            {githubUrl}
          
        </Link>
      </div>
    </footer>
  );
}
