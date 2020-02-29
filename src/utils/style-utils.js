const hexToRgb = hex => {
  // http://stackoverflow.com/a/5624139
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b
  })

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null
}

export const rgba = (hex, alpha) => {
  const color = hexToRgb(hex)
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`
}

export const resetButton = () => `
  border: none;
  outline: 0;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;

  &::-moz-focus-inner {
      border: 0;
      padding: 0;
  }

  &:hover {
    cursor: pointer;
  }
`

export const generalEditButton = () => `
  font-size: 1.4rem;
  color: #fff;
  background: #3fc1c9;
  border-radius: 4px;
  font-weight: 500;
  padding: 4px 10px;
  line-height: 1;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  margin-left: 15px;
  span {
    line-height: 1.1;
    display: inline-block;
    margin-left: 5px;
  }
`
export const headerNewButton = () => `
  color: #fff;
  background: #3fc1c9;
  border-radius: 4px;
  font-size: 1.4rem;
  padding: 5px 15px;
  margin-right: 10px;
`
