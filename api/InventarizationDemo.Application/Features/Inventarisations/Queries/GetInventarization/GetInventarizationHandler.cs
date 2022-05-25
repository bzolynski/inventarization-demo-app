using Microsoft.EntityFrameworkCore;

public sealed class GetInventarizationHandler : IQueryHandler<GetInventarizationQuery, InventarisationDocument>
{
    private readonly ApplicationDbContext applicationDbContext;

    public GetInventarizationHandler(ApplicationDbContext applicationDbContext)
    {
        this.applicationDbContext = applicationDbContext;
    }
    public async Task<InventarisationDocument> Handle(GetInventarizationQuery request, CancellationToken cancellationToken)
    {
        return await applicationDbContext.InventarizationDocuments.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
    }
}
