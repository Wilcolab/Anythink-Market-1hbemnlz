#stina's_code
  chain_prompt.js
function toKebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Split camelCase
        .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
        .toLowerCase(); // Convert to lowercase
}
