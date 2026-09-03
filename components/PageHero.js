import Image from 'next/image';

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  position = '50% 30%',
  opacity = 0.4,
  narrow = false,
  children,
}) {
  return (
    <div className={narrow ? 'page-hero page-hero-narrow' : 'page-hero'}>
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="page-hero-img"
            style={{ objectPosition: position, opacity }}
          />
          <div className="page-hero-veil" />
        </>
      ) : null}
      <div className="page-hero-body">
        <div className="eyebrow eyebrow-light">{eyebrow}</div>
        <h1 className="h1">{title}</h1>
        {intro ? <p>{intro}</p> : null}
        {children}
      </div>
    </div>
  );
}
