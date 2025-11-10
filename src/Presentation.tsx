/*
 * Presentation page component for the Signature Costa Realty website.
 *
 * This component mirrors the visual design of the existing site (colors,
 * typography, cards and section wrappers) and organises the long-form
 * content from the property management presentation into a scrolling
 * single‑page layout. Each section corresponds to a chapter of the deck
 * provided previously, summarised into concise bullet points. To use
 * this page, import and render <Presentation /> from your React app or
 * configure your router to display it on a dedicated route.
 */

import { useEffect } from 'react'
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BarChart4,
  BarChartSquare as FileBarChart,
  Broom,
  Briefcase,
  Camera,
  Calendar,
  CalendarClock,
  Check,
  CheckCircle,
  Checklist,
  ClipboardList,
  Database,
  DollarSign,
  Droplet,
  Eye,
  FileText,
  Gift,
  Globe,
  Handshake,
  Headphones,
  Heart,
  Home,
  Instagram,
  Laptop,
  Layers,
  Leaf,
  Lock,
  LogIn,
  Mail,
  Megaphone,
  Network,
  Percent,
  Phone,
  Receipt,
  Recycle,
  Repeat,
  Scale,
  Shield,
  ShoppingCart,
  Sun,
  Tag,
  Target,
  Tool,
  TrendingUp,
  Umbrella,
  Users,
  Zap,
} from 'lucide-react'

// Brand and pastel palettes reused from the main App
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

// Section container with radial accent and pastel background
function SectionWrap({ tone = 'white', children, id }: { tone?: 'white' | 'blue' | 'turquoise' | 'gold'; children: React.ReactNode; id?: string }) {
  const bg = (pastel as any)[tone]
  return (
    <section id={id} className="relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(900px 400px at 100% -10%, ${pastel.blue}, transparent)` }}
      />
      <div className="relative" style={{ background: bg }}>
        <div className="max-w-7xl mx-auto px-6 py-16">{children}</div>
      </div>
    </section>
  )
}

// Section title with optional kicker and subtitle
function SectionTitle({ kicker, title, subtitle, align = 'center' }: { kicker?: string; title: string; subtitle?: string; align?: 'left' | 'center' }) {
  return (
    <div className={`max-w-5xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-10`}>
      {kicker && (
        <div
          className="inline-flex items-center rounded-full text-sm px-3 py-1 mb-4"
          style={{ background: brand.yellow, color: brand.blue }}
        >
          {kicker}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: brand.blue }}>
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-slate-600">{subtitle}</p>}
    </div>
  )
}

// Card component used to box content
function Card({ children, className = '', tone = 'white' }: { children: React.ReactNode; className?: string; tone?: 'white' | 'blue' | 'turquoise' | 'gold' }) {
  const bg = (pastel as any)[tone]
  return (
    <div className={`rounded-2xl shadow-lg border p-6 ${className}`} style={{ borderColor: brand.gold, background: bg }}>
      {children}
    </div>
  )
}

