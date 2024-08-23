'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import Add from '@/public/assets/icons/add.svg';
import { useRouter } from 'next/navigation';
import { createDocument } from '@/lib/actions/room.actions';

export default function AddDocumentBtn({ userId, email }: AddDocumentBtnProps) {
  const router = useRouter();

  async function addDocumentHandler() {
    try {
      const room = await createDocument({ userId, email });
      if (room) router.push(`/documents/${room.id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Button
      className="gradient-blue flex gap-1 shadow-md"
      type="submit"
      onClick={addDocumentHandler}
    >
      <Image src={Add} alt="add" width={24} height={24} />
      <p className="hidden sm:block">Start a blank document</p>
    </Button>
  );
}
