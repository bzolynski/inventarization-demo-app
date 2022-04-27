using Microsoft.EntityFrameworkCore.ChangeTracking;

public sealed class CreateItemHandler : ICommandHandler<CreateItemCommand, Item>
{
    private readonly ApplicationDbContext applicationDbContext;

    public CreateItemHandler(ApplicationDbContext applicationDbContext)
    {
        this.applicationDbContext = applicationDbContext;
    }
    public async Task<Item> Handle(CreateItemCommand request, CancellationToken cancellationToken)
    {
        if (applicationDbContext.Items.Any(i => i.Code == request.Item.Code))
            throw new StatusCodeException($"Item with code { request.Item.Code } exists", System.Net.HttpStatusCode.BadRequest);
        EntityEntry<Item> result = await applicationDbContext.Items.AddAsync(request.Item);
        await applicationDbContext.SaveChangesAsync();
        return result.Entity;
    }
}
