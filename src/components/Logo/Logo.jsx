import Image from 'next/image';

function Logo() {
  return (
    <Image
      src="./logo.svg"
      width={164}
      height={50}
      alt="Picture of the author"
    />
  );
}

export default Logo;
