import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export const components = {
  h1(props) {
    const { node, ...rest } = props;
    return <h2 {...rest} className="text-2xl font-semibold"></h2>;
  },
  p(props) {
    const { node, ...rest } = props;
    return <p {...rest} className="hyphens-auto leading-snug"></p>;
  },
  h2(props) {
    const { node, ...rest } = props;
    return <h3 {...rest} className="text-xl font-semibold"></h3>;
  },
  ul(props) {
    const { node, ...rest } = props;
    return <ul {...rest} className="list-disc ml-6"></ul>;
  },
  ol(props) {
    const { node, ...rest } = props;
    return <ul {...rest} className="list-decimal ml-6"></ul>;
  },
  li(props) {
    const { node, ...rest } = props;
    return <li {...rest} className="text-base"></li>;
  },
  code(props) {
    const { children, className, node, ...rest } = props;
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <SyntaxHighlighter
        {...rest}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        language={match[1]}
        style={dracula}
      />
    ) : (
      <code {...rest} className={className}>
        {children}
      </code>
    );
  },
  blockquote(props) {
    const { node, ...rest } = props;
    return (
      <blockquote
        {...rest}
        className="border-l-4 border-zinc-400 text-shark-600 pl-4"
      ></blockquote>
    );
  },
};
