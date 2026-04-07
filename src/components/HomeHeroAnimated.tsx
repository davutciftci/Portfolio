import BlurText from "./reactbits/TextAnimations/BlurText/BlurText"
import TextType from "./reactbits/TextAnimations/TextType/TextType"
import ShinyText from "./reactbits/TextAnimations/ShinyText/ShinyText"
import { useTranslation } from "react-i18next"

export default function HomeHeroAnimated() {
  const { t } = useTranslation()

  return (
    <>
      <div className="home-greeting">
        <BlurText
          text={t("home.greeting")}
          className="home-h1-blur"
          animateBy="words"
          direction="top"
          delay={150}
          stepDuration={0.5}
        />
      </div>

      <div className="home-subtitle">
        <ShinyText
          text={t("home.subtitle")}
          className="home-shiny-subtitle"
          speed={3}
          color="#f4f4f4"
          shineColor="#ff6a00"
          spread={90}
        />
      </div>

      <div className="home-role">
        <TextType
          text={[t("home.role_1"), t("home.role_2"), t("home.role_3")]}
          className="home-typed-role"
          textColors={["#ff6a00", "#1a9c8a", "#ff6a00"]}
          typingSpeed={50}
          deletingSpeed={30}
          pauseDuration={2000}
          showCursor={true}
          cursorClassName="home-typed-cursor"
          loop={true}
        />
      </div>

      <p className="home-desc">{t("home.desc")}</p>
    </>
  )
}
