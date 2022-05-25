using System.Reflection;
using Microsoft.EntityFrameworkCore;

public sealed class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<InventarisationDocument> InventarizationDocuments { get; set; }
    public DbSet<InventarizationPosition> InventarizationPositions { get; set; }
    public DbSet<Item> Items { get; set; }
    public DbSet<Localization> Localizations { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }

}
