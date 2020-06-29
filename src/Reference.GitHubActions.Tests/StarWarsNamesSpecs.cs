using System;
using System.Collections.Generic;
using FluentAssertions;
using Xunit;

namespace Reference.GitHubActions.Tests
{
    public class star_wars_names
    {
        [Fact]
        public void must_contain_luke_skywalker() =>
            new StarWarsNames().All().Should().Contain("Luke Skywalker");

        [Fact]
        public void disallows_less_than_one_random_character()
        {
            Action retrievingLessThanOneRandomCharacter = () => new StarWarsNames().Random(0);

            retrievingLessThanOneRandomCharacter
                .Should()
                .Throw<ArgumentOutOfRangeException>()
                .WithMessage($"numberOfCharacters must be between 1 and {TotalNumberOfCharacters()} inclusive.*")
                .And.ParamName.Should().Be("numberOfCharacters");
        }

        [Fact]
        public void disallows_more_random_characters_than_available()
        {
            Action retrievingMoreRandomCharactersThanContainedInAll =
                () => new StarWarsNames().Random(TotalNumberOfCharacters() + 1);

            retrievingMoreRandomCharactersThanContainedInAll
                .Should()
                .Throw<ArgumentOutOfRangeException>()
                .WithMessage($"numberOfCharacters must be between 1 and {TotalNumberOfCharacters()} inclusive.*")
                .And.ParamName.Should().Be("numberOfCharacters");
        }

        [Fact]
        public void must_return_one_of_the_characters_available_when__a_random_character() =>
            new StarWarsNames().Random().Should().BeOneOf(AllCharacters());

        [Fact]
        public void must_return_the_number_of_characters_asked_for_when__multiple_random_characters_() =>
            new StarWarsNames().Random(3).Should().HaveCount(3);

        [Fact]
        public void must_return_distinct_characters_when__multiple_random_characters() =>
            new StarWarsNames().Random(TotalNumberOfCharacters()).Should().OnlyHaveUniqueItems();

        private static IReadOnlyList<string> AllCharacters() => new StarWarsNames().All();
        private static int TotalNumberOfCharacters() => AllCharacters().Count;
    }
}
