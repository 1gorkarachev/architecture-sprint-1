declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  import React = require('react')

  const src: React.FC<React.SVGProps<SVGSVGElement>>
  export default src
}
