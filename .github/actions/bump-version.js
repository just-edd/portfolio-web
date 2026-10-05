const versionFile = await Bun.file('./portfolio/src/version.ts').text();
const newVersion = process.env.TGT_RELEASE_VERSION;

const newFileContent = versionFile.replace( /VERSION\s*=\s*["'].*["']/, `VERSION = "${newVersion}"` );

await Bun.write('./portfolio/src/version.ts', newFileContent);