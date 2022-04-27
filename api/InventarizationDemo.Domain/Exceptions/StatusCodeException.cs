using System.Net;

public sealed class StatusCodeException : Exception
{
    public StatusCodeException(string errorMessage)
    {
        ErrorMessage = errorMessage;
        StatusCode = HttpStatusCode.BadRequest;
    }
    public StatusCodeException(string errorMessage, HttpStatusCode statusCode)
    {
        ErrorMessage = errorMessage;
        StatusCode = statusCode;
    }

    public HttpStatusCode StatusCode { get; }
    public string ErrorMessage { get; }
}