// Presentation page
export default function Presentation() {
  // Enable smooth scrolling when navigating with anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen" style={{ background: '#f7f8fb' }}>
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(1200px 600px at 80% -10%, ${brand.turquoise}22, transparent), linear-gradient(120deg, ${brand.blue}, ${brand.blue})`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="h-10 w-10 rounded-full grid place-items-center"
                style={{ background: brand.yellow, color: brand.blue, boxShadow: '0 10px 30px rgba(0,0,0,.15)' }}
              >
                SC
              </div>
              <div>
                <div className="text-white text-lg font-semibold">Signature Costa Realty</div>
                <div className="text-white/70 text-xs">Puerto Aventuras — Riviera Maya</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#apropos" className="text-sm opacity-90 hover:opacity-100" style={{ color: brand.yellow }}>
                À propos
              </a>
              <a href="#marche" className="text-sm opacity-90 hover:opacity-100" style={{ color: brand.yellow }}>
                Marché
              </a>
              <a href="#offre" className="text-sm opacity-90 hover:opacity-100" style={{ color: brand.yellow }}>
                Offre
              </a>
              <a href="#cta" className="rounded-full px-4 py-2 font-medium" style={{ background: brand.yellow, color: brand.blue }}>
                Nous contacter
              </a>
            </nav>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mt-14">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl leading-tight font-semibold">
                Gestion de propriétés en location de vacances
              </h1>
              <p className="mt-5 text-white/80 text-lg">
                Luxe discret, service professionnel, résultats mesurables. Visibilité totale, app concierge jour et
                nuit, équipe terrain prête à intervenir.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mr-2 mb-2" style={{ background: brand.blue, color: brand.yellow }}>
                  <Globe className="h-4 w-4" /> Visibilité plateformes et site
                </span>
                <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mr-2 mb-2" style={{ background: brand.blue, color: brand.yellow }}>
                  <Zap className="h-4 w-4" /> Équipe terrain réactive
                </span>
                <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mr-2 mb-2" style={{ background: brand.blue, color: brand.yellow }}>
                  <BadgeCheck className="h-4 w-4" /> Concierge 24/7 via App
                </span>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <a
                  href="#cta"
                  className="rounded-full px-6 py-3 font-semibold inline-flex items-center gap-2"
                  style={{ background: brand.yellow, color: brand.blue }}
                >
                  Audit offert <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div>
              {/* Placeholder visual collage or hero illustration could go here */}
            </div>
          </div>
        </div>
      </header>

      {/* Section: À propos et positionnement */}
      <SectionWrap id="apropos" tone="white">
        <SectionTitle kicker="À propos" title="Notre agence et son positionnement" subtitle="Une expertise locale et premium" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Briefcase className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Agence locale dédiée</h3>
                <p className="mt-2 text-slate-600">
                  Ancrés à Puerto Aventuras et la Riviera Maya, nous connaissons parfaitement le marché et ses
                  opportunités.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Users className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Service premium</h3>
                <p className="mt-2 text-slate-600">
                  Luxe discret, conciergerie personnalisée et équipe professionnelle pour offrir la meilleure expérience.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Globe className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Vision internationale</h3>
                <p className="mt-2 text-slate-600">
                  Positionnement haut de gamme et ouverture sur une clientèle internationale exigeante et variée.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: Promesse et différenciation */}
      <SectionWrap id="promesse" tone="turquoise">
        <SectionTitle kicker="Notre promesse" title="Ce qui nous différencie" subtitle="Des fondations solides pour une performance durable" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Globe className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Visibilité totale</h3>
                <p className="mt-2 text-slate-600">
                  Diffusion sur toutes les plateformes, réseau d’agents locaux et site direct performant pour maximiser
                  l’occupation.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Zap className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Opérations instantanées</h3>
                <p className="mt-2 text-slate-600">
                  Accueil, ménage, maintenance et contrôle qualité assurés par une équipe terrain réactive et professionnelle.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <BadgeCheck className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Conciergerie 24/7</h3>
                <p className="mt-2 text-slate-600">
                  Application ludique et chat en direct pour guider les voyageurs, vendre des services et gérer toutes les
                  demandes à toute heure.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: Marché et tendances */}
      <SectionWrap id="marche" tone="white">
        <SectionTitle kicker="Marché" title="Tendances de la location saisonnière" subtitle="Comprendre la demande locale et mondiale" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <BarChart3 className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Croissance soutenue</h3>
                <p className="mt-2 text-slate-600">
                  Le marché de la location de vacances progresse à un rythme rapide, avec une forte demande pour les
                  séjours courts et les expériences uniques【192483404870869†L154-L163】.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Laptop className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Réservations en ligne</h3>
                <p className="mt-2 text-slate-600">
                  Plus de 95 % des réservations passent par des plateformes numériques, avec paiement sécurisé et
                  applications mobiles pratiques【192483404870869†L287-L296】.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Heart className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Expériences recherchées</h3>
                <p className="mt-2 text-slate-600">
                  Les voyageurs privilégient désormais des expériences authentiques et personnalisées, au-delà de la
                  simple location.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: Types de biens et profils voyageurs */}
      <SectionWrap id="types" tone="turquoise">
        <SectionTitle kicker="Biens et voyageurs" title="Nos biens gérés et nos clients" subtitle="Une offre diversifiée pour des profils variés" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Home className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Types de biens</h3>
                <p className="mt-2 text-slate-600">
                  Villas, condos de luxe, penthouses et maisons de charme dans des environnements privilégiés.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Users className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Profils voyageurs</h3>
                <p className="mt-2 text-slate-600">
                  Familles, couples, groupes d’amis et voyageurs en quête de luxe, d’aventure ou de détente.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Target className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Segmentation clientèle</h3>
                <p className="mt-2 text-slate-600">
                  Positionnement sur les segments premium et family‑friendly, avec offres personnalisées selon les besoins.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: Modes de collaboration */}
      <SectionWrap id="collaboration" tone="white">
        <SectionTitle kicker="Collaboration" title="Modes de collaboration" subtitle="Flexibilité et transparence" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Handshake className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Mandat exclusif</h3>
                <p className="mt-2 text-slate-600">
                  Mandat exclusif avec engagement complet sur la commercialisation, la gestion et l’optimisation des revenus.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Repeat className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Mandat non exclusif</h3>
                <p className="mt-2 text-slate-600">
                  Collaboration souple pour les propriétaires souhaitant diversifier les canaux tout en s’appuyant sur notre
                  expertise.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Durée et obligations</h3>
                <p className="mt-2 text-slate-600">
                  Contrats clairs avec durée flexible, conditions de résiliation définies et obligations réciproques pour
                  garantir la confiance.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: Onboarding propriétaire */}
      <SectionWrap id="onboarding" tone="turquoise">
        <SectionTitle kicker="Onboarding" title="Parcours d’accueil des propriétaires" subtitle="Mise en valeur de votre bien" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <ClipboardList className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Audit du bien</h3>
                <p className="mt-2 text-slate-600">
                  Inspection complète, liste des manques et plan d’amélioration pour optimiser la rentabilité.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Home className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Home staging et sécurité</h3>
                <p className="mt-2 text-slate-600">
                  Home staging léger, inventaire détaillé et mise en conformité avec les normes de sécurité.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Camera className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Médias et guides</h3>
                <p className="mt-2 text-slate-600">
                  Shooting photo/vidéo, plans 2D/3D et élaboration d’un guide maison pour informer les voyageurs.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: Mise en marché multicanal */}
      <SectionWrap id="mise-en-marche" tone="white">
        <SectionTitle kicker="Mise en marché" title="Commercialisation multicanal" subtitle="Maximiser la visibilité et les réservations" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Megaphone className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Annonces optimisées</h3>
                <p className="mt-2 text-slate-600">
                  Rédaction et SEO ciblé, photos professionnelles et storytelling pour chaque plateforme et notre site
                  direct.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Network className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>OTA et métamoteurs</h3>
                <p className="mt-2 text-slate-600">
                  Distribution sur les principales OTA (Airbnb, Booking.com, VRBO) et métamoteurs pour toucher le plus
                  large public.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Calendar className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Calendrier & séjours</h3>
                <p className="mt-2 text-slate-600">
                  Stratégie de calendrier, durée minimale de séjour, périodes bloquées et ouverture flexible selon la
                  saisonnalité.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: Revenue management */}
      <SectionWrap id="revenu" tone="turquoise">
        <SectionTitle kicker="Revenu" title="Revenue management" subtitle="Optimisation des tarifs et des performances" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <DollarSign className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Tarifs dynamiques</h3>
                <p className="mt-2 text-slate-600">
                  Ajustement des prix en temps réel selon la saison, les événements, la demande et la concurrence pour
                  maximiser la marge【824039047579891†L130-L137】.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Tag className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Segmentation et coupons</h3>
                <p className="mt-2 text-slate-600">
                  Offres ciblées, promotions et restrictions de séjour selon les profils de voyageurs et les périodes.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <CalendarClock className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Restrictions</h3>
                <p className="mt-2 text-slate-600">
                  Gestion de la durée minimum de séjour, des règles d’arrivée/départ et des périodes de blackout.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: Marketing et acquisition */}
      <SectionWrap id="marketing" tone="white">
        <SectionTitle kicker="Marketing" title="Marketing et acquisition" subtitle="Attirer et fidéliser les voyageurs" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Instagram className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Réseaux sociaux</h3>
                <p className="mt-2 text-slate-600">
                  Stratégie social‑media, production de contenu engageant et campagnes sponsorisées ciblées.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Email et partenariats</h3>
                <p className="mt-2 text-slate-600">
                  Newsletters, campagnes de réactivation et collaborations avec agences de voyage et entreprises
                  locales.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <TrendingUp className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Automatisation CRM</h3>
                <p className="mt-2 text-slate-600">
                  Mise en place d’outils de remarketing, segmentation et automatisations pour convertir et fidéliser.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: Opérations terrain */}
      <SectionWrap id="operations" tone="turquoise">
        <SectionTitle kicker="Opérations" title="Gestion des opérations" subtitle="Des prestations irréprochables sur le terrain" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <LogIn className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Check‑in / Check‑out</h3>
                <p className="mt-2 text-slate-600">
                  Accueil chaleureux, options de self check‑in et assistance continue pour un séjour sans friction.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Broom className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Ménage et blanchisserie</h3>
                <p className="mt-2 text-slate-600">
                  Ménage professionnel, linge et consommables toujours impeccables, planning optimisé entre les séjours.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Tool className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Maintenance</h3>
                <p className="mt-2 text-slate-600">
                  Entretien préventif, interventions rapides et réparations sur tous les équipements et installations.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: Expérience voyageur et concierge */}
      <SectionWrap id="experience" tone="white">
        <SectionTitle kicker="Expérience" title="Expérience voyageur et conciergerie" subtitle="Un séjour mémorable et personnalisé" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Headphones className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Support 24/7</h3>
                <p className="mt-2 text-slate-600">
                  Réponses rapides par chat, téléphone et email pour toutes les questions, à toute heure du jour et de la
                  nuit.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Gift className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Services additionnels</h3>
                <p className="mt-2 text-slate-600">
                  Excursions, chefs privés, massages et services personnalisés pour répondre à toutes les envies.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <ShoppingCart className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Ventes croisées</h3>
                <p className="mt-2 text-slate-600">
                  Upsells et cross‑sells via l’application et la conciergerie pour augmenter le revenu par séjour.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: Qualité, normes et sécurité */}
      <SectionWrap id="qualite" tone="turquoise">
        <SectionTitle kicker="Qualité" title="Normes et sécurité" subtitle="Garantir l’excellence et la tranquillité d’esprit" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Checklist className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Protocoles de ménage</h3>
                <p className="mt-2 text-slate-600">
                  Normes strictes de propreté, procédures de désinfection et contrôles qualité réguliers.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Prévention des risques</h3>
                <p className="mt-2 text-slate-600">
                  Détecteurs de fumée, systèmes d’alarme, protocoles incendie et gestion des incidents.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Lock className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Sécurité renforcée</h3>
                <p className="mt-2 text-slate-600">
                  Contrôles d’accès sécurisés, capteurs connectés et suivi des entrées pour protéger vos biens.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: Outils et technologie */}
      <SectionWrap id="technologie" tone="white">
        <SectionTitle kicker="Technologie" title="Outils et plateforme" subtitle="Piloter votre bien avec des solutions modernes" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Layers className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Channel manager</h3>
                <p className="mt-2 text-slate-600">
                  Synchronisation des calendriers et des tarifs sur toutes les plateformes via un channel manager puissant.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Database className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>PMS et CRM</h3>
                <p className="mt-2 text-slate-600">
                  Gestion complète des réservations, de la facturation et des communications clients dans un logiciel
                  intégré.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <BarChart3 className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Portail propriétaire</h3>
                <p className="mt-2 text-slate-600">
                  Dashboard sécurisé pour suivre les réservations, les revenus et les KPI en temps réel.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: Conformité légale et fiscale */}
      <SectionWrap id="legal" tone="turquoise">
        <SectionTitle kicker="Conformité" title="Légal et fiscal" subtitle="Sécurité juridique pour vous et vos voyageurs" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <FileText className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Contrats et responsabilités</h3>
                <p className="mt-2 text-slate-600">
                  Rédaction de contrats de gestion, couverture responsabilité civile et recommandations d’assurance.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Percent className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Taxes d’hébergement</h3>
                <p className="mt-2 text-slate-600">
                  Collecte et versement des taxes locales et de la TVA, respect des réglementations fiscales en vigueur.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Receipt className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Facturation</h3>
                <p className="mt-2 text-slate-600">
                  Émission de factures claires et détaillées, traçabilité des revenus et respect des obligations comptables.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: Reporting et transparence financière */}
      <SectionWrap id="reporting" tone="white">
        <SectionTitle kicker="Reporting" title="Transparence financière" subtitle="Suivi précis des performances" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <FileBarChart className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Relevés mensuels</h3>
                <p className="mt-2 text-slate-600">
                  Reporting mensuel avec détail des revenus, des dépenses et des commissions pour chaque propriété.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <TrendingUp className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>KPI de performance</h3>
                <p className="mt-2 text-slate-600">
                  Occupation, RevPAR, durée moyenne de séjour et autres indicateurs clés pour orienter les stratégies.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Eye className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Transparence en temps réel</h3>
                <p className="mt-2 text-slate-600">
                  Accès permanent aux indicateurs et aux documents via le portail propriétaire en ligne.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: Politique de prix et packs de services */}
      <SectionWrap id="prix" tone="turquoise">
        <SectionTitle kicker="Offre" title="Politique tarifaire et packs" subtitle="Options adaptées à chaque besoin" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="text-sm mb-2" style={{ color: brand.gold }}>Pack</div>
            <h3 className="text-2xl font-semibold" style={{ color: brand.blue }}>Essentiel</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5" style={{ color: brand.turquoise }} /> Mise en marché multicanal
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5" style={{ color: brand.turquoise }} /> Gestion des opérations
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5" style={{ color: brand.turquoise }} /> Reporting mensuel
              </li>
            </ul>
          </Card>
          <Card className="relative" tone="white">
            <div
              className="absolute -top-3 right-6 text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: brand.yellow, color: brand.blue }}
            >
              Recommandé
            </div>
            <div className="text-sm mb-2" style={{ color: brand.gold }}>Pack</div>
            <h3 className="text-2xl font-semibold" style={{ color: brand.blue }}>Premium</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5" style={{ color: brand.turquoise }} /> Tarifs dynamiques avancés
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5" style={{ color: brand.turquoise }} /> Médias pro et SEO
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5" style={{ color: brand.turquoise }} /> Optimisation calendrier
              </li>
            </ul>
          </Card>
          <Card tone="white">
            <div className="text-sm mb-2" style={{ color: brand.gold }}>Pack</div>
            <h3 className="text-2xl font-semibold" style={{ color: brand.blue }}>Signature</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5" style={{ color: brand.turquoise }} /> Concierge 24/7 et app dédiée
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5" style={{ color: brand.turquoise }} /> Suivi qualité renforcé
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5" style={{ color: brand.turquoise }} /> Visites propriétaires planifiées
              </li>
            </ul>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: Études de cas et témoignages */}
      <SectionWrap id="etudes" tone="white">
        <SectionTitle kicker="Études de cas" title="Réalisations et témoignages" subtitle="Des exemples concrets de réussite" />
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card tone="white">
            <div className="text-sm mb-2" style={{ color: brand.gold }}>Casa La Torre</div>
            <div className="text-lg font-semibold" style={{ color: brand.blue }}>Repositionnement haut de gamme</div>
            <p className="mt-2 text-slate-600">
              Reprise de la gestion, rénovation supervisée, stratégie tarifaire et multicanal. Hausse rapide des
              réservations et fidélisation.
            </p>
          </Card>
          <Card tone="white">
            <div className="text-sm mb-2" style={{ color: brand.gold }}>Grand Peninsula</div>
            <div className="text-lg font-semibold" style={{ color: brand.blue }}>Valorisation d’actif</div>
            <p className="mt-2 text-slate-600">
              Accompagnement investisseurs, storytelling, médias premium. Forte traction et montée en valeur.
            </p>
          </Card>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card tone="white">
            <div className="text-sm mb-2" style={{ color: brand.gold }}>Témoignage propriétaire</div>
            <div className="text-lg font-semibold" style={{ color: brand.blue }}>« Des résultats au‑delà de nos attentes »</div>
            <p className="mt-2 text-slate-600">
              « Grâce à Signature, notre villa a connu un taux d’occupation record tout en préservant son standing. L’équipe
              s’occupe de tout avec professionnalisme. »
            </p>
          </Card>
          <Card tone="white">
            <div className="text-sm mb-2" style={{ color: brand.gold }}>Témoignage voyageur</div>
            <div className="text-lg font-semibold" style={{ color: brand.blue }}>« Un séjour inoubliable »</div>
            <p className="mt-2 text-slate-600">
              « Service 5 étoiles, activités sur mesure et réactivité exceptionnelle. Nous reviendrons sans hésiter ! »
            </p>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: RSE et durabilité */}
      <SectionWrap id="durabilite" tone="turquoise">
        <SectionTitle kicker="RSE" title="Responsabilité sociétale" subtitle="Engagements durables et respectueux" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Leaf className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Produits éco</h3>
                <p className="mt-2 text-slate-600">
                  Utilisation de produits de nettoyage écologiques et biodégradables pour réduire l’impact environnemental.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Droplet className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Gestion eau et énergie</h3>
                <p className="mt-2 text-slate-600">
                  Mise en place de régulateurs de débit, ampoules basse consommation et suivi des consommations.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Recycle className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Tri et initiatives</h3>
                <p className="mt-2 text-slate-600">
                  Tri sélectif, sensibilisation des voyageurs et participation à des programmes de reforestation locaux.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: Équipe et partenaires */}
      <SectionWrap id="equipe" tone="white">
        <SectionTitle kicker="Équipe" title="Notre équipe et partenaires" subtitle="Un réseau de talents pour vous servir" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Users className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Équipe multidisciplinaire</h3>
                <p className="mt-2 text-slate-600">
                  Experts en gestion, marketing, opérations et conciergerie travaillant en synergie pour votre succès.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Handshake className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Partenaires de confiance</h3>
                <p className="mt-2 text-slate-600">
                  Réseau d’entreprises locales pour le ménage, la maintenance, la sécurité et les services additionnels.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Processus de sélection</h3>
                <p className="mt-2 text-slate-600">
                  Critères stricts pour sélectionner nos prestataires et audits réguliers pour maintenir l’excellence.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: Risques, garanties et plan d’urgence */}
      <SectionWrap id="risques" tone="turquoise">
        <SectionTitle kicker="Gestion des risques" title="Risques et plan d’urgence" subtitle="Prévoir l’imprévu et protéger votre investissement" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card tone="white">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Pannes & incidents</h3>
                <p className="mt-2 text-slate-600">
                  Procédures d’urgence pour les pannes techniques, incidents domestiques et aléas météorologiques.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Umbrella className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Garanties & assurances</h3>
                <p className="mt-2 text-slate-600">
                  Couverture adaptée, assurance responsabilité civile et protection contre les dommages et litiges.
                </p>
              </div>
            </div>
          </Card>
          <Card tone="white">
            <div className="flex items-start gap-4">
              <Scale className="h-6 w-6" style={{ color: brand.turquoise }} />
              <div>
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>Médiation et litiges</h3>
                <p className="mt-2 text-slate-600">
                  Plan de gestion des litiges, médiation professionnelle et accompagnement en cas de différends.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: FAQ propriétaire */}
      <SectionWrap id="faq" tone="white">
        <SectionTitle kicker="FAQ" title="Questions fréquentes" subtitle="Vos interrogations les plus courantes" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card tone="white">
            <h3 className="text-lg font-semibold" style={{ color: brand.blue }}>Quel délai pour commencer la gestion ?</h3>
            <p className="mt-2 text-slate-600">
              Après l’audit et la signature du contrat, nous pouvons lancer la commercialisation en une à deux
              semaines selon la disponibilité des médias.
            </p>
          </Card>
          <Card tone="white">
            <h3 className="text-lg font-semibold" style={{ color: brand.blue }}>Comment fixez‑vous les tarifs ?</h3>
            <p className="mt-2 text-slate-600">
              Nous nous basons sur des outils de revenue management, l’analyse du marché local et les caractéristiques
              uniques de votre bien pour ajuster les prix en temps réel.
            </p>
          </Card>
          <Card tone="white">
            <h3 className="text-lg font-semibold" style={{ color: brand.blue }}>Y a‑t‑il des frais cachés ?</h3>
            <p className="mt-2 text-slate-600">
              Non, toutes nos commissions et frais sont clairement détaillés dans le contrat et dans les relevés mensuels.
            </p>
          </Card>
          <Card tone="white">
            <h3 className="text-lg font-semibold" style={{ color: brand.blue }}>Puis‑je réserver mon bien pour ma propre utilisation ?</h3>
            <p className="mt-2 text-slate-600">
              Oui, vous pouvez bloquer votre calendrier selon vos besoins, sous réserve des séjours déjà confirmés.
            </p>
          </Card>
        </div>
      </SectionWrap>

      {/* Section: CTA / Prochaines étapes */}
      <section id="cta" className="relative">
        <div className="absolute inset-0" style={{ background: `linear-gradient(120deg, ${brand.blue}, ${brand.blue})` }} />
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 text-white">
              <div className="text-sm mb-2" style={{ color: brand.yellow }}>Prochaines étapes</div>
              <h3 className="text-3xl font-semibold">Audit offert de votre propriété</h3>
              <p className="mt-3 text-white/80">
                Recevez une estimation de revenu, une liste d’améliorations prioritaires et un plan de lancement précis.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:rentals@signaturecostarealty.com"
                  className="rounded-full px-6 py-3 font-semibold inline-flex items-center gap-2"
                  style={{ background: brand.yellow, color: brand.blue }}
                >
                  <Mail className="h-4 w-4" /> rentals@signaturecostarealty.com
                </a>
                <a
                  href="tel:+529842696189"
                  className="rounded-full px-6 py-3 font-semibold inline-flex items-center gap-2 border"
                  style={{ color: brand.yellow, borderColor: brand.yellow }}
                >
                  <Phone className="h-4 w-4" /> +52 984 269 6189
                </a>
              </div>
            </div>
            <Card className="bg-white/95 backdrop-blur" tone="white">
              <div className="text-lg font-semibold" style={{ color: brand.blue }}>Checklist d’entrée</div>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5" style={{ color: brand.turquoise }} /> Titre de propriété et règlements
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5" style={{ color: brand.turquoise }} /> Liste équipements et inventaire
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5" style={{ color: brand.turquoise }} /> Accès, codes et consignes
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full grid place-items-center" style={{ background: brand.blue, color: brand.yellow }}>
              SC
            </div>
            <div className="text-slate-700">Signature Costa Realty — Gestion de propriétés</div>
          </div>
          <div className="text-sm text-slate-500">© {new Date().getFullYear()} Signature Costa Realty. Tous droits réservés.</div>
        </div>
      </footer>
    </div>
  )
}
