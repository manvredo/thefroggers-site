import { notFound } from "next/navigation";
import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, theFroggers } from "@/resources";
import { MDXRemote } from "next-mdx-remote/rsc";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { CustomMDX } from "@/components/mdx";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

function getProjectBySlug(slug: string) {
  try {
    const projectsDirectory = join(process.cwd(), "src/app/theFroggers/projects");
    const fullPath = join(projectsDirectory, `${slug}.mdx`);
    const fileContents = readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      metadata: data,
      content,
    };
  } catch (error) {
    return null;
  }
}

function getAllProjects() {
  const projectsDirectory = join(process.cwd(), "src/app/theFroggers/projects");
  const filenames = readdirSync(projectsDirectory);
  return filenames.map((name) => ({
    slug: name.replace(/\.mdx$/, ""),
  }));
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {};
  }

  const { title, summary, images } = project.metadata;
  const ogImage = images?.[0] || `/api/og/generate?title=${encodeURIComponent(title)}`;

  return Meta.generate({
    title,
    description: summary,
    baseURL: baseURL,
    image: ogImage,
    path: `${theFroggers.path}/${params.slug}`,
  });
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { title, summary, images } = project.metadata;

  return (
    <Column maxWidth="m">
      <Schema
        as="article"
        baseURL={baseURL}
        path={`${theFroggers.path}/${params.slug}`}
        title={title}
        description={summary}
        image={images?.[0] || `/api/og/generate?title=${encodeURIComponent(title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <CustomMDX source={project.content} />
    </Column>
  );
}
