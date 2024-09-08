import { redirect } from 'next/navigation';

export default function Home() {
  // portfolioページにリダイレクト
  redirect('/portfolio');
}
