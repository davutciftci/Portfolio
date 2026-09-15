import TextType from "./reactbits/TextAnimations/TextType/TextType"
import ShinyText from "./reactbits/TextAnimations/ShinyText/ShinyText"
import { useTranslation } from "react-i18next"
import trLocale from "../locales/tr"
import enLocale from "../locales/en"

/* Renders text as flex-wrapped inline-block spans, matching BlurText's layout */
function PlaceholderText({ text, className }: { text: string; className?: string }) {
  const words = text.split(' ')
  return (
    <p className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block' }}>
          {word}
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </p>
  )
}

export default function HomeHeroAnimated() {
  const { t } = useTranslation()

  const allSubtitles = [trLocale.home.subtitle, enLocale.home.subtitle]
  const allDescs = [trLocale.home.desc, enLocale.home.desc]

  return (
    <>
      <div className="home-subtitle home-stable-block">
        <div className="home-stable-placeholders" aria-hidden="true">
          {allSubtitles.map((text, i) => (
            <PlaceholderText key={i} text={text} className="home-shiny-subtitle home-stable-placeholder" />
          ))}
        </div>
        <div className="home-stable-visible">
          <ShinyText
            text={t("home.subtitle")}
            className="home-shiny-subtitle"
            speed={3}
            color="#f4f4f4"
            shineColor="#ff6a00"
            spread={90}
          />
        </div>
      </div>

      <div className="home-role">
        <TextType
          text={[t("home.role_1"), t("home.role_2"), t("home.role_3"), t("home.role_4")]}
          className="home-typed-role"
          textColors={["#ff6a00", "#1a9c8a", "#ff6a00", "#1a9c8a"]}
          typingSpeed={50}
          deletingSpeed={30}
          pauseDuration={2000}
          showCursor={true}
          cursorClassName="home-typed-cursor"
          loop={true}
        />
      </div>

      <div className="home-desc home-stable-block">
        <div className="home-stable-placeholders" aria-hidden="true">
          {allDescs.map((text, i) => (
            <p key={i} className="home-stable-placeholder">{text}</p>
          ))}
        </div>
        <p className="home-stable-visible">{t("home.desc")}</p>
      </div>
    </>
  )
}
