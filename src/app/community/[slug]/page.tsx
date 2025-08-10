import { notFound } from "next/navigation";
import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, blog } from "@/resources";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { CustomMDX } from "@/components/mdx";

interface PostPageProps {
  params: {
    slug: string;
  };
}

function getPostBySlug(slug: string) {
  try {
    const postsDirectory = join(process.cwd(), "src/app/blog/posts");
    const fullPath = join(postsDirectory, `${slug}.mdx`);
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

function getAllPosts() {
  const postsDirectory = join(process.cwd(), "src/app/blog/posts");
  const filenames = readdirSync(postsDirectory);
  return filenames.map((name) => ({
    slug: name.replace(/\.mdx$/, ""),
  }));
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  const { title, summary } = post.metadata;

  return Meta.generate({
    title,
    description: summary,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(title)}`,
    path: `${blog.path}/${params.slug}`,
  });
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { title, summary } = post.metadata;

  return (
    <Column maxWidth="m">
      <Schema
        as="article"
        baseURL={baseURL}
        path={`${blog.path}/${params.slug}`}
        title={title}
        description={summary}
        image={`/api/og/generate?title=${encodeURIComponent(title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <CustomMDX source={post.content} />
    </Column>
  );
}
