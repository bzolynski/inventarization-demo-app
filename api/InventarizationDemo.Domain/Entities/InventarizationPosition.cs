public sealed class InventarizationPosition : EntityBase
{
    public double Quantity { get; set; }
    public DateTime Date { get; set; }
    public Item Item { get; set; }
    public InventarisationDocument Document { get; set; }
    public Localization Localization { get; set; }

    public int ItemId { get; set; }
    public int DocumentId { get; set; }
    public int LocalizationId { get; set; }
}
