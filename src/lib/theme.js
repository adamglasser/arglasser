/**
 * Theme utility for consistent color usage throughout the application
 * Use these constants instead of direct CSS variable references for better type safety and consistency
 */

// Primary Color Palette
export const COLORS = {
  // Primary colors
  primary: 'var(--coniferous-green)',
  primaryRgb: 'var(--coniferous-green-rgb)',
  background: 'var(--volcanic-black)',
  backgroundRgb: 'var(--volcanic-black-rgb)',
  
  // Secondary colors
  secondary: 'var(--mushroom-grey)',
  secondaryRgb: 'var(--mushroom-grey-rgb)',
  secondaryDark: 'var(--mushroom-grey-dark)',
  secondaryDarkRgb: 'var(--mushroom-grey-dark-rgb)',
  
  // Accent colors
  accent: 'var(--simulated-coral)',
  accentRgb: 'var(--simulated-coral-rgb)',
  accent2: 'var(--acrylic-blue)',
  accent2Rgb: 'var(--acrylic-blue-rgb)',
  neutral: 'var(--synthetic-quartz)',
  neutralRgb: 'var(--synthetic-quartz-rgb)',
  
  // Text on background combinations
  textOnPrimary: 'var(--text-on-green)',
  textOnPrimaryRgb: 'var(--text-on-green-rgb)',
  textOnBackground: 'var(--text-on-black)',
  textOnBackgroundRgb: 'var(--text-on-black-rgb)',
  textOnSecondary: 'var(--text-on-grey)',
  textOnSecondaryRgb: 'var(--text-on-grey-rgb)',
  textOnAccent: 'var(--text-on-coral)',
  textOnAccentRgb: 'var(--text-on-coral-rgb)',
  textOnNeutral: 'var(--text-on-quartz)',
  textOnNeutralRgb: 'var(--text-on-quartz-rgb)',
  textOnAccent2: 'var(--text-on-blue)',
  textOnAccent2Rgb: 'var(--text-on-blue-rgb)',
}

/**
 * Helper function to create RGB color with opacity
 * @param {string} rgbVar - The RGB CSS variable (without 'var()')
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} - rgba color string
 */
export function rgba(rgbVar, opacity) {
  return `rgba(var(${rgbVar}), ${opacity})`
}

/**
 * Predefined color combinations for common UI elements
 */
export const COLOR_SCHEMES = {
  // Button color schemes
  button: {
    primary: {
      background: COLORS.primary,
      text: COLORS.textOnPrimary,
      hoverBackground: COLORS.accent,
      hoverText: COLORS.textOnAccent,
    },
    secondary: {
      background: COLORS.neutral,
      text: COLORS.textOnNeutral,
      hoverBackground: COLORS.accent2,
      hoverText: COLORS.textOnAccent2,
    },
    accent: {
      background: COLORS.accent,
      text: COLORS.textOnAccent,
      hoverBackground: COLORS.accent2,
      hoverText: COLORS.textOnAccent2,
    },
  },
  
  // Section color schemes
  section: {
    light: {
      background: COLORS.neutral,
      text: COLORS.textOnNeutral,
      heading: COLORS.primary,
      subtext: COLORS.secondaryDark,
    },
    dark: {
      background: COLORS.background,
      text: COLORS.textOnBackground,
      heading: COLORS.textOnBackground,
      subtext: COLORS.secondary,
    },
    brand: {
      background: COLORS.primary,
      text: COLORS.textOnPrimary,
      heading: COLORS.textOnPrimary,
      subtext: rgba('--text-on-green-rgb', 0.8),
    },
  },
}

export default COLORS 