import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { ages, planning, teamGroups } from '@/content/teams';

export const metadata = {
  title: 'Équipes',
  description:
    'Toutes les catégories du club, de U7 aux loisirs séniors, et le planning complet des entraînements par gymnase pour la saison 2026-2027.',
};

export default function TeamsPage() {
  return (
    <>
      <PageHero
        eyebrow="Équipes"
        title="Du mini-basket aux loisirs séniors"
        intro="Toutes les catégories du club, de U7 aux loisirs séniors. Pour les équipes engagées en championnat, calendriers, résultats et classements sont tenus à jour par la FFBB."
        image="/images/page-equipes.jpg"
        position="60% 35%"
      />

      <section className="section">
        <div className="wrap team-groups">
          {teamGroups.map((g) => (
            <div key={g.title}>
              <div className="group-head">
                <h2>{g.title}</h2>
                <span>{g.sub}</span>
              </div>
              <div className="team-grid">
                {g.teams.map((t) => (
                  <div className="team-card" key={t.name}>
                    <div>
                      <h3>{t.name}</h3>
                      <div className="team-level">{t.level}</div>
                    </div>
                    <div className="team-training">
                      <div className="team-training-label">Entraînements</div>
                      <div className="team-training-value">{t.training}</div>
                    </div>
                    {t.href ? (
                      <a href={t.href} target="_blank" rel="noopener" className="team-link">
                        Calendrier FFBB&nbsp;↗
                      </a>
                    ) : (
                      <Link href="/rejoindre" className="team-link">
                        S&apos;inscrire&nbsp;→
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="planning" className="section section-soft" style={{ scrollMarginTop: 90 }}>
        <div className="wrap">
          <div style={{ marginBottom: 'clamp(28px, 3vw, 44px)' }}>
            <div className="eyebrow" style={{ letterSpacing: '0.24em', marginBottom: 12 }}>
              Saison 2026-2027
            </div>
            <h2 className="h2" style={{ marginBottom: 10 }}>
              Planning des entraînements
            </h2>
            <p className="lead" style={{ fontSize: 16.5, maxWidth: '60ch' }}>
              Tous les créneaux de la saison, par gymnase. Les groupes PERF
              s&apos;ajoutent au créneau de leur catégorie.
            </p>
          </div>

          <div className="planning">
            {planning.map((v) => (
              <div className="venue" key={v.venue}>
                <div className="venue-head">
                  <h3 className="h3">{v.venue}</h3>
                  <span>{v.address}</span>
                </div>
                <div className="days">
                  {v.days.map((d) => (
                    <div className="day" key={d.day}>
                      <div className="day-name">{d.day}</div>
                      {d.slots.map(([team, time]) => (
                        <div className="slot" key={`${team}-${time}`}>
                          <div className="slot-team">{team}</div>
                          <div className="slot-time">{time}</div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'clamp(28px, 3vw, 44px)' }}>
            <h3 className="h3" style={{ marginBottom: 16 }}>
              Catégories par âge
            </h3>
            <div className="ages">
              {ages.map(([cat, years]) => (
                <div className="age" key={cat}>
                  <div className="age-cat">{cat}</div>
                  <div className="age-years">{years}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="note">
            Créneaux susceptibles d&apos;évoluer en cours de saison. Votre
            entraîneur vous informe de tout changement.
          </p>
        </div>
      </section>
    </>
  );
}
