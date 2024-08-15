import { Editor } from '@/components/editor/Editor';
import Header from '@/components/Header';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Document() {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="document-title">Share</p>
        </div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Header>
      <Editor />
    </div>
  );
}
