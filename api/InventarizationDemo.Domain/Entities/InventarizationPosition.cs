public sealed class InventarizationPosition : EntityBase
{
    public double Quantity { get; set; }
    public DateTime Date { get; set; }
    public Item Item { get; set; }
    public Inventarization Inventarization { get; set; }
    public Localization Localization { get; set; }

    public int ItemId { get; set; }
    public int InventarizationId { get; set; }
    public int LocalizationId { get; set; }
}
