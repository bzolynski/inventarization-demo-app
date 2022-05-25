using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InventarizationDemo.Persistence.Migrations
{
    public partial class Remove_Name_Add_Document_Number : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "InventarizationDocuments",
                newName: "Number");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Number",
                table: "InventarizationDocuments",
                newName: "Name");
        }
    }
}
