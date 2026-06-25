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
    <main className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[800px]">

        {/* Header */}
        <p className="eyebrow text-[#01426A] mb-4">Video Gallery</p>
        <h1
          className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
        >
          See Gina&apos;s College in action.
        </h1>
        <p className="text-[#000000]/60 text-lg leading-relaxed mb-12">
          Watch videos about our programs, our campuses, and our graduates. See what life at Gina's College looks like before you visit.
        </p>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-8 mb-14">
          {videos.map((video) => (
            <div key={video.title} className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30">
              {/* Video Placeholder */}
              <div className="aspect-video bg-[#E9E9E9] rounded-[8px] flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="w-16 h-16 rounded-full bg-[#01426A]/90 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5l11 7-11 7V5z" fill="white" />
                  </svg>
                </div>
              </div>
              {/* Card Content */}
              <h2 className="font-display text-[#01426A] text-xl font-semibold mb-2">
                {video.title}
              </h2>
              <p className="text-[#000000]/60 text-base leading-relaxed">
                {video.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-[#000000]/60 text-lg leading-relaxed mb-8">
          For the latest videos, visit our social media channels or contact us for a campus tour.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn btn-primary">
            Book a Campus Tour
          </Link>
          <Link href="/campuses" className="btn btn-secondary">
            Visit Our Campus Gallery
          </Link>
        </div>

      </div>
    </main>
  )
}
