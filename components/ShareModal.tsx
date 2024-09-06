'use client';

import { useState } from 'react';
import { useSelf } from '@liveblocks/react/suspense';

export default function ShareModal({
  roomId,
  collaborators,
  creatorId,
  currentUserType,
}: ShareDocumentDialogProps) {
  const user = useSelf();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState<UserType>('viewer');

  return <div>ShareModal</div>;
}
