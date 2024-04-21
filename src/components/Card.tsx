import type { Experience } from "@assets/experience";
import type { BlogFrontmatter } from "@content/_schemas";
import { Fragment } from "react";

export interface Props {
  href?: string;
  target?: string;
  frontmatter?: BlogFrontmatter;
  secHeading?: boolean;
  experience?: Experience;
}

export default function Card({
  href,
  target,
  frontmatter,
  experience,
  secHeading = true,
}: Props) {
  if (frontmatter) {
    const { title, description } = frontmatter;

    return (
      <li className="my-6">
        <a
          href={href}
          target={target}
          className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        >
          {secHeading ? (
            <h2 className="text-lg font-medium decoration-dashed hover:underline">
              {title}
            </h2>
          ) : (
            <h3 className="text-lg font-medium decoration-dashed hover:underline">
              {title}
            </h3>
          )}
        </a>
        <p>{description}</p>
      </li>
    );
  }

  if (experience) {
    const { title, period, achievements, href, company } = experience;

    return (
      <li className="my-6">
        <a
          href={href}
          target={"_blank"}
          className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        >
          {secHeading ? (
            <h2 className="text-lg font-medium decoration-dashed hover:underline">
              {company} | {period}
            </h2>
          ) : (
            <h3 className="text-lg font-medium decoration-dashed hover:underline">
              {company} | {period}
            </h3>
          )}
        </a>
        <p>{title}</p>
        {achievements.map((achievement, index) => {
          return (
            <Fragment>
              <li>{achievement}</li>
              {index < achievements.length - 1 ? <br /> : null}
            </Fragment>
          );
        })}
      </li>
    );
  }

  return null;
}
