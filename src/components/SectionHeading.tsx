type Props = {
  id: string;
  kicker: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({ id, kicker, title, description, centered }: Props) {
  return (
    <div className={`section__heading${centered ? " section__heading--centered" : ""}`}>
      <span className="kicker">{kicker}</span>
      <h2 id={id} className="section__title">
        {title}
      </h2>
      {description && <p className="section__description">{description}</p>}
    </div>
  );
}
