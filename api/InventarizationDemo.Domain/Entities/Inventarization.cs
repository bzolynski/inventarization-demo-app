public sealed class Inventarization : EntityBase
{
    public Inventarization()
    {
        Positions = new HashSet<InventarizationPosition>();
    }

    public string Name { get; set; }
    public bool Open { get; set; }
    public ICollection<InventarizationPosition> Positions { get; set; }
}
