using Microsoft.EntityFrameworkCore.ChangeTracking;

public sealed class CreateInventarizationPositionHandler : ICommandHandler<CreateInventarizationPositionCommand, InventarizationPosition>
{
    private readonly ApplicationDbContext applicationDbContext;

    public CreateInventarizationPositionHandler(ApplicationDbContext applicationDbContext)
    {
        this.applicationDbContext = applicationDbContext;
    }
    public async Task<InventarizationPosition> Handle(CreateInventarizationPositionCommand request, CancellationToken cancellationToken)
    {
        EntityEntry<InventarizationPosition> result = await applicationDbContext.InventarizationPositions.AddAsync(request.InventarizationPosition, cancellationToken);
        await applicationDbContext.SaveChangesAsync(cancellationToken);
        return result.Entity;
    }
}
