import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, theFroggers } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: theFroggers.title,
    description: theFroggers.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(theFroggers.title)}`,
    path: theFroggers.path,
  });
}

export default function TheFroggers() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={theFroggers.path}
        title={theFroggers.title}
        description={theFroggers.description}
        image={`/api/og/generate?title=${encodeURIComponent(theFroggers.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Projects />
    </Column>
  );
}
