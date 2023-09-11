"use client";

import Image from "next/image";

interface AvaterProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvaterProps> = ({ src }) => {
  return (
    <Image
      src={src ? src : "/images/placeholder.jpg"}
      className='rounded-full'
      width={30}
      height={30}
      alt='Avatar'
    />
  );
};

export default Avatar;
