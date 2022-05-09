export const createRoute = (title, to, style) => (
  <a href={`${to}`} style={style}>
    {title}
  </a>
);
