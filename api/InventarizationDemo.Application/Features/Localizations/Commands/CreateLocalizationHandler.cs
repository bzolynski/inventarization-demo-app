using Microsoft.EntityFrameworkCore.ChangeTracking;

public sealed class CreateLocalizationHandler : ICommandHandler<CreateLocalizationCommand, int>
{
    private readonly ApplicationDbContext applicationDbContext;

    public CreateLocalizationHandler(ApplicationDbContext applicationDbContext)
    {
        this.applicationDbContext = applicationDbContext;
    }
    public async Task<int> Handle(CreateLocalizationCommand request, CancellationToken cancellationToken)
    {
        EntityEntry<Localization> result = await applicationDbContext.Localizations.AddAsync(request.Localization, cancellationToken);
        await applicationDbContext.SaveChangesAsync(cancellationToken);
        return result.Entity.Id;
    }
}
