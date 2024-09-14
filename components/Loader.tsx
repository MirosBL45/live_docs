import Image from 'next/image';
import LoaderImage from '@/public/assets/icons/loader.svg';

export default function Loader() {
  return (
    <div className="loader">
      <Image
        // src={'/assets/icons/loader.svg'}
        src={LoaderImage}
        alt="Loader by Miroslav Jovic Frontend Developer"
        width={32}
        height={32}
        className="animate-spin"
      />
      Loading...
    </div>
  );
}
