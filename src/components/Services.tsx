import { Shield, FileText, PiggyBank, TrendingUp, Heart, Car, ScrollText } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Risk Planning',
    description:
      'Get certainty and clarity on your current and future financial wellbeing through comprehensive risk planning. We support you and your business with customisable benefits covering life-changing events including death, disability, loss of income and severe illness.',
  },
  {
    icon: FileText,
    title: 'Estate Planning',
    description:
      'We ensure complete peace of mind in the event of you passing away. We offer specialised estate planning to protect and safeguard your legacy, ensuring your assets are distributed according to your wishes.',
  },
  {
    icon: PiggyBank,
    title: 'Retirement Planning',
    description:
      'We help you ensure that you save enough to maintain your lifestyle in retirement. We offer a full range of retirement plans and strategies tailored to your goals and timeline.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Planning',
    description:
      'We offer a suite of products that cater for all your financial goals, whether for the creation or preservation of wealth, short or long term. We have a solution to fit every need.',
  },
  {
    icon: Heart,
    title: 'Medical Funds',
    description:
      'We provide you with a selection of medical fund options to best suit your health and financial needs at any stage of life, along with additional protection against unforeseen medical costs.',
  },
  {
    icon: Car,
    title: 'Short-term Insurance',
    description:
      'We offer comprehensive short-term insurance solutions for both commercial and personal needs — covering your business assets, vehicles, property and more with world-class service and competitive pricing.',
  },
  {
    icon: ScrollText,
    title: 'Wills',
    description:
      'A valid Will is one of the most important documents you will ever sign. We guide you through drafting a legally sound Will that clearly reflects your intentions and protects your loved ones.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow section__eyebrow--light">What We Do</p>
          <h2 className="section__title section__title--white">Financial Advice Includes</h2>
          <p className="section__subtitle">
            Comprehensive financial solutions tailored to your unique needs and goals.
          </p>
        </div>
        <div className="services__grid">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="service-card">
                <div className="service-card__icon"><Icon size={28} /></div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}