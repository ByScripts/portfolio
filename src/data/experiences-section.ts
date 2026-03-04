import type { ExperienceSection } from "@/types/experience-section";

export const experienceSection: ExperienceSection = {
  sectionTitle: {
    fr: "Parcours",
    en: "Experiences",
  },
  experiences: [
    {
      company: "Vates",
      role: {
        fr: "Développeur Front-end Senior | Vue.js & TypeScript",
        en: "Senior Front-end Developer | Vue.js & TypeScript",
      },
      period: "2022 — 2025",
      type: "dev",
      freelance: true,
      remote: true,
      description: {
        fr: "Expert technique pour la refonte de XO Lite et l'architecture Front-End de Xen Orchestra. Définition d'une stack moderne (Vue 3, TypeScript, Vite), création d'une librairie de composants partagée, et instauration de standards de qualité élevés pour pérenniser la base de code.",
        en: "Technical expert for the XO Lite redesign and the Xen Orchestra Front-End architecture. Defined a modern stack (Vue 3, TypeScript, Vite), built a shared component library, and established high quality standards to ensure long-term code sustainability.",
      },
      stack: ["Vue.js 3", "TypeScript", "Pinia", "Vite"],
    },
    {
      company: "Hellocare",
      role: {
        fr: "Développeur Fullstack | Vue.js & Symfony",
        en: "Fullstack Developer | Vue.js & Symfony",
      },
      period: "2018 — 2022",
      type: "dev",
      freelance: true,
      remote: true,
      description: {
        fr: "Refonte complète de la solution de téléconsultation. Audit et réécriture from scratch pour éliminer une architecture micro-services inmaintenable. Intégration de la visioconférence (Twilio / WebRTC) et développement de fondations robustes pour la scalabilité du produit.",
        en: "Complete redesign of the telemedicine platform. Audited and rewrote from scratch to replace an unmaintainable micro-services architecture. Integrated video conferencing (Twilio / WebRTC) and built robust foundations for product scalability.",
      },
      stack: ["Vue.js", "Symfony", "PHP", "Twilio", "WebRTC"],
    },
    {
      company: "SeFaireAider.com",
      role: {
        fr: "Développeur Web Fullstack",
        en: "Fullstack Web Developer",
      },
      period: "2016 — 2018",
      location: "Sanary-sur-Mer",
      type: "dev",
      description: {
        fr: "Développement et maintenance de la plateforme web.",
        en: "Development and maintenance of the web platform.",
      },
      stack: ["Symfony", "PHP", "JavaScript"],
    },
    {
      company: "R.D.P.",
      role: {
        fr: "Développeur Web",
        en: "Web Developer",
      },
      period: "2016",
      location: "Luxembourg",
      type: "dev",
      description: {
        fr: "Maintenance des sites existants (Symfony 2.5). Travail autonome : réception des besoins, mise en place des modifications et livraison pour validation.",
        en: "Maintenance of existing websites (Symfony 2.5). Autonomous work: gathering requirements, implementing changes, and delivering for validation.",
      },
      stack: ["Symfony 2", "PHP"],
    },
    {
      company: "A2Zi",
      role: {
        fr: "Développeur Symfony, React, Angular",
        en: "Symfony, React & Angular Developer",
      },
      period: "2013 — 2016",
      location: "Commercy",
      type: "dev",
      description: {
        fr: "Développement d'un projet médical d'envergure from scratch. Mise en place des bonnes pratiques (GitFlow, tests fonctionnels, migrations Doctrine) et automatisation du workflow front-end.",
        en: "Developed a large-scale medical project from scratch. Established best practices (GitFlow, functional tests, Doctrine migrations) and automated the front-end workflow.",
      },
      stack: ["Symfony 2", "AngularJS", "React", "PHP"],
    },
    {
      company: "Centre Hospitalier Saint-Nicolas",
      role: {
        fr: "Technicien de maintenance informatique",
        en: "IT Maintenance Technician",
      },
      period: "2010 — 2012",
      location: "Verdun",
      type: "other",
      description: {
        fr: "Maintenance et gestion du parc informatique. Assistance aux utilisateurs.",
        en: "IT infrastructure maintenance and management. User support.",
      },
    },
    {
      company: "Itraque SARL",
      role: {
        fr: "Concepteur Développeur de Sites Internet",
        en: "Web Developer & Designer",
      },
      period: "2008 — 2009",
      type: "dev",
      remote: true,
      description: {
        fr: "Réalisation et maintenance des sites web internes à la société.",
        en: "Development and maintenance of internal company websites.",
      },
    },
    {
      company: "Virtuellement",
      role: {
        fr: "Concepteur Développeur de Sites Internet",
        en: "Web Developer & Designer",
      },
      period: "2007 — 2008",
      type: "dev",
      remote: true,
      description: {
        fr: "Conception et développement des sites internet de la société.",
        en: "Design and development of the company's websites.",
      },
    },
    {
      company: "Centre Hospitalier Saint-Nicolas",
      role: {
        fr: "Technicien de maintenance informatique",
        en: "IT Maintenance Technician",
      },
      period: "2003 — 2005",
      location: "Verdun",
      type: "other",
      description: {
        fr: "Maintenance et gestion du parc informatique. Assistance aux utilisateurs.",
        en: "IT infrastructure maintenance and management. User support.",
      },
    },
    {
      company: "Maison Familiale",
      role: {
        fr: "Responsable informatique",
        en: "IT Manager",
      },
      period: "2003",
      location: "Bras-sur-Meuse",
      type: "other",
      description: {
        fr: "Mise en place et maintenance du parc informatique. Assistance aux utilisateurs. Gestion du matériel.",
        en: "IT infrastructure setup and maintenance. User support. Hardware management.",
      },
    },
    {
      company: "Xtrasource",
      role: {
        fr: "Technicien en télé-assistance",
        en: "Remote Support Technician",
      },
      period: "2001 — 2002",
      location: "Metz",
      type: "other",
      description: {
        fr: "Prise en charge des appels, diagnostic et résolution de problèmes matériels et logiciels par téléphone.",
        en: "Handling calls, diagnosing and resolving hardware and software issues over the phone.",
      },
    },
  ],
};
