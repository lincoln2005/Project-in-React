'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Sobre Nós" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] max-w-[650px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white"> </span>  {' '}
        <span className="font-extrabold text-white">
          Bella Donna,
        </span> a elegância encontra a moda contemporânea, criando um oásis
        de estilo para as mulheres modernas.{' '}
        {' '}
        <span className="font-extrabold text-white">
          Designs
        </span> exclusivos e uma atenção impecável aos detalhes, nossa loja é
        o destino definitivo para mulheres que buscam peças únicas que refletem sua {' '}
        <span className="font-extrabold text-white">
          personalidade e sofisticação. <br />
        </span>
        {/* Além disso, estamos comprometidos com a sustentabilidade e a responsabilidade
        social, buscando parceiros que compartilhem nossos valores e práticas em toda a cadeia
        de suprimentos. */}
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
