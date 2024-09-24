import { Button } from "../ui/button"
import useContent from "../../utils/useContent"
import FadeIn from "./FadeIn"
import GradientText from "../ui/gradient-text"

const heroBanner = useContent("heroBanner")
const title = useContent("global.title")

const entreprises = [
  "accenture.svg",
  "chu_renne.svg",
  "logo_ores_400px.png",
  "purestorage.svg",
  "suez.svg",
  "tf1.svg",
]

export const TrustsSlider = () => {
  return (
    <div className="mt-24 px-4 sm:px-8 w-4/5 md:px-16 lg:px-32">
      <h3 className="text-xl font-medium tracking-tight text-center">
        Plus de 60 entreprises utilisent StockData
      </h3>
      <div className="flex items-center justify-center w-full mt-8 sm:mt-16 space-x-4 sm:space-x-8">
        <div className="flex items-center justify-center w-full">
          <img
            src={`/entreprises/${entreprises.at(-1)}`}
            alt={entreprises.at(-1)}
            className="w-32 h-32 object-contain grayscale hover:grayscale-0 hover:brightness-100 transition-all duration-300"
          />
        </div>
        {entreprises.slice(0, -1).map((entreprise, i) => (
          <div key={i} className="flex items-center justify-center w-full">
            <img
              src={`/entreprises/${entreprise}`}
              alt={entreprise}
              className="w-32 h-32 object-contain grayscale brightness-0 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export const HeroSection = () => (
  <section className="flex flex-col pt-10 lg:pt-20 2xl:pt-40 items-center w-full min-h-[calc(80vh-80px)] bg-transparent">
    <div className="flex flex-col items-center max-w-4xl px-4">
      <h1 className="text-center text-4xl sm:text-5xl xl:text-6xl font-bold text-black">
        <FadeIn duration={0.3}>
          {heroBanner.title} <GradientText>{title}</GradientText>
        </FadeIn>
      </h1>
      <p className="text-center text-base sm:text-lg md:text-xl mt-5 font-normal text-black max-w-2xl">
        <FadeIn duration={0.5}>{heroBanner.description}</FadeIn>
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center w-full mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
        <Button variant="default" size="lg">
          {heroBanner.primaryButton}
        </Button>
      </div>
    </div>
    <TrustsSlider />
  </section>
)
