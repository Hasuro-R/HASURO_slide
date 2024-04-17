import { WorksType } from '@/types/workType';
import anisphereImage from '@/public/work/AniSphereOGP.png';
import ulopoliImage from '@/public/work/ulpoli.png';
import basemeImage from '@/public/work/baseme.webp';

export const works = <WorksType[]>[
  {
    title: 'AniSphere', image: anisphereImage, url: 'https://anisphere.jp', description: 'アニメ共有アプリ', type: '個人開発', techs: ['next', 'rails']
  },
  {
    title: 'ulpoli', image: ulopoliImage, url: 'https://hack-u-presentation-slide.vercel.app', description: '近未来鬼ごっこアプリ', type: 'ハッカソン', techs: ['swift', 'firebase', 'next']
  },
  {
    title: 'BaseMe', image: basemeImage, url: 'https://baseme.app', description: '株式会社アレスグッド', type: 'インターン', techs: ['next', 'rails'],
  },
  {
    title: 'Ralbods', image: anisphereImage, url: '', description: '開発者向け日記アプリ', type: '共同開発', techs: ['next', 'prisma'],
  },
];
