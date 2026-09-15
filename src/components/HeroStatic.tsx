import { useTranslation } from "react-i18next"
import trLocale from "../locales/tr"
import enLocale from "../locales/en"

/** Same copy as animated hero — paints immediately for LCP */
export default function HeroStatic() {
  const { t } = useTranslation()

  const allSubtitles = [trLocale.home.subtitle, enLocale.home.subtitle]
  const allDescs = [trLocale.home.desc, enLocale.home.desc]

  return (
    <>
      <div className="home-subtitle home-stable-block">
        <div className="home-stable-placeholders" aria-hidden="true">
          {allSubtitles.map((text, i) => (
            <span key={i} className="home-shiny-subtitle home-stable-placeholder">{text}</span>
          ))}
        </div>
        <p className="home-shiny-subtitle home-stable-visible" style={{ color: "#f4f4f4" }}>
          {t("home.subtitle")}
        </p>
      </div>

      <div className="home-role">
        <span className="home-typed-role" style={{ color: "#ff6a00" }}>
          {t("home.role_1")}
        </span>
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

