using Microsoft.AspNetCore.Mvc;

public class InventarizationPositionController : BaseController
{
    [HttpPost("create")]
    public async Task<ActionResult<InventarizationPosition>> Create(InventarizationPosition createRequest)
    {
        return await Mediator.Send(new CreateInventarizationPositionCommand(createRequest));
    }
}
