public enum DocumentType
{
    Inventarisation
}

public enum DocumentState
{
    Pending,
    Accepted,
    Canceled
}

public class DocumentBase : EntityBase
{
    public string Number { get; set; }
    public DocumentType Type { get; set; }
    public DocumentState State { get; set; }
    public DateTime Date { get; set; }
}
