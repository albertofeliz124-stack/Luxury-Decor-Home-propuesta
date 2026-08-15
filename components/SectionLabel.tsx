type SectionLabelProps = {
  children: string;
  light?: boolean;
};

export function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <p className={`mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.32em] ${light ? "text-ivory/70" : "text-taupe"}`}>
      {children}
    </p>
  );
}
