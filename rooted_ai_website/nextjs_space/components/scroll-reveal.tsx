'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export function ScrollReveal({ children }: { children: React.ReactNode }) {
  return (
    <>
      {React.Children.map(children, (child: any, i: number) => {
        if (!React.isValidElement(child)) return child
        return <AnimatedSection key={i}>{child}</AnimatedSection>
      })}
    </>
  )
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp}>{children}</motion.div>
    </motion.div>
  )
}
