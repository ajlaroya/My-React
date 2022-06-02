import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  socialId: string;
  link: string;
}

const Member: React.FC<Props> = ({ id, name, socialId, link }) => {
  return (
    <div>
      <Image
        src={`/assets/ajl_face_${id}.png`}
        alt={name}
        width={230}
        height={300}
      />
      <div className="text-2xl xl:text-3xl">{name}</div>
      <div className="text-xl">
          <Link href={link}>
              <a href="" target="_blank">{socialId}</a>
          </Link>
      </div>
    </div>
  );
};

export default Member;
