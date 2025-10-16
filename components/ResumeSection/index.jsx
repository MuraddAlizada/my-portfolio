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
            {/* Experience Item 1 - Markup Agency */}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className={styles.experienceItem}
            >
              {/* Left Column – Icon & Details */}
              <div
                className={styles.experienceLeft}
                data-aos="fadeInLeft"
                data-aos-delay="100"
              >
                <div className={styles.experienceIcon}>
                  <MdWork />
                </div>
                <div className={styles.experienceOrg}>Upwork</div>
                <div className={styles.experienceDuration}>
                  November 2024 - Present
                </div>
              </div>
              {/* Right Column – Title & Description */}
              <div
                className={styles.experienceRight}
                data-aos="fadeInRight"
                data-aos-delay="200"
              >
                <div className={styles.experienceTitle}>Frontend Developer</div>
                <div className={styles.experienceDesc}>
                Collaborated with international clients to convert design mockups into responsive, high-performance websites. Focused on optimizing frontend performance for fast load times and cross-browser compatibility. Maintained clear communication to deliver projects aligned with client expectations and ensured clean, maintainable code.
                </div>
              </div>
            </div>

            {/* Experience Item 2 - Meta's Advanced React Course */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className={styles.experienceItem}
            >
              {/* Right Column – Icon & Details */}

              {/* Left Column – Title & Description */}
              <div
                className={styles.experienceLeft}
                data-aos="fadeInLeft"
                data-aos-delay="200"
              >
                <div className={styles.experienceTitle}>
                  Advanced Fullstack Development
                </div>
                <div className={styles.experienceDesc}>
                 Participating  Advanced Full Stack Development course, with a focus on real-world application development using React, Express, and modern JavaScript tooling. Gaining practical experience in backend logic, state management, and scalable frontend design.
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
                <div className={styles.experienceOrg}>Div Academy </div>
                <div className={styles.experienceDuration}>February 2025 - Present </div>
              </div>
            </div>

            {/* Experience Item 3 - Lacheen Co */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className={styles.experienceItem}
            >
              {/* Left Column – Icon & Details */}
              <div
                className={styles.experienceLeft}
                data-aos="fadeInLeft"
                data-aos-delay="100"
              >
                <div className={styles.experienceIcon}>
                  <MdWork />
                </div>
                <div className={styles.experienceOrg}>Lacheen Co</div>
                <div className={styles.experienceDuration}>
                  April - June 2025
                </div>
              </div>
              {/* Right Column – Title & Description */}
              <div
                className={styles.experienceRight}
                data-aos="fadeInRight"
                data-aos-delay="200"
              >
                <div className={styles.experienceTitle}>
                  Full Stack E-commerce Project
                </div>
                <div className={styles.experienceDesc}>
                  Developed a comprehensive e-commerce platform for Lacheen Co,
                  handling all aspects from UX/UI research and design to full
                  stack implementation. Created custom authentication with
                  Google and credentials, implemented real-time notifications,
                  order tracking system, and built both frontend and backend
                  from scratch. This project showcased my ability to deliver
                  end-to-end solutions with modern web technologies.
                </div>
              </div>
            </div>

            {/* Experience Item 4 - BOOTCAMP - EACAMP */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className={styles.experienceItem}
            >
              {/* Right Column – Icon & Details */}

              {/* Left Column – Title & Description */}
              <div
                className={styles.experienceLeft}
                data-aos="fadeInLeft"
                data-aos-delay="200"
              >
                <div className={styles.experienceTitle}>
             Master of Business Administration (MBA) in Finance

                </div>
                <div className={styles.experienceDesc}>
                Successfully completed an MBA in Finance , gaining in-depth theoretical and practical knowledge in financial analysis, investment decision-making, risk management, and corporate finance strategies. The program equipped me with strong analytical skills and strategic thinking necessary for effective decision-making in dynamic business environments.
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

            {/* Experience Item 5 - Computer Science */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className={styles.experienceItem}
            >
              {/* Left Column – Icon & Details */}
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
              {/* Right Column – Title & Description */}
              <div
                className={styles.experienceRight}
                data-aos="fadeInRight"
                data-aos-delay="200"
              >
                <div className={styles.experienceTitle}>Modern Frontend Development
</div>
                <div className={styles.experienceDesc}>
         Successfully completed a modern frontend development course, gaining practical skills in React, JavaScript, CSS, Tailwind, and other advanced frontend technologies. Developed proficiency in building responsive and high-performance web applications.
                </div>
              </div>
            </div>

            {/* Experience Item 6 - Social Work */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className={styles.experienceItem}
            >
              <div className={styles.experienceLeft}>
                <div className={styles.experienceTitle}>Bachelor of Economy and Adminstration
</div>
                <div className={styles.experienceDesc}>
               Successfully completed a Bachelor’s degree in Economy and Administration. Gained comprehensive knowledge in economic theories, management principles, finance, and business analysis during my studies.
                </div>
              </div>
              <div className={styles.experienceRight}>
                <div className={styles.experienceIcon}>
                  <IoSchoolSharp />
                </div>
                <div className={styles.experienceOrg}>Azerbaijan State University of Economics</div>
                <div className={styles.experienceDuration}>September 2019 - July 2023 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ResumeSection;
