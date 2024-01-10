import {
  ArrowUpOnSquareIcon,
  EllipsisVerticalIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

import { mobile } from './util';

type Props = {
  close: () => void;
};

export default function InstallAppWarningModal({ close }: Props) {
  const [title, setTitle] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [instruction, setInstruction] = useState('');
  const [icon, setIcon] = useState(<></>);
  useEffect(() => {
    setParagraph(
      'Install typical arcade for quick and easy access when you\'re on the go!',
    );
    setTitle('INSTALL APP');
    if (mobile.android()) {
      setInstruction('then “Install App”');
      setIcon(
        <EllipsisVerticalIcon className="h-[3rem] w-[3rem] text-white" />,
      );
    } else if (mobile.ios()) {
      setInstruction('then “Add to Home Screen”');
      setIcon(<ArrowUpOnSquareIcon className="h-[3rem] w-[3rem] text-white" />);
    }
  }, []);
  return (
    <div className="fixed left-0 top-0 z-top flex h-full w-full flex-col items-center justify-end bg-black bg-opacity-[85%] p-[2rem]">
      <div className="relative flex w-full flex-col items-center justify-start rounded-[2rem] bg-white p-[2.5rem]">
        <div className="mb-[1rem] text-center font-archivo-black text-[3rem] font-normal leading-tight">
          {title}
        </div>
        <div className="mb-[3rem] text-center font-archivo-black text-[2rem] font-normal leading-tight">
          {paragraph}
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <p className="text-center font-archivo-black text-[3rem] font-normal leading-tight">
            Tap
          </p>
          <div className="flex h-[5rem] w-[5rem] flex-col items-center justify-center rounded-[1rem] bg-black text-center">
            {icon}
          </div>
          <p className="text-center font-archivo-black text-[3rem] font-normal leading-tight">
            {instruction}
          </p>
          <XMarkIcon
            className="absolute right-[1rem] top-[1rem] h-[4rem] w-[4rem]"
            onClick={close}
          />
        </div>
      </div>
    </div>
  );
}
