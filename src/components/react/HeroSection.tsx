import { Button } from "../ui/button"
import useContent from "../../utils/useContent"
import FadeIn from "./FadeIn"
import GradientText from "../ui/gradient-text"

const heroBanner = useContent("heroBanner")
const title = useContent("global.title")

export const GoogleLogo = () => (
  <svg
    width="96"
    height="33"
    viewBox="0 0 96 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40.853 16.652c0 4.507-3.526 7.828-7.853 7.828s-7.852-3.321-7.852-7.828c0-4.539 3.525-7.828 7.852-7.828 4.328 0 7.853 3.289 7.853 7.828Zm-3.437 0c0-2.817-2.044-4.744-4.416-4.744-2.371 0-4.415 1.927-4.415 4.744 0 2.788 2.044 4.743 4.415 4.743 2.372 0 4.416-1.959 4.416-4.743Z"
      fill="#EA4335"
    ></path>
    <path
      d="M57.794 16.652c0 4.507-3.526 7.828-7.853 7.828s-7.853-3.321-7.853-7.828c0-4.536 3.526-7.828 7.853-7.828s7.853 3.289 7.853 7.828Zm-3.438 0c0-2.817-2.043-4.744-4.415-4.744s-4.416 1.927-4.416 4.744c0 2.788 2.044 4.743 4.416 4.743 2.372 0 4.415-1.959 4.415-4.743Z"
      fill="#FBBC05"
    ></path>
    <path
      d="M74.03 9.296v14.055c0 5.78-3.41 8.142-7.44 8.142-3.795 0-6.078-2.538-6.94-4.613l2.994-1.246c.533 1.274 1.839 2.778 3.942 2.778 2.58 0 4.179-1.592 4.179-4.588v-1.126h-.12c-.77.95-2.252 1.779-4.123 1.779-3.914 0-7.5-3.41-7.5-7.797 0-4.419 3.586-7.856 7.5-7.856 1.867 0 3.35.829 4.123 1.75h.12V9.3h3.264v-.004Zm-3.022 7.384c0-2.756-1.838-4.772-4.178-4.772-2.372 0-4.36 2.016-4.36 4.772 0 2.728 1.988 4.715 4.36 4.715 2.34 0 4.178-1.987 4.178-4.715Z"
      fill="#4285F4"
    ></path>
    <path d="M79.412 1.059V24h-3.353V1.059h3.353Z" fill="#34A853"></path>
    <path
      d="m92.478 19.228 2.668 1.78c-.861 1.273-2.936 3.469-6.522 3.469-4.447 0-7.768-3.438-7.768-7.829 0-4.655 3.349-7.828 7.383-7.828 4.062 0 6.05 3.233 6.699 4.98l.356.89-10.464 4.333c.8 1.571 2.047 2.372 3.794 2.372 1.75 0 2.964-.86 3.854-2.167Zm-8.213-2.816 6.995-2.905c-.385-.978-1.542-1.659-2.904-1.659-1.748 0-4.18 1.543-4.091 4.564Z"
      fill="#EA4335"
    ></path>
    <path
      d="M12.455 14.615v-3.32h11.192c.11.578.166 1.263.166 2.004 0 2.492-.681 5.573-2.877 7.768-2.135 2.224-4.863 3.41-8.477 3.41-6.7 0-12.332-5.457-12.332-12.156C.127 5.622 5.76.166 12.459.166c3.706 0 6.346 1.454 8.33 3.35l-2.344 2.343c-1.423-1.334-3.35-2.372-5.99-2.372-4.892 0-8.717 3.942-8.717 8.834 0 4.892 3.825 8.834 8.717 8.834 3.173 0 4.98-1.274 6.138-2.431.939-.94 1.556-2.28 1.8-4.112l-7.938.003Z"
      fill="#4285F4"
    ></path>
  </svg>
)

export const TrustsSlider = () => {
  return (
    <div className="mt-24 w-full px-4 sm:px-8 md:px-16 lg:px-32">
      <h3 className="text-xl font-medium tracking-tight text-center">
        Plus de 60 entreprises utilisent StockData
      </h3>
      <div className="flex flex-nowrap items-center justify-center mt-8 sm:mt-16 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="w-24 h-8 flex items-center justify-center">
            <GoogleLogo />
          </div>
        ))}
      </div>
    </div>
  )
}

export const HeroSection = () => (
  <section className="flex flex-col pt-10 lg:pt-20 2xl:pt-40 items-center w-full h-[calc(80vh-80px)] bg-transparent">
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
      <TrustsSlider />
    </div>
  </section>
)
