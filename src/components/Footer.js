import { SocialIcon } from 'react-social-icons';
export default function Footer() {
    return (
        <footer>
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="border-t py-8 border-gray-200 flex flex-row items-center justify-between gap-4">
                    <div className="text-center text-sm text-gray-500 sm:text-left">
                        <span className="block sm:inline">
                            &copy; {new Date().getFullYear()} EddieHub
                        </span>{' '}
                        <span className="block sm:inline">
                            All rights reserved.
                        </span>
                    </div>
                    <div className="text-sm text-gray-500">
                        <div className="block cursor-pointer">
                            <SocialIcon
                                style={{ width: 28, height: 28 }}
                                network="github"
                                url="https://github.com/EddieHubCommunity/CreatorsRegistry"
                                target="_blank"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
