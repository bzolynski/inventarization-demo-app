public sealed class DoesItemExistsHandler : IQueryHandler<DoesItemExistsQuery, bool>
{
    private readonly ApplicationDbContext applicationDbContext;

    public DoesItemExistsHandler(ApplicationDbContext applicationDbContext)
    {
        this.applicationDbContext = applicationDbContext;
    }
    public Task<bool> Handle(DoesItemExistsQuery request, CancellationToken cancellationToken)
    {
        return Task.FromResult(applicationDbContext.Items.Any(i => i.Code == request.Code));
    }
}
