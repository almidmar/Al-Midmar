import React, { useEffect, useMemo, useState } from 'react'

function clamp01(n) {
  return Math.min(1, Math.max(0, n))
}

function normalizeHue(deg) {
  let h = deg % 360
  if (h < 0) h += 360
  return h
}

function hexToRgb(hex) {
  const raw = hex.replace('#', '').trim()
  const full = raw.length === 3 ? raw.split('').map((c) => c + c).join('') : raw
  if (full.length !== 6) return null
  const n = Number.parseInt(full, 16)
  if (Number.isNaN(n)) return null
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

function rgbToHex({ r, g, b }) {
  const to2 = (x) => x.toString(16).padStart(2, '0')
  return `#${to2(r)}${to2(g)}${to2(b)}`.toUpperCase()
}

function mixHex(a, b, weightB = 0.5) {
  const ra = hexToRgb(a)
  const rb = hexToRgb(b)
  if (!ra || !rb) return a
  const w = clamp01(weightB)
  return rgbToHex({
    r: Math.round(ra.r * (1 - w) + rb.r * w),
    g: Math.round(ra.g * (1 - w) + rb.g * w),
    b: Math.round(ra.b * (1 - w) + rb.b * w),
  })
}

function hexToRgbCss(hex) {
  const rgb = hexToRgb(hex)
  if (!rgb) return '0 0 0'
  return `${rgb.r} ${rgb.g} ${rgb.b}`
}

function rgbToHsl({ r, g, b }) {
  const rn = r / 255
  const gn = g / 255
  const bn = b / 255
  const max = Math.max(rn, gn, bn)
  const min = Math.min(rn, gn, bn)
  const d = max - min
  const l = (max + min) / 2

  if (d === 0) return { h: 0, s: 0, l }

  const s = d / (1 - Math.abs(2 * l - 1))
  let h
  switch (max) {
    case rn:
      h = ((gn - bn) / d) % 6
      break
    case gn:
      h = (bn - rn) / d + 2
      break
    default:
      h = (rn - gn) / d + 4
      break
  }
  h *= 60
  return { h: normalizeHue(h), s, l }
}

function hslToRgb({ h, s, l }) {
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2
  let rp = 0,
    gp = 0,
    bp = 0

  if (h < 60) {
    rp = c
    gp = x
  } else if (h < 120) {
    rp = x
    gp = c
  } else if (h < 180) {
    gp = c
    bp = x
  } else if (h < 240) {
    gp = x
    bp = c
  } else if (h < 300) {
    rp = x
    bp = c
  } else {
    rp = c
    bp = x
  }

  return {
    r: Math.round((rp + m) * 255),
    g: Math.round((gp + m) * 255),
    b: Math.round((bp + m) * 255),
  }
}

function rotateHue(hex, deg) {
  const rgb = hexToRgb(hex)
  if (!rgb) return hex
  const hsl = rgbToHsl(rgb)
  const rotated = { ...hsl, h: normalizeHue(hsl.h + deg) }
  return rgbToHex(hslToRgb(rotated))
}

function getScheme(baseHex, scheme) {
  const base = baseHex.toUpperCase()
  switch (scheme) {
    case 'complementary':
      return [base, rotateHue(base, 180)]
    case 'analogous':
      return [rotateHue(base, -30), base, rotateHue(base, 30)]
    case 'splitComplementary':
      return [base, rotateHue(base, 150), rotateHue(base, -150)]
    case 'triadic':
      return [base, rotateHue(base, 120), rotateHue(base, 240)]
    case 'tetradic':
    default:
      return [base, rotateHue(base, 90), rotateHue(base, 180), rotateHue(base, 270)]
  }
}

function getReadableTextColor(hex) {
  const rgb = hexToRgb(hex)
  if (!rgb) return '#111827'
  // Relative luminance (sRGB)
  const srgb = [rgb.r, rgb.g, rgb.b].map((v) => {
    const x = v / 255
    return x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4)
  })
  const L = 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2]
  return L > 0.55 ? '#111827' : '#FFFFFF'
}

