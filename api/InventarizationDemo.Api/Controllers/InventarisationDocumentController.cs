using Microsoft.AspNetCore.Mvc;

public class InventarisationDocumentController : BaseController
{
    [HttpPost("create")]
    public async Task<IActionResult> Create(InventarisationDocument createRequest)
    {
        return Ok(await Mediator.Send(new CreateInventarisationCommand(createRequest)));
    }

    [HttpPost("get")]
    public async Task<IActionResult> Get()
    {
        return Ok(await Mediator.Send(new GetManyInventarizationsQuery()));
    }

    [HttpPost("get/{id}")]
    public async Task<IActionResult> Get(int id)
    {
        return Ok(await Mediator.Send(new GetInventarizationQuery(id)));
    }
}
