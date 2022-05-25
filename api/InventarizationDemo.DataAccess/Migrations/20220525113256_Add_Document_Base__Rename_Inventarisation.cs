using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InventarizationDemo.Persistence.Migrations
{
    public partial class Add_Document_Base__Rename_Inventarisation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InventarizationPositions_Inventarizations_InventarizationId",
                table: "InventarizationPositions");

            migrationBuilder.DropTable(
                name: "Inventarizations");

            migrationBuilder.CreateTable(
                name: "InventarizationDocuments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Open = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InventarizationDocuments", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_InventarizationPositions_InventarizationDocuments_InventarizationId",
                table: "InventarizationPositions",
                column: "InventarizationId",
                principalTable: "InventarizationDocuments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InventarizationPositions_InventarizationDocuments_InventarizationId",
                table: "InventarizationPositions");

            migrationBuilder.DropTable(
                name: "InventarizationDocuments");

            migrationBuilder.CreateTable(
                name: "Inventarizations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Open = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Inventarizations", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_InventarizationPositions_Inventarizations_InventarizationId",
                table: "InventarizationPositions",
                column: "InventarizationId",
                principalTable: "Inventarizations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
