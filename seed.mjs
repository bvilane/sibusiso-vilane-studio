import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '7qxbbexz',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const journals = [
  {
    title: "Seven Summits: Conquering the Highest Peaks",
    slug: "seven-summits-journey",
    date: "June 15, 2019",
    readTime: "12 min read",
    author: "Sibusiso Vilane",
    location: "Global",
    category: "Mountain Climbing",
    excerpt: "The journey to climb the highest mountains on each of the seven continents, a quest that would transform my life and challenge everything I knew about myself.",
    significant: true,
    content: [
      "The Seven Summits challenge represents the ultimate mountaineering achievement: climbing the highest mountains on each of the seven continents. When I first contemplated this journey, I knew it would demand everything from me - physically, mentally, and spiritually.",
      "My journey began with Mount Kilimanjaro, Africa's highest peak at 5,895 meters. As an African, standing on the 'Roof of Africa' was a profound moment that ignited my passion to pursue the remaining summits.",
      "Mount Everest, standing at 8,848 meters, represents the pinnacle of mountaineering. The journey to its summit pushed me beyond what I thought possible, through the treacherous Khumbu Icefall, across the Western Cwm, and finally up the Hillary Step to the highest point on Earth.",
    ],
  },
  {
    title: "My 13th Comrades Marathon, Just One Week After Everest Trek",
    slug: "comrades-marathon-2023",
    date: "June 11, 2023",
    readTime: "12 min read",
    author: "Sibusiso Vilane",
    location: "Durban to Pietermaritzburg, South Africa",
    category: "Endurance",
    excerpt: "Just seven days after trekking to Everest Base Camp, Sibusiso laced up for his 13th Comrades Marathon. This is the story of heart, grit, and the refusal to quit.",
    significant: false,
    content: [
      "Seven days. That's all the time between touching down from the Himalayas and lining up at the start of the Comrades Marathon. People thought I was crazy. Maybe I was.",
      "The Comrades Marathon is not just a race—it's a pilgrimage. At 87 kilometres, it's the world's oldest and largest ultra-marathon, and it has been a constant thread in my life.",
    ],
  },
  {
    title: "Mount Everest the Historic Trek: Celebrating 20 Years Since the Top of the World",
    slug: "everest-20-years-part1",
    date: "May 14, 2023",
    readTime: "15 min read",
    author: "Sibusiso Vilane",
    location: "Himalaya, Nepal",
    category: "Anniversary",
    excerpt: "Twenty years after making history as the first Black African to summit Mount Everest, Sibusiso returns to the Himalayas. This emotional two-part journal chronicles his trek back to Base Camp.",
    significant: true,
    content: [
      "Twenty years. Two decades since I stood on top of the world and became the first Black African to summit Mount Everest. Now I was going back—not to climb, but to remember.",
      "The trek to Everest Base Camp is a journey through memory. Every step brought back moments from 2003—the fear, the determination, the friendship that made it possible.",
    ],
  },
  {
    title: "Mount Everest 20th Anniversary Part 2",
    slug: "everest-20-years-part2",
    date: "May 28, 2023",
    readTime: "12 min read",
    author: "Sibusiso Vilane",
    location: "Himalaya, Nepal",
    category: "Anniversary",
    excerpt: "The conclusion of the 20th anniversary trek. Reaching Base Camp, the memories that flooded back, and the new generation of climbers carrying the torch.",
    significant: false,
    content: [
      "Reaching Everest Base Camp after twenty years was like meeting an old friend. The mountain hadn't changed, but I had. The years had given me perspective on what that first climb truly meant.",
    ],
  },
  {
    title: "Mount Everest: My First Ascent to the Top of the World",
    slug: "everest-first-ascent",
    date: "2019",
    readTime: "15 min read",
    author: "Sibusiso Vilane",
    location: "Mount Everest, Nepal",
    category: "Mountaineering",
    excerpt: "In 2003, Sibusiso became the first Black African to summit Mount Everest. The road there started with a letter, no funding, and little experience, just the courage to try.",
    significant: true,
    content: [
      "The story of my first Everest summit begins not at Base Camp, but in a small office in Johannesburg where I sat down to write a letter that would change my life forever.",
      "I had no climbing experience to speak of. No sponsors. No connections in the mountaineering world. What I had was a dream that wouldn't let me sleep, and a stubborn refusal to accept that some dreams are only for certain people.",
      "John Doble believed in me when nobody else did. He saw something in me that I was still discovering in myself. Without his friendship and unwavering support, Everest would have remained just a dream.",
    ],
  },
  {
    title: "The Matterhorn 2008, A Climb for the Love of It",
    slug: "matterhorn-climb-2008",
    date: "2021",
    readTime: "12 min read",
    author: "Sibusiso Vilane",
    location: "Matterhorn, Switzerland",
    category: "Mountaineering",
    excerpt: "Sibusiso Vilane shares the emotional story of his 2008 Matterhorn climb, honoring a promise and a powerful friendship with John Doble.",
    significant: false,
    content: [
      "The Matterhorn was never about conquest. It was about a promise—a promise made to my friend John Doble, who believed that mountains should be climbed for the love of it, not for records or glory.",
      "Standing at the base of that iconic pyramid of rock, I felt the weight of that promise. John had always wanted us to climb the Matterhorn together.",
    ],
  },
  {
    title: "Mental Resilience: When the Mind Finishes What the Body Can't",
    slug: "mental-resilience-virtual-comrades",
    date: "June 13, 2021",
    readTime: "8 min read",
    author: "Sibusiso Vilane",
    location: "South Africa",
    category: "Endurance",
    excerpt: "After vowing never to run another virtual race, I take on the 90km Virtual Comrades Marathon and finish through sheer mental resilience.",
    significant: false,
    content: [
      "I swore I would never run another virtual race. The isolation of running alone, without the energy of thousands of runners around you, had broken something in me the last time.",
      "But the Comrades Marathon calls. It always calls. And when the 2021 edition was announced as virtual again, something in me stirred.",
      "At kilometre 60, my body was done. My legs were screaming. Every step was a negotiation between my mind and my muscles. This is where mental resilience becomes everything.",
    ],
  },
  {
    title: "Twin Poles Expedition: From North to South",
    slug: "twin-poles-expedition",
    date: "2015",
    readTime: "14 min read",
    author: "Sibusiso Vilane",
    location: "Arctic & Antarctic",
    category: "Polar Expedition",
    excerpt: "The story of becoming the first Black person to ski to both the North and South Poles—a journey through the most extreme environments on Earth.",
    significant: true,
    content: [
      "The polar regions are the loneliest places on Earth. No mountains to hide behind, no trees for shelter—just you, the ice, and the relentless wind that never stops.",
      "My journey to both poles was about proving that human determination has no colour, no boundary, no limit. It was about showing every child in Africa that the impossible is just a word.",
    ],
  },
];

async function seed() {
  console.log('Seeding journals into Sanity...');

  for (const journal of journals) {
    const contentBlocks = journal.content.map((text) => ({
      _type: 'block',
      _key: Math.random().toString(36).slice(2, 10),
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: Math.random().toString(36).slice(2, 10),
          text,
          marks: [],
        },
      ],
    }));

    const doc = {
      _type: 'journal',
      title: journal.title,
      slug: { _type: 'slug', current: journal.slug },
      date: journal.date,
      readTime: journal.readTime,
      author: journal.author,
      location: journal.location,
      category: journal.category,
      excerpt: journal.excerpt,
      significant: journal.significant,
      content: contentBlocks,
    };

    const result = await client.create(doc);
    console.log(`  ✓ ${journal.title} (${result._id})`);
  }

  console.log(`\nDone! Seeded ${journals.length} journals.`);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
