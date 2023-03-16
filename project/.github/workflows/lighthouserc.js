// module.exports = {
//     ci: {
//       upload: {
//         target: 'temporary-public-storage',
//       },
//     },
//   };
module.exports = {
ci: {
    collect: {
    staticDistDir: './',
    },
    assert: {
        preset: 'lighthouse:recommended',
    },
    upload: {
    target: 'temporary-public-storage',
    },
},
};