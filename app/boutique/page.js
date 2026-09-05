import { redirect } from 'next/navigation';

// L'ancienne adresse /boutique est conservée et redirige vers /textile,
// pour que les liens déjà partagés continuent de fonctionner.
export default function BoutiqueRedirect() {
  redirect('/textile');
}
