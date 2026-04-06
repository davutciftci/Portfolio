import BlurText from "./reactbits/TextAnimations/BlurText/BlurText"
import ShinyText from "./reactbits/TextAnimations/ShinyText/ShinyText"

interface PageHeaderProps {
  title: string;
  subtitle: string;
  shineColor?: string;
  subtitleClassName?: string;
}

function PageHeader({ title, subtitle, shineColor = "#ff6a00", subtitleClassName = "" }: PageHeaderProps) {
  return (
    <div className="page-header">
      <BlurText
        text={title}
        className="page-title-blur"
        animateBy="words"
        direction="top"
        delay={120}
        stepDuration={0.6}
      />
      <div className={`page-subtitle-shiny ${subtitleClassName}`.trim()}>
        <ShinyText
          text={subtitle}
          className={`page-shiny ${subtitleClassName}`.trim()}
          speed={3}
          color="#888"
          shineColor={shineColor}
        />
      </div>
    </div>
  )
}

export default PageHeader
