import { Button } from '@/ui';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-pr flex min-h-screen justify-between p-24">
      <Button variant="primary" label="Button Primary" />
      <Button variant="primary" label="Button Primary" disabled />
      <Button variant="primary" label="Button Primary" loading disabled />
      <Button variant="secondary" label="Button Secondary" />
      <Button variant="secondary" label="Button Secondary" disabled />
      <Button variant="secondary" label="Button Secondary" loading disabled />
    </main>
  );
}
