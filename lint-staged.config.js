module.exports = {
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit',
  '**/*(ts|tsx|j)': (filenames) => {
    ;`npx eslint --fix ${filenames.join(
      ' '
    )}``npx eslint --write ${filenames.join(' ')}`
  },
}

// module.exports = {
//     "**/*.(ts|tsx)": () => "npx tsc --noEmit",
//     "**/*(ts|tsx|j)": (filenames) => {
//       return [
//         `npx eslint --fix ${filenames.join(" ")}`,
//         `npx eslint --write ${filenames.join(" ")}`,
//       ];
//     },
//   };
