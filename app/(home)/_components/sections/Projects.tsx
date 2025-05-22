import Item from "@/app/(home)/_components/Item";
import SectionTitle from "@/app/(home)/_components/SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 space-y-10 group/section">
      <SectionTitle>Projects</SectionTitle>
      <Item
        date="2023 – 2024"
        image="/projects/webtech.png"
        title="WebTech"
        link="https://webtech.network"
        subtitle="Pontifical Catholic University of Minas Gerais"
        skills={[
          "JavaScript",
          "SQL",
          "Node.js",
          "Next.js",
          "TailwindCSS",
          "Docker",
        ]}
      >
        <p>
          It was an honor to volunteer for the WebTech extension project for one
          year. I was responsible for developing the project's website and
          contributed to other initiatives as well.
        </p>
      </Item>
      <Item
        date="2024"
        image="/projects/boutique-das-carnes.png"
        title="Boutique das Carnes"
        link="https://github.com/lucaazalim/boutique-das-carnes"
        subtitle="Interdisciplinary Project: Web Applications"
        skills={[
          "JavaScript",
          "SQL",
          "MariaDB",
          "Node.js",
          "Sequelize",
          "React",
          "Next.js",
          "TailwindCSS",
          "Docker",
        ]}
      >
        <p>
          Along with my team, I developed a web application that allowed
          Boutique das Carnes to manage its operation, including inventory
          management and order processing.
        </p>
      </Item>
      <Item
        date="2024"
        image="/projects/novas.png"
        title="Novas"
        link="https://github.com/lucaazalim/novas"
        subtitle="Personal Project"
        skills={[
          "JavaScript",
          "SQL",
          "MariaDB",
          "Node.js",
          "Sequelize",
          "React",
          "Next.js",
          "TailwindCSS",
          "Docker",
        ]}
      >
        <p>
          Novas is an open-source news website built with Next.js and
          TailwindCSS. It uses the News API to fetch the latest news from around
          the world.{" "}
        </p>
      </Item>
      <Item
        date="2023"
        image="/projects/morada.png"
        title="Morada"
        link="https://github.com/lucaazalim/tiapn-morada"
        subtitle="Interdisciplinary Project: Applications for Business Processes"
        skills={[
          "Java",
          "Spring Boot",
          "Docker",
          "Grafana",
          "HTML",
          "CSS",
          "Bootstrap 5",
        ]}
      >
        <p>
          Morada is a platform for property rental and listing that streamlines
          the rental process for both tenants and landlords, offering an
          efficient, centralized solution for listings, processes, and
          documentation.
        </p>
      </Item>
    </section>
  );
}
