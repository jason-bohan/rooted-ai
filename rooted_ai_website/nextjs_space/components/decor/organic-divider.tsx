/**
 * A hand-drawn contour divider — a soft, irregular organic edge used to
 * break up the straight horizontal rules between sections. Deterministic
 * path (no runtime randomness) so SSR and client markup match.
 */

type Tone = 'accent' | 'moss' | 'soft'

interface OrganicDividerProps {
  className?: string
  tone?: Tone
  flip?: boolean
}

const PALETTE: Record<Tone, string> = {
  accent: 'hsl(var(--accent))',
  moss: 'hsl(var(--primary))',
  soft: 'hsl(var(--border))',
}

// one irregular contour, drawn so its open edge faces the parent's content
const contourD =
  'M0,40 C60,20 120,52 190,34 C250,18 300,44 360,28 C420,12 480,40 540,26 ' +
  'C610,10 670,36 740,20 C800,6 850,30 920,18 C970,10 1000,22 1000,22 ' +
  'L1000,70 L0,70 Z'

export function OrganicDivider({ className, tone = 'accent', flip = false }: OrganicDividerProps) {
  return (
    <svg
      viewBox="0 0 1000 70"
      preserveAspectRatio="none"
      className={className}
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
      aria-hidden
    >
      <path d={contourD} fill={PALETTE[tone]} opacity="0.9" />
    </svg>
  )
}
