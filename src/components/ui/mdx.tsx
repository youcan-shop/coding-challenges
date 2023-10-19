import { cn } from "@/lib/utils";
import { useMDXComponent } from "next-contentlayer/hooks";

interface MDXProps {
  code: string;
}

const components: Record<string, React.FC<any>> = {
  h1: ({ className, ...props }) => (
    <h1
      {...props}
      className={cn(
        "text-4xl border-b scroll-m-20 font-heading font-bold text-primary",
        className,
      )}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      {...props}
      className={cn(
        "text-2xl font-heading border-b scroll-m-20 tracking-tight font-semibold mt-12 first:mt-0 pb-4 text-primary",
        className,
      )}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      {...props}
      className={cn(
        "text-xl font-heading  scroll-m-20 tracking-tight font-semibold mt-6 text-primary",
        className,
      )}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      {...props}
      className={cn(
        "text-lg font-heading  scroll-m-20 tracking-tight font-semibold mt-6 text-primary",
        className,
      )}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      {...props}
      className={cn(
        "text-lg font-heading  scroll-m-20 tracking-tight font-semibold mt-6 text-primary",
        className,
      )}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      {...props}
      className={cn(
        "text-base font-heading  scroll-m-20 tracking-tight font-semibold mt-6 text-primary",
        className,
      )}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      {...props}
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      {...props}
      className={cn("font-medium underline underline-offset-4", className)}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "relative mb-4 mt-6 max-h-[640px] overflow-x-auto rounded-lg border p-4 !bg-black text-sm font-mono text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "relative rounded bg-black/10 px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul {...props} className={cn("my-6 ml-6 list-disc", className)} />
  ),
  ol: ({ className, ...props }) => (
    <ol {...props} className={cn("my-6 ml-6 list-disc", className)} />
  ),
};

const MDX: React.FC<MDXProps> = ({ code }) => {
  const Component = useMDXComponent(code);
  return (
    <div className="mdx break-words">
      <Component components={components} />
    </div>
  );
};

export default MDX;
