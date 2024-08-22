import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { SignedIn, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
          Notifications
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
    </main>
  );
}
