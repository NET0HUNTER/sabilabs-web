import Link from 'next/link';
import { SectionContainer, SectionIntro } from './Primitives';
import ShowcaseCard, { ShowcaseGrid } from './ShowcaseCard';

const projects = [
  { title: 'Distribution ERP', category: 'Enterprise Software', challenge: 'A growing distributor managed inventory across branches using spreadsheets and manual reconciliation, leading to stock discrepancies and revenue leakage.', approach: 'A unified distribution platform connected inventory, orders, deliveries, invoicing, and management reporting.', impact: 'Unified inventory visibility, automated order-to-delivery workflow, eliminated manual reconciliation.' },
  { title: 'Restaurant POS System', category: 'POS & Operations', challenge: 'A restaurant group in Nigeria needed a unified POS across multiple locations with kitchen management and real-time reporting.', approach: 'A multi-location POS connected front-of-house ordering, kitchen workflow, payments, and centralized reporting.', impact: 'Streamlined order-to-kitchen flow, centralized reporting across all locations, reduced order errors.' },
  { title: 'Commercial Laundry ERP', category: 'Process Automation', challenge: 'A commercial laundry operation had no visibility into garment tracking, leading to lost items and customer disputes.', approach: 'A purpose-built workflow tracked garments, customer orders, processing status, and delivery notifications.', impact: 'End-to-end garment tracking, automated customer notifications, near-zero dispute rate.' },
  { title: 'School Management ERP', category: 'Education Technology', challenge: 'A secondary school managed admissions, fees, attendance, and grades across disconnected paper systems and spreadsheets.', approach: 'A connected school platform digitized the student lifecycle with mobile payments and offline support.', impact: 'Digitized student lifecycle, mobile fee payments, offline functionality for rural connectivity.' },
  { title: 'NGO Approval Workflow', category: 'Financial Governance', challenge: "An NGO's financial approval process involved manual email chains, creating audit gaps and delayed disbursements.", approach: 'A multi-level digital approval workflow introduced role-based decisions, audit trails, and Xero synchronization.', impact: 'Multi-level digital approvals with complete audit trails, automated accounting sync with Xero.' },
  { title: 'SACCO Security Audits', category: 'Cybersecurity', challenge: 'A SACCO needed to assess its cybersecurity posture against regulatory expectations but lacked internal expertise.', approach: 'A structured security audit mapped vulnerabilities, operational risks, and compliance gaps to a prioritized remediation plan.', impact: 'Identified critical vulnerabilities, clear remediation plan, strengthened regulatory readiness.' },
];

export default function WorkSection({ preview = false }: { preview?: boolean }) {
  const visibleProjects = preview ? projects.slice(0, 2) : projects;

  return (
    <section id="projects" className="section-shell">
      <SectionContainer>
        <SectionIntro
          eyebrow={preview ? 'Selected Projects' : 'Selected Engagements'}
          heading="Real Problems. Structured Solutions. Measurable Impact."
          description="Client engagements where business challenges were translated into practical, measurable technology outcomes."
        />
        <ShowcaseGrid>
          {visibleProjects.map((project, index) => (
            <ShowcaseCard
              key={project.title}
              sequence={String(index + 1).padStart(2, '0')}
              kind="Case Study"
              category={project.category}
              title={project.title}
              description={project.challenge}
              details={[
                ...(!preview ? [{ label: 'Approach', value: project.approach, accent: 'muted' as const }] : []),
                { label: 'Impact', value: project.impact, accent: 'cyan' as const },
              ]}
              ctaLabel="Discuss a Similar Project"
              href="/contact"
            />
          ))}
        </ShowcaseGrid>
        {preview ? <Link href="/projects" className="button button-secondary mt-10">View All Projects <span aria-hidden="true">→</span></Link> : null}
      </SectionContainer>
    </section>
  );
}
