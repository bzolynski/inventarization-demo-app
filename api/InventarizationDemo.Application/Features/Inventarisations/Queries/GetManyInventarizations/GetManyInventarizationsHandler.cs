using Microsoft.EntityFrameworkCore;

public sealed class GetManyInventarizationsHandler : IQueryHandler<GetManyInventarizationsQuery, IEnumerable<InventarisationDocument>>
{
    private readonly ApplicationDbContext applicationDbContext;

    public GetManyInventarizationsHandler(ApplicationDbContext applicationDbContext)
    {
        this.applicationDbContext = applicationDbContext;
    }
    public async Task<IEnumerable<InventarisationDocument>> Handle(GetManyInventarizationsQuery request, CancellationToken cancellationToken)
    {
        return await applicationDbContext.InventarizationDocuments.ToListAsync(cancellationToken);
    }
}
