import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.box}>
        <h1 className={styles.title}>MED-/-AR: Tecnología y humanidad al servicio de tu salud</h1>
        <p>
          Desde nuestros inicios, en <strong>MED-/-AR</strong> nos propusimos transformar la manera
          en que las personas acceden a atención médica. En un mundo donde los tiempos de espera, la
          desinformación y la falta de seguimiento dificultan el cuidado de la salud, decidimos dar
          un paso adelante.
        </p>
        <p>
          <strong>MED-/-AR</strong> nace como una solución digital moderna, enfocada en la atención
          personalizada, rápida y efectiva. Nuestro sistema permite reservar turnos médicos en
          apenas unos clics, conectando pacientes con profesionales de forma directa, transparente y
          segura.
        </p>

        <h2 className={styles.subtitle}>¿Por qué MED-/-AR?</h2>
        <ul className={styles.list}>
          <li>
            Porque <strong>creemos en la inmediatez</strong>, sin sacrificar calidad humana.
          </li>
          <li>
            Porque <strong>sabemos que la tecnología puede ser cercana</strong>, cálida y
            resolutiva.
          </li>
          <li>
            Porque <strong>cada paciente merece sentirse acompañado</strong>, desde la consulta
            inicial hasta el seguimiento posterior.
          </li>
        </ul>

        <p>A través de nuestra plataforma, ofrecemos:</p>
        <ul className={styles.list}>
          <li>✅ Reservas de turnos simples y rápidas</li>
          <li>✅ Recordatorios automáticos y confirmaciones en tiempo real</li>
          <li>✅ Atención personalizada con profesionales verificados</li>
          <li>✅ Un entorno digital seguro, claro y accesible</li>
        </ul>

        <h2 className={styles.subtitle}>Nuestra misión</h2>
        <p>
          <em>
            Brindar atención médica eficiente, empática y accesible para todos, usando herramientas
            tecnológicas que simplifiquen la experiencia del paciente y optimicen el tiempo de los
            profesionales.
          </em>
        </p>

        <h2 className={styles.subtitle}>Nuestro camino</h2>
        <p>
          Lo que comenzó como una idea entre profesionales de la salud y desarrolladores apasionados
          por mejorar el sistema, hoy se consolida como una plataforma que
          <strong> conecta miles de usuarios cada mes</strong>, y sigue creciendo.
        </p>

        <h2 className={styles.subtitle}>¿Y vos?</h2>
        <p>
          Formá parte de la comunidad MED-/-AR.
          <br />
          Reservá tu próximo turno en segundos y viví una experiencia médica como debería ser:
          <strong> ágil, confiable y humana</strong>.
        </p>
      </div>
    </div>
  );
}

export default About;
