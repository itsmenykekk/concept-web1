import { BookText } from "lucide-react";

const references = [
  {
    text: "Organisation for Economic Co-operation and Development. (2020).",
    url: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2020/10/oecd-infe-survey-instrument-to-measure-the-financial-literacy-of-msmes_a614cb16/97746fba-en.pdf",
  },
  {
    text: "World Bank. (2022).",
    url: "https://www.worldbank.org/en/topic/financialinclusion/brief/financial-literacy",
  },
  {
    text: "Salguero-Pazos, M., & Reyes-de-Cózar, S. (2025). Exploring the Relationship Between Electronic Device Use and Psychological Dimensions of Procrastination in University Students. Behavioral Sciences, 16(1), 6.",
    url: "https://doi.org/10.3390/bs16010006",
  },
  {
    text: "Dy, A. B., Dy, A. B., & Samantha Katrina Santos. (2023). Measuring effects of screen time on the development of children in the Philippines: a cross-sectional study. BMC Public Health, 23(1).",
    url: "https://doi.org/10.1186/s12889-023-16188-4",
  },
  {
    text: "Organisation for Economic Co-operation and Development (OECD). (2023). Financial education.",
    url: "https://www.oecd.org",
  },
  {
    text: "Organisation for Economic Co-operation and Development (OECD). (2022). OECD/INFE guidance on digital delivery of financial education.",
    url: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2022/04/oecd-infe-guidance-on-digital-delivery-of-financial-education_367fa011/c980ce2b-en.pdf",
  },
  {
    text: "UNESCO. (2020). Youth and public integrity: Financial literacy and community development.",
    url: "https://www.unesco.org",
  },
  {
    text: "UNESCO. (2025). Financing for development: A matter of urgency for education.",
    url: "https://www.unesco.org",
  },
  {
    text: "Organisation for Economic Co-operation and Development (OECD). (2025). The financial sustainability of higher education. OECD Publishing.",
    url: "https://doi.org/10.1787/f544ccfe-en",
  },
  {
    text: "How much website hosting costs in 2026, based on hosting types. (2026).",
    url: "https://www.hostinger.com/ph/tutorials/how-much-does-website-hosting-cost",
  },
  {
    text: "Website Development Monthly Cost You Should Know. (2025).",
    url: "https://imanila.ph/2025/10/06/website-development-monthly-cost-you-should-know/",
  },
];

export function ReferencesSection() {
  return (
    <section id="references" className="py-24 bg-section-alt scroll-mt-16 relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            <BookText className="h-4 w-4" />
            References
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            References
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="glass rounded-2xl p-6 sm:p-8 glow-pink-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3 rounded-2xl" />
          <ol className="relative space-y-4 list-decimal list-inside">
            {references.map((ref, i) => (
              <li key={i} className="text-muted-foreground text-xs sm:text-sm leading-relaxed pl-1">
                {ref.text}{" "}
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline underline-offset-2 break-all transition-colors"
                >
                  {ref.url}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
