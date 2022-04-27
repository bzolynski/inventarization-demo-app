using Microsoft.EntityFrameworkCore;

public sealed class GetItemByCodeHandler : IQueryHandler<GetItemByCodeQuery, Item>
{
    private readonly ApplicationDbContext applicationDbContext;

    public GetItemByCodeHandler(ApplicationDbContext applicationDbContext)
    {
        this.applicationDbContext = applicationDbContext;
    }
    public async Task<Item> Handle(GetItemByCodeQuery request, CancellationToken cancellationToken)
    {
        Item item = await applicationDbContext.Items.FirstOrDefaultAsync(i => i.Code == request.Code, cancellationToken);
        if (item is null)
            throw new StatusCodeException($"Item with code {request.Code} does not exist!");
        return item;
    }
}
