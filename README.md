# Reference.GitHubActions

![Build Status](https://github.com/michael-wolfenden/Reference.GitHubActions/workflows/CI/badge.svg)
[![nuget](https://img.shields.io/nuget/v/Reference.GitHubActions.svg)](https://www.nuget.org/packages/Reference.GitHubActions/)
[![nuget downloads](https://img.shields.io/nuget/dt/Reference.GitHubActions.svg)](https://www.nuget.org/packages/Reference.GitHubActions/)
[![github last commit](https://img.shields.io/github/last-commit/michael-wolfenden/Reference.GitHubActions.svg)](https://github.com/michael-wolfenden/Reference.GitHubActions)
[![github license](https://img.shields.io/github/license/michael-wolfenden/Reference.GitHubActions.svg)](https://github.com/michael-wolfenden/Reference.GitHubActions/blob/master/LICENSE.md)
[![Code of Conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg)](https://github.com/michael-wolfenden/Reference.GitHubActions/blob/master/CODE_OF_CONDUCT.md)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![dependabot](https://img.shields.io/badge/Dependabot-enabled-green.svg?logo=dependabot&style=flat)](https://dependabot.com/)

NET Standard library reference implementation built via GitHub Actions.

![Reference.GitHubActions](assets/logo.png)

## Motivation

To serve as a reference for building a NET Standard library with a [CI/CD](https://en.wikipedia.org/wiki/CI/CD) pipeline provided by [GitHub Actions](https://github.com/features/actions).

### Features

- [x] Automatic Versioning, [Publishing](https://github.com/michael-wolfenden/Reference.GitHubActions/releases) and [Changelog](https://github.com/michael-wolfenden/Reference.GitHubActions/blob/master/CHANGELOG.md) generation using [semantic-release](https://github.com/semantic-release/semantic-release)
- [x] [Strong Naming](https://docs.microsoft.com/en-us/dotnet/standard/library-guidance/strong-naming#create-strong-named-net-libraries)
- [x] [SourceLink](https://github.com/dotnet/sourcelink/) support
- [x] Performs Windows, Linux and macOS builds using [GitHub Actions](https://github.com/features/actions) and [Cake](https://cakebuild.net/)
- [x] Testing via [xUnit.net](https://xunit.github.io/)
- [x] [Nullable reference types](https://docs.microsoft.com/en-us/dotnet/csharp/nullable-references) support
- [x] [EditorConfig](https://docs.microsoft.com/en-us/visualstudio/ide/create-portable-custom-editor-options) support
- [x] Follows Microsoft's  [open-source library guidance](https://docs.microsoft.com/en-us/dotnet/standard/library-guidance/)

## Access tokens

`semantic-release` requires both a **GitHub** and **NuGet** authentication token to be made available via the `GITHUB_TOKEN` and `NUGET_API_KEY` environment variables. The `GITHUB_TOKEN` will be provided by GitHub Actions. You will need to provide the `NUGET_API_KEY` using the instructions below.

### NUGET_API_KEY
This token is used to authenticate with NuGet to push packages.

Create a [new api key](https://www.nuget.org/account/apikeys) with following scopes:

![api key scopes](https://i.imgur.com/0iNGQ6V.png "api key scopes")

### Using the NuGet Api Key with GitHub Actions

Once you have the NuGet Api Key, you can add  `NUGET_API_KEY` as an [encypted secret](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository) in the settings of you repository.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/michael-wolfenden/Reference.GitHubActions/tags).

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/michael-wolfenden/Reference.GitHubActions/blob/master/LICENSE.md) file for details

## Acknowledgments

* This is a port of the [original project](https://github.com/kentcdodds/starwars-names) by [Kent C. Dodds](https://kentcdodds.com/)
* Icons made by [Smashicons](https://www.flaticon.com/authors/smashicons) from [www.flaticon.com](https://www.flaticon.com) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)
