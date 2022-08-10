import HeaderOption from "./HeaderOption";
import {
    DotsVerticalIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon,
  } from "@heroicons/react/outline";
import { MapIcon } from "@heroicons/react/solid";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:space-x-36 lg:pl-16 border-b ">
        {/* left */}

        <div className="flex space-x-10 small:space-x-6">
            <HeaderOption Icon={SearchIcon} title="All" selected />
            <HeaderOption Icon={PhotographIcon} title="Images" />
            <HeaderOption Icon={PlayIcon} title="Videos" />
            <HeaderOption Icon={NewspaperIcon} title="News" />
            <HeaderOption Icon={MapIcon} title="Maps" />
            <HeaderOption Icon={DotsVerticalIcon} title="More" />
        </div>

        {/* right */}
        <div className="flex space-x-4">
            <p className="link">Settings</p>
            <p className="link">Tools</p>
        </div>
    </div>
  )
}

export default HeaderOptions