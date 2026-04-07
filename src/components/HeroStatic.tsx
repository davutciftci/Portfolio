import { useTranslation } from "react-i18next"

/** Same copy as animated hero — paints immediately for LCP */
export default function HeroStatic() {
  const { t } = useTranslation()

  return (
    <>
      <div className="home-greeting">
        <h1 className="home-h1-blur">{t("home.greeting")}</h1>
      </div>

      <div className="home-subtitle">
        <p className="home-shiny-subtitle" style={{ color: "#f4f4f4" }}>
          {t("home.subtitle")}
        </p>
      </div>

      <div className="home-role">
        <span className="home-typed-role" style={{ color: "#ff6a00" }}>
          {t("home.role_1")}
        </span>
      </div>

      <p className="home-desc">{t("home.desc")}</p>
    </>
  )
}
