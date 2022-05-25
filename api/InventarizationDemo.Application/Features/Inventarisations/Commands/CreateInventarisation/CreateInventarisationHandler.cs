using Microsoft.EntityFrameworkCore.ChangeTracking;

public sealed class CreateInventarisationHandler : ICommandHandler<CreateInventarisationCommand, int>
{
    private readonly ApplicationDbContext applicationDbContext;

    public CreateInventarisationHandler(ApplicationDbContext applicationDbContext)
    {
        this.applicationDbContext = applicationDbContext;
    }
    public async Task<int> Handle(CreateInventarisationCommand request, CancellationToken cancellationToken)
    {
        request.Inventarization.State = DocumentState.Pending;
        request.Inventarization.Type = DocumentType.Inventarisation;
        request.Inventarization.Date = DateTime.Today;
        EntityEntry<InventarisationDocument> result = await applicationDbContext.AddAsync(request.Inventarization, cancellationToken);
        await applicationDbContext.SaveChangesAsync(cancellationToken);
        return result.Entity.Id;
    }
}

