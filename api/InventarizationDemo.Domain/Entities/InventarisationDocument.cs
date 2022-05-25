public sealed class InventarisationDocument : DocumentBase
{
    public InventarisationDocument()
    {
        Positions = new HashSet<InventarizationPosition>();
    }

    public string Name { get; set; }
    public bool Open { get; set; }
    public ICollection<InventarizationPosition> Positions { get; set; }
}
