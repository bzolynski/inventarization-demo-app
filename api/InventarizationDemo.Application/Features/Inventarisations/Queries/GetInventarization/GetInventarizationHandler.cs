using Microsoft.EntityFrameworkCore;

public sealed class GetInventarizationHandler : IQueryHandler<GetInventarizationQuery, Inventarization>
{
    private readonly ApplicationDbContext applicationDbContext;

    public GetInventarizationHandler(ApplicationDbContext applicationDbContext)
    {
        this.applicationDbContext = applicationDbContext;
    }
    public async Task<Inventarization> Handle(GetInventarizationQuery request, CancellationToken cancellationToken)
    {
        return await applicationDbContext.Inventarizations.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
    }
}
