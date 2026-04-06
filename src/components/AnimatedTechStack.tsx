import SpotlightCard from "./reactbits/Components/SpotlightCard/SpotlightCard"
import AnimatedContent from "./reactbits/Animations/AnimatedContent/AnimatedContent"
import ShinyText from "./reactbits/TextAnimations/ShinyText/ShinyText"
import { motion } from "motion/react"

interface AnimatedTechStackProps {
  stack: string[];
  title?: string;
}

function AnimatedTechStack({ stack, title = "Technologies & Tools" }: AnimatedTechStackProps) {
  return (
    <div className="about-tech-section">
      <h3 className="section-label">
        <ShinyText text={title} speed={3} color="#aaa" shineColor="#ff6a00" />
      </h3>
      <div className="tech-badges">
        {stack.map((tech, index) => (
          <AnimatedContent
            key={tech}
            distance={20}
            direction="vertical"
            reverse={false}
            delay={index * 0.05} // Staggered animation
            duration={0.5}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + (index % 3) * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1, // Float offset
              }}
            >
              <SpotlightCard
                className="tech-badge-card"
                spotlightColor="rgba(255, 106, 0, 0.2)"
              >
                <span className="tech-badge-text">{tech}</span>
              </SpotlightCard>
            </motion.div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  )
}

export default AnimatedTechStack
