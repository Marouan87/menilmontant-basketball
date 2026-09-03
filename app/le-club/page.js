import Image from 'next/image';
import PageHero from '@/components/PageHero';
import { figures, history, milestones, staff, values } from '@/content/club';

export const metadata = {
  title: 'Le club',
  description:
    "L'histoire du Ménilmontant Paris Sports, ses grandes dates, ses figures, ses valeurs et son équipe dirigeante.",
};

export default function ClubPage() {
  return (
    <>
      <PageHero
        eyebrow="Le club"
        title={
          <>
            Un club de quartier
            <br />
            depuis 1899
          </>
        }
        image="/images/page-club.jpg"
        position="50% 28%"
      />

      <section className="section">
        <div className="wrap split">
          <div>
            <h2 className="h2" style={{ marginBottom: 18 }}>
              Notre histoire
            </h2>
            <div className="prose">
              {history.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <Image
            src="/images/histoire-club.jpg"
            alt="Deux générations du club, ballon en main"
            width={1400}
            height={1000}
            sizes="(max-width: 900px) 100vw, 560px"
            className="cover"
          />
        </div>
      </section>

      <section className="section section-navy">
        <div className="wrap">
          <h2 className="h2" style={{ marginBottom: 'clamp(28px, 3vw, 44px)' }}>
            Les grandes dates
          </h2>
          <div className="milestones">
            {milestones.map((m) => (
              <div className="milestone" key={m.year}>
                <div className="milestone-year">{m.year}</div>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h2" style={{ marginBottom: 8 }}>
            Les figures du club
          </h2>
          <p className="lead" style={{ fontSize: 16, marginBottom: 32 }}>
            Ceux qui ont fait la Jeanne d&apos;Arc de Ménilmontant, et ceux qui
            font le club aujourd&apos;hui.
          </p>
          <div className="figures">
            {figures.map((f) => (
              <div className="figure-card" key={f.name}>
                <div className="figure-name">{f.name}</div>
                <div className="figure-role">{f.role}</div>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap">
          <h2 className="h2" style={{ marginBottom: 32 }}>
            Nos valeurs
          </h2>
          <div className="values">
            {values.map((v) => (
              <div className="value" key={v.num}>
                <div className="value-num">{v.num}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h2" style={{ marginBottom: 8 }}>
            L&apos;équipe dirigeante
          </h2>
          <p className="lead" style={{ fontSize: 16, marginBottom: 32 }}>
            Une équipe entièrement bénévole, joignable au gymnase ou par mail.
          </p>
          <div className="staff-grid">
            {staff.map((s) => (
              <div className="staff-card" key={s.person}>
                <div className="staff-photo">
                  <Image
                    src={s.photo}
                    alt={`Photo de ${s.person}`}
                    fill
                    sizes="(max-width: 700px) 100vw, 280px"
                  />
                </div>
                <div className="staff-body">
                  <div className="staff-role">{s.role}</div>
                  <div className="staff-person">{s.person}</div>
                  <div className="staff-mission">{s.mission}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