export default function ColorCode() {
  const [base, setBase] = useState('#C4161C')
  const [scheme, setScheme] = useState('tetradic')
  const [lightness, setLightness] = useState(0)

  const adjustedBase = useMemo(() => {
    const rgb = hexToRgb(base)
    if (!rgb) return base
    const hsl = rgbToHsl(rgb)
    const l = clamp01(hsl.l + lightness / 100)
    return rgbToHex(hslToRgb({ ...hsl, l }))
  }, [base, lightness])

  const colors = useMemo(() => getScheme(adjustedBase, scheme), [adjustedBase, scheme])

  useEffect(() => {
    // Apply theme globally (primary + background/surface + readable text).
    const primary = colors[0] || '#C4161C'
    const secondary = colors[1] || primary
    const bg = mixHex(primary, '#FFFFFF', 0.94)
    const surface = mixHex(primary, '#FFFFFF', 0.97)
    const border = mixHex(primary, '#FFFFFF', 0.86)
    const text = getReadableTextColor(bg)
    const muted = mixHex(text, bg, 0.55)

    const root = document.documentElement
    root.style.setProperty('--app-primary', primary)
    root.style.setProperty('--app-primary-rgb', hexToRgbCss(primary))
    root.style.setProperty('--app-secondary', secondary)
    root.style.setProperty('--app-bg', bg)
    root.style.setProperty('--app-surface', surface)
    root.style.setProperty('--app-border', border)
    root.style.setProperty('--app-text', text)
    root.style.setProperty('--app-muted', muted)
  }, [colors])

  return (
    <section id="colorcode-section" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6 sm:p-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <span className="uppercase tracking-widest text-xs font-bold text-primary mb-2 block">Palette tool</span>
            <h2 className="font-display text-4xl md:text-5xl text-gray-900">Choose your color combo</h2>
            <p className="text-gray-600 mt-3 max-w-2xl">
              Pick a base color, choose a harmony, and copy HEX values for your brand system.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <label className="text-sm font-semibold text-gray-700">Base</label>
            <input
              type="color"
              value={base}
              onChange={(e) => setBase(e.target.value)}
              className="h-10 w-16 rounded-lg border border-gray-200 bg-white p-1"
              aria-label="Base color"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Harmony</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  ['tetradic', 'Tetradic'],
                  ['triadic', 'Triadic'],
                  ['complementary', 'Complementary'],
                  ['splitComplementary', 'Split comp'],
                  ['analogous', 'Analogous'],
                ].map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setScheme(id)}
                    className={[
                      'rounded-xl border px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors',
                      scheme === id ? 'border-primary bg-primary text-white' : 'border-gray-200 bg-white text-gray-900 hover:border-primary/40',
                    ].join(' ')}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-700">Lightness</label>
                <span className="text-sm font-bold text-gray-900">{lightness}%</span>
              </div>
              <input
                type="range"
                min={-30}
                max={30}
                value={lightness}
                onChange={(e) => setLightness(Number(e.target.value))}
                className="w-full accent-[color:var(--tw-accent,#c4161c)]"
              />
              <p className="text-xs text-gray-500">Adjusts the base color only, then recomputes the harmony.</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {colors.map((hex) => (
                <button
                  key={hex}
                  type="button"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(hex)
                    } catch {
                      // ignore (clipboard may be blocked); user can still read the value
                    }
                  }}
                  className="group rounded-2xl overflow-hidden border border-gray-200 shadow-sm text-left"
                  title="Click to copy HEX"
                >
                  <div className="h-24 sm:h-28" style={{ backgroundColor: hex }} />
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-gray-900">{hex}</div>
                      <div className="text-xs text-gray-500">Click to copy</div>
                    </div>
                    <div
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: hex,
                        color: getReadableTextColor(hex),
                        border: '1px solid rgba(0,0,0,0.08)',
                      }}
                    >
                      Aa
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}