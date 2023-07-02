import Technology from './Technology';
import { data } from './data';

export default function AboutMe() {
  const technologies = data.map((tech) => {
    return (
      <Technology
        key={tech.id}
        src={tech.src}
        alt={tech.alt}
        name={tech.name}
      ></Technology>
    );
  });
  return (
    <section>
      <article>
        <h2>About Me</h2>
        <p>
          Enthusiastic, responsible and self-taught web developer who wants to
          learn web technologies and grow up professionally. I’ve knowledge in
          the following technologies.
        </p>
        <ul>
          {technologies}
          <button className='bg-accent text-lightMode font-light flex space-x-2 items-center p-3 rounded'>
            Download CV
          </button>
        </ul>
      </article>
    </section>
  );
}
