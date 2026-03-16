#import "@preview/silver-dev-cv:1.0.2": *

#show: cv.with(
  font-type: "PT Serif",
  continue-header: "false",
  name: "Alejandro Clemente",
  address: "Valparaíso, Chile",
  lastupdated: "true",
  pagecount: "true",
  date: "2026-02-24",
  contacts: (
    (text: "aclemente.dev", link: "https://aclemente.dev/"),
    (text: "LinkedIn", link: "https://www.linkedin.com/in/aclementcl/"),
    (text: "Github", link: "https://www.github.com/aclementcl"),
    (text: "alejandro.clemente.i@gmail.com", link: "mailto:alejandro.clemente.i@gmail.com"),
  ),
)

#section[About Me]
#descript[Senior Software Engineer with 8+ years of experience building scalable backend systems and modern frontend applications, defining clear architectures, and delivering product features with a strong product mindset. Experienced in collaborating closely with stakeholders to translate business needs into well-aligned, high-impact solutions.]

#sectionsep
#section("Experience")
#job(
  position: "Back End Developer",
  institution: [Freelance],
  location: "Remote - Chile",
  date: "2025 - 2026",
  description: [
    - Defined and implemented the system architecture and developed backend APIs consumed by a React frontend, delivering a Dockerized solution that enabled centralized KPIs across multiple schools within an educational foundation.
    - Defined functional and technical requirements and supported the platform’s delivery by managing and provisioning Azure resources and configuring CI/CD pipelines to enable reliable deployments.
  ],
)

#job(
  position: "Full Stack Developer",
  institution: [AllegianceGroup],
  location: "Remote - USA",
  date: "2022-2024",
  description: [
    - Developed and evolved a CMS for scientific organizations using Clean Architecture and containerized deployments; led ETL-based legacy data migrations, integrating with Sitefinity CMS APIs to migrate 10,000+ records, improving data accessibility and operational efficiency.

  ],
)

#job(
  position: "Full Stack Developer",
  institution: [AgileSoft],
  location: "Remote - Chile",
  date: "2021-2022",
  description: [
    - Improved and maintained public-sector platforms by refactoring legacy code and optimizing quality standards, reducing technical debt by 70% and improving long-term stability.
    - Built an automated construction permit platform using distributed, containerized microservices and asynchronous messaging, reducing processing times by 60–70% and increasing throughput by 2–3×.
  ],
)

#job(
  position: "Full Stack Developer",
  institution: [Zeke],
  location: "Hybrid - Chile",
  date: "2018-2020",
  description: [
    - Improved and maintained public-sector platforms by optimizing code quality and refactoring practices, reducing technical debt by ~70%, which led to greater system stability and long-term maintainability.
    - Developed a platform that automated construction permit workflows, leveraging a distributed architecture with asynchronous messaging and a modern web frontend, delivered through containerized microservices, reducing manual processing times by 60–70% and increasing permit throughput by 2–3× compared to legacy workflows.
  ],
)

#section("Skills")
#oneline-title-item(
  title: "Skills",
  content: [.NET, Node.js, Nest.js, React, Angular, Vue, PostgreSQL, SQL Server, Docker, CI/CD, Azure, xUnit],
)

#sectionsep
#section("Education")
#education(
  institution: [Technical University Federico Santa María],
  major: [Computer Systems Engineering],
  date: "2017 - 2019",
  location: "Chile",
)

#education(
  institution: [Technical University Federico Santa María],
  major: [University Technician in Computer Science],
  date: "2011 - 2016",
  location: "Chile",
)


#set document(author: "aclementcl", title: "Aclementcl CV")
