import {
  SearchIcon,
  PhotographIcon,
  PlayIcon,
  NewspaperIcon,
  MapIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";
import HeaderOption from "./HeaderOption";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly items-start text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      <div className='flex space-x-6'>
        <HeaderOption Icon={SearchIcon} title='All' selected />
        <HeaderOption Icon={PhotographIcon} title='Images' />
        <HeaderOption Icon={PlayIcon} title='Videos' />
        <HeaderOption Icon={NewspaperIcon} title='News' />
        <HeaderOption Icon={MapIcon} title='Maps' />
        <HeaderOption Icon={DotsVerticalIcon} title='More' />
      </div>
      <div className='flex space-x-4'>
        <p>Settings</p>
        <p>Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
