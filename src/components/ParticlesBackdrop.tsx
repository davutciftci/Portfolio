import { lazy, Suspense } from 'react'

const Particles = lazy(() => import('./reactbits/Backgrounds/Particles/Particles'))

const defaultProps = {
  particleCount: 40,
  particleColors: ['#ff6a00', '#1a9c8a', '#ffffff'] as string[],
  moveParticlesOnHover: false,
  alphaParticles: true,
  particleBaseSize: 100,
  speed: 0.1,
}

type Props = {
  /** When false, no WebGL — keeps layout slot for paint-first */
  enabled: boolean
}

export default function ParticlesBackdrop({ enabled }: Props) {
  if (!enabled) {
    return <div className="aurora-bg" aria-hidden />
  }

  return (
    <div className="aurora-bg">
      <Suspense fallback={null}>
        <Particles {...defaultProps} />
      </Suspense>
    </div>
  )
}
