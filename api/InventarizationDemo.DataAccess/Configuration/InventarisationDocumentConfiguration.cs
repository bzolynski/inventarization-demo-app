using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public sealed class InventarisationDocumentConfiguration : IEntityTypeConfiguration<InventarisationDocument>
{
    public void Configure(EntityTypeBuilder<InventarisationDocument> builder)
    {
        builder.Ignore(x => x.Type);
    }
}
