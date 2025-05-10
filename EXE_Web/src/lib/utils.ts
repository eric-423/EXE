// Utility function to conditionally join class names
export function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

// Bootstrap-specific utilities
export function getVariant(variant: string) {
  return `btn-${variant}`;
}

export function getSize(size: 'sm' | 'md' | 'lg') {
  if (size === 'md') return '';
  return `btn-${size}`;
}

export function mapVariant(variant: string) {
  const variantMap: Record<string, string> = {
    default: 'primary',
    destructive: 'danger',
    outline: 'outline-primary',
    secondary: 'secondary',
    ghost: 'link',
    link: 'link'
  };
  
  return variantMap[variant] || variant;
}