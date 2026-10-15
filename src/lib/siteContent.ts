export type Capability = {
  id: string;
  number: string;
  title: string;
  summary: string;
  businessProblems: string[];
  services: string[];
  outcomes: string[];
};

export const capabilities: Capability[] = [
  {
    id: 'business-technology-advisory',
    number: '01',
    title: 'Business and Technology Advisory',
    summary: 'Turn operational complexity into a clear, practical technology direction.',
    businessProblems: ['Unclear or undocumented processes', 'Disconnected systems and information', 'Poorly defined technology investments', 'Inefficient operations and duplicated work'],
    services: ['Business analysis', 'Process mapping', 'Digital transformation advisory', 'Technology strategy', 'Requirements engineering'],
    outcomes: ['Clearer operational models', 'Stronger system requirements', 'Reduced implementation risk', 'Technology aligned to business goals'],
  },
  {
    id: 'enterprise-systems',
    number: '02',
    title: 'Custom Software and Enterprise Systems',
    summary: 'Design secure systems around the way your teams, customers, and operations work.',
    businessProblems: ['Generic tools that do not fit the operation', 'Manual records and fragmented workflows', 'Limited visibility across departments', 'Legacy systems that restrict growth'],
    services: ['Custom business applications', 'Enterprise resource planning systems', 'Operational platforms', 'Web and mobile interfaces', 'System modernization'],
    outcomes: ['Systems matched to real workflows', 'Reliable shared operational data', 'Improved coordination and control', 'A stronger foundation for growth'],
  },
  {
    id: 'automation-ai',
    number: '03',
    title: 'Business Process Automation and AI',
    summary: 'Remove repetitive work and make high-volume processes faster, clearer, and easier to govern.',
    businessProblems: ['Slow manual approvals', 'Repetitive administrative work', 'Inconsistent process execution', 'Delayed decisions and avoidable errors'],
    services: ['Workflow automation', 'Approval and rules engines', 'AI-assisted operations', 'Document and task automation', 'Process optimization'],
    outcomes: ['Shorter process cycles', 'More consistent execution', 'Clearer accountability and audit trails', 'More time for higher-value work'],
  },
  {
    id: 'data-intelligence',
    number: '04',
    title: 'Data Engineering, Analytics and Intelligence',
    summary: 'Make operational data trustworthy, accessible, and useful for decisions.',
    businessProblems: ['Reports assembled manually', 'Data spread across incompatible sources', 'Limited performance visibility', 'Inconsistent definitions and data quality'],
    services: ['Data architecture and pipelines', 'Data cleaning and transformation', 'Management dashboards', 'Operational analytics', 'Reporting automation'],
    outcomes: ['A more reliable view of performance', 'Faster reporting cycles', 'Better-informed decisions', 'Reusable data foundations'],
  },
  {
    id: 'integration-cloud',
    number: '05',
    title: 'Systems Integration and Cloud Solutions',
    summary: 'Connect critical tools and build infrastructure that is secure, resilient, and manageable.',
    businessProblems: ['Systems that cannot exchange information', 'Repeated data entry', 'Fragile infrastructure', 'Security and access-control gaps'],
    services: ['Systems and API integration', 'Cloud architecture and migration', 'Microsoft 365 and Google Workspace', 'Zoho and Xero integration', 'Infrastructure security and support'],
    outcomes: ['Connected business information', 'Less duplication and rework', 'More resilient infrastructure', 'Secure access as the organization grows'],
  },
  {
    id: 'geospatial-intelligence',
    number: '06',
    title: 'Geospatial Technology and Spatial Intelligence',
    summary: 'Use location and spatial data to understand assets, activity, coverage, and opportunity.',
    businessProblems: ['Location data separated from operations', 'Limited visibility across regions or assets', 'Difficult field coordination', 'Decisions made without spatial context'],
    services: ['Geospatial requirements analysis', 'GIS platforms and mapping tools', 'Spatial data integration', 'Field-data workflows', 'Location intelligence dashboards'],
    outcomes: ['Clearer geographic visibility', 'Better field and asset coordination', 'Evidence-based planning', 'Operational insight grounded in location'],
  },
];

