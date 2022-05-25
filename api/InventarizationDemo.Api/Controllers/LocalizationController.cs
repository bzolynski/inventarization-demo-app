using Microsoft.AspNetCore.Mvc;

public class LocalizationController : BaseController
{
    [HttpPost("create")]
    public async Task<ActionResult<int>> Create(Localization localization)
    {
        return await Mediator.Send(new CreateLocalizationCommand(localization));
    }

    [HttpGet("get")]
    public async Task<ActionResult<IEnumerable<Localization>>> Get()
    {
        return Ok(await Mediator.Send(new GetManyLocalizationsQuery()));
    }
}
