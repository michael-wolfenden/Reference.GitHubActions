var fs = require('fs')

var verifyNugetTokenExists = () => {
  if (
    process.env.NUGET_API_KEY == null ||
    process.env.NUGET_API_KEY === '$(NUGET_API_KEY)'
  )
    throw new Error(
      'A NuGet api key (https://www.nuget.org/account/apikeys) must be created and set in the NUGET_API_KEY environment variable on your CI environment.',
    )
}

var verifyNugetPackageExists = (pluginConfig) => {
  if (pluginConfig.dryRun) return

  var nugetPackages = fs
    .readdirSync(__dirname)
    .filter((filename) => filename.endsWith('.nupkg'))

  if (nugetPackages.length === 0)
    throw new Error(`Could not find a nuget package to publish in ${__dirname}`)
}

module.exports = {
  verifyConditions: [
    verifyNugetTokenExists,
    verifyNugetPackageExists,
    '@semantic-release/changelog',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
  prepare: [
    '@semantic-release/changelog',
    {
      path: '@semantic-release/git',
      message:
        'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    },
  ],
  publish: [
    {
      path: '@semantic-release/github',
      assets: '*.*nupkg',
    },
    {
      path: '@semantic-release/exec',
      cmd: `dotnet nuget push *.nupkg -k ${process.env.NUGET_API_KEY} -s https://api.nuget.org/v3/index.json`,
    },
  ],
}
var fs = require('fs')

var verifyNugetTokenExists = () => {
  if (
    process.env.NUGET_API_KEY == null ||
    process.env.NUGET_API_KEY === '$(NUGET_API_KEY)'
  )
    throw new Error(
      'A NuGet api key (https://www.nuget.org/account/apikeys) must be created and set in the NUGET_API_KEY environment variable on your CI environment.',
    )
}

var verifyNugetPackageExists = (pluginConfig) => {
  if (pluginConfig.dryRun) return

  var nugetPackages = fs
    .readdirSync(__dirname)
    .filter((filename) => filename.endsWith('.nupkg'))

  if (nugetPackages.length === 0)
    throw new Error(`Could not find a nuget package to publish in ${__dirname}`)
}

module.exports = {
  verifyConditions: [
    verifyNugetTokenExists,
    verifyNugetPackageExists,
    '@semantic-release/changelog',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
  prepare: [
    '@semantic-release/changelog',
    {
      path: '@semantic-release/git',
      message:
        'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    },
  ],
  publish: [
    {
      path: '@semantic-release/github',
      assets: '*.*nupkg',
    },
    {
      path: '@semantic-release/exec',
      cmd: `dotnet nuget push *.nupkg -k ${process.env.NUGET_API_KEY} -s https://api.nuget.org/v3/index.json`,
    },
  ],
}
