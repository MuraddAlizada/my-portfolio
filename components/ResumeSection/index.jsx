import React, { useEffect } from "react";
import styles from "./ResumeSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../Container";
import Title from "../Title";
import { IoSchoolSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";

const ResumeSection = ({ id }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Container>
      <section id={id} className={`font-clash ${styles.resumeSection}`}>
        <div className={styles.container}>
          <Title title={"My education and work experience"} />

          {/* Experiences Container */}
          <div className={styles.experiencesContainer}>
            {/* Item 2 - Backend Development Div Academy (Left) */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className={styles.experienceItem}
            >
              <div
                className={styles.experienceLeft}
                data-aos="fadeInLeft"
                data-aos-delay="200"
              >
                <div className={styles.experienceIcon}>
                  <IoSchoolSharp />
                </div>
                <div className={styles.experienceOrg}>Div Academy</div>
                <div className={styles.experienceDuration}>November 2025 - Present</div>
              </div>
              <div
                className={styles.experienceRight}
                data-aos="fadeInRight"
                data-aos-delay="100"
              >
                <div className={styles.experienceTitle}>
                  Backend Development
                </div>
                <div className={styles.experienceDesc}>
                  Actively advancing skills in backend development, focusing on Node.js, databases, REST APIs, and server-side application architecture. Gaining practical experience in building scalable, secure, and high-performance backend systems.
                </div>
              </div>
            </div>

            {/* Item 1 - OKmedia Frontend Developer (Right) */}
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className={styles.experienceItem}
            >
              <div
                className={styles.experienceLeft}
                data-aos="fadeInLeft"
                data-aos-delay="200"
              >
                <div className={styles.experienceTitle}>Frontend Developer</div>
                <div className={styles.experienceDesc}>
                  Built responsive, high-performance websites by transforming design mockups into production-ready code. Enhanced frontend efficiency, ensured cross-browser compatibility, and maintained clean, modular code for seamless user experiences.
                </div>
              </div>
              <div
                className={styles.experienceRight}
                data-aos="fadeInRight"
                data-aos-delay="100"
              >
                <div className={styles.experienceIcon}>
                  <MdWork />
                </div>
                <div className={styles.experienceOrg}>OKmedia</div>
                <div className={styles.experienceDuration}>
                  July 2025 - Present
                </div>
              </div>
            </div>

            {/* Item 5 - Inrolin Frontend Developer (Left) */}
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className={styles.experienceItem}
            >
              <div
                className={styles.experienceLeft}
                data-aos="fadeInLeft"
                data-aos-delay="100"
              >
                <div className={styles.experienceIcon}>
                  <MdWork />
                </div>
                <div className={styles.experienceOrg}>Inrolin</div>
                <div className={styles.experienceDuration}>
                  October 2025
                </div>
              </div>
              <div
                className={styles.experienceRight}
                data-aos="fadeInRight"
                data-aos-delay="200"
              >
                <div className={styles.experienceTitle}>Frontend Developer</div>
                <div className={styles.experienceDesc}>
                 Converted design mockups into interactive, high-performance web pages optimized for fast loading and cross-browser compatibility.
                </div>
              </div>
            </div>

            {/* Item 4 - Lacheen Co (Right) */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className={styles.experienceItem}
            >
              <div
                className={styles.experienceLeft}
                data-aos="fadeInLeft"
                data-aos-delay="200"
              >
                <div className={styles.experienceTitle}>
                  Full Stack Developer
                </div>
                <div className={styles.experienceDesc}>
                  Developed a comprehensive e-commerce platform for Lacheen Co, handling all aspects from UX/UI research and design to full stack implementation. Created custom authentication with Google and credentials, implemented real-time notifications, order tracking system, and built both frontend and backend from scratch. This project showcased my ability to deliver end-to-end solutions with modern web technologies.
                </div>
              </div>
              <div
                className={styles.experienceRight}
                data-aos="fadeInRight"
                data-aos-delay="100"
              >
                <div className={styles.experienceIcon}>
                  <MdWork />
                </div>
                <div className={styles.experienceOrg}>Lacheen Co</div>
                <div className={styles.experienceDuration}>September 2025</div>
              </div>
            </div>

            {/* Item 3 - Advanced Frontend Development Div Academy (Left) */}
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className={styles.experienceItem}
            >
              <div
                className={styles.experienceLeft}
                data-aos="fadeInLeft"
                data-aos-delay="100"
              >
                <div className={styles.experienceIcon}>
                  <IoSchoolSharp />
                </div>
                <div className={styles.experienceOrg}>Div Academy</div>
                <div className={styles.experienceDuration}>
                  December 2024 - July 2025
                </div>
              </div>
              <div
                className={styles.experienceRight}
                data-aos="fadeInRight"
                data-aos-delay="200"
              >
                <div className={styles.experienceTitle}>Advanced Frontend Development</div>
                <div className={styles.experienceDesc}>
                  Completed an intensive frontend development program, acquiring hands-on experience with React, JavaScript, CSS, Tailwind, and other modern frontend tools. Built expertise in creating responsive, fast, and maintainable web applications.
                </div>
              </div>
            </div>

            {/* Item 6 - MBA in Finance (Right) */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className={styles.experienceItem}
            >
              <div
                className={styles.experienceLeft}
                data-aos="fadeInLeft"
                data-aos-delay="200"
              >
                <div className={styles.experienceTitle}>
                  Master of Business Administration (MBA) in Finance
                </div>
                <div className={styles.experienceDesc}>
                  Successfully completed an MBA in Finance, gaining in-depth theoretical and practical knowledge in financial analysis, investment decision-making, risk management, and corporate finance strategies. The program equipped me with strong analytical skills and strategic thinking necessary for effective decision-making in dynamic business environments.
                </div>
              </div>
              <div
                className={styles.experienceRight}
                data-aos="fadeInRight"
                data-aos-delay="100"
              >
                <div className={styles.experienceIcon}>
                  <IoSchoolSharp />
                </div>
                <div className={styles.experienceOrg}>Azerbaijan State University of Economics</div>
                <div className={styles.experienceDuration}>September 2023 - July 2025</div>
              </div>
            </div>

            {/* Item 7 - Modern Frontend Development EA Camp (Left) */}
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className={styles.experienceItem}
            >
              <div
                className={styles.experienceLeft}
                data-aos="fadeInLeft"
                data-aos-delay="100"
              >
                <div className={styles.experienceIcon}>
                  <IoSchoolSharp />
                </div>
                <div className={styles.experienceOrg}>EA Camp</div>
                <div className={styles.experienceDuration}>August 2023 - July 2024</div>
              </div>
              <div
                className={styles.experienceRight}
                data-aos="fadeInRight"
                data-aos-delay="200"
              >
                <div className={styles.experienceTitle}>Modern Frontend Development</div>
                <div className={styles.experienceDesc}>
                  Successfully completed a modern frontend development course, gaining practical skills in React, JavaScript, CSS, Tailwind, and other advanced frontend technologies. Developed proficiency in building responsive and high-performance web applications.
                </div>
              </div>
            </div>

            {/* Item 8 - Bachelor of Economy and Administration (Right) */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className={styles.experienceItem}
            >
              <div
                className={styles.experienceLeft}
                data-aos="fadeInLeft"
                data-aos-delay="200"
              >
                <div className={styles.experienceTitle}>Bachelor of Economy and Administration</div>
                <div className={styles.experienceDesc}>
                  Successfully completed a Bachelor's degree in Economy and Administration. Gained comprehensive knowledge in economic theories, management principles, finance, and business analysis during my studies.
                </div>
              </div>
              <div
                className={styles.experienceRight}
                data-aos="fadeInRight"
                data-aos-delay="100"
              >
                <div className={styles.experienceIcon}>
                  <IoSchoolSharp />
                </div>
                <div className={styles.experienceOrg}>Azerbaijan State University of Economics</div>
                <div className={styles.experienceDuration}>September 2019 - July 2023</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ResumeSection;
