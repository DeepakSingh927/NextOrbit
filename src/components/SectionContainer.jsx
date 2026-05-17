/**
 * Shared horizontal rhythm (6% gutters, max-width) and optional vertical section padding.
 */
export default function SectionContainer({
  children,
  className = '',
  as: Tag = 'div',
  padding = 'default',
  width = 'default',
  ...rest
}) {
  const classes = [
    'section-container',
    width === 'wide' && 'section-container--wide',
    width === 'narrow' && 'section-container--narrow',
    padding === 'default' && 'section-padding-y',
    padding === 'compact' && 'section-padding-y section-padding-y--compact',
    padding === 'none' && '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
