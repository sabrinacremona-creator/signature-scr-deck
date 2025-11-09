
import { useEffect } from 'react'
import { Check, ArrowRight, Phone, Mail, Globe, BadgeCheck, Zap, Camera } from 'lucide-react'

const brand = {
  blue: '#223256',
  gold: '#95642a',
  yellow: '#f4ea98',
  turquoise: '#4481eb',
}

const pastel = {
  white: '#ffffff',
  blue: 'rgba(34,50,86,.04)',
  turquoise: 'rgba(68,129,235,.06)',
  gold: 'rgba(149,100,42,.07)',
}

function SectionWrap({ tone = 'white', children, id }: { tone?: 'white' | 'blue' | 'turquoise' | 'gold', children: React.ReactNode, id?: string }) {
  const bg = (pastel as any)[tone]
  return (
    <section id={id} className="relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(900px 400px at 100% -10%, ${pastel.blue}, transparent)` }} />
      <div className="relative" style={{ background: bg }}>
        <div className="max-w-7xl mx-auto px-6 py-16">{children}</div>
      </div>
    </section>
  )
}

function SectionTitle({ kicker, title, subtitle, align = 'center' }: { kicker?: string, title: string, subtitle?: string, align?: 'left' | 'center' }) {
  return (
    <div className={`max-w-5xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-10`}>
      {kicker && (
        <div className="inline-flex items-center rounded-full text-sm px-3 py-1 mb-4" style={{ background: brand.yellow, color: brand.blue }}>{kicker}</div>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: brand.blue }}>{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-slate-600">{subtitle}</p>}
    </div>
  )
}

function Card({ children, className = '', tone = 'white' }: { children: React.ReactNode, className?: string, tone?: 'white' | 'blue' | 'turquoise' | 'gold' }) {
  const bg = (pastel as any)[tone]
  return (
    <div className={`rounded-2xl shadow-lg border p-6 ${className}`} style={{ borderColor: brand.gold, background: bg }}>
      {children}
    </div>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mr-2 mb-2" style={{ background: brand.blue, color: brand.yellow }}>{children}</span>
  )
}

function ImageFrame({ caption }: { caption?: string }) {
  return (
    <div className="rounded-3xl aspect-[4/3] w-full border overflow-hidden" style={{ borderColor: brand.gold, background: `linear-gradient(135deg, ${brand.turquoise}22, ${brand.blue}08), linear-gradient(0deg, #fff, #fff)` }}>
      <div className="h-full w-full grid place-items-center text-center p-8">
        <div className="text-slate-700">
          <Camera className="h-8 w-8 mx-auto mb-2" />
          <div className="text-lg font-medium">Espace visuel</div>
          <div className="text-slate-500">Remplacez par vos photos de propriété</div>
          {caption && <div className="text-xs text-slate-400 mt-2">{caption}</div>}
        </div>
      </div>
    </div>
  )
}

function Collage() {
  return (
    <div className="relative h-80">
      <div className="absolute inset-0 -rotate-2">
        <ImageFrame caption="Vue mer / terrasse" />
      </div>
      <div className="absolute right-6 -bottom-6 w-2/5 rotate-3">
        <ImageFrame caption="Chambre master" />
      </div>
      <div className="absolute -left-4 -bottom-8 w-2/5 -rotate-6">
        <ImageFrame caption="Salon lumineux" />
      </div>
    </div>
  )
}

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen" style={{ background: '#f7f8fb' }}>
      <header className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(1200px 600px at 80% -10%, ${brand.turquoise}22, transparent), linear-gradient(120deg, ${brand.blue}, ${brand.blue})` }} />
        <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full grid place-items-center" style={{ background: brand.yellow, color: brand.blue, boxShadow: '0 10px 30px rgba(0,0,0,.15)' }}>SC</div>
              <div>
                <div className="text-white text-lg font-semibold">Signature Costa Realty</div>
                <div className="text-white/70 text-xs">Puerto Aventuras — Riviera Maya</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#valeur" className="text-sm opacity-90 hover:opacity-100" style={{ color: brand.yellow }}>Pourquoi nous</a>
              <a href="#offre" className="text-sm opacity-90 hover:opacity-100" style={{ color: brand.yellow }}>Packs</a>
              <a href="#etudes" className="text-sm opacity-90 hover:opacity-100" style={{ color: brand.yellow }}>Résultats</a>
              <a href="#cta" className="rounded-full px-4 py-2 font-medium" style={{ background: brand.yellow, color: brand.blue }}>Nous contacter</a>
            </nav>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mt-14">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl leading-tight font-semibold">Gestion de propriétés en location de vacances</h1>
              <p className="mt-5 text-white/80 text-lg">Luxe discret, service professionnel, résultats mesurables. Visibilité totale, app concierge jour et nuit, équipe terrain prête à intervenir.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Pill><Globe className="h-4 w-4" /> Visibilité plateformes et site</Pill>
                <Pill><Zap className="h-4 w-4" /> Equipe terrain réactive</Pill>
                <Pill><BadgeCheck className="h-4 w-4" /> Concierge 24 7 via App</Pill>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <a href="#cta" className="rounded-full px-6 py-3 font-semibold inline-flex items-center gap-2" style={{ background: brand.yellow, color: brand.blue }}>Audit offert <ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>
            <div><Collage /></div>
          </div>
        </div>
      </header>

      <SectionWrap id="valeur" tone="white">
        <SectionTitle kicker="Pourquoi choisir Signature" title="Ce qui nous différencie" subtitle="Des fondations solides pour une performance durable" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Globe className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Visibilité maximale</h3>
                <p className="mt-2 text-slate-600">Site direct performant, diffusion sur toutes les plateformes majeures et réseaux d’agents locaux.</p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Zap className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Opérations instantanées</h3>
                <p className="mt-2 text-slate-600">Equipe terrain complète pour accueil, ménage, maintenance et contrôle qualité.</p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <BadgeCheck className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>App et concierge 24 7</h3>
                <p className="mt-2 text-slate-600">Application ludique et chat direct pour guider le voyageur, vendre des services, gérer les demandes.</p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      <SectionWrap id="offre" tone="white">
        <SectionTitle kicker="Offre" title="Packs de gestion" subtitle="Trois niveaux, une exigence commune" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="text-sm mb-2" style={{ color: brand.gold }}>Pack</div>
            <h3 className="text-2xl font-semibold" style={{ color: brand.blue }}>Essentiel</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex items-start gap-2"><Check className="h-5 w-5" style={{ color: brand.turquoise }} /><span>Mise en marché multicanal</span></li>
              <li className="flex items-start gap-2"><Check className="h-5 w-5" style={{ color: brand.turquoise }} /><span>Opérations terrain</span></li>
              <li className="flex items-start gap-2"><Check className="h-5 w-5" style={{ color: brand.turquoise }} /><span>Reporting mensuel</span></li>
            </ul>
          </Card>
          <Card className="relative" tone="white">
            <div className="absolute -top-3 right-6 text-xs font-semibold px-3 py-1 rounded-full" style={{ background: brand.yellow, color: brand.blue }}>Recommandé</div>
            <div className="text-sm mb-2" style={{ color: brand.gold }}>Pack</div>
            <h3 className="text-2xl font-semibold" style={{ color: brand.blue }}>Premium</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex items-start gap-2"><Check className="h-5 w-5" style={{ color: brand.turquoise }} /><span>Tarifs dynamiques avancés</span></li>
              <li className="flex items-start gap-2"><Check className="h-5 w-5" style={{ color: brand.turquoise }} /><span>Médias pro et SEO</span></li>
              <li className="flex items-start gap-2"><Check className="h-5 w-5" style={{ color: brand.turquoise }} /><span>Optimisation calendrier</span></li>
            </ul>
          </Card>
          <Card tone="white">
            <div className="text-sm mb-2" style={{ color: brand.gold }}>Pack</div>
            <h3 className="text-2xl font-semibold" style={{ color: brand.blue }}>Signature</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex items-start gap-2"><Check className="h-5 w-5" style={{ color: brand.turquoise }} /><span>Concierge 24 7 et app dédiée</span></li>
              <li className="flex items-start gap-2"><Check className="h-5 w-5" style={{ color: brand.turquoise }} /><span>Suivi qualité renforcé</span></li>
              <li className="flex items-start gap-2"><Check className="h-5 w-5" style={{ color: brand.turquoise }} /><span>Visites propriétaires planifiées</span></li>
            </ul>
          </Card>
        </div>
      </SectionWrap>

      <SectionWrap id="etudes" tone="turquoise">
        <SectionTitle kicker="Etudes de cas" title="Des résultats concrets" subtitle="Exemples de la Riviera Maya" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card tone="white">
            <div className="text-sm mb-2" style={{ color: brand.gold }}>Casa La Torre</div>
            <div className="text-lg font-semibold" style={{ color: brand.blue }}>Repositionnement haut de gamme</div>
            <p className="mt-2 text-slate-600">Reprise de la gestion, rénovation supervisée, stratégie tarifaire et multicanal. Hausse rapide des réservations et fidélisation.</p>
          </Card>
          <Card tone="white">
            <div className="text-sm mb-2" style={{ color: brand.gold }}>Grand Peninsula</div>
            <div className="text-lg font-semibold" style={{ color: brand.blue }}>Valorisation d’actif</div>
            <p className="mt-2 text-slate-600">Accompagnement investisseurs, storytelling, médias premium. Forte traction et montée en valeur.</p>
          </Card>
        </div>
      </SectionWrap>

      <section id="cta" className="relative">
        <div className="absolute inset-0" style={{ background: `linear-gradient(120deg, ${brand.blue}, ${brand.blue})` }} />
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 text-white">
              <div className="text-sm mb-2" style={{ color: brand.yellow }}>Prochaines étapes</div>
              <h3 className="text-3xl font-semibold">Audit offert de votre propriété</h3>
              <p className="mt-3 text-white/80">Recevez une estimation de revenu, une liste d’améliorations prioritaires et un plan de lancement précis.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:rentals@signaturecostarealty.com" className="rounded-full px-6 py-3 font-semibold inline-flex items-center gap-2" style={{ background: brand.yellow, color: brand.blue }}><Mail className="h-4 w-4" /> rentals@signaturecostarealty.com</a>
                <a href="tel:+529842696189" className="rounded-full px-6 py-3 font-semibold inline-flex items-center gap-2 border" style={{ color: brand.yellow, borderColor: brand.yellow }}><Phone className="h-4 w-4" /> +52 984 269 6189</a>
              </div>
            </div>
            <Card className="bg-white/95 backdrop-blur" tone="white">
              <div className="text-lg font-semibold" style={{ color: brand.blue }}>Checklist d’entrée</div>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li className="flex items-start gap-2"><Check className="h-5 w-5" style={{ color: brand.turquoise }} /> Titre de propriété et règlements</li>
                <li className="flex items-start gap-2"><Check className="h-5 w-5" style={{ color: brand.turquoise }} /> Liste équipements et inventaire</li>
                <li className="flex items-start gap-2"><Check className="h-5 w-5" style={{ color: brand.turquoise }} /> Accès, codes et consignes</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full grid place-items-center" style={{ background: brand.blue, color: brand.yellow }}>SC</div>
            <div className="text-slate-700">Signature Costa Realty — Gestion de propriétés</div>
          </div>
          <div className="text-sm text-slate-500">© {new Date().getFullYear()} Signature Costa Realty. Tous droits réservés.</div>
        </div>
      </footer>
    </div>
  )
}
