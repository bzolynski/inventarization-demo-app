public sealed class InventarisationDocument : DocumentBase
{
    public InventarisationDocument()
    {
        Positions = new HashSet<InventarizationPosition>();
    }

    public bool Open { get; set; }
    public ICollection<InventarizationPosition> Positions { get; set; }
}
