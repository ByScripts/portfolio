import type { Profile } from '@/types/profile'

export const profile: Profile = {
  name: 'Thierry Goettelmann',

  title: {
    fr: 'Développeur Front-End Senior',
    en: 'Senior Front-End Developer',
  },

  description: {
    fr: 'Spécialiste Vue.js (Certifié Senior Level II) & TypeScript',
    en: 'Vue.js (Certified Senior Level II) & TypeScript Specialist',
  },

  location: 'Toulon, France',

  email: 'thierry@byscripts.info',

  socials: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/thierrygoettelmann',
      icon: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/byscripts',
      icon: 'github',
    },
  ],
}
