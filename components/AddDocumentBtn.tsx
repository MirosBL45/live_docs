'use client';

import { Button } from './ui/button';

export default function AddDocumentBtn({ userId, email }: AddDocumentBtnProps) {
  return (
    <Button>
      <p className="hidden sm:block">Start a blank document</p>
    </Button>
  );
}
