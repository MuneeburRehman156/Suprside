import { FiBriefcase, FiHome, FiLink2, FiTool } from 'react-icons/fi';
import { LuPencilRuler } from 'react-icons/lu';
import './ComparisonSectionPage.css';

const columns = ['Speed', 'Flexibility', 'Quality', 'Scalability', 'Cost-effectiveness'];
const MARK = {
  check: '\u2713',
  cross: '\u2715',
};

const rows = [
  {
    key: 'superside',
    title: 'Superside',
    desc: 'Work with the top 1% of global creative talent, recruited from the best brands and agencies.',
    icon: FiLink2,
    highlight: true,
    values: ['check', 'check', 'check', 'check', 'check'],
  },
  {
    key: 'in-house',
    title: 'In-house team',
    desc: "In-house teams don't always have the skill mix or bandwidth to handle every request that the business needs.",
    icon: FiHome,
    values: ['cross', 'cross', 'check', 'check', 'cross'],
  },
  {
    key: 'agencies',
    title: 'Creative agencies',
    desc: 'Working with full scale creative agencies can be slow, costly, and inflexible.',
    icon: LuPencilRuler,
    values: ['cross', 'cross', 'check', 'check', 'cross'],
  },
  {
    key: 'freelancers',
    title: 'Freelancers',
    desc: 'Freelancers can be unreliable and hard to scale, leading to inconsistent work and questionable quality.',
    icon: FiBriefcase,
    values: ['cross', 'cross', 'check', 'check', 'check'],
  },
  {
    key: 'self-tools',
    title: 'Self-service tools',
    desc: 'These solutions make incremental improvements to capacity, and work mostly for simpler, repetitive tasks.',
    icon: FiTool,
    values: ['cross', 'cross', 'check', 'check', 'cross'],
  },
];

function ComparisonSectionPage() {
  return (
    <section className="comparison-page reveal-up" id="comparison">
      <div className="comparison-page__head">
        <span>Superside vs. traditional alternatives</span>
        <h3>
          Hiring or traditional
          <br />
          outsourcing? <em>Neither.</em>
        </h3>
      </div>

      <div className="comparison-table">
        <div className="comparison-table__header">
          <div />
          {columns.map((column) => (
            <div className="comparison-table__col-title" key={column}>
              {column}
            </div>
          ))}
        </div>

        {rows.map((row) => {
          const RowIcon = row.icon;
          return (
            <article className={`comparison-row ${row.highlight ? 'is-highlight' : ''}`} key={row.key}>
              <div className="comparison-row__label">
                <span className="comparison-row__icon">
                  <RowIcon />
                </span>
                <div>
                  <h4>{row.title}</h4>
                  <p>{row.desc}</p>
                </div>
              </div>

              {row.values.map((value, index) => (
                <div className={`comparison-row__value comparison-row__value--${value}`} key={`${row.key}-${index}`}>
                  {MARK[value]}
                </div>
              ))}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ComparisonSectionPage;
