import Image from 'next/image';
import Link from 'next/link';
import { club } from '@/content/site';

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Image
              src="/images/logo-white.png"
              alt=""
              width={62}
              height={62}
              style={{ width: 62, height: 'auto', marginBottom: 18 }}
            />
            <div className="footer-about">
              {club.name}
              <br />
              {club.gym}
              <br />
              {club.address}, {club.zipCity}
              <br />
              Club affilié FFBB
              <br />
              <a href={`mailto:${club.email}`}>Nous écrire</a>
            </div>
          </div>

          <div>
            <div className="footer-title">Le club</div>
            <div className="footer-links">
              <Link href="/le-club">Histoire et valeurs</Link>
              <Link href="/equipes">Équipes</Link>
              <Link href="/rejoindre">Rejoindre le club</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <div className="footer-title">Liens officiels</div>
            <div className="footer-links">
              <a href={club.ffbb} target="_blank" rel="noopener">
                Calendrier et résultats FFBB ↗
              </a>
              <a href={club.adhesionPdf} download>
                Fiche d&apos;adhésion 2026-2027 ↓
              </a>
              <Link href="/reglement">Règlement intérieur</Link>
              <Link href="/equipes#planning">Planning des entraînements</Link>
            </div>
          </div>

          <div>
            <div className="footer-title">Suivre le club</div>
            <a href={club.instagram} target="_blank" rel="noopener" className="link-light">
              {club.instagramHandle}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {club.name}</span>
          <span>Club affilié FFBB · {club.legalName}</span>
        </div>
      </div>
    </footer>
  );
}
