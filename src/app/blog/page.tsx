import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Blog | Gina's College of Advanced Aesthetics",
  description:
    "Career advice, industry knowledge, and program guides from Gina's College of Advanced Aesthetics.",
}

interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
}

const posts: BlogPost[] = [
  {
    slug: "beauty-school-in-waterloo-ontario-programs-at-gina-s-college",
    title: "Beauty School in Waterloo, Ontario: Programs at Gina's College",
    date: "May 21, 2026",
    excerpt:
      "If you're looking for a beauty school in Waterloo, Ontario, Gina's College of Advanced Aesthetics offers one of the most respected aesthetics programs in the region. Located at 385 Weber St.",
  },
  {
    slug: "hairstyling-school-in-ontario-programs-careers-and-how-to-enroll",
    title: "Hairstyling School in Ontario: Programs, Careers, and How to Enroll",
    date: "May 21, 2026",
    excerpt:
      "The demand for trained hairstylists in Ontario remains strong. Salons, spas, film and TV sets, editorial teams, and private clients all need skilled stylists. Here's what to know before you choose a program.",
  },
  {
    slug: "how-long-does-it-take-to-become-an-esthetician-in-ontario",
    title: "How Long Does It Take to Become an Esthetician in Ontario?",
    date: "May 21, 2026",
    excerpt:
      "Becoming an esthetician in Ontario takes between 6 months and 2 years, depending on the type of program you choose and the level of credential you're aiming for. Here's the full breakdown.",
  },
  {
    slug: "aesthetics-school-in-mississauga-your-guide-to-programs-and-enrollment",
    title: "Aesthetics School in Mississauga: Your Guide to Programs and Enrollment",
    date: "May 21, 2026",
    excerpt:
      "If you're searching for an aesthetics school in Mississauga, you're looking for more than a course. You're looking for a credential that opens doors. Here's what Gina's College offers at its Mississauga campus.",
  },
  {
    slug: "osap-eligible-beauty-schools-in-ontario-what-you-need-to-know",
    title: "OSAP-Eligible Beauty Schools in Ontario: What You Need to Know",
    date: "May 21, 2026",
    excerpt:
      "Yes, you can use OSAP for beauty school in Ontario, but only at registered career colleges that meet eligibility requirements. Here's how it works and which programs at Gina's College qualify.",
  },
  {
    slug: "beauty-school-near-me-in-ontario-how-to-find-the-right-one",
    title: "Beauty School Near Me in Ontario: How to Find the Right One",
    date: "April 13, 2026",
    excerpt:
      "Searching for a beauty school near you in Ontario? The hard part isn't finding a school. It's figuring out which one will actually prepare you for a career. Here's what to look for.",
  },
  {
    slug: "medical-aesthetician-program-in-ontario-what-to-expect",
    title: "Medical Aesthetician Program in Ontario: What to Expect",
    date: "April 13, 2026",
    excerpt:
      "A medical aesthetician program in Ontario trains you in laser therapy, microneedling, chemical peels, and advanced skin analysis. Here's what a full diploma program covers and what graduates earn.",
  },
  {
    slug: "cidesco-international-diploma-what-it-is-and-why-it-matters",
    title: "CIDESCO International Diploma: What It Is and Why It Matters",
    date: "April 13, 2026",
    excerpt:
      "CIDESCO is the highest globally recognized qualification in beauty therapy and spa education. Gina's College is Ontario's only CIDESCO-accredited school. Here's what the credential means for your career.",
  },
  {
    slug: "how-to-become-an-esthetician-in-ottawa-ontario",
    title: "How to Become an Esthetician in Ottawa, Ontario",
    date: "April 13, 2026",
    excerpt:
      "Ottawa has a growing aesthetics and wellness industry. Spas, medical clinics, and luxury resorts hire trained estheticians year-round. Here's exactly what it takes to start this career in Ottawa.",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      {/* Header */}
      <section className="container mb-16">
        <p className="eyebrow text-[#01426A] mb-4">Blog</p>
        <h1
          className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
          style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
        >
          Beauty &amp; Aesthetics Insights.
        </h1>
        <p className="text-[#000000]/60 text-lg leading-relaxed max-w-[560px]">
          Career advice, industry knowledge, and program guides from Gina&apos;s College.
        </p>
      </section>

      {/* Post grid */}
      <section className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-[#E9E9E9] rounded-[8px] p-6 flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm text-[#000000]/40 mb-3">{post.date}</p>
              <h2 className="font-display text-[#01426A] text-xl font-semibold leading-snug mb-3">
                {post.title}
              </h2>
              <p className="text-[#000000]/60 text-sm leading-relaxed flex-1 mb-5">
                {post.excerpt.length > 160
                  ? post.excerpt.slice(0, 160) + '...'
                  : post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-semibold text-[#01426A] hover:underline self-start"
              >
                Read article &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="container mt-20">
        <div className="bg-[#01426A] rounded-[8px] px-8 py-12 md:px-12 text-center">
          <h2 className="font-display text-white text-3xl md:text-4xl font-semibold mb-4">
            Ready to start your aesthetics career?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-[480px] mx-auto">
            Explore diploma programs at Gina&apos;s College. OSAP-eligible. Campuses in Mississauga,
            Waterloo, and Ottawa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="btn btn-primary">
              Apply Now
            </Link>
            <Link href="/consultation" className="btn btn-secondary border-white text-white">
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
