using Microsoft.EntityFrameworkCore;

public sealed class GetManyLocalizationsHandler : IQueryHandler<GetManyLocalizationsQuery, IEnumerable<Localization>>
{
    private readonly ApplicationDbContext applicationDbContext;

    public GetManyLocalizationsHandler(ApplicationDbContext applicationDbContext)
    {
        this.applicationDbContext = applicationDbContext;
    }
    public async Task<IEnumerable<Localization>> Handle(GetManyLocalizationsQuery request, CancellationToken cancellationToken)
    {
        return (await applicationDbContext.Localizations.ToListAsync(cancellationToken)).OrderBy(x => x.Id);
    }
}
