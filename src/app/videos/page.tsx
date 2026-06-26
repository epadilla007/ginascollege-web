import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Videos — Campus Tours & Program Previews | Gina\'s College',
  description: 'Watch videos about Gina\'s College programs, campus tours, and student success stories. See what life at Gina\'s College looks like.',
}

const videos = [
  {
    title: 'Campus Tour — Mississauga',
    description: 'Take a virtual tour of our Mississauga campus, student clinic, and classrooms.',
  },
  {
    title: 'Medical Aesthetics Program',
    description: 'Learn what a typical day looks like for students in our Medical Aesthetics diploma program.',
  },
  {
    title: 'Student Success Stories',
    description: 'Hear from graduates about their experience at Gina\'s College and where they are working now.',
  },
]

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Cream Hero */}
      <div style={{ backgroundColor: 'var(--color-cream)' }} className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="container max-w-[860px]">
          <p className="eyebrow text-[#01426A]/80 mb-5">Video Gallery</p>
          <h1
            className="font-serif italic text-[#01426A] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
          >
            See Gina&apos;s College in action.
          </h1>
          <p
            className="text-[#000000]/60 leading-relaxed max-w-[580px]"
            style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}
          >
            Watch videos about our programs, our campuses, and our graduates. See what life at Gina's College looks like before you visit.
          </p>
        </div>
      </div>

      {/* Video Cards */}
      <div className="bg-white py-16 lg:py-20">
        <div className="container max-w-[860px]">
          <div className="space-y-8 mb-14">
            {videos.map((video) => (
              <div
                key={video.title}
                className="border"
                style={{ borderColor: 'var(--color-cream-deep)' }}
              >
                {/* Video Placeholder */}
                <div
                  className="aspect-video flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: 'var(--color-cream)' }}
                >
                  <div className="w-16 h-16 bg-[#01426A]/90 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5l11 7-11 7V5z" fill="white" />
                    </svg>
                  </div>
                </div>
                {/* Card Content */}
                <div className="p-7">
                  <h2
                    className="font-serif italic text-[#01426A] mb-2"
                    style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}
                  >
                    {video.title}
                  </h2>
                  <p className="text-[#000000]/60 text-base leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navy CTA Strip */}
      <div className="bg-[#01426A]">
        <div className="container py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-[560px]">
              <p className="eyebrow text-white/60 mb-5">Campuses</p>
              <h2
                className="font-serif italic text-white leading-[1.0]"
                style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
              >
                Visit a campus.
              </h2>
              <p className="text-white/60 text-sm mt-4 leading-relaxed">
                For the latest videos, visit our social media channels or contact us to book a campus tour in person.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/contact" className="btn btn-white">Book a Campus Tour</Link>
              <Link href="/campuses" className="btn btn-outline-white">Visit Our Campus Gallery</Link>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
