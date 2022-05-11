using Microsoft.AspNetCore.Mvc;

public class ItemController : BaseController
{
    [HttpPost("create")]
    public async Task<ActionResult<Item>> Create(Item createRequest)
    {
        return await Mediator.Send(new CreateItemCommand(createRequest));
    }

    [HttpGet("get-by-code/{code}")]
    public async Task<ActionResult<Item>> Get(string code)
    {
        return await Mediator.Send(new GetItemByCodeQuery(code));
    }


    [HttpGet("does-item-exists/{code}")]
    public async Task<ActionResult<bool>> DoesItemExists(string code)
    {

        List<Item> items = new List<Item>();
        return await Mediator.Send(new DoesItemExistsQuery(code));
    }
}
