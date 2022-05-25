using Microsoft.EntityFrameworkCore;

public sealed class GetManyInventarizationsHandler : IQueryHandler<GetManyInventarizationsQuery, IEnumerable<Inventarization>>
{
    private readonly ApplicationDbContext applicationDbContext;

    public GetManyInventarizationsHandler(ApplicationDbContext applicationDbContext)
    {
        this.applicationDbContext = applicationDbContext;
    }
    public async Task<IEnumerable<Inventarization>> Handle(GetManyInventarizationsQuery request, CancellationToken cancellationToken)
    {
        return await applicationDbContext.Inventarizations.ToListAsync(cancellationToken);
    }
}