export type Industry = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  operationalContext: string;
  challenges: string[];
  studies: string[];
  systems: string[];
  outcomes: string[];
};

export const industries: Industry[] = [
  {
    slug: 'government-public-institutions',
    title: 'Government and Public Institutions',
    shortTitle: 'Government',
    summary: 'Accountable, secure systems for complex public-service environments.',
    operationalContext: 'Public institutions coordinate services, approvals, records, reporting, and oversight across multiple departments and stakeholder groups.',
    challenges: ['Manual approvals', 'Fragmented records', 'Poor reporting visibility', 'Compliance and security requirements', 'Disconnected departments'],
    studies: ['Service and approval processes', 'Stakeholder responsibilities', 'Records and reporting requirements', 'Security and compliance obligations', 'Departmental data flows'],
    systems: ['Workflow and case-management systems', 'Records platforms', 'Management dashboards', 'Interdepartmental integrations', 'Reporting platforms'],
    outcomes: ['Clearer service delivery', 'Stronger accountability', 'More accessible reporting', 'Secure and traceable information flows'],
  },
  {
    slug: 'enterprise-distribution',
    title: 'Enterprises and Distributors',
    shortTitle: 'Enterprise & Distribution',
    summary: 'Connected operations across inventory, sales, finance, delivery, and management.',
    operationalContext: 'Growing enterprises coordinate high-volume transactions, people, stock, customers, branches, and financial controls across a changing operation.',
    challenges: ['Disconnected branch information', 'Inventory and revenue leakage', 'Manual reconciliation', 'Limited management visibility', 'Systems that do not scale together'],
    studies: ['Order-to-cash workflows', 'Inventory movement', 'Financial controls', 'Branch and role structures', 'Management reporting needs'],
    systems: ['Distribution and ERP systems', 'Inventory and order platforms', 'Finance integrations', 'Operational dashboards', 'Mobile field and delivery tools'],
    outcomes: ['Shared operational visibility', 'More reliable controls', 'Faster coordination', 'Systems that support growth'],
  },
  {
    slug: 'smes',
    title: 'Small and Medium Enterprises',
    shortTitle: 'SMEs',
    summary: 'Practical digital foundations that improve control without adding unnecessary complexity.',
    operationalContext: 'SMEs often grow faster than their internal processes, relying on spreadsheets, messaging, and individual knowledge to run critical work.',
    challenges: ['Founder-dependent processes', 'Scattered customer and financial records', 'Repetitive administration', 'Limited technology capacity', 'Unclear priorities for investment'],
    studies: ['Core revenue and service workflows', 'Team responsibilities', 'Financial and reporting processes', 'Current tools and constraints', 'Near-term growth priorities'],
    systems: ['Right-sized operational systems', 'Workflow automation', 'CRM and finance integrations', 'Cloud collaboration tools', 'Management reporting'],
    outcomes: ['More consistent operations', 'Better management visibility', 'Reduced administrative burden', 'A practical path to scale'],
  },
  {
    slug: 'ngos-development',
    title: 'NGOs and Development Organizations',
    shortTitle: 'NGOs & Development',
    summary: 'Traceable systems for programs, approvals, evidence, and donor accountability.',
    operationalContext: 'Development organizations balance program delivery, distributed teams, partner coordination, financial stewardship, and detailed reporting obligations.',
    challenges: ['Complex approval chains', 'Disconnected field and finance data', 'Audit gaps', 'Manual donor reporting', 'Inconsistent program records'],
    studies: ['Program and finance workflows', 'Approval authorities', 'Field-data collection', 'Donor and audit requirements', 'Reporting cycles'],
    systems: ['Approval and grant workflows', 'Program information systems', 'Field-data tools', 'Accounting integrations', 'Monitoring and reporting dashboards'],
    outcomes: ['Stronger traceability', 'Faster approvals', 'More reliable program evidence', 'Clearer financial and donor reporting'],
  },
  {
    slug: 'education',
    title: 'Education',
    shortTitle: 'Education',
    summary: 'Connected information for learners, educators, administrators, and families.',
    operationalContext: 'Education institutions manage a continuous lifecycle of admissions, learning, attendance, fees, assessment, communication, and statutory reporting.',
    challenges: ['Paper-based student records', 'Disconnected academic and fee information', 'Slow parent communication', 'Manual reporting', 'Intermittent connectivity'],
    studies: ['Student and academic lifecycles', 'Fee and finance processes', 'Staff responsibilities', 'Communication needs', 'Connectivity and access constraints'],
    systems: ['School information systems', 'Fee and payment integrations', 'Attendance and assessment tools', 'Parent communication portals', 'Offline-capable workflows'],
    outcomes: ['A consistent student record', 'Faster administration', 'Improved communication', 'More dependable reporting'],
  },
  {
    slug: 'data-intensive-organizations',
    title: 'Data-Intensive Organizations',
    shortTitle: 'Data-Intensive Organizations',
    summary: 'Reliable data foundations for organizations whose decisions depend on complex information.',
    operationalContext: 'Research, monitoring, logistics, financial, and field-based organizations often depend on large or varied datasets collected across multiple systems and locations.',
    challenges: ['Inconsistent data sources', 'Slow manual consolidation', 'Weak data lineage', 'Limited analytical access', 'Location data isolated from reporting'],
    studies: ['Data sources and ownership', 'Quality and validation rules', 'Reporting and analytical questions', 'Security and access requirements', 'Spatial and temporal relationships'],
    systems: ['Data pipelines and warehouses', 'Analytics and reporting platforms', 'Data-quality workflows', 'Geospatial information systems', 'Decision-support dashboards'],
    outcomes: ['More trustworthy data', 'Faster analysis', 'Clearer evidence for decisions', 'Secure access to shared intelligence'],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  clientContext: string;
  challenge: string;
  requirements: string[];
  approach: string;
  solution: string;
  implementation: string;
  results: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'distribution-management-system',
    title: 'Distribution Management System',
    industry: 'Enterprise & Distribution',
    clientContext: 'A growing distributor coordinated inventory and fulfilment across multiple branches using spreadsheets and manual reconciliation.',
    challenge: 'Disconnected records made it difficult to see stock accurately, coordinate orders and deliveries, or identify revenue leakage.',
    requirements: ['Shared inventory visibility', 'Connected order and delivery workflows', 'Consistent invoicing', 'Management reporting across branches'],
    approach: 'Sabi Labs mapped the order-to-delivery process, the movement of stock, branch responsibilities, and the reporting information management needed.',
    solution: 'A unified distribution platform connecting inventory, orders, deliveries, invoicing, and management reporting.',
    implementation: 'The operational modules were brought together around one shared workflow so each transaction could move consistently from order to fulfilment and reporting.',
    results: ['Unified inventory visibility', 'A connected order-to-delivery workflow', 'Reduced dependence on manual reconciliation'],
  },
  {
    slug: 'school-information-management-system',
    title: 'School Information Management System',
    industry: 'Education',
    clientContext: 'A secondary school managed admissions, fees, attendance, and grades through a mix of paper records and disconnected spreadsheets.',
    challenge: 'Student information was difficult to maintain consistently, reporting took unnecessary effort, and rural connectivity affected access.',
    requirements: ['One student lifecycle record', 'Fee and payment management', 'Attendance and academic reporting', 'Support for intermittent connectivity'],
    approach: 'Sabi Labs examined the student lifecycle, administrative roles, fee processes, reporting needs, and the realities of day-to-day connectivity.',
    solution: 'A connected school information platform covering admissions, fees, attendance, grades, mobile payments, and offline-capable workflows.',
    implementation: 'The system was structured around the school calendar and the responsibilities of administrative and academic users.',
    results: ['A digitized student information lifecycle', 'Mobile fee-payment support', 'Continued access in low-connectivity conditions'],
  },
  {
    slug: 'restaurant-operations-system',
    title: 'Restaurant Operations System',
    industry: 'Hospitality',
    clientContext: 'A restaurant group in Nigeria needed consistent operations and reporting across multiple locations.',
    challenge: 'Front-of-house ordering, kitchen work, payments, and location reporting were not operating as one connected process.',
    requirements: ['Multi-location point of sale', 'Kitchen workflow visibility', 'Payment handling', 'Central management reporting'],
    approach: 'The engagement traced an order from customer request through kitchen preparation, payment, and location-level reporting.',
    solution: 'A multi-location operations platform connecting point of sale, kitchen workflow, payments, and centralized reporting.',
    implementation: 'Each operational stage was represented in one workflow while preserving the needs of individual locations and central management.',
    results: ['A more consistent order-to-kitchen flow', 'Centralized location reporting', 'Fewer avoidable order errors'],
  },
  {
    slug: 'commercial-laundry-operations',
    title: 'Commercial Laundry Operations System',
    industry: 'SME Operations',
    clientContext: 'A commercial laundry operation handled customer orders and garments through several processing and delivery stages.',
    challenge: 'Limited item-level visibility led to lost garments, unclear processing status, and customer disputes.',
    requirements: ['Garment-level tracking', 'Order and customer records', 'Processing status visibility', 'Delivery notifications'],
    approach: 'Sabi Labs mapped how garments moved from intake through processing, quality checks, packaging, and delivery.',
    solution: 'A purpose-built workflow for garments, customer orders, processing status, and delivery communication.',
    implementation: 'Tracking points were aligned to the existing physical workflow so digital records followed each garment through the operation.',
    results: ['End-to-end garment visibility', 'Automated customer notifications', 'A substantial reduction in item disputes'],
  },
  {
    slug: 'ngo-approval-workflow',
    title: 'NGO Financial Approval Workflow',
    industry: 'NGO & Development',
    clientContext: 'An NGO managed financial approvals through manual email chains involving multiple decision-makers.',
    challenge: 'The process delayed disbursements and made it difficult to maintain a complete, reviewable audit trail.',
    requirements: ['Role-based approval levels', 'Decision history and audit trails', 'Accounting synchronization', 'Clear request status'],
    approach: 'Sabi Labs examined approval authority, supporting information, accounting touchpoints, and the evidence required for review.',
    solution: 'A multi-level digital approval workflow with role-based decisions, audit trails, and Xero synchronization.',
    implementation: 'Approval stages and permissions were translated into a traceable workflow connected to the accounting process.',
    results: ['Traceable multi-level approvals', 'Complete decision histories', 'Automated synchronization with Xero'],
  },
  {
    slug: 'sacco-security-assessment',
    title: 'SACCO Security Assessment',
    industry: 'Financial Services',
    clientContext: 'A SACCO needed an independent view of its cybersecurity posture against operational and regulatory expectations.',
    challenge: 'The organization lacked the internal specialist capacity to identify vulnerabilities, prioritize risks, and structure remediation.',
    requirements: ['A structured security assessment', 'Risk and compliance gap identification', 'Prioritized recommendations', 'A practical remediation path'],
    approach: 'Sabi Labs assessed technical vulnerabilities alongside operational controls, regulatory expectations, and the organization’s capacity to respond.',
    solution: 'A structured security audit and risk review mapped to a prioritized remediation plan.',
    implementation: 'Findings were organized by risk and urgency so the organization could move from assessment to practical corrective action.',
    results: ['Critical vulnerabilities identified', 'A clear remediation plan', 'Stronger readiness for regulatory review'],
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
