'use client';

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense';

import { Editor } from '@/components/editor/Editor';
import Header from '@/components/Header';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import ActiveCollaborators from './ActiveCollaborators';
import { useState } from 'react';

export default function CollaborativeRoom({ roomId, roomMetadata }: CollaborativeRoomProps) {
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className="collaborative-room">
          <Header>
            <div className="flex w-fit items-center justify-center gap-2">
              <p className="document-title">Share</p>
            </div>
            <div className="flex w-full flex-1 justify-end gap-2">
              <ActiveCollaborators />
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
}
