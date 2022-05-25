public sealed record CreateLocalizationCommand(Localization Localization) : ICommand<int>;
