export default function Tile({ children, className = "" }) {
  return <div className={`tile ${className}`.trim()}>{children}</div>;
}
