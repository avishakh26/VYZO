// Rebuild styles.css after changing classes in index.html:
//   npx tailwindcss@3.4.17 -i ./tailwind.css -o ./styles.css --minify
// then bump the ?v= number on the styles.css link in index.html so browsers fetch the new file.
module.exports = {
  content: ['./index.html'],
    darkMode: "class",
    theme: {
      extend: {
        "colors": {
          "primary-fixed-dim": "#98da27",
          "surface-bright": "#38393c",
          "on-error-container": "#ffdad6",
          "on-surface": "#e2e2e5",
          "on-primary-fixed": "#121f00",
          "inverse-on-surface": "#2f3033",
          "on-background": "#e2e2e5",
          "tertiary-fixed-dim": "#7bd0ff",
          "surface-container-low": "#1a1c1e",
          "on-tertiary": "#00354a",
          "tertiary": "#def1ff",
          "on-tertiary-fixed": "#001e2c",
          "surface-dim": "#121416",
          "on-primary": "#213600",
          "outline": "#8c947c",
          "on-primary-container": "#416400",
          "inverse-primary": "#446900",
          "on-error": "#690005",
          "on-tertiary-container": "#006184",
          "inverse-surface": "#e2e2e5",
          "tertiary-container": "#9ddaff",
          "surface-variant": "#333537",
          "error-container": "#93000a",
          "outline-variant": "#424936",
          "error": "#ffb4ab",
          "background": "#121416",
          "secondary-fixed": "#6ffbbe",
          "on-surface-variant": "#c2cab0",
          "primary-container": "#a3e635",
          "on-secondary": "#003824",
          "on-secondary-fixed": "#002113",
          "on-tertiary-fixed-variant": "#004c69",
          "on-secondary-container": "#00311f",
          "primary": "#ccff80",
          "tertiary-fixed": "#c4e7ff",
          "surface-tint": "#98da27",
          "surface-container-lowest": "#0c0e10",
          "secondary-fixed-dim": "#4edea3",
          "on-secondary-fixed-variant": "#005236",
          "primary-fixed": "#b2f746",
          "surface-container": "#1e2022",
          "surface-container-highest": "#333537",
          "surface-container-high": "#282a2c",
          "secondary": "#4edea3",
          "on-primary-fixed-variant": "#334f00",
          "surface": "#121416",
          "secondary-container": "#00a572"
        },
        "borderRadius": {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "full": "9999px"
        },
        "spacing": {
          "space-xs": "0.25rem",
          "space-md": "1rem",
          "margin-tablet": "2rem",
          "space-xl": "2.5rem",
          "margin": "1rem",
          "gutter": "1.5rem",
          "space-lg": "1.5rem",
          "space-3xl": "6rem",
          "space-sm": "0.5rem",
          "gutter-desktop": "2rem",
          "space-2xl": "4rem",
          "margin-desktop": "4rem"
        },
        "fontFamily": {
          "sans": ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
          "body-sm": ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
          "display-hero": ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
          "headline-lg": ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
          "headline-lg-mobile": ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
          "body-lg": ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
          "label-caps": ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
          "headline-xl": ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
          "body-md": ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
          "label-md": ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
          "label-lg": ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
          "metric-display": ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
          "display-hero-mobile": ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
          "headline-xl-mobile": ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
          "headline-md": ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
          "headline-sm": ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"]
        },
        "fontSize": {
          "body-sm": [
            "14px",
            {
              "lineHeight": "20px",
              "letterSpacing": "0em",
              "fontWeight": "400"
            }
          ],
          "display-hero": [
            "72px",
            {
              "lineHeight": "80px",
              "letterSpacing": "-0.035em",
              "fontWeight": "800"
            }
          ],
          "headline-lg": [
            "40px",
            {
              "lineHeight": "48px",
              "letterSpacing": "-0.025em",
              "fontWeight": "700"
            }
          ],
          "headline-lg-mobile": [
            "28px",
            {
              "lineHeight": "36px",
              "letterSpacing": "-0.02em",
              "fontWeight": "700"
            }
          ],
          "body-lg": [
            "18px",
            {
              "lineHeight": "28px",
              "letterSpacing": "-0.01em",
              "fontWeight": "400"
            }
          ],
          "label-caps": [
            "11px",
            {
              "lineHeight": "16px",
              "letterSpacing": "0.08em",
              "fontWeight": "700"
            }
          ],
          "headline-xl": [
            "56px",
            {
              "lineHeight": "64px",
              "letterSpacing": "-0.03em",
              "fontWeight": "700"
            }
          ],
          "body-md": [
            "16px",
            {
              "lineHeight": "24px",
              "letterSpacing": "-0.005em",
              "fontWeight": "400"
            }
          ],
          "label-md": [
            "12px",
            {
              "lineHeight": "16px",
              "letterSpacing": "0.03em",
              "fontWeight": "600"
            }
          ],
          "label-lg": [
            "14px",
            {
              "lineHeight": "20px",
              "letterSpacing": "0.01em",
              "fontWeight": "600"
            }
          ],
          "metric-display": [
            "48px",
            {
              "lineHeight": "52px",
              "letterSpacing": "-0.03em",
              "fontWeight": "800"
            }
          ],
          "display-hero-mobile": [
            "40px",
            {
              "lineHeight": "48px",
              "letterSpacing": "-0.025em",
              "fontWeight": "800"
            }
          ],
          "headline-xl-mobile": [
            "32px",
            {
              "lineHeight": "40px",
              "letterSpacing": "-0.02em",
              "fontWeight": "700"
            }
          ],
          "headline-md": [
            "28px",
            {
              "lineHeight": "36px",
              "letterSpacing": "-0.02em",
              "fontWeight": "600"
            }
          ],
          "headline-sm": [
            "20px",
            {
              "lineHeight": "28px",
              "letterSpacing": "-0.015em",
              "fontWeight": "600"
            }
          ]
        }
      },
    },
  };
