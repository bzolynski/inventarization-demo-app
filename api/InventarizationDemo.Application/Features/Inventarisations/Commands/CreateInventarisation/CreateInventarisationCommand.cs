
public sealed record CreateInventarisationCommand(InventarisationDocument Inventarization) : ICommand<int>;
